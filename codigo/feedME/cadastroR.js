// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "restaurante": "Restaurante Maria das Tranças",
            "telefone": "31-99526-1242",
            "email": "maria.bh.coelho@gmail.com",
            "endereço": "R. Estoril,938-São Francisco-BH",
            "nome": "Maria Coelho de Souza",
            "cpf": "179.910.550-43",
            "cnpj": "05.279.506/0001-03",
            "foto": "https://i.pinimg.com/474x/46/94/71/469471baeb89f12e5103cd614c7a684b.jpg"
        },
        {
            "id": 2,
            "restaurante": "Assados do Giu",
            "telefone": "31-99543-8355",
            "email": "gil.cordeiro33@yahoo.com",
            "endereço": "R. Rosalvo de melo franco,231-BH",
            "nome": "Gilberto Soares Cordeiro",
            "cpf": "265.643.700-83",  
            "cnpj": "31.931.122/0001-25",
            "foto": "https://www.educolorir.com/foto-cachorro-filhote-dm19542.jpg"
        },
        {
            "id": 3,
            "restaurante": "Restaurante Quinto do Ouro",
            "telefone": "31-99543-8355",
            "email": "vic.santos72@yahoo.com",
            "endereço": "Av. Cristiano Machado,4001-BH",
            "nome": "Victor Matias dos Santos",
            "cpf": "114.164.066-03",
            "cnpj": "57.141.164/0001-56",
            "foto": "https://i.pinimg.com/474x/46/94/71/469471baeb89f12e5103cd614c7a684b.jpg"
        },
        {
            "id": 4,
            "restaurante": "Dásos Restaurante-Shopping Cidade",
            "telefone": "31-99033-6129",
            "email": "dasos.PS9002@gmail.com",
            "endereço": "Rua dos Tupis,337-Centro-BH",
            "nome": "Dásos Pereira Silva",
            "cpf": "270.082.796-12",
            "cnpj": "63.511.172/0001-40",
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
        "telefone" : contato.telefone,
        "email": contato.email,
        "endereço" : contato.endereço,
        "nome": contato.nome,
        "cpf": contato.cpf,
        "cnpj": contato.cnpj,
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
    db.data[index].telefone = contato.telefone,
    db.data[index].email = contato.email,
    db.data[index].endereço = contato.endereço,
    db.data[index].nome = contato.nome,
    db.data[index].cpf = contato.cpf,
    db.data[index].cnpj = contato.cnpj,
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