import styles from "./Education.module.css";

const degrees = [
    {
        degree: "MSc Computer Science with Professional Practice",
        institution: "University of Wolverhampton",
        location: "United Kingdom",
        note: "Highest Merit Achiever · Led collaborative software engineering project initiatives",
    },
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Kurukshetra University",
        location: "India",
        note: "",
    },
];

const prior = [
    { role: "Office Assistant", company: "URB Recruitment", location: "UK", period: "Sept 2023 – June 2024" },
    { role: "Junior QA Tester", company: "UnoiaTech", location: "India", period: "Aug 2019 – Nov 2019" },
    { role: "Software Tester Trainee", company: "Piford Technologies", location: "India", period: "Jul 2018 – Dec 2018" },
];

const interests = [
    "Automation Engineering", "Quality Engineering Innovation",
    "AI-Assisted Testing", "Secure Engineering Practices",
    "Continuous Improvement & Delivery Excellence", "Mentoring & Open Source Contributions",
];

export default function Education() {
    return (
        <section className="section" id="education">
            <div className="container">
                <div className={`section-header ${styles.topHeader}`}>
                    <div>
                        <span className="section-number">04</span>
                        <h2 className="display-lg">Education &amp; Background</h2>
                    </div>
                </div>

                <div className={styles.twoCol}>
                    {/* ── Education ── */}
                    <div className={styles.col}>
                        <h3 className={styles.colTitle}>Academic</h3>
                        <div className={styles.degreeList}>
                            {degrees.map((d, i) => (
                                <div key={i} className={styles.degreeItem}>
                                    <span className={styles.degreeInstitution}>
                                        {d.institution} <span className={styles.degreeLocation}>· {d.location}</span>
                                    </span>
                                    <h4 className={styles.degreeName}>{d.degree}</h4>
                                    {d.note && <p className={styles.degreeNote}>{d.note}</p>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Prior engagements ── */}
                    <div className={styles.col}>
                        <h3 className={styles.colTitle}>Prior Engagements</h3>
                        <div className={styles.priorList}>
                            {prior.map((p, i) => (
                                <div key={i} className={styles.priorItem}>
                                    <div className={styles.priorMeta}>
                                        <span className={styles.priorPeriod}>{p.period}</span>
                                    </div>
                                    <div className={styles.priorContent}>
                                        <strong className={styles.priorRole}>{p.role}</strong>
                                        <span className={styles.priorCompany}>{p.company} · {p.location}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Interests ── */}
                <div className={styles.interests}>
                    <h3 className={styles.colTitle}>Professional Interests</h3>
                    <div className={styles.interestTags}>
                        {interests.map((item) => (
                            <span key={item} className="tag">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
