import { NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';
import { IFormData } from '@/interfaces/IForm';

const { USER_MAIL } = process.env;
const { USER_MAIL_PASS } = process.env;
const { MAIL_RECEPTOR } = process.env;

export function GET() {
  return NextResponse.json({ msg: 'Hola, en esta ruta debes enviar un formulario con el metodo POST con el formato de IFormData' });
}

export async function POST(req: Request) {
  const {
    nombre, email, telefono, type, msg,
  }: IFormData = await req.json();

  const transporter = createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: USER_MAIL,
      pass: USER_MAIL_PASS,
    },
  });

  const mailForMe = {
    from: '"DMV Site" <leme.30589@gmail.com>',
    to: MAIL_RECEPTOR,
    subject: `Interesado en ${type}`,
    html: `
    <strong>Nombre del usuario: </strong> <h2>${nombre}</h2>
    <hr />
    <strong>Email al que puedes responder: </strong> ${email}
    <br/> <hr />
    <strong>Número de teléfono: </strong> ${telefono}
    <br/> <hr />
    <strong>Este es el mensaje que te escribió: </strong> <p>${msg}</p>
    <hr />`,
  };

  try {
    const result = await transporter.sendMail(mailForMe);
    return NextResponse.json({ msg: result.messageId }, { status: 202 });
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.log(error);
    return NextResponse.json({ msg: error.code }, { status: 400 });
  }
}
