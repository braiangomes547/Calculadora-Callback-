function adicionar(valor) {
    document.getElementById("display").value +=valor;
}

function limpar() {
    document.getElementById("display").value ="";
}

function calcular() {
    try {
        let resulatado = eval(document.getElementById("display").value);
        document.getElementById("display").value = resulatado
    } catch {
        document.getElementById("display").value = "Erro";
    }
}