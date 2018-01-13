import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBaseComponent } from './resume-base.component';

describe('ResumeBaseComponent', () => {
  let component: ResumeBaseComponent;
  let fixture: ComponentFixture<ResumeBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
