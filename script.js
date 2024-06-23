function calcula_imc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    const valor = (peso / Math.pow(altura, 2));
  
    const mapeamento = [
      [18.5, 'Você está abaixo do seu peso ideal!'],
      [24.9, 'Você está em seu peso normal!'],
      [29.9, 'Obesidade Grau 1!'],
      [39.9, 'Obesidade Grau 2!'],
      [Infinity, 'Obesidade Grau 3!'],
  
    ];
    let mensagem = '';
    for (let [peso, msg] of mapeamento) {
      mensagem = msg;
      if (peso > valor) break;
    }
    resultado.innerHTML = mensagem;
  }