import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  books: any;
  regUsers: any;
  users: any;
  userList: any = [];
  usersArray: any = [];
  constructor(public http: HttpClient) {}

  getBook() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }

  addUsers(user: any) {
    if (localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users') || '[]');
      this.usersArray.push(user);
    } else {
      this.usersArray = [user];
    }
    console.log(this.usersArray);
    localStorage.setItem('users', JSON.stringify(this.usersArray));
  }

  validUser(user: any) {
    return this.usersArray.find(
      (p: any) => p.email === user.emailId && p.getPassword() === user.password1
    );
  }
  getUser(user: any) {
    if (
      this.usersArray.find(
        (p: any) => p.email === user.emailId && p.password === user.password1
      )
    ) {
    }
  }
}
