const allEvents = document.querySelectorAll(".event");

function changeborder2 (event){
    
    for (const element of allEvents) {
        element.style.border="3px solid white";
    }
    event.currentTarget.style.border="3px solid red"
    console.log(event.currentTarget);
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
   title.innerHTML="_______________ Deusiémme étape _______________" ;
}



