import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'bookFilter',
  standalone: true
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[], searchTerm: string): Book[] {
    if (!searchTerm) return books;
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
