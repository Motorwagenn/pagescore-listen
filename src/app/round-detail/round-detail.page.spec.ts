import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoundDetailPage } from './round-detail.page';

describe('RoundDetailPage', () => {
  let component: RoundDetailPage;
  let fixture: ComponentFixture<RoundDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
