import { Operacao } from '../model/operacao.js';
import { OperacaoList } from '../model/operacaoList.js';
import { OperacaoView } from '../view/operacaoView.js';

export class OperacaoController {
    #campoData;
    #campoQuantidade;
    #campoValor;
    #listaOperacoes = new OperacaoList();
    #view = new OperacaoView('tabela-operacoes');

    constructor() {
        this.#campoData = document.getElementById('dataOperacao');
        this.#campoQuantidade = document.getElementById('quantidadeAcoes');
        this.#campoValor = document.getElementById('valorAcao');
    }

    criarOperacao() {
        const operacao = new Operacao(this.#campoData.value,
            parseFloat(this.#campoQuantidade.value),
            parseFloat(this.#campoValor.value)
        );
        this.#listaOperacoes.adiciona(operacao);
        this.#view.update(this.operacoes.lista);
    }

    limparFormulario(form) {
        form.reset();
    }

    renderizaOperacoes(operacoes) {
        if (operacoes) {
            operacoes.forEach(op => this.operacoes.adiciona(op));
        }
        this.#view.update(operacoes);
    }

    get operacoes() {
        return this.#listaOperacoes;
    }
}