import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

import { appConfig } from './app.config';
import { provideStore } from '@ngrx/store';
import * as appReducers from './store/reducers';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideStore(appReducers),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
