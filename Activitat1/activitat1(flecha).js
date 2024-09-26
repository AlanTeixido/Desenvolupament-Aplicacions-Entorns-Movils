// Funció que compara dos números
const comparaNumeros = () => {
    const a = Number(prompt("Introdueix un número"));
    const b = Number(prompt("Introdueix un altre número"));

    if (a > b) {
        alert(`${a} és més gran que ${b}`);
    } else if (a < b) {
        alert(`${b} és més gran que ${a}`);
    } else {
        alert(`${a} i ${b} són iguals`);
    }
};

// Funció que suma els números de l'1 al 100
const suma1a100 = () => {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    alert(`La suma dels números de l'1 al 100 és ${suma}`);
};

// Funció "Pedra, Paper, Tisores"
const PedraPaper = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Tisores");
        } else if (i % 3 === 0) {
            console.log("Pedra");
        } else if (i % 5 === 0) {
            console.log("Paper");
        } else {
            console.log(i);
        }
    }
};

// Comprovar si un número és parell
const esParell = () => {
    const num = Number(prompt("Introdueix un número"));
    const resultat = (num % 2 === 0) ? `El número ${num} és parell` : `El número ${num} és senar`;
    alert(resultat);
};

// Revertir una cadena de text
const revertirCadena = () => {
    const cadena = prompt("Introdueix una cadena de text");
    const cadenaRevertida = [...cadena].reverse().join(''); // ús de desestructuració d'arrays
    alert(`La cadena revertida és: ${cadenaRevertida}`);
};

// Funció de factorial
const factorial = () => {
    const num = Number(prompt("Introdueix un número"));
    let resultat = 1;

    for (let i = 1; i <= num; i++) {
        resultat *= i;
    }
    alert(`El factorial de ${num} és ${resultat}`);
};

// Filtrar números positius
const filtrarPositius = () => {
    const llista = prompt("Introdueix una llista de números separats per comes");
    const llistaNumeros = llista.split(",").map(Number);
    const llistaPositius = llistaNumeros.filter(num => num > 0);

    alert(`Els números positius de la llista són: ${llistaPositius.join(", ")}`);
};

// To do list
const addTask = () => {
    const taskInput = document.getElementById("input").value;

    if (taskInput !== "") {
        const list = document.getElementById("list");
        const newTask = document.createElement("li");
        newTask.textContent = taskInput;

        // Afegir esdeveniment per eliminar la tasca
        newTask.addEventListener("click", () => {
            newTask.remove();
        });

        list.appendChild(newTask);
        document.getElementById("input").value = ""; // Buidar l'input
    } else {
        alert("Escriu una tasca abans d'afegir-la");
    }
};
