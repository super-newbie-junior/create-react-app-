import styles from './style.module.css';

const Layout = ({ title = "", description = "", backgroundUrl = "", backgroundColor = "" }) => {
  /** Переименовал параметры, а то как-то не по-христиански */
  return (
    <section className={styles.root} style={{ backgroundImage: backgroundUrl, backgroundColor: backgroundColor }}>
        <div className={styles.wrapper}>
            <article>
                <div className={styles.title}>
                    <h3>{title}</h3>
                    <span className={styles.separator}></span>
                </div>
                <div className={[styles.desc, styles.full]}>
                    <p>{description}</p>
                </div>
            </article>
        </div>
    </section>
  );
}

export default Layout;