function enviarWhats(){

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    let mensagem =
    `Olá!%0A
Nome: ${nome}%0A
E-mail: ${email}%0A
WhatsApp: ${telefone}`;

    let numero = "5588988888888";

    let url = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(url, "_blank");
}