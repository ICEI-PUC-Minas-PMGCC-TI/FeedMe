function exibeContatos() {
  // Remove todas as linhas do corpo da tabela
  $("#table-contatos").html("");

  // Popula a tabela com os registros do banco de dados
  for (i = 0; i < db.data.length; i++) {
      let contato = db.data[i];    
      $("#table-contatos").append(`<tr><td scope="row">${contato.restaurante}</td>
                                      <td>${contato.produto}</td>
                                      <td>${contato.preço}</td>
                                  </tr>`);
  }
}
// declara um conjunto inicial de contatos
var db_contatos_inicial = {
  "data": [
      {
          "restaurante": "Restaurante Maria das Tranças",
          "produto": "Feijoada",
          "preço": "R$30,00"
      },
      {
          "restaurante": "Assados do Giu",
          "produto": "Espetinho",
          "preço": "R$11,90"
      },
      {
          "restaurante": "Assados do Giu",
          "produto": "Porção de fritas",
          "preço": "R$20,00",
      }


  ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
  db = db_contatos_inicial
};


function insertContato(contato) {
  let novoContato = {
      "id": novoId,
      "restaurante": contato.restaurante,
      "produto" : contato.produto,
      "preço": contato.preço,
      "descrição" : contato.descrição,
      "tamanho": contato.tamanho,
      "foto": contato.foto
  };

  // Insere o novo objeto no array
  db.data.push(novoContato);

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_contato', JSON.stringify(db));
}

