import { articles } from "../../constants/data";
import styles from "./Articles.module.css";

const Articles = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Latest Articles</h2>

      <div className={styles.articles}>
        {articles.map((article) => (
          <div className={styles.article} key={article.id}>
            <img src={article.image} className={styles.images} />

            <div className={styles.wrapper}>
              <p className={styles.author}>{article.author}</p>

              <h3 className={styles.title}>{article.title}</h3>

              <p className={styles.paragraph}>{article.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
