const tipCalculator = (sum, percentage, currency, prefix) => {
  //   let sum = 29.95;
  //   let percentage = 18;

  let tip = sum * (percentage / 100);
  let tot = sum + tip;
  if (prefix) {
    console.log(`initial sum is ${currency}${sum}
                 percentage is: ${percentage}%
                 tip is: ${currency}${tip.toFixed(2)}
                 total is:${currency}${tot.toFixed(2)}`);
  } else {
    console.log(`initial sum is:  ${sum}${currency}
                 percentage is: ${percentage}%
                 tip is: ${tip.toFixed(2)}${currency}
                 total is: ${tot.toFixed(2)}${currency}`);
  }
};

tipCalculator(29.95, 18, " $", true);
tipCalculator(50, 20, " kr ", false);
//tipCalculator(13, 25, 10, " euro", false);

//variable.tofixed(2) = 2 digits long
