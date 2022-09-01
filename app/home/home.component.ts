import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  viewMode = 'list';
  bookList: any;
  newBook() {
    var newTitle = prompt('Enter Title', '');
    var shelfNo = prompt("Enter the Book's shelf Number from 1 to 10", '');
    let newBook: any = {
      title: newTitle,
      userId: shelfNo,
    };
    this.appservice.books.unshift(newBook);
  }
  sortById() {
    this.appservice.books.sort((a: any, b: any) => a.id - b.id);
  }
  sortByShelf() {
    this.appservice.books.sort((a: any, b: any) => a.userId - b.userId);
  }
  constructor(public appservice: AppService) {
    this.bookList = this.appservice.getBook().subscribe((data: any) => {
      this.appservice.books = data;
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
