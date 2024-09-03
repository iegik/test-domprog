import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BookProfileComponent } from './book-profile.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from '../../book/book.reducer';

describe('BookProfileComponent', () => {
  let component: BookProfileComponent;
  let fixture: ComponentFixture<BookProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        StoreModule.forRoot({ books: bookReducer }),
        BookProfileComponent,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
