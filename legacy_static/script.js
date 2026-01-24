/**
 * Virtual Business Card - JavaScript
 * Features: QR Code Generation, vCard Download, 3D Card Effect, Particles
 */

// ========================================
// Configuration
// ========================================
const CONFIG = {
    name: 'Mohammed Hashim',
    title: 'Founder',
    organization: 'AstriOrb',
    email: 'astriorbofficial@gmail.com',
    phone: '+918848953850',
    phoneFormatted: '+91 8848953850',
    website: 'https://astriorb.com',
    // Update this URL once deployed
    cardUrl: window.location.href
};

// ========================================
// Initialize on DOM Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initQRCode();
    initVCardDownload();
    init3DCardEffect();
    initParticles();
});

// ========================================
// QR Code Generation
// ========================================
function initQRCode() {
    const qrcodeContainer = document.getElementById('qrcode');
    const printQrcodeContainer = document.getElementById('printQrcode');
    
    if (qrcodeContainer) {
        // Generate vCard data for QR code
        const vCardData = generateVCardData();
        
        // Create QR code for screen
        new QRCode(qrcodeContainer, {
            text: vCardData,
            width: 120,
            height: 120,
            colorDark: '#1a1a3e',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.M
        });
    }
    
    if (printQrcodeContainer) {
        // Create larger QR code for print
        new QRCode(printQrcodeContainer, {
            text: generateVCardData(),
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}

// ========================================
// vCard Generation & Download
// ========================================
function generateVCardData() {
    // vCard 3.0 format
    const vCard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${CONFIG.name}`,
        `N:Hashim;Mohammed;;;`,
        `ORG:${CONFIG.organization}`,
        `TITLE:${CONFIG.title}`,
        `TEL;TYPE=CELL:${CONFIG.phone}`,
        `EMAIL;TYPE=WORK:${CONFIG.email}`,
        `URL:${CONFIG.website}`,
        'END:VCARD'
    ].join('\n');
    
    return vCard;
}

function initVCardDownload() {
    const downloadBtn = document.getElementById('downloadVcard');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            downloadVCard();
            
            // Add ripple effect
            createRipple(downloadBtn, event);
        });
    }
}

function downloadVCard() {
    const vCardData = generateVCardData();
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${CONFIG.name.replace(/\s+/g, '_')}_AstriOrb.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
    
    // Show success feedback
    showToast('Contact saved to your device!');
}

// ========================================
// Toast Notification
// ========================================
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span>${message}</span>
    `;
    
    // Add toast styles dynamically
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
        color: white;
        padding: 14px 24px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        box-shadow: 0 10px 40px rgba(139, 92, 246, 0.4);
        z-index: 1000;
        animation: toastIn 0.4s ease forwards;
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes toastIn {
            to {
                transform: translateX(-50%) translateY(0);
            }
        }
        @keyframes toastOut {
            to {
                transform: translateX(-50%) translateY(100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ========================================
// Ripple Effect
// ========================================
function createRipple(button, event) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        left: ${event.clientX - rect.left - size / 2}px;
        top: ${event.clientY - rect.top - size / 2}px;
    `;
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

// ========================================
// 3D Card Tilt Effect
// ========================================
function init3DCardEffect() {
    const card = document.getElementById('card');
    
    if (!card) return;
    
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
}

// ========================================
// Particle Animation
// ========================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (!particlesContainer) return;
    
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random animation delay
    particle.style.animationDelay = `${Math.random() * 3}s`;
    
    // Random animation duration
    particle.style.animationDuration = `${Math.random() * 2 + 2}s`;
    
    container.appendChild(particle);
}

// ========================================
// Print Functionality
// ========================================
function printQRCode() {
    window.print();
}
