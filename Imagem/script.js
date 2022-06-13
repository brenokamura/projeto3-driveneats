let plate;
let drink;
let dessert;

function chooseChicken(){
   document.getElementById("chicken").style.borderColor = "green";
   document.getElementById("chicken-1").style.borderColor = "white";
   plate = "Frango";
}

function chooseChicken1(){
    document.getElementById("chicken-1").style.borderColor = "green";
    document.getElementById("chicken").style.borderColor = "white";
    plate = "Carne";
 }

function chooseChicken2(){
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("juice").style.borderColor = "white";
    drink = "Coca";
}
 
function chooseJuice(){
    document.getElementById("juice").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    drink = "Suco";
}

function choosePudding(){
    document.getElementById("pudding").style.borderColor = "green";
    document.getElementById("iceCream").style.borderColor = "white";
    dessert = "Pudim"
}

function chooseIceCream(){
    document.getElementById("iceCream").style.borderColor = "green";
    document.getElementById("pudding").style.borderColor = "white";
    dessert = "Sorvete"
}
 
function finalizeOrder(){
    if (document.getElementById("chicken").style.borderColor == "green" ||  document.getElementById("beef").style.borderColor == "green" ){
    }else{
        alert("Selecione um dos pratos!")
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
   window.open("https://wa.me/+5511993296355?text=" + message)
}