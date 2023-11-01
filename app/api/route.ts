import { NextResponse } from 'next/server';
import { IFormData } from '@/interfaces/IForm';

export function GET() {
  return NextResponse.json({ msg: 'Respondiendo desde el back' });
}

export async function POST(req: Request) {
  const {
    nombre, mail, type, msg,
  }: IFormData = await req.json();

  return NextResponse.json({
    nombre, mail, type, msg,
  });
}
