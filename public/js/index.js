
let som = add(5, 8)
let soust = sous(10, 5)
let multi = mult(5, 3)
let divi = div(10, 5)
let mod = modulo(10, 3)
let rac = racine(16)
let expos = expo(5, 2)
capitalize("salut tout le monde")
calcul(6, "+", 3); 
calcul(10, "-", 3); 
calcul(15, "*", 5); 
calcul(21, "/", 3); 
calcul(15, "%", 3);

console.log(som);
console.log(soust);
console.log(multi);
console.log(divi);
console.log(mod);
console.log(rac);
console.log(expos);



















// fonctions créer


function add(a, b) {
    return a + b;
    
}
function sous(a, b) {
    return a - b;
    
}
function mult(a, b) {
    return a * b;
    
}
function div(a, b) {
    return a / b

}
function modulo(a, b) { 
    return a%b

}
function racine(a) {
    return Math.sqrt(a)
}

function expo(a, b) {
    return Math.pow(a, b);
}
function capitalize(str) {
    let capitalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    console.log(capitalized);
}  

function calcul(nbr1, operator, nbr2){
    switch (operator) {
        case "+":
            console.log(nbr1 + nbr2);
            break;
            case "-":
            console.log(nbr1 - nbr2);
            break;
            case "*":
            console.log(nbr1 * nbr2);
            break;
            case "/":
            console.log(nbr1 / nbr2);
            break;
        default:
            console.log("Error 404");
            break;
    }
}