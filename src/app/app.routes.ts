import { Routes } from '@angular/router';

import { BookShelfComponent } from './components/book-shelf/book-shelf.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookProfileComponent } from './components/book-profile/book-profile.component';

export const routes: Routes = [
  { path: '',
    component: BookShelfComponent
  },
  { path: 'components/book-shelf',
    component: BookShelfComponent
  },
  { path: 'components/book-form',
    component: BookFormComponent
  },
  { path: 'components/book-form/:id',
    component: BookFormComponent
  },
  { path: 'components/book-profile',
    component: BookProfileComponent
  },
  { path: 'components/book-profile/:id',
    component: BookProfileComponent
  },
  {
    path: 'book-profile',
    loadChildren: () =>
      import('./components/book-profile/book-profile.module').then(
        (m) => m.BookProfileModule
      ),
  },
];
