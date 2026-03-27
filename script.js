function logar(){
    let usuario = document.getElementById('inputUsuario').value
    let senha = document.getElementById('inputSenha').value

    if (usuario == "Samuel" && senha == "atumalaka"){
        window.location.href = "home.html"
    } else {
        // alert("Usuário/Senha incorretos!")
        Swal.fire({
        title: "Acesso Negado!",
        text: "Usuário/Senha incorretos!",
        icon: "error"
        });
    }
}