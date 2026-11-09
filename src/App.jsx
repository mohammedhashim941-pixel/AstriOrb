import React, { Suspense, useCallback, useEffect, useState } from 'react';
import ProfileCard from './component/ProfileCard';
import ActionToolbar from './component/ActionToolbar';
import Toast from './component/Toast';
import ErrorBoundary from './component/ErrorBoundary';
import { usePrefersReducedMotion } from './utils/usePrefersReducedMotion';
import { preloadVCardPhoto } from './utils/vcard';
import { initAnalytics } from './utils/analytics';
import logo from './assets/logo.svg';
import { grain, shape } from './assets/textures';
import './App.css';

const PixelBlast = React.lazy(() => import('./components/PixelBlast'));

const loadQRCodeModal = () => import('./component/QRCodeModal');
const QRCodeModal = React.lazy(loadQRCodeModal);

// The animated dots start after the card is usable, so setting up WebGL
// can't block someone tapping Save or WhatsApp on a slower phone.
const BACKGROUND_DELAY_MS = 3000;

const whenIdle = (callback) => {
  if ('requestIdleCallback' in window) window.requestIdleCallback(callback, { timeout: 2000 });
  else setTimeout(callback, 300);
};

function App() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const [isFlipped, setIsFlipped] = useState(false);
  const [backgroundReady, setBackgroundReady] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  // The card paints first; everything optional loads when the browser is free.
  useEffect(() => {
    whenIdle(() => {
      loadQRCodeModal().catch(() => {});
      preloadVCardPhoto();
      initAnalytics();
    });
    const timer = setTimeout(() => setBackgroundReady(true), BACKGROUND_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleShowToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
  }, []);

  const handleCloseToast = useCallback(() => {
    setToast((current) => ({ ...current, message: '' }));
  }, []);

  const handleToggleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleOpenQR = useCallback(() => {
    setIsQRModalOpen(true);
  }, []);

  const handleCloseQR = useCallback(() => {
    setIsQRModalOpen(false);
  }, []);

  return (
    <div className="App">
      {backgroundReady && (
        <ErrorBoundary>
          <Suspense fallback={null}>
            <PixelBlast
              variant="square"
              pixelSize={4}
              color="#8A5A16"
              patternScale={2}
              patternDensity={1}
              pixelSizeJitter={0}
              enableRipples={!reducedMotion}
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}
              speed={reducedMotion ? 0 : 0.5}
              edgeFade={0.25}
              transparent={true}
              style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
            />
          </Suspense>
        </ErrorBoundary>
      )}

      <main className="card-container-flex">
        <ProfileCard
          key="v2-star-pattern"
          avatarUrl={logo}
          grainUrl={grain}
          iconUrl={shape}
          enableTilt={!reducedMotion}
          enableMobileTilt={!reducedMotion}
          behindGlowEnabled={true}
          behindGlowColor="rgba(234, 146, 22, 0.45)"
          innerGradient="linear-gradient(135deg, rgba(234, 146, 22, 0.12) 0%, rgba(29, 44, 47, 0.6) 45%, rgba(7, 22, 22, 0.85) 100%)"
          isFlipped={isFlipped}
        />

        <ActionToolbar
          onOpenQR={handleOpenQR}
          onShowToast={handleShowToast}
          onFlip={handleToggleFlip}
          isFlipped={isFlipped}
        />
      </main>

      {isQRModalOpen && (
        <ErrorBoundary>
          <Suspense fallback={null}>
            <QRCodeModal isOpen onClose={handleCloseQR} onShowToast={handleShowToast} />
          </Suspense>
        </ErrorBoundary>
      )}

      <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />
    </div>
  );
}

export default App;
