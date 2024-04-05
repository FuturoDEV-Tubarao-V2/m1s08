import { OperacaoController } from './controller/operacaoController.js';

const operacoes = JSON.parse(localStorage.getItem('operacoes'));
const formulario = document.getElementById('cadastroOperacao');
const controller = new OperacaoController();
controller.renderizaOperacoes(operacoes);

formulario.addEventListener('submit', criarOperacao);

function criarOperacao(evento) {
    evento.preventDefault();
    controller.criarOperacao();
    controller.limparFormulario(formulario);
    localStorage.setItem('operacoes', controller.operacoes.toJson());
}