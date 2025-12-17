import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { TipoTransacao, Transacao } from './modelos/transacao';
import { ExtratoComponent } from "./extrato/extrato.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacao) => {
      switch (transacao.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacao.valor;
        case TipoTransacao.SAQUE:
          return acc - transacao.valor;
        default:
          throw new Error('Tipo de transação não identificado.');
      }
    }, 0)
  });

  processarTransacao(transacao: Transacao) {
    if (transacao.tipo == TipoTransacao.SAQUE && this.saldo() < transacao.valor) 
      return alert('Saldo insuficiente. Saldo atual: R$ ' + this.saldo());
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
  }
}
