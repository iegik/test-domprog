import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import appReducers from './store/reducers';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducers),
  ]
})
export class AppModule { }
