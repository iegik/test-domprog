import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookModule } from './book/book.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-domprog';
}
