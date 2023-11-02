export interface IFormData {
  nombre: string,
  email: string,
  telefono?: string | number
  type: 'n/a' | 'aseguranza' | 'sticker' | 'placas',
  msg: string,
}
