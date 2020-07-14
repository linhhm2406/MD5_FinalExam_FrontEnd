import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book;
  message: string;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getBookById(+id).subscribe(result => this.book = result);
  }

  onDelete(id: number): void {
    if (confirm('Delete ? ')) {
      this.bookService.deleteBook(id).subscribe(() =>
        this.router.navigateByUrl('/'));
    }
  }
}
