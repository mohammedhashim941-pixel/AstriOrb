import React, { useEffect } from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import './Toast.css';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 2800);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  // The live region stays mounted so screen readers announce new messages.
  return (
    <div className="vcard-toast-container" role="status" aria-live="polite" aria-atomic="true">
      {message && (
        <div className={`vcard-toast vcard-toast-${type}`}>
          {type === 'success' ? (
            <CheckCircle2 size={18} className="vcard-toast-icon" aria-hidden="true" />
          ) : (
            <Info size={18} className="vcard-toast-icon" aria-hidden="true" />
          )}
          <span className="vcard-toast-msg">{message}</span>
        </div>
      )}
    </div>
  );
};

export default React.memo(Toast);
