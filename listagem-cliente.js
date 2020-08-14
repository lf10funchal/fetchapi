const remover = id => {
    if(confirm("Deseja remover cliente?")){
        removerCliente(id);
    }
}
const corpoTabela = document.querySelector("[data-conteudo-tabela]");  

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr');
    const conteudoLinha =
        `
            <td>${cpf}</td>
            <td>${nome}</td>
            <button type="button" class="btn btn-danger" onclick="remover(${id})">Excluir</button>
            <a href="edita-clientes.html?id=${id}"><button class="btn btn-info">Editar</button></a>
        `
    linha.innerHTML = conteudoLinha;
    return linha;
}

listarCliente().then(resposta => {
    resposta.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
    })
})