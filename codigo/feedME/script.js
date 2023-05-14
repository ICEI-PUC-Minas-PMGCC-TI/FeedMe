<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="sytle.css" rel="stylesheet" type="text/css" />
    <script src="script.jss"></script>
</head>

<body>
  <form id="form-contato">
            <div class="form-group row">
                <div class="col-sm-4 mb-4">
                    <label Id_traducao="Id" for="inputId">Id</label>
                    <input type="text" class="form-control" id="inputId" placeholder="ID" disabled>
                </div>
                <div class="col-sm-8">
                    <label Id_traducao="Id" for="inputNome">Email</label>
                    <input type="text" class="form-control" id="inputEmail" required placeholder="Informe o email">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-7 mb-4">
                    <label Id_traducao="NomeRes" for="inputTelefone">Telefone</label>
                    <input type="text" class="form-control" id="inputTelefone" required placeholder="Informe o telefone">
                </div>
            </div>
    
  </form>
   <div class="form-group row">
                <div class="col-sm-12">
                    <input type="button" class="btn btn-success" id="btnInsert" value="Receber notificações semanais">
                    <input type="button" class="btn btn-danger" id="btnDelete" value="Silenciar notificações">
                </div>
   <div class="row">
            <div class="col-sm-12">
                <table id="grid-contatos" class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th Id_traducao="Telefone" scope="col">Telefone</th>
                            <th Id_traducao="Email" scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody id="table-contatos">
                        <tr>
                            <td scope="row">1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  <script src="cadastroR.js"></script>
    <script>
   for (i = 0; i < db.data.length; i++) {
                let contato = db.data[i];    
                $("#table-contatos").append(`<tr><td scope="row">${contato.id}</td>
                                                <td>${contato.email}</td>
                                                <td>${contato.telefone}</td>
                                            </tr>`);
            }
    </script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="cadastroR.js"></script>
    <script>
        function exibeContatos() {
            // Remove todas as linhas do corpo da tabela
            $("#table-contatos").html("");

            // Popula a tabela com os registros do banco de dados
            for (i = 0; i < db.data.length; i++) {
                let contato = db.data[i];    
                $("#table-contatos").append(`<tr><td scope="row">${contato.id}</td>
                                                <td>${contato.telefone}</td>
                                                <td>${contato.email}</td>
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
                let campoTelefone = $("#inputTelefone").val();
                let campoEmail = $('#inputEmail').val();
                let contato = {  
                    telefone: campoTelefone, 
                    email: campoEmail, 
                }

                insertContato(contato);

                // Reexibe os contatos
                exibeContatos();

            // Intercepta o click do botão Alterar
            $("#btnUpdate").click(function () {
                // Obtem os valores dos campos do formulário
                let campoId = $("#inputId").val();
                if (campoId == "") {
                    displayMessage("Selecione um contato para ser alterado.");
                    return;
                }
                let campoTelefone = $("#inputTelefone").val();
                let campoEmail = $("#inputEmail").val();
                let contato = {  
                    telefone: campoTelefone, 
                    email: campoEmail
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
                $("#inputTelefone").val(colunas[1].innerText);
                $("#inputEmail").val(colunas[2].innerText);
            });

            exibeContatos();
        }
    </script>

                  
</body>

</html>
