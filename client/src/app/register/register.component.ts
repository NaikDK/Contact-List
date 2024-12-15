import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: false
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;

  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
  }

  register(){
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address,
      phone: this.phone
    }
    console.log(user);
    this.authService.register(user);
  }

}
