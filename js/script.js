let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let USD = 4.13;
let EURO = 4.44;
let GBP = 5.12;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result; 


    switch (currency) {
        case "USD":
            result = amount / USD;
            break;
        case "EURO":
            result = amount / EURO;
            break;
        case "GBP":
            result = amount / GBP;
            break;
    }


    resultElement.innerHTML = `${amount} PLN =  ${result.toFixed(2)} ${currency}`;
})

formElement.addEventListener('reset', () => {
    resultElement.innerText = '0';
});