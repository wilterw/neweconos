"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/languagecontext";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  
  // Estado para el menú móvil (hamburguesa)
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header id="global-header">
      <div className="header-container">
        
        {/* LOGO */}
        <div className="logo-container">
          <Link href="/">
            <img src="/assets/img/logo-econos-blanco.png" alt="ECONOS Logo" className="logo-img" />
          </Link>
        </div>

        {/* NAVEGACIÓN */}
        {/* Agregamos la clase 'open' si isMobileOpen es true para tu CSS móvil */}
        <div className={`nav-container ${isMobileOpen ? 'open' : ''}`}>
          <nav className="main-nav">
            <ul>
              <li><Link href="/">{t("header.home")}</Link></li>
              <li><Link href="/servicios">{t("header.services")}</Link></li>
              <li><Link href="/nosotros">{t("header.about")}</Link></li>
              <li><Link href="/contacto">{t("header.contact")}</Link></li>
            </ul>
          </nav>

          {/* SELECTOR DE IDIOMAS */}
          <div className="lang-selector">
            <button 
              className={`lang-link ${language === 'es' ? 'active' : ''}`} 
              onClick={() => toggleLanguage('es')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit', padding: 0 }}
            >
              Es
            </button>
            <span className="separator">|</span>
            <button 
              className={`lang-link ${language === 'en' ? 'active' : ''}`} 
              onClick={() => toggleLanguage('en')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit', padding: 0 }}
            >
              En
            </button>
          </div>
          
          {/* BOTÓN HAMBURGUESA MÓVIL */}
          <div className="mobile-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}