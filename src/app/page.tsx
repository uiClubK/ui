import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Welcome to the CluÜ üb&nbsp;</p>
      </div>

      <div className={styles.center}>Ü ü</div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Club</h2>
          <p>about</p>
          <p>privacy policy</p>
          <p>cookie policy</p>
          <p>we are hiring</p>
        </div>
        <div className={styles.card}>
          <h2>Product</h2>
          <p>referral program</p>
          <p>integrations</p>
          <p>community</p>
          <p>help</p>
        </div>
        <div className={styles.card}>
          <h2>Learn</h2>
          <p>blog</p>
          <p>customers</p>
        </div>

        <div className={styles.card}>
          <h2>Solutions</h2>
          <p>freelancers and agencies</p>
          <p>enterprise</p>
          <p>startups</p>
          <p>help</p>
        </div>
      </div>
    </main>
  );
}
