## generate karma file 

ng g config karma

this will help you:
1. [Jasmine](https://jasmine.github.io/)
2. [Karma](https://karma-runner.github.io/latest/index.html)
3. [Angular Unit Testing: Jasmine & Karma Step-by-Step](https://medium.com/swlh/angular-unit-testing-jasmine-karma-step-by-step-e3376d110ab4)
4. [Testing AngularJS with Protractor and Karma](https://mherman.org/blog/testing-angularjs-with-protractor-and-karma-part-1/)

## run unit test cases command

ng test 

## generate coverage of your test cases into the file

<span style="background-color: yellow;">ng test --code-coverage</span>
or
you can set default true to codeCoverage in angular.json file
```json
"test": {
  "builder": "@angular-devkit/build-angular:karma",
  "options": {
    "polyfills": [
      "zone.js",
      "zone.js/testing"
    ],
    "tsConfig": "tsconfig.spec.json",
    "assets": [
      "src/favicon.ico",
      "src/assets"
    ],
    "styles": [
      "src/styles.css"
    ],
    "scripts": [],
    "karmaConfig": "karma.conf.js",
    "codeCoverage": true
  }
}
```
(it will check how much code covered by your written unit test cases)

## coverage summary :
Statements   : 100% ( 3/3 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 1/1 )
Lines        : 100% ( 2/2 )
above coverage should be more than 70% for passing the Sonar-Qube criteria.(>70% means a good code)

## refrence images:
![Alt text](src/assets/coverage%20less%20than%2070.png)
![Alt text](src/assets/coverage%20passed.png)
![Alt text](src/assets/zero%20covergae.png)

## jquery($) setup for unit testing in angular

```DashboardComponent > should set xyz and abc to true and add class to bottom sheet wrapper when sheet is "route"
ReferenceError: $ is not defined
    at DashboardComponent.openBottomSheet (http://localhost:9877/_karma_webpack_/webpack:/src/app/components/dashboard/dashboard.component.ts:23:7)
    at UserContext.apply (http://localhost:9877/_karma_webpack_/webpack:/src/app/components/dashboard/dashboard.component.spec.ts:27:15)
    at _ZoneDelegate.invoke (http://localhost:9877/_karma_webpack_/webpack:/node_modules/zone.js/fesm2015/zone.js:368:26)
    at ProxyZoneSpec.onInvoke (http://localhost:9877/_karma_webpack_/webpack:/node_modules/zone.js/fesm2015/zone-testing.js:273:39)
    at _ZoneDelegate.invoke (http://localhost:9877/_karma_webpack_/webpack:/node_modules/zone.js/fesm2015/zone.js:367:52)
    at Zone.run (http://localhost:9877/_karma_webpack_/webpack:/node_modules/zone.js/fesm2015/zone.js:130:43)
    at runInTestZone (http://localhost:9877/_karma_webpack_/webpack:/node_modules/zone.js/fesm2015/zone-testing.js:555:34)
    at UserContext.<anonymous> (http://localhost:9877/_karma_webpack_/webpack:/node_modules/zone.js/fesm2015/zone-testing.js:570:20)
    at <Jasmine>
```
you will get this error if jquery not setup in your project

setup:
first you need to install '@karma-jquery' package in your karma.conf.js

```
 plugins: [
      require('karma-jasmine'),
      require('karma-jquery'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],

npm install jquery --save
npm install karma-jquery --save-dev
```
add this to angular.json in test section
```
"scripts": [
              "node_modules/jquery/dist/jquery.min.js"
            ]
```

## unit test documentation for help
1: [angular-testing-resources](https://github.com/dinanathsj29/angular-unit-testing-jasmine-karma-tutorial?tab=readme-ov-file#9-angular-testing-resources)
2. [url](https://www.youtube.com/watch?v=o7N5JyhvKIY)
3. [blog](https://medium.com/@UlbertAO/unit-testing-in-angular-15-for-developers-66c3601b2e24)

```
A Angular Testing: Run Unit Tests
Commonly used Options
• --browsers= browser
• --code-coverage
• --karmaConfig=karmaConfig
• --main-main
• --configuration=configuration
• -progress=true|false

A Angular: How to Run E2E Tests
Commonly used Options
• --browsers= browser
• --baseUrl = baseUrl
• --specs
• --code-coverage 
• --host=host 
• --port=port
• --prod = true/false
• --protractorConfig=protractorConfig
• --suite-suite
• --main-main
• --configuration=configuration
```
## AAA concept in angular unit testing

``` Arrange Act Assert```

```
describe('AAAComponent', () => {
  // Arrange 
  let component: AAAComponent;
  let fixture: ComponentFixture<AAAComponent>;

  // Arrange 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AAAComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set xyz and abc to true and add class to bottom sheet wrapper when sheet is "route"', () => {
    // Act
    const sheet = 'route';
    component.openBottomSheet(sheet);

    // Assert 
    expect(component.xyz).toBe(true);
    expect(component.abc).toBe(true);
    const bottomSheetWrapper = fixture.debugElement.query(By.css('.bottom-sheet-wrapper'));
  });
});
```
