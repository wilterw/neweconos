"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../context/languagecontext";

const STEPS = [
    {
        num: "01",
        titleKey: "about.step1.title",
        descKey: "about.step1.desc",
        img: "/assets/img/grafico-analisis.jpg",
        color: "#CC0000"
    },
    {
        num: "02",
        titleKey: "about.step2.title",
        descKey: "about.step2.desc",
        img: "/assets/img/diagrama-ecosistema.jpg",
        color: "#CC0000"
    },
    {
        num: "03",
        titleKey: "about.step3.title",
        descKey: "about.step3.desc",
        img: "/assets/img/circuito-automatizacion.jpg",
        color: "#CC0000"
    },
    {
        num: "04",
        titleKey: "about.step4.title",
        descKey: "about.step4.desc",
        img: "/assets/img/equipo-soporte.jpg",
        color: "#CC0000"
    },
];

function MethodCard({ step, index, scrollYProgress, t }: { step: any, index: number, scrollYProgress: any, t: any }) {
    let inputRange: number[] = [];
    let xRangeNum: number[] = [];
    let opacityRange: number[] = [];
    let skewRange: number[] = [];

    if (index === 0) {
        inputRange = [0, 0.20, 0.25, 1];
        xRangeNum = [0, 0, 100, 100];
        opacityRange = [1, 1, 0, 0];
        skewRange = [0, 0, -15, 0];
    }
    else if (index === 1) {
        inputRange = [0, 0.20, 0.25, 0.45, 0.50, 1];
        xRangeNum = [100, 100, 0, 0, 100, 100];
        opacityRange = [0, 0, 1, 1, 0, 0];
        skewRange = [0, 15, 0, 0, -15, 0];
    }
    else if (index === 2) {
        inputRange = [0, 0.45, 0.50, 0.70, 0.75, 1];
        xRangeNum = [100, 100, 0, 0, 100, 100];
        opacityRange = [0, 0, 1, 1, 0, 0];
        skewRange = [0, 15, 0, 0, -15, 0];
    }
    else {
        inputRange = [0, 0.70, 0.75, 1];
        xRangeNum = [100, 100, 0, 0];
        opacityRange = [0, 0, 1, 1];
        skewRange = [0, 15, 0, 0];
    }

    const xOffset = useTransform(scrollYProgress, inputRange, xRangeNum);
    const x = useTransform(xOffset, (val) => `${val}vw`);
    const opacity = useTransform(scrollYProgress, inputRange, opacityRange);
    const skewX = useTransform(scrollYProgress, inputRange, skewRange);

    const display = useTransform(opacity, (o) => (o > 0.05 ? "flex" : "none"));

    return (
        <motion.div
            style={{
                position: "absolute", width: "100%", justifyContent: "center",
                display, x, opacity, skewX, zIndex: 10 - index
            }}
        >
            <div style={{
                display: "flex", alignItems: "center", width: "100%", maxWidth: "900px",
                background: "rgba(20, 20, 25, 0.85)",
                backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "32px",
                padding: "30px", paddingRight: "50px",
                boxShadow: "0 30px 60px rgba(0,0,0,0.5)"
            }}>
                <div style={{
                    width: "380px", flexShrink: 0,
                    aspectRatio: "16/9",
                    borderRadius: "20px", overflow: "hidden",
                    background: "#000",
                    border: "2px solid rgba(255,255,255,0.1)", position: "relative",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}>
                    <img src={step.img} alt={t(step.titleKey)} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(204,0,0,0.1) 0%, transparent 100%)", pointerEvents: "none" }} />
                </div>

                <div style={{ marginLeft: "50px", display: "flex", flexDirection: "column" }}>
                    <span style={{
                        fontSize: "5rem", fontWeight: 800, color: step.color,
                        lineHeight: 0.8, fontFamily: "var(--font-space)", marginBottom: "10px"
                    }}>
                        {step.num}
                    </span>
                    <h3
                        style={{ fontSize: "2.5rem", fontWeight: 700, color: "#fff", margin: "0 0 15px 0", lineHeight: 1.1 }}
                        dangerouslySetInnerHTML={{ __html: t(step.titleKey) }}
                    />
                    <p
                        style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.5 }}
                        dangerouslySetInnerHTML={{ __html: t(step.descKey) }}
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default function MethodologyScroll() {
    const { t } = useLanguage();
    const mainRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: mainRef, offset: ["start start", "end end"] });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => window.dispatchEvent(new Event("resize")), 500);
        setTimeout(() => clearInterval(interval), 2000);
        return () => clearInterval(interval);
    }, []);

    const rawMethodTitle = typeof t("about.method.title") === "string" ? t("about.method.title") : "NUESTRO MÉTODO<br>(MÉTODO ECONOS)";
    const parts = rawMethodTitle.split("<br>");
    const titleStr = parts[0] || "NUESTRO MÉTODO";
    const subtitleStr = parts[1] || "(MÉTODO ECONOS)";

    const wordVariant = {
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "inline-block" }
    };

    return (
        <section ref={mainRef} style={{
            position: "relative", width: "100%",
            height: "500vh",
            // CAMBIO CLAVE AQUÍ: Quitamos la imagen y ponemos el color crema
            backgroundColor: "#F5F4F0",
            zIndex: 30
        }}>
            <div style={{
                position: "sticky", top: 0, height: "100vh", width: "100%", overflow: "hidden",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
            }}>
                <div style={{ position: "absolute", top: "15%", textAlign: "center", zIndex: 10 }}>
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
                        variants={{ hidden: { opacity: 1 }, visible: { transition: { staggerChildren: 0.05 } } }}
                        // CAMBIO CLAVE AQUÍ: Color de texto de #fff a oscuro para que se vea sobre el fondo crema
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#0A0A0C", margin: 0, textTransform: "uppercase", letterSpacing: "2px" }}
                    >
                        {Array.from(titleStr).map((char, index) => (
                            <motion.span key={index} variants={wordVariant}>{char === " " ? "\u00A0" : char}</motion.span>
                        ))}
                    </motion.h2>

                    {subtitleStr && (
                        <motion.p
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
                            variants={{ hidden: { opacity: 1 }, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.8 } } }}
                            style={{ fontSize: "1.5rem", color: "#CC0000", margin: "10px 0 0 0", fontFamily: "var(--font-space)", fontWeight: 700 }}
                        >
                            {Array.from(subtitleStr).map((char, index) => (
                                <motion.span key={index} variants={wordVariant}>{char === " " ? "\u00A0" : char}</motion.span>
                            ))}
                        </motion.p>
                    )}
                </div>

                <div style={{ position: "relative", width: "100%", height: "400px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
                    {isMounted && STEPS.map((step, i) => (
                        <MethodCard key={i} index={i} step={step} scrollYProgress={scrollYProgress} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}