import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  recipeId: number;
  recipeSubscription: Subscription;
  constructor(
    private recipeService: RecipeService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.recipe = this.recipeService.getRecipeByIndex(this.recipeId);
      }
    );
  }

  toShoppingList(ingredients) {
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['../', this.recipeId, 'edit'], { relativeTo: this.route });
    // this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDelete() {
    this.recipeService.deleteRecipeByIndex(this.recipeId);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }
}
