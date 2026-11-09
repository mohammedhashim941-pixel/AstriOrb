import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { X, Copy, Check, Download } from 'lucide-react';
import { CARD_QR_URL, CARD_URL } from '../data/card';
import { copyTextToClipboard, triggerHaptic } from '../utils/vcard';
import { track } from '../utils/analytics';
import { useDialog } from '../utils/useDialog';
import './QRCodeModal.css';

const QR_OPTIONS = {
  margin: 4,
  color: { dark: '#000000', light: '#ffffff' },
  errorCorrectionLevel: 'H'
};

const QRCodeModal = ({ isOpen, onClose, onShowToast }) => {
  const canvasRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const dialogRef = useDialog(isOpen, onClose);

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, CARD_QR_URL, { ...QR_OPTIONS, width: 480 }).catch((err) => {
      console.error('Failed to generate QR code', err);
    });
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    triggerHaptic(15);
    const ok = await copyTextToClipboard(CARD_URL);
    if (ok) {
      setCopied(true);
      if (onShowToast) onShowToast('Card link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } else if (onShowToast) {
      onShowToast("Couldn't copy the link on this browser.", 'info');
    }
  };

  const handleDownload = async () => {
    triggerHaptic(15);
    track('qr_download');
    try {
      const link = document.createElement('a');
      link.href = await QRCode.toDataURL(CARD_QR_URL, { ...QR_OPTIONS, width: 1024 });
      link.download = 'AstriOrb-Card-QR.png';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      if (onShowToast) onShowToast("Couldn't create the QR image.", 'info');
    }
  };

  return (
    <div className="pc-qr-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="pc-qr-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="qr-dialog-title"
      >
        <button className="pc-qr-close-btn" onClick={onClose} type="button" aria-label="Close QR code">
          <X size={20} aria-hidden="true" />
        </button>

        <div className="pc-qr-header">
          <h2 id="qr-dialog-title" className="pc-qr-title">Scan to Connect</h2>
          <p className="pc-qr-subtitle">Point your phone's camera to open this business card</p>
        </div>

        <div className="pc-qr-canvas-wrapper">
          <canvas ref={canvasRef} className="pc-qr-canvas" role="img" aria-label="QR code linking to this business card" />
        </div>

        <div className="pc-qr-actions">
          <button className="pc-qr-action-btn" onClick={handleCopyLink} type="button">
            {copied ? <Check size={16} color="#34d399" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
          <button className="pc-qr-action-btn" onClick={handleDownload} type="button">
            <Download size={16} aria-hidden="true" />
            <span>Download QR</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(QRCodeModal);
