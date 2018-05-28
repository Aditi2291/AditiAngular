import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes: Recipe[] = [

    new Recipe('Dosa','description of Dosa','http://www.hoyummy.com/wp-content/uploads/2010/02/P1020759.jpg'), 
    new Recipe('Idli','description of Dosa','http://www.hoyummy.com/wp-content/uploads/2010/02/P1020759.jpg'),
    ];

    constructor() {}

    ngOnInit() 
    {}

   onRecipeSelected(recipe:Recipe){
   this.recipeWasSelected.emit(recipe)
   }
   
  }

