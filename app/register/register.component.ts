import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: any;

  log(x: any) {
    console.log(x);
  }

  constructor(private router: Router, private appService: AppService) {}

  saveReg(data: any) {
    this.user = {
      fullName: data.value.fullName,
      email: data.value.emailId,
      password: data.value.password1,
      setPassword: function (newPass: any) {
        this.password = newPass;
      },
      getPassword: function () {
        return this.password;
      },
    };
    console.log(this.user);
    this.appService.addUsers(this.user);
    alert(
      `Hi ${data.value.fullName}! Thankyou for registring. Log-in to continue`
    );
    this.router.navigateByUrl('/login');
  }
  ngOnInit(): void {}
}
