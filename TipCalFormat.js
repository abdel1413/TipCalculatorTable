const formatted = (local, currency, value) => {
  let formattedValue = new Intl.NumberFormat(local, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
};

const tipCalculator = (sum, percentage, local, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  console.log(`sum is: ${formatted(local, currency, sum)}
                percentage is : ${percentage}%
                tip is: ${formatted(local, currency, tip)}
                total is: ${formatted(local, currency, total)}`);
};

tipCalculator(20.9, 5, "en-EN", "USD");
tipCalculator(20.5, 10, "de-DE", "EUR");
tipCalculator(30.890975, 7, "ja-JP", "JPY");

const helper = (local, currency, value) => {
  let formatted = new Intl.NumberFormat(local, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formatted;
};

const tipcal = (sum, percentage, local, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`the initial sum is: ${helper(local, currency, sum)}
                 the percentage is: ${percentage}%
                 the tip is ${helper(local, currency, tip)}
                 the total is: ${helper(local, currency, total)}`);
};

tipcal(20.98, 10, "de-DE", "EUR");
tipcal(20.9, 5, "en-EN", "USD");
