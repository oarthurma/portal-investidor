import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms"; // Import padrão para ngModel e ngForm
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-investment-simulator',
  imports: [
    FormsModule, 
    CommonModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './investment-simulator.component.html',
  styleUrl: './investment-simulator.component.scss'
})
export class InvestmentSimulatorComponent {
  // Variáveis ligadas ao formulário
  tipo: string = '';
  valor: number = 0;
  prazoMeses: number = 1;

  // Resultado da simulação
  resultado: {
    valorFinal: string;
    rentabilidade: string;
    detalhes: string;
  } | null = null;

  // Método chamado ao enviar o formulário
  simular() {
    const taxaMensal = 0.01; // 1% ao mês (mock)
    const valorFinal = this.valor * Math.pow(1 + taxaMensal, this.prazoMeses);
    const rentabilidade = ((valorFinal - this.valor) / this.valor) * 100;
    
    this.resultado = {
      valorFinal: `R$ ${valorFinal.toFixed(2)}`,
      rentabilidade: `${rentabilidade.toFixed()}%`,
      detalhes: `Simulação para ${this.prazoMeses} meses em ${this.tipo}`
    };
  }
}
