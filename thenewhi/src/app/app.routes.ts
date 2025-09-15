import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Services } from './services/services';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component:  Home, pathMatch: 'full' },
  { path: 'products', component: Products },
  { path: 'services', component: Services },
  { path: 'about', component: AboutUs },
  { path: 'contact', component: ContactUs },
];
