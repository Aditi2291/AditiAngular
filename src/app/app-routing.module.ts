import { NgModule, Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import{RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';


const appRoutes: Routes =  [ {path:'', redirectTo:'/recipes', pathMatch:'full' },
                             { path:'recipes', component:RecipesComponent,children:[                               
                              {path:'', component:RecipeStartComponent},
                             {path:':id', component:RecipeDetailComponent}
                            ]},
                             {path:'shopping-list', component:ShoppingListComponent}
<<<<<<< HEAD
=======
                             
>>>>>>> 3cf8cec705895e5c1d3800069405584d804c3bf5
                           ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  //  CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
