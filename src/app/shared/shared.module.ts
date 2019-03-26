import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeListSearchBarComponent } from './components/recipe-list-search-bar/recipe-list-search-bar.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeListSearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RecipeListComponent,
    RecipeListSearchBarComponent
  ]
})
export class SharedModule { }
