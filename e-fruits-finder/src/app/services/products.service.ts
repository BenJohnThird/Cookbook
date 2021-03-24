import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/products-model';
import { SpecialsModel } from '../models/specials-model';
import { map } from 'rxjs/operators';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private env_route = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<ProductModel[]> {
    return this.http
      .get<ProductModel[]>(this.env_route + '/recipes');
  }

  public getRecipeByName(recipeName: string): Observable<ProductModel[]> {
    return this.http
      .get<ProductModel[]>(this.env_route + '/recipes')
      .pipe(
        map(products => {
          if (isNotNullOrUndefined(recipeName)) {
            return products.filter(products => products.title.toUpperCase().includes(recipeName.toUpperCase()));
          } else {
            return products;
          }
        })
      );
  }

  public getRecipeById(id: string): Observable<ProductModel[]> {
    return this.http
      .get<ProductModel[]>(this.env_route + '/recipes')
      .pipe(
        map(products => products.filter(product => product.uuid === id)),
      );
  }

  public getSpecials(): Observable<SpecialsModel[]> {
    return this.http
      .get<SpecialsModel[]>(this.env_route + '/specials');
  }

  public createRecipe(recipe: ProductModel): Observable<ProductModel> {
    console.log(recipe);
    return this.http
      .post<ProductModel>(this.env_route + '/recipes', recipe);
  }

  public saveRecipe(recipe: ProductModel): Observable<ProductModel> {
    return this.http
      .put<ProductModel>(this.env_route + '/recipes/' + recipe.uuid, recipe);
  }
}
