import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductModel } from '../../../models/products-model';
import { Subscription } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  public productRecipes: ProductModel[] = [];

  public filteredRecipe: string;

  private subscriptions: Subscription[] = [];

  constructor(public productsService: ProductsService,
              private ngxLoader: NgxUiLoaderService,) { }

  public ngOnInit(): void {
    this.ngxLoader.start();
    this.subscriptions.push(
      this.productsService
        .getRecipes()
        .subscribe((products: ProductModel[]) => {
          this.productRecipes = products;
          this.ngxLoader.stop();
        })
    );
  }

  public ngOnDestroy(): void {
    // Best Practice: To eliminate data/memory leaks
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }

  public searchRecipes(): void {
    this.ngxLoader.start();
    this.subscriptions.push(
      this.productsService
        .getRecipeByName(this.filteredRecipe)
        .pipe(debounceTime(1000))
        .subscribe((products: ProductModel[]) => {
          this.productRecipes = products;
          this.ngxLoader.stop();
        })
    )
  }

}
