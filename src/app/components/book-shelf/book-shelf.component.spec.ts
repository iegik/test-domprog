import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BookShelfComponent } from './book-shelf.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from '../../book/book.reducer';
import { BookService } from '../../services/book.service';

describe('BookShelfComponent', () => {
  let component: BookShelfComponent;
  let fixture: ComponentFixture<BookShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        StoreModule.forRoot({ books: bookReducer }),
        FormsModule,
        BookShelfComponent,
      ],
      providers: [BookService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
