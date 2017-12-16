import { Component, Injectable, OnInit } from '@angular/core';
import { PhonebookService } from '../../services/phonebook.service';
import { Contact } from '../../models/Contact';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/min';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {

  appname:string = 'Phonebook';
  contacts: Contact[];


  constructor(private phoneService:PhonebookService) { }
  

  ngOnInit() {
    //  Load contacts from the books service on init
    //  this.phoneService.getContacts().subscribe(
    //   (contacts: Contact[]) => {
    //     this.contacts = contacts;
    //   });
  }

  loadContacts() {
    this.phoneService.getContacts().subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      });
  }

}
