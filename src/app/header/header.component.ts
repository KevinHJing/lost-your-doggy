import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  
  loggedIn(): Observable<boolean>{
    let status = this.loginService.isLoggedIn();
    return status.pipe(map(user => {
      if (user === null){
        return false;
      }
      else{
        return true;
      }
    }));
  }

}
