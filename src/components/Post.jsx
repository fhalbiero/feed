import styles from "./Post.module.css";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/39344416?v=4" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Fabio Albiero</strong>
                        <span>FullStack Engineer</span>
                    </div>
                </div>
                <time dateTime="2024-01-24">Published 1h ago</time>
            </header>
            <div classNamegit init></div>
        </article>
    )
}