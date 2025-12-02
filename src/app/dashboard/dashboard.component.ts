import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { InvestmentSimulatorComponent } from '../investment-simulator/investment-simulator.component';
import { RiskProfileComponent } from '../risk-profile/risk-profile.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    InvestmentSimulatorComponent,
    RiskProfileComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
