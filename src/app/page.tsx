'use client'

import React from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = React.useState();
  const [address, setAddress] = React.useState();

  const submitOrder = async (event: any) => {
    event.preventDefault();

    if (!name || !address) {
      throw new Error('Name or address is not set');
    }

    const response = await fetch(
      `/api/order/upload`,
      {
        method: 'POST',
        body: JSON.stringify({
          name,
          address
        }),
      },
    );

    console.log(response)
    setName(undefined);
    setAddress(undefined);
  }

  const handleNameInput = async (event: any) => {
    setName(event.target.value);
  }

  const handleAddressInput = async (event: any) => {
    setAddress(event.target.value);
  }

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
        <h3>Welcome to Lito&apos;s Salsa / ¡Bienvenidx a Lito&apos;s Salsa!</h3>
        
        <form className={styles.form} onSubmit={submitOrder}>
          <label htmlFor="name">
            Name for the order / Nombre para el orden
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleNameInput}
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
            onChange={handleAddressInput}
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