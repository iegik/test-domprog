import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookFormComponent } from '../components/book-form/book-form.component';
import { BookShelfComponent } from '../components/book-shelf/book-shelf.component';
import { BookProfileComponent } from '../components/book-profile/book-profile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BookFormComponent,
    BookProfileComponent,
    BookShelfComponent
  ],
})
export class BookModule { }
