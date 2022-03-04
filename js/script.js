console.log('JS Ok')

const travelLenght = prompt('Inserisci la lunghezza del viaggio in KM');

const age = prompt('Inserisci la tua età');

let priceForLenght = travelLenght * 0.21;

if (age < 18) {
    discount = (priceForLenght * 20 / 100)

    finalPrice = priceForLenght - discount

} else if (age >= 65) {
    discount = (priceForLenght * 40 / 100)

    finalPrice = priceForLenght - discount

} else {
    finalPrice = priceForLenght
}

console.log(finalPrice)

document.getElementById('Km').innerText = 'Km da percorrere: ' + travelLenght;

document.getElementById('eta').innerText = 'Anni: ' + age;

document.getElementById('ticket').innerText = 'Prezzo finale: ' + finalPrice;