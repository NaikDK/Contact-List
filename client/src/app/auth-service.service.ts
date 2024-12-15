import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isAuthentic = false;
  constructor(private http: HttpClient, private router: Router) { }

  register(user){
    this.http.post('http://localhost:3000/auth/register', user).subscribe((res)=> {
    this.router.navigate(['login']);
    });
  }
  
  login(user){
    this.http.post('http://localhost:3000/auth/login', user).subscribe((res)=>{
      localStorage.setItem("token", res['idToken']['token']);
      this.isAuthentic = true;
      console.log(this.isAuthentic);
      this.router.navigate(['']);
      
    },(err)=>{

    });
    
  }

  logout() {
    this.isAuthentic = false;
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    return this.isAuthentic;
  }
}
