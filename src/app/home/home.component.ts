import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import necessário para navegação
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {} // Injeta o serviço de roteamento

  voltarParaLogin() {
    this.router.navigate(['/login']) // Redireciona para a rota de login
  }
}
