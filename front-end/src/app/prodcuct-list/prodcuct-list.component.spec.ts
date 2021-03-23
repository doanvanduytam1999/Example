import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcuctListComponent } from './prodcuct-list.component';

describe('ProdcuctListComponent', () => {
  let component: ProdcuctListComponent;
  let fixture: ComponentFixture<ProdcuctListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcuctListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcuctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
