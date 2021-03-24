import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientSpecialsComponent } from './ingredient-specials.component';

@NgModule({
  declarations: [IngredientSpecialsComponent],
  exports: [IngredientSpecialsComponent],
  imports: [
    CommonModule
  ]
})
export class IngredientSpecialsModule { }
