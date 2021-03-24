import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainShellComponent } from './main-shell.component';
import { LandingContentModule } from '../landing-content/landing-content.module';
import { RecipeListModule } from '../recipe-list/recipe-list.module';

@NgModule({
  declarations: [MainShellComponent],
  imports: [
    CommonModule,
    LandingContentModule,
    RecipeListModule
  ]
})
export class MainShellModule { }
