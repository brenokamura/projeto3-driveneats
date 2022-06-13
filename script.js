let plate;
let drink;
let dessert;

function chooseChicken(){
   document.getElementById("chicken").style.borderColor = "green";
   document.getElementById("beef").style.borderColor = "white";
   document.getElementById("feijoada").style.borderColor = "white";
   plate = "Frango";
   habilitarBotao()
}

function chooseBeef(){
    document.getElementById("beef").style.borderColor = "green";
    document.getElementById("chicken").style.borderColor = "white";
    document.getElementById("feijoada").style.borderColor = "white";
    plate = "Filé com Fritas";
    habilitarBotao()
 }

 function chooseFeijoada(){
    document.getElementById("feijoada").style.borderColor = "green";
    document.getElementById("beef").style.borderColor = "white";
    document.getElementById("chicken").style.borderColor = "white";
    plate = "Feijoada";
    habilitarBotao()
 }
function chooseCoca(){
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("juice").style.borderColor = "white";
    document.getElementById("caipirinha").style.borderColor = "white";
    drink = "Coca";
    habilitarBotao()
}
 
function chooseJuice(){
    document.getElementById("juice").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("caipirinha").style.borderColor = "white";
    drink = "Suco";
}
function chooseCaipirinha(){
    document.getElementById("caipirinha").style.borderColor = "green";
    document.getElementById("juice").style.borderColor = "white";
    document.getElementById("coca").style.borderColor = "white";
    drink = "Caipirinha";
    habilitarBotao()
}

function choosePudding(){
    document.getElementById("pudding").style.borderColor = "green";
    document.getElementById("iceCream").style.borderColor = "white";
    document.getElementById("cake").style.borderColor = "white";
    dessert = "Pudim"
    habilitarBotao()
}

function chooseIceCream(){
    document.getElementById("iceCream").style.borderColor = "green";
    document.getElementById("pudding").style.borderColor = "white";
    document.getElementById("cake").style.borderColor = "white";
    dessert = "Sorvete"
    habilitarBotao()
}

function chooseCake(){
    document.getElementById("cake").style.borderColor = "green";
    document.getElementById("iceCream").style.borderColor = "white";
    document.getElementById("pudding").style.borderColor = "white";
    dessert = "Bolo"
    habilitarBotao()
}
function habilitarBotao(){
    if(plate && drink && dessert){
        const elemento = document.querySelector(".footer-p");
        elemento.innerHTML = `Fechar Pedido`;
        document.getElementById("finalize").style.backgroundColor = "green";
        document.getElementById(`finalize`).style.border = "green";
    }
}
function finalizeOrder(){
    if ((document.getElementById("chicken").style.borderColor == "green" ||  document.getElementById("beef").style.borderColor == "green" ||document.getElementById("feijoada").style.borderColor == "green") && (document.getElementById("coca").style.borderColor == "green" ||  document.getElementById("juice").style.borderColor == "green" ||document.getElementById("caipirinha").style.borderColor == "green" ) && (document.getElementById("pudding").style.borderColor == "green" ||  document.getElementById("iceCream").style.borderColor == "green" ||document.getElementById("cake").style.borderColor == "green")){
        let message
        message = "Olá, gostaria de pedir um combo: " + plate +", "+ drink +" e "+ dessert + " no valor de R$33,70"
        window.open("https://wa.me/+5511993296355?text=" + message)
    }else{
        alert("Por favor, selecione prato, bebida e sobremesa!")
    }
   
   
   /*     alert("Selecione um dos pratos!")
    }
    if (document.getElementById("coca").style.borderColor == "green" ||  document.getElementById("juice").style.borderColor == "green" ){
    }else{
        alert("Selecione uma das bebidas!")
    }
    if (document.getElementById("pudding").style.borderColor == "green" ||  document.getElementById("iceCream").style.borderColor == "green" ){
    }else{
        alert("Selecione uma das sobremesas!")
    }
   let message
   message = "Olá, gostaria de pedir um combo: " + plate +", "+ drink +" e "+ dessert
   window.open("https://wa.me/+5511993296355?text=" + message)*/
}