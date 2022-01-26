const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nome = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const situacao = document.querySelector('#status');

const traduzCondicao = (data) => {
    switch (data.status){
        case 'unknown':
            return 'desconhecido';
        case 'alive':
            return 'vivo';
        default:
            return 'está morto';
    }
}

const gerarPersonagemAleatorio = () => Math.floor(Math.random() * 826);

const novoPersonagem = () => {
    const newPerson = gerarPersonagemAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${newPerson}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    })
    .then((response) => response.json())
    .then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nome.innerHTML = `<strong>Nome:</strong> ${data.name}`;
        especie.innerHTML = `<strong>Espécie:</strong> ${data.species}`;
        situacao.innerHTML = `<strong>Está vivo?</strong> ${traduzCondicao(data)}`;
    })
}

novoPersonagem();
botao.onclick = novoPersonagem;