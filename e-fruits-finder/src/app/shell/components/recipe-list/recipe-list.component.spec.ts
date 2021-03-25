import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListComponent } from './recipe-list.component';
import {RecipeListModule} from "./recipe-list.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ProductsService} from "../../../services/products.service";
import {ProductsServiceMock} from "../../../testing/products.service.mock";
import {By} from "@angular/platform-browser";
import {RECIPES} from "../../../testing/recipe.mock";
import {RouterTestingModule} from "@angular/router/testing";

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListComponent ],
      imports: [
        RecipeListModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: ProductsService, useClass: ProductsServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an equal length, displayed recipes and the fetched recipes', () => {
    const recipesEl = fixture.debugElement.queryAll(By.css('.ut-product-recipes'));
    expect(recipesEl.length)
      .toBe(RECIPES.length);
  });
});
