import React from 'react';
import { UserPlus, Share2, QrCode, RotateCw } from 'lucide-react';
import { downloadVCard, triggerHaptic, copyTextToClipboard } from '../utils/vcard';
import './ActionToolbar.css';

const ActionToolbar = ({ onOpenQR, onShowToast, onFlip, isFlipped }) => {
  const handleSaveContact = () => {
    triggerHaptic(25);
    downloadVCard();
    if (onShowToast) {
      onShowToast('Contact saved to your device!');
    }
  };

  const handleFlip = () => {
    triggerHaptic(20);
    if (onFlip) onFlip();
  };

  const handleShare = async () => {
    triggerHaptic(20);
    const shareData = {
      title: 'Mohammed Hashim | Managing Director — AstriOrb',
      text: 'Connect with Mohammed Hashim, Managing Director at AstriOrb. Where Ideas Orbit Into Reality.',
      url: window.location.href
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
    const ok = await copyTextToClipboard(window.location.href);
    if (ok && onShowToast) {
      onShowToast('Card link copied to clipboard!');
    }
  };

  const handleQR = () => {
    triggerHaptic(20);
    if (onOpenQR) onOpenQR();
  };

  return (
    <div className="pc-toolbar-container">
      <div className="pc-toolbar">
        <button
          className="pc-toolbar-btn pc-toolbar-primary pc-toolbar-save"
          onClick={handleSaveContact}
          type="button"
          aria-label="Save contact to device"
        >
          <UserPlus size={18} className="pc-toolbar-icon" />
          <span>Save Contact</span>
        </button>

        <button
          className="pc-toolbar-btn pc-toolbar-flip"
          onClick={handleFlip}
          type="button"
          aria-label={isFlipped ? 'Flip card to front' : 'Flip card to back'}
        >
          <RotateCw size={16} className="pc-toolbar-icon" />
          <span>{isFlipped ? 'Front' : 'Flip Card'}</span>
        </button>

        <button
          className="pc-toolbar-btn pc-toolbar-share"
          onClick={handleShare}
          type="button"
          aria-label="Share card"
        >
          <Share2 size={17} className="pc-toolbar-icon" />
          <span>Share</span>
        </button>

        <button
          className="pc-toolbar-btn pc-toolbar-qr"
          onClick={handleQR}
          type="button"
          aria-label="Show QR code"
        >
          <QrCode size={17} className="pc-toolbar-icon" />
          <span>QR Code</span>
        </button>
      </div>
    </div>
  );
};

export default React.memo(ActionToolbar);
