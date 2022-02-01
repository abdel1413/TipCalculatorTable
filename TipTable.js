const formatted2 = (local, currency, value) => {
  const formatValue = new Intl.NumberFormat(local, {
    style: "currency",
    currency: currency,
  }).format(value);
  return formatValue;
};
const printingTipTable = (finalTip) => {
  const table = document.createElement("table");
  table.innerHTML = `<tr>
    <td> Sum before tips: </td>
    <td> ${finalTip.Sum}</td>
    </tr>
    <tr>
    <td> Percentage: </td>
    <td> ${finalTip.percentage} </td>
    </tr>
    <tr>
    <td> Tip: </td>
    <td> ${finalTip.Tip}</td>
    </tr>
    <tr>
    <td> Total: </td>
    <td> ${finalTip.Total}</td>
    </tr>`;

  let tableContent = document.querySelector(".table");
  tableContent.appendChild(table);
  console.log(tableContent);
};

//  printingTipTable passed as variable callBack for calling back
const tipCalculator2 = (sum, percentage, local, currency, callBack) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  const finalTip = {
    Sum: formatted2(local, currency, sum),
    percentage: percentage + "%",
    Tip: formatted2(local, currency, tip),
    Total: formatted2(local, currency, total),
  };

  callBack(finalTip); //  printingTipTable passed as variable callBack
};

tipCalculator2(20.9, 9, "en-EN", "USD", printingTipTable);
