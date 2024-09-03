import { Action, createReducer, on } from '@ngrx/store';
import { addBook, removeBook, editBook } from './book.actions';
import { Book } from '../models/book';

export const initialState: Book[] = [];

const _bookReducer = createReducer(
  initialState,
  on(addBook, (state, { book }) => [...state, book]),
  on(removeBook, (state, { id }) => state.filter(book => book.id !== id)),
  on(editBook, (state, { book }) =>
    state.map(b => (b.id === book.id ? book : b))
  )
);

export function bookReducer(state: Book[] | undefined, action: Action<string>) {
  return _bookReducer(state, action);
}