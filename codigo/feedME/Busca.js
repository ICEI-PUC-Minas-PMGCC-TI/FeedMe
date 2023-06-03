var bancoDeDados = [
    { id: 'maria-das-trancas', nome: 'Restaurante Maria das tranças', foto: '03_OLGA_NUR_Foto_por_Gabriel_Castro.png', descricao: 'Endereço: Rua da Trança, 123, Cidade Alta, Número: (31) 1234-5678', avaliacao: 4.5 },
    { id: 'kinto-do-ouro', nome: 'Restaurante Kinto do Ouro', foto: 'foto kinto.jpg', descricao: 'Endereço: Avenida do Ouro, 456, Bairro dos Metais, Número: (31) 2345-6789', avaliacao: 4 },
    { id: 'assados-maia', nome: 'Restaurante Assados do Giu', foto: 'Loup.png', descricao: 'Endereço: Rua da Carne Assada, 789, Bairro dos Chefs, Número: (31) 3456-7890', avaliacao: 3 },
    { id: 'Restaurante Tira-Dentes', nome: 'Restaurante Tira-Dentes', foto: 'Foto_Jomar_Bragança_(18).jpg', descricao: 'Endereço: Rua da Carne Assada, 789, Bairro dos Chefs, Número: (31) 3456-7890', avaliacao: 3 },
    { id: 'McDonalds', nome: 'McDonalds', foto:'marca-mcdonalds-logo-1200x670.png', descricao:'Endereço: Rua do Molho Especial, 28, Bairro da Carne, Número: (31) 1234-9876', avaliacao: 4 },
    { id: 'Pizza Hut', nome: 'Pizza Hut', foto:'pizza hut.png', descricao: 'Endereço: Rua das Pizzas, 11, Bairro da Calabresa, Número: (31) 3145-7022', avaliacao: 5},
    { id: 'Coco Bambu', nome:'Coco Bambu', foto: 'coco bambu.png', descricao: 'Endereço: Rua dos Camarões, 231, Bairro da Lagosta, Número: (31) 7023-4059', avaliacao: 5},
    { id: 'Boca do Forno', nome: 'Boca do Forno', foto:'boca do forno JPEG.jpg', descricao: 'Endereço: Rua das Tortas, 452, Bairro dos Salgados, Número: (31) 7031-5408', avaliacao: 4},

];

var opcoes = {
    includeScore: true,
    keys: ['nome']
};

var fuse = new Fuse(bancoDeDados, opcoes);

function buscarRestaurante(nome) {
    // Limpa resultados busca anterior
    var divRestaurantes = document.getElementById('restaurantes');
    divRestaurantes.innerHTML = '';

    // Busca banco de dados Fuse.js
    var resultado = fuse.search(nome);

    // Resultados da busca
    for (var i = 0; i < resultado.length; i++) {
        // Cria novo bloco restaurante
        var novoBloco = document.createElement('div');
        var fotoRestaurante = document.createElement('img');
        fotoRestaurante.src = 'img-res/' + resultado[i].item.foto;
        fotoRestaurante.style.width = '200px';
        fotoRestaurante.style.height = '200px';
        novoBloco.appendChild(fotoRestaurante);


        var textContainer = document.createElement('div');
        textContainer.className = 'text-container';

        var nomeRestaurante = document.createElement('h3');
        nomeRestaurante.textContent = resultado[i].item.nome;
        textContainer.appendChild(nomeRestaurante);

        var descricaoRestaurante = document.createElement('p');
        descricaoRestaurante.textContent = resultado[i].item.descricao;
        textContainer.appendChild(descricaoRestaurante);

        var avaliacaoRestaurante = document.createElement('p');
        for (var j = 0; j < 5; j++) {
            avaliacaoRestaurante.innerHTML += j < resultado[i].item.avaliacao ? '⭐' : '☆';
        }
        textContainer.appendChild(avaliacaoRestaurante);

        novoBloco.appendChild(textContainer);

        // Cria novo link para o restaurante
        var linkRestaurante = document.createElement('a');
        linkRestaurante.href = '/menu/' + resultado[i].item.id;
        linkRestaurante.appendChild(novoBloco);

        divRestaurantes.appendChild(linkRestaurante);  
    }
}




// Adicionar um ouvinte de evento à caixa de busca
document.getElementById('busca').addEventListener('input', function() {
    buscarRestaurante(this.value);
});
