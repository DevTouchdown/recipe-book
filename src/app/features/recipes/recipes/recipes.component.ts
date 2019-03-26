import { Component, OnInit } from '@angular/core';

import { Recipe } from 'src/app/shared/models';
import { RecipesService } from 'src/app/core/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipe: string;
  recipes: Array<Recipe> = [];

  constructor(private recipeService: RecipesService) { }

  ngOnInit() { }

  loadRecipes(): void {
    this.recipeService.getRecipes(`${this.recipe}`).subscribe(recipes => {
      if (recipes.results && recipes.results.length > 0) {
        this.recipes = recipes.results;
      } else {
        this.recipes = [];
      }
    }, error => {
      console.log('Unexpected error searching recipe in database: ', error);
    });
  }

  searchRecipes(recipe: string): void {
    if (recipe && recipe.trim().length > 2) {
      this.recipe = recipe;
      this.loadRecipes();
    } else {
      this.recipes = [];
    }
  }

}
