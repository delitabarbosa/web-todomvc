import TodoMvcPage from '../support/pages/TodoMvcPage'

describe('TESTE WEB - TODOMVC', () => {
    it('CADASTRAR ITENS NA LISTA', () => {
        TodoMvcPage.cadastrar10Itens();
        TodoMvcPage.filtroAll();
    });

    it('EXCLUIR ITENS DA LISTA', () => {
        TodoMvcPage.cadastrar10Itens();
        TodoMvcPage.filtroAll();
        TodoMvcPage.excluir10Itens();
    });

    it('MARCAR 1 ITEM COMO COMPLETO', () => {
        TodoMvcPage.cadastrar1Item();
        TodoMvcPage.filtroAll();
        TodoMvcPage.selecionar1Item();
        TodoMvcPage.filtroCompleted();
    });

    it('SELECIONAR O FILTRO "ACTIVE"', () => {
        TodoMvcPage.cadastrar1Item();
        TodoMvcPage.filtroActive();
        TodoMvcPage.selecionar1Item();
        TodoMvcPage.filtroAll();
        TodoMvcPage.selecionar1Item();
        TodoMvcPage.filtroActive();
    });

    it('SELECIONAR O FILTRO "COMPLETED"', () => {
        TodoMvcPage.cadastrar1Item();
        TodoMvcPage.filtroAll();
        TodoMvcPage.selecionar1Item();
        TodoMvcPage.filtroCompleted();
        TodoMvcPage.filtroAll();
        TodoMvcPage.selecionar1Item();
        TodoMvcPage.filtroCompleted();
    });

    it('ESTANDO COM O FILTRO "ALL" ATIVO CLICAR EM "CLEAR COMPLETED"', () => {
        TodoMvcPage.cadastrar10Itens();
        TodoMvcPage.filtroAll();
        TodoMvcPage.selecionar10Itens();
        TodoMvcPage.limparCompletamente();
    });
});