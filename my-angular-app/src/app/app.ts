import { Component, signal } from '@angular/core';
import { AnnualSummary } from '../AnnualSummary/AnnualSummary';
import { CommonModule } from '@angular/common';
import { PromiseComponent } from '../Customer/customer';

@Component({
  selector: 'app-root',
  imports: [ AnnualSummary, CommonModule, PromiseComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
  type: string = 'מנהל';
  userType$ = this.getUserPermission();

 

  getUserPermission(): Promise<string> {
    return new Promise(res => {
      setTimeout(() => res(this.type), 6000)
    });
  }
}
