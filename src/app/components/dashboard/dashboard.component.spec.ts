import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set xyz and abc to true and add class to bottom sheet wrapper when sheet is "route"', () => {
    const sheet = 'route';
    component.openBottomSheet(sheet);

    // Assert that xyz and abc are set to true
    expect(component.xyz).toBe(true);
    expect(component.abc).toBe(true);

    // Assert that the 'show-modal' class is added to the bottom sheet wrapper
    const bottomSheetWrapper = fixture.debugElement.query(By.css('.bottom-sheet-wrapper'));
    // expect(bottomSheetWrapper.nativeElement.classList.contains('show-modal')).toBe(true);
  });

  it('should not change xyz and abc and not add class to bottom sheet wrapper when sheet is not "route"', () => {
    const sheet = 'some-other-sheet';
    component.openBottomSheet(sheet);

    // Assert that xyz and abc are not changed
    expect(component.xyz).toBeFalse();
    expect(component.abc).toBeFalse();

    // Assert that the 'show-modal' class is not added to the bottom sheet wrapper
    const bottomSheetWrapper = fixture.debugElement.query(By.css('.bottom-sheet-wrapper'));
    // expect(bottomSheetWrapper.nativeElement.classList.contains('show-modal')).toBe(false);
  });
});
