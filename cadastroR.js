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

function exibeContatos() {
    // Remove todas as linhas do corpo da tabela
    $("#table-contatos").html("");

    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < db.data.length; i++) {
        let contato = db.data[i];    
        $("#table-contatos").append(`<tr><td scope="row">${contato.id}</td>
                                        <td>${contato.restaurante}</td>
                                        <td>${contato.telefone}</td>
                                        <td>${contato.email}</td>
                                        <td>${contato.endereço}</td>
                                        <td>${contato.nome}</td>
                                        <td>${contato.cpf}</td>
                                        <td>${contato.cnpj}</td>
                                    </tr>`);
    }
}

function init() {
    // Adiciona funções para tratar os eventos 
    $("#btnInsert").click(function () {
        // Verfica se o formulário está preenchido corretamente
        if (!$('#form-contato')[0].checkValidity()) {
            displayMessage("Preencha o formulário corretamente.");
            return;
        }

        // Obtem os valores dos campos do formulário
        let campoRestaurante = $("#inputRestaurante").val();
        let campoTelefone = $("#inputTelefone").val();
        let campoEmail = $('#inputEmail').val();
        let campoEndereço = $("#inputEndereço").val();
        let campoNome = $('#inputNome').val();
        let campoCPF = $('#inputCPF').val();
        let campoCNPJ = $('#inputCNPJ').val();
        let campoimage = 'https://img.freepik.com/vetores-gratis/lhama-bonito-negocios-icon-ilustracao-personagem-de-desenho-animado-de-mascote-de-alpaca-conceito-de-icone-animal-isolado_138676-989.jpg?w=2000';
        let contato = { restaurante: campoRestaurante, 
            telefone: campoTelefone, 
            email: campoEmail, 
            endereço: campoEndereço, 
            nome: campoNome,
            cpf: campoCPF,
            cnpj: campoCNPJ, 
            foto: campoimage
        }

        insertContato(contato);

        // Reexibe os contatos
        exibeContatos();

        // Limpa o formulario
        $("#form-contato")[0].reset();
    });

    // Intercepta o click do botão Alterar
    $("#btnUpdate").click(function () {
        // Obtem os valores dos campos do formulário
        let campoId = $("#inputId").val();
        if (campoId == "") {
            displayMessage("Selecione um contato para ser alterado.");
            return;
        }
        let campoRestaurante = $("#inputRestaurante").val();
        let campoTelefone = $("#inputTelefone").val();
        let campoEmail = $("#inputEmail").val();
        let campoEndereço = $("#inputEndereço").val();
        let campoNome = $("#inputNome").val();
        let campoCPF = $('#inputCPF').val();
        let campoCNPJ = $('#inputCNPJ').val();
        let campoimage = 'https://img.freepik.com/vetores-gratis/lhama-bonito-negocios-icon-ilustracao-personagem-de-desenho-animado-de-mascote-de-alpaca-conceito-de-icone-animal-isolado_138676-989.jpg?w=2000'; 
        let contato = { restaurante: campoRestaurante, 
            telefone: campoTelefone, 
            email: campoEmail, 
            endereço: campoEndereço, 
            nome: campoNome,
            cpf: campoCPF,
            cnpj: campoCNPJ,
            foto: campoimage 
        };

        updateContato(parseInt(campoId), contato);

        // Reexibe os contatos
        exibeContatos();

        // Limpa o formulario
        $("#form-contato")[0].reset();
    });

    // Intercepta o click do botão Excluir
    $("#btnDelete").click(function () {
        let campoId = $("#inputId").val();
        if (campoId == "") {
            displayMessage("Selecione um contato a ser excluído.");
            return;
        }
        deleteContato(parseInt(campoId));

        // Reexibe os contatos
        exibeContatos();

        // Limpa o formulario
        $("#form-contato")[0].reset();
    });

    // Intercepta o click do botão Listar Contatos
    $("#btnClear").click(function () {
        $("#form-contato")[0].reset();
    });

    // Oculta a mensagem de aviso após alguns segundos
    $('#msg').bind("DOMSubtreeModified", function () {
        window.setTimeout(function () {
            $(".alert").fadeTo(500, 0).slideUp(500, function () {
                $(this).remove();
            });
        }, 5000);
    });

    // Preenche o formulário quando o usuario clicar em uma linha da tabela 
    $("#grid-contatos").on("click", "tr", function (e) {
        let linhaContato = this;
        colunas = linhaContato.querySelectorAll("td");

        $("#inputId").val(colunas[0].innerText);
        $("#inputRestaurante").val(colunas[1].innerText);
        $("#inputTelefone").val(colunas[2].innerText);
        $("#inputEmail").val(colunas[3].innerText);
        $("#inputEndereço").val(colunas[4].innerText);
        $("#inputNome").val(colunas[5].innerText);
        $("#inputCPF").val(colunas[6].innerText);
        $("#inputCNPJ").val(colunas[6].innerText);
    });

    exibeContatos();
}