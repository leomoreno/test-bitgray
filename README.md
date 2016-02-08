# Front-end test for Bitgray

## Acerca

Esta una app demo para Bitgray, genera un perfil de usuario a partir de los datos tomados de [typicode.com](http://jsonplaceholder.typicode.com)

Esta app está usa la [Guía de Estilo de Angular de John Papa](https://github.com/johnpapa/angular-styleguide)

## Esta app usa una serie de tecnologías opensource pra funcionar:

  * [AngularJS](https://angularjs.org) - Superheroic JavaScript MVW Framework
  * [Angular Material](https://material.angularjs.org/latest/) - Google's Material Design Specification
  * [node-sass](https://github.com/sass/node-sass) - Node.js bindings to libsass
  * [node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine
  * [Gulp](http://gulpjs.com/) - The streaming build system
  * [Jasmine](http://jasmine.github.io/) - DOM-less simple JavaScript testing framework
  * [Karma](https://karma-runner.github.io/) - Spectacular Test Runner for JavaScript


## Desarrollar local

### Clonar repositorio:

```sh
$ git clone https://github.com/leomoreno/test-bitgray.git
```
### Instalar dependencias npm:

```sh
$ npm install
```

###  Instalar dependencias Front-end:

```sh
$ bower install
```

### Usar Gulp para ejecutar

* `gulp` or `gulp build` para hacer build de una versión optimozada de la applicación en `/dist`
* `gulp serve` para lanzar un browser sync server a partir de los archivos fuente
* `gulp serve:dist` para lanzar un server a partir de la versión optimizada
* `gulp test` para lanzar los unit tests con Karma
* `gulp test:auto` para lanzar los unit tests con Karma en watch mode
* `gulp protractor` para lanzar los e2e tests con Protractor
* `gulp protractor:dist` para lanzar los e2e tests con Protractor en la versión optimizada `/dist`

### Créditos

Las imagenes utilizadas fueron tomadas de [pixabay.com](https://c/es/vidrio-resumen-refracci%C3%B3n-hacer-1076855/)
