function alterarCor(idClicado) {
    var masculino = document.getElementById('masculinoid');
    var feminino = document.getElementById('femininoid');

    if (idClicado === 'masculinoid') {
        masculino.style.backgroundColor = 'blue';
        feminino.style.backgroundColor = '';
    } else if (idClicado === 'femininoid') {
        feminino.style.backgroundColor = 'deeppink';
        masculino.style.backgroundColor = '';
    }
}

function pegarValorEmPeso(){
    let input1 = document.getElementById("peso")
    let PesoDaPessoa = input1.value
    console.log(PesoDaPessoa)
}

