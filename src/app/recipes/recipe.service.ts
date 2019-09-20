import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipeService {
    recipesChanges = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe 1',
            'This is simply a test 1',
            'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg',
            [
                new Ingredient('Meat', 200),
                new Ingredient('Bun', 40)
            ]
        ),
        new Recipe(
            'A Test Recipe 2',
            'This is simply a test 2',
            'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg',
            [
                new Ingredient('Meat', 200),
                new Ingredient('Milk', 35)
            ]
        ),
        new Recipe(
            'A Test Recipe 3',
            'This is simply a test 3',
            'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg',
            [
                new Ingredient('Bun', 70),
                new Ingredient('Meat', 100)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addRecipeIngredientsToShoppingList(ingredients);
    }

    getRecipeByIndex(index) {
        return this.recipes.slice()[index];
    }
    updateRecipeByIndex(index, recipe) {
        this.recipes[index] = recipe;
        this.recipesChanges.next(this.recipes.slice());
    }
    addNewRecipe(recipe) {
        this.recipes.push(recipe);
        this.recipesChanges.next(this.recipes.slice());
    }
    deleteRecipeByIndex(index) {
        this.recipes.splice(index, 1);
        this.recipesChanges.next(this.recipes.slice());
    }
}
