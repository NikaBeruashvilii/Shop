import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users$: Observable<firebase.User>

  constructor(private afAuth:AngularFireAuth) {

   }


  login() {

  }

  logout() {
    this.afAuth.signOut();
  }
}

