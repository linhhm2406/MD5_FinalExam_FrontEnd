import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowListComponent} from './show-list/show-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {BookEditComponent} from './book-edit/book-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ShowListComponent
  },
  {
    path: 'book/detail/:id',
    component: BookDetailComponent
  },
  {
    path: 'book/create',
    component: BookCreateComponent
  },
  {
    path: 'book/delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'book/edit/:id',
    component: BookEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
