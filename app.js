const selectAlfabet = document.querySelector("#alfabet");
const form = document.querySelector("#form");
const cheie = document.querySelector("#key");
const msjNecriptat = document.querySelector("#mesajNecriptat");
const msjCriptat = document.querySelector("#mesajCriptat");
const msjDecriptat = document.querySelector("#mesajDecriptat");
const btnCriptare = document.querySelector("#btn-criptare");
const btnDecriptare = document.querySelector("#btn-decriptare");
let alfabet1 = [];
let contor = 0;
let alfabet2 = [];
let alfabet3 = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9'
];

let alfabet4 = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9'
];

let varianta1 = false;
let varianta2 = false;
let aFost = false;

window.addEventListener('load', function() {
    init();
})

function checkIfStringHasOnlyDigits(_string)
{
    if(_string.match(/^[0-9]+$/) != null)
    {
        onlyNumbers = true;
    }
    else
    {
        onlyNumbers = false;
    }
    return onlyNumbers;
}

function init() { //apelam functia init cand se deschide pagina pentru a face inputurile read only si a reseta content-ul
    cheie.value = '';
    msjNecriptat.value = '';
    msjDecriptat.value = '';
    msjCriptat.style.background = 'gray';
    msjCriptat.readOnly = true;
    msjDecriptat.style.background = 'gray';
    msjDecriptat.readOnly = true;
}


//PRIMA VARIANTA
function extragere(alfabet1) {
    let cheia = cheie.value;
    if (cheia > alfabet1.length) {
        cheia = cheia % (alfabet1.length);
        console.log(cheia);
        //OPTIUNEA 2: Eroare, se apeleaza functia init si trebuie sa introducem din nou datele
        // alert(`Eroare, introdu o cheie de pana in ${alfabet1.length} caractere`);
        // return init();
    }
    
   
    const alfabetCriptatExtras = alfabet1.splice(0, cheia); //extragem primele cheie elemente de la inceputul array-ului
    const alfabetCodat = alfabet1.concat(alfabetCriptatExtras); //le adaugam la sfarsit, astfel formandu-se alfabetul codat
    return alfabetCodat;
}

function estePrezent(alfabet1, cheie)//functie verificare daca este prezent caracterul dinkey in alfabetul initial
//daca este prezent verific daca acel caracter a mai fost pus o data in alfabet codat
//daca nu, il pun acum
//daca da,trecem mai departe
{
    let alfabetCodat = [];

    for(let i = 0; i < alfabet1.length; i++)
        for(let j = 0; j < alfabet1.length; j++){
        if(cheie[i] === alfabet1[j]){
            console.log(`elem care se gasesc sunt: ${cheie[i]}`)
            alfabetCodat.push(cheie[i]);
        }
    }

    for(let i = 0 ; i < alfabet1.length; i++){
        
        if(alfabet1[i] != alfabetCodat[i]){
            alfabetCodat.push(alfabet1[i]);
        }
    }

    for(let i = 0; i < alfabetCodat.length-1; i++)
        for(let j = i + 1; j < alfabetCodat.length; j++){
            if(alfabetCodat[i] == alfabetCodat[j]){
                alfabetCodat.splice(j, 1);
            }
        }

    console.log(cheie);

    console.dir(alfabetCodat);
  
    return alfabetCodat;
}

