import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-AnnualSummary',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './AnnualSummary.html',
    styleUrls: ['./AnnualSummary.css']
})
export class AnnualSummary  {

    

    listSummary: any[] = [
        { Revenue: 100000, Expenses: 60000, Advertisements: 40000 ,Customers: 1500,Sales:300 },
        { Revenue: 120000, Expenses: 70000, Advertisements: 50000 , Customers: 1800, Sales:400 },
        { Revenue: 90000, Expenses: 50000, Advertisements: 40000 ,  Customers: 1300,  Sales:250 },  
        
    ]

}