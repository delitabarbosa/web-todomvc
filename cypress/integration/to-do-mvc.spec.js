import ToDoPage from '../support/pages/to-do-mvc.page'
import * as labels from '../fixtures/labels.constant'

describe('Automação WEB - To Do MVC', () => {
    before(() => {
        cy.server();
        cy.route('GET', '**/learn.json').as('postTodomvc');
        cy.visit('/')
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Cadastrar Itens na Lista', () => {
        ToDoPage.registrarItens();
        ToDoPage.selecionarFiltro("0");
    });

    it('Marcar 1 Item como "Completed" e Validar Item Completo', () => {
        ToDoPage.selecionarFiltro("0");
        ToDoPage.selecionarUmItem();
        ToDoPage.selecionarFiltro("4");
        ToDoPage.validarItens(labels.ITEM_ATIVO);
    });

    it('Selecionar o Filtro "Active" e Validar Itens Ativos', () => {
        ToDoPage.selecionarFiltro("2");
        ToDoPage.validarItens(labels.ITEM_COMPLETO);
    });

    it('Editar Item Ativo', () => {
        ToDoPage.selecionarFiltro("4");
        ToDoPage.editarItem();
    });

    it('Validar Funcionalidade "Clear Completed" no Filtro "Completed"', () => {
        ToDoPage.selecionarFiltro("4");
        ToDoPage.limparCompletamente();
        ToDoPage.validarContainerVazio();
    });

    it('Validar Funcionalidade "Clear Completed" no Filtro "Active"', () => {
        ToDoPage.selecionarFiltro("0");
        ToDoPage.selecionarTodosItens();
        ToDoPage.limparCompletamente();
    });

    it('Excluir Itens da Lista', () => {
        ToDoPage.deletarItens();
        ToDoPage.validarContainerVazio();
    });
});