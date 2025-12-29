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
getList() {
    this.list = this.getSubject();
}

getPromise() {
    this.getPromiseList().then(data => {
        this.list = data;
    }).catch(error => { console.log(error) });

}

getTimeoutPromise() {
    this.getTimeoutPromiseList().then(data=>{
        this.list = data;
    }).catch(err => {
        console.log(err);
        
    })
   
}

}