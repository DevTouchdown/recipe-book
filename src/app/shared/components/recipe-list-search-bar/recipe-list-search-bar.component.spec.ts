import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListSearchBarComponent } from './recipe-list-search-bar.component';

describe('RecipeListSearchBarComponent', () => {
  let component: RecipeListSearchBarComponent;
  let fixture: ComponentFixture<RecipeListSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
