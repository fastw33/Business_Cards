export function toE164(input = "") {
  const t = String(input).trim();
  if (!t) return "";
  const hasPlus = t.startsWith("+");
  const digits = t.replace(/[^\d]/g, "");
  return hasPlus ? `+${digits}` : digits;
}
export function buildWhatsAppLink(number, message = "¡Hola! Me gustaría más información.") {
  const e164 = toE164(number);
  const text = encodeURIComponent(message);
  return `https://wa.me/${e164}?text=${text}`;
}
export function buildTelLink(number) {
  const e164 = toE164(number);
  return `tel:${e164}`;
}
export function buildMailtoLink(email, subject = "", body = "") {
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  const qs = params.length ? `?${params.join("&")}` : "";
  return `mailto:${email}${qs}`;
}

export function buildGmailComposeLink(email) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}
