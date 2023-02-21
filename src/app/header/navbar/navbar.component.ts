import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import '@firebase/auth';
import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared-services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  isHidden:boolean = true;

  constructor(private auth:AuthService) { 
  }

  ngOnInit(): void {
  }

  logOut() {
    this.auth.logout();
    this.isHidden = false;
  }
}
