/* Banco de práctica creado a partir de los temas del PDF; preguntas originales, no examen oficial. */
const EXAM_QUESTIONS = [
  {
    "id": "P001",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Qué expresa la misión de una empresa?",
    "correct": "Su propósito actual y razón de existir",
    "wrong": [
      "Lo que desea llegar a ser en el futuro",
      "Sus ganancias acumuladas",
      "El organigrama completo"
    ],
    "explanation": "La misión describe para qué existe hoy la organización."
  },
  {
    "id": "P002",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "Una empresa que compra productos terminados para revenderlos es…",
    "correct": "Comercial",
    "wrong": [
      "Industrial",
      "Agropecuaria",
      "Agroindustrial"
    ],
    "explanation": "La actividad comercial se centra en la compra y venta de bienes."
  },
  {
    "id": "P003",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Cuál de los siguientes es un recurso humano?",
    "correct": "La persona encargada de ventas",
    "wrong": [
      "El edificio de oficinas",
      "El dinero en caja",
      "Las computadoras"
    ],
    "explanation": "El recurso humano está compuesto por las personas que trabajan en la organización."
  },
  {
    "id": "P004",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "Definir metas y acciones antes de trabajar corresponde a…",
    "correct": "Planear",
    "wrong": [
      "Controlar",
      "Auditar",
      "Cobrar"
    ],
    "explanation": "La planeación fija objetivos y las acciones para alcanzarlos."
  },
  {
    "id": "P005",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Qué departamento registra operaciones y prepara información contable?",
    "correct": "Contabilidad",
    "wrong": [
      "Recursos humanos",
      "Ventas",
      "Aduanas"
    ],
    "explanation": "Contabilidad registra y organiza la información económica."
  },
  {
    "id": "P006",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "Comparar resultados con metas y corregir desviaciones es…",
    "correct": "Controlar",
    "wrong": [
      "Organizar",
      "Reclutar",
      "Comprar"
    ],
    "explanation": "El control verifica el cumplimiento de lo planificado."
  },
  {
    "id": "P007",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Cuál es un ejemplo de reclutamiento interno?",
    "correct": "Ofrecer una vacante a empleados actuales",
    "wrong": [
      "Publicar la vacante solo en redes externas",
      "Contratar una agencia para buscar candidatos",
      "Abrir una convocatoria a personas ajenas"
    ],
    "explanation": "El reclutamiento interno busca aspirantes dentro de la empresa."
  },
  {
    "id": "P008",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Qué suele ocurrir después de seleccionar a una persona contratada?",
    "correct": "La inducción al puesto y reglas de la empresa",
    "wrong": [
      "La eliminación de su expediente",
      "El cierre permanente del puesto",
      "La suspensión automática del contrato"
    ],
    "explanation": "La inducción facilita la integración al nuevo trabajo."
  },
  {
    "id": "P009",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Para qué sirve verificar los datos del postulante?",
    "correct": "Comprobar la información aportada",
    "wrong": [
      "Sustituir toda entrevista",
      "Evitar revisar sus competencias",
      "Fijar el precio de los productos"
    ],
    "explanation": "La verificación ayuda a validar antecedentes y datos relevantes."
  },
  {
    "id": "P010",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Qué práctica favorece la motivación del personal?",
    "correct": "Reconocer los logros con criterios claros",
    "wrong": [
      "Ignorar las buenas ideas",
      "Eliminar toda retroalimentación",
      "Asignar tareas sin instrucciones"
    ],
    "explanation": "El reconocimiento y la realimentación positiva apoyan la motivación."
  },
  {
    "id": "P011",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "Ante un conflicto entre compañeros, lo más apropiado es…",
    "correct": "Escuchar a las partes y buscar una solución respetuosa",
    "wrong": [
      "Divulgar rumores",
      "Castigar sin escuchar",
      "Evitar cualquier conversación"
    ],
    "explanation": "La resolución de conflictos requiere diálogo y análisis de las causas."
  },
  {
    "id": "P012",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "Una oficina bien organizada debe priorizar…",
    "correct": "Seguridad, comodidad y facilidad de trabajo",
    "wrong": [
      "Pasillos bloqueados",
      "Herramientas fuera de alcance",
      "Iluminación insuficiente"
    ],
    "explanation": "El espacio físico influye en productividad y bienestar."
  },
  {
    "id": "P013",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Qué caracteriza una jornada extraordinaria?",
    "correct": "Se trabaja fuera de la jornada ordinaria establecida",
    "wrong": [
      "Siempre es una jornada nocturna",
      "Se realiza exclusivamente en vacaciones",
      "No requiere registro de horas"
    ],
    "explanation": "Se refiere al tiempo adicional sobre la jornada ordinaria."
  },
  {
    "id": "P014",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Cuál es un medio para registrar entradas y salidas?",
    "correct": "Tarjeta reloj",
    "wrong": [
      "Estado de resultados",
      "Orden de compra",
      "Factura comercial"
    ],
    "explanation": "La tarjeta reloj permite registrar asistencia y tiempo laborado."
  },
  {
    "id": "P015",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Qué distingue una jornada rotativa?",
    "correct": "Los turnos pueden variar según una programación",
    "wrong": [
      "Todos los días son feriados",
      "Nunca se controla el tiempo",
      "Siempre se trabaja desde casa"
    ],
    "explanation": "En turnos rotativos cambian los horarios asignados."
  },
  {
    "id": "P016",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "El salario neto se obtiene al…",
    "correct": "Restar al salario devengado las deducciones aplicables",
    "wrong": [
      "Sumar al salario devengado todas las deducciones",
      "Multiplicar siempre el salario por dos",
      "Restar únicamente las ventas de la empresa"
    ],
    "explanation": "El neto es lo que se recibe luego de las deducciones."
  },
  {
    "id": "P017",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "El pago por destajo depende principalmente de…",
    "correct": "Las piezas o unidades producidas",
    "wrong": [
      "Los años de existencia de la empresa",
      "El precio del alquiler",
      "La cantidad de clientes registrados"
    ],
    "explanation": "El destajo remunera según producción o unidades realizadas."
  },
  {
    "id": "P018",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Cuál es un beneficio laboral asociado al pago anual de diciembre en Costa Rica?",
    "correct": "Aguinaldo",
    "wrong": [
      "Inventario",
      "Depreciación",
      "Sobreprecio"
    ],
    "explanation": "El aguinaldo es un beneficio laboral distinto del salario ordinario."
  },
  {
    "id": "P019",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Cuál es un ejemplo de atención respetuosa?",
    "correct": "Escuchar y responder con lenguaje cortés",
    "wrong": [
      "Interrumpir al cliente constantemente",
      "Ridiculizar sus preguntas",
      "Hablar de sus datos privados frente a todos"
    ],
    "explanation": "La cortesía y la escucha favorecen el servicio al cliente."
  },
  {
    "id": "P020",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Quién es un cliente interno?",
    "correct": "Una persona de otro departamento que recibe nuestro trabajo",
    "wrong": [
      "Alguien que compra un artículo para su hogar",
      "Un turista que contrata un servicio",
      "Una persona ajena que visita el comercio"
    ],
    "explanation": "Los clientes internos participan en procesos de la misma organización."
  },
  {
    "id": "P021",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Qué conviene hacer cuando se recibe una queja?",
    "correct": "Escuchar, verificar y orientar una solución",
    "wrong": [
      "Ignorar al cliente",
      "Prometer algo que no se puede cumplir",
      "Culpar al cliente antes de investigar"
    ],
    "explanation": "La atención adecuada comprende escucha y búsqueda de soluciones."
  },
  {
    "id": "P022",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Qué caracteriza mejor a un equipo de trabajo?",
    "correct": "Objetivo compartido y coordinación de esfuerzos",
    "wrong": [
      "Personas sin una meta común",
      "Ausencia total de comunicación",
      "Actividades siempre aisladas"
    ],
    "explanation": "Un equipo trabaja de manera coordinada hacia objetivos comunes."
  },
  {
    "id": "P023",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "En una reunión formal, una buena práctica de protocolo es…",
    "correct": "Saludar y respetar los turnos de palabra",
    "wrong": [
      "Interrumpir deliberadamente",
      "Ignorar a los participantes",
      "Usar palabras ofensivas"
    ],
    "explanation": "El protocolo orienta comportamientos corteses y adecuados."
  },
  {
    "id": "P024",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Cuál es una ventaja de trabajar en equipo?",
    "correct": "Combinar habilidades para resolver problemas",
    "wrong": [
      "Eliminar todas las responsabilidades",
      "Evitar compartir información",
      "Impedir la colaboración"
    ],
    "explanation": "La colaboración permite aprovechar conocimientos complementarios."
  },
  {
    "id": "P025",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "Un piso mojado sin señalización representa…",
    "correct": "Un riesgo de accidente laboral",
    "wrong": [
      "Un ingreso contable",
      "Un activo intangible",
      "Una estrategia de mercadeo"
    ],
    "explanation": "Los peligros en el lugar de trabajo pueden causar accidentes."
  },
  {
    "id": "P026",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Qué reduce el riesgo al manipular sustancias químicas?",
    "correct": "Seguir las instrucciones y usar protección adecuada",
    "wrong": [
      "Mezclar sustancias sin información",
      "Retirar etiquetas preventivas",
      "Guardar químicos junto a alimentos"
    ],
    "explanation": "La prevención exige manejo seguro y medidas de protección."
  },
  {
    "id": "P027",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Para qué sirve la prevención en salud ocupacional?",
    "correct": "Proteger la seguridad y salud de las personas trabajadoras",
    "wrong": [
      "Aumentar deliberadamente la carga de riesgo",
      "Sustituir el control de asistencia",
      "Calcular el precio de un producto"
    ],
    "explanation": "La salud ocupacional busca reducir accidentes y enfermedades."
  },
  {
    "id": "P028",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "Actuar éticamente al detectar un error en una factura implica…",
    "correct": "Informarlo y gestionar su corrección",
    "wrong": [
      "Ocultarlo para evitar molestias",
      "Alterar documentos sin dejar registro",
      "Culpar a otra persona sin pruebas"
    ],
    "explanation": "La ética exige integridad y responsabilidad."
  },
  {
    "id": "P029",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "La satisfacción del cliente se relaciona con…",
    "correct": "El cumplimiento de sus necesidades y expectativas",
    "wrong": [
      "El color del uniforme únicamente",
      "La cantidad de oficinas",
      "La antigüedad del gerente exclusivamente"
    ],
    "explanation": "La calidad se refleja en el grado de cumplimiento de expectativas."
  },
  {
    "id": "P030",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Cuál es una consecuencia posible de un servicio deficiente?",
    "correct": "Pérdida de confianza y clientes",
    "wrong": [
      "Fidelidad asegurada",
      "Eliminación automática de costos",
      "Aumento garantizado de ingresos"
    ],
    "explanation": "La insatisfacción puede perjudicar la reputación y los resultados."
  },
  {
    "id": "P031",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Cuáles son las cuatro P de la mezcla de mercadeo?",
    "correct": "Producto, precio, plaza y promoción",
    "wrong": [
      "Planilla, pasivo, patrimonio y partida",
      "Producción, personal, pago y póliza",
      "Proveedor, pedido, pagaré y préstamo"
    ],
    "explanation": "La mezcla tradicional de mercadeo contiene producto, precio, plaza y promoción."
  },
  {
    "id": "P032",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "Si un producto cuesta ₡4 000 y se agrega un 25 % sobre el costo, ¿cuál es su precio?",
    "correct": "₡5 000",
    "wrong": [
      "₡4 250",
      "₡6 000",
      "₡3 000"
    ],
    "explanation": "25 % de ₡4 000 es ₡1 000; el precio es ₡5 000."
  },
  {
    "id": "P033",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "Segmentar un mercado consiste en…",
    "correct": "Dividir clientes en grupos con características comunes",
    "wrong": [
      "Vender el mismo producto solo por televisión",
      "Eliminar la investigación del consumidor",
      "Duplicar todos los costos"
    ],
    "explanation": "La segmentación agrupa clientes según características relevantes."
  },
  {
    "id": "P034",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Qué es una muestra estadística?",
    "correct": "Una parte de la población que se estudia",
    "wrong": [
      "El total de individuos siempre",
      "Un impuesto indirecto",
      "Una cuenta de pasivo"
    ],
    "explanation": "La muestra es un subconjunto de la población."
  },
  {
    "id": "P035",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "Si 15 de 60 clientes eligen un producto, ¿qué porcentaje representan?",
    "correct": "25 %",
    "wrong": [
      "15 %",
      "40 %",
      "75 %"
    ],
    "explanation": "15 ÷ 60 × 100 = 25 %."
  },
  {
    "id": "P036",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Qué gráfico suele servir para comparar cantidades por categoría?",
    "correct": "Gráfico de barras",
    "wrong": [
      "Contrato laboral",
      "Factura",
      "Libro mayor"
    ],
    "explanation": "Las barras permiten comparar magnitudes entre categorías."
  },
  {
    "id": "P037",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Qué es una exportación?",
    "correct": "Venta de bienes o servicios hacia otro país",
    "wrong": [
      "Compra de productos del exterior",
      "Pago interno de salarios",
      "Registro de la planilla"
    ],
    "explanation": "Exportar es vender al mercado exterior."
  },
  {
    "id": "P038",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "Una importación ocurre cuando una empresa…",
    "correct": "Compra productos o servicios procedentes del exterior",
    "wrong": [
      "Vende únicamente a vecinos",
      "Registra vacaciones",
      "Contrata solo personal local"
    ],
    "explanation": "Importar supone adquirir bienes o servicios de otro país."
  },
  {
    "id": "P039",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Cuál puede ser un aporte de una empresa a la comunidad?",
    "correct": "Generar empleos y actividad económica",
    "wrong": [
      "Eliminar las oportunidades de capacitación",
      "Omitir toda responsabilidad ambiental",
      "Evitar el pago de obligaciones legales"
    ],
    "explanation": "Las empresas contribuyen mediante empleos, bienes y servicios."
  },
  {
    "id": "P040",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "La Ley N.º 8422 de Costa Rica se relaciona con…",
    "correct": "Corrupción y enriquecimiento ilícito en la función pública",
    "wrong": [
      "Cálculo de inventarios",
      "Diseño de marcas comerciales",
      "Clases de gráficos estadísticos"
    ],
    "explanation": "La Ley 8422 aborda corrupción y enriquecimiento ilícito en la función pública."
  },
  {
    "id": "P041",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "La normativa contra el hostigamiento sexual en el empleo busca…",
    "correct": "Prevenir y sancionar conductas de acoso sexual",
    "wrong": [
      "Sustituir la contabilidad",
      "Fijar el precio de los productos",
      "Regular únicamente publicidad"
    ],
    "explanation": "Protege la dignidad de las personas en el ámbito laboral."
  },
  {
    "id": "P042",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "La Ley N.º 8204 comprende asuntos relacionados con…",
    "correct": "Drogas y legitimación de capitales",
    "wrong": [
      "Licencias de software libre",
      "Libros de inventario",
      "Jornadas rotativas únicamente"
    ],
    "explanation": "La Ley 8204 incluye materias sobre estupefacientes y legitimación de capitales."
  },
  {
    "id": "P043",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Qué función cumple un cartel de licitación?",
    "correct": "Comunicar requisitos y condiciones del procedimiento",
    "wrong": [
      "Registrar el ingreso diario de caja",
      "Reemplazar toda evaluación de ofertas",
      "Anunciar vacaciones del personal"
    ],
    "explanation": "El cartel establece reglas y condiciones para presentar ofertas."
  },
  {
    "id": "P044",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Cuál es un elemento útil de un cartel de licitación?",
    "correct": "Descripción del objeto a contratar",
    "wrong": [
      "Solo el color favorito del proveedor",
      "Una lista de cumpleaños",
      "El saldo de caja menor"
    ],
    "explanation": "Se debe describir qué bien o servicio se requiere."
  },
  {
    "id": "P045",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Qué favorece la transparencia en una contratación?",
    "correct": "Criterios de evaluación claros y previamente comunicados",
    "wrong": [
      "Cambiar reglas sin informar",
      "Elegir sin comparar requisitos",
      "Ocultar el objeto contractual"
    ],
    "explanation": "Reglas claras permiten evaluar las ofertas de forma objetiva."
  },
  {
    "id": "P046",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "El derecho mercantil regula principalmente…",
    "correct": "Actividades y relaciones de naturaleza comercial",
    "wrong": [
      "Únicamente la temperatura de oficinas",
      "Solo fenómenos meteorológicos",
      "Exclusivamente métodos estadísticos"
    ],
    "explanation": "El derecho mercantil abarca actos, sujetos y relaciones comerciales."
  },
  {
    "id": "P047",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Qué normativa costarricense es una referencia central de sociedades mercantiles?",
    "correct": "Código de Comercio",
    "wrong": [
      "Manual de diseño gráfico",
      "Reglamento de biblioteca",
      "Libro de asistencia escolar"
    ],
    "explanation": "El Código de Comercio regula aspectos de las sociedades mercantiles."
  },
  {
    "id": "P048",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "Una sociedad mercantil se constituye para…",
    "correct": "Desarrollar actividades conforme a su objeto y normas aplicables",
    "wrong": [
      "Evitar toda obligación jurídica",
      "Reemplazar los estados financieros",
      "No identificar sus socios nunca"
    ],
    "explanation": "Las sociedades actúan dentro de un marco jurídico y un objeto."
  },
  {
    "id": "P049",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "Una cooperativa se caracteriza por…",
    "correct": "La colaboración de sus asociados para objetivos comunes",
    "wrong": [
      "Ser siempre una institución policial",
      "Prohibir la participación de asociados",
      "No tener ninguna finalidad económica o social"
    ],
    "explanation": "El cooperativismo busca satisfacer necesidades comunes con participación asociativa."
  },
  {
    "id": "P050",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "En Costa Rica, una asociación solidarista se relaciona especialmente con…",
    "correct": "Ahorro, bienestar y solidaridad entre personas trabajadoras",
    "wrong": [
      "El control del clima",
      "La emisión de pasaportes",
      "La clasificación de importaciones"
    ],
    "explanation": "El solidarismo promueve bienestar y mecanismos de ahorro de sus asociados."
  },
  {
    "id": "P051",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Qué comparten cooperativas y asociaciones solidaristas?",
    "correct": "Organización asociativa y búsqueda de beneficios para sus miembros",
    "wrong": [
      "Ser idénticas en todas sus normas",
      "No requerir organización",
      "Emitir moneda nacional"
    ],
    "explanation": "Ambas son organizaciones de miembros, aunque sus reglas y fines concretos difieren."
  },
  {
    "id": "P052",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Qué significa in dubio pro operario?",
    "correct": "Ante una duda interpretativa laboral pertinente, favorecer a la persona trabajadora",
    "wrong": [
      "Permitir renunciar a cualquier derecho mínimo",
      "Sustituir el contrato por una factura",
      "Eliminar las normas de seguridad"
    ],
    "explanation": "Es un principio protector de interpretación del derecho laboral."
  },
  {
    "id": "P053",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "El principio de irrenunciabilidad protege…",
    "correct": "Los derechos laborales que la ley establece como irrenunciables",
    "wrong": [
      "Solo el inventario del comercio",
      "Las ventas internacionales",
      "La publicidad empresarial"
    ],
    "explanation": "Determinados derechos mínimos no pueden renunciarse válidamente."
  },
  {
    "id": "P054",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Qué describe el ius variandi?",
    "correct": "La facultad patronal de modificar ciertas condiciones dentro de límites legales",
    "wrong": [
      "La obligación de cerrar toda empresa",
      "El cálculo de depreciación",
      "La venta de productos sin factura"
    ],
    "explanation": "Es una potestad de dirección sujeta a límites y derechos laborales."
  },
  {
    "id": "P055",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Cuáles son elementos típicos de una relación laboral?",
    "correct": "Prestación personal, remuneración y subordinación",
    "wrong": [
      "Activo, pasivo y patrimonio",
      "Producto, plaza y promoción",
      "Muestra, población y variable"
    ],
    "explanation": "La relación laboral suele identificarse mediante servicio personal, pago y subordinación."
  },
  {
    "id": "P056",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "Un contrato por obra determinada está ligado a…",
    "correct": "La realización de una obra específica",
    "wrong": [
      "La duración obligatoria de por vida",
      "La venta de acciones",
      "Una licencia de publicidad"
    ],
    "explanation": "La obra concreta delimita el objeto y posible finalización del contrato."
  },
  {
    "id": "P057",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Cuál es la diferencia básica entre suspensión y terminación laboral?",
    "correct": "La suspensión interrumpe temporalmente ciertos efectos; la terminación finaliza el vínculo",
    "wrong": [
      "Ambas siempre son idénticas",
      "La suspensión siempre disuelve la empresa",
      "La terminación equivale a un permiso de almuerzo"
    ],
    "explanation": "La suspensión no necesariamente extingue la relación laboral."
  },
  {
    "id": "P058",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Qué significa FCL en el contexto laboral de Costa Rica?",
    "correct": "Fondo de Capitalización Laboral",
    "wrong": [
      "Formulario de Compra Local",
      "Factura de Crédito Libre",
      "Fondo Comercial de Licitación"
    ],
    "explanation": "El FCL es un fondo contemplado en la protección laboral costarricense."
  },
  {
    "id": "P059",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "La Ley de Protección al Trabajador aborda…",
    "correct": "Mecanismos de ahorro y protección vinculados al trabajo",
    "wrong": [
      "Solo el diseño de oficinas",
      "Únicamente exportaciones",
      "Exclusivamente propiedad intelectual"
    ],
    "explanation": "La ley desarrolla instrumentos de protección económica laboral."
  },
  {
    "id": "P060",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Qué conviene consultar para resolver cálculos laborales actuales?",
    "correct": "Normativa vigente y materiales actualizados de clase",
    "wrong": [
      "Un porcentaje inventado",
      "La tabla de otra nación",
      "Un dato sin fecha ni fuente"
    ],
    "explanation": "El propio temario indica utilizar normativa y materiales actualizados."
  },
  {
    "id": "P061",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Qué institución costarricense administra el seguro social?",
    "correct": "CCSS",
    "wrong": [
      "MEP",
      "Registro de la Propiedad",
      "Banco Central Europeo"
    ],
    "explanation": "La Caja Costarricense de Seguro Social administra regímenes de seguridad social."
  },
  {
    "id": "P062",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Qué conducta se ajusta mejor a los deberes patronales?",
    "correct": "Cumplir obligaciones de aseguramiento y normativa laboral",
    "wrong": [
      "Ocultar accidentes deliberadamente",
      "Retener aportes sin reportarlos",
      "Impedir cualquier medida de prevención"
    ],
    "explanation": "El patrono debe observar sus obligaciones laborales y de seguridad social."
  },
  {
    "id": "P063",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "La persona trabajadora debe…",
    "correct": "Cumplir responsablemente sus labores y normas aplicables",
    "wrong": [
      "Falsificar controles de asistencia",
      "Divulgar información privada sin autorización",
      "Dañar intencionalmente herramientas"
    ],
    "explanation": "La relación laboral incluye obligaciones para ambas partes."
  },
  {
    "id": "P064",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Quién es el sujeto pasivo de una obligación tributaria?",
    "correct": "La persona obligada a cumplir la prestación tributaria",
    "wrong": [
      "Siempre el fabricante de computadoras",
      "El gráfico circular",
      "El área de recursos humanos"
    ],
    "explanation": "El sujeto pasivo es el obligado tributario según la ley."
  },
  {
    "id": "P065",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "Un impuesto directo suele gravar…",
    "correct": "Manifestaciones como renta o patrimonio",
    "wrong": [
      "Únicamente las etiquetas de productos",
      "Solo el tiempo de traslado",
      "La cantidad de correos enviados"
    ],
    "explanation": "Los impuestos directos recaen sobre manifestaciones de capacidad económica."
  },
  {
    "id": "P066",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Qué es el hecho generador de un tributo?",
    "correct": "La situación que la ley define como origen de la obligación tributaria",
    "wrong": [
      "El momento de abrir una presentación",
      "La compra de un uniforme siempre",
      "Un saludo protocolario"
    ],
    "explanation": "Es el supuesto previsto legalmente que hace surgir la obligación tributaria."
  },
  {
    "id": "P067",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Cuál es una finalidad principal de la contabilidad?",
    "correct": "Registrar y comunicar información económica útil",
    "wrong": [
      "Diseñar campañas publicitarias solamente",
      "Contratar exclusivamente personal",
      "Crear horarios rotativos"
    ],
    "explanation": "La contabilidad sistematiza información útil para decisiones."
  },
  {
    "id": "P068",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Cuál es un usuario externo de información contable?",
    "correct": "Un banco que evalúa un crédito",
    "wrong": [
      "El gerente de operaciones de la misma empresa",
      "Un empleado del área contable",
      "La jefatura interna de ventas"
    ],
    "explanation": "Los bancos usan información empresarial desde fuera de la organización."
  },
  {
    "id": "P069",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿En qué se distingue típicamente el contador público?",
    "correct": "Puede prestar servicios de auditoría y fe pública dentro de sus atribuciones legales",
    "wrong": [
      "Solo atiende llamadas comerciales",
      "Siempre administra inventario físico",
      "No requiere conocimientos contables"
    ],
    "explanation": "Las atribuciones profesionales deben ajustarse a la normativa aplicable."
  },
  {
    "id": "P070",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "Si el activo es ₡900 000 y el pasivo ₡350 000, ¿cuál es el patrimonio?",
    "correct": "₡550 000",
    "wrong": [
      "₡1 250 000",
      "₡350 000",
      "₡900 000"
    ],
    "explanation": "Activo = Pasivo + Patrimonio; ₡900 000 − ₡350 000 = ₡550 000."
  },
  {
    "id": "P071",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "La ecuación patrimonial básica es…",
    "correct": "Activo = Pasivo + Patrimonio",
    "wrong": [
      "Activo = Pasivo − Ingreso",
      "Gasto = Activo + Ventas",
      "Utilidad = Pasivo + Inventario"
    ],
    "explanation": "La ecuación vincula los recursos con deudas y patrimonio."
  },
  {
    "id": "P072",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Qué principio exige registrar dos efectos correspondientes en las operaciones?",
    "correct": "Partida doble",
    "wrong": [
      "Segmentación de mercado",
      "Reclutamiento externo",
      "Jornada mixta"
    ],
    "explanation": "La partida doble mantiene el equilibrio de los registros."
  },
  {
    "id": "P073",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "Una obligación pendiente de pago a un proveedor es…",
    "correct": "Un pasivo",
    "wrong": [
      "Un ingreso",
      "Un gasto de publicidad siempre",
      "Un activo fijo"
    ],
    "explanation": "Representa una deuda u obligación de la empresa."
  },
  {
    "id": "P074",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Qué estado muestra activos, pasivos y patrimonio en una fecha?",
    "correct": "Balance de situación",
    "wrong": [
      "Estado de resultados únicamente",
      "Planilla salarial",
      "Registro de asistencia"
    ],
    "explanation": "El balance presenta la situación financiera en un momento dado."
  },
  {
    "id": "P075",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Cuál es un ejemplo de activo corriente?",
    "correct": "Dinero en caja",
    "wrong": [
      "Préstamo a largo plazo por pagar",
      "Capital social",
      "Ingreso por servicios"
    ],
    "explanation": "El efectivo es un activo disponible de corto plazo."
  },
  {
    "id": "P076",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Qué estado muestra ingresos y gastos de un período?",
    "correct": "Estado de pérdidas y ganancias",
    "wrong": [
      "Libro de actas",
      "Orden de compra",
      "Cartel de licitación"
    ],
    "explanation": "El estado de resultados permite determinar utilidad o pérdida."
  },
  {
    "id": "P077",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "Si los ingresos son ₡600 000 y los gastos ₡450 000, el resultado es…",
    "correct": "Utilidad de ₡150 000",
    "wrong": [
      "Pérdida de ₡150 000",
      "Utilidad de ₡1 050 000",
      "Pérdida de ₡600 000"
    ],
    "explanation": "₡600 000 − ₡450 000 = ₡150 000 de utilidad."
  },
  {
    "id": "P078",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Qué documento respalda normalmente una venta de bienes o servicios?",
    "correct": "Factura",
    "wrong": [
      "Organigrama",
      "Tarjeta reloj",
      "Cartel de licitación"
    ],
    "explanation": "La factura documenta una operación comercial."
  },
  {
    "id": "P079",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Qué instrumento contiene una promesa de pagar una suma de dinero?",
    "correct": "Pagaré",
    "wrong": [
      "Nota de pedido",
      "Reporte de asistencia",
      "Vale de almacén"
    ],
    "explanation": "El pagaré incorpora una promesa de pago."
  },
  {
    "id": "P080",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Qué documento se usa habitualmente para solicitar mercancías a un proveedor?",
    "correct": "Orden de compra",
    "wrong": [
      "Estado de resultados",
      "Hoja de entrevista",
      "Gráfico de barras"
    ],
    "explanation": "La orden de compra formaliza una solicitud de adquisición."
  },
  {
    "id": "P081",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "Una nota de crédito suele utilizarse para…",
    "correct": "Registrar una disminución o ajuste a favor del comprador en una operación",
    "wrong": [
      "Aumentar horas de trabajo",
      "Registrar candidatos",
      "Pedir una licencia de funcionamiento"
    ],
    "explanation": "Puede documentar devoluciones o ajustes de una factura."
  },
  {
    "id": "P082",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿En qué libro se anotan cronológicamente los asientos?",
    "correct": "Libro diario",
    "wrong": [
      "Libro mayor únicamente",
      "Libro de visitas",
      "Agenda comercial"
    ],
    "explanation": "El diario registra operaciones en orden cronológico."
  },
  {
    "id": "P083",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Qué libro permite ver movimientos por cada cuenta?",
    "correct": "Libro mayor",
    "wrong": [
      "Libro de asistencia",
      "Catálogo de productos",
      "Registro de entrevistas"
    ],
    "explanation": "El mayor agrupa movimientos según cuentas contables."
  },
  {
    "id": "P084",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Para qué sirve un libro auxiliar?",
    "correct": "Detallar información de determinadas cuentas o movimientos",
    "wrong": [
      "Sustituir toda comprobación",
      "Diseñar anuncios",
      "Fijar salarios sin información"
    ],
    "explanation": "Los auxiliares amplían el detalle de cuentas o registros."
  }
];
