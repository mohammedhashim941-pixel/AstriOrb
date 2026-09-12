/**
 * Virtual Business Card - Contact Data & Utilities
 */

export const CONTACT_INFO = {
  fullName: 'Mohammed Hashim',
  firstName: 'Mohammed',
  lastName: 'Hashim',
  organization: 'AstriOrb Pvt. Ltd.',
  title: 'Managing Director',
  phone: '+918848953850',
  phoneDisplay: '+91 8848953850',
  email: 'hashim@astriorb.com',
  website: 'https://astriorb.com',
  websiteDisplay: 'astriorb.com',
  portfolio: 'https://hashim.astriorb.com',
  portfolioDisplay: 'hashim.astriorb.com',
  tagline: 'Multi-Product Software & Smart Hardware House. Where Ideas Orbit Into Reality.',
  social: {
    whatsapp: 'https://wa.me/918848953850',
    website: 'https://astriorb.com',
    portfolio: 'https://hashim.astriorb.com'
  }
};

/**
 * Generates a vCard 3.0 standard text string
 */
export function generateVCard(info = CONTACT_INFO) {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${info.fullName}`,
    `N:${info.lastName};${info.firstName};;;`,
    `ORG:${info.organization}`,
    `TITLE:${info.title}`,
    `TEL;TYPE=CELL,VOICE:${info.phone}`,
    `EMAIL;TYPE=WORK,INTERNET:${info.email}`,
    `URL;TYPE=WORK:${info.website}`,
    `URL;TYPE=PORTFOLIO:${info.portfolio}`,
    `NOTE:${info.tagline} • Portfolio: ${info.portfolioDisplay}`,
    'END:VCARD'
  ].join('\r\n');
}

/**
 * Triggers instant download of the .vcf contact card
 */
export function downloadVCard(info = CONTACT_INFO) {
  const vcardText = generateVCard(info);
  const blob = new Blob([vcardText], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${info.fullName.replace(/\s+/g, '_')}_AstriOrb.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
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

/**
 * Copies text to clipboard safely
 */
export async function copyTextToClipboard(text) {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fallback for older browsers / webviews
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch {
      return false;
    }
  }
  return false;
}
