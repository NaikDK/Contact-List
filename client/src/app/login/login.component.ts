import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  @ViewChild('emailid') fname:ElementRef;
  @ViewChild('pass') lname:ElementRef;
  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
  }

  login(){
    const user = {
      email: this.email,
      password: this.password
    }
    // console.log(user);
    this.authService.login(user);
    
  }

}
