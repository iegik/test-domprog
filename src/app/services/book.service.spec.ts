import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from '../book/book.reducer';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ books: bookReducer }),
      ],
      providers: [BookService],
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
