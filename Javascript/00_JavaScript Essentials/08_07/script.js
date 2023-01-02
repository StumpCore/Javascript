/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const formatter = (value) => {
  let formattedValue = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value);
  return formattedValue;
};

const tipCalculator = (sum, percentage) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
    Sum before tip: ${formatter(sum)}
    Tip percentage: ${percentage}%
    Tip:            ${formatter(tip)} 
    Total:          ${formatter(total)} 
  `);
};

tipCalculator(29.95, 18);
