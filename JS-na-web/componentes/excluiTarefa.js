const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button')
  botaoDeleta.classList.add('delete-button')
  botaoDeleta.innerText = 'deletar'
  botaoDeleta.addEventListener('click', excluirTarefa)

  return botaoDeleta
} 

const excluirTarefa = (evento) => {
  const botaoDeleta = evento.target

  const tarefaExcluida = botaoDeleta.parentElement
  tarefaExcluida.remove()

  return botaoDeleta
}

export default BotaoDeleta