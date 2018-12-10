import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerStatComponent } from './banner-stat.component';

describe('BannerStatComponent', () => {
  let component: BannerStatComponent;
  let fixture: ComponentFixture<BannerStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
