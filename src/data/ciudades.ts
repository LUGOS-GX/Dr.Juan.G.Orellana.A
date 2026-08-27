export interface Ciudad {
  slug: string;
  nombre: string;
  gentilicio: string;
  titulo: string;
  descripcion: string;
  h1: string;
  intro: string;
  sectores: string[];
  parrafos: string[];
}

export const ciudades: Ciudad[] = [
  {
    slug: 'lecheria',
    nombre: 'Lechería',
    gentilicio: 'Lechería',
    titulo: 'Médico a domicilio en Lechería, Anzoátegui | Dr. Juan G. Orellana A.',
    descripcion:
      'Médico general y epidemiólogo a domicilio en Lechería, estado Anzoátegui. Consultas en casa, récipes y constancias el mismo día. Lunes a viernes 24 horas. Llame al +58 414 823 7097.',
    h1: 'Médico a domicilio en Lechería',
    intro:
      'Consulta médica en su casa o apartamento en Lechería, sin traslados ni salas de espera. Atiendo cuadros agudos, control de enfermedades crónicas y emergencias no quirúrgicas.',
    sectores: ['El Morro', 'Casco de Lechería', 'Complejo Turístico El Morro', 'Av. Principal de Lechería'],
    parrafos: [
      'Lechería es mi base de operaciones. Desde aquí me desplazo al resto de la zona norte de Anzoátegui, por lo que el tiempo de respuesta dentro del municipio Diego Bautista Urbaneja suele ser el más corto de toda la cobertura.',
      'En una consulta a domicilio en Lechería reviso signos vitales, hago el examen físico completo, entrego el diagnóstico por escrito y, cuando hace falta, emito órdenes de laboratorio, rayos X o ecosonograma para laboratorios de la misma zona.',
      'Si necesita un reposo médico, una constancia o un récipe firmado y sellado, se lo entrego el mismo día de la consulta.'
    ]
  },
  {
    slug: 'barcelona',
    nombre: 'Barcelona',
    gentilicio: 'Barcelona',
    titulo: 'Médico a domicilio en Barcelona, Anzoátegui | Dr. Juan G. Orellana A.',
    descripcion:
      'Médico general y epidemiólogo a domicilio en Barcelona, estado Anzoátegui. Consulta en su casa, récipes, constancias y reposos. Lunes a viernes 24 horas. Llame al +58 414 823 7097.',
    h1: 'Médico a domicilio en Barcelona',
    intro:
      'Atención médica domiciliaria en Barcelona, capital del estado Anzoátegui. Consulta completa en su hogar, con indicaciones claras y seguimiento por WhatsApp.',
    sectores: ['Centro de Barcelona', 'Lomas del Neverí', 'Los Chaimas', 'El Viñedo', 'Nueva Barcelona'],
    parrafos: [
      'Barcelona concentra buena parte de mis consultas por su tamaño y por la dificultad de trasladar a un paciente mayor o con fiebre alta hasta un centro asistencial. La visita en casa evita ese traslado.',
      'Como médico epidemiólogo con más de 30 años de ejercicio, doy especial atención a los cuadros febriles, respiratorios y gastrointestinales que se presentan por brotes estacionales en la ciudad.',
      'La consulta incluye evaluación de enfermedades crónicas: hipertensión arterial, diabetes, dislipidemias y ajuste de tratamiento cuando corresponde.'
    ]
  },
  {
    slug: 'puerto-la-cruz',
    nombre: 'Puerto La Cruz',
    gentilicio: 'Puerto La Cruz',
    titulo: 'Médico a domicilio en Puerto La Cruz, Anzoátegui | Dr. Juan G. Orellana A.',
    descripcion:
      'Médico general y epidemiólogo a domicilio en Puerto La Cruz, estado Anzoátegui. Consultas en casa y videoconsultas. Lunes a viernes 24 horas. Llame al +58 414 823 7097.',
    h1: 'Médico a domicilio en Puerto La Cruz',
    intro:
      'Consulta médica domiciliaria en Puerto La Cruz. Ideal para adultos mayores, pacientes con movilidad reducida y familias que necesitan una evaluación rápida sin salir de casa.',
    sectores: ['Paseo Colón', 'Av. 5 de Julio', 'Los Pinos', 'Pozuelos', 'Guaraguao'],
    parrafos: [
      'En Puerto La Cruz atiendo tanto residencias como apartamentos y hoteles. Si usted está de paso por la ciudad y necesita una valoración médica, también puedo acudir a su alojamiento.',
      'Además de la consulta presencial ofrezco videoconsulta para casos de control, revisión de resultados de laboratorio y ajustes de tratamiento que no requieren examen físico.',
      'Todos los documentos que emito llevan mi número de Colegio de Médicos (CM 5180) y MPPS 60409, válidos ante empresas, seguros y centros educativos.'
    ]
  },
  {
    slug: 'guanta',
    nombre: 'Guanta',
    gentilicio: 'Guanta',
    titulo: 'Médico a domicilio en Guanta, Anzoátegui | Dr. Juan G. Orellana A.',
    descripcion:
      'Médico general y epidemiólogo a domicilio en Guanta, estado Anzoátegui. Consulta médica en su casa, récipes y constancias. Lunes a viernes 24 horas. Llame al +58 414 823 7097.',
    h1: 'Médico a domicilio en Guanta',
    intro:
      'Atención médica en casa en Guanta y sus alrededores, dentro de la zona norte del estado Anzoátegui.',
    sectores: ['Casco de Guanta', 'Pertigalete', 'Chorrerón'],
    parrafos: [
      'Guanta forma parte de mi radio habitual de atención. Coordino la visita por teléfono o WhatsApp y confirmo un rango de hora aproximado antes de salir.',
      'La consulta cubre lo mismo que en el resto de la zona: examen físico completo, diagnóstico, tratamiento e indicaciones por escrito, con órdenes de laboratorio o imagenología cuando el caso lo requiere.',
      'Para emergencias fuera del horario habitual, escríbame por WhatsApp y le indico si el caso puede resolverse en domicilio o si conviene un traslado.'
    ]
  }
];
