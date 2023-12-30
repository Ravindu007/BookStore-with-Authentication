import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit{

  constructor(
    @Inject(DOCUMENT) public document: Document,
    private auth: AuthService
  ) {}

  logut():void{
    this.auth.logout({
      //define to where user to take after logout 
      logoutParams: {
        returnTo: this.document.location.origin 
      }
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
