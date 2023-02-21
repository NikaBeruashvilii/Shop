import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import '@firebase/auth';
import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  user$: Observable<firebase.User> ;
  // user:boolean = true;

  constructor(private afAuth:AngularFireAuth) { 
    this.user$ = afAuth.authState;
  }

  ngOnInit(): void {
   this.afAuth.authState.subscribe(user => this.user$ = user);
  }

  logOut() {
    this.afAuth.signOut();
  }
}
