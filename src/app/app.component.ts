import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { TipoTransacao, Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
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
          // if (acc < transacao.valor) {
          //   alert('Saldo insuficiente. Saldo atual: R$ ' + acc);
          //   return 0;
          // }
          return acc - transacao.valor;
        default:
          throw new Error('Tipo de transação não identificado.');
      }
    }, 0)
  });

  processarTransacao(transacao: Transacao) {
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
  }
}
