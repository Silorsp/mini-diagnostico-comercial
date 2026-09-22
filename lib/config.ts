/**
 * Public client-safe config.
 * Plug URLs via Vercel env (or .env.local for local dev):
 *   NEXT_PUBLIC_GATEWAY_CHECKOUT_URL
 *   NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL
 *
 * Also accepts non-prefixed aliases if set as NEXT_PUBLIC_ at build time
 * by mirroring in next.config — prefer the NEXT_PUBLIC_ names.
 */

function clean(value: string | undefined): string {
  if (!value) return "";
  const v = value.trim();
  if (!v || v === "undefined" || v === "null" || v === "PENDENTE" || v === "placeholder") {
    return "";
  }
  return v;
}

export const GATEWAY_CHECKOUT_URL = clean(
  process.env.NEXT_PUBLIC_GATEWAY_CHECKOUT_URL || process.env.GATEWAY_CHECKOUT_URL
);

export const GOOGLE_CALENDAR_BOOKING_URL = clean(
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL ||
    process.env.GOOGLE_CALENDAR_BOOKING_URL
);

export const hasCheckout = Boolean(GATEWAY_CHECKOUT_URL);
export const hasBooking = Boolean(GOOGLE_CALENDAR_BOOKING_URL);

export const OFFER = {
  name: "Mini-diagnóstico Comercial",
  price: "R$297",
  priceNumber: 297,
  duration: "45–60 min",
  brand: "SP.mkt",
  upsellHint: "piloto ~R$997",
} as const;
