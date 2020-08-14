function verificaCpf(cpf){
    const cpfInvalidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ]
    return cpfInvalidos.indexOf(cpf) === -1
}

function somaNumeroCpf (cpf, numeroDeDigito, peso){
    let soma = 0;
    for(let indice = 1; indice <= numeroDeDigito; indice++){
        soma += parseInt(cpf.substring(indice - 1, indice)) * (peso - indice)
    }
    return soma;
}

function verificaDigito(cpf, numeroDeDigito, peso, digitoVerificacao){
    const soma = somaNumeroCpf(cpf, numeroDeDigito, peso);
    const resto = (soma * 10) % 11;
    return resto === digitoVerificacao;
}

function verificaPrimeiroDigito(cpf){
    const peso = 11;
    const totalDeDigitos = 9;
    const digitoDeVerificacao = parseInt(cpf.substring(9,10));

    return verificaDigito(
        cpf,
        totalDeDigitos,
        peso,
        digitoDeVerificacao
    )
}

function verificaSegundoDigito(cpf){
    const peso = 12;
    const totalDeDigitos = 10;
    const digitoDeVerificacao = parseInt(cpf.substring(10,11));

    return verificaDigito(
        cpf,
        totalDeDigitos,
        peso,
        digitoDeVerificacao
    )
}

function validaCPF(cpf){
    return (
        verificaCpf(cpf)&&
        verificaPrimeiroDigito(cpf)&&
        verificaSegundoDigito(cpf)
    )
}