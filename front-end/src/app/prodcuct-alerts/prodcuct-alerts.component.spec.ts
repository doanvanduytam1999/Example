import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcuctAlertsComponent } from './prodcuct-alerts.component';

describe('ProdcuctAlertsComponent', () => {
  let component: ProdcuctAlertsComponent;
  let fixture: ComponentFixture<ProdcuctAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcuctAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcuctAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
