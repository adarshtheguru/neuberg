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

/**
 * Smoothly scroll to an element with an optional offset,
 * and apply a temporary CSS animation class (like shake).
 *
 * @param {string} targetId - ID of the target element
 * @param {number} offset - Scroll offset in px (negative moves up)
 * @param {string} animationClass - Class name for animation
 * @param {number} animationDuration - Duration in ms before removing the class
 */
export const scrollToWithAnimation = (
  targetId,
  offset = 0,
  animationClass = null,
  animationDuration = 1000
) => {
  const target = document.getElementById(targetId);
  if (!target) return;

  const targetPosition =
    target.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });

  if (animationClass) {
    target.classList.add(animationClass);
    setTimeout(() => {
      target.classList.remove(animationClass);
    }, animationDuration);
  }
};