import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import '@firebase/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  user: firebase.user;

  constructor(private afAuth:AngularFireAuth) { }

  ngOnInit(): void {
   this.afAuth.authState.subscribe(user => this.user = user);
  }

  logOut() {
    this.afAuth.signOut();
  }
}
