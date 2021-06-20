import styles from "./Socials.module.scss";


const Socials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socialButton}>
        <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
          <img src="/images/facebook.png" alt="Facebook icon" title="Facebook icon"/>
        </a>
      </div>
      <div className={styles.socialButton}>
        <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
          <img src="/images/instagram.png" alt="Instagram icon" title="Instagram icon"/>
        </a>
      </div>
      <div className={styles.socialButton}>
        <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
          <img src="/images/twitter.png" alt="Twitter icon" title="Twitter icon"/>
        </a>
      </div>
    </div>
  );
};

export default Socials;
