function limparSenha(){
    document.getElementById("isenhaLogin").value = ""
    document.getElementById("isenha").value = ""
}

function CarregarCadastro(){
    let login = document.getElementsByClassName("login")[0]
    login.style.display = 'none';

    let cadastro = document.getElementsByClassName("cadastro")[0]
    cadastro.style.display = 'flex';

}

function CarregarLoading(event) {

    event.preventDefault();

    let nome = document.getElementById("inome").value + document.getElementById("inomeCompleto").value;
    let senha = document.getElementById("isenha").value + document.getElementById("isenhaLogin").value;
    let sobreNome = document.getElementById("isobreNome").value
    let cadastro = document.getElementsByClassName("cadastro")[0]
    
    if (nome === "" || senha === "") {

        document.getElementById("item-1").style.marginTop = "10px"
        document.getElementById("item-2").style.marginTop = "10px"
        document.getElementById("criarConta").style.marginTop = "15px"

        let erro = document.getElementsByClassName("erro")[0]
            erro.innerHTML = "*Exextém campos vazios"

        let erro2 = document.getElementsByClassName("erro")[1]
            erro2.innerHTML = "*Exextém campos vazios"


    }else if(sobreNome === "" && getComputedStyle(cadastro).display === "flex") {

        document.getElementById("item-1").style.marginTop = "10px"
        document.getElementById("item-2").style.marginTop = "10px"
        document.getElementById("criarConta").style.marginTop = "15px"

        let erro2 = document.getElementsByClassName("erro")[1]
            erro2.innerHTML = "*Exextém campos vazios"

    }else{
        let mensagem = "Bem vindo, " + nome;
        document.getElementById("saudacao").innerHTML = mensagem;

            console.log("chegou aqui")
            cadastro.style.display = 'none';

        let login = document.getElementsByClassName("login")[0]
            login.style.display = 'none';
        
        let loading = document.getElementsByClassName("loading")[0]
            loading.style.display = "flex";
    }
    

}