import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowListComponent } from './show-list/show-list.component';
import {HttpClientModule} from '@angular/common/http';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookDeleteComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
