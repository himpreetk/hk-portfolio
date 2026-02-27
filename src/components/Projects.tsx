import styles from "./Projects.module.css";

const projects = [
    {
        index: "01",
        title: "Car Parking Smart Booking Solution",
        type: "University Project",
        description:
            "Designed an intelligent parking allocation and booking system with mobile integration and automated payment workflows, optimising space utilisation through smart scheduling algorithms.",
        tech: ["Mobile Integration", "Automated Payments", "Smart Scheduling"],
        link: "https://github.com/himpreetk/Car_Parking_Solution",
    },
    {
        index: "02",
        title: "Majestic Toys E-Commerce Platform",
        type: "University Project",
        description:
            "Developed an end-to-end e-commerce platform handling user auth, product cataloguing, cart checkout, and order management using a full modern web stack.",
        tech: ["ReactJS", "CodeIgniter3", "NodeJS", "MySQL"],
        link: "https://github.com/himpreetk/My-Majestic-Toys",
    },
];

export default function Projects() {
    return (
        <section className={`section ${styles.section}`} id="projects">
            <div className="container">
                <div className={`section-header ${styles.header}`}>
                    <div>
                        <span className="section-number">03</span>
                        <h2 className="display-lg" style={{ color: "var(--cream)" }}>
                            Projects
                        </h2>
                    </div>
                    <p className={styles.headerSub}>
                        Selected builds &amp; experiments
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((p) => (
                        <a
                            key={p.index}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                        >
                            <div className={styles.cardTop}>
                                <span className={styles.index}>{p.index}</span>
                                <span className={styles.type}>{p.type}</span>
                                <svg className={styles.arrow} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <h3 className={styles.title}>{p.title}</h3>
                            <p className={styles.desc}>{p.description}</p>

                            <div className={styles.techRow}>
                                {p.tech.map((t) => (
                                    <span key={t} className={styles.techTag}>{t}</span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
