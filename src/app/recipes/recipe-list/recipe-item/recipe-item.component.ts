import { Component, OnInit, Input} from '@angular/core';
//import { EventEmitter } from 'protractor';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../recipes.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})


export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  //@Output() recipeSelected= new EventEmitter<void>();

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
   // this.recipeSelected.emit();
  }

}
