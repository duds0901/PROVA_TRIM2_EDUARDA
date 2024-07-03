const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function determinarEstacao(dia, mes) {

  if ((mes === 9 && dia >= 23) || (mes === 10) || (mes === 11) || (mes === 12 && dia < 22)) {
    return "Primavera";
  } else if ((mes === 12 && dia >= 22) || (mes === 1) || (mes === 2) || (mes === 3 && dia < 21)) {
    return "Verão";
  } else if ((mes === 3 && dia >= 22) || (mes === 4) || (mes === 5) || (mes === 6 && dia < 21)) {
    return "Outono";
  } else {
    return "Inverno";
  }
}

rl.question('Digite o dia: ', (dia) => {
  rl.question('Digite o mês (em número): ', (mes) => {
    dia = parseInt(dia);
    mes = parseInt(mes);

    if (isNaN(dia) || isNaN(mes) || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
      console.log('Data inválida.');
    } else {
      const estacao = determinarEstacao(dia, mes);
      console.log(`Na data ${dia}/${mes}, estamos na estação: ${estacao}`);
    }

    rl.close();
  });
});
