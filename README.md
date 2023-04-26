
# Formatar numeros de telefone para o BotConversa

Este script em JavaScript tem como objetivo formatar uma lista de números de telefone que estão em um arquivo de texto, seguindo as seguintes regras:

 - Se o DDD (os dois primeiros dígitos do número) for maior do que 28, então o primeiro dígito do número deve ser ignorado, ou seja, o número terá apenas 8 dígitos.
 - Todos os números de telefone formatados devem ser separados por uma quebra de linha.
- O script lê um arquivo de texto "numbers.txt" contendo uma lista de números de telefone não formatados e, em seguida, formata cada número de acordo com as regras definidas acima. Os números de telefone formatados são armazenados em uma string separados por uma quebra de linha e, em seguida, gravados em um novo arquivo de texto.

  

Para utilizar o script, basta colocar a lista de números de telefone a ser formatada em um arquivo de texto chamado "n numbers.txt", e em seguida, executar o código com o comando `node index.js` em um ambiente que suporte JavaScript, como um ambiente Node.js. Após a execução do script, o arquivo "formated_numbers.txt" será criado e conterá a lista de números de telefone formatados.

Solução para o problema de importação de novos contatos na plataforma [www.botconversa.com.br](https://www.botconversa.com.br)