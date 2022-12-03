let polje = document.getElementById("div");
let rezultat = document.getElementById("rez")
let dugme = document.getElementById("dugme")
let nizMerenja = [];

let merenje = 0;

let intervali = [];
function pocetno(){
    polje.classList.remove('zeleno')
}

function meri(){
    merenje++;
    console.log("patka");
}

function zaustavi(){
    for(let i = 0; i < 10; i++){
        clearInterval(intervali[i]);
    }
    polje.removeEventListener("click", zaustavi);
    merenje = merenje - 30; // URACUNAVAMO PROSECAN LAG
    rezultat.innerHTML = merenje + "ms";
    nizMerenja.push(merenje);
    console.log(nizMerenja);
    merenje = 0;
    dugme.classList.remove("nevidljivo");
}

function zeleno(){
    polje.classList.remove("crveno");
    polje.classList.add("zeleno");
    rez.innerHTML = "Click!";
    for(let i = 0; i < 10; i++){
        intervali[i] = setInterval(meri, 10);
    }
    polje.addEventListener("click", zaustavi);
}

function kreni(){
    pocetno();
    polje.classList.add("crveno");
    rezultat.innerHTML = "Wait for green";
    let cekanje = Math.floor(Math.random() * 30);
    cekanje = cekanje * 100 + 2000;
    dugme.classList.add("nevidljivo")
    setTimeout(zeleno, cekanje);  
}