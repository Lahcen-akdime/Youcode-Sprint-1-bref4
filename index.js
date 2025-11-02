const allEvents = document.querySelectorAll(".event");
var tohide = document.getElementById("content1");
var tohide2 = document.getElementById("content2");
var tohide3 = document.getElementById("content3");
var tohide4 = document.getElementById("content4");

var toadd1 = document.getElementById("lesbillets");
let selected;
let pricefix;
let conteur = 1;
let apayer;
let last = document.getElementById("lecarte-choisi").innerHTML ;
 tohide.style.display="none" ;
tohide2.style.display = "none";
tohide3.style.display = "none";
tohide4.style.display = "flex";

function changeborder2(event) {
    for (const element of allEvents) {
        element.style.border = "1px solid white";
    }
    event.currentTarget.style.border = "3px solid red";
    console.log(event.currentTarget);
    apayer = event.currentTarget.querySelector("#price");
    document.getElementById("lecarte-choisi").innerHTML=event.currentTarget.innerHTML ;
    let carte = event.currentTarget ;
    console.log(apayer.textContent);
    document.getElementById("totale").textContent = apayer.textContent;
    selected = Number(apayer.textContent);
    pricefix = Number(selected);
}
for (const element of allEvents) {
    element.addEventListener("click", changeborder2);

}
var tohide = document.getElementById("content1");
console.log(tohide)
var titre = document.getElementById("title");
console.log(titre)
function hide() {
    tohide.style.display = "none";
    tohide2.style.display = "flex";
    title.textContent = "_______________ Deusiémme étape _______________";
}
function toadd() {
    console.log(conteur);
    console.log(toadd);
    conteur += 1;
    selected += Number(pricefix);
    toadd1.textContent = conteur;
    document.getElementById("totale").textContent = selected;

}
function toremove() {
    if (conteur > 1) {
        conteur -= 1;
        selected -= Number(pricefix);
        toadd1.textContent = conteur;
        document.getElementById("totale").textContent = selected;
        document.getElementById("total").textContent = selected;
        
    }
}
console.log(apayer);
function returnto1() {
    tohide.style.display = "flex";
    title.textContent = "___________ Premiére étape _______________";
}
function goto3() {
    tohide2.style.display = "none";
    tohide3.style.display = "flex";
    tohide4.style.display = "none";
    title.textContent = "______________________ Troisiéme étape ______________________";
    startloop();
}
let first = 0;
function startloop() {
    for (first; first <= conteur; first++) {
        document.getElementById("combien").textContent = first + "/" + conteur;
        return;
    }
}
function returnto2() {
    tohide3.style.display = "none";
    tohide2.style.display = "flex";
    tohide1.style.display = "none";
    title.textContent = "_______________ Deusiémme étape _______________";
}
function goto4() {
    title.textContent = "_________________________________ Quatriéme étape_________________________________ ";
        document.getElementById("total").textContent = selected;
        document.getElementById("totalefinale").textContent = conteur;
    tohide3.style.display = "none";
    tohide.style.display = "none";
    tohide2.style.display = "none";
    tohide4.style.display = "flex";
}
document.getElementById("total").textContent = selected;
let allinfos = Array.from(document.getElementsByTagName('input'));
allinfos.pop();
console.log(allinfos)
document.getElementById("entrer").addEventListener("click", function (event) {
    if (first < conteur) {
        /*================== Regex =================*/
        event.preventDefault();
        if (first <= conteur) {
            document.getElementById("combien").textContent = first + "/" + conteur;
        }
        const emailInput = document.getElementById("email").value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phone = document.getElementById("tele").value;
        const phoneRegex = /^\d{10}$/;
        if (!emailRegex.test(emailInput)) {
            alert("Email invalide !");
        }

        if (!phoneRegex.test(phone)) {
            alert("Le numéro de téléphone doit contenir exactement 10 chiffres !");
        }
        else {
            alert("Formulaire valide ✅");
            if (true) {
                first += 1;
            document.getElementById("combien").textContent = first + "/" + conteur;
            /*============= Stocker les infos ==============*/
                for (element of allinfos) {
                    document.getElementById("liste").innerHTML += element.value;
                    document.getElementById("partlist").innerHTML += element.value;
                    document.getElementById("liste").innerHTML += `<br>`;
                    document.getElementById("partlist").innerHTML += `<br>`;
                }
                document.getElementById("liste").innerHTML += `<hr>`;
                document.getElementById("partlist").innerHTML += `<hr>`;
               document.getElementById("total").textContent = selected;

            /*===============================================*/
            }
        }
    }
    else {
        alert("Ajoter les billiet !!");
        event.preventDefault();
    }
});
