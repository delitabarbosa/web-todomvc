const el = require('./elements').ELEMENTS;
require('cypress-xpath')

class TodoMvcPage {
    acessarLink() {
        cy.server();
        cy.route('GET', '**/learn.json').as('postTodomvc');
        cy.visit('https://todomvc.com/examples/typescript-react/#/completed')
    }
    cadastrar1Item() {
        cy.get(el.inputItem).type('TESTE').type('{enter}')
        cy.wait(1000)
    }

    cadastrar10Itens() {
        for (var i = 1; i <= 10; i++) {
            cy.get(el.inputItem).type('TESTE ' + i).type('{enter}')
            cy.wait(1000);
        }
    }

    excluir1Item() {
        cy.xpath("//*/text()[normalize-space(.)='TESTE']/following::button[1]").invoke('show').wait(1500).click();
    }

    excluir10Itens() {
        for (var i = 1; i <= 10; i++) {
            cy.xpath("//*/text()[normalize-space(.)='TESTE " + i + "']/following::button[1]").invoke('show').wait(1500).click();
        }
    }

    selecionar1Item() {
        cy.get(el.selectItem).click();
        cy.wait(1000);
    }

    selecionar10Itens() {
        for (var i = 1; i <= 10; i++) {
            cy.xpath("//li[" + i + "]/div[1]/input[1]").click();
            cy.wait(1000);
        }
    }

    limparCompletamente() {
        cy.wait(1000);
        cy.get(el.limparTudo).click();
    }

    filtroAll() {
        cy.wait(1000);
        cy.get(el.filtroAll).click();
        cy.wait(1000);
    }

    filtroActive() {
        cy.wait(1000);
        cy.get(el.filtroActive).click();
        cy.wait(1000);
    }

    filtroCompleted() {
        cy.wait(1000);
        cy.get(el.filtroCompleted).click();
        cy.wait(1000);
    }
}

export default new TodoMvcPage();