

const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5';

async function privatbank(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    // console.log(res);
    // console.log(data);

    const eur = data[0];
    const usd = data[1];

    const table = `
      <table id="table">
        <tr>
          <th>Валюта</th>
          <th>Покупка</th>
          <th>Продаж</th>
        </tr>
        <tr>
          <td>EUR</td>
          <td>${eur.buy}</td>
          <td>${eur.sale}</td>
        </tr>
        <tr>
          <td>USD</td>
          <td>${usd.buy}</td>
          <td>${usd.sale}</td>
        </tr>
      </table>
    `;

    // document.body.innerHTML = table;
    document.getElementById("tableOne").innerHTML = table
    

  } catch (error) {
    console.error(error);
  }
}

privatbank(url);

const urlMore = 'https://api.privatbank.ua/p24api/exchange_rates?date=01.12.2014'

async function privatbankMore(urlMore){
    try {
        const resMore = await fetch(urlMore)
        const dataMore = await resMore.json()

        // console.log(resMore);
        // console.log(dataMore);

        const tableMore = `
            <table>
            <tr>
                <th>Валюта</th>
                <th>Покупка</th>
                <th>Продаж</th>
            </tr>
             <tr>
                <td>USD</td>
                <td>${dataMore.exchangeRate[14].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[14].saleRate}</td>
            </tr>
            <tr>
                <td>EUR</td>
                <td>${dataMore.exchangeRate[16].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[16].saleRate}</td>
            </tr>
            <tr>
                <td>CHF</td>
                <td>${dataMore.exchangeRate[12].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[12].saleRate}</td>
            </tr>
             <tr>
                <td>GBP</td>
                <td>${dataMore.exchangeRate[13].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[13].saleRate}</td>
            </tr>
            <tr>
                <td>PLZ</td>
                <td>${dataMore.exchangeRate[18].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[18].saleRate}</td>
            </tr>
            <tr>
                <td>JPY</td>
                <td>${dataMore.exchangeRate[6].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[6].saleRate}</td>
            </tr>
            <tr>
                <td>CAD</td>
                <td>${dataMore.exchangeRate[1].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[1].saleRate}</td>
            </tr>
            <tr>
                <td>NOK</td>
                <td>${dataMore.exchangeRate[9].purchaseRateNB}</td>
                <td>${dataMore.exchangeRate[9].saleRate}</td>
            </tr>

        </table>
        
        `
        document.getElementById('tableMore').innerHTML = tableMore

    } catch (error) {
    console.error(error);
  }
}


// const btn = document.getElementById('btn')
// btn.addEventListener('click', privatbankMore(urlMore))

const btn = document.getElementById('btn');
let isOn = false;

