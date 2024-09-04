import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TuiButton, TuiGroup, TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { TuiBlock, TuiButtonClose } from '@taiga-ui/kit';
import { Observable } from 'rxjs';
import { TuiCardLarge, TuiCell } from '@taiga-ui/layout';

import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { BookFilterPipe } from '../../pipes/book-filter.pipe';
import { BookFormComponent } from '../book-form/book-form.component';
import { selectAllBooks } from '../../book/book.selectors';
import { AppState } from '../../app.config';

@Component({
  selector: 'app-book-shelf',
  standalone: true,
  imports: [
    CommonModule,
    BookFilterPipe,
    FormsModule,
    BookFormComponent,
    TuiButton,
    TuiButtonClose,
    TuiBlock,
    TuiIcon,
    TuiGroup,
    TuiTextfield,
    TuiCell,
    TuiCardLarge
  ],
  templateUrl: './book-shelf.component.html',
  styleUrl: './book-shelf.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookShelfComponent {
  books$: Observable<Book[]>;
  searchTerm: string = '';
  selectedBookId?: string;

  constructor(private store: Store<AppState>, private bookService: BookService, private cdr: ChangeDetectorRef) {
    this.books$ = this.store.select(selectAllBooks);
  }

  ngOnInit() {
    this.bookService.loadBooks();
  }

  editBook(id: string) {
    setTimeout(() => {
      this.selectedBookId = id;
      this.cdr.detectChanges();
    }, 0);
  }

  deselect() {
    this.selectedBookId = undefined
    this.cdr.detectChanges();
  }

  removeBook(id: string) {
    this.bookService.removeBook(id);
  }
}
