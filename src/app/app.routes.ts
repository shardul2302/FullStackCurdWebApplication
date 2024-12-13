import { Routes } from '@angular/router';
import { HomeComponent } from './shardulmod/home/home.component';

export const routes: Routes = [
    {path:"shardulmod/home", component:HomeComponent},
    {path: "shardulmod", redirectTo: "shardulmod/home", pathMatch:"full"},
    {path:"",redirectTo: "shardulmod/home", pathMatch:"full"}
];
