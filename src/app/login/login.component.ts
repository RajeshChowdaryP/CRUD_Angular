import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  login() {
    if (this.user.username === 'RC05' && this.user.password === 'Password@05') {
      this.router.navigate(['/app-details-view']);
    } else {
      alert('Incorrect UserName/Password');
    }
  }
  
}
