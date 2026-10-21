/**
 * Global Currency conversion utility
 */
export const CURRENCY_CONFIG = {
  INR: { code: "INR", symbol: "₹", rate: 1, label: "INR (₹) Rupee" },
  USD: { code: "USD", symbol: "$", rate: 0.0118, label: "USD ($) US Dollar" },
  EUR: { code: "EUR", symbol: "€", rate: 0.011, label: "EUR (€) Euro" },
  GBP: { code: "GBP", symbol: "£", rate: 0.0094, label: "GBP (£) British Pound" },
};

/**
 * Format INR number or string to selected currency
 * @param {number|string} priceInInr - e.g. 18500 or "₹18,500"
 * @param {string} targetCurrency - "INR" | "USD" | "EUR" | "GBP"
 */
export function formatCurrency(priceInInr, targetCurrency = "INR") {
  if (!priceInInr) return "";

  // Extract raw numeric value
  let numericValue = 0;
  if (typeof priceInInr === "number") {
    numericValue = priceInInr;
  } else {
    const cleaned = priceInInr.toString().replace(/[^0-9]/g, "");
    numericValue = parseInt(cleaned, 10) || 0;
  }

  const config = CURRENCY_CONFIG[targetCurrency] || CURRENCY_CONFIG.INR;
  const converted = Math.round(numericValue * config.rate);

  if (targetCurrency === "INR") {
    return `₹${converted.toLocaleString("en-IN")}`;
  } else {
    return `${config.symbol}${converted.toLocaleString("en-US")}`;
  }
}
