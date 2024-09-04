import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { addBook, removeBook, editBook } from './book.actions';
import { Book } from '../models/book';

// export type State = Book[]
export interface State extends EntityState<Book> {
  // additional entity state properties
  selectedBookId: string | null;
}

export type BookState = State;

export function selectBookId(a: Book): string {
  //In this case this would be optional since primary key is id
  return a.id;
}

export function sortByName(a: Book, b: Book): number {
  return a.title.localeCompare(b.title)
}

export function sortByAuthor(a: Book, b: Book): number {
  return a.author.localeCompare(b.author);
}

export function sortByAuthorAndName(a: Book, b: Book): number {
  const authorComparison = a.author.localeCompare(b.author);

  if (authorComparison !== 0) {
    return authorComparison;
  }

  return a.title.localeCompare(b.title);
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: selectBookId,
  sortComparer: sortByAuthorAndName,
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedBookId: null,
});

// export const initialState: Book[] = [];

const _bookReducer = createReducer(
  initialState,
  // on(addBook, (state, { book }) => [...state, book]),
  // on(removeBook, (state, { id }) => state.filter(book => book.id !== id)),
  // on(editBook, (state, { book }) =>
  //   state.map(b => (b.id === book.id ? book : b))
  // )
  on(addBook, (state, { book }) => adapter.addOne(book, state)),
  on(removeBook, (state, { id }) => adapter.removeOne(id, state)),
  on(editBook, (state, { book }) => adapter.setOne(book, state))
);

export function bookReducer(state: State | undefined, action: Action<string>) {
  return _bookReducer(state, action);
}

export const getSelectedBookId = (state: State) => state.selectedBookId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectBookIds = selectIds;

export const selectBookEntities = selectEntities;

export const selectAllBooks = selectAll;

export const selectBookTotal = selectTotal;
