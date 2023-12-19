{
    const calculateResult = (amount, currency) => {
      const USD = 4.13;
      const EURO = 4.44;
      const GBP = 5.12;
  
      switch (amount, currency) {
        case "USD":
          return amount / USD;
  
        case "EURO":
          return amount / EURO;
  
        case "GBP":
          return amount / GBP;
      }
    };
  
    const updateResult = (amount, result, currency) => {
      const resultElement = document.querySelector(".js-result");
      resultElement.innerHTML = `${amount} PLN =  ${result.toFixed(2)} ${currency}`;
    }
  
    const onFormSubmit = (event) => {
      event.preventDefault();
  
      const amountElement = document.querySelector(".js-amount");
      const currencyElement = document.querySelector(".js-currency");
  
      const amount = +amountElement.value;
      const currency = currencyElement.value;
  
      const result = calculateResult(amount, currency);
  
      updateResult(amount, result, currency);
  
    };
  
    const init = () => {
      const formElement = document.querySelector(".js-form");
  
      formElement.addEventListener("submit", onFormSubmit);
    };
  
    init();
  
    formElement.addEventListener('reset', () => {
      resultElement.innerText = '0';
    });
  
  }
  