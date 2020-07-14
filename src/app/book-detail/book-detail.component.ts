import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getBookById(+id).subscribe(result => this.book = result);
  }

}
