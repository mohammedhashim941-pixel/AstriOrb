
import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { Phone, Mail, Globe, MessageCircle, Briefcase, Linkedin } from 'lucide-react';
import { COMPANY, PERSON, PRODUCTS } from '../data/card';
import { triggerHaptic } from '../utils/vcard';
import { track } from '../utils/analytics';
import './ProfileCard.css';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)';

// Check if device is mobile
const isMobileDevice = () => {
    if (typeof navigator === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        (window.innerWidth <= 768 && 'ontouchstart' in window);
};

const ANIMATION_CONFIG = {
    INITIAL_DURATION: 1200,
    INITIAL_X_OFFSET: 70,
    INITIAL_Y_OFFSET: 60,
    DEVICE_BETA_OFFSET: 45, // Adjusted for more natural holding angle
    ENTER_TRANSITION_MS: 180
};

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

const ProfileCardComponent = ({
    avatarUrl,
    iconUrl,
    grainUrl,
    innerGradient,
    behindGlowEnabled = true,
    behindGlowColor,
    behindGlowSize,
    className = '',
    enableTilt = true,
    enableMobileTilt = false,
    mobileTiltSensitivity = 3, // Reduced for smoother gyro movement
    isFlipped: controlledFlipped
}) => {
    const [internalFlipped] = useState(false);
    const isFlipped = controlledFlipped !== undefined ? controlledFlipped : internalFlipped;
    const [isMobile] = useState(() => isMobileDevice());
    const wrapRef = useRef(null);
    const shellRef = useRef(null);
    // A ref, not state: changing state here would re-run the setup effect,
    // removing the iOS motion listener and replaying the intro animation.
    const gyroActiveRef = useRef(false);

    const enterTimerRef = useRef(null);
    const leaveRafRef = useRef(null);

    const tiltEngine = useMemo(() => {
        if (!enableTilt) return null;

        let rafId = null;
        let running = false;
        let lastTs = 0;

        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;

        const DEFAULT_TAU = 0.14;
        const INITIAL_TAU = 0.6;
        let initialUntil = 0;

        const setVarsFromXY = (x, y) => {
            const shell = shellRef.current;
            const wrap = wrapRef.current;
            if (!shell || !wrap) return;

            const width = shell.clientWidth || 1;
            const height = shell.clientHeight || 1;

            const percentX = clamp((100 / width) * x);
            const percentY = clamp((100 / height) * y);

            const centerX = percentX - 50;
            const centerY = percentY - 50;

            const properties = {
                '--pointer-x': `${percentX}%`,
                '--pointer-y': `${percentY}%`,
                '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
                '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
                '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
                '--pointer-from-top': `${percentY / 100}`,
                '--pointer-from-left': `${percentX / 100}`,
                '--rotate-x': `${round(-(centerX / 5))}deg`,
                '--rotate-y': `${round(centerY / 4)}deg`
            };

            for (const [k, v] of Object.entries(properties)) wrap.style.setProperty(k, v);
        };

        const step = ts => {
            if (!running) return;
            if (lastTs === 0) lastTs = ts;
            const dt = (ts - lastTs) / 1000;
            lastTs = ts;

            const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
            const k = 1 - Math.exp(-dt / tau);

            currentX += (targetX - currentX) * k;
            currentY += (targetY - currentY) * k;

            setVarsFromXY(currentX, currentY);

            const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

            if (stillFar) {
                rafId = requestAnimationFrame(step);
            } else {
                running = false;
                lastTs = 0;
                if (rafId) {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }
            }
        };

        const start = () => {
            if (running) return;
            running = true;
            lastTs = 0;
            rafId = requestAnimationFrame(step);
        };

        return {
            setImmediate(x, y) {
                currentX = x;
                currentY = y;
                setVarsFromXY(currentX, currentY);
            },
            setTarget(x, y) {
                targetX = x;
                targetY = y;
                start();
            },
            toCenter() {
                const shell = shellRef.current;
                if (!shell) return;
                this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
            },
            beginInitial(durationMs) {
                initialUntil = performance.now() + durationMs;
                start();
            },
            getCurrent() {
                return { x: currentX, y: currentY, tx: targetX, ty: targetY };
            },
            cancel() {
                if (rafId) cancelAnimationFrame(rafId);
                rafId = null;
                running = false;
                lastTs = 0;
            }
        };
    }, [enableTilt]);

    const getOffsets = (evt, el) => {
        const rect = el.getBoundingClientRect();
        return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
    };

    const handlePointerMove = useCallback(
        event => {
            const shell = shellRef.current;
            if (!shell || !tiltEngine) return;
            const { x, y } = getOffsets(event, shell);
            tiltEngine.setTarget(x, y);
        },
        [tiltEngine]
    );

    const handlePointerEnter = useCallback(
        event => {
            const shell = shellRef.current;
            if (!shell || !tiltEngine) return;

            shell.classList.add('active');
            shell.classList.add('entering');
            if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
            enterTimerRef.current = window.setTimeout(() => {
                shell.classList.remove('entering');
            }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

            const { x, y } = getOffsets(event, shell);
            tiltEngine.setTarget(x, y);
        },
        [tiltEngine]
    );

    const handlePointerLeave = useCallback(() => {
        const shell = shellRef.current;
        if (!shell || !tiltEngine) return;

        tiltEngine.toCenter();

        const checkSettle = () => {
            const { x, y, tx, ty } = tiltEngine.getCurrent();
            const settled = Math.hypot(tx - x, ty - y) < 0.6;
            if (settled) {
                shell.classList.remove('active');
                leaveRafRef.current = null;
            } else {
                leaveRafRef.current = requestAnimationFrame(checkSettle);
            }
        };
        if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
        leaveRafRef.current = requestAnimationFrame(checkSettle);
    }, [tiltEngine]);

    const handleDeviceOrientation = useCallback(
        event => {
            const shell = shellRef.current;
            if (!shell || !tiltEngine) return;

            const { beta, gamma } = event;
            if (beta == null || gamma == null) return;

            const centerX = shell.clientWidth / 2;
            const centerY = shell.clientHeight / 2;

            // gamma: left-right tilt (-90 to 90)
            // beta: front-back tilt (-180 to 180), with offset for natural holding position
            const x = clamp(centerX + gamma * mobileTiltSensitivity, 0, shell.clientWidth);
            const y = clamp(
                centerY + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
                0,
                shell.clientHeight
            );

            tiltEngine.setTarget(x, y);

            // Activate the card when gyro starts working
            if (!gyroActiveRef.current) {
                gyroActiveRef.current = true;
                shell.classList.add('active');
            }
        },
        [tiltEngine, mobileTiltSensitivity]
    );

    useEffect(() => {
        if (!enableTilt || !tiltEngine) return;

        const shell = shellRef.current;
        if (!shell) return;

        const pointerMoveHandler = handlePointerMove;
        const pointerEnterHandler = handlePointerEnter;
        const pointerLeaveHandler = handlePointerLeave;
        const deviceOrientationHandler = handleDeviceOrientation;

        shell.addEventListener('pointerenter', pointerEnterHandler);
        shell.addEventListener('pointermove', pointerMoveHandler);
        shell.addEventListener('pointerleave', pointerLeaveHandler);

        const handleClick = () => {
            if (!enableMobileTilt || location.protocol !== 'https:') return;
            requestGyroPermission();
        };

        // Function to request gyroscope permission
        const requestGyroPermission = () => {
            const anyMotion = window.DeviceMotionEvent;
            if (anyMotion && typeof anyMotion.requestPermission === 'function') {
                // iOS 13+ requires explicit permission
                anyMotion
                    .requestPermission()
                    .then(state => {
                        if (state === 'granted') {
                            window.addEventListener('deviceorientation', deviceOrientationHandler);
                        }
                    })
                    .catch(console.error);
            } else {
                // Android and older iOS - just add the listener
                window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
        };

        shell.addEventListener('click', handleClick);

        // Auto-activate gyro on mobile (for Android and non-permission-required devices)
        if (enableMobileTilt && isMobile) {
            const anyMotion = window.DeviceMotionEvent;
            // Only auto-request if permission API doesn't exist (Android)
            if (!(anyMotion && typeof anyMotion.requestPermission === 'function')) {
                window.addEventListener('deviceorientation', deviceOrientationHandler);
                shell.classList.add('active'); // Show active state immediately
            }
        }

        const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
        const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
        tiltEngine.setImmediate(initialX, initialY);
        tiltEngine.toCenter();
        tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

        return () => {
            shell.removeEventListener('pointerenter', pointerEnterHandler);
            shell.removeEventListener('pointermove', pointerMoveHandler);
            shell.removeEventListener('pointerleave', pointerLeaveHandler);
            shell.removeEventListener('click', handleClick);
            window.removeEventListener('deviceorientation', deviceOrientationHandler);
            if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
            if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
            tiltEngine.cancel();
            shell.classList.remove('entering');
        };
    }, [
        enableTilt,
        enableMobileTilt,
        isMobile,
        tiltEngine,
        handlePointerMove,
        handlePointerEnter,
        handlePointerLeave,
        handleDeviceOrientation
    ]);

    const cardStyle = useMemo(
        () => ({
            '--icon': iconUrl ? `url(${iconUrl})` : 'none',
            '--grain': grainUrl ? `url(${grainUrl})` : 'none',
            '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT,
            '--behind-glow-color': behindGlowColor ?? 'rgba(125, 190, 255, 0.67)',
            '--behind-glow-size': behindGlowSize ?? '50%'
        }),
        [iconUrl, grainUrl, innerGradient, behindGlowColor, behindGlowSize]
    );

    const contactRows = [
        { icon: Phone, href: `tel:${PERSON.phone}`, label: PERSON.phoneDisplay, ariaLabel: `Call ${PERSON.phoneDisplay}`, event: 'call_click' },
        { icon: MessageCircle, href: PERSON.whatsapp, label: 'WhatsApp', external: true, event: 'whatsapp_click' },
        { icon: Mail, href: `mailto:${PERSON.email}`, label: PERSON.email, ariaLabel: `Email ${PERSON.email}`, event: 'email_click' },
        { icon: Globe, href: COMPANY.website, label: COMPANY.websiteDisplay, external: true },
        { icon: Briefcase, href: PERSON.portfolio, label: 'Portfolio', external: true },
        { icon: Linkedin, href: PERSON.linkedin, label: 'LinkedIn', external: true }
    ];

    const { street, city, region, postalCode, country } = COMPANY.address;

    return (
        <div ref={wrapRef} className={`pc-card-wrapper ${className}`.trim()} style={cardStyle}>
            {behindGlowEnabled && <div className="pc-behind" />}
            <div ref={shellRef} className="pc-card-shell">
                <div className={`pc-card-flipper ${isFlipped ? 'is-flipped' : ''}`}>
                    {/* FRONT SIDE */}
                    <section className="pc-card pc-card-front" inert={isFlipped}>
                        <div className="pc-inside">
                            <div className="pc-shine" />
                            <div className="pc-glare" />

                            <div className="pc-split-layout">
                                <div className="pc-col-left">
                                    <div className="pc-logo-container">
                                        <img src={avatarUrl} alt="AstriOrb logo" className="pc-brand-logo" />
                                    </div>
                                    <div className="pc-brand-text">
                                        <span className="pc-company-name">{COMPANY.brand}</span>
                                        <span className="pc-company-tagline">{COMPANY.tagline}</span>
                                        <span className="pc-dpiit-badge">{COMPANY.recognition}</span>
                                    </div>
                                </div>

                                <div className="pc-separator"></div>

                                <div className="pc-col-right">
                                    <div className="pc-person-info">
                                        <h1 className="pc-person-name">{PERSON.fullName}</h1>
                                        <p className="pc-person-role">{PERSON.title}</p>
                                    </div>

                                    <div className="pc-contact-info">
                                        {contactRows.map(({ icon, href, label, ariaLabel, external, event }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                className="pc-contact-item"
                                                aria-label={ariaLabel}
                                                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                                                onClick={() => {
                                                    triggerHaptic(15);
                                                    if (event) track(event);
                                                }}
                                            >
                                                {React.createElement(icon, { size: 15, className: 'pc-contact-icon', 'aria-hidden': true })}
                                                <span>{label}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BACK SIDE */}
                    <section className="pc-card pc-card-back" inert={!isFlipped}>
                        <div className="pc-inside">
                            <div className="pc-shine" />
                            <div className="pc-glare" />

                            <div className="pc-back-layout">
                                <div className="pc-back-brand">
                                    <img src={avatarUrl} alt="" className="pc-back-logo" />
                                    <div className="pc-back-brand-text">
                                        <span className="pc-back-brand-name">{COMPANY.brand}</span>
                                        <span className="pc-back-brand-tagline">{COMPANY.tagline}</span>
                                    </div>
                                </div>

                                <p className="pc-back-oneliner">{COMPANY.oneLiner}</p>

                                <div className="pc-back-products">
                                    <h2 className="pc-back-heading">Products</h2>
                                    <ul className="pc-product-list">
                                        {PRODUCTS.map((product) => (
                                            <li key={product.name} className="pc-product">
                                                <div className="pc-product-head">
                                                    {product.href ? (
                                                        <a className="pc-product-name pc-product-link" href={product.href} target="_blank" rel="noreferrer">
                                                            {product.name}
                                                        </a>
                                                    ) : (
                                                        <span className="pc-product-name">{product.name}</span>
                                                    )}
                                                    {product.statusHref ? (
                                                        <a
                                                            className={`pc-status pc-status-${product.status} pc-status-link`}
                                                            href={product.statusHref}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {product.statusLabel}
                                                        </a>
                                                    ) : (
                                                        <span className={`pc-status pc-status-${product.status}`}>{product.statusLabel}</span>
                                                    )}
                                                </div>
                                                <p className="pc-product-desc">{product.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pc-back-footer">
                                    <address className="pc-back-address">
                                        {street}, {city}, {region} {postalCode}, {country}
                                    </address>
                                    <span className="pc-back-legal">
                                        {COMPANY.shortLegalName} · {COMPANY.established}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
