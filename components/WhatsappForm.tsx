'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Whatsapp.module.css';

export default function WhatsappForm() {
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPhone('');
    setMsg('');
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={styles.form}
    >
      <label>Tú numero de teléfono</label>
      <input
        type="number"
        name="phone"
        minLength={10}
        required
        placeholder="Ejemplo: 154 518 1495"
        value={phone}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
      />

      <br />

      <label>Tú mensaje</label>
      <textarea
        name="msg"
        cols={30}
        rows={10}
        required
        minLength={3}
        placeholder='Escribe tu mensaje aqui...'
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      >
      </textarea>

      <input
        type="submit"
        value="Enviar"
        disabled={!phone || !msg}
      />
    </form>
  );
}
