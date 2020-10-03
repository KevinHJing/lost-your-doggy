import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private loggedIn: Observable<firebase.User>;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loggedIn = this.loginService.isLoggedIn();
  }

}
