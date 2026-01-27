const productName = "Matcha Starter Kit";

const costPerUnit = 12.5;
const basePrice = 21.99;
const discountRate = 0.20; // 20% discount
const salesTaxRate = 0.07; // 7% sales tax
const fixedMonthlyCost = 800 

const discountedPrice = basePrice * (1 - discountRate);
const finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
const profitPerUnit = finalPriceWithTax - costPerUnit;
const breakEvenUnits = Math.ceil(fixedMonthlyCost / profitPerUnit);
const isProfitable = profitPerUnit > 0;

console.log("=== Product Pricing Analysis ==="); 
console.log(`Product: ${productName}`);
console.log(`Base Price: ${basePrice}`);
console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
console.log(`Final Price with Tax: $${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit per Unit: $${profitPerUnit.toFixed(2)}`);
console.log(`Break-even Units: ${breakEvenUnits}`);
console.log(`Is Profitable: ${isProfitable}`);

