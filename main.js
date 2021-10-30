let form = document.getElementById('form-gorjeta');

function calcularGorjeta(event) {
  event.preventDefault();
  
  let precoTotal = parseInt(document.getElementById('preco-total').value);
  let qualidadeServico = document.getElementById('qualidade-servico').value;
  let totalPessoas = parseInt(document.getElementById('total-pessoas').value);
  
  let textoGorjeta = document.getElementById('gorjeta');
  let valorGorjeta = (precoTotal * qualidadeServico).toFixed(2);
  let gorjetaPraCada = (valorGorjeta / totalPessoas).toFixed(2);
  
  if (precoTotal <= 0 || totalPessoas <= 0) {
    textoGorjeta.innerHTML = `Números negativos/nulos não são aceitos! Preencha novamente.`;
    form.reset();
  } else {
    textoGorjeta.innerHTML = `Gorjeta: ${valorGorjeta} <br /> Cada pessoa paga ${gorjetaPraCada}`;
  }
}

form.addEventListener('submit', calcularGorjeta);