// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "restaurante": "Restaurante Maria das Tranças",
            "produto": "Feijoada",
            "preço": "R$30,00",
            "descrição": "Feijoada magra,com bacon,linguiça toscana e costelinha",
            "tamanho": "Serve até 1 pessoa",
            "foto": "https://i.pinimg.com/474x/46/94/71/469471baeb89f12e5103cd614c7a684b.jpg"
        },
        {
            "id": 2,
            "restaurante": "Assados do Giu",
            "produto": "Espetinho",
            "preço": "R$11,90",
            "descrição": "Espeto de alcatra aproximadamente 120 gramas",
            "tamanho": "Serve até 1 pessoa",
            "foto": "https://www.educolorir.com/foto-cachorro-filhote-dm19542.jpg"
        },
        {
            "id": 3,
            "restaurante": "Assados do Giu",
            "produto": "Porção de fritas",
            "preço": "R$20,00",
            "descrição": "Porção de 300 gramas de batata frita",
            "tamanho": "Serve até 2 pessoas",
            "foto": "https://i.pinimg.com/474x/46/94/71/469471baeb89f12e5103cd614c7a684b.jpg"
        },
        {
            "id": 4,
            "restaurante": "Restaurante Quinto do Ouro",
            "produto": "Prato executivo",
            "preço": "R$38,20",
            "descrição": "Bife ancho ao molho de ervas com arroz branco",
            "tamanho": "Serve até 1 pessoa",
            "foto": "https://www.racoesreis.com.br/wordpress/wp-content/uploads/gato-origem.jpg"
        }


    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
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
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].restaurante = contato.restaurante,
    db.data[index].produto = contato.produto,
    db.data[index].preço = contato.preço,
    db.data[index].descrição = contato.descrição,
    db.data[index].tamanho = contato.tamanho,
    db.data[index].foto = contato.foto

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}