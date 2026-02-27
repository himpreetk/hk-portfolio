import styles from "./Experience.module.css";

const experiences = [
    {
        role: "SDET II",
        company: "WebBuddy LLC",
        location: "India",
        period: "Sept 2025 – Present",
        tag: "Current",
        achievements: [
            "Led end-to-end quality strategy for an enterprise-grade blockchain platform, introducing automation-first practices that reduced regression cycle time by 42%.",
            "Designed and implemented a scalable Selenium-TestNG automation framework leveraging AI-assisted test generation, integrated with CI/CD pipelines, increasing test coverage by 55% and reducing manual testing effort by 40% per sprint.",
            "Championed Shift-Left testing in collaboration with product and engineering teams, cutting post-release defects by 35% and accelerating feedback loops during development.",
            "Standardised quality processes and engineering best practices across parallel projects, improving defect traceability and reducing production defect leakage by 28%.",
        ],
    },
    {
        role: "Automation Engineer",
        company: "Dev3 Technologies",
        location: "India",
        period: "Mar 2025 – Sept 2025",
        tag: "",
        achievements: [
            "Led the QA team and mentored two junior engineers, strengthening test ownership and improving automation delivery consistency across projects.",
            "Embedded Shift-Left testing by working closely with product, development, and DevOps teams, improving early-phase defect detection and reducing post-release issues by 40% across e-commerce platforms.",
            "Integrated Selenium automation suites with Jenkins and Docker, reducing build verification time by 30% and increasing deployment confidence in CI/CD pipelines.",
            "Performed structured API testing using Postman and REST Assured, improving backend reliability and integration stability by 25% across critical services.",
            "Enhanced test traceability and reporting through JIRA workflows, improving stakeholder visibility and accelerating defect resolution cycles.",
        ],
    },
    {
        role: "Quality Analyst",
        company: "Intellicore Ltd",
        location: "United Kingdom",
        period: "Mar 2022 – Aug 2023",
        tag: "UK",
        achievements: [
            "Delivered manual functional, regression, and UI testing across complex enterprise applications, improving release stability.",
            "Collaborated within Agile Scrum teams to expand test coverage and close requirement gaps early in the lifecycle.",
            "Designed comprehensive test scenarios and implemented structured defect reporting, contributing to a 30% reduction in post-release issues.",
            "Initiated and scaled a Selenium-based automation framework, reducing regression testing time by 40%.",
            "Conducted API and integration testing using Postman and REST Assured, improving data-flow reliability.",
        ],
    },
    {
        role: "QA Analyst",
        company: "CodeBrew Labs",
        location: "India",
        period: "Dec 2019 – Aug 2020",
        tag: "",
        achievements: [
            "Transitioned high-priority test scenarios from manual to automated using Selenium, reducing software defects by 35%.",
            "Validated backend APIs through Swagger UI and integration testing, ensuring secure data flow.",
            "Improved test documentation and streamlined defect-reporting workflows.",
            "Supported optimisation of regression and functional testing processes, increasing test coverage.",
        ],
    },
];

export default function Experience() {
    return (
        <section className={`section section--dark ${styles.section}`} id="experience">
            <div className="container">
                <div className={`section-header section-header--dark ${styles.header}`}>
                    <div>
                        <span className="section-number">01</span>
                        <h2 className="display-lg" style={{ color: "var(--cream)" }}>
                            Work Experience
                        </h2>
                    </div>
                    <p className={styles.headerSub}>
                        7+ years across SaaS, Blockchain &amp; Enterprise
                    </p>
                </div>

                <div className={styles.list}>
                    {experiences.map((exp, i) => (
                        <div key={i} className={styles.item}>
                            <div className={styles.meta}>
                                <span className={styles.period}>{exp.period}</span>
                                {exp.tag && (
                                    <span className={styles.tagPill}>{exp.tag}</span>
                                )}
                            </div>

                            <div className={styles.content}>
                                <div className={styles.contentHeader}>
                                    <div>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <p className={styles.company}>
                                            {exp.company}
                                            <span className={styles.locationSep}> · </span>
                                            {exp.location}
                                        </p>
                                    </div>
                                </div>

                                <ul className={styles.achievements}>
                                    {exp.achievements.map((a, j) => (
                                        <li key={j}>{a}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
