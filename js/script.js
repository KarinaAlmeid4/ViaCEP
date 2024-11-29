function Limpar (){
    document.getElementById("CEP").value = "";
    document.getElementById("Rua").value = "";
    document.getElementById("Bairro").value = "";
    document.getElementById("Cidade").value = "";
    document.getElementById("UF").value = "";
    document.getElementById("IBGE").value = "";
}

function meucallback(conteudo){
    if(!("Erro" in conteudo)){
        document.getElementById("Rua").value = conteudo.logradouro;
        document.getElementById("Bairro").value = conteudo.bairro;
        document.getElementById("Cidade").value = conteudo.localidade;
        document.getElementById("UF").value = conteudo.uf;
        document.getElementById("IBGE").value = conteudo.ibge;
    }
    else{
        Limpar();
        alert("CEP não encontrado!");
    }

}
 function PesquisaCep(valor){
    var cep = valor.replace(/\D/g,'');

    if(cep != ""){
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)){
            document.getElementById("Rua").value = "...";
            document.getElementById("Bairro").value = "...";
            document.getElementById("Cidade").value = "...";
            document.getElementById("UF").value = "...";
            document.getElementById("IBGE").value = "...";

            var script = document.createElement("script");

            script.src = "https://viacep.com.br/ws/" + cep + "/json/?callback=meucallback";

            document.body.appendChild(script)
        }

        else{
            Limpar();
            alert("Formato de CEP inválido!");
        }
    }  
    else{
        Limpar();
        alert("Campo vazio!");
    }
}