# Reproduces issue https://github.com/ionic-team/stencil/issues/5001

Consists of:
- A StencilJS project using version 4.6.0
- An Angular project wrapping the Stencil components using @stencil/angular-output-target

## Build steps to reproduce the issue

- Open terminal
- Navigate to StencilJS project: _cd stencil-component-starter_
- Run: _npm run build:reproduce_
- Open project in IDE
- Open angular-workspace/my-app/app.component.html
- => Error: Event testEvent is not emitted by any applicable directives nor by my-component element 