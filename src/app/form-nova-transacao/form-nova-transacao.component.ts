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
    switch (this.tipoTransacao) {
      case 'saque':
        this.realizarSaque();
        break;
      case 'deposito':
        this.realizarDeposito();
    }

    this.resetarForm();
  }

  realizarDeposito() {
    this.saldo += this.valorTransacao;
    this.extrato.push(this.valorTransacao);
  }

  realizarSaque () {
    this.saldo -= this.valorTransacao;
    this.extrato.push(this.valorTransacao * -1);
  }

  resetarForm() {
    this.valorTransacao = 0;
    this.tipoTransacao = "";
  }
}
