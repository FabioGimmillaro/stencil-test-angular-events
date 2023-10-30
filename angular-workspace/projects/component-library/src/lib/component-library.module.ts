import { APP_INITIALIZER, NgModule} from '@angular/core';
import { DIRECTIVES } from "./stencil-generated";

import { defineCustomElements } from 'test-angular-events/dist/loader';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    }
  ]
})
export class ComponentLibraryModule {
}
