import { Pipe, PipeTransform } from '@angular/core';
import { Ingredients } from '../models/products-model';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';

@Pipe({
  name: 'readableIngredients'
})
export class ReadableIngredientsPipe implements PipeTransform {

  public transform(value: Ingredients): string {
    if (value) {
      return `${this.returnEmptyForNull(value.amount)} ${value.measurement} ${value.name}`
    }0

    return 'Invalid Data';
  }

  public returnEmptyForNull(data: string | number): string | number {
    if (isNotNullOrUndefined(data)) {
      return data;
    }

    return '';
  }

}
