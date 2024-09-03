import { Component, Input, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private bookService: BookService) {}

  ngOnInit() {
    if (this.book.id) {
      this.isEditMode = true;
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.bookService.editBook(this.book);
    } else {
      this.book.id = uuidv4();
      this.bookService.addBook(this.book);
    }
  }
}
