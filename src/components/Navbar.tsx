import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Download', href: '#download' },
  { label: 'GitHub', href: 'https://github.com/udithsc/nft_marketplace_app', external: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string, href: string, external?: boolean) => {
    setActiveLink(label);
    setMenuOpen(false);
    if (external) {
      window.open(href, '_blank');
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nft-navbar ${scrolled ? 'nft-navbar--scrolled' : ''}`}>
      <div className="nft-navbar__inner">
        {/* Logo */}
        <a href="#home" className="nft-navbar__logo" onClick={() => setActiveLink('Home')}>
          <div className="nft-navbar__logo-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
              <path d="M8 22L14 10L20 18L24 14L28 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="14" cy="10" r="2" fill="white" />
            </svg>
          </div>
          <span className="nft-navbar__logo-text">
            Pro<span className="nft-navbar__logo-accent">Nef</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nft-navbar__links">
          {navLinks.map(({ label, href, external }) => (
            <li key={label}>
              <button
                className={`nft-navbar__link ${activeLink === label ? 'nft-navbar__link--active' : ''}`}
                onClick={() => handleNavClick(label, href, external)}
              >
                {label}
                {external && (
                  <svg className="nft-navbar__ext-icon" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="nft-navbar__cta-wrap">
          <button
            className="nft-navbar__cta"
            onClick={() => window.open('https://expo.dev/@udithsc/nft_marketplace_app?serviceType=classic&distribution=expo-go', '_blank')}
          >
            <span>Launch App</span>
            <svg viewBox="0 0 16 16" fill="none" className="nft-navbar__cta-arrow">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Hamburger */}
          <button
            className={`nft-navbar__hamburger ${menuOpen ? 'nft-navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`nft-mobile-menu ${menuOpen ? 'nft-mobile-menu--open' : ''}`}>
        <ul className="nft-mobile-menu__links">
          {navLinks.map(({ label, href, external }) => (
            <li key={label}>
              <button
                className={`nft-mobile-menu__link ${activeLink === label ? 'nft-mobile-menu__link--active' : ''}`}
                onClick={() => handleNavClick(label, href, external)}
              >
                {label}
                {external && (
                  <svg className="nft-navbar__ext-icon" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="nft-mobile-menu__cta"
          onClick={() => window.open('https://expo.dev/@udithsc/nft_marketplace_app?serviceType=classic&distribution=expo-go', '_blank')}
        >
          Launch App
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
