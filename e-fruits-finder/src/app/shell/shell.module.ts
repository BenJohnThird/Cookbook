import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';
import { MainShellModule } from './components/main-shell/main-shell.module';
import { ShellRoutingModule } from './shell-routing.module';
import { RecipeDetailsModule } from './components/recipe-details/recipe-details.module';
import { CreateRecipeModule } from './components/create-recipe/create-recipe.module';

@NgModule({
  declarations: [ShellComponent],
  exports: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainShellModule,
    RecipeDetailsModule,
    ShellRoutingModule,
    CreateRecipeModule
  ]
})
export class ShellModule { }
