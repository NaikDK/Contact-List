import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from './contact';
import { map } from "rxjs/operators"; 
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
}) 
export class ContactService {
  
  constructor(private http: HttpClient) { }

  //retrieving contacts
  getContacts(){
    return this.http.get('http://localhost:3000/contacts')
      .pipe(map(res => res));
  }

  // retrieve single contact for update
  getContact(id:any){
    console.log("service");
    const options = {
      responseType: 'json' as const,
      // observe: 'response' 
    };
    return this.http.get<Contact>('http://localhost:3000/contacts/'+id)
    .pipe(map(res => res));
  }

  // Add contacts
  addContact(newContact){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/contacts', newContact, httpOptions)
      .pipe(map(res => res));
  }

  //Delete Method
  deleteContact(id){
    return this.http.delete('http://localhost:3000/contacts/'+id)
      .pipe(map(res => res));
}

 //Update Method
  // updateContact(id){
  //   console.log("Service");
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get('http://localhost:3000/contacts/'+id, {headers:headers})
  //   .pipe(map(res => res.json()));
  // }

}
