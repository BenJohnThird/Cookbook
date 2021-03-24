import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from './components/main-shell/main-shell.component';
import { ShellComponent } from './shell.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'cookbook',
        pathMatch: 'full'
      },
      {
        path: 'cookbook',
        component: MainShellComponent
      },
      {
        path: 'recipe/:id',
        component: RecipeDetailsComponent
      },
      {
        path: 'create-recipe',
        component: CreateRecipeComponent
      },
      {
        path: 'update-recipe/:id',
        component: CreateRecipeComponent
      },
      {
        path: '**',
        redirectTo: 'cookbook'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
