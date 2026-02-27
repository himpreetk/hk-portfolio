"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { label: "Experience", href: "#experience" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
    ];

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuActive : ""}`}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo}>HK</Link>

                <ul className={styles.links}>
                    {links.map((l) => (
                        <li key={l.label}>
                            <Link href={l.href} className={styles.link}>{l.label}</Link>
                        </li>
                    ))}
                </ul>

                <a href="mailto:kaurhimpreet95@gmail.com" className={styles.cta}>
                    Get in Touch
                </a>

                <button
                    className={styles.burger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.burgerLine} ${menuOpen ? styles.l1 : ""}`} />
                    <span className={`${styles.burgerLine} ${menuOpen ? styles.l2 : ""}`} />
                    <span className={`${styles.burgerLine} ${menuOpen ? styles.l3 : ""}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
                {links.map((l) => (
                    <Link key={l.label} href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                        {l.label}
                    </Link>
                ))}
                <a href="mailto:kaurhimpreet95@gmail.com" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
                    Get in Touch
                </a>
            </div>
        </nav>
    );
}
