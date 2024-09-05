import { Component, Input } from '@angular/core';
import { BookFormComponent } from '../book-form/book-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';

const emptyBookFormValue = {
  title: '',
  author: '',
  year: '',
  pages: ''
}

@Component({
  selector: 'app-book-profile',
  standalone: true,
  imports: [BookFormComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './book-profile.component.html',
  styleUrl: './book-profile.component.css',
})
export class BookProfileComponent {
  @Input() bookId?: string;
  value?: Omit<Book, 'id'>;
  constructor(private bookService: BookService, private route: ActivatedRoute){
    this.bookService.loadBooks();
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
      this.value = emptyBookFormValue
      return;
    }

    setTimeout(() => {
      if (this.bookId === id) return;
      this.bookId = id;
    }, 0);

    this.bookService.getBookById(id).subscribe((book) => {
      if (book?.id) {
        this.value = {
          title: book.title,
          author: book.author,
          year: book.year,
          pages: book.pages
        };
      }
    });
  }
}
