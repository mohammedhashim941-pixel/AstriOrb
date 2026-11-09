import { CARD_URL, COMPANY, PERSON } from '../data/card';

const VCARD_FILENAME = 'Mohammed-Hashim-AstriOrb.vcf';

/** Escapes characters that are structural in vCard text values (RFC 2426). */
const escapeValue = (value) =>
  value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');

/** Folds long lines: continuation lines start with a single space. */
const foldLine = (line, width = 72) => {
  if (line.length <= width) return line;
  const parts = [];
  for (let i = 0; i < line.length; i += width) parts.push(line.slice(i, i + width));
  return parts.join('\r\n ');
};

/** Generates the vCard 3.0 text. Pass base64 PNG data to embed a contact photo. */
export function generateVCard(photoBase64) {
  const { street, city, region, postalCode, country } = COMPANY.address;
  const address = ['', '', street, city, region, postalCode, country].map(escapeValue).join(';');

  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${escapeValue(PERSON.lastName)};${escapeValue(PERSON.firstName)};;;`,
    `FN:${escapeValue(PERSON.fullName)}`,
    `ORG:${escapeValue(COMPANY.legalName)}`,
    `TITLE:${escapeValue(PERSON.title)}`,
    `TEL;TYPE=CELL,VOICE:${PERSON.phone}`,
    `EMAIL;TYPE=WORK:${PERSON.email}`,
    `URL;TYPE=WORK:${COMPANY.website}`,
    `URL:${PERSON.portfolio}`,
    `URL:${PERSON.linkedin}`,
    `ADR;TYPE=WORK:${address}`,
    `NOTE:${COMPANY.brand} — ${COMPANY.tagline}. Card: ${CARD_URL}`,
    ...(photoBase64 ? [`PHOTO;ENCODING=b;TYPE=PNG:${photoBase64}`] : []),
    'END:VCARD'
  ]
    .map((line) => foldLine(line))
    .join('\r\n') + '\r\n';
}

let photoPromise;

/** Fetches the contact photo ahead of time so saving stays instant. */
export function preloadVCardPhoto() {
  photoPromise ??= fetch('/contact-photo.png')
    .then((response) => {
      if (!response.ok) throw new Error('Contact photo unavailable');
      return response.arrayBuffer();
    })
    .then((buffer) => {
      let binary = '';
      new Uint8Array(buffer).forEach((byte) => {
        binary += String.fromCharCode(byte);
      });
      return btoa(binary);
    })
    .catch(() => {
      photoPromise = undefined;
      return null;
    });
  return photoPromise;
}

/** Downloads the .vcf contact card. */
export async function downloadVCard() {
  const photo = await preloadVCardPhoto();
  const blob = new Blob([generateVCard(photo)], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = VCARD_FILENAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Revoking straight away can cancel the download on some mobile browsers.
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

/**
 * Triggers light haptic feedback on supported mobile devices
 */
export function triggerHaptic(duration = 15) {
  try {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(duration);
    }
  } catch {
    // Ignore unsupported
  }
}

function legacyCopy(text) {
  const previouslyFocused = document.activeElement;
  const textArea = document.createElement('textarea');
  try {
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    textArea.remove();
    previouslyFocused?.focus?.();
  }
}

/**
 * Copies text to clipboard, falling back for older browsers and in-app webviews
 * where the Clipboard API is missing or blocked. Returns whether it succeeded.
 */
export async function copyTextToClipboard(text) {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Blocked or denied: try the legacy path below.
  }
  return legacyCopy(text);
}
