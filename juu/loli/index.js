// Array de filmes
const movies = [
    { title: 'Filme 1', synopsis: 'Sinopse do Filme 1', img: 'caminho_da_imagem_filme1.jpg' },
    { title: 'Filme 2', synopsis: 'Sinopse do Filme 2', img: 'caminho_da_imagem_filme2.jpg' },
    { title: 'Filme 3', synopsis: 'Sinopse do Filme 3', img: 'caminho_da_imagem_filme3.jpg' }
    // Adicione mais filmes conforme necessário
];

// Função para exibir os filmes
function displayMovies() {
    // Cria um elemento div para conter os filmes
    const moviesContainer = document.createElement('div');
    moviesContainer.style.display = 'flex';
    moviesContainer.style.flexWrap = 'wrap';
    moviesContainer.style.justifyContent = 'space-around';

    // Adiciona os filmes ao elemento div
    movies.forEach((movie, index) => {
        const movieArticle = document.createElement('div');
        movieArticle.style.border = '1px solid #ddd';
        movieArticle.style.margin = '8px';
        movieArticle.style.padding = '8px';
        movieArticle.style.width = '30%';

        movieArticle.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}" style="width: 100%; height: auto; border-radius: 8px;">
            <h2 style="color: #333;">${movie.title}</h2>
            <p>${movie.synopsis}</p>
            <button onclick="showDetails(${index})" style="padding: 8px; margin: 4px; cursor: pointer;">Detalhes</button>
            <button onclick="watchNow(${index})" style="padding: 8px; margin: 4px; cursor: pointer;">Assistir Agora</button>
        `;

        moviesContainer.appendChild(movieArticle);
    });

    // Adiciona o elemento div ao corpo do documento
    document.body.appendChild(moviesContainer);
}

// Funções para mostrar detalhes e assistir agora
function showDetails(index) {
    alert(`Detalhes do filme: ${movies[index].title}\n${movies[index].synopsis}`);
}

function watchNow(index) {
    alert(`Assistindo agora: ${movies[index].title}`);
    // Adicione a lógica real para assistir ao filme
}

// Chama a função para exibir os filmes ao carregar a página
displayMovies();


