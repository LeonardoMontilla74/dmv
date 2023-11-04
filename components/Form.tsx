'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { IFormData } from '@/interfaces/IForm';
import styles from './Form.module.css';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IFormData>({ mode: 'onChange' });

  const [loading, setLoading] = useState(false);
  const [sendResult, setSendResult] = useState({ msg: '', error: false });

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    setLoading(true);

    const result = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (result.status === 202) {
      setSendResult({ msg: 'Mensaje enviado... ¡Gracias!', error: false });
      reset();
    } else {
      setSendResult({ msg: '¡Algo salió mal! Por favor vuelve a interntarlo', error: true });
    }

    setTimeout(() => {
      setLoading(false);
      setSendResult({ msg: '', error: false });
    }, 3500);
  };

  return (
    <div className={styles.container}>

      <form onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <h3>¿Desea obtener una cotización?</h3>

        <input
          type="text"
          placeholder='Tú nombre'
          className={styles.input}
          {...register('nombre', {
            required: true,
            minLength: 3,
            pattern: {
              value: /^([a-zA-ZñÑáéíóúÁÉÍÓÚ ])+$/i,
              message: 'El nombre solo debe tener letras',
            },
          })}
        />
        {errors.nombre?.type === 'required'
          && <p className={styles.error}>El nombre es requerido</p>}
        {errors.nombre?.type === 'pattern'
          && <p className={styles.error}>{errors.nombre.message}</p>}
        {errors.nombre?.type === 'minLength'
          && <p className={styles.error}>El nombre debe tener al menos tres letras</p>}

        <input
          type='email'
          placeholder='Tú correo electrónico'
          className={styles.input}
          {...register('email', {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido',
            },
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <input
          type="tel"
          placeholder='Tú número de teléfono'
          className={styles.input}
          {...register('telefono', {
            required: true,
            minLength: 10,
            pattern: {
              value: /^(\+\d{1, 2}\s)?(\(\d{3}\)\s?|\d{3}[\s.-]?)(\d{3}[\s.-]?\d{4})$/i,
              message: 'Número de teléfono inválido',
            },
          })
          }
        />
        {errors.telefono && <p className={styles.error}>{errors.telefono.message}</p>}

        <select
          className={styles.input}
          {...register('type')}
        >
          <option defaultValue={''} value="">Selecciona tú requerimiento</option>
          <option
            className={styles.input}
            value="aseguranza">Aseguranzas</option>
          <option
            className={styles.input}
            value="sticker">Sticker</option>
          <option
            className={styles.input}
            value="placas">Placas temporales</option>
        </select>

        <textarea
          placeholder='Escribénos aquí...'
          className={styles.textarea}
          {...register('msg', { required: true, minLength: 3 })}
        >
        </textarea>
        {errors.msg && <p className={styles.error}>
          Escribe tu mensaje. ¡Es importante para nosotros!
        </p>}

        <center>
          {
            loading
              ? <>
                <div className={styles.spinner}></div>
                {<p
                  className={sendResult.error ? styles.error : styles.ok}>
                  {sendResult.msg}
                </p>}
              </>
              : <input
                type="submit"
                value="Solicitar cotización"
                disabled={!isValid}
                className={styles.button}
              />
          }
        </center>

      </form>
    </div>
  );
}
