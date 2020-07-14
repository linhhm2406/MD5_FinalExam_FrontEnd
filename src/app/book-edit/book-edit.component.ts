import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Book} from '../book';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book;
  editForm: FormGroup;
  message: string;

  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getBookById(+id).subscribe(
      result => {
        this.book = result;
        this.editForm.patchValue(result);
      }
    );

    this.editForm = this.formBuilder.group({
        title: [''],
        author: [''],
        description: ['']
      }
    );
  }

  onSubmit(): void {
    const {value} = this.editForm;
    const data = {
      ...this.book,
      ...value
    };
    this.bookService.editBook(data)
      .subscribe(() => {
        alert('Cập nhật thành công');
        this.router.navigateByUrl('/');
      }, error => console.log(error));
  }

}
