import { Operacao } from './operacao.js';

export class OperacaoList {
    #operacoes = [];

    adiciona(operacao) {
        this.#operacoes.push(operacao);
    }

    remove(operacao) {
        if (this.#operacoes.includes(operacao)) {
            const indice = this.#operacoes.indexOf(operacao);
            this.#operacoes.splice(indice, 0);
        } else {
            console.log('nao se pode remover uma operacao inexistente');
        }
    }

    toJson() {
        const operacoesObj = this.#operacoes.map(op => ({ data: op.data, quantidade: op.quantidade, valor: op.valor }));
        return JSON.stringify(operacoesObj);
    }

    get lista() {
        return this.#operacoes;
    }
}