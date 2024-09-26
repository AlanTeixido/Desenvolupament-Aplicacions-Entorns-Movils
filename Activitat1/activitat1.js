// Escriu una funció que rebi dos números com a paràmetres i retorni el número més gran.

function comparaNumeros() {
    let a = Number(prompt("Introdueix un número"));
    let b = Number(prompt("Introdueix un altre número"));

    if (a > b) {
        alert(`${a} es mes gran que ${b}`);
    } else if (a < b) {
        alert(`${b} és més gran que ${a}`);
    } else {
        alert(`${a} i ${b} són iguals`);
    }
}

// Escriu un bucle for que sumi tots els números de l'1 al 100 i imprimeixi el resultat final.  
function suma1a100() {
    var suma = 0;
    for (var i = 1; i <= 100; i++) {
        suma += i;
    }
    alert("La suma dels números de l'1 al 100 és " + suma);
}

// Escriu una funció que imprimeixi els números de l'1 al 20, però seguint aquestes regles:
// Si el número és divisible per 3, imprimeix "Pedra".
// Si és divisible per 5, imprimeix "Paper".
// Si és divisible per 3 i per 5, imprimeix "Tisores".
// En qualsevol altre cas, imprimeix el número.

function PedraPaper() {
    for(var i = 1; i <= 20; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("tisores");
        } else if (i % 3 === 0){
            console.log("pedra");
        } else if (i % 5 === 0){
            console.log("paper");
        } else {
            console.log(i);
        }
    }
}

//Exercici 4: Comprovar si un número és parell

function esParell() {

    let num = Number(prompt("Introdueix un número"));

    if (num % 2 === 0) {
        alert("El número " + num + " és parell");
    } else {
        alert("El número " + num + " és senar");
    }
}

//Exercici 5: Revertir una cadena de text


function revertirCadena() {
    let cadena = prompt("Introdueix una cadena de text");
    let cadenaRevertida = "";

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaRevertida += cadena[i];
    }

    alert("La cadena revertida és: " + cadenaRevertida);

}

// Exercici 6: Funció de factorial

function factorial() {
    let num = Number(prompt("Introdueix un número"));

    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    } 

    alert("El factorial de " + num + " és " + factorial);
}


// Exercici 7: Filtrar nombres positius

function filtrarPositius() {

    let llista = prompt("Introdueix una llista de números separats per comes");
    let llistaNumeros = llista.split(",");

    let llistaPositius = llistaNumeros.filter(num => num > 0);

    alert("Els números positius de la llista són: " + llistaPositius);
}

// To do list

function addTask() {
    let taskInput = document.getElementById("input").value; // agafem el valor de l'input

    if (taskInput !== "") { // si l'input no està buit
        let list = document.getElementById("list"); // agafem la llista
        let newTask = document.createElement("li"); // creem un nou element li
        
        newTask.textContent = taskInput; // li assignem el text de l'input
        
        // Afegim un event listener només al nou element
        newTask.addEventListener("click", () => {
            newTask.remove(); // eliminem l'element
        });
        
        list.appendChild(newTask); // afegim el nou element a la llista
        document.getElementById("input").value = ""; // buidem l'input
    } else {
        alert("Escriu una tasca abans d'afegir-la"); // si l'input està buit, mostrem un missatge d'error
    }

    
}



