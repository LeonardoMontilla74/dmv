'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormData } from '@/interfaces/IForm';
import styles from './Whatsapp.module.css';

export default function WhatsappForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IFormData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  return (
    <div className={styles.container}>

      <form onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >

        <input
          type="text"
          placeholder='Nombre'
          className={styles.input}
          {...register('nombre', { required: true, minLength: 3 })}
        />
        {errors.nombre?.type === 'required'
          && <p className={styles.error}>El nombre es requerido</p>}
        {errors.nombre?.type === 'minLength'
          && <p className={styles.error}>El nombre debe tener al menos tres letras</p>}

        <input
          type="tel"
          placeholder='Teléfono'
          className={styles.input}
          {...register('telefono', { required: true, minLength: 10 })}
        />
        {errors.telefono && <p className={styles.error}>Escribe tu numero de telefono</p>}

        <label>Seleccione su requerimiento</label>
        <select
          className={styles.input}
          {...register('type')}
        >
          <option defaultValue={''} value="">Elija su opción</option>
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
          <input
            type="submit"
            value="Enviar"
            disabled={!isValid}
            className={styles.button}
          />
        </center>

      </form>
    </div>
  );
}
