import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkerComponent } from './worker/worker.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'worker', component:  WorkerComponent},
    { path: 'contact', component:  ContactComponent},
];
