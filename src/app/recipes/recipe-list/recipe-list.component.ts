import { Component, OnInit,Input} from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
 //@Output() recipeWasSelected= new EventEmitter<Recipe>();
  @Input() recipes: Recipe[] = [];

    constructor(private recipesService: RecipesService) {}

    ngOnInit() 
    {  
      this.recipes  = this.recipesService.getrecipe();
    }

   onRecipeSelected(recipe:Recipe){
   //this.recipeWasSelected.emit(recipe)
   }
   
  }

