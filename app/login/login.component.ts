import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emailPattern: any;
  passwordPattern: any;
  log(x: any) {
    console.log(x);
  }

  constructor(private router: Router, private appService: AppService) {}
  ngOnInit(): void {}

  onSubmit(data: any) {
    if (this.appService.validUser(data.value)) {
      this.router.navigateByUrl('/home');
    } else {
      alert('Looks like you are new! Please Register');
    }
  }
  forgotPass() {
    var emailExists: any = prompt('Enter your e-mail:', '');

    var existingUser = this.appService.usersArray.find(
      (p: any) => p.email === emailExists
    );
    console.log(emailExists + 'HI:' + existingUser);
    if (existingUser) {
      var newPass: any = prompt('Enter a new Password:', '');
      existingUser.setPassword(newPass);
    } else {
      alert('You must be new, Please Register!');
    }
    console.log(existingUser.getPassword());
  }
}
