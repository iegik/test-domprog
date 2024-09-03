import { Component } from '@angular/core';
import { BookFormComponent } from '../book-form/book-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-profile',
  standalone: true,
  imports: [BookFormComponent, FormsModule],
  templateUrl: './book-profile.component.html',
  styleUrl: './book-profile.component.css',
})
export class BookProfileComponent {

}
