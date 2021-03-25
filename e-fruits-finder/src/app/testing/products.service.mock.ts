import {Observable, of} from "rxjs";
import {ProductModel} from "../models/products-model";
import {SpecialsModel} from "../models/specials-model";
import {RECIPES} from "./recipe.mock";
import {SPECIAL_MOCK} from "./specials.mock";


export class ProductsServiceMock {

  public getRecipes(): Observable<ProductModel[]> {
    return of(RECIPES);
  }

  public getRecipeByName(recipeName: string): Observable<ProductModel[]> {
    return of(RECIPES);
  }

  public getRecipeById(id: string): Observable<ProductModel[]> {
    return of(RECIPES);
  }

  public getSpecials(): Observable<SpecialsModel[]> {
    return of(SPECIAL_MOCK);
  }

  public createRecipe(recipe: ProductModel): Observable<ProductModel> {
    return of(recipe);
  }

  public saveRecipe(recipe: ProductModel): Observable<ProductModel> {
    return of(recipe);
  }
}
