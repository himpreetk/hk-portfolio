import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero} id="home">

            {/* ── Top bar ── */}
            <div className={styles.topBar}>
                <div className={`container ${styles.topBarInner}`}>
                    <span className={styles.availDot}><span className={styles.dot} />Open to Global Opportunities</span>
                    <div className={styles.topContacts}>
                        <a href="mailto:kaurhimpreet95@gmail.com" className={styles.topContact}>kaurhimpreet95@gmail.com</a>
                        <span className={styles.topSep}>·</span>
                        <a href="tel:+917015722542" className={styles.topContact}>+91 7015722542</a>
                    </div>
                </div>
            </div>

            {/* ── Main centred content ── */}
            <div className={`container ${styles.main}`}>

                <div className={styles.eyebrow}>
                    <span className={styles.eyebrowTag}>Senior SDET · Quality Engineering · Test Automation</span>
                </div>

                <h1 className={styles.name}>
                    Himpreet <em>Kaur</em>
                </h1>

                <p className={styles.pitch}>
                    Engineering quality into every layer of the SDLC — from automated frameworks
                    to CI/CD-integrated delivery pipelines. 7+ years turning testing bottlenecks
                    into release confidence across SaaS, Blockchain &amp; Enterprise platforms.
                </p>

                <div className={styles.actions}>
                    <a href="#experience" className={styles.btnPrimary}>
                        View My Work
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/himpreetkaur4testing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnGhost}
                    >
                        LinkedIn Profile ↗
                    </a>
                    <a
                        href="https://github.com/himpreetk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnGhost}
                    >
                        GitHub ↗
                    </a>
                </div>

            </div>

            {/* ── Metrics strip ── */}
            <div className={styles.metrics}>
                <div className={`container ${styles.metricsInner}`}>
                    <div className={styles.metric}>
                        <span className={styles.metricNum}>7<sup>+</sup></span>
                        <span className={styles.metricLabel}>Years of experience</span>
                    </div>
                    <div className={styles.metricDivider} />
                    <div className={styles.metric}>
                        <span className={styles.metricNum}>42<sup>%</sup></span>
                        <span className={styles.metricLabel}>Regression cycle reduction</span>
                    </div>
                    <div className={styles.metricDivider} />
                    <div className={styles.metric}>
                        <span className={styles.metricNum}>55<sup>%</sup></span>
                        <span className={styles.metricLabel}>Increase in test coverage</span>
                    </div>
                    <div className={styles.metricDivider} />
                    <div className={styles.metric}>
                        <span className={styles.metricNum}>35<sup>%</sup></span>
                        <span className={styles.metricLabel}>Reduction in post-release defects</span>
                    </div>
                    <div className={styles.metricDivider} />
                    <div className={styles.metric}>
                        <span className={styles.metricNum}>40<sup>%</sup></span>
                        <span className={styles.metricLabel}>Less manual effort per sprint</span>
                    </div>
                </div>
            </div>

            {/* ── Skill scroll strip ── */}
            <div className={styles.strip} aria-hidden="true">
                <div className={styles.marquee}>
                    {[
                        "Selenium", "Playwright", "Cypress", "TestNG", "REST Assured",
                        "Jenkins", "GitHub Actions", "Docker", "Azure DevOps", "JIRA",
                        "BDD / TDD", "Postman", "JMeter", "Java", "Python", "Shift-Left QA",
                        "Selenium", "Playwright", "Cypress", "TestNG", "REST Assured",
                        "Jenkins", "GitHub Actions", "Docker", "Azure DevOps", "JIRA",
                    ].map((s, i) => (
                        <span key={i} className={styles.marqueeItem}>
                            {s} <span className={styles.marqueeSep}>·</span>
                        </span>
                    ))}
                </div>
            </div>

        </section>
    );
}
