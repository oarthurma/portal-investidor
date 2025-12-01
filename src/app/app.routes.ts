import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InvestmentSimulatorComponent } from './investment-simulator/investment-simulator.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, // rota para o component Home
  { path: 'simulador', component: InvestmentSimulatorComponent },
  // Redirecionamento da raiz para login (boa prática):
  { path: '', redirectTo: 'login', pathMatch: 'full' } 
];
