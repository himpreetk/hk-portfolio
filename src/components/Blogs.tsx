import styles from "./Blogs.module.css";
import Image from "next/image";

const blogs = [
    {
        title: "AI in Software Testing",
        platform: "Portfolio Blog",
        date: "Mar 2026",
        description: "Explore how Artificial Intelligence is transforming quality engineering through intelligent test generation, self-healing automation, and predictive insights.",
        link: "/blog/ai-in-software-testing",
        image: "/ai_testing_thumb.jpg"
    }
];

export default function Blogs() {
    return (
        <section className={`section ${styles.section}`} id="blogs">
            <div className="container">
                <div className={`section-header ${styles.header}`}>
                    <div>
                        <span className="section-number">05</span>
                        <h2 className="display-lg">
                            Blogs &amp; Articles
                        </h2>
                    </div>
                    <p className={styles.headerSub}>
                        Insights and thoughts on Quality Engineering
                    </p>
                </div>

                <div className={styles.grid}>
                    {blogs.map((blog, idx) => (
                        <a
                            key={idx}
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.cardTop}>
                                    <span className={styles.platform}>{blog.platform}</span>
                                    <span className={styles.date}>{blog.date}</span>
                                    <svg className={styles.arrow} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                <h3 className={styles.title}>{blog.title}</h3>
                                <p className={styles.desc}>{blog.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
