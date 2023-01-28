import { features } from "../../constants/data";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Why choose Easybank?</h2>
        <p className={styles.paragraph}>
          We leverage Open Banking to turn your bank account into your financial
          hub. <br /> Control your finances like never before.
        </p>
      </div>

      <div className={styles.features}>
        {features.map((feature) => (
          <div key={feature.id}>
            <img src={feature.icon} className={styles.icon} />
            <h3 className={styles.headers}>{feature.title}</h3>
            <p className={styles.paragraph}>{feature.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
