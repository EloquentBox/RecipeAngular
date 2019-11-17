import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple recipe', 'https://www.chilipeppermadness.com/wp-content/uploads/2019/03/Peri-Peri-Sauce-Recipe1.jpg'),
    new Recipe('A Test Recipe', 'This is a simple recipe', 'https://www.chilipeppermadness.com/wp-content/uploads/2019/03/Peri-Peri-Sauce-Recipe1.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
