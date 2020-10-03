import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private fireAuth: AngularFireAuth
  ) { }

  public signIn(): Promise<firebase.auth.UserCredential>{
    return this.fireAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  public signOut(): Promise<void> {
    return this.fireAuth.auth.signOut();
  }

  public isLoggedIn(): Observable<firebase.User>{
    return this.fireAuth.authState;
  }

}
