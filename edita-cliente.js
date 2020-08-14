const pegaUrl = new URL(window.location);
const id = pegaUrl.searchParams.get('id');

const inputCpf = document.querySelector("[data-cpf]");
const inputNome = document.querySelector("[data-nome");

editarCliente(id).then(dados => {
    inputCpf.value = dados[0].cpf 
    inputNome.value = dados[0].nome 
})

const form = document.querySelector("[data-form]");
form.addEventListener('submit', event => {
    event.preventDefault();
    if(!validaCPF(inputCpf.value)){
        alert("Esse CPF não é valido")
        return
    }

    concluirEdicao(id, inputCpf.value, inputNome.value);

})