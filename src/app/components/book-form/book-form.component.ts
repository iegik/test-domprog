import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { v4 as uuidv4 } from 'uuid';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  @Input() book: Book = { id: '', author: '', title: '', year: null, pages: null };
  isEditMode = false;
  isSaved = false;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    if (this.book.id) {
      this.isEditMode = true;
    }
  }

  onSubmit() {
    if (this.isSaved) return;
    if (this.isEditMode) {
      this.bookService.editBook(this.book);
    } else {
      const id = uuidv4()
      this.bookService.addBook({ ...this.book, id });
      this.isSaved = true;
    }
  }
}
