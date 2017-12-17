import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { PhonebookService } from './services/phonebook.service'
import { NAMEfilter, NUMBERfilter, ADDRESSfilter } from './pipes/filter.pipe';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NAMEfilter,
    NUMBERfilter,
    ADDRESSfilter,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PhonebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
