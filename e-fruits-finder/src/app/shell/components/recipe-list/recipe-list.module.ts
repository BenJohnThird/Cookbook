import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list.component';
import { LoadingModule } from '../../../loading/loading.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecipeListComponent],
  exports: [RecipeListComponent],
  imports: [
    CommonModule,
    LoadingModule,
    RouterModule,
    FormsModule
  ]
})
export class RecipeListModule { }
