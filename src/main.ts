import { enableProdMode } from '@angular/core';
/**
 * Platform platformBrowserDynamic lets angular to be compiled on the client browser
 * Platform platformBrowser ships to the client a compiled version
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/**
 * When making a production build environment gets replaced by environment.prod
 */
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/**
 * Bootstrapping angular and loading the main module "AppModule"
 */
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
