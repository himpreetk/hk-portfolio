import styles from "./Skills.module.css";

const groups = [
    {
        label: "01",
        title: "Quality & Testing Leadership",
        desc: "End-to-end QA ownership from strategy to governance.",
        skills: [
            "Test Automation Strategy",
            "Shift-Left & Continuous Testing",
            "Regression & Exploratory Testing",
            "Cross-Browser Testing",
            "API & Integration Testing",
            "Testability Reviews",
            "SDLC / STLC Governance",
        ],
    },
    {
        label: "02",
        title: "Automation & Technical Skills",
        desc: "Modern tooling across frameworks, languages, and testing types.",
        skills: [
            "Selenium (Java)", "TestNG", "Appium",
            "REST Assured", "Postman", "JMeter",
            "Playwright", "Cypress", "BDD / TDD",
            "SQL", "Java", "Python", "JavaScript",
        ],
    },
    {
        label: "03",
        title: "DevOps & Delivery",
        desc: "Quality integrated into every stage of CI/CD.",
        skills: [
            "Jenkins", "GitHub Actions", "Azure DevOps",
            "CI/CD Pipeline Integration", "Docker",
        ],
    },
    {
        label: "04",
        title: "Quality Operations & Reporting",
        desc: "Metrics, tooling, and data-driven defect analysis.",
        skills: [
            "Defect Leakage Analysis", "RCA",
            "Quality Metrics & KPIs", "Zephyr",
            "TestRail", "JIRA", "YouTrack",
            "Trello", "Linear", "Plane",
        ],
    },
    {
        label: "05",
        title: "Cloud, Security & Compliance",
        desc: "GDPR-aligned, security-aware cloud testing.",
        skills: [
            "AWS",
            "Security Testing Awareness",
            "GDPR-aligned testing practices",
        ],
    },
    {
        label: "06",
        title: "AI-Assisted Development",
        desc: "Accelerating automation with modern AI tooling.",
        skills: ["Google Antigravity", "Cursor"],
    },
];

export default function Skills() {
    return (
        <section className={styles.section} id="skills">
            {/* Header */}
            <div className={`container ${styles.header}`}>
                <div className={styles.headerLeft}>
                    <span className={styles.sectionNum}>02</span>
                    <h2 className={styles.sectionTitle}>Areas of<br /><em>Expertise</em></h2>
                </div>
                <p className={styles.headerRight}>
                    From strategy to execution —<br />full-stack quality engineering.
                </p>
            </div>

            {/* Grid */}
            <div className={`container ${styles.grid}`}>
                {groups.map((g, i) => (
                    <div
                        key={g.label}
                        className={`${styles.card} ${i < 2 ? styles.cardFeatured : styles.cardSmall}`}
                    >
                        <div className={styles.cardHeader}>
                            <span className={styles.num}>{g.label}</span>
                            <p className={styles.desc}>{g.desc}</p>
                        </div>
                        <h3 className={styles.title}>{g.title}</h3>
                        <div className={styles.tags}>
                            {g.skills.map((s) => (
                                <span key={s} className={styles.tag}>{s}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
