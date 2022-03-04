console.log('JS Ok')

// dichiarazioni variabili su dati utente

const travelLenght = prompt('Inserisci la lunghezza del viaggio in KM');

const age = prompt('Inserisci la tua età');

// / dichiarazioni variabili su dati utente

// calcolo prezzo al Km

let priceForLenght = travelLenght * 0.21;

// / calcolo prezzo al Km

// dichiarazione if per sconti

let finalPrice = priceForLenght;

if (age < 18) {
    discount = (priceForLenght * 20 / 100);

    finalPrice = priceForLenght - discount;

} else if (age >= 65) {
    discount = (priceForLenght * 40 / 100);

    finalPrice = priceForLenght - discount;

} else {
    finalPrice = priceForLenght;
}

// / dichiarazione if per sconti

console.log(finalPrice);

// creazione prezzo finale e stampe su schermo

let ticketPrice = finalPrice.toFixed(2);

document.getElementById('Km').innerText = 'Km da percorrere: ' + travelLenght;

document.getElementById('eta').innerText = 'Anni: ' + age;

document.getElementById('ticket').innerText = 'Prezzo finale: ' + ticketPrice + '€';