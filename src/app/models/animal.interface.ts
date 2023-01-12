export interface Animal {
  id: number
  ficha: string
  raza: string
  sexo: string
  fechaNac: Date
  edad: string
  tamagno: string
  peso: string
  observaciones: string
  title: string
  especie: string
  color: string
  chenil: string
  peligroso: boolean
  microchip: string
  cartilla: string
  rabia: boolean
  fechaRabia: string
  esterilizado: boolean
  perdido: boolean
  evaluacion: string
  caracter: string
  observacionesVet: string
  fechaIngreso: string
  formaEntrada: string
  entrada: string
  urgencias: boolean
  horaUrgencias: string
  numPolicia: string
  nombreSolicitante: string
  apellidosSolicitante: string
  dniSolicitante: string
  telefonoSolicitante: string
  domicilioSolicitante: string
  mailSolicitante: string
  disponible: string
  fechaAdopcion: Date
  nombreInteresado: string
  apellidosInteresado: string
  ndniInteresado: string
  telefonoInteresado: string
  mailInteresado: string
  direccionInteresado: string
  tasa: string
  importe: number
  pago: string
  bloquear: boolean
  desbloquear: boolean
  fechaBloqueo: Date
  foto: string
}

export enum Sexo {
  macho = 'macho',
  Hembra = 'Hembra',
  Indefinido = 'Indefinido',
}
