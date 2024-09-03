import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BookFormComponent } from './book-form.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from '../../book/book.reducer';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        StoreModule.forRoot({ books: bookReducer }),
        BookFormComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
