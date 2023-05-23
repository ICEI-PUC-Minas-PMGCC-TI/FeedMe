function exibeContatos() {
    // Remove todas as linhas do corpo da tabela
    $("#table-contatos").html("");

    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < db.data.length; i++) {
        let contato = db.data[i];    
        $("#table-contatos").append(`<tr><td scope="row">${contato.id}</td>
                                        <td>${contato.restaurante}</td>
                                        <td>${contato.produto}</td>
                                        <td>${contato.preço}</td>
                                        <td>${contato.descrição}</td>
                                        <td>${contato.tamanho}</td>
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
        let campoProduto = $("#inputProduto").val();
        let campoPreço = $('#inputPreço').val();
        let campoDescrição = $("#inputDescrição").val();
        let campoTamanho = $('#inputTamanho').val();
        let campoimage = 'https://img.freepik.com/vetores-gratis/lhama-bonito-negocios-icon-ilustracao-personagem-de-desenho-animado-de-mascote-de-alpaca-conceito-de-icone-animal-isolado_138676-989.jpg?w=2000';
        let contato = { restaurante: campoRestaurante, 
            produto: campoProduto, 
            preço: campoPreço, 
            descrição: campoDescrição, 
            tamanho: campoTamanho, 
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
        let campoProduto = $("#inputProduto").val();
        let campoPreço = $("#inputPreço").val();
        let campoDescrição = $("#inputDescrição").val();
        let campoTamanho = $("#inputTamanho").val();
        let campoimage = 'https://img.freepik.com/vetores-gratis/lhama-bonito-negocios-icon-ilustracao-personagem-de-desenho-animado-de-mascote-de-alpaca-conceito-de-icone-animal-isolado_138676-989.jpg?w=2000'; 
        let contato = { restaurante: campoRestaurant, 
            produto: campoProduto, 
            preço: campoPreço, 
            descrição: campoDescrição, 
            tamanho: campoTamanho,
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
        $("#inputRestaurant").val(colunas[1].innerText);
        $("#inputProduto").val(colunas[2].innerText);
        $("#inputPreço").val(colunas[3].innerText);
        $("#inputDescrição").val(colunas[4].innerText);
        $("#inputTamanho").val(colunas[5].innerText)
    });

    exibeContatos();
}

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