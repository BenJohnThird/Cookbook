import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { ProductModel } from '../../../models/products-model';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SpecialsModel } from '../../../models/specials-model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {

  public productRecipe!: ProductModel;

  public specials: SpecialsModel[];

  public editMode: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductsService,
              private ngxLoader: NgxUiLoaderService,) {
  }

  public ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (!recipeId) {
      this.router.navigate(['']);
      return;
    }

    this.fetchSpecialsPromo();
    this.fetchRecipe(recipeId);
  }

  public ngOnDestroy(): void {
    // Best Practice: To eliminate data and memory leak
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }

  private fetchRecipe(recipeId: string): void {
    this.ngxLoader.start();
    this.subscriptions.push(
      this.productService
        .getRecipeById(recipeId)
        .subscribe((recipes: ProductModel[]) => {
          this.ngxLoader.stop();
          if (recipes && recipes.length > 0) {
            this.productRecipe = recipes[0];
          } else {
            this.router.navigate(['']);
          }
        })
    );
  }

  private fetchSpecialsPromo(): void {
    this.ngxLoader.start();
    this.subscriptions.push(
      this.productService
        .getSpecials()
        .subscribe((specialsModels: SpecialsModel[]) => {
          this.ngxLoader.stop();
          if (specialsModels) {
            console.log(specialsModels)
            this.specials = specialsModels;
          }
        })
    );
  }

}
