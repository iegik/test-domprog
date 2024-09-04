import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookFormComponent } from '../components/book-form/book-form.component';
import { BookShelfComponent } from '../components/book-shelf/book-shelf.component';
import { BookProfileComponent } from '../components/book-profile/book-profile.component';


@NgModule({
  declarations: [
    BookFormComponent,
    BookShelfComponent,
    BookProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BookFormComponent,
    BookProfileComponent,
    BookShelfComponent
  ],
})
export class BookModule { }
