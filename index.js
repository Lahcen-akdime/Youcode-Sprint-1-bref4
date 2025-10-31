const allEvents = document.querySelectorAll(".event");
var tohide = document.getElementById("content1");
var tohide2 = document.getElementById("content2");
var toadd1 = document.getElementById("lesbillets");
let selected ;
let pricefix;
let conteur = 1 ;
let apayer ;
tohide.style.display="none" ;
tohide2.style.display="none" ;


function changeborder2 (event){
    
    for (const element of allEvents) {
        element.style.border="1px solid white";
    }
    event.currentTarget.style.border="3px solid red";
    console.log(event.currentTarget);
    apayer = event.currentTarget.querySelector("#price") ;
    console.log(apayer.textContent);
    document.getElementById("totale").textContent=apayer.textContent;
    selected = Number(apayer.textContent) ;
    pricefix = Number(selected) ;
}

for (const element of allEvents) {
    element.addEventListener("click",changeborder2);
    
}

var tohide = document.getElementById("content1");
console.log(tohide)
var titre = document.getElementById("title");
console.log(titre)

function hide(){
   tohide.style.display="none" ;
   tohide2.style.display="flex" ;
   title.textContent="_______________ Deusiémme étape _______________";
}
function toadd(){
console.log(conteur);
console.log(toadd);
conteur += 1 ;
selected += Number(pricefix);
toadd1.textContent=conteur;
 document.getElementById("totale").textContent=selected;
}
function toremove(){
    if(conteur > 1) {
    conteur -= 1 ;
    selected -= Number(pricefix);
    toadd1.textContent=conteur;
     document.getElementById("totale").textContent=selected;
    }
}
console.log(apayer);
function returnto1(){
tohide.style.display="flex" ;
}
function goto3(){
tohide2.style.display="none" ;
title.textContent="______________________ Troisiéme étape ______________________";
startloop() ;
}
let first=1
function startloop(){
for(first;first<=conteur;first++){
    document.getElementById("combien").textContent=first + "/" + conteur;
    first += 1 ;
    return;
    
}
}

