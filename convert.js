function convert() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;
  
    const apiKey = "507e5ee4a798a66780b2fff8"; // получите API-ключ от валютного сервиса
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const result = data.conversion_result;
        document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
      })
      .catch((error) => console.log(error));
  }
  
  