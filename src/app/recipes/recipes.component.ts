import { Component, OnInit,Input} from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipesService) { }
      selectedRecipe:Recipe;
  ngOnInit() {

    this.recipeService.recipeSelected.subscribe(
          (recipe:Recipe)=>{
            this.selectedRecipe=recipe;
          }

    );
  }

}
