import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { X, Copy, Check, ExternalLink } from 'lucide-react';
import { copyTextToClipboard, triggerHaptic } from '../utils/vcard';
import './QRCodeModal.css';

const QRCodeModal = ({ isOpen, onClose, onShowToast, targetUrl }) => {
  const canvasRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const urlToEncode = targetUrl || (typeof window !== 'undefined' ? window.location.href : 'https://astriorb.com');

  useEffect(() => {
    if (!isOpen) return;

    triggerHaptic(20);

    const generateQR = async () => {
      if (canvasRef.current) {
        try {
          await QRCode.toCanvas(canvasRef.current, urlToEncode, {
            width: 220,
            margin: 2,
            color: {
              dark: '#0f172a',
              light: '#ffffff'
            },
            errorCorrectionLevel: 'H'
          });
        } catch (err) {
          console.error('Failed to generate QR code', err);
        }
      }
    };

    generateQR();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, urlToEncode, onClose]);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    triggerHaptic(15);
    const ok = await copyTextToClipboard(urlToEncode);
    if (ok) {
      setCopied(true);
      if (onShowToast) onShowToast('Card link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pc-qr-overlay" onClick={onClose}>
      <div className="pc-qr-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pc-qr-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="pc-qr-header">
          <h3 className="pc-qr-title">Scan to Connect</h3>
          <p className="pc-qr-subtitle">Point your phone's camera to open this business card</p>
        </div>

        <div className="pc-qr-canvas-wrapper">
          <canvas ref={canvasRef} className="pc-qr-canvas" />
        </div>

        <div className="pc-qr-actions">
          <button className="pc-qr-action-btn" onClick={handleCopyLink} type="button">
            {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
          <a
            href={urlToEncode}
            target="_blank"
            rel="noreferrer"
            className="pc-qr-action-btn"
          >
            <ExternalLink size={16} />
            <span>Open Link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(QRCodeModal);
