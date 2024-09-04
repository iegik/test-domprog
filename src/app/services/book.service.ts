import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';

import { Book } from '../models/book';
import { addBook, editBook, removeBook } from '../book/book.actions';
import { BookShelf } from '../models/book-shelf';
import { selectAllBooks, selectBookById } from '../book/book.selectors';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private storageKey = 'books';

  constructor(private store: Store<BookShelf>) {}

  loadBooks() {
    if (typeof localStorage === 'undefined') return;
    const books = JSON.parse(localStorage.getItem(this.storageKey) || '[]') || [];
    books.forEach((book: Book) => this.store.dispatch(addBook({ book })));
  }

  saveBooks(books: Book[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(books));
  }

  addBook(book: Book) {
    const id = uuidv4()
    this.store.dispatch(addBook({ book: { ...book, id: id } }));
    this.updateLocalStorage();
  }

  getBookById(id: string) {
    return this.store.select(selectBookById(id));
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
    this.store.select(selectAllBooks).subscribe((books) => {
      if (!books) return;

      this.saveBooks(books);
    });
  }
}
