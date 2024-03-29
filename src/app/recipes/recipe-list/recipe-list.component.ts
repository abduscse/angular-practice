import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipesSubscription: Subscription;

  constructor(
    private recipeService: RecipeService, private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipesSubscription = this.recipeService.recipesChanges.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.recipesSubscription.unsubscribe();
  }

}
