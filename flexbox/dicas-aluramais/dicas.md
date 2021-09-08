## DICAS FLEXBOX

# Onde declarar?

Declaramos "display: flex;" no css do container para que ele alinhe os elementos
que estão dentro dele, elementos que chamamos de flex-items. 

Somente afeta os elementos filhos diretos, elementos que estão dentro dos filhos
não são afetados pelo flex. (Só relação Pais & Filhos)

Comportamento padrão é o de linha(row). Eixo principal. Para usar coluna declare "flex-direction:column".

Ele só consegue trabalhar em linhas ou colunas, não é possivel misturar os dois no mesmo container.

Os items não crescem no eixo principal, somente no transversal.

As propriedade de alinhamento do flex só alinham os itens que estão dentro do container, não alinha
o container em relação ao restante da tela.

justify-content alinha os items em relação ao eixo principal
align-itens alinha os items em relação ao eixo transversal, mas mantem o tamanho de seus elementos
align-content alinha os items em relação ao eixo transversal e deixa os items com o mesmo tamanho
flex-wrap para quebrar os elementos filhos em linhas

para definir o máximo de items por linha deve ser adicionada a propriedade "flex" NOS ITEMS
flex tem por padrao "flex: 0 1 auto;" "flex: flex-grown(quanto o item pode crescer) flex-shrink (quanto o item
pode diminuir) flex-basis(a largura padrao para os items, com auto ocupam o espaço disponivel);