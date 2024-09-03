import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../models/book';
import { addBook, editBook, removeBook } from '../book/book.actions';
import { BookShelf } from '../models/book-shelf';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private storageKey = 'books';

  constructor(private store: Store<BookShelf>) {}

  loadBooks() {
    const books = JSON.parse(localStorage.getItem(this.storageKey) || '[]') || [];
    books.forEach((book: Book) => this.store.dispatch(addBook({ book })));
  }

  saveBooks(books: Book[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(books));
  }

  addBook(book: Book) {
    this.store.dispatch(addBook({ book }));
    this.updateLocalStorage();
  }

  editBook(book: Book) {
    this.store.dispatch(editBook({ book }));
    this.updateLocalStorage();
  }

  removeBook(id: string) {
    this.store.dispatch(removeBook({ id }));
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    this.store.select('books').subscribe((books) => {
      if (!books) return;
      this.saveBooks(books);
    });
  }
}
