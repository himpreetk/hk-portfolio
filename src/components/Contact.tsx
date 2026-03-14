import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <footer className={styles.footer} id="contact">
            <div className="container">
                <div className={styles.inner}>

                    <div className={styles.cta}>
                        <span className="section-number">06</span>
                        <h2 className={`display-xl ${styles.ctaHeading}`}>
                            Let&apos;s work<br /><em>together.</em>
                        </h2>
                        <p className={styles.ctaSub}>
                            Actively looking for Quality Engineering roles globally.
                            Available to start immediately.
                        </p>
                        <div className={styles.ctaActions}>
                            <a href="mailto:kaurhimpreet95@gmail.com" className="btn-ghost">
                                Say Hello
                            </a>
                            <a
                                href="https://www.linkedin.com/in/himpreetkaur4testing/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-ghost"
                            >
                                LinkedIn ↗
                            </a>
                            <a
                                href="https://github.com/himpreetk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-ghost"
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.bottom}>
                        <span className={styles.credit}>
                            Himpreet Kaur · Senior QA &amp; Automation Engineer
                        </span>
                        <span className={styles.email}>kaurhimpreet95@gmail.com · +91 7015722542</span>
                        <span className={styles.copy}>© {new Date().getFullYear()}</span>
                    </div>

                </div>
            </div>
        </footer>
    );
}
