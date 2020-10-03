import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  signOut(): void{
    this.loginService.signOut().then(e =>{
      this.router.navigate(['home']);
    });
  }

  goToLoginPage(): void{
    this.router.navigate(['login']);
  }

}
