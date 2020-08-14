const form = document.querySelector("[data-form]");

form.addEventListener("submit", event => {
    event.preventDefault();

    const nome = event.target.querySelector("[data-nome]");
    const cpf = event.target.querySelector("[data-cpf]");

    if(validaCPF(cpf.value)){
        cadastrarCliente(nome.value, cpf.value);
    } else {
        alert("cpf invalido");
    }
    
})