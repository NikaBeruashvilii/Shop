import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users$: Observable<any>

  constructor(private afAuth:AngularFireAuth) {
    this.users$ = afAuth.authState;
   }


  login() {

  }

  logout() {
    this.afAuth.signOut();
  }
}

