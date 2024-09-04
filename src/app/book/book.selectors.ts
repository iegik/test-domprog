import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BookState, adapter } from './book.reducer';

export const selectBookState = createFeatureSelector<BookState>('books');

const { selectEntities } = adapter.getSelectors(selectBookState);

export const selectBookById = (id: string) => createSelector(
  selectEntities,
  (entities) => entities[id]
);

export const selectAllBooks = createSelector(
  selectBookState,
  adapter.getSelectors().selectAll
);