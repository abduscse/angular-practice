import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    editMode = false;
    paramsSubscription: Subscription;
    id: number;
    recipeForm: FormGroup;
    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.paramsSubscription = this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
                this.initForm();
            }
        );
    }

    initForm() {
        let RecipeName = '';
        let imagePath = '';
        let description = '';
        let ingredients = new FormArray([]);
        if (this.editMode) {
            const recipeSelected = this.recipeService.getRecipeByIndex(this.id);
            RecipeName = recipeSelected.name;
            imagePath = recipeSelected.imagePath;
            description = recipeSelected.description;
            if (recipeSelected.ingredients) {
                for (let ingredient of recipeSelected.ingredients) {
                    ingredients.push(
                        new FormGroup({
                            'name': new FormControl(ingredient.name, Validators.required),
                            'amount': new FormControl(ingredient.amount, [
                                Validators.required,
                                Validators.pattern(/^[1-9]+[0-9]*$/)
                            ])
                        })
                    );
                }
            }
        }
        this.recipeForm = new FormGroup({
            'name': new FormControl(RecipeName, Validators.required),
            'imagePath': new FormControl(imagePath, Validators.required),
            'description': new FormControl(description, Validators.required),
            'ingredients': ingredients
        });
    }

    onSubmit() {
        if (this.editMode) {
            this.recipeService.updateRecipeByIndex(this.id, this.recipeForm.value);
        } else {
            this.recipeService.addNewRecipe(this.recipeForm.value);
        }
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    getControls() {
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }
    onAddIngredient() {
        const ingArray = (<FormArray>this.recipeForm.get('ingredients'));
        ingArray.push(
            new FormGroup({
                'name': new FormControl(null, Validators.required),
                'amount': new FormControl(null, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
        );
    }

    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    onDeleteIngredient(index: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

    }
    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

}
