import { ASSETS_PATH } from "./constants";
// Get full asset path
export const assetUrl = (path) => `${ASSETS_PATH}/${path}`;

// Format currency
export const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(amount);

// Example: build query params
export const buildQuery = (params = {}) =>
  Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join("&");