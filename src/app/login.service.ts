import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { EventEmitter } from 'protractor';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public firebaseAuth: AngularFireAuth
  ) { }

  public signIn(): Promise<firebase.auth.UserCredential>{
      return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  public signOut(): Promise<void> {
    return this.firebaseAuth.auth.signOut();
  }

  public isLoggedIn(): Observable<firebase.User>{
    return this.firebaseAuth.authState;
  }

}