form.addEventListener('submit', function(e) { //In momentul in care formului i se da submit, se executa codul de mai jos

    e.preventDefault(); //pentru a preveni auto-refresh-ul cand se da submit la form
    
    //Pentru fiecare alfabet in parte ales de utilizator, initializam vectorul de caractere
    if (selectAlfabet.value === "primul-alfabet") {
        alfabet1 = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
            "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        ];

        alfabet2 = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
            "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
        ];
    } else if (selectAlfabet.value === "alDoilea-alfabet") {
        alfabet1 = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
            "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", '0', '1', '2', '3', '4',
            '5', '6', '7', '8', '9'
        ];

        alfabet2 = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
            "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", '0', '1', '2', '3', '4',
            '5', '6', '7', '8', '9'
        ];
    } else if (selectAlfabet.value === "alTreilea-alfabet") {
        alfabet1 = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
            "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", '0', '1', '2', '3', '4',
            '5', '6', '7', '8', '9', ',', '.', ':', '?', '!', '(', ')', '[', ']', ' '
        ];

        alfabet2 = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
            "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", '0', '1', '2', '3', '4',
            '5', '6', '7', '8', '9', ',', '.', ':', '?', '!', '(', ')', '[', ']', ' '
        ];
    }

    let msjCriptat1 = '';
    let ch = cheie.value;
    if(checkIfStringHasOnlyDigits(ch)){
        var ac = extragere(alfabet1); //locul unde se formeaza alfabetul criptat, din cel initial
        varianta1 = true;
    }

    else{//daca cheia nu are doar cifre(are si litere)
        var ac = estePrezent(alfabet1, ch);
        console.log(`alfabetul criptat este ${ac}`)
        varianta2 = true;
    }
    //prima varianta

    if(varianta1){
    let mesajPtCriptat = (msjNecriptat.value).toUpperCase();
    console.log(mesajPtCriptat);
    
    for (let i = 0; i < ac.length; i++) {
        for (let j = 0; j < alfabet2.length; j++) {
            if ((mesajPtCriptat[i]) == alfabet2[j]) { //parcurgem alfabetul criptat si cel original
                //parcurgem fiecare caracter al mesajului original si vedem pe ce pozitie se gaseste litera in alfabetul original
                //construim mesajul criptat adaugand litere din alfabetul codat, la indexul j
                //LABORATOR => L == 11, asadar prima litera a mesajului criptat va fi elementul de pe pozitia 11 din alfabetul ac => P
                msjCriptat1 = msjCriptat1 + ac[j];
            }
        }
    }

    //console.log(mesajPtCriptat);
    msjCriptat.value = msjCriptat1;
    //adaugam in input valoarea mesajului criptat

    //decriptare
    
    btnDecriptare.addEventListener('click', function() {
        let ch = cheie.value;
        console.log(ch);
        let msjDecriptat1 = ' ';
        console.log(msjCriptat1)
        for (let i = 0; i < ac.length; i++) {
            for (let j = 0; j < alfabet2.length; j++) { //din nou parcurgem cele doua alfabeturi
                if (msjCriptat1[i] == ac[j]) { //
                    console.log(i, j);
                    msjDecriptat1 = msjDecriptat1 + alfabet2[j]; //reconstruim mesajul iriginal adaugand caractere din alfabetul original

                }

            }
        }

        msjDecriptat.value = msjDecriptat1;
        //adaugam in input valoarea mesajului decriptat
    }
    )
}

else if(varianta2){
    let mesajPtCriptat = (msjNecriptat.value).toUpperCase();
    console.log(mesajPtCriptat);
    for (let i = 0; i < ac.length; i++) {
        for (let j = 0; j < alfabet1.length; j++) {
            if ((mesajPtCriptat[i]) == alfabet2[j]) { //parcurgem alfabetul criptat si cel original
                //parcurgem fiecare caracter al mesajului original si vedem pe ce pozitie se gaseste litera in alfabetul original
                //construim mesajul criptat adaugand litere din alfabetul codat, la indexul j
                //LABORATOR => L == 11, asadar prima litera a mesajului criptat va fi elementul de pe pozitia 11 din alfabetul ac => P
                msjCriptat1 = msjCriptat1 + ac[j];
                //  console.log(msjCriptat1);
            }
        }
    }

    //console.log(mesajPtCriptat);
    msjCriptat.value = msjCriptat1;
    //adaugam in input valoarea mesajului criptat
    btnDecriptare.addEventListener('click', function() {
        let ch = cheie.value;
        console.log(ch);
        let msjDecriptat1 = ' ';
        console.log(msjCriptat1)
        for (let i = 0; i < ac.length; i++) {
            for (let j = 0; j < alfabet2.length; j++) { //din nou parcurgem cele doua alfabeturi
                if (msjCriptat1[i] == ac[j]) { //
                    console.log(i, j);
                    msjDecriptat1 = msjDecriptat1 + alfabet2[j]; //reconstruim mesajul iriginal adaugand caractere din alfabetul original

                }

            }
        }

        msjDecriptat.value = msjDecriptat1;
        //adaugam in input valoarea mesajului decriptat
    }
    )
    
}

//a doua varianta

})


//implementare tooltip pentru alfabet

    selectAlfabet.addEventListener('mouseover', function(e){ 
       
        const tooltip =  document.createElement('div');
       
        tooltip.classList.add('tooltip-show');
        tooltip.append('Alegeti un alfabet din cele 3');
        selectAlfabet.insertAdjacentElement('beforebegin', tooltip);

        selectAlfabet.addEventListener('mouseleave', function(e){ 
            tooltip.classList.add('tooltip-hide');
            tooltip.classList.remove('tooltip-show');
            tooltip.remove();
         
        })
       
    })

    
    

    
