import { Component, } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-promise',
    standalone: true,
    imports: [NgFor],
    templateUrl: './customer.html',
    styleUrls: ['./customer.css']
})
export class PromiseComponent {
    listCustomer: any[] = [
        { name: 'Avi', id: 1},
        { name: 'Ben', id: 2 },
        { name: 'Chen', id: 3 }
    ]
   
    getCustomer(): any[] {
        return this.listCustomer;
    }

    
       
    }







