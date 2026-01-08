import { Routes } from '@angular/router';
import { RentalApartments } from './rental-apartments/rental-apartments';
import { SaleApartments } from './sale-apartments/sale-apartments';
import { VacationApartments } from './vacation-apartments/vacation-apartments';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'rental-apartments', component: RentalApartments },
  { path: 'sale-apartments', component: SaleApartments },
  { path: 'vacation-apartments', component: VacationApartments },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
