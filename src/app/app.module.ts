import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';




import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
  AppComponent,
  RecipeComponent,
  RecipeListComponent, RecipeItemComponent, RecipeDetailComponent, ShoppingListComponent,
  ShoppingListEditComponent,
  HeaderComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
