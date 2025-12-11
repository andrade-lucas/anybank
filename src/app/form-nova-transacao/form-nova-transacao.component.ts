import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
  valorTransacao: number = 0.0;
  tipoTransacao: string = "";
  saldo: number = 0;
  extrato: number[] = [];

  aoSubmeter() {
    console.log(this.valorTransacao);
  }
}
