import { Component, Input, OnInit } from '@angular/core';
import { SpecialsModel } from '../../../models/specials-model';
import { SpecialsType } from '../../../models/specials-model';

@Component({
  selector: 'app-ingredient-specials',
  templateUrl: './ingredient-specials.component.html',
  styleUrls: ['./ingredient-specials.component.scss']
})
export class IngredientSpecialsComponent implements OnInit {

  @Input()
  public ingredientId: string;

  @Input()
  public specialsPromo: SpecialsModel[] = [];

  public ingredientSpecial: SpecialsModel;

  public typeMode: SpecialsType;

  public specialsType = SpecialsType;

  constructor() { }

  public ngOnInit(): void {
    if (!this.specialsPromo || this.specialsPromo.length === 0) {
      return;
    }

    this.ingredientSpecial = this.specialsPromo.
      find((specials: SpecialsModel) => specials.ingredientId === this.ingredientId);

    if (this.ingredientSpecial) {
      this.typeMode = this.ingredientSpecial.type;
    }
  }

}
