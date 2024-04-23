# Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## generate karma file 

ng g config karma
[CREATE karma.conf.js (1314 bytes)
UPDATE angular.json (4710 bytes)]

1. [Jasmine](https://jasmine.github.io/)
2. [Karma](https://karma-runner.github.io/latest/index.html)
3. [Angular Unit Testing: Jasmine & Karma Step-by-Step](https://medium.com/swlh/angular-unit-testing-jasmine-karma-step-by-step-e3376d110ab4)
4. [Testing AngularJS with Protractor and Karma](https://mherman.org/blog/testing-angularjs-with-protractor-and-karma-part-1/)

## run unit test cases command

ng test 

## generate coverage of your test cases into the file

or, ng test --code-coverage 
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

