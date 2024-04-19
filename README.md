## generate karma file 

ng g config karma

this will help you:
1. [Jasmine](https://jasmine.github.io/)
2. [Karma](https://karma-runner.github.io/latest/index.html)
3. [Angular Unit Testing: Jasmine & Karma Step-by-Step](https://medium.com/swlh/angular-unit-testing-jasmine-karma-step-by-step-e3376d110ab4)

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

