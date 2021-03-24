import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { CreateRecipeComponent } from './create-recipe.component';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '../../../loading/loading.module';

@NgModule({
  declarations: [CreateRecipeComponent],
  exports: [CreateRecipeComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoadingModule
  ],
  providers: [DatePipe]
})
export class CreateRecipeModule { }
