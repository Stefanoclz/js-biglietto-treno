console.log('JS Ok')

const travelLenght = prompt('Inserisci la lunghezza del viaggio in KM');

const age = prompt('Inserisci la tua età');

let priceForLenght = travelLenght * 0.21;

console.log(priceForLenght);

if (age < 18) {
    discount = (priceForLenght * 20 / 100)

    finalPrice = priceForLenght - discount

    console.log(finalPrice)
} else if (age >= 65) {
    discount = (priceForLenght * 40 / 100)

    finalPrice = priceForLenght - discount

    console.log(finalPrice)
} else {
    finalPrice = priceForLenght
}