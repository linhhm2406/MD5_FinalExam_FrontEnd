import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  createForm: FormGroup;
  message: string;

  constructor(private formBuilder: FormBuilder,
              private bookService: BookService) {
  }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
        title: [''],
        author: [''],
        description: ['']
      }
    );
  }

  onSubmit(): void {
    const {value} = this.createForm;
    this.bookService.createBook(value)
      .subscribe(next => {
        this.createForm.reset({
          title: '',
          body: ''
        });
        this.message = 'Thêm thành công';
      }, error => console.log(error));
  }
}
