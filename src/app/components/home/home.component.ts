import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../../services/phonebook.service';
import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private phoneServ:PhonebookService) {}

  contacts: Contact[];
  copyContacts: Contact[];
  errorMessage: string;
  appname:string = 'Phonebook';

  ngOnInit() {
  }

  showContact() {
    this.phoneServ.getInfo()
    .subscribe(
      contacts => this.contacts = contacts,
      error => this.errorMessage = <any>error
    )
  }

}
