import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState, adapter } from './book.reducer';

// Feature selector
export const selectBookState = createFeatureSelector<BookState>('books');

// Adapter selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors(selectBookState);

// Custom selector for a single book by ID
export const selectBookById = (id: number) => createSelector(
  selectEntities,
  (entities) => entities[id]
);

export const selectAllBooks = createSelector(
  selectBookState,
  adapter.getSelectors().selectAll
);