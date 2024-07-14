function convert() {
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const result = amount * rate;
            document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => console.error('Error:', error));
}

// Populate currency options
fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
        const currencies = Object.keys(data.rates);
        const selectFrom = document.getElementById('from');
        const selectTo = document.getElementById('to');

        currencies.forEach(currency => {
            const option = document.createElement('option');
            option.text = currency;
            option.value = currency;
            selectFrom.appendChild(option);

            const optionTo = document.createElement('option');
            optionTo.text = currency;
            optionTo.value = currency;
            selectTo.appendChild(optionTo);
        });
    })
    .catch(error => console.error('Error:', error));
