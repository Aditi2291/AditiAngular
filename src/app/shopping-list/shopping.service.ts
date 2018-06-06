import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredients: Ingredient []=[new Ingredient('Apple', 5), new Ingredient('Tomato', 5)]

  getingredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredient){this.ingredients.push(ingredient)}

  constructor() { 

  }
}
