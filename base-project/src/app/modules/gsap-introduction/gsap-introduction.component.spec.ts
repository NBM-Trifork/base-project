import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapIntroductionComponent } from './gsap-introduction.component';

describe('GsapIntroductionComponent', () => {
  let component: GsapIntroductionComponent;
  let fixture: ComponentFixture<GsapIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsapIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsapIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
