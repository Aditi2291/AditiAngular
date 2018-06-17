import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe-list/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected= new EventEmitter<Recipe>();
  private recipes: Recipe[] = [

    new Recipe('Dosa','description of Dosa','http://www.hoyummy.com/wp-content/uploads/2010/02/P1020759.jpg'), 
    new Recipe('Idli','description of Dosa','http://www.hoyummy.com/wp-content/uploads/2010/02/P1020759.jpg'),
    
  ];

  constructor() { }
   getrecipe(){
     return this.recipes.slice();
   }
   getRecipe(index:number){
     return this.recipes[index];
   }
}
