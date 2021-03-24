import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadableIngredientsPipe } from './readable-ingredients.pipe';

@NgModule({
  declarations: [
    ReadableIngredientsPipe,
  ],
  exports: [
    ReadableIngredientsPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
