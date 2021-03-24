import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientSpecialsComponent } from './ingredient-specials.component';

describe('IngredientSpecialsComponent', () => {
  let component: IngredientSpecialsComponent;
  let fixture: ComponentFixture<IngredientSpecialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientSpecialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientSpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
