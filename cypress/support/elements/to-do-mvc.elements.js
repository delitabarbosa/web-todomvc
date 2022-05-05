/**
 * @description Classe criada para mapear os elementos relacionados ao To Do MVC
 */

class ToDoElements {

  dataPrazo = () => '[data-testid="prazo-tarefa"]'

  escreverItem = () => '.new-todo'

  excluirItem = () => '[class="destroy"]'

  limparTudo = () => '.clear-completed'

  filtro = (posicao) => `[data-reactid=".0.2.1.${posicao}"] > a`

  selecionarItens = () => '[data-reactid^=".0.1.2.$"][class=""] > .view > .toggle '

  itens = () => '[data-reactid^=".0.1.2.$"] > .view > label'

  editarItem = () => '.edit'
}

export const toDoElements = new ToDoElements()