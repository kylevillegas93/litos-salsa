import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Lito's Salsa Logo"
          width={360}
          height={78}
          priority
        />
        <h3>Welcome to Lito's Salsa / ¡Bienvenidx a Lito's Salsa!</h3>
        
        <form className={styles.form}>
          <label htmlFor="name">
            Name for the order / Nombre para el orden
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
          
          <label htmlFor="address">
            Address / Dirección (Manhattan, Queens, Brooklyn)
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            required
          />

          <button type="submit" className={styles.button}>
            Order
          </button>
        </form>
      </main>
    </div>
  );
}