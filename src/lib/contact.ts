// WhatsApp: Jannelle's number from her email signature (917-386-8303).
export const whatsappNumber = "19173868303";

// PayPal deposit link for the $650-per-person reservation deposit.
// Jannelle is still setting this up. Paste the link here once she sends it;
// until then, deposit buttons open a WhatsApp chat to arrange the deposit.
export const depositUrl = "";
export const depositAmount = 650;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function depositLink(tripName?: string) {
  if (depositUrl) return depositUrl;
  const trip = tripName ? ` for ${tripName}` : "";
  return whatsappLink(`Hi GrooveTrips! I'd like to place my $${depositAmount} deposit to reserve my spot${trip}.`);
}
