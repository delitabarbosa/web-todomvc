/**
 * @description Classe criada para mapear os métodos relacionados ao To Do MVC
 */

import { toDoElements } from '../elements/to-do-mvc.elements';
import * as labels from '../../fixtures/labels.constant'

class ToDoPage {

    registrarItens() {
        cy.get(toDoElements.escreverItem()).type(labels.ITEM_COMPLETO).type('{enter}')
        cy.get(toDoElements.escreverItem()).type(labels.ITEM_ATIVO).type('{enter}')

        for (var i = 1; i <= 5; i++) {
            cy.get(toDoElements.escreverItem()).type('Teste ' + i).type('{enter}')
            cy.contains("Teste " + i);
        }
    }

    deletarItens() {
        cy.get(toDoElements.excluirItem()).then(excluirItens => {
            const contagem = Cypress.$(excluirItens).length;
            Cypress._.times(contagem, () => {
                cy.get(toDoElements.excluirItem()).first().invoke('show').click()
            })
        })
    }

    editarItem() {
        cy.get(toDoElements.itens()).first().dblclick()
        cy.get(toDoElements.editarItem()).type("Teste Editado").type('{enter}')
    }

    selecionarUmItem() {
        cy.get(toDoElements.selecionarItens()).first().click();
    }

    selecionarTodosItens() {
        cy.get(toDoElements.selecionarItens()).then(selecionarItens => {
            const contagem = Cypress.$(selecionarItens).length;
            for (var i = 1; i <= contagem - 1; i++) {
                cy.get(toDoElements.selecionarItens()).first().click();
            }
        })
    }

    validarItens(naocontem) {
        cy.get(toDoElements.itens()).should('not.contain', naocontem)
    }

    limparCompletamente() {
        cy.get(toDoElements.limparTudo()).click();

    }

    validarContainerVazio() {
        cy.get(toDoElements.itens()).should('not.exist')
    }

    selecionarFiltro(tipo) {
        cy.get(toDoElements.filtro(tipo)).should('be.visible').click();
        cy.get(toDoElements.filtro(tipo)).should('have.class', 'selected')
    }
}

export default new ToDoPage();