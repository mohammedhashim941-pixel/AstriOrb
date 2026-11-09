import React from 'react';
import { UserPlus, Share2, QrCode, RotateCw, MessageCircle } from 'lucide-react';
import { CARD_URL, COMPANY, PERSON } from '../data/card';
import { downloadVCard, triggerHaptic, copyTextToClipboard } from '../utils/vcard';
import { track } from '../utils/analytics';
import './ActionToolbar.css';

const ActionToolbar = ({ onOpenQR, onShowToast, onFlip, isFlipped }) => {
  const handleSaveContact = async () => {
    triggerHaptic(25);
    track('save_contact');
    await downloadVCard();
    if (onShowToast) {
      onShowToast('Contact file downloaded. Open it to save.');
    }
  };

  const handleFlip = () => {
    triggerHaptic(20);
    if (onFlip) onFlip();
  };

  const handleShare = async () => {
    triggerHaptic(20);
    track('share');
    const shareData = {
      title: `${PERSON.fullName} | ${PERSON.title}, ${COMPANY.brand}`,
      url: CARD_URL
    };

    if (navigator?.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if (err.name === 'AbortError') return;
      }
    }

    // Fallback: Copy link
    const ok = await copyTextToClipboard(CARD_URL);
    if (onShowToast) {
      if (ok) onShowToast('Card link copied to clipboard!');
      else onShowToast("Couldn't copy the link on this browser.", 'info');
    }
  };

  const handleQR = () => {
    triggerHaptic(20);
    track('qr_open');
    if (onOpenQR) onOpenQR();
  };

  const handleWhatsApp = () => {
    triggerHaptic(20);
    track('whatsapp_click');
  };

  return (
    <div className="pc-toolbar-container">
      <div className="pc-toolbar" role="group" aria-label="Card actions">
        <button className="pc-toolbar-btn pc-toolbar-save" onClick={handleSaveContact} type="button">
          <UserPlus size={18} className="pc-toolbar-icon" aria-hidden="true" />
          <span>Save Contact</span>
        </button>

        <a
          className="pc-toolbar-btn pc-toolbar-whatsapp"
          href={PERSON.whatsapp}
          target="_blank"
          rel="noreferrer"
          onClick={handleWhatsApp}
        >
          <MessageCircle size={17} className="pc-toolbar-icon" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>

        <button
          className="pc-toolbar-btn pc-toolbar-flip"
          onClick={handleFlip}
          type="button"
          aria-label={isFlipped ? 'Flip card to front' : 'Flip card to back'}
        >
          <RotateCw size={16} className="pc-toolbar-icon" aria-hidden="true" />
          <span>{isFlipped ? 'Front' : 'Flip'}</span>
        </button>

        <button className="pc-toolbar-btn pc-toolbar-share" onClick={handleShare} type="button">
          <Share2 size={17} className="pc-toolbar-icon" aria-hidden="true" />
          <span>Share</span>
        </button>

        <button className="pc-toolbar-btn pc-toolbar-qr" onClick={handleQR} type="button">
          <QrCode size={17} className="pc-toolbar-icon" aria-hidden="true" />
          <span>QR Code</span>
        </button>
      </div>
    </div>
  );
};

export default React.memo(ActionToolbar);
