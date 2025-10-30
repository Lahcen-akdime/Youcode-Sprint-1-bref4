const allEvents = document.querySelectorAll(".event");
var tohide = document.getElementById("content1");
var toadd1 = document.getElementById("lesbillets");
let conteur = 0 ;
// tohide.style.display="none" ;


for (const element of allEvents) {
    element.addEventListener("click",changeborder2);   
}

function changeborder2 (event){
    
    for (const element of allEvents) {
        element.style.border="3px solid white";
    }
    event.currentTarget.style.border="3px solid red";
    console.log(event.currentTarget);
}



var tohide = document.getElementById("content1");
console.log(tohide)
var titre = document.getElementById("title");
console.log(titre)

function hide(){
   tohide.style.display="none" ;
   title.textContent="_______________ Deusiémme étape _______________";
}
function toadd(){
    console.log(conteur)
    console.log(toadd)

conteur += 1 ;
toadd1.textContent=conteur;
}
function toremove(){
    if(conteur > 0) {
    conteur -= 1 ;
    toadd1.textContent=conteur;
    }
}



