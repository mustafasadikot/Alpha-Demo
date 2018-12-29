import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }
  private user: User = new User();
  ngOnInit() {
  }
  private onSignIn = (event) => {
    this._router.navigateByUrl('dashboard');
  }
}

class User {
  Name: string;
  Password: string;
}
