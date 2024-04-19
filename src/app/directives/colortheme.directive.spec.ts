import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ColorthemeDirective } from './colortheme.directive';

@Component({
  template: `<div appColortheme></div>`
})
class TestComponent { }

describe('ColorthemeDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let divElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, ColorthemeDirective]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    divElement = fixture.debugElement.query(By.directive(ColorthemeDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
