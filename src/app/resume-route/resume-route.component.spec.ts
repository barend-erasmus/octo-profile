import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeRouteComponent } from './resume-route.component';

describe('ResumeRouteComponent', () => {
  let component: ResumeRouteComponent;
  let fixture: ComponentFixture<ResumeRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
