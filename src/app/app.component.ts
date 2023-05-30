import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  displayname = '';
  displayaddress = '';
  displaycontact = '';
  displayemail = '';

  getValue(name: string, address: string, contact: string, email: string) {
    // Store form details in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('address', address);
    localStorage.setItem('contact', contact);
    localStorage.setItem('email', email);

    // Update display variables
    this.displayname = name;
    this.displayaddress = address;
    this.displaycontact = contact;
    this.displayemail = email;
  }

  ngOnInit() {
    // Retrieve stored form details from local storage on component initialization
    this.displayname = localStorage.getItem('name') || '';
    this.displayaddress = localStorage.getItem('address') || '';
    this.displaycontact = localStorage.getItem('contact') || '';
    this.displayemail = localStorage.getItem('email') || '';
  }
}
