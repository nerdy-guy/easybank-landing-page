import styles from "./Hero.module.css";
import mockup from "../../assets/image-mockups.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.header}>
          Next generation <br /> digital banking
        </h1>

        <p className={styles.paragraph}>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <a href="#" className={styles.invite}>
          Request Invite
        </a>
      </div>

      <img src={mockup} className={styles.mockup} />
    </section>
  );
};

export default Hero;
