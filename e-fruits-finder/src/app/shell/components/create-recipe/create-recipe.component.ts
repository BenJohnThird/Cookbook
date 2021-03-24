import { Component, OnDestroy, OnInit } from '@angular/core';
import { Directions, Ingredients, ProductModel } from '../../../models/products-model';
import { DatePipe } from '@angular/common';
import { ProductsService } from '../../../services/products.service';
import { v4 as uuidv4 } from 'uuid';
import { Subscription } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit, OnDestroy {

  public recipe: ProductModel = {
    cookTime: null,
    description: '',
    directions: [
      {
        instructions: null,
        optional: null
      }
    ],
    editDate: '',
    // Just a default image
    images:  {
      full: '/img/queso_brat_scramble.jpg',
      medium: '/img/queso_brat_scramble--m.jpg',
      small: '/img/queso_brat_scramble--s.jpg'
    },
    ingredients: [
      {
        uuid: null,
        amount: null,
        measurement: null,
        name: null
      }
    ],
    postDate: '',
    prepTime: null,
    servings: null,
    title: '',
    uuid: ''
  };

  public isUpdateMode: boolean = false;

  private recipeId: string;

  private subscriptions: Subscription[] = [];

  constructor(private datePipe: DatePipe,
              private productsService: ProductsService,
              private ngxLoader: NgxUiLoaderService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    if (this.recipeId) {
      this.fetchRecipe(this.recipeId);
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }

  public addDirectionRow(): void {
    const defaultDirection: Directions = {
      instructions: null,
      optional: null
    };
    this.recipe.directions.push(defaultDirection);
  }

  public addIngredientsRow(): void {
    const defaultIngredients: Ingredients = {
      uuid: null,
      amount: null,
      measurement: null,
      name: null
    };
    this.recipe.ingredients.push(defaultIngredients);
  }

  public removeDirections(index: number): void {
    this.recipe.directions.splice(index, 1);
  }

  public removeIngredients(index: number): void {
    this.recipe.ingredients.splice(index, 1);
  }

  public createRecipe(): void {
    const todayDate = Date.now();
    this.recipe.postDate = this.datePipe.transform(todayDate, 'MM/dd/yyyy h:mm:ss a');
    this.recipe.editDate = this.datePipe.transform(todayDate, 'MM/dd/yyyy h:mm:ss a');
    this.recipe.uuid = uuidv4();

    this.ngxLoader.start();
    this.subscriptions.push(
      this.productsService
        .createRecipe(this.recipe)
        .subscribe(res => {
          this.router.navigate(['/']);
          this.ngxLoader.stop();
        })
    );
  }

  public updateRecipe(): void {
    const todayDate = Date.now();
    this.recipe.editDate = this.datePipe.transform(todayDate, 'MM/dd/yyyy h:mm:ss a');

    this.ngxLoader.start();
    this.subscriptions.push(
      this.productsService
        .saveRecipe(this.recipe)
        .subscribe(res => {
          this.router.navigate(['/']);
          this.ngxLoader.stop();
        })
    );
  }

  private fetchRecipe(recipeId: string): void {
    this.ngxLoader.start();
    this.subscriptions.push(
      this.productsService
        .getRecipeById(recipeId)
        .subscribe((recipes: ProductModel[]) => {
          this.ngxLoader.stop();
          if (recipes && recipes.length > 0) {
            this.recipe = recipes[0];
            this.isUpdateMode = true;
          }
        })
    );
  }

}