btn.addEventListener('click', function() {
  if (isOn) {
     document.getElementById('tableMore').style.display = "none"
      document.getElementById('converter').style.display = "block"
      document.getElementById('tableOne').style.display = "inline"
      document.getElementById('converterMore').style.display = "none"
    isOn = false;
  } else {
   privatbankMore(urlMore)
    document.getElementById('tableMore').style.display = "contents"
    document.getElementById('converter').style.display = "none"
    document.getElementById('tableOne').style.display = "none"
    document.getElementById('converterMore').style.display = "block"
    isOn = true;
  }
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

async function calcbuy(url){
    try {
        const res = await fetch(url)
        const data = await res.json()

        // console.log(res);
        // console.log(data);

                    const sale = document.getElementById("sale");
                    const input = document.getElementById("input");
                    const value = document.getElementById("value");
                    const result = document.getElementById("result");

                    const usd = data[0];
                    const eur = data[1];

                    sale.addEventListener("click", () => {
                      const amount = input.value;
                      const currencyFrom = value.value;
                      // const currencyTo = selectCurrencyTo.value;

                      let rate;
                      if (currencyFrom === "USD") {
                        rate = usd.sale;
                      } else if (currencyFrom === "EUR") {
                        rate = eur.sale;
                      } 

                      const convertedAmount = amount * rate;

                      // result.innerText = `${amount} ${currencyFrom} = ${convertedAmount.toFixed(2)} ${currencyTo}`;

                      result.innerText = `Для отримання ${amount} ${currencyFrom} Вам необхідно внести ${convertedAmount.toFixed(2)}грн`;
                    });


    } catch (error) {
    console.error(error);
  }
}
calcbuy(url)
// ?
async function calcSale(url){
    try {
        const res = await fetch(url)
        const data = await res.json()

        console.log(res);
        console.log(data);

                    const buy = document.getElementById("buy");
                    const input = document.getElementById("input");
                    const value = document.getElementById("value");
                    const result = document.getElementById("result");

                    const usd = data[0];
                    const eur = data[1];

                    buy.addEventListener("click", () => {
                      const amount = input.value;
                      const currencyFrom = value.value;
                      // const currencyTo = selectCurrencyTo.value;

                      let rate;
                      if (currencyFrom === "USD") {
                        rate = usd.buy;
                      } else if (currencyFrom === "EUR") {
                        rate = eur.buy;
                      } 

                      const convertedAmount = amount * rate;

                      result.innerText = `За здачу ${amount} ${currencyFrom} Ви отримаєте ${convertedAmount.toFixed(2)}грн`;
                    });


    } catch (error) {
    console.error(error);
  }
}
calcSale(url)


// ??????????????????????????????????????????????????????????????/


async function calcSaleMore(urlMore){
    try {
        const res = await fetch(urlMore)
        const data = await res.json()

        // console.log(res);
        // console.log(data);

                    const saleMore = document.getElementById("saleMore");
                    const inputMore = document.getElementById("inputMore");
                    const valueMore = document.getElementById("valueMore");
                    const resultMore = document.getElementById("resultMore");

                    const usd = data.exchangeRate[14];
                    const eur = data.exchangeRate[16];
                    const chf = data.exchangeRate[12];
                    const gbp = data.exchangeRate[13];
                    const plz = data.exchangeRate[18];
                    const jpy = data.exchangeRate[6];
                    const cad = data.exchangeRate[1];
                    const nok = data.exchangeRate[9];
                    
                    

                    saleMore.addEventListener("click", () => {
                      const amount = inputMore.value;
                      const currencyFrom = valueMore.value;
                      // const currencyTo = selectCurrencyTo.value;

                      let rate;
                      if (currencyFrom === "USD") {
                        rate = usd.saleRate;
                      } else if (currencyFrom === "EUR") {
                        rate = eur.saleRate;
                      } else if (currencyFrom === "CHF") {
                        rate = chf.saleRate;
                      } else if (currencyFrom === "GBP") {
                        rate = gbp.saleRate;
                      } else if (currencyFrom === "PLZ") {
                        rate = plz.saleRate;
                      } else if (currencyFrom === "JPY") {
                        rate = jpy.saleRate;
                      } else if (currencyFrom === "CAD") {
                        rate = cad.saleRate;
                      } else if (currencyFrom === "NOK") {
                        rate = nok.saleRate;
                      }

                      const convertedAmount = amount * rate;

                      // result.innerText = `${amount} ${currencyFrom} = ${convertedAmount.toFixed(2)} ${currencyTo}`;

                      resultMore.innerText = `Для отримання ${amount} ${currencyFrom} Вам необхідно внести ${convertedAmount.toFixed(2)}грн`;
                    });


    } catch (error) {
    console.error(error);
  }
}
calcSaleMore(urlMore)


async function calcbuyMore(urlMore){
try {
  const res = await fetch(urlMore)
  const data = await res.json()

  console.log(res);
  console.log(data);

  const buyMore = document.getElementById("buyMore");
  const inputMore = document.getElementById("inputMore");
  const valueMore = document.getElementById("valueMore");
  const resultMore = document.getElementById("resultMore");

  const usd = data.exchangeRate[14];
  const eur = data.exchangeRate[16];
  const chf = data.exchangeRate[12];
  const gbp = data.exchangeRate[13];
  const plz = data.exchangeRate[18];
  const jpy = data.exchangeRate[6];
  const cad = data.exchangeRate[1];
  const nok = data.exchangeRate[9];



  buyMore.addEventListener("click", () => {
  const amount = inputMore.value;
  const currencyFrom = valueMore.value;

  let rate;
  if (currencyFrom === "USD") {
    rate = usd.purchaseRateNB;
  } else if (currencyFrom === "EUR") {
    rate = eur.purchaseRateNB;
  } else if (currencyFrom === "CHF") {
    rate = chf.purchaseRateNB;
  } else if (currencyFrom === "GBP") {
    rate = gbp.purchaseRateNB;
  } else if (currencyFrom === "PLZ") {
    rate = plz.purchaseRateNB;
  } else if (currencyFrom === "JPY") {
    rate = jpy.purchaseRateNB;
  } else if (currencyFrom === "CAD") {
    rate = cad.purchaseRateNB;
  } else if (currencyFrom === "NOK") {
    rate = nok.purchaseRateNB;
  }

  const convertedAmount = amount * rate;

  // result.innerText = `${amount} ${currencyFrom} = ${convertedAmount.toFixed(2)} ${currencyTo}`;

  resultMore.innerText = `За здачу ${amount} ${currencyFrom} Ви отримаєте ${convertedAmount.toFixed(2)}грн`;
  });


  } catch (error) {
    console.error(error);
  }
}
calcbuyMore(urlMore)