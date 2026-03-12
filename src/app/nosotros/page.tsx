"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useLanguage } from "../../context/languagecontext";

import Typewriter from "../../components/typewriter";
import Magnetic from "../../components/magnetic";
import TextMask from "../../components/textmask";
import MethodologyScroll from "../../components/methodologyscroll";
// Re-importamos FadeIn para la sección de Resultados
import { RevealParent, RevealChild } from "../../components/fadein";

// ─────────────────────────────────────────────
// SECCIÓN 2: QUIÉNES SOMOS (Texto Editorial)
// ─────────────────────────────────────────────
function QuienesSomosTextSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const watermarkText = isEn ? "WHO\nWE ARE" : "QUIÉNES\nSOMOS";
  const paragraphText = isEn
    ? "A technology company specialized in real estate digitization. We combine real industry experience with a resolute and practical mindset."
    : "Una empresa tecnológica especializada en digitalización inmobiliaria. Combinamos experiencia real en el sector con una mentalidad resolutiva y práctica.";

  return (
    <section style={{
      position: "relative",
      width: "100%",
      backgroundColor: "#F5F4F0",
      padding: "150px 20px 50px 20px",
      overflow: "hidden",
      zIndex: 10
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", minHeight: "350px", display: "flex", alignItems: "center" }}>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ position: "absolute", top: 0, left: "-20px", zIndex: 0, pointerEvents: "none" }}
        >
          <h2 style={{
            fontSize: "clamp(5rem, 12vw, 13rem)",
            fontWeight: 400,
            color: "#DEDEDE",
            lineHeight: 0.85,
            whiteSpace: "pre-line",
            margin: 0,
            textTransform: "uppercase",
            fontFamily: "'Space Grotesk', var(--font-space, sans-serif)",
            letterSpacing: "-0.03em"
          }}>
            {watermarkText}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{
            position: "relative",
            zIndex: 1,
            marginLeft: "clamp(40px, 15vw, 300px)",
            marginTop: "120px",
            maxWidth: "480px",
            fontSize: "clamp(1.2rem, 2vw, 1.4rem)",
            color: "#2D2418",
            lineHeight: 1.5,
            fontWeight: 500
          }}
        >
          {paragraphText}
        </motion.p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECCIÓN 3: MISIÓN Y RAZÓN DE SER
// ─────────────────────────────────────────────
function MisionRazonSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const tTitle1 = isEn ? "Our mission" : "Nuestra misión";
  const tDesc1 = isEn
    ? "To equip our clients with technological power to lead digital development and close more sales."
    : "Dotar de fuerza tecnológica a nuestros clientes para liderar el desarrollo digital y cerrar más ventas.";

  const tTitle2 = isEn ? "Our reason for being" : "Nuestra razón de ser";
  const tDesc2 = isEn
    ? "We saw how large real estate networks advance thanks to huge IT teams, while many independent agencies are left behind through no fault of their own. ECONOS was born to close that gap: we democratize advanced technology so that any real estate agency can compete head-to-head with the giants."
    : "Vimos cómo las grandes redes inmobiliarias avanzan gracias a enormes equipos de IT, mientras muchas agencias independientes quedan rezagadas sin culpa. ECONOS nace para acortar esa brecha: democratizamos tecnología avanzada para que cualquier inmobiliaria pueda competir de tú a tú con los grandes.";

  return (
    <section style={{
      position: "relative",
      width: "100%",
      backgroundColor: "#F5F4F0",
      padding: "50px 20px 150px 20px",
      zIndex: 10
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "60px" }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ flex: "1.2 1 500px" }}
        >
          <div style={{ width: "100%", borderRadius: "0px", overflow: "hidden" }}>
            <img
              src="/assets/img/mision-equipo.jpg"
              alt="Equipo ECONOS"
              style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", paddingLeft: "20px", fontFamily: "'Inter', sans-serif", color: "#2D2418" }}
        >
          <div style={{ marginBottom: "50px" }}>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", fontWeight: 700, margin: "0 0 20px 0", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              {tTitle1}
            </h2>
            <p style={{ fontSize: "clamp(1.3rem, 2vw, 1.5rem)", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
              {tDesc1}
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", fontWeight: 700, margin: "0 0 20px 0", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              {tTitle2}
            </h2>
            <p style={{ fontSize: "1.1rem", fontWeight: 400, margin: 0, lineHeight: 1.6 }}>
              {tDesc2}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECCIÓN 5: RESULTADOS (Traída desde el Home)
// ─────────────────────────────────────────────
function ResultsSection() {
  const { t } = useLanguage();

  return (
    <section className="home-section section-results">
      <RevealParent className="container results-layout">
        <div className="results-left">
          <TextMask delay={0.1}>
            <h2 className="results-main-title" dangerouslySetInnerHTML={{ __html: t("home.results.title") }} style={{ margin: 0 }} />
          </TextMask>
        </div>
        <div className="results-right">
          <RevealParent className="results-list" staggerDelay={0.12}>
            <RevealChild><li>{t("home.results.list1")}</li></RevealChild>
            <RevealChild><li>{t("home.results.list2")}</li></RevealChild>
            <RevealChild><li>{t("home.results.list3")}</li></RevealChild>
            <RevealChild><li>{t("home.results.list4")}</li></RevealChild>
            <RevealChild><li>{t("home.results.list5")}</li></RevealChild>
          </RevealParent>
          <RevealChild>
            <p className="results-footer-text" dangerouslySetInnerHTML={{ __html: t("home.results.footer") }} style={{ marginTop: "30px" }} />
          </RevealChild>
        </div>
      </RevealParent>
    </section>
  );
}

// ─── Main content ──────────────────────────────────────────────────
function NosotrosContent() {
  const { t } = useLanguage();

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroBgY = useTransform(heroProgress, [0, 1], ["0%", "20%"]);

  const ctaRef = useRef(null);
  const ctaView = useInView(ctaRef, { once: true, margin: "-15%" });

  return (
    <>
      {/* ─── 1. HERO con parallax real del fondo ─── */}
      <section ref={heroRef} className="banner-hero-section" style={{ position: "relative", overflow: "hidden" }}>
        <motion.div
          style={{
            y: heroBgY,
            position: "absolute",
            inset: "-10% 0",
            backgroundImage: "url('/assets/img/hero nosotros.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            filter: "brightness(1.5) saturate(1.1)"
          }}
        />
        <motion.div className="container" style={{ position: "relative", zIndex: 2, y: heroY, opacity: heroOpacity }}>
          <Typewriter text={t("header.about").toUpperCase()} className="banner-hero-title" />
        </motion.div>
      </section>

      {/* ─── 2. QUIÉNES SOMOS ─── */}
      <QuienesSomosTextSection />

      {/* ─── 3. MISIÓN Y RAZÓN DE SER ─── */}
      <MisionRazonSection />

      {/* ─── 4. MÉTODO (Scroll Interactivo) ─── */}
      <MethodologyScroll />

      {/* ─── 5. RESULTADOS REALES (Desde el Home) ─── */}
      <ResultsSection />

      {/* ─── 6. CTA FINAL — spring entrance ─── */}
      <section
        className="home-section section-digital-cta"
        style={{ backgroundImage: `url(${t("home.cta_digital.bg")})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container cta-container">
          <motion.div
            ref={ctaRef}
            className="cta-box"
            initial={{ y: 80, opacity: 0 }}
            animate={ctaView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 70, damping: 18, mass: 1 }}
          >
            <TextMask>
              <h2 className="cta-heading" style={{ margin: 0 }}>{t("home.cta_digital.line1")}</h2>
            </TextMask>
            <motion.p
              className="cta-subheading"
              style={{ marginTop: "15px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={ctaView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {t("home.cta_digital.line2")}
            </motion.p>
            <motion.div
              className="cta-action"
              style={{ marginTop: "30px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={ctaView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Magnetic strength={0.4}>
                <Link href="/contacto" className="btn-white-expert" style={{ display: "inline-block" }}>
                  {t("home.cta_digital.btn")}
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// ─── Hydration-safe wrapper ───────────────────────────────────────
export default function Nosotros() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <main style={{ minHeight: "100vh", background: "transparent" }} />;
  return <NosotrosContent />;
}