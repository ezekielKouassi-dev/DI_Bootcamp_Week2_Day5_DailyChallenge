/**
 * @author : ezekiel kouassi
 * @description : cette fonction permet de lancer une chanson en fonction du nombre rentré par l'utilisateur
 * et a chaque couplet de chanson la valeur entré par l'utilisateur se décremente
 */

function bottlesOfBeer() {
    let numberOfBottles = prompt("number to begin counting down bottles :");
    numberOfBottles = parseInt(numberOfBottles, 10); // convertit la chaîne de caractères en nombre entier

    if (numberOfBottles < 1) {
        console.log("0 bottle of beer on the wall");
        return;
    }

    let count = 1; // compteur de bouteilles prises

    do{
        let bottleWord = "bottles";
        if (numberOfBottles === 1) {
            bottleWord = "bottle";
        }
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer");
        console.log("Take " + count + ", pass" + (count === 1 ? "it" : "its") + " around");
        numberOfBottles -= count;
        count++;
    }
    while(numberOfBottles > 0)
    console.log("0 bottle of beer on the wall");
}