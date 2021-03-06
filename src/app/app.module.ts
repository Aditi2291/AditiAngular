import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingService } from './shopping-list/shopping.service';

import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';
<<<<<<< HEAD
=======
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
>>>>>>> 3cf8cec705895e5c1d3800069405584d804c3bf5


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    DropdownDirective,
<<<<<<< HEAD
=======
    RecipeStartComponent,
>>>>>>> 3cf8cec705895e5c1d3800069405584d804c3bf5
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
