export class OperacaoView {
    #elemento;

    constructor(id) {
        this.#elemento = document.getElementById(id);
    }

    update(operacoes) {
        this.#elemento.innerHTML = this.#template(operacoes);
    }

    #template(operacoes) {
        if (!operacoes)
            return '<span>Sem operacoes cadastradas';
        return `
        ${operacoes.map(op => `
        <tr>
        <td>${op.data}</td>
        <td>${op.quantidade}</td>
        <td>${op.valor}</td>
        </tr>
        `).join('')}
        `;

    }
}