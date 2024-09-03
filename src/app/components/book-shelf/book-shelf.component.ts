import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { BookFilterPipe } from '../../pipes/book-filter.pipe';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-book-shelf',
  standalone: true,
  imports: [
    CommonModule,
    BookFilterPipe,
    FormsModule,
    BookFormComponent,
  ],
  templateUrl: './book-shelf.component.html',
  styleUrl: './book-shelf.component.css'
})
export class BookShelfComponent {
  books$: Observable<Book[]>;
  searchTerm: string = '';

  constructor(private store: Store<{ books: Book[] }>, private bookService: BookService) {
    this.books$ = store.select('books') || [];
  }

  ngOnInit() {
    this.bookService.loadBooks();
  }

  editBook(id: string) {
    // Implement the navigation to the edit page or show the edit form
  }

  removeBook(id: string) {
    this.bookService.removeBook(id);
  }
}
