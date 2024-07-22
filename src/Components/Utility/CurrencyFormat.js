// CurrencyConversion

const EXCHANGE_RATE = 280; // Example exchange rate, 1 USD = 280 PKR

export const convertUSDToPKR = (amountInUSD) => {
  return amountInUSD * EXCHANGE_RATE;
};


export const CurrencyFormat = (amountInUSD) => {
  const amountInPKR = convertUSDToPKR(amountInUSD);
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
  }).format(amountInPKR);
};
