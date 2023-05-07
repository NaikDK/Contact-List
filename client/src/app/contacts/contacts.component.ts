import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ContactService} from '../contact.service';
import {Contact} from '../Contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: any;
  contact: Contact;
  firstName: string;
  lastName: string;
  phone: string;

  @ViewChild('fname') fname:ElementRef;
  @ViewChild('lname') lname:ElementRef;
  @ViewChild('phoneno') phoneno:ElementRef;

  constructor(private contactService: ContactService) { }

  addContact(){
    const newContact = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone
    }
    // console.log(newContact);
    this.contactService.addContact(newContact).subscribe(contact => {
      this.contacts.push(contact);
      this.ngOnInit();
      this.resetForm();
    });
    
  }

  deleteContact(id:any){
    console.log("Component" + id);
    var contacts = this.contacts;
    this.contactService.deleteContact(id).subscribe(data => {
      this.ngOnInit();
    });
  }

  updateContact(id:any){
    console.log("Component" + id);
    var contacts = this.contacts;
    this.contactService.getContact(id).subscribe(data => {
      // console.log(data);
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.phone = data.phone;
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.contactService.getContacts()
    .subscribe( 
        contacts => this.contacts = contacts
      );
      // console.log(this.contact);
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
    }
  }

}
