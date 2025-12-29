import { Component, } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-promise',
    standalone: true,
    imports: [NgFor],
    templateUrl: './promise.component.html',
    styleUrls: []
})
export class PromiseComponent {

    listSubject: any[] = [
        { name: '', id: 1 },
        { name: '', id: 2 },
        { name: '', id: 3 },
        { name: '', id: 4 },
        { name: '', id: 5 },
        { name: '', id: 6 },
    ]
    list: any;


    //פונקציה פשוטה
   
    //פונקציה שממתינה לתשובה
    // getPromiseList(): Promise<Subject[]> {
    //     //במקרה של הצלחה
    //     //return Promise.resolve(this.listSubject);
    //     // במקרה של כישלון
    //     return Promise.reject();

    // }
    // הבטחה ממתינה 5 שניות
    getTimeoutPromiseList(): Promise<any[]> {
        // return new Promise(reslove => {
        //     setTimeout(() => {
        //         reslove(this.listSubject);
        //     }, 3000)
        // });
        return new Promise(res => {
            setTimeout(() => res(this.listSubject), 3000)
          });
      



    }
  
    






}