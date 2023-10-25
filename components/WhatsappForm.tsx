'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormData } from '@/interfaces/IForm';
import styles from './Whatsapp.module.css';

export default function WhatsappForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>();

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

        <label>Nombre</label>
        <input
          type="text"
          {...register('nombre', { required: true, minLength: 3 })}
        />
        {errors.nombre?.type === 'required' && <p className={styles.error}>El nombre es requerido</p>}
        {errors.nombre?.type === 'minLength' && <p className={styles.error}>El nombre debe tener al menos tres letras</p>}

        <label>Teléfono</label>
        <input
          type="tel"
          {...register('telefono', { required: true, minLength: 10 })}
        />
        {errors.telefono && <p className={styles.error}>Escribe tu numero de telefono</p>}

        <label>Seleccione su requerimiento</label>
        <select
          {...register('type')}
        >
          <option defaultValue={''} value="">Elija su opción</option>
          <option value="aseguranza">Aseguranzas</option>
          <option value="sticker">Sticker</option>
          <option value="placas">Placas temporales</option>
        </select>

        <label>Escríbenos aquí</label>
        <textarea
          cols={20}
          rows={5}
          {...register('msg', { required: true, minLength: 3 })}
        >
        </textarea>
        {errors.msg && <p className={styles.error}>
          Escribe tu mensaje. ¡Es importante para nosotros!
        </p>}

        <input
          type="submit"
          value="Enviar"
          disabled={false}
        />

      </form>
    </div>
  );
}
