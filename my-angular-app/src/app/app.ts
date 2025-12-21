import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from './reactivFrom/reactive-form.component';
import { TaxDiscount } from '../tax-discount/tax-discount';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormComponent, TaxDiscount],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
