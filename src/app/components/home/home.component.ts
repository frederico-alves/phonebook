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

  sortByName(n1: Contact, n2: Contact) {
    //compares A to B
    if(n1.name > n2.name) return 1
        else if(n1.name === n2.name) return 0
            else return -1
  }

  sortType(sort: string) {
    if(sort === 'name') {
        this.contacts = this.contacts.sort(this.sortByName);
        console.log(this.contacts);
    }}}
