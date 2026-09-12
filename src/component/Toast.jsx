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

  if (!message) return null;

  return (
    <div className="vcard-toast-container">
      <div className={`vcard-toast vcard-toast-${type}`}>
        {type === 'success' ? (
          <CheckCircle2 size={18} className="vcard-toast-icon" />
        ) : (
          <Info size={18} className="vcard-toast-icon" />
        )}
        <span className="vcard-toast-msg">{message}</span>
      </div>
    </div>
  );
};

export default React.memo(Toast);
