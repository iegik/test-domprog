import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

export const addBook = createAction(
  '[Book] Add Book',
  props<{ book: Book }>()
);

export const removeBook = createAction(
  '[Book] Remove Book',
  props<{ id: string }>()
);

export const editBook = createAction(
  '[Book] Edit Book',
  props<{ book: Book }>()
);