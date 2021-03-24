import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details.component';
import {LoadingModule} from "../../../loading/loading.module";
import {PipesModule} from "../../../pipes/pipes.module";
import {IngredientSpecialsModule} from "../ingredient-specials/ingredient-specials.module";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [RecipeDetailsComponent],
  imports: [
    CommonModule,
    LoadingModule,
    PipesModule,
    IngredientSpecialsModule,
    MatButtonModule,
    RouterModule
  ]
})
export class RecipeDetailsModule { }
