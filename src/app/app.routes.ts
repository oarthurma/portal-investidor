import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InvestmentSimulatorComponent } from './investment-simulator/investment-simulator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RiskProfileComponent } from './risk-profile/risk-profile.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, // rota para o component Home
  { path: 'simulador', component: InvestmentSimulatorComponent },
  { path: 'perfil', component: RiskProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  // Redirecionamento da raiz para login (boa prática):
  { path: '', redirectTo: 'login', pathMatch: 'full' } 
];
