# Resumo do Projeto
O projeto é um aplicativo web que valida números de cartões de crédito utilizando o algoritmo de Luhn. O objetivo é permitir que os usuários insiram um número de cartão de crédito e verifiquem se ele é válido ou inválido de acordo com as regras do algoritmo Luhn.

#  Algoritmo de Luhn

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

# Cartão Cultura
Um cartão para empresas comprometidas com o bem-estar e o enriquecimento cultural de seus colaboradores.
Pode ser utilizado para pagar o cineminha, livrarias, teatros, eventos e também para maratonar séries no seu streaming favorito.

#  Primeira Página do Usuário

O aplicativo foi desenvolvido utilizando (HTML, CSS e JavaScript) e implementa a funcionalidade de validar números de cartões de crédito a parir do algoritmo de Luhn.

O usuário pode acessar o aplicativo através do link fornecido (https://febbex.github.io/SAP010-card-validation/src). Ao abrir a página, ele encontrará um formulário com os seguintes campos:

![gráfico primeira pg](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWozcGJqYW5xOXd5YTN6enptcmFkam04ejZjd21hcnkzajg2ZXM1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qQwa9AbtXLuQEQEVTu/giphy.gif)

 Número:  Irá mascarar os primeiros dígitos do cartão com "#" para preservar a segurança das informações.

 Nome: Neste campo, o usuário pode inserir o nome associado ao cartão de crédito.

 Validade Meses: O usuário pode selecionar o mês de validade do cartão a partir de uma lista suspensa.

 Ano: O usuário pode selecionar o ano de validade do cartão a partir de uma lista suspensa.
 
 CVC: O usuário pode inserir o código de verificação do cartão (CVC).

Ao clicar no botão "Enviar", o aplicativo irá verificar se o número do cartão de crédito inserido é válido ou inválido, utilizando o algoritmo de Luhn. 

Se o número for válido, o aplicativo exibirá a mensagem "Parabéns, cartão validado!👏" no campo de resultado. Caso contrário, a mensagem exibida será "Cartão inválido, insira novamente☹️." 

O app também notifica caso tente enviar com o campo de número vazio a mesagem exibida será "Por favor,preencha o número do cartão ✍️"

# Acesse Cartão Cultura
Link: (https://febbex.github.io/SAP010-card-validation/src)
