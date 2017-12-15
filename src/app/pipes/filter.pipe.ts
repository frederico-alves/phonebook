import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(contacts: any[], term: any): any {
        return term 
            ? contacts.filter(contact => contact.name.indexOf(term) !== -1)
            : contacts
    }
}