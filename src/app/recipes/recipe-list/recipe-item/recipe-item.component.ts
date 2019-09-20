import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Input() recipe: { name: string, description: string, imagePath: string };
  @Input() recipe: Recipe;
  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }

}
