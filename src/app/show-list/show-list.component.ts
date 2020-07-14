import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookService.getAllList().subscribe(result => this.bookList = result);
  }

  onDelete(id: number): void {
    this.bookService.deleteBook(id).subscribe(result => console.log('ok'));
  }
}
