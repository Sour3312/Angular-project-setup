import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appColortheme]'
})
export class ColorthemeDirective implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.applyThemeClasses();
  }

  private applyThemeClasses() {
    const rootElement = document.documentElement;
    rootElement.classList.add('app-theme', `$app1-theme`);
  }
}
