import { Pipe, PipeTransform } from '@angular/core';

import { Contact } from '../models/Contact';

@Pipe({
    name: 'nameFilter',
    pure: false
})
export class NAMEfilter implements PipeTransform {
    transform(contacts: any[], filterName: string): any {    
        return filterName 
            ? contacts.filter(contact => contact.name.toLowerCase().indexOf(filterName) !== -1)
            : contacts;
    }
}

@Pipe({
    name: 'numberFilter',
    pure: false
})
export class NUMBERfilter implements PipeTransform {
    transform(contacts: any[], filterNumber: string): any {      
        return filterNumber 
            ? contacts.filter(contact => contact.phone_number.indexOf(filterNumber) !== -1)
            : contacts;
    }
}

@Pipe({
    name: 'addressFilter',
    pure: false
})
export class ADDRESSfilter implements PipeTransform {
    transform(contacts: any[], filterAddress: string): any {
        return filterAddress 
            ? contacts.filter(contact => contact.address.toLowerCase().indexOf(filterAddress) !== -1)
            : contacts;
    }
}