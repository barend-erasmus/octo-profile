import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateRouteComponent } from './corporate-route.component';

describe('CorporateRouteComponent', () => {
  let component: CorporateRouteComponent;
  let fixture: ComponentFixture<CorporateRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
