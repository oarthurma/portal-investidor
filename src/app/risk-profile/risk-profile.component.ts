import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-risk-profile',
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './risk-profile.component.html',
  styleUrl: './risk-profile.component.scss'
})
export class RiskProfileComponent {

  perfil = {
    tipo: 'Moderado', 
    pontuacao: 65,
    descricao: 'Perfil equilibrado entre segurança e rentabilidade.'
  }
}
