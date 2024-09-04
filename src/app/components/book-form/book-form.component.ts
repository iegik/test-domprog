import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';

const emptyBookFormValue = {
  title: '',
  author: '',
  year: '',
  pages: ''
}

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit, OnChanges {
  @Input() bookId?: string;
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService, private route: ActivatedRoute) {
    this.bookService.loadBooks();
    this.bookForm = this.fb.group<Omit<Book, 'id'>>(emptyBookFormValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookId']) {
      this.loadBook(changes['bookId'].currentValue);
    }
  }

  ngOnInit() {
    if (this.bookId) {
      this.loadBook(this.bookId);
    }
    this.route.paramMap.subscribe(params => {
      const bookId = params.get('id');
      if (bookId) this.loadBook(bookId);
    });
  }

  loadBook(id: string) {
    if (!id) {
      this.bookForm.setValue(emptyBookFormValue)
      return;
    }

    setTimeout(() => {
      if (this.bookId === id) return;
      this.bookId = id;
    }, 0);

    this.bookService.getBookById(id).subscribe((book) => {
      if (book?.id) {
        this.bookForm.patchValue({
          title: book.title,
          author: book.author,
          year: book.year,
          pages: book.pages
        });
      }
    });
  }

  onSubmit() {
    if (!this.bookForm.valid) return;
    if (this.bookId && this.bookForm.value) {
      this.bookService.editBook(this.bookForm.value);
    } else {
      this.bookService.addBook(this.bookForm.value);
    }
  }
}
