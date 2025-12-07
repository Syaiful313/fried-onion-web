export const WHATSAPP_NUMBER = "6285225252958";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Halo, saya ingin memesan bawang goreng";

export function openWhatsApp(productName?: string) {
  if (typeof window === "undefined") return;

  const message = productName
    ? `Halo, saya ingin memesan ${productName}`
    : WHATSAPP_DEFAULT_MESSAGE;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message,
  )}`;

  window.open(url, "_blank");
}
