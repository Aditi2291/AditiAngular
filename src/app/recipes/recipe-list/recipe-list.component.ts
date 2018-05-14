import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe
    ('Dosa','description of Dosa','http://www.hoyummy.com/wp-content/uploads/2010/02/P1020759.jpg'), new Recipe
    ('Dosa','description of Dosa','http://www.hoyummy.com/wp-content/uploads/2010/02/P1020759.jpg')];

    constructor() { }

  ngOnInit() 
  {}

}
