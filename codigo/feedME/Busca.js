var bancoDeDados = [
    { id: 'maria-das-trancas', nome: 'Restaurante Maria das tranças', tipo: 'cozinha-brasileira', foto: '03_OLGA_NUR_Foto_por_Gabriel_Castro.png', descricao: 'Endereço: Rua da Trança, 123, Cidade Alta, Número: (31) 1234-5678', avaliacao: 4.5 },
    { id: 'kinto-do-ouro', nome: 'Restaurante Kinto do Ouro', tipo: 'cozinha-italiana', foto: 'foto kinto.jpg', descricao: 'Endereço: Avenida do Ouro, 456, Bairro dos Metais, Número: (31) 2345-6789', avaliacao: 4 },
    { id: 'assados-maia', nome: 'Restaurante Assados do Giu', tipo: 'cozinha-brasileira', foto: 'Loup.png', descricao: 'Endereço: Rua da Carne Assada, 789, Bairro dos Chefs, Número: (31) 3456-7890', avaliacao: 3 },
    { id: 'Restaurante Tira-Dentes', nome: 'Restaurante Tira-Dentes', tipo: 'cozinha-brasileira', foto: 'Foto_Jomar_Bragança_(18).jpg', descricao: 'Endereço: Rua da Carne Assada, 789, Bairro dos Chefs, Número: (31) 3456-7890', avaliacao: 3 },
    { id: 'McDonalds', nome: 'McDonalds', tipo: 'fast-food' ,foto:'marca-mcdonalds-logo-1200x670.png', descricao:'Endereço: Rua do Molho Especial, 28, Bairro da Carne, Número: (31) 1234-9876', avaliacao: 4 },
    { id: 'Pizza Hut', nome: 'Pizza Hut', tipo: 'pizza' ,foto:'pizza hut.png', descricao: 'Endereço: Rua das Pizzas, 11, Bairro da Calabresa, Número: (31) 3145-7022', avaliacao: 5},
    { id: 'Coco Bambu', nome:'Coco Bambu', tipo: 'frutos-mar', foto: 'coco bambu.png', descricao: 'Endereço: Rua dos Camarões, 231, Bairro da Lagosta, Número: (31) 7023-4059', avaliacao: 5},
    { id: 'Boca do Forno', nome: 'Boca do Forno', tipo: 'lanches', foto:'boca do forno JPEG.jpg', descricao: 'Endereço: Rua das Tortas, 452, Bairro dos Salgados, Número: (31) 7031-5408', avaliacao: 4},
  ];
  
  var fuse = new Fuse(bancoDeDados, {
    includeScore: true,
    keys: ['nome'],
  });
  
  function buscarRestaurante(nome, filtrosSelecionados) {
    var resultados = [];
  
    if (filtrosSelecionados.length === 0) {
      resultados = fuse.search(nome);
    } else {
      var filtroRestaurantes = bancoDeDados.filter(function(restaurante) {
        return filtrosSelecionados.includes(restaurante.tipo);
      });
  
      var fuseFiltrado = new Fuse(filtroRestaurantes, {
        includeScore: true,
        keys: ['nome'],
      });
  
      resultados = fuseFiltrado.search(nome);
    }
  
    var divRestaurantes = document.getElementById('restaurantes');
    divRestaurantes.innerHTML = '';
  
    for (var i = 0; i < resultados.length; i++) {
      var restaurante = resultados[i].item;
  
      var novoBloco = document.createElement('div');
      var fotoRestaurante = document.createElement('img');
      fotoRestaurante.src = 'imagens/' + restaurante.foto;
      fotoRestaurante.style.width = '200px';
      fotoRestaurante.style.height = '200px';
      novoBloco.appendChild(fotoRestaurante);
  
      var textContainer = document.createElement('div');
      textContainer.className = 'text-container';
  
      var nomeRestaurante = document.createElement('h3');
      nomeRestaurante.textContent = restaurante.nome;
      textContainer.appendChild(nomeRestaurante);
  
      var descricaoRestaurante = document.createElement('p');
      descricaoRestaurante.textContent = restaurante.descricao;
      textContainer.appendChild(descricaoRestaurante);
  
      var avaliacaoRestaurante = document.createElement('p');
      for (var j = 0; j < 5; j++) {
        avaliacaoRestaurante.innerHTML += j < restaurante.avaliacao ? '⭐' : '☆';
      }
      textContainer.appendChild(avaliacaoRestaurante);
  
      novoBloco.appendChild(textContainer);
  
      var linkRestaurante = document.createElement('a');
      linkRestaurante.href = '/menu/' + restaurante.id;
      linkRestaurante.appendChild(novoBloco);
  
      divRestaurantes.appendChild(linkRestaurante);
    }
  }
  
  document.getElementById('busca').addEventListener('input', function() {
    var valorDigitado = this.value.trim();
    var filtrosSelecionados = [];
    document.querySelectorAll('#filtros input[type="checkbox"]:checked').forEach(function(checkbox) {
      filtrosSelecionados.push(checkbox.id);
    });
    buscarRestaurante(valorDigitado, filtrosSelecionados);
  });
  
  document.querySelectorAll('#filtros input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      var valorDigitado = document.getElementById('busca').value.trim();
      var filtrosSelecionados = [];
      document.querySelectorAll('#filtros input[type="checkbox"]:checked').forEach(function(checkbox) {
        filtrosSelecionados.push(checkbox.id);
      });
      buscarRestaurante(valorDigitado, filtrosSelecionados);
    });
  });
  
