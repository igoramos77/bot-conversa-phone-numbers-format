const fs = require('fs');

var numerosFormatados = "";
function formatarNumerosTelefone(numerosTelefone) {
  for (var i = 0; i < numerosTelefone.length; i++) {
    var numeroAtual = numerosTelefone[i];
    var ddd = numeroAtual.substring(0, 2);
    var numero = numeroAtual.substring(2);
    if (parseInt(ddd) > 28) {
      numero = numero.substring(1);
    }
    numerosFormatados += "55" + ddd + numero.substring(0, 4) + numero.substring(4) + "\n";
  }
  return numerosFormatados;
}

fs.readFile('numbers.txt', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  var numerosTelefone = data.split('\n');
  console.log(formatarNumerosTelefone(numerosTelefone));

  fs.writeFile('formated_numbers.txt', numerosFormatados, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Arquivo criado e formatado com sucesso!");
  });
});