async function gerarMensagem() {

  const resposta = await fetch("http://localhost:3000/mensagem");

  const dados = await resposta.json();

  document.getElementById("mensagem").innerText =
    dados.mensagem;
}