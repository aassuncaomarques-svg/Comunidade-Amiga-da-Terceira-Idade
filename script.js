/* ficheiro: script/script.js */

function buscarCEP() {
    let cepDigitado = document.getElementById('cep').value.replace(/\D/g, '');

    if (cepDigitado.length === 8) {
        fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
            .then(resposta => resposta.json())
            .then(dados => {
                if (!dados.erro) {
                    document.getElementById('rua').value = dados.logradouro;
                    document.getElementById('bairro').value = dados.bairro;
                    document.getElementById('cidade').value = dados.localidade + ' / ' + dados.uf;
                } else {
                    alert("O CEP digitado não foi encontrado.");
                }
            })
            .catch(erro => alert("Ocorreu um erro ao buscar o CEP."));
    } else {
        alert("Por favor, digite um CEP válido contendo 8 números.");
    }
}
