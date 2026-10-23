/* Práctica no oficial: conceptos, diferencias, casos y ejercicios. Normativa y tasas según material actualizado de clase. */
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
  },
  {
    "id": "X0001",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Qué concepto corresponde a esta definición? Explica la razón de existir de la empresa en el presente",
    "correct": "Misión",
    "wrong": [
      "Visión",
      "Recurso material",
      "Recurso económico"
    ],
    "explanation": "Misión: explica la razón de existir de la empresa en el presente."
  },
  {
    "id": "X0002",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "Caso práctico: Una panadería declara que ofrece pan fresco y accesible a su comunidad. ¿Qué concepto se aplica principalmente?",
    "correct": "Misión",
    "wrong": [
      "Visión",
      "Recurso material",
      "Recurso económico"
    ],
    "explanation": "El caso ejemplifica misión: explica la razón de existir de la empresa en el presente."
  },
  {
    "id": "X0003",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Misión»?",
    "correct": "Una panadería declara que ofrece pan fresco y accesible a su comunidad",
    "wrong": [
      "Una cooperativa desea ser referente nacional en comercio justo dentro de diez años",
      "Una fábrica incorpora hornos, escritorios y vehículos",
      "Una tienda recibe un préstamo para capital de trabajo"
    ],
    "explanation": "Misión: explica la razón de existir de la empresa en el presente."
  },
  {
    "id": "X0004",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Qué concepto corresponde a esta definición? Describe el futuro al que aspira llegar la organización",
    "correct": "Visión",
    "wrong": [
      "Recurso material",
      "Recurso económico",
      "Empresa agroindustrial"
    ],
    "explanation": "Visión: describe el futuro al que aspira llegar la organización."
  },
  {
    "id": "X0005",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "Caso práctico: Una cooperativa desea ser referente nacional en comercio justo dentro de diez años. ¿Qué concepto se aplica principalmente?",
    "correct": "Visión",
    "wrong": [
      "Recurso material",
      "Recurso económico",
      "Empresa agroindustrial"
    ],
    "explanation": "El caso ejemplifica visión: describe el futuro al que aspira llegar la organización."
  },
  {
    "id": "X0006",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Visión»?",
    "correct": "Una cooperativa desea ser referente nacional en comercio justo dentro de diez años",
    "wrong": [
      "Una fábrica incorpora hornos, escritorios y vehículos",
      "Una tienda recibe un préstamo para capital de trabajo",
      "Una planta procesa piña y la envasa como jugo"
    ],
    "explanation": "Visión: describe el futuro al que aspira llegar la organización."
  },
  {
    "id": "X0007",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Qué concepto corresponde a esta definición? Incluye bienes físicos necesarios para operar",
    "correct": "Recurso material",
    "wrong": [
      "Recurso económico",
      "Empresa agroindustrial",
      "Empresa turística"
    ],
    "explanation": "Recurso material: incluye bienes físicos necesarios para operar."
  },
  {
    "id": "X0008",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "Caso práctico: Una fábrica incorpora hornos, escritorios y vehículos. ¿Qué concepto se aplica principalmente?",
    "correct": "Recurso material",
    "wrong": [
      "Recurso económico",
      "Empresa agroindustrial",
      "Empresa turística"
    ],
    "explanation": "El caso ejemplifica recurso material: incluye bienes físicos necesarios para operar."
  },
  {
    "id": "X0009",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Recurso material»?",
    "correct": "Una fábrica incorpora hornos, escritorios y vehículos",
    "wrong": [
      "Una tienda recibe un préstamo para capital de trabajo",
      "Una planta procesa piña y la envasa como jugo",
      "Una operadora organiza excursiones al volcán Arenal"
    ],
    "explanation": "Recurso material: incluye bienes físicos necesarios para operar."
  },
  {
    "id": "X0010",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Qué concepto corresponde a esta definición? Comprende fondos y fuentes de financiamiento",
    "correct": "Recurso económico",
    "wrong": [
      "Empresa agroindustrial",
      "Empresa turística",
      "Empresa industrial"
    ],
    "explanation": "Recurso económico: comprende fondos y fuentes de financiamiento."
  },
  {
    "id": "X0011",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "Caso práctico: Una tienda recibe un préstamo para capital de trabajo. ¿Qué concepto se aplica principalmente?",
    "correct": "Recurso económico",
    "wrong": [
      "Empresa agroindustrial",
      "Empresa turística",
      "Empresa industrial"
    ],
    "explanation": "El caso ejemplifica recurso económico: comprende fondos y fuentes de financiamiento."
  },
  {
    "id": "X0012",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Recurso económico»?",
    "correct": "Una tienda recibe un préstamo para capital de trabajo",
    "wrong": [
      "Una planta procesa piña y la envasa como jugo",
      "Una operadora organiza excursiones al volcán Arenal",
      "Una fábrica convierte madera en muebles"
    ],
    "explanation": "Recurso económico: comprende fondos y fuentes de financiamiento."
  },
  {
    "id": "X0013",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Qué concepto corresponde a esta definición? Transforma materias primas provenientes del campo",
    "correct": "Empresa agroindustrial",
    "wrong": [
      "Empresa turística",
      "Empresa industrial",
      "Misión"
    ],
    "explanation": "Empresa agroindustrial: transforma materias primas provenientes del campo."
  },
  {
    "id": "X0014",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "Caso práctico: Una planta procesa piña y la envasa como jugo. ¿Qué concepto se aplica principalmente?",
    "correct": "Empresa agroindustrial",
    "wrong": [
      "Empresa turística",
      "Empresa industrial",
      "Misión"
    ],
    "explanation": "El caso ejemplifica empresa agroindustrial: transforma materias primas provenientes del campo."
  },
  {
    "id": "X0015",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Empresa agroindustrial»?",
    "correct": "Una planta procesa piña y la envasa como jugo",
    "wrong": [
      "Una operadora organiza excursiones al volcán Arenal",
      "Una fábrica convierte madera en muebles",
      "Una panadería declara que ofrece pan fresco y accesible a su comunidad"
    ],
    "explanation": "Empresa agroindustrial: transforma materias primas provenientes del campo."
  },
  {
    "id": "X0016",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Qué concepto corresponde a esta definición? Ofrece servicios vinculados con viajes y recreación",
    "correct": "Empresa turística",
    "wrong": [
      "Empresa industrial",
      "Misión",
      "Visión"
    ],
    "explanation": "Empresa turística: ofrece servicios vinculados con viajes y recreación."
  },
  {
    "id": "X0017",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "Caso práctico: Una operadora organiza excursiones al volcán Arenal. ¿Qué concepto se aplica principalmente?",
    "correct": "Empresa turística",
    "wrong": [
      "Empresa industrial",
      "Misión",
      "Visión"
    ],
    "explanation": "El caso ejemplifica empresa turística: ofrece servicios vinculados con viajes y recreación."
  },
  {
    "id": "X0018",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Empresa turística»?",
    "correct": "Una operadora organiza excursiones al volcán Arenal",
    "wrong": [
      "Una fábrica convierte madera en muebles",
      "Una panadería declara que ofrece pan fresco y accesible a su comunidad",
      "Una cooperativa desea ser referente nacional en comercio justo dentro de diez años"
    ],
    "explanation": "Empresa turística: ofrece servicios vinculados con viajes y recreación."
  },
  {
    "id": "X0019",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Qué concepto corresponde a esta definición? Transforma insumos en productos manufacturados",
    "correct": "Empresa industrial",
    "wrong": [
      "Misión",
      "Visión",
      "Recurso material"
    ],
    "explanation": "Empresa industrial: transforma insumos en productos manufacturados."
  },
  {
    "id": "X0020",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "Caso práctico: Una fábrica convierte madera en muebles. ¿Qué concepto se aplica principalmente?",
    "correct": "Empresa industrial",
    "wrong": [
      "Misión",
      "Visión",
      "Recurso material"
    ],
    "explanation": "El caso ejemplifica empresa industrial: transforma insumos en productos manufacturados."
  },
  {
    "id": "X0021",
    "unit": "Administración de Empresas",
    "topic": "Generalidades de la empresa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Empresa industrial»?",
    "correct": "Una fábrica convierte madera en muebles",
    "wrong": [
      "Una panadería declara que ofrece pan fresco y accesible a su comunidad",
      "Una cooperativa desea ser referente nacional en comercio justo dentro de diez años",
      "Una fábrica incorpora hornos, escritorios y vehículos"
    ],
    "explanation": "Empresa industrial: transforma insumos en productos manufacturados."
  },
  {
    "id": "X0022",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Definir objetivos y anticipar acciones y recursos",
    "correct": "Planear",
    "wrong": [
      "Organizar",
      "Dirigir",
      "Controlar"
    ],
    "explanation": "Planear: definir objetivos y anticipar acciones y recursos."
  },
  {
    "id": "X0023",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "Caso práctico: La gerencia fija una meta de ventas y el presupuesto anual. ¿Qué concepto se aplica principalmente?",
    "correct": "Planear",
    "wrong": [
      "Organizar",
      "Dirigir",
      "Controlar"
    ],
    "explanation": "El caso ejemplifica planear: definir objetivos y anticipar acciones y recursos."
  },
  {
    "id": "X0024",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Planear»?",
    "correct": "La gerencia fija una meta de ventas y el presupuesto anual",
    "wrong": [
      "Se distribuyen turnos y responsabilidades por departamento",
      "Una jefatura orienta a su equipo para atender mejor",
      "Se comparan ventas reales con metas y se investigan diferencias"
    ],
    "explanation": "Planear: definir objetivos y anticipar acciones y recursos."
  },
  {
    "id": "X0025",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Asignar funciones, personas y recursos",
    "correct": "Organizar",
    "wrong": [
      "Dirigir",
      "Controlar",
      "Tesorería"
    ],
    "explanation": "Organizar: asignar funciones, personas y recursos."
  },
  {
    "id": "X0026",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "Caso práctico: Se distribuyen turnos y responsabilidades por departamento. ¿Qué concepto se aplica principalmente?",
    "correct": "Organizar",
    "wrong": [
      "Dirigir",
      "Controlar",
      "Tesorería"
    ],
    "explanation": "El caso ejemplifica organizar: asignar funciones, personas y recursos."
  },
  {
    "id": "X0027",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Organizar»?",
    "correct": "Se distribuyen turnos y responsabilidades por departamento",
    "wrong": [
      "Una jefatura orienta a su equipo para atender mejor",
      "Se comparan ventas reales con metas y se investigan diferencias",
      "Un encargado programa pagos a proveedores según caja disponible"
    ],
    "explanation": "Organizar: asignar funciones, personas y recursos."
  },
  {
    "id": "X0028",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Guiar, comunicar y motivar al personal",
    "correct": "Dirigir",
    "wrong": [
      "Controlar",
      "Tesorería",
      "Compras"
    ],
    "explanation": "Dirigir: guiar, comunicar y motivar al personal."
  },
  {
    "id": "X0029",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "Caso práctico: Una jefatura orienta a su equipo para atender mejor. ¿Qué concepto se aplica principalmente?",
    "correct": "Dirigir",
    "wrong": [
      "Controlar",
      "Tesorería",
      "Compras"
    ],
    "explanation": "El caso ejemplifica dirigir: guiar, comunicar y motivar al personal."
  },
  {
    "id": "X0030",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Dirigir»?",
    "correct": "Una jefatura orienta a su equipo para atender mejor",
    "wrong": [
      "Se comparan ventas reales con metas y se investigan diferencias",
      "Un encargado programa pagos a proveedores según caja disponible",
      "Un departamento solicita cotizaciones para reponer inventario"
    ],
    "explanation": "Dirigir: guiar, comunicar y motivar al personal."
  },
  {
    "id": "X0031",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Medir resultados y corregir desviaciones",
    "correct": "Controlar",
    "wrong": [
      "Tesorería",
      "Compras",
      "Recursos humanos"
    ],
    "explanation": "Controlar: medir resultados y corregir desviaciones."
  },
  {
    "id": "X0032",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "Caso práctico: Se comparan ventas reales con metas y se investigan diferencias. ¿Qué concepto se aplica principalmente?",
    "correct": "Controlar",
    "wrong": [
      "Tesorería",
      "Compras",
      "Recursos humanos"
    ],
    "explanation": "El caso ejemplifica controlar: medir resultados y corregir desviaciones."
  },
  {
    "id": "X0033",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Controlar»?",
    "correct": "Se comparan ventas reales con metas y se investigan diferencias",
    "wrong": [
      "Un encargado programa pagos a proveedores según caja disponible",
      "Un departamento solicita cotizaciones para reponer inventario",
      "La empresa coordina entrevistas y entrenamiento para nuevos empleados"
    ],
    "explanation": "Controlar: medir resultados y corregir desviaciones."
  },
  {
    "id": "X0034",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Gestionar cobros, pagos y disponibilidad de dinero",
    "correct": "Tesorería",
    "wrong": [
      "Compras",
      "Recursos humanos",
      "Planear"
    ],
    "explanation": "Tesorería: gestionar cobros, pagos y disponibilidad de dinero."
  },
  {
    "id": "X0035",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "Caso práctico: Un encargado programa pagos a proveedores según caja disponible. ¿Qué concepto se aplica principalmente?",
    "correct": "Tesorería",
    "wrong": [
      "Compras",
      "Recursos humanos",
      "Planear"
    ],
    "explanation": "El caso ejemplifica tesorería: gestionar cobros, pagos y disponibilidad de dinero."
  },
  {
    "id": "X0036",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Tesorería»?",
    "correct": "Un encargado programa pagos a proveedores según caja disponible",
    "wrong": [
      "Un departamento solicita cotizaciones para reponer inventario",
      "La empresa coordina entrevistas y entrenamiento para nuevos empleados",
      "La gerencia fija una meta de ventas y el presupuesto anual"
    ],
    "explanation": "Tesorería: gestionar cobros, pagos y disponibilidad de dinero."
  },
  {
    "id": "X0037",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Adquirir los materiales y productos requeridos",
    "correct": "Compras",
    "wrong": [
      "Recursos humanos",
      "Planear",
      "Organizar"
    ],
    "explanation": "Compras: adquirir los materiales y productos requeridos."
  },
  {
    "id": "X0038",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "Caso práctico: Un departamento solicita cotizaciones para reponer inventario. ¿Qué concepto se aplica principalmente?",
    "correct": "Compras",
    "wrong": [
      "Recursos humanos",
      "Planear",
      "Organizar"
    ],
    "explanation": "El caso ejemplifica compras: adquirir los materiales y productos requeridos."
  },
  {
    "id": "X0039",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Compras»?",
    "correct": "Un departamento solicita cotizaciones para reponer inventario",
    "wrong": [
      "La empresa coordina entrevistas y entrenamiento para nuevos empleados",
      "La gerencia fija una meta de ventas y el presupuesto anual",
      "Se distribuyen turnos y responsabilidades por departamento"
    ],
    "explanation": "Compras: adquirir los materiales y productos requeridos."
  },
  {
    "id": "X0040",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Gestionar selección, capacitación y relaciones del personal",
    "correct": "Recursos humanos",
    "wrong": [
      "Planear",
      "Organizar",
      "Dirigir"
    ],
    "explanation": "Recursos humanos: gestionar selección, capacitación y relaciones del personal."
  },
  {
    "id": "X0041",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "Caso práctico: La empresa coordina entrevistas y entrenamiento para nuevos empleados. ¿Qué concepto se aplica principalmente?",
    "correct": "Recursos humanos",
    "wrong": [
      "Planear",
      "Organizar",
      "Dirigir"
    ],
    "explanation": "El caso ejemplifica recursos humanos: gestionar selección, capacitación y relaciones del personal."
  },
  {
    "id": "X0042",
    "unit": "Administración de Empresas",
    "topic": "Administración y estructura organizativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Recursos humanos»?",
    "correct": "La empresa coordina entrevistas y entrenamiento para nuevos empleados",
    "wrong": [
      "La gerencia fija una meta de ventas y el presupuesto anual",
      "Se distribuyen turnos y responsabilidades por departamento",
      "Una jefatura orienta a su equipo para atender mejor"
    ],
    "explanation": "Recursos humanos: gestionar selección, capacitación y relaciones del personal."
  },
  {
    "id": "X0043",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Qué concepto corresponde a esta definición? Buscar candidatos entre quienes ya trabajan en la empresa",
    "correct": "Reclutamiento interno",
    "wrong": [
      "Reclutamiento externo",
      "Selección",
      "Verificación de referencias"
    ],
    "explanation": "Reclutamiento interno: buscar candidatos entre quienes ya trabajan en la empresa."
  },
  {
    "id": "X0044",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "Caso práctico: Un colaborador actual participa para una vacante de supervisor. ¿Qué concepto se aplica principalmente?",
    "correct": "Reclutamiento interno",
    "wrong": [
      "Reclutamiento externo",
      "Selección",
      "Verificación de referencias"
    ],
    "explanation": "El caso ejemplifica reclutamiento interno: buscar candidatos entre quienes ya trabajan en la empresa."
  },
  {
    "id": "X0045",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Reclutamiento interno»?",
    "correct": "Un colaborador actual participa para una vacante de supervisor",
    "wrong": [
      "Se publica una oferta de empleo en un portal abierto",
      "Se realizan entrevistas y pruebas para una plaza",
      "Se confirman trabajos anteriores con autorización del candidato"
    ],
    "explanation": "Reclutamiento interno: buscar candidatos entre quienes ya trabajan en la empresa."
  },
  {
    "id": "X0046",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Qué concepto corresponde a esta definición? Buscar postulantes fuera de la organización",
    "correct": "Reclutamiento externo",
    "wrong": [
      "Selección",
      "Verificación de referencias",
      "Inducción"
    ],
    "explanation": "Reclutamiento externo: buscar postulantes fuera de la organización."
  },
  {
    "id": "X0047",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "Caso práctico: Se publica una oferta de empleo en un portal abierto. ¿Qué concepto se aplica principalmente?",
    "correct": "Reclutamiento externo",
    "wrong": [
      "Selección",
      "Verificación de referencias",
      "Inducción"
    ],
    "explanation": "El caso ejemplifica reclutamiento externo: buscar postulantes fuera de la organización."
  },
  {
    "id": "X0048",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Reclutamiento externo»?",
    "correct": "Se publica una oferta de empleo en un portal abierto",
    "wrong": [
      "Se realizan entrevistas y pruebas para una plaza",
      "Se confirman trabajos anteriores con autorización del candidato",
      "El nuevo empleado conoce las reglas y a su equipo"
    ],
    "explanation": "Reclutamiento externo: buscar postulantes fuera de la organización."
  },
  {
    "id": "X0049",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Qué concepto corresponde a esta definición? Evaluar candidatos y elegir a quien cumpla el perfil",
    "correct": "Selección",
    "wrong": [
      "Verificación de referencias",
      "Inducción",
      "Descripción de puesto"
    ],
    "explanation": "Selección: evaluar candidatos y elegir a quien cumpla el perfil."
  },
  {
    "id": "X0050",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "Caso práctico: Se realizan entrevistas y pruebas para una plaza. ¿Qué concepto se aplica principalmente?",
    "correct": "Selección",
    "wrong": [
      "Verificación de referencias",
      "Inducción",
      "Descripción de puesto"
    ],
    "explanation": "El caso ejemplifica selección: evaluar candidatos y elegir a quien cumpla el perfil."
  },
  {
    "id": "X0051",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Selección»?",
    "correct": "Se realizan entrevistas y pruebas para una plaza",
    "wrong": [
      "Se confirman trabajos anteriores con autorización del candidato",
      "El nuevo empleado conoce las reglas y a su equipo",
      "La vacante detalla tareas y habilidades para auxiliar contable"
    ],
    "explanation": "Selección: evaluar candidatos y elegir a quien cumpla el perfil."
  },
  {
    "id": "X0052",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Qué concepto corresponde a esta definición? Comprobar datos y antecedentes pertinentes al puesto",
    "correct": "Verificación de referencias",
    "wrong": [
      "Inducción",
      "Descripción de puesto",
      "Ética en selección"
    ],
    "explanation": "Verificación de referencias: comprobar datos y antecedentes pertinentes al puesto."
  },
  {
    "id": "X0053",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "Caso práctico: Se confirman trabajos anteriores con autorización del candidato. ¿Qué concepto se aplica principalmente?",
    "correct": "Verificación de referencias",
    "wrong": [
      "Inducción",
      "Descripción de puesto",
      "Ética en selección"
    ],
    "explanation": "El caso ejemplifica verificación de referencias: comprobar datos y antecedentes pertinentes al puesto."
  },
  {
    "id": "X0054",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Verificación de referencias»?",
    "correct": "Se confirman trabajos anteriores con autorización del candidato",
    "wrong": [
      "El nuevo empleado conoce las reglas y a su equipo",
      "La vacante detalla tareas y habilidades para auxiliar contable",
      "Dos postulantes reciben preguntas equivalentes y criterios transparentes"
    ],
    "explanation": "Verificación de referencias: comprobar datos y antecedentes pertinentes al puesto."
  },
  {
    "id": "X0055",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Qué concepto corresponde a esta definición? Presentar funciones, normas y cultura a una persona recién contratada",
    "correct": "Inducción",
    "wrong": [
      "Descripción de puesto",
      "Ética en selección",
      "Reclutamiento interno"
    ],
    "explanation": "Inducción: presentar funciones, normas y cultura a una persona recién contratada."
  },
  {
    "id": "X0056",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "Caso práctico: El nuevo empleado conoce las reglas y a su equipo. ¿Qué concepto se aplica principalmente?",
    "correct": "Inducción",
    "wrong": [
      "Descripción de puesto",
      "Ética en selección",
      "Reclutamiento interno"
    ],
    "explanation": "El caso ejemplifica inducción: presentar funciones, normas y cultura a una persona recién contratada."
  },
  {
    "id": "X0057",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Inducción»?",
    "correct": "El nuevo empleado conoce las reglas y a su equipo",
    "wrong": [
      "La vacante detalla tareas y habilidades para auxiliar contable",
      "Dos postulantes reciben preguntas equivalentes y criterios transparentes",
      "Un colaborador actual participa para una vacante de supervisor"
    ],
    "explanation": "Inducción: presentar funciones, normas y cultura a una persona recién contratada."
  },
  {
    "id": "X0058",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Qué concepto corresponde a esta definición? Especificar funciones, requisitos y responsabilidades del cargo",
    "correct": "Descripción de puesto",
    "wrong": [
      "Ética en selección",
      "Reclutamiento interno",
      "Reclutamiento externo"
    ],
    "explanation": "Descripción de puesto: especificar funciones, requisitos y responsabilidades del cargo."
  },
  {
    "id": "X0059",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "Caso práctico: La vacante detalla tareas y habilidades para auxiliar contable. ¿Qué concepto se aplica principalmente?",
    "correct": "Descripción de puesto",
    "wrong": [
      "Ética en selección",
      "Reclutamiento interno",
      "Reclutamiento externo"
    ],
    "explanation": "El caso ejemplifica descripción de puesto: especificar funciones, requisitos y responsabilidades del cargo."
  },
  {
    "id": "X0060",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Descripción de puesto»?",
    "correct": "La vacante detalla tareas y habilidades para auxiliar contable",
    "wrong": [
      "Dos postulantes reciben preguntas equivalentes y criterios transparentes",
      "Un colaborador actual participa para una vacante de supervisor",
      "Se publica una oferta de empleo en un portal abierto"
    ],
    "explanation": "Descripción de puesto: especificar funciones, requisitos y responsabilidades del cargo."
  },
  {
    "id": "X0061",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Qué concepto corresponde a esta definición? Evaluar con criterios pertinentes y sin discriminación",
    "correct": "Ética en selección",
    "wrong": [
      "Reclutamiento interno",
      "Reclutamiento externo",
      "Selección"
    ],
    "explanation": "Ética en selección: evaluar con criterios pertinentes y sin discriminación."
  },
  {
    "id": "X0062",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "Caso práctico: Dos postulantes reciben preguntas equivalentes y criterios transparentes. ¿Qué concepto se aplica principalmente?",
    "correct": "Ética en selección",
    "wrong": [
      "Reclutamiento interno",
      "Reclutamiento externo",
      "Selección"
    ],
    "explanation": "El caso ejemplifica ética en selección: evaluar con criterios pertinentes y sin discriminación."
  },
  {
    "id": "X0063",
    "unit": "Administración de Empresas",
    "topic": "Gestión del recurso humano",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Ética en selección»?",
    "correct": "Dos postulantes reciben preguntas equivalentes y criterios transparentes",
    "wrong": [
      "Un colaborador actual participa para una vacante de supervisor",
      "Se publica una oferta de empleo en un portal abierto",
      "Se realizan entrevistas y pruebas para una plaza"
    ],
    "explanation": "Ética en selección: evaluar con criterios pertinentes y sin discriminación."
  },
  {
    "id": "X0064",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Qué concepto corresponde a esta definición? Valorar de manera justa un buen desempeño",
    "correct": "Reconocimiento",
    "wrong": [
      "Realimentación positiva",
      "Resolución de conflictos",
      "Ergonomía"
    ],
    "explanation": "Reconocimiento: valorar de manera justa un buen desempeño."
  },
  {
    "id": "X0065",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "Caso práctico: La jefatura felicita un trabajo destacado explicando sus logros. ¿Qué concepto se aplica principalmente?",
    "correct": "Reconocimiento",
    "wrong": [
      "Realimentación positiva",
      "Resolución de conflictos",
      "Ergonomía"
    ],
    "explanation": "El caso ejemplifica reconocimiento: valorar de manera justa un buen desempeño."
  },
  {
    "id": "X0066",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Reconocimiento»?",
    "correct": "La jefatura felicita un trabajo destacado explicando sus logros",
    "wrong": [
      "Una supervisora destaca una atención excelente y da ejemplos",
      "Dos compañeros acuerdan responsabilidades con mediación",
      "Se ajusta la silla y la altura del monitor"
    ],
    "explanation": "Reconocimiento: valorar de manera justa un buen desempeño."
  },
  {
    "id": "X0067",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Qué concepto corresponde a esta definición? Comunicar conductas acertadas y cómo mantenerlas",
    "correct": "Realimentación positiva",
    "wrong": [
      "Resolución de conflictos",
      "Ergonomía",
      "Distribución del espacio"
    ],
    "explanation": "Realimentación positiva: comunicar conductas acertadas y cómo mantenerlas."
  },
  {
    "id": "X0068",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "Caso práctico: Una supervisora destaca una atención excelente y da ejemplos. ¿Qué concepto se aplica principalmente?",
    "correct": "Realimentación positiva",
    "wrong": [
      "Resolución de conflictos",
      "Ergonomía",
      "Distribución del espacio"
    ],
    "explanation": "El caso ejemplifica realimentación positiva: comunicar conductas acertadas y cómo mantenerlas."
  },
  {
    "id": "X0069",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Realimentación positiva»?",
    "correct": "Una supervisora destaca una atención excelente y da ejemplos",
    "wrong": [
      "Dos compañeros acuerdan responsabilidades con mediación",
      "Se ajusta la silla y la altura del monitor",
      "La oficina ubica archivos frecuentes cerca de atención"
    ],
    "explanation": "Realimentación positiva: comunicar conductas acertadas y cómo mantenerlas."
  },
  {
    "id": "X0070",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Qué concepto corresponde a esta definición? Dialogar para abordar desacuerdos de forma constructiva",
    "correct": "Resolución de conflictos",
    "wrong": [
      "Ergonomía",
      "Distribución del espacio",
      "Satisfacción laboral"
    ],
    "explanation": "Resolución de conflictos: dialogar para abordar desacuerdos de forma constructiva."
  },
  {
    "id": "X0071",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "Caso práctico: Dos compañeros acuerdan responsabilidades con mediación. ¿Qué concepto se aplica principalmente?",
    "correct": "Resolución de conflictos",
    "wrong": [
      "Ergonomía",
      "Distribución del espacio",
      "Satisfacción laboral"
    ],
    "explanation": "El caso ejemplifica resolución de conflictos: dialogar para abordar desacuerdos de forma constructiva."
  },
  {
    "id": "X0072",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Resolución de conflictos»?",
    "correct": "Dos compañeros acuerdan responsabilidades con mediación",
    "wrong": [
      "Se ajusta la silla y la altura del monitor",
      "La oficina ubica archivos frecuentes cerca de atención",
      "Una encuesta consulta bienestar y claridad de funciones"
    ],
    "explanation": "Resolución de conflictos: dialogar para abordar desacuerdos de forma constructiva."
  },
  {
    "id": "X0073",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Qué concepto corresponde a esta definición? Adaptar el puesto para favorecer comodidad y seguridad",
    "correct": "Ergonomía",
    "wrong": [
      "Distribución del espacio",
      "Satisfacción laboral",
      "Comunicación interna"
    ],
    "explanation": "Ergonomía: adaptar el puesto para favorecer comodidad y seguridad."
  },
  {
    "id": "X0074",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "Caso práctico: Se ajusta la silla y la altura del monitor. ¿Qué concepto se aplica principalmente?",
    "correct": "Ergonomía",
    "wrong": [
      "Distribución del espacio",
      "Satisfacción laboral",
      "Comunicación interna"
    ],
    "explanation": "El caso ejemplifica ergonomía: adaptar el puesto para favorecer comodidad y seguridad."
  },
  {
    "id": "X0075",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Ergonomía»?",
    "correct": "Se ajusta la silla y la altura del monitor",
    "wrong": [
      "La oficina ubica archivos frecuentes cerca de atención",
      "Una encuesta consulta bienestar y claridad de funciones",
      "El equipo hace reuniones breves sobre pendientes y prioridades"
    ],
    "explanation": "Ergonomía: adaptar el puesto para favorecer comodidad y seguridad."
  },
  {
    "id": "X0076",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Qué concepto corresponde a esta definición? Ordenar mobiliario según el flujo de trabajo",
    "correct": "Distribución del espacio",
    "wrong": [
      "Satisfacción laboral",
      "Comunicación interna",
      "Reconocimiento"
    ],
    "explanation": "Distribución del espacio: ordenar mobiliario según el flujo de trabajo."
  },
  {
    "id": "X0077",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "Caso práctico: La oficina ubica archivos frecuentes cerca de atención. ¿Qué concepto se aplica principalmente?",
    "correct": "Distribución del espacio",
    "wrong": [
      "Satisfacción laboral",
      "Comunicación interna",
      "Reconocimiento"
    ],
    "explanation": "El caso ejemplifica distribución del espacio: ordenar mobiliario según el flujo de trabajo."
  },
  {
    "id": "X0078",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Distribución del espacio»?",
    "correct": "La oficina ubica archivos frecuentes cerca de atención",
    "wrong": [
      "Una encuesta consulta bienestar y claridad de funciones",
      "El equipo hace reuniones breves sobre pendientes y prioridades",
      "La jefatura felicita un trabajo destacado explicando sus logros"
    ],
    "explanation": "Distribución del espacio: ordenar mobiliario según el flujo de trabajo."
  },
  {
    "id": "X0079",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Qué concepto corresponde a esta definición? Percepción favorable de las condiciones y tareas del puesto",
    "correct": "Satisfacción laboral",
    "wrong": [
      "Comunicación interna",
      "Reconocimiento",
      "Realimentación positiva"
    ],
    "explanation": "Satisfacción laboral: percepción favorable de las condiciones y tareas del puesto."
  },
  {
    "id": "X0080",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "Caso práctico: Una encuesta consulta bienestar y claridad de funciones. ¿Qué concepto se aplica principalmente?",
    "correct": "Satisfacción laboral",
    "wrong": [
      "Comunicación interna",
      "Reconocimiento",
      "Realimentación positiva"
    ],
    "explanation": "El caso ejemplifica satisfacción laboral: percepción favorable de las condiciones y tareas del puesto."
  },
  {
    "id": "X0081",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Satisfacción laboral»?",
    "correct": "Una encuesta consulta bienestar y claridad de funciones",
    "wrong": [
      "El equipo hace reuniones breves sobre pendientes y prioridades",
      "La jefatura felicita un trabajo destacado explicando sus logros",
      "Una supervisora destaca una atención excelente y da ejemplos"
    ],
    "explanation": "Satisfacción laboral: percepción favorable de las condiciones y tareas del puesto."
  },
  {
    "id": "X0082",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Qué concepto corresponde a esta definición? Compartir información clara entre colaboradores",
    "correct": "Comunicación interna",
    "wrong": [
      "Reconocimiento",
      "Realimentación positiva",
      "Resolución de conflictos"
    ],
    "explanation": "Comunicación interna: compartir información clara entre colaboradores."
  },
  {
    "id": "X0083",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "Caso práctico: El equipo hace reuniones breves sobre pendientes y prioridades. ¿Qué concepto se aplica principalmente?",
    "correct": "Comunicación interna",
    "wrong": [
      "Reconocimiento",
      "Realimentación positiva",
      "Resolución de conflictos"
    ],
    "explanation": "El caso ejemplifica comunicación interna: compartir información clara entre colaboradores."
  },
  {
    "id": "X0084",
    "unit": "Administración de Empresas",
    "topic": "Motivación y organización de la oficina",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Comunicación interna»?",
    "correct": "El equipo hace reuniones breves sobre pendientes y prioridades",
    "wrong": [
      "La jefatura felicita un trabajo destacado explicando sus logros",
      "Una supervisora destaca una atención excelente y da ejemplos",
      "Dos compañeros acuerdan responsabilidades con mediación"
    ],
    "explanation": "Comunicación interna: compartir información clara entre colaboradores."
  },
  {
    "id": "X0085",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Qué concepto corresponde a esta definición? Se desarrolla en el período diurno establecido por la legislación",
    "correct": "Jornada diurna",
    "wrong": [
      "Jornada nocturna",
      "Jornada mixta",
      "Jornada extraordinaria"
    ],
    "explanation": "Jornada diurna: se desarrolla en el período diurno establecido por la legislación."
  },
  {
    "id": "X0086",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "Caso práctico: Una persona trabaja regularmente de 8 a. m. a 4 p. m.. ¿Qué concepto se aplica principalmente?",
    "correct": "Jornada diurna",
    "wrong": [
      "Jornada nocturna",
      "Jornada mixta",
      "Jornada extraordinaria"
    ],
    "explanation": "El caso ejemplifica jornada diurna: se desarrolla en el período diurno establecido por la legislación."
  },
  {
    "id": "X0087",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Jornada diurna»?",
    "correct": "Una persona trabaja regularmente de 8 a. m. a 4 p. m.",
    "wrong": [
      "Un guarda trabaja regularmente durante la noche",
      "Una empleada inicia por la tarde y termina de noche",
      "Un empleado permanece trabajando horas adicionales autorizadas"
    ],
    "explanation": "Jornada diurna: se desarrolla en el período diurno establecido por la legislación."
  },
  {
    "id": "X0088",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Qué concepto corresponde a esta definición? Se desarrolla en el período nocturno legalmente definido",
    "correct": "Jornada nocturna",
    "wrong": [
      "Jornada mixta",
      "Jornada extraordinaria",
      "Jornada rotativa"
    ],
    "explanation": "Jornada nocturna: se desarrolla en el período nocturno legalmente definido."
  },
  {
    "id": "X0089",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "Caso práctico: Un guarda trabaja regularmente durante la noche. ¿Qué concepto se aplica principalmente?",
    "correct": "Jornada nocturna",
    "wrong": [
      "Jornada mixta",
      "Jornada extraordinaria",
      "Jornada rotativa"
    ],
    "explanation": "El caso ejemplifica jornada nocturna: se desarrolla en el período nocturno legalmente definido."
  },
  {
    "id": "X0090",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Jornada nocturna»?",
    "correct": "Un guarda trabaja regularmente durante la noche",
    "wrong": [
      "Una empleada inicia por la tarde y termina de noche",
      "Un empleado permanece trabajando horas adicionales autorizadas",
      "La plantilla alterna mañana, tarde y noche por semanas"
    ],
    "explanation": "Jornada nocturna: se desarrolla en el período nocturno legalmente definido."
  },
  {
    "id": "X0091",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Qué concepto corresponde a esta definición? Combina trabajo dentro de los períodos diurno y nocturno",
    "correct": "Jornada mixta",
    "wrong": [
      "Jornada extraordinaria",
      "Jornada rotativa",
      "Tarjeta reloj"
    ],
    "explanation": "Jornada mixta: combina trabajo dentro de los períodos diurno y nocturno."
  },
  {
    "id": "X0092",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "Caso práctico: Una empleada inicia por la tarde y termina de noche. ¿Qué concepto se aplica principalmente?",
    "correct": "Jornada mixta",
    "wrong": [
      "Jornada extraordinaria",
      "Jornada rotativa",
      "Tarjeta reloj"
    ],
    "explanation": "El caso ejemplifica jornada mixta: combina trabajo dentro de los períodos diurno y nocturno."
  },
  {
    "id": "X0093",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Jornada mixta»?",
    "correct": "Una empleada inicia por la tarde y termina de noche",
    "wrong": [
      "Un empleado permanece trabajando horas adicionales autorizadas",
      "La plantilla alterna mañana, tarde y noche por semanas",
      "El personal marca un dispositivo con tarjeta al ingresar"
    ],
    "explanation": "Jornada mixta: combina trabajo dentro de los períodos diurno y nocturno."
  },
  {
    "id": "X0094",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Qué concepto corresponde a esta definición? Tiempo laborado fuera de la jornada ordinaria correspondiente",
    "correct": "Jornada extraordinaria",
    "wrong": [
      "Jornada rotativa",
      "Tarjeta reloj",
      "Registro electrónico"
    ],
    "explanation": "Jornada extraordinaria: tiempo laborado fuera de la jornada ordinaria correspondiente."
  },
  {
    "id": "X0095",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "Caso práctico: Un empleado permanece trabajando horas adicionales autorizadas. ¿Qué concepto se aplica principalmente?",
    "correct": "Jornada extraordinaria",
    "wrong": [
      "Jornada rotativa",
      "Tarjeta reloj",
      "Registro electrónico"
    ],
    "explanation": "El caso ejemplifica jornada extraordinaria: tiempo laborado fuera de la jornada ordinaria correspondiente."
  },
  {
    "id": "X0096",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Jornada extraordinaria»?",
    "correct": "Un empleado permanece trabajando horas adicionales autorizadas",
    "wrong": [
      "La plantilla alterna mañana, tarde y noche por semanas",
      "El personal marca un dispositivo con tarjeta al ingresar",
      "Una empresa usa huella o aplicación para las marcaciones"
    ],
    "explanation": "Jornada extraordinaria: tiempo laborado fuera de la jornada ordinaria correspondiente."
  },
  {
    "id": "X0097",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Qué concepto corresponde a esta definición? Horarios o turnos cambian de manera programada",
    "correct": "Jornada rotativa",
    "wrong": [
      "Tarjeta reloj",
      "Registro electrónico",
      "Jornada diurna"
    ],
    "explanation": "Jornada rotativa: horarios o turnos cambian de manera programada."
  },
  {
    "id": "X0098",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "Caso práctico: La plantilla alterna mañana, tarde y noche por semanas. ¿Qué concepto se aplica principalmente?",
    "correct": "Jornada rotativa",
    "wrong": [
      "Tarjeta reloj",
      "Registro electrónico",
      "Jornada diurna"
    ],
    "explanation": "El caso ejemplifica jornada rotativa: horarios o turnos cambian de manera programada."
  },
  {
    "id": "X0099",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Jornada rotativa»?",
    "correct": "La plantilla alterna mañana, tarde y noche por semanas",
    "wrong": [
      "El personal marca un dispositivo con tarjeta al ingresar",
      "Una empresa usa huella o aplicación para las marcaciones",
      "Una persona trabaja regularmente de 8 a. m. a 4 p. m."
    ],
    "explanation": "Jornada rotativa: horarios o turnos cambian de manera programada."
  },
  {
    "id": "X0100",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Qué concepto corresponde a esta definición? Medio físico de registrar entradas y salidas",
    "correct": "Tarjeta reloj",
    "wrong": [
      "Registro electrónico",
      "Jornada diurna",
      "Jornada nocturna"
    ],
    "explanation": "Tarjeta reloj: medio físico de registrar entradas y salidas."
  },
  {
    "id": "X0101",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "Caso práctico: El personal marca un dispositivo con tarjeta al ingresar. ¿Qué concepto se aplica principalmente?",
    "correct": "Tarjeta reloj",
    "wrong": [
      "Registro electrónico",
      "Jornada diurna",
      "Jornada nocturna"
    ],
    "explanation": "El caso ejemplifica tarjeta reloj: medio físico de registrar entradas y salidas."
  },
  {
    "id": "X0102",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Tarjeta reloj»?",
    "correct": "El personal marca un dispositivo con tarjeta al ingresar",
    "wrong": [
      "Una empresa usa huella o aplicación para las marcaciones",
      "Una persona trabaja regularmente de 8 a. m. a 4 p. m.",
      "Un guarda trabaja regularmente durante la noche"
    ],
    "explanation": "Tarjeta reloj: medio físico de registrar entradas y salidas."
  },
  {
    "id": "X0103",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Qué concepto corresponde a esta definición? Sistema digital para registrar horas de asistencia",
    "correct": "Registro electrónico",
    "wrong": [
      "Jornada diurna",
      "Jornada nocturna",
      "Jornada mixta"
    ],
    "explanation": "Registro electrónico: sistema digital para registrar horas de asistencia."
  },
  {
    "id": "X0104",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "Caso práctico: Una empresa usa huella o aplicación para las marcaciones. ¿Qué concepto se aplica principalmente?",
    "correct": "Registro electrónico",
    "wrong": [
      "Jornada diurna",
      "Jornada nocturna",
      "Jornada mixta"
    ],
    "explanation": "El caso ejemplifica registro electrónico: sistema digital para registrar horas de asistencia."
  },
  {
    "id": "X0105",
    "unit": "Administración de Empresas",
    "topic": "Jornadas de trabajo y control del tiempo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Registro electrónico»?",
    "correct": "Una empresa usa huella o aplicación para las marcaciones",
    "wrong": [
      "Una persona trabaja regularmente de 8 a. m. a 4 p. m.",
      "Un guarda trabaja regularmente durante la noche",
      "Una empleada inicia por la tarde y termina de noche"
    ],
    "explanation": "Registro electrónico: sistema digital para registrar horas de asistencia."
  },
  {
    "id": "X0106",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Qué concepto corresponde a esta definición? Remuneración vinculada con la cantidad de piezas producidas",
    "correct": "Salario a destajo",
    "wrong": [
      "Salario por tiempo",
      "Comisión",
      "Salario bruto"
    ],
    "explanation": "Salario a destajo: remuneración vinculada con la cantidad de piezas producidas."
  },
  {
    "id": "X0107",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "Caso práctico: Una operaria recibe un monto por cada prenda terminada. ¿Qué concepto se aplica principalmente?",
    "correct": "Salario a destajo",
    "wrong": [
      "Salario por tiempo",
      "Comisión",
      "Salario bruto"
    ],
    "explanation": "El caso ejemplifica salario a destajo: remuneración vinculada con la cantidad de piezas producidas."
  },
  {
    "id": "X0108",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Salario a destajo»?",
    "correct": "Una operaria recibe un monto por cada prenda terminada",
    "wrong": [
      "Un auxiliar recibe una suma fija por cada mes laborado",
      "Una vendedora gana un porcentaje de sus ventas",
      "La planilla muestra el total previo a CCSS y otras retenciones"
    ],
    "explanation": "Salario a destajo: remuneración vinculada con la cantidad de piezas producidas."
  },
  {
    "id": "X0109",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Qué concepto corresponde a esta definición? Remuneración basada en horas, días o meses trabajados",
    "correct": "Salario por tiempo",
    "wrong": [
      "Comisión",
      "Salario bruto",
      "Salario neto"
    ],
    "explanation": "Salario por tiempo: remuneración basada en horas, días o meses trabajados."
  },
  {
    "id": "X0110",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "Caso práctico: Un auxiliar recibe una suma fija por cada mes laborado. ¿Qué concepto se aplica principalmente?",
    "correct": "Salario por tiempo",
    "wrong": [
      "Comisión",
      "Salario bruto",
      "Salario neto"
    ],
    "explanation": "El caso ejemplifica salario por tiempo: remuneración basada en horas, días o meses trabajados."
  },
  {
    "id": "X0111",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Salario por tiempo»?",
    "correct": "Un auxiliar recibe una suma fija por cada mes laborado",
    "wrong": [
      "Una vendedora gana un porcentaje de sus ventas",
      "La planilla muestra el total previo a CCSS y otras retenciones",
      "El depósito final es menor al salario bruto por rebajos"
    ],
    "explanation": "Salario por tiempo: remuneración basada en horas, días o meses trabajados."
  },
  {
    "id": "X0112",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Qué concepto corresponde a esta definición? Pago variable asociado con ventas u objetivos pactados",
    "correct": "Comisión",
    "wrong": [
      "Salario bruto",
      "Salario neto",
      "Aguinaldo"
    ],
    "explanation": "Comisión: pago variable asociado con ventas u objetivos pactados."
  },
  {
    "id": "X0113",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "Caso práctico: Una vendedora gana un porcentaje de sus ventas. ¿Qué concepto se aplica principalmente?",
    "correct": "Comisión",
    "wrong": [
      "Salario bruto",
      "Salario neto",
      "Aguinaldo"
    ],
    "explanation": "El caso ejemplifica comisión: pago variable asociado con ventas u objetivos pactados."
  },
  {
    "id": "X0114",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Comisión»?",
    "correct": "Una vendedora gana un porcentaje de sus ventas",
    "wrong": [
      "La planilla muestra el total previo a CCSS y otras retenciones",
      "El depósito final es menor al salario bruto por rebajos",
      "Al cierre del año se calcula un pago adicional según salarios recibidos"
    ],
    "explanation": "Comisión: pago variable asociado con ventas u objetivos pactados."
  },
  {
    "id": "X0115",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Qué concepto corresponde a esta definición? Monto devengado antes de aplicar deducciones",
    "correct": "Salario bruto",
    "wrong": [
      "Salario neto",
      "Aguinaldo",
      "Planilla"
    ],
    "explanation": "Salario bruto: monto devengado antes de aplicar deducciones."
  },
  {
    "id": "X0116",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "Caso práctico: La planilla muestra el total previo a CCSS y otras retenciones. ¿Qué concepto se aplica principalmente?",
    "correct": "Salario bruto",
    "wrong": [
      "Salario neto",
      "Aguinaldo",
      "Planilla"
    ],
    "explanation": "El caso ejemplifica salario bruto: monto devengado antes de aplicar deducciones."
  },
  {
    "id": "X0117",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Salario bruto»?",
    "correct": "La planilla muestra el total previo a CCSS y otras retenciones",
    "wrong": [
      "El depósito final es menor al salario bruto por rebajos",
      "Al cierre del año se calcula un pago adicional según salarios recibidos",
      "Contabilidad prepara montos, rebajos y netos por empleado"
    ],
    "explanation": "Salario bruto: monto devengado antes de aplicar deducciones."
  },
  {
    "id": "X0118",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Qué concepto corresponde a esta definición? Monto recibido luego de las deducciones correspondientes",
    "correct": "Salario neto",
    "wrong": [
      "Aguinaldo",
      "Planilla",
      "Salario a destajo"
    ],
    "explanation": "Salario neto: monto recibido luego de las deducciones correspondientes."
  },
  {
    "id": "X0119",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "Caso práctico: El depósito final es menor al salario bruto por rebajos. ¿Qué concepto se aplica principalmente?",
    "correct": "Salario neto",
    "wrong": [
      "Aguinaldo",
      "Planilla",
      "Salario a destajo"
    ],
    "explanation": "El caso ejemplifica salario neto: monto recibido luego de las deducciones correspondientes."
  },
  {
    "id": "X0120",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Salario neto»?",
    "correct": "El depósito final es menor al salario bruto por rebajos",
    "wrong": [
      "Al cierre del año se calcula un pago adicional según salarios recibidos",
      "Contabilidad prepara montos, rebajos y netos por empleado",
      "Una operaria recibe un monto por cada prenda terminada"
    ],
    "explanation": "Salario neto: monto recibido luego de las deducciones correspondientes."
  },
  {
    "id": "X0121",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Qué concepto corresponde a esta definición? Beneficio anual calculado a partir de remuneraciones del período aplicable",
    "correct": "Aguinaldo",
    "wrong": [
      "Planilla",
      "Salario a destajo",
      "Salario por tiempo"
    ],
    "explanation": "Aguinaldo: beneficio anual calculado a partir de remuneraciones del período aplicable."
  },
  {
    "id": "X0122",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "Caso práctico: Al cierre del año se calcula un pago adicional según salarios recibidos. ¿Qué concepto se aplica principalmente?",
    "correct": "Aguinaldo",
    "wrong": [
      "Planilla",
      "Salario a destajo",
      "Salario por tiempo"
    ],
    "explanation": "El caso ejemplifica aguinaldo: beneficio anual calculado a partir de remuneraciones del período aplicable."
  },
  {
    "id": "X0123",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Aguinaldo»?",
    "correct": "Al cierre del año se calcula un pago adicional según salarios recibidos",
    "wrong": [
      "Contabilidad prepara montos, rebajos y netos por empleado",
      "Una operaria recibe un monto por cada prenda terminada",
      "Un auxiliar recibe una suma fija por cada mes laborado"
    ],
    "explanation": "Aguinaldo: beneficio anual calculado a partir de remuneraciones del período aplicable."
  },
  {
    "id": "X0124",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Qué concepto corresponde a esta definición? Registro que reúne remuneraciones y deducciones del personal",
    "correct": "Planilla",
    "wrong": [
      "Salario a destajo",
      "Salario por tiempo",
      "Comisión"
    ],
    "explanation": "Planilla: registro que reúne remuneraciones y deducciones del personal."
  },
  {
    "id": "X0125",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "Caso práctico: Contabilidad prepara montos, rebajos y netos por empleado. ¿Qué concepto se aplica principalmente?",
    "correct": "Planilla",
    "wrong": [
      "Salario a destajo",
      "Salario por tiempo",
      "Comisión"
    ],
    "explanation": "El caso ejemplifica planilla: registro que reúne remuneraciones y deducciones del personal."
  },
  {
    "id": "X0126",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Planilla»?",
    "correct": "Contabilidad prepara montos, rebajos y netos por empleado",
    "wrong": [
      "Una operaria recibe un monto por cada prenda terminada",
      "Un auxiliar recibe una suma fija por cada mes laborado",
      "Una vendedora gana un porcentaje de sus ventas"
    ],
    "explanation": "Planilla: registro que reúne remuneraciones y deducciones del personal."
  },
  {
    "id": "X0127",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Qué concepto corresponde a esta definición? Persona o área dentro de la organización que recibe apoyo",
    "correct": "Cliente interno",
    "wrong": [
      "Cliente externo",
      "Escucha activa",
      "Lenguaje respetuoso"
    ],
    "explanation": "Cliente interno: persona o área dentro de la organización que recibe apoyo."
  },
  {
    "id": "X0128",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "Caso práctico: El equipo de ventas solicita información al de inventarios. ¿Qué concepto se aplica principalmente?",
    "correct": "Cliente interno",
    "wrong": [
      "Cliente externo",
      "Escucha activa",
      "Lenguaje respetuoso"
    ],
    "explanation": "El caso ejemplifica cliente interno: persona o área dentro de la organización que recibe apoyo."
  },
  {
    "id": "X0129",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Cliente interno»?",
    "correct": "El equipo de ventas solicita información al de inventarios",
    "wrong": [
      "Una persona visita un comercio para adquirir un producto",
      "Una asesora repite el problema planteado para verificarlo",
      "Se explica una política sin burlarse de la persona usuaria"
    ],
    "explanation": "Cliente interno: persona o área dentro de la organización que recibe apoyo."
  },
  {
    "id": "X0130",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Qué concepto corresponde a esta definición? Persona ajena a la empresa que compra o utiliza sus servicios",
    "correct": "Cliente externo",
    "wrong": [
      "Escucha activa",
      "Lenguaje respetuoso",
      "Presentación personal"
    ],
    "explanation": "Cliente externo: persona ajena a la empresa que compra o utiliza sus servicios."
  },
  {
    "id": "X0131",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "Caso práctico: Una persona visita un comercio para adquirir un producto. ¿Qué concepto se aplica principalmente?",
    "correct": "Cliente externo",
    "wrong": [
      "Escucha activa",
      "Lenguaje respetuoso",
      "Presentación personal"
    ],
    "explanation": "El caso ejemplifica cliente externo: persona ajena a la empresa que compra o utiliza sus servicios."
  },
  {
    "id": "X0132",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Cliente externo»?",
    "correct": "Una persona visita un comercio para adquirir un producto",
    "wrong": [
      "Una asesora repite el problema planteado para verificarlo",
      "Se explica una política sin burlarse de la persona usuaria",
      "Un recepcionista usa ropa limpia y mantiene postura adecuada"
    ],
    "explanation": "Cliente externo: persona ajena a la empresa que compra o utiliza sus servicios."
  },
  {
    "id": "X0133",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Qué concepto corresponde a esta definición? Atender y confirmar lo comprendido antes de responder",
    "correct": "Escucha activa",
    "wrong": [
      "Lenguaje respetuoso",
      "Presentación personal",
      "Ciclo del servicio"
    ],
    "explanation": "Escucha activa: atender y confirmar lo comprendido antes de responder."
  },
  {
    "id": "X0134",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "Caso práctico: Una asesora repite el problema planteado para verificarlo. ¿Qué concepto se aplica principalmente?",
    "correct": "Escucha activa",
    "wrong": [
      "Lenguaje respetuoso",
      "Presentación personal",
      "Ciclo del servicio"
    ],
    "explanation": "El caso ejemplifica escucha activa: atender y confirmar lo comprendido antes de responder."
  },
  {
    "id": "X0135",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Escucha activa»?",
    "correct": "Una asesora repite el problema planteado para verificarlo",
    "wrong": [
      "Se explica una política sin burlarse de la persona usuaria",
      "Un recepcionista usa ropa limpia y mantiene postura adecuada",
      "Se evalúa desde la consulta inicial hasta la posventa"
    ],
    "explanation": "Escucha activa: atender y confirmar lo comprendido antes de responder."
  },
  {
    "id": "X0136",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Qué concepto corresponde a esta definición? Comunicación clara y cortés libre de ofensas",
    "correct": "Lenguaje respetuoso",
    "wrong": [
      "Presentación personal",
      "Ciclo del servicio",
      "Manejo de quejas"
    ],
    "explanation": "Lenguaje respetuoso: comunicación clara y cortés libre de ofensas."
  },
  {
    "id": "X0137",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "Caso práctico: Se explica una política sin burlarse de la persona usuaria. ¿Qué concepto se aplica principalmente?",
    "correct": "Lenguaje respetuoso",
    "wrong": [
      "Presentación personal",
      "Ciclo del servicio",
      "Manejo de quejas"
    ],
    "explanation": "El caso ejemplifica lenguaje respetuoso: comunicación clara y cortés libre de ofensas."
  },
  {
    "id": "X0138",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Lenguaje respetuoso»?",
    "correct": "Se explica una política sin burlarse de la persona usuaria",
    "wrong": [
      "Un recepcionista usa ropa limpia y mantiene postura adecuada",
      "Se evalúa desde la consulta inicial hasta la posventa",
      "Un cliente reclama un producto y recibe seguimiento claro"
    ],
    "explanation": "Lenguaje respetuoso: comunicación clara y cortés libre de ofensas."
  },
  {
    "id": "X0139",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Qué concepto corresponde a esta definición? Cuidado apropiado de higiene, vestimenta y postura",
    "correct": "Presentación personal",
    "wrong": [
      "Ciclo del servicio",
      "Manejo de quejas",
      "Cliente interno"
    ],
    "explanation": "Presentación personal: cuidado apropiado de higiene, vestimenta y postura."
  },
  {
    "id": "X0140",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "Caso práctico: Un recepcionista usa ropa limpia y mantiene postura adecuada. ¿Qué concepto se aplica principalmente?",
    "correct": "Presentación personal",
    "wrong": [
      "Ciclo del servicio",
      "Manejo de quejas",
      "Cliente interno"
    ],
    "explanation": "El caso ejemplifica presentación personal: cuidado apropiado de higiene, vestimenta y postura."
  },
  {
    "id": "X0141",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Presentación personal»?",
    "correct": "Un recepcionista usa ropa limpia y mantiene postura adecuada",
    "wrong": [
      "Se evalúa desde la consulta inicial hasta la posventa",
      "Un cliente reclama un producto y recibe seguimiento claro",
      "El equipo de ventas solicita información al de inventarios"
    ],
    "explanation": "Presentación personal: cuidado apropiado de higiene, vestimenta y postura."
  },
  {
    "id": "X0142",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Qué concepto corresponde a esta definición? Conjunto de contactos del cliente con la organización",
    "correct": "Ciclo del servicio",
    "wrong": [
      "Manejo de quejas",
      "Cliente interno",
      "Cliente externo"
    ],
    "explanation": "Ciclo del servicio: conjunto de contactos del cliente con la organización."
  },
  {
    "id": "X0143",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "Caso práctico: Se evalúa desde la consulta inicial hasta la posventa. ¿Qué concepto se aplica principalmente?",
    "correct": "Ciclo del servicio",
    "wrong": [
      "Manejo de quejas",
      "Cliente interno",
      "Cliente externo"
    ],
    "explanation": "El caso ejemplifica ciclo del servicio: conjunto de contactos del cliente con la organización."
  },
  {
    "id": "X0144",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Ciclo del servicio»?",
    "correct": "Se evalúa desde la consulta inicial hasta la posventa",
    "wrong": [
      "Un cliente reclama un producto y recibe seguimiento claro",
      "El equipo de ventas solicita información al de inventarios",
      "Una persona visita un comercio para adquirir un producto"
    ],
    "explanation": "Ciclo del servicio: conjunto de contactos del cliente con la organización."
  },
  {
    "id": "X0145",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Qué concepto corresponde a esta definición? Escuchar, aclarar y buscar solución según procedimientos",
    "correct": "Manejo de quejas",
    "wrong": [
      "Cliente interno",
      "Cliente externo",
      "Escucha activa"
    ],
    "explanation": "Manejo de quejas: escuchar, aclarar y buscar solución según procedimientos."
  },
  {
    "id": "X0146",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "Caso práctico: Un cliente reclama un producto y recibe seguimiento claro. ¿Qué concepto se aplica principalmente?",
    "correct": "Manejo de quejas",
    "wrong": [
      "Cliente interno",
      "Cliente externo",
      "Escucha activa"
    ],
    "explanation": "El caso ejemplifica manejo de quejas: escuchar, aclarar y buscar solución según procedimientos."
  },
  {
    "id": "X0147",
    "unit": "Administración de Empresas",
    "topic": "Presentación personal y servicio al cliente",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Manejo de quejas»?",
    "correct": "Un cliente reclama un producto y recibe seguimiento claro",
    "wrong": [
      "El equipo de ventas solicita información al de inventarios",
      "Una persona visita un comercio para adquirir un producto",
      "Una asesora repite el problema planteado para verificarlo"
    ],
    "explanation": "Manejo de quejas: escuchar, aclarar y buscar solución según procedimientos."
  },
  {
    "id": "X0148",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Qué concepto corresponde a esta definición? Integrantes que coordinan tareas hacia una meta compartida",
    "correct": "Equipo de trabajo",
    "wrong": [
      "Grupo de personas",
      "Protocolo",
      "Etiqueta"
    ],
    "explanation": "Equipo de trabajo: integrantes que coordinan tareas hacia una meta compartida."
  },
  {
    "id": "X0149",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "Caso práctico: Tres compañeros distribuyen funciones para entregar un proyecto común. ¿Qué concepto se aplica principalmente?",
    "correct": "Equipo de trabajo",
    "wrong": [
      "Grupo de personas",
      "Protocolo",
      "Etiqueta"
    ],
    "explanation": "El caso ejemplifica equipo de trabajo: integrantes que coordinan tareas hacia una meta compartida."
  },
  {
    "id": "X0150",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Equipo de trabajo»?",
    "correct": "Tres compañeros distribuyen funciones para entregar un proyecto común",
    "wrong": [
      "Varias personas coinciden en una sala sin tarea conjunta",
      "Se sigue el orden previsto de presentación en un acto oficial",
      "Una anfitriona recibe con saludo cordial y presentación adecuada"
    ],
    "explanation": "Equipo de trabajo: integrantes que coordinan tareas hacia una meta compartida."
  },
  {
    "id": "X0151",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Qué concepto corresponde a esta definición? Conjunto de individuos que no necesariamente comparten una meta de trabajo",
    "correct": "Grupo de personas",
    "wrong": [
      "Protocolo",
      "Etiqueta",
      "Responsabilidad compartida"
    ],
    "explanation": "Grupo de personas: conjunto de individuos que no necesariamente comparten una meta de trabajo."
  },
  {
    "id": "X0152",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "Caso práctico: Varias personas coinciden en una sala sin tarea conjunta. ¿Qué concepto se aplica principalmente?",
    "correct": "Grupo de personas",
    "wrong": [
      "Protocolo",
      "Etiqueta",
      "Responsabilidad compartida"
    ],
    "explanation": "El caso ejemplifica grupo de personas: conjunto de individuos que no necesariamente comparten una meta de trabajo."
  },
  {
    "id": "X0153",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Grupo de personas»?",
    "correct": "Varias personas coinciden en una sala sin tarea conjunta",
    "wrong": [
      "Se sigue el orden previsto de presentación en un acto oficial",
      "Una anfitriona recibe con saludo cordial y presentación adecuada",
      "Cada miembro entrega a tiempo su parte del informe"
    ],
    "explanation": "Grupo de personas: conjunto de individuos que no necesariamente comparten una meta de trabajo."
  },
  {
    "id": "X0154",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Qué concepto corresponde a esta definición? Reglas y procedimientos formales para determinadas ocasiones",
    "correct": "Protocolo",
    "wrong": [
      "Etiqueta",
      "Responsabilidad compartida",
      "Comunicación de equipo"
    ],
    "explanation": "Protocolo: reglas y procedimientos formales para determinadas ocasiones."
  },
  {
    "id": "X0155",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "Caso práctico: Se sigue el orden previsto de presentación en un acto oficial. ¿Qué concepto se aplica principalmente?",
    "correct": "Protocolo",
    "wrong": [
      "Etiqueta",
      "Responsabilidad compartida",
      "Comunicación de equipo"
    ],
    "explanation": "El caso ejemplifica protocolo: reglas y procedimientos formales para determinadas ocasiones."
  },
  {
    "id": "X0156",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Protocolo»?",
    "correct": "Se sigue el orden previsto de presentación en un acto oficial",
    "wrong": [
      "Una anfitriona recibe con saludo cordial y presentación adecuada",
      "Cada miembro entrega a tiempo su parte del informe",
      "El equipo informa un retraso para reorganizar entregas"
    ],
    "explanation": "Protocolo: reglas y procedimientos formales para determinadas ocasiones."
  },
  {
    "id": "X0157",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Qué concepto corresponde a esta definición? Normas de comportamiento cortés en la interacción social",
    "correct": "Etiqueta",
    "wrong": [
      "Responsabilidad compartida",
      "Comunicación de equipo",
      "Colaboración"
    ],
    "explanation": "Etiqueta: normas de comportamiento cortés en la interacción social."
  },
  {
    "id": "X0158",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "Caso práctico: Una anfitriona recibe con saludo cordial y presentación adecuada. ¿Qué concepto se aplica principalmente?",
    "correct": "Etiqueta",
    "wrong": [
      "Responsabilidad compartida",
      "Comunicación de equipo",
      "Colaboración"
    ],
    "explanation": "El caso ejemplifica etiqueta: normas de comportamiento cortés en la interacción social."
  },
  {
    "id": "X0159",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Etiqueta»?",
    "correct": "Una anfitriona recibe con saludo cordial y presentación adecuada",
    "wrong": [
      "Cada miembro entrega a tiempo su parte del informe",
      "El equipo informa un retraso para reorganizar entregas",
      "Una compañera apoya la revisión final sin dejar su responsabilidad"
    ],
    "explanation": "Etiqueta: normas de comportamiento cortés en la interacción social."
  },
  {
    "id": "X0160",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Qué concepto corresponde a esta definición? Cumplir compromisos propios que afectan al resultado colectivo",
    "correct": "Responsabilidad compartida",
    "wrong": [
      "Comunicación de equipo",
      "Colaboración",
      "Equipo de trabajo"
    ],
    "explanation": "Responsabilidad compartida: cumplir compromisos propios que afectan al resultado colectivo."
  },
  {
    "id": "X0161",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "Caso práctico: Cada miembro entrega a tiempo su parte del informe. ¿Qué concepto se aplica principalmente?",
    "correct": "Responsabilidad compartida",
    "wrong": [
      "Comunicación de equipo",
      "Colaboración",
      "Equipo de trabajo"
    ],
    "explanation": "El caso ejemplifica responsabilidad compartida: cumplir compromisos propios que afectan al resultado colectivo."
  },
  {
    "id": "X0162",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Responsabilidad compartida»?",
    "correct": "Cada miembro entrega a tiempo su parte del informe",
    "wrong": [
      "El equipo informa un retraso para reorganizar entregas",
      "Una compañera apoya la revisión final sin dejar su responsabilidad",
      "Tres compañeros distribuyen funciones para entregar un proyecto común"
    ],
    "explanation": "Responsabilidad compartida: cumplir compromisos propios que afectan al resultado colectivo."
  },
  {
    "id": "X0163",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Qué concepto corresponde a esta definición? Transmitir avances, dudas y acuerdos oportunamente",
    "correct": "Comunicación de equipo",
    "wrong": [
      "Colaboración",
      "Equipo de trabajo",
      "Grupo de personas"
    ],
    "explanation": "Comunicación de equipo: transmitir avances, dudas y acuerdos oportunamente."
  },
  {
    "id": "X0164",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "Caso práctico: El equipo informa un retraso para reorganizar entregas. ¿Qué concepto se aplica principalmente?",
    "correct": "Comunicación de equipo",
    "wrong": [
      "Colaboración",
      "Equipo de trabajo",
      "Grupo de personas"
    ],
    "explanation": "El caso ejemplifica comunicación de equipo: transmitir avances, dudas y acuerdos oportunamente."
  },
  {
    "id": "X0165",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Comunicación de equipo»?",
    "correct": "El equipo informa un retraso para reorganizar entregas",
    "wrong": [
      "Una compañera apoya la revisión final sin dejar su responsabilidad",
      "Tres compañeros distribuyen funciones para entregar un proyecto común",
      "Varias personas coinciden en una sala sin tarea conjunta"
    ],
    "explanation": "Comunicación de equipo: transmitir avances, dudas y acuerdos oportunamente."
  },
  {
    "id": "X0166",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Qué concepto corresponde a esta definición? Ayudar y coordinar esfuerzos para resolver una tarea",
    "correct": "Colaboración",
    "wrong": [
      "Equipo de trabajo",
      "Grupo de personas",
      "Protocolo"
    ],
    "explanation": "Colaboración: ayudar y coordinar esfuerzos para resolver una tarea."
  },
  {
    "id": "X0167",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "Caso práctico: Una compañera apoya la revisión final sin dejar su responsabilidad. ¿Qué concepto se aplica principalmente?",
    "correct": "Colaboración",
    "wrong": [
      "Equipo de trabajo",
      "Grupo de personas",
      "Protocolo"
    ],
    "explanation": "El caso ejemplifica colaboración: ayudar y coordinar esfuerzos para resolver una tarea."
  },
  {
    "id": "X0168",
    "unit": "Administración de Empresas",
    "topic": "Trabajo en equipo y protocolo",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Colaboración»?",
    "correct": "Una compañera apoya la revisión final sin dejar su responsabilidad",
    "wrong": [
      "Tres compañeros distribuyen funciones para entregar un proyecto común",
      "Varias personas coinciden en una sala sin tarea conjunta",
      "Se sigue el orden previsto de presentación en un acto oficial"
    ],
    "explanation": "Colaboración: ayudar y coordinar esfuerzos para resolver una tarea."
  },
  {
    "id": "X0169",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Qué concepto corresponde a esta definición? Peligro asociado con ruido, temperatura o condiciones físicas",
    "correct": "Riesgo físico",
    "wrong": [
      "Riesgo químico",
      "Accidente de trabajo",
      "Enfermedad del trabajo"
    ],
    "explanation": "Riesgo físico: peligro asociado con ruido, temperatura o condiciones físicas."
  },
  {
    "id": "X0170",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "Caso práctico: Una máquina genera ruido excesivo durante la jornada. ¿Qué concepto se aplica principalmente?",
    "correct": "Riesgo físico",
    "wrong": [
      "Riesgo químico",
      "Accidente de trabajo",
      "Enfermedad del trabajo"
    ],
    "explanation": "El caso ejemplifica riesgo físico: peligro asociado con ruido, temperatura o condiciones físicas."
  },
  {
    "id": "X0171",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Riesgo físico»?",
    "correct": "Una máquina genera ruido excesivo durante la jornada",
    "wrong": [
      "Se manipula un limpiador fuerte sin medidas adecuadas",
      "Una persona resbala en piso mojado durante el trabajo",
      "Una exposición prolongada origina una dolencia ocupacional"
    ],
    "explanation": "Riesgo físico: peligro asociado con ruido, temperatura o condiciones físicas."
  },
  {
    "id": "X0172",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Qué concepto corresponde a esta definición? Peligro derivado de exposición a sustancias",
    "correct": "Riesgo químico",
    "wrong": [
      "Accidente de trabajo",
      "Enfermedad del trabajo",
      "Prevención"
    ],
    "explanation": "Riesgo químico: peligro derivado de exposición a sustancias."
  },
  {
    "id": "X0173",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "Caso práctico: Se manipula un limpiador fuerte sin medidas adecuadas. ¿Qué concepto se aplica principalmente?",
    "correct": "Riesgo químico",
    "wrong": [
      "Accidente de trabajo",
      "Enfermedad del trabajo",
      "Prevención"
    ],
    "explanation": "El caso ejemplifica riesgo químico: peligro derivado de exposición a sustancias."
  },
  {
    "id": "X0174",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Riesgo químico»?",
    "correct": "Se manipula un limpiador fuerte sin medidas adecuadas",
    "wrong": [
      "Una persona resbala en piso mojado durante el trabajo",
      "Una exposición prolongada origina una dolencia ocupacional",
      "Se señaliza un piso húmedo y se capacita al personal"
    ],
    "explanation": "Riesgo químico: peligro derivado de exposición a sustancias."
  },
  {
    "id": "X0175",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Qué concepto corresponde a esta definición? Suceso que provoca una lesión relacionada con labores",
    "correct": "Accidente de trabajo",
    "wrong": [
      "Enfermedad del trabajo",
      "Prevención",
      "Equipo de protección personal"
    ],
    "explanation": "Accidente de trabajo: suceso que provoca una lesión relacionada con labores."
  },
  {
    "id": "X0176",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "Caso práctico: Una persona resbala en piso mojado durante el trabajo. ¿Qué concepto se aplica principalmente?",
    "correct": "Accidente de trabajo",
    "wrong": [
      "Enfermedad del trabajo",
      "Prevención",
      "Equipo de protección personal"
    ],
    "explanation": "El caso ejemplifica accidente de trabajo: suceso que provoca una lesión relacionada con labores."
  },
  {
    "id": "X0177",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Accidente de trabajo»?",
    "correct": "Una persona resbala en piso mojado durante el trabajo",
    "wrong": [
      "Una exposición prolongada origina una dolencia ocupacional",
      "Se señaliza un piso húmedo y se capacita al personal",
      "Una persona usa protección ocular ante salpicaduras"
    ],
    "explanation": "Accidente de trabajo: suceso que provoca una lesión relacionada con labores."
  },
  {
    "id": "X0178",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Qué concepto corresponde a esta definición? Afección relacionada con exposición o condiciones laborales",
    "correct": "Enfermedad del trabajo",
    "wrong": [
      "Prevención",
      "Equipo de protección personal",
      "Carga de trabajo"
    ],
    "explanation": "Enfermedad del trabajo: afección relacionada con exposición o condiciones laborales."
  },
  {
    "id": "X0179",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "Caso práctico: Una exposición prolongada origina una dolencia ocupacional. ¿Qué concepto se aplica principalmente?",
    "correct": "Enfermedad del trabajo",
    "wrong": [
      "Prevención",
      "Equipo de protección personal",
      "Carga de trabajo"
    ],
    "explanation": "El caso ejemplifica enfermedad del trabajo: afección relacionada con exposición o condiciones laborales."
  },
  {
    "id": "X0180",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Enfermedad del trabajo»?",
    "correct": "Una exposición prolongada origina una dolencia ocupacional",
    "wrong": [
      "Se señaliza un piso húmedo y se capacita al personal",
      "Una persona usa protección ocular ante salpicaduras",
      "Un puesto exige levantar cajas continuamente sin pausas"
    ],
    "explanation": "Enfermedad del trabajo: afección relacionada con exposición o condiciones laborales."
  },
  {
    "id": "X0181",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Qué concepto corresponde a esta definición? Adoptar medidas antes de que ocurran daños",
    "correct": "Prevención",
    "wrong": [
      "Equipo de protección personal",
      "Carga de trabajo",
      "Riesgo físico"
    ],
    "explanation": "Prevención: adoptar medidas antes de que ocurran daños."
  },
  {
    "id": "X0182",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "Caso práctico: Se señaliza un piso húmedo y se capacita al personal. ¿Qué concepto se aplica principalmente?",
    "correct": "Prevención",
    "wrong": [
      "Equipo de protección personal",
      "Carga de trabajo",
      "Riesgo físico"
    ],
    "explanation": "El caso ejemplifica prevención: adoptar medidas antes de que ocurran daños."
  },
  {
    "id": "X0183",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Prevención»?",
    "correct": "Se señaliza un piso húmedo y se capacita al personal",
    "wrong": [
      "Una persona usa protección ocular ante salpicaduras",
      "Un puesto exige levantar cajas continuamente sin pausas",
      "Una máquina genera ruido excesivo durante la jornada"
    ],
    "explanation": "Prevención: adoptar medidas antes de que ocurran daños."
  },
  {
    "id": "X0184",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Qué concepto corresponde a esta definición? Implementos para reducir exposición a peligros",
    "correct": "Equipo de protección personal",
    "wrong": [
      "Carga de trabajo",
      "Riesgo físico",
      "Riesgo químico"
    ],
    "explanation": "Equipo de protección personal: implementos para reducir exposición a peligros."
  },
  {
    "id": "X0185",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "Caso práctico: Una persona usa protección ocular ante salpicaduras. ¿Qué concepto se aplica principalmente?",
    "correct": "Equipo de protección personal",
    "wrong": [
      "Carga de trabajo",
      "Riesgo físico",
      "Riesgo químico"
    ],
    "explanation": "El caso ejemplifica equipo de protección personal: implementos para reducir exposición a peligros."
  },
  {
    "id": "X0186",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Equipo de protección personal»?",
    "correct": "Una persona usa protección ocular ante salpicaduras",
    "wrong": [
      "Un puesto exige levantar cajas continuamente sin pausas",
      "Una máquina genera ruido excesivo durante la jornada",
      "Se manipula un limpiador fuerte sin medidas adecuadas"
    ],
    "explanation": "Equipo de protección personal: implementos para reducir exposición a peligros."
  },
  {
    "id": "X0187",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Qué concepto corresponde a esta definición? Demandas físicas o mentales de las tareas",
    "correct": "Carga de trabajo",
    "wrong": [
      "Riesgo físico",
      "Riesgo químico",
      "Accidente de trabajo"
    ],
    "explanation": "Carga de trabajo: demandas físicas o mentales de las tareas."
  },
  {
    "id": "X0188",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "Caso práctico: Un puesto exige levantar cajas continuamente sin pausas. ¿Qué concepto se aplica principalmente?",
    "correct": "Carga de trabajo",
    "wrong": [
      "Riesgo físico",
      "Riesgo químico",
      "Accidente de trabajo"
    ],
    "explanation": "El caso ejemplifica carga de trabajo: demandas físicas o mentales de las tareas."
  },
  {
    "id": "X0189",
    "unit": "Administración de Empresas",
    "topic": "Salud ocupacional",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Carga de trabajo»?",
    "correct": "Un puesto exige levantar cajas continuamente sin pausas",
    "wrong": [
      "Una máquina genera ruido excesivo durante la jornada",
      "Se manipula un limpiador fuerte sin medidas adecuadas",
      "Una persona resbala en piso mojado durante el trabajo"
    ],
    "explanation": "Carga de trabajo: demandas físicas o mentales de las tareas."
  },
  {
    "id": "X0190",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Qué concepto corresponde a esta definición? Cumplimiento de requisitos y satisfacción de necesidades del cliente",
    "correct": "Calidad",
    "wrong": [
      "Cliente interno",
      "Cliente externo",
      "Ética empresarial"
    ],
    "explanation": "Calidad: cumplimiento de requisitos y satisfacción de necesidades del cliente."
  },
  {
    "id": "X0191",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "Caso práctico: Un servicio entrega lo prometido de forma consistente. ¿Qué concepto se aplica principalmente?",
    "correct": "Calidad",
    "wrong": [
      "Cliente interno",
      "Cliente externo",
      "Ética empresarial"
    ],
    "explanation": "El caso ejemplifica calidad: cumplimiento de requisitos y satisfacción de necesidades del cliente."
  },
  {
    "id": "X0192",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Calidad»?",
    "correct": "Un servicio entrega lo prometido de forma consistente",
    "wrong": [
      "Producción entrega datos completos a logística",
      "Un consumidor adquiere un electrodoméstico",
      "Una empresa comunica un error de cobro y lo corrige"
    ],
    "explanation": "Calidad: cumplimiento de requisitos y satisfacción de necesidades del cliente."
  },
  {
    "id": "X0193",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Qué concepto corresponde a esta definición? Área o persona de la empresa que recibe el resultado de otra",
    "correct": "Cliente interno",
    "wrong": [
      "Cliente externo",
      "Ética empresarial",
      "Conflicto de intereses"
    ],
    "explanation": "Cliente interno: área o persona de la empresa que recibe el resultado de otra."
  },
  {
    "id": "X0194",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "Caso práctico: Producción entrega datos completos a logística. ¿Qué concepto se aplica principalmente?",
    "correct": "Cliente interno",
    "wrong": [
      "Cliente externo",
      "Ética empresarial",
      "Conflicto de intereses"
    ],
    "explanation": "El caso ejemplifica cliente interno: área o persona de la empresa que recibe el resultado de otra."
  },
  {
    "id": "X0195",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Cliente interno»?",
    "correct": "Producción entrega datos completos a logística",
    "wrong": [
      "Un consumidor adquiere un electrodoméstico",
      "Una empresa comunica un error de cobro y lo corrige",
      "Un encargado favorece la oferta de un familiar sin evaluarla"
    ],
    "explanation": "Cliente interno: área o persona de la empresa que recibe el resultado de otra."
  },
  {
    "id": "X0196",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Qué concepto corresponde a esta definición? Persona compradora o usuaria final fuera de la organización",
    "correct": "Cliente externo",
    "wrong": [
      "Ética empresarial",
      "Conflicto de intereses",
      "Mejora continua"
    ],
    "explanation": "Cliente externo: persona compradora o usuaria final fuera de la organización."
  },
  {
    "id": "X0197",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "Caso práctico: Un consumidor adquiere un electrodoméstico. ¿Qué concepto se aplica principalmente?",
    "correct": "Cliente externo",
    "wrong": [
      "Ética empresarial",
      "Conflicto de intereses",
      "Mejora continua"
    ],
    "explanation": "El caso ejemplifica cliente externo: persona compradora o usuaria final fuera de la organización."
  },
  {
    "id": "X0198",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Cliente externo»?",
    "correct": "Un consumidor adquiere un electrodoméstico",
    "wrong": [
      "Una empresa comunica un error de cobro y lo corrige",
      "Un encargado favorece la oferta de un familiar sin evaluarla",
      "Se analizan reclamos mensuales y se corrige su causa"
    ],
    "explanation": "Cliente externo: persona compradora o usuaria final fuera de la organización."
  },
  {
    "id": "X0199",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Qué concepto corresponde a esta definición? Decidir y actuar con principios y responsabilidad",
    "correct": "Ética empresarial",
    "wrong": [
      "Conflicto de intereses",
      "Mejora continua",
      "Trabajo bien hecho"
    ],
    "explanation": "Ética empresarial: decidir y actuar con principios y responsabilidad."
  },
  {
    "id": "X0200",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "Caso práctico: Una empresa comunica un error de cobro y lo corrige. ¿Qué concepto se aplica principalmente?",
    "correct": "Ética empresarial",
    "wrong": [
      "Conflicto de intereses",
      "Mejora continua",
      "Trabajo bien hecho"
    ],
    "explanation": "El caso ejemplifica ética empresarial: decidir y actuar con principios y responsabilidad."
  },
  {
    "id": "X0201",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Ética empresarial»?",
    "correct": "Una empresa comunica un error de cobro y lo corrige",
    "wrong": [
      "Un encargado favorece la oferta de un familiar sin evaluarla",
      "Se analizan reclamos mensuales y se corrige su causa",
      "Un colaborador verifica un pedido antes de despacharlo"
    ],
    "explanation": "Ética empresarial: decidir y actuar con principios y responsabilidad."
  },
  {
    "id": "X0202",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Qué concepto corresponde a esta definición? Interés personal que puede afectar la imparcialidad",
    "correct": "Conflicto de intereses",
    "wrong": [
      "Mejora continua",
      "Trabajo bien hecho",
      "Calidad"
    ],
    "explanation": "Conflicto de intereses: interés personal que puede afectar la imparcialidad."
  },
  {
    "id": "X0203",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "Caso práctico: Un encargado favorece la oferta de un familiar sin evaluarla. ¿Qué concepto se aplica principalmente?",
    "correct": "Conflicto de intereses",
    "wrong": [
      "Mejora continua",
      "Trabajo bien hecho",
      "Calidad"
    ],
    "explanation": "El caso ejemplifica conflicto de intereses: interés personal que puede afectar la imparcialidad."
  },
  {
    "id": "X0204",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Conflicto de intereses»?",
    "correct": "Un encargado favorece la oferta de un familiar sin evaluarla",
    "wrong": [
      "Se analizan reclamos mensuales y se corrige su causa",
      "Un colaborador verifica un pedido antes de despacharlo",
      "Un servicio entrega lo prometido de forma consistente"
    ],
    "explanation": "Conflicto de intereses: interés personal que puede afectar la imparcialidad."
  },
  {
    "id": "X0205",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Qué concepto corresponde a esta definición? Revisar procesos para reducir errores y mejorar resultados",
    "correct": "Mejora continua",
    "wrong": [
      "Trabajo bien hecho",
      "Calidad",
      "Cliente interno"
    ],
    "explanation": "Mejora continua: revisar procesos para reducir errores y mejorar resultados."
  },
  {
    "id": "X0206",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "Caso práctico: Se analizan reclamos mensuales y se corrige su causa. ¿Qué concepto se aplica principalmente?",
    "correct": "Mejora continua",
    "wrong": [
      "Trabajo bien hecho",
      "Calidad",
      "Cliente interno"
    ],
    "explanation": "El caso ejemplifica mejora continua: revisar procesos para reducir errores y mejorar resultados."
  },
  {
    "id": "X0207",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Mejora continua»?",
    "correct": "Se analizan reclamos mensuales y se corrige su causa",
    "wrong": [
      "Un colaborador verifica un pedido antes de despacharlo",
      "Un servicio entrega lo prometido de forma consistente",
      "Producción entrega datos completos a logística"
    ],
    "explanation": "Mejora continua: revisar procesos para reducir errores y mejorar resultados."
  },
  {
    "id": "X0208",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Qué concepto corresponde a esta definición? Realizar tareas con precisión, cuidado y compromiso",
    "correct": "Trabajo bien hecho",
    "wrong": [
      "Calidad",
      "Cliente interno",
      "Cliente externo"
    ],
    "explanation": "Trabajo bien hecho: realizar tareas con precisión, cuidado y compromiso."
  },
  {
    "id": "X0209",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "Caso práctico: Un colaborador verifica un pedido antes de despacharlo. ¿Qué concepto se aplica principalmente?",
    "correct": "Trabajo bien hecho",
    "wrong": [
      "Calidad",
      "Cliente interno",
      "Cliente externo"
    ],
    "explanation": "El caso ejemplifica trabajo bien hecho: realizar tareas con precisión, cuidado y compromiso."
  },
  {
    "id": "X0210",
    "unit": "Administración de Empresas",
    "topic": "Cultura de la calidad y ética",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Trabajo bien hecho»?",
    "correct": "Un colaborador verifica un pedido antes de despacharlo",
    "wrong": [
      "Un servicio entrega lo prometido de forma consistente",
      "Producción entrega datos completos a logística",
      "Un consumidor adquiere un electrodoméstico"
    ],
    "explanation": "Trabajo bien hecho: realizar tareas con precisión, cuidado y compromiso."
  },
  {
    "id": "X0211",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Qué concepto corresponde a esta definición? Bien o servicio ofrecido para satisfacer necesidades",
    "correct": "Producto",
    "wrong": [
      "Precio",
      "Plaza",
      "Promoción"
    ],
    "explanation": "Producto: bien o servicio ofrecido para satisfacer necesidades."
  },
  {
    "id": "X0212",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "Caso práctico: Una tienda diseña una nueva línea de bolsos. ¿Qué concepto se aplica principalmente?",
    "correct": "Producto",
    "wrong": [
      "Precio",
      "Plaza",
      "Promoción"
    ],
    "explanation": "El caso ejemplifica producto: bien o servicio ofrecido para satisfacer necesidades."
  },
  {
    "id": "X0213",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Producto»?",
    "correct": "Una tienda diseña una nueva línea de bolsos",
    "wrong": [
      "El negocio define cuánto cobrará por cada bolso",
      "Una empresa distribuye por tiendas y plataforma digital",
      "Una marca anuncia su lanzamiento en redes sociales"
    ],
    "explanation": "Producto: bien o servicio ofrecido para satisfacer necesidades."
  },
  {
    "id": "X0214",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Qué concepto corresponde a esta definición? Monto que el cliente paga por el producto",
    "correct": "Precio",
    "wrong": [
      "Plaza",
      "Promoción",
      "Segmentación"
    ],
    "explanation": "Precio: monto que el cliente paga por el producto."
  },
  {
    "id": "X0215",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "Caso práctico: El negocio define cuánto cobrará por cada bolso. ¿Qué concepto se aplica principalmente?",
    "correct": "Precio",
    "wrong": [
      "Plaza",
      "Promoción",
      "Segmentación"
    ],
    "explanation": "El caso ejemplifica precio: monto que el cliente paga por el producto."
  },
  {
    "id": "X0216",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Precio»?",
    "correct": "El negocio define cuánto cobrará por cada bolso",
    "wrong": [
      "Una empresa distribuye por tiendas y plataforma digital",
      "Una marca anuncia su lanzamiento en redes sociales",
      "Un comercio distingue compradores según hábitos de consumo"
    ],
    "explanation": "Precio: monto que el cliente paga por el producto."
  },
  {
    "id": "X0217",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Qué concepto corresponde a esta definición? Canales y puntos donde el producto llega al consumidor",
    "correct": "Plaza",
    "wrong": [
      "Promoción",
      "Segmentación",
      "Ciclo de vida del producto"
    ],
    "explanation": "Plaza: canales y puntos donde el producto llega al consumidor."
  },
  {
    "id": "X0218",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "Caso práctico: Una empresa distribuye por tiendas y plataforma digital. ¿Qué concepto se aplica principalmente?",
    "correct": "Plaza",
    "wrong": [
      "Promoción",
      "Segmentación",
      "Ciclo de vida del producto"
    ],
    "explanation": "El caso ejemplifica plaza: canales y puntos donde el producto llega al consumidor."
  },
  {
    "id": "X0219",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Plaza»?",
    "correct": "Una empresa distribuye por tiendas y plataforma digital",
    "wrong": [
      "Una marca anuncia su lanzamiento en redes sociales",
      "Un comercio distingue compradores según hábitos de consumo",
      "Las ventas se estabilizan tras años de crecimiento"
    ],
    "explanation": "Plaza: canales y puntos donde el producto llega al consumidor."
  },
  {
    "id": "X0220",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Qué concepto corresponde a esta definición? Comunicación destinada a informar y estimular la demanda",
    "correct": "Promoción",
    "wrong": [
      "Segmentación",
      "Ciclo de vida del producto",
      "Margen de ganancia"
    ],
    "explanation": "Promoción: comunicación destinada a informar y estimular la demanda."
  },
  {
    "id": "X0221",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "Caso práctico: Una marca anuncia su lanzamiento en redes sociales. ¿Qué concepto se aplica principalmente?",
    "correct": "Promoción",
    "wrong": [
      "Segmentación",
      "Ciclo de vida del producto",
      "Margen de ganancia"
    ],
    "explanation": "El caso ejemplifica promoción: comunicación destinada a informar y estimular la demanda."
  },
  {
    "id": "X0222",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Promoción»?",
    "correct": "Una marca anuncia su lanzamiento en redes sociales",
    "wrong": [
      "Un comercio distingue compradores según hábitos de consumo",
      "Las ventas se estabilizan tras años de crecimiento",
      "La empresa evalúa qué parte del precio corresponde a utilidad"
    ],
    "explanation": "Promoción: comunicación destinada a informar y estimular la demanda."
  },
  {
    "id": "X0223",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Qué concepto corresponde a esta definición? Dividir el mercado en grupos con características compartidas",
    "correct": "Segmentación",
    "wrong": [
      "Ciclo de vida del producto",
      "Margen de ganancia",
      "Producto"
    ],
    "explanation": "Segmentación: dividir el mercado en grupos con características compartidas."
  },
  {
    "id": "X0224",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "Caso práctico: Un comercio distingue compradores según hábitos de consumo. ¿Qué concepto se aplica principalmente?",
    "correct": "Segmentación",
    "wrong": [
      "Ciclo de vida del producto",
      "Margen de ganancia",
      "Producto"
    ],
    "explanation": "El caso ejemplifica segmentación: dividir el mercado en grupos con características compartidas."
  },
  {
    "id": "X0225",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Segmentación»?",
    "correct": "Un comercio distingue compradores según hábitos de consumo",
    "wrong": [
      "Las ventas se estabilizan tras años de crecimiento",
      "La empresa evalúa qué parte del precio corresponde a utilidad",
      "Una tienda diseña una nueva línea de bolsos"
    ],
    "explanation": "Segmentación: dividir el mercado en grupos con características compartidas."
  },
  {
    "id": "X0226",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Qué concepto corresponde a esta definición? Etapas de introducción, crecimiento, madurez y declive",
    "correct": "Ciclo de vida del producto",
    "wrong": [
      "Margen de ganancia",
      "Producto",
      "Precio"
    ],
    "explanation": "Ciclo de vida del producto: etapas de introducción, crecimiento, madurez y declive."
  },
  {
    "id": "X0227",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "Caso práctico: Las ventas se estabilizan tras años de crecimiento. ¿Qué concepto se aplica principalmente?",
    "correct": "Ciclo de vida del producto",
    "wrong": [
      "Margen de ganancia",
      "Producto",
      "Precio"
    ],
    "explanation": "El caso ejemplifica ciclo de vida del producto: etapas de introducción, crecimiento, madurez y declive."
  },
  {
    "id": "X0228",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Ciclo de vida del producto»?",
    "correct": "Las ventas se estabilizan tras años de crecimiento",
    "wrong": [
      "La empresa evalúa qué parte del precio corresponde a utilidad",
      "Una tienda diseña una nueva línea de bolsos",
      "El negocio define cuánto cobrará por cada bolso"
    ],
    "explanation": "Ciclo de vida del producto: etapas de introducción, crecimiento, madurez y declive."
  },
  {
    "id": "X0229",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Qué concepto corresponde a esta definición? Relación entre la ganancia y una base de valor determinada",
    "correct": "Margen de ganancia",
    "wrong": [
      "Producto",
      "Precio",
      "Plaza"
    ],
    "explanation": "Margen de ganancia: relación entre la ganancia y una base de valor determinada."
  },
  {
    "id": "X0230",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "Caso práctico: La empresa evalúa qué parte del precio corresponde a utilidad. ¿Qué concepto se aplica principalmente?",
    "correct": "Margen de ganancia",
    "wrong": [
      "Producto",
      "Precio",
      "Plaza"
    ],
    "explanation": "El caso ejemplifica margen de ganancia: relación entre la ganancia y una base de valor determinada."
  },
  {
    "id": "X0231",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Margen de ganancia»?",
    "correct": "La empresa evalúa qué parte del precio corresponde a utilidad",
    "wrong": [
      "Una tienda diseña una nueva línea de bolsos",
      "El negocio define cuánto cobrará por cada bolso",
      "Una empresa distribuye por tiendas y plataforma digital"
    ],
    "explanation": "Margen de ganancia: relación entre la ganancia y una base de valor determinada."
  },
  {
    "id": "X0232",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Qué concepto corresponde a esta definición? Conjunto completo de elementos objeto del estudio",
    "correct": "Población",
    "wrong": [
      "Muestra",
      "Unidad estadística",
      "Fuente primaria"
    ],
    "explanation": "Población: conjunto completo de elementos objeto del estudio."
  },
  {
    "id": "X0233",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "Caso práctico: Se quiere conocer la opinión de todos los estudiantes del liceo. ¿Qué concepto se aplica principalmente?",
    "correct": "Población",
    "wrong": [
      "Muestra",
      "Unidad estadística",
      "Fuente primaria"
    ],
    "explanation": "El caso ejemplifica población: conjunto completo de elementos objeto del estudio."
  },
  {
    "id": "X0234",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Población»?",
    "correct": "Se quiere conocer la opinión de todos los estudiantes del liceo",
    "wrong": [
      "Se encuesta a 100 estudiantes en vez de a todo el colegio",
      "Cada estudiante encuestado aporta una observación",
      "El equipo aplica su propia encuesta a consumidores"
    ],
    "explanation": "Población: conjunto completo de elementos objeto del estudio."
  },
  {
    "id": "X0235",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Qué concepto corresponde a esta definición? Subconjunto de la población que se analiza",
    "correct": "Muestra",
    "wrong": [
      "Unidad estadística",
      "Fuente primaria",
      "Fuente secundaria"
    ],
    "explanation": "Muestra: subconjunto de la población que se analiza."
  },
  {
    "id": "X0236",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "Caso práctico: Se encuesta a 100 estudiantes en vez de a todo el colegio. ¿Qué concepto se aplica principalmente?",
    "correct": "Muestra",
    "wrong": [
      "Unidad estadística",
      "Fuente primaria",
      "Fuente secundaria"
    ],
    "explanation": "El caso ejemplifica muestra: subconjunto de la población que se analiza."
  },
  {
    "id": "X0237",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Muestra»?",
    "correct": "Se encuesta a 100 estudiantes en vez de a todo el colegio",
    "wrong": [
      "Cada estudiante encuestado aporta una observación",
      "El equipo aplica su propia encuesta a consumidores",
      "Se consultan estadísticas publicadas por una institución"
    ],
    "explanation": "Muestra: subconjunto de la población que se analiza."
  },
  {
    "id": "X0238",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Qué concepto corresponde a esta definición? Cada elemento individual sobre el que se registra información",
    "correct": "Unidad estadística",
    "wrong": [
      "Fuente primaria",
      "Fuente secundaria",
      "Gráfico de barras"
    ],
    "explanation": "Unidad estadística: cada elemento individual sobre el que se registra información."
  },
  {
    "id": "X0239",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "Caso práctico: Cada estudiante encuestado aporta una observación. ¿Qué concepto se aplica principalmente?",
    "correct": "Unidad estadística",
    "wrong": [
      "Fuente primaria",
      "Fuente secundaria",
      "Gráfico de barras"
    ],
    "explanation": "El caso ejemplifica unidad estadística: cada elemento individual sobre el que se registra información."
  },
  {
    "id": "X0240",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Unidad estadística»?",
    "correct": "Cada estudiante encuestado aporta una observación",
    "wrong": [
      "El equipo aplica su propia encuesta a consumidores",
      "Se consultan estadísticas publicadas por una institución",
      "Se comparan preferencias por tipo de producto"
    ],
    "explanation": "Unidad estadística: cada elemento individual sobre el que se registra información."
  },
  {
    "id": "X0241",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Qué concepto corresponde a esta definición? Datos obtenidos directamente para la investigación",
    "correct": "Fuente primaria",
    "wrong": [
      "Fuente secundaria",
      "Gráfico de barras",
      "Gráfico circular"
    ],
    "explanation": "Fuente primaria: datos obtenidos directamente para la investigación."
  },
  {
    "id": "X0242",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "Caso práctico: El equipo aplica su propia encuesta a consumidores. ¿Qué concepto se aplica principalmente?",
    "correct": "Fuente primaria",
    "wrong": [
      "Fuente secundaria",
      "Gráfico de barras",
      "Gráfico circular"
    ],
    "explanation": "El caso ejemplifica fuente primaria: datos obtenidos directamente para la investigación."
  },
  {
    "id": "X0243",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Fuente primaria»?",
    "correct": "El equipo aplica su propia encuesta a consumidores",
    "wrong": [
      "Se consultan estadísticas publicadas por una institución",
      "Se comparan preferencias por tipo de producto",
      "Se representa el porcentaje de gasto por categoría"
    ],
    "explanation": "Fuente primaria: datos obtenidos directamente para la investigación."
  },
  {
    "id": "X0244",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Qué concepto corresponde a esta definición? Datos existentes recopilados previamente por otros",
    "correct": "Fuente secundaria",
    "wrong": [
      "Gráfico de barras",
      "Gráfico circular",
      "Población"
    ],
    "explanation": "Fuente secundaria: datos existentes recopilados previamente por otros."
  },
  {
    "id": "X0245",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "Caso práctico: Se consultan estadísticas publicadas por una institución. ¿Qué concepto se aplica principalmente?",
    "correct": "Fuente secundaria",
    "wrong": [
      "Gráfico de barras",
      "Gráfico circular",
      "Población"
    ],
    "explanation": "El caso ejemplifica fuente secundaria: datos existentes recopilados previamente por otros."
  },
  {
    "id": "X0246",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Fuente secundaria»?",
    "correct": "Se consultan estadísticas publicadas por una institución",
    "wrong": [
      "Se comparan preferencias por tipo de producto",
      "Se representa el porcentaje de gasto por categoría",
      "Se quiere conocer la opinión de todos los estudiantes del liceo"
    ],
    "explanation": "Fuente secundaria: datos existentes recopilados previamente por otros."
  },
  {
    "id": "X0247",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Qué concepto corresponde a esta definición? Representación que permite comparar cantidades entre categorías",
    "correct": "Gráfico de barras",
    "wrong": [
      "Gráfico circular",
      "Población",
      "Muestra"
    ],
    "explanation": "Gráfico de barras: representación que permite comparar cantidades entre categorías."
  },
  {
    "id": "X0248",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "Caso práctico: Se comparan preferencias por tipo de producto. ¿Qué concepto se aplica principalmente?",
    "correct": "Gráfico de barras",
    "wrong": [
      "Gráfico circular",
      "Población",
      "Muestra"
    ],
    "explanation": "El caso ejemplifica gráfico de barras: representación que permite comparar cantidades entre categorías."
  },
  {
    "id": "X0249",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Gráfico de barras»?",
    "correct": "Se comparan preferencias por tipo de producto",
    "wrong": [
      "Se representa el porcentaje de gasto por categoría",
      "Se quiere conocer la opinión de todos los estudiantes del liceo",
      "Se encuesta a 100 estudiantes en vez de a todo el colegio"
    ],
    "explanation": "Gráfico de barras: representación que permite comparar cantidades entre categorías."
  },
  {
    "id": "X0250",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Qué concepto corresponde a esta definición? Representación útil para mostrar partes de un total",
    "correct": "Gráfico circular",
    "wrong": [
      "Población",
      "Muestra",
      "Unidad estadística"
    ],
    "explanation": "Gráfico circular: representación útil para mostrar partes de un total."
  },
  {
    "id": "X0251",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "Caso práctico: Se representa el porcentaje de gasto por categoría. ¿Qué concepto se aplica principalmente?",
    "correct": "Gráfico circular",
    "wrong": [
      "Población",
      "Muestra",
      "Unidad estadística"
    ],
    "explanation": "El caso ejemplifica gráfico circular: representación útil para mostrar partes de un total."
  },
  {
    "id": "X0252",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Gráfico circular»?",
    "correct": "Se representa el porcentaje de gasto por categoría",
    "wrong": [
      "Se quiere conocer la opinión de todos los estudiantes del liceo",
      "Se encuesta a 100 estudiantes en vez de a todo el colegio",
      "Cada estudiante encuestado aporta una observación"
    ],
    "explanation": "Gráfico circular: representación útil para mostrar partes de un total."
  },
  {
    "id": "X0253",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Qué concepto corresponde a esta definición? Venta de bienes o servicios hacia otro país",
    "correct": "Exportación",
    "wrong": [
      "Importación",
      "Globalización",
      "Competencia"
    ],
    "explanation": "Exportación: venta de bienes o servicios hacia otro país."
  },
  {
    "id": "X0254",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "Caso práctico: Una compañía costarricense vende café a Canadá. ¿Qué concepto se aplica principalmente?",
    "correct": "Exportación",
    "wrong": [
      "Importación",
      "Globalización",
      "Competencia"
    ],
    "explanation": "El caso ejemplifica exportación: venta de bienes o servicios hacia otro país."
  },
  {
    "id": "X0255",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Exportación»?",
    "correct": "Una compañía costarricense vende café a Canadá",
    "wrong": [
      "Una empresa de Costa Rica compra maquinaria japonesa",
      "Una marca compite con proveedores de varios países",
      "Dos supermercados ajustan su oferta en la misma zona"
    ],
    "explanation": "Exportación: venta de bienes o servicios hacia otro país."
  },
  {
    "id": "X0256",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Qué concepto corresponde a esta definición? Compra de bienes o servicios provenientes del extranjero",
    "correct": "Importación",
    "wrong": [
      "Globalización",
      "Competencia",
      "Responsabilidad con la comunidad"
    ],
    "explanation": "Importación: compra de bienes o servicios provenientes del extranjero."
  },
  {
    "id": "X0257",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "Caso práctico: Una empresa de Costa Rica compra maquinaria japonesa. ¿Qué concepto se aplica principalmente?",
    "correct": "Importación",
    "wrong": [
      "Globalización",
      "Competencia",
      "Responsabilidad con la comunidad"
    ],
    "explanation": "El caso ejemplifica importación: compra de bienes o servicios provenientes del extranjero."
  },
  {
    "id": "X0258",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Importación»?",
    "correct": "Una empresa de Costa Rica compra maquinaria japonesa",
    "wrong": [
      "Una marca compite con proveedores de varios países",
      "Dos supermercados ajustan su oferta en la misma zona",
      "Una fábrica gestiona residuos y dialoga con vecinos"
    ],
    "explanation": "Importación: compra de bienes o servicios provenientes del extranjero."
  },
  {
    "id": "X0259",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Qué concepto corresponde a esta definición? Mayor integración e interdependencia de los mercados",
    "correct": "Globalización",
    "wrong": [
      "Competencia",
      "Responsabilidad con la comunidad",
      "Tecnología moderna"
    ],
    "explanation": "Globalización: mayor integración e interdependencia de los mercados."
  },
  {
    "id": "X0260",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "Caso práctico: Una marca compite con proveedores de varios países. ¿Qué concepto se aplica principalmente?",
    "correct": "Globalización",
    "wrong": [
      "Competencia",
      "Responsabilidad con la comunidad",
      "Tecnología moderna"
    ],
    "explanation": "El caso ejemplifica globalización: mayor integración e interdependencia de los mercados."
  },
  {
    "id": "X0261",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Globalización»?",
    "correct": "Una marca compite con proveedores de varios países",
    "wrong": [
      "Dos supermercados ajustan su oferta en la misma zona",
      "Una fábrica gestiona residuos y dialoga con vecinos",
      "Un comercio incorpora ventas por Internet y control digital"
    ],
    "explanation": "Globalización: mayor integración e interdependencia de los mercados."
  },
  {
    "id": "X0262",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Qué concepto corresponde a esta definición? Presencia de empresas que buscan clientes similares",
    "correct": "Competencia",
    "wrong": [
      "Responsabilidad con la comunidad",
      "Tecnología moderna",
      "Exportación no tradicional"
    ],
    "explanation": "Competencia: presencia de empresas que buscan clientes similares."
  },
  {
    "id": "X0263",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "Caso práctico: Dos supermercados ajustan su oferta en la misma zona. ¿Qué concepto se aplica principalmente?",
    "correct": "Competencia",
    "wrong": [
      "Responsabilidad con la comunidad",
      "Tecnología moderna",
      "Exportación no tradicional"
    ],
    "explanation": "El caso ejemplifica competencia: presencia de empresas que buscan clientes similares."
  },
  {
    "id": "X0264",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Competencia»?",
    "correct": "Dos supermercados ajustan su oferta en la misma zona",
    "wrong": [
      "Una fábrica gestiona residuos y dialoga con vecinos",
      "Un comercio incorpora ventas por Internet y control digital",
      "Una empresa costarricense exporta dispositivos médicos"
    ],
    "explanation": "Competencia: presencia de empresas que buscan clientes similares."
  },
  {
    "id": "X0265",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Qué concepto corresponde a esta definición? Acciones empresariales que consideran impactos locales",
    "correct": "Responsabilidad con la comunidad",
    "wrong": [
      "Tecnología moderna",
      "Exportación no tradicional",
      "Exportación"
    ],
    "explanation": "Responsabilidad con la comunidad: acciones empresariales que consideran impactos locales."
  },
  {
    "id": "X0266",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "Caso práctico: Una fábrica gestiona residuos y dialoga con vecinos. ¿Qué concepto se aplica principalmente?",
    "correct": "Responsabilidad con la comunidad",
    "wrong": [
      "Tecnología moderna",
      "Exportación no tradicional",
      "Exportación"
    ],
    "explanation": "El caso ejemplifica responsabilidad con la comunidad: acciones empresariales que consideran impactos locales."
  },
  {
    "id": "X0267",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Responsabilidad con la comunidad»?",
    "correct": "Una fábrica gestiona residuos y dialoga con vecinos",
    "wrong": [
      "Un comercio incorpora ventas por Internet y control digital",
      "Una empresa costarricense exporta dispositivos médicos",
      "Una compañía costarricense vende café a Canadá"
    ],
    "explanation": "Responsabilidad con la comunidad: acciones empresariales que consideran impactos locales."
  },
  {
    "id": "X0268",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Qué concepto corresponde a esta definición? Herramientas que transforman procesos y competitividad",
    "correct": "Tecnología moderna",
    "wrong": [
      "Exportación no tradicional",
      "Exportación",
      "Importación"
    ],
    "explanation": "Tecnología moderna: herramientas que transforman procesos y competitividad."
  },
  {
    "id": "X0269",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "Caso práctico: Un comercio incorpora ventas por Internet y control digital. ¿Qué concepto se aplica principalmente?",
    "correct": "Tecnología moderna",
    "wrong": [
      "Exportación no tradicional",
      "Exportación",
      "Importación"
    ],
    "explanation": "El caso ejemplifica tecnología moderna: herramientas que transforman procesos y competitividad."
  },
  {
    "id": "X0270",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Tecnología moderna»?",
    "correct": "Un comercio incorpora ventas por Internet y control digital",
    "wrong": [
      "Una empresa costarricense exporta dispositivos médicos",
      "Una compañía costarricense vende café a Canadá",
      "Una empresa de Costa Rica compra maquinaria japonesa"
    ],
    "explanation": "Tecnología moderna: herramientas que transforman procesos y competitividad."
  },
  {
    "id": "X0271",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Qué concepto corresponde a esta definición? Venta exterior de productos diferentes de los rubros históricos tradicionales",
    "correct": "Exportación no tradicional",
    "wrong": [
      "Exportación",
      "Importación",
      "Globalización"
    ],
    "explanation": "Exportación no tradicional: venta exterior de productos diferentes de los rubros históricos tradicionales."
  },
  {
    "id": "X0272",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "Caso práctico: Una empresa costarricense exporta dispositivos médicos. ¿Qué concepto se aplica principalmente?",
    "correct": "Exportación no tradicional",
    "wrong": [
      "Exportación",
      "Importación",
      "Globalización"
    ],
    "explanation": "El caso ejemplifica exportación no tradicional: venta exterior de productos diferentes de los rubros históricos tradicionales."
  },
  {
    "id": "X0273",
    "unit": "Administración de Empresas",
    "topic": "La empresa y su entorno",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Exportación no tradicional»?",
    "correct": "Una empresa costarricense exporta dispositivos médicos",
    "wrong": [
      "Una compañía costarricense vende café a Canadá",
      "Una empresa de Costa Rica compra maquinaria japonesa",
      "Una marca compite con proveedores de varios países"
    ],
    "explanation": "Exportación no tradicional: venta exterior de productos diferentes de los rubros históricos tradicionales."
  },
  {
    "id": "X0274",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Qué concepto corresponde a esta definición? Protección de condiciones de igualdad y ausencia de discriminación",
    "correct": "Igualdad real de la mujer",
    "wrong": [
      "Prevención del hostigamiento sexual",
      "Ley 8422",
      "Ley 8204"
    ],
    "explanation": "Igualdad real de la mujer: protección de condiciones de igualdad y ausencia de discriminación."
  },
  {
    "id": "X0275",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "Caso práctico: Una aspirante exige evaluación laboral sin trato desigual por género. ¿Qué concepto se aplica principalmente?",
    "correct": "Igualdad real de la mujer",
    "wrong": [
      "Prevención del hostigamiento sexual",
      "Ley 8422",
      "Ley 8204"
    ],
    "explanation": "El caso ejemplifica igualdad real de la mujer: protección de condiciones de igualdad y ausencia de discriminación."
  },
  {
    "id": "X0276",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Igualdad real de la mujer»?",
    "correct": "Una aspirante exige evaluación laboral sin trato desigual por género",
    "wrong": [
      "La empresa activa el procedimiento ante una denuncia de acoso",
      "Se investiga aprovechamiento indebido de un cargo público",
      "Una entidad revisa operaciones para prevenir lavado de dinero"
    ],
    "explanation": "Igualdad real de la mujer: protección de condiciones de igualdad y ausencia de discriminación."
  },
  {
    "id": "X0277",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Qué concepto corresponde a esta definición? Acciones para prevenir y atender conductas de naturaleza sexual no deseadas",
    "correct": "Prevención del hostigamiento sexual",
    "wrong": [
      "Ley 8422",
      "Ley 8204",
      "Derechos laborales"
    ],
    "explanation": "Prevención del hostigamiento sexual: acciones para prevenir y atender conductas de naturaleza sexual no deseadas."
  },
  {
    "id": "X0278",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "Caso práctico: La empresa activa el procedimiento ante una denuncia de acoso. ¿Qué concepto se aplica principalmente?",
    "correct": "Prevención del hostigamiento sexual",
    "wrong": [
      "Ley 8422",
      "Ley 8204",
      "Derechos laborales"
    ],
    "explanation": "El caso ejemplifica prevención del hostigamiento sexual: acciones para prevenir y atender conductas de naturaleza sexual no deseadas."
  },
  {
    "id": "X0279",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Prevención del hostigamiento sexual»?",
    "correct": "La empresa activa el procedimiento ante una denuncia de acoso",
    "wrong": [
      "Se investiga aprovechamiento indebido de un cargo público",
      "Una entidad revisa operaciones para prevenir lavado de dinero",
      "Una persona solicita el pago correspondiente a su trabajo"
    ],
    "explanation": "Prevención del hostigamiento sexual: acciones para prevenir y atender conductas de naturaleza sexual no deseadas."
  },
  {
    "id": "X0280",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Qué concepto corresponde a esta definición? Marco contra la corrupción y el enriquecimiento ilícito en la función pública",
    "correct": "Ley 8422",
    "wrong": [
      "Ley 8204",
      "Derechos laborales",
      "Obligaciones de cumplimiento"
    ],
    "explanation": "Ley 8422: marco contra la corrupción y el enriquecimiento ilícito en la función pública."
  },
  {
    "id": "X0281",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "Caso práctico: Se investiga aprovechamiento indebido de un cargo público. ¿Qué concepto se aplica principalmente?",
    "correct": "Ley 8422",
    "wrong": [
      "Ley 8204",
      "Derechos laborales",
      "Obligaciones de cumplimiento"
    ],
    "explanation": "El caso ejemplifica ley 8422: marco contra la corrupción y el enriquecimiento ilícito en la función pública."
  },
  {
    "id": "X0282",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Ley 8422»?",
    "correct": "Se investiga aprovechamiento indebido de un cargo público",
    "wrong": [
      "Una entidad revisa operaciones para prevenir lavado de dinero",
      "Una persona solicita el pago correspondiente a su trabajo",
      "Una organización mantiene procedimientos legales y controles"
    ],
    "explanation": "Ley 8422: marco contra la corrupción y el enriquecimiento ilícito en la función pública."
  },
  {
    "id": "X0283",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Qué concepto corresponde a esta definición? Normativa vinculada con drogas y legitimación de capitales",
    "correct": "Ley 8204",
    "wrong": [
      "Derechos laborales",
      "Obligaciones de cumplimiento",
      "Sanción legal"
    ],
    "explanation": "Ley 8204: normativa vinculada con drogas y legitimación de capitales."
  },
  {
    "id": "X0284",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "Caso práctico: Una entidad revisa operaciones para prevenir lavado de dinero. ¿Qué concepto se aplica principalmente?",
    "correct": "Ley 8204",
    "wrong": [
      "Derechos laborales",
      "Obligaciones de cumplimiento",
      "Sanción legal"
    ],
    "explanation": "El caso ejemplifica ley 8204: normativa vinculada con drogas y legitimación de capitales."
  },
  {
    "id": "X0285",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Ley 8204»?",
    "correct": "Una entidad revisa operaciones para prevenir lavado de dinero",
    "wrong": [
      "Una persona solicita el pago correspondiente a su trabajo",
      "Una organización mantiene procedimientos legales y controles",
      "Una autoridad impone una medida prevista en la normativa"
    ],
    "explanation": "Ley 8204: normativa vinculada con drogas y legitimación de capitales."
  },
  {
    "id": "X0286",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Qué concepto corresponde a esta definición? Garantías que protegen a las personas trabajadoras",
    "correct": "Derechos laborales",
    "wrong": [
      "Obligaciones de cumplimiento",
      "Sanción legal",
      "Igualdad real de la mujer"
    ],
    "explanation": "Derechos laborales: garantías que protegen a las personas trabajadoras."
  },
  {
    "id": "X0287",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "Caso práctico: Una persona solicita el pago correspondiente a su trabajo. ¿Qué concepto se aplica principalmente?",
    "correct": "Derechos laborales",
    "wrong": [
      "Obligaciones de cumplimiento",
      "Sanción legal",
      "Igualdad real de la mujer"
    ],
    "explanation": "El caso ejemplifica derechos laborales: garantías que protegen a las personas trabajadoras."
  },
  {
    "id": "X0288",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Derechos laborales»?",
    "correct": "Una persona solicita el pago correspondiente a su trabajo",
    "wrong": [
      "Una organización mantiene procedimientos legales y controles",
      "Una autoridad impone una medida prevista en la normativa",
      "Una aspirante exige evaluación laboral sin trato desigual por género"
    ],
    "explanation": "Derechos laborales: garantías que protegen a las personas trabajadoras."
  },
  {
    "id": "X0289",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Qué concepto corresponde a esta definición? Deber empresarial de actuar conforme a normas aplicables",
    "correct": "Obligaciones de cumplimiento",
    "wrong": [
      "Sanción legal",
      "Igualdad real de la mujer",
      "Prevención del hostigamiento sexual"
    ],
    "explanation": "Obligaciones de cumplimiento: deber empresarial de actuar conforme a normas aplicables."
  },
  {
    "id": "X0290",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "Caso práctico: Una organización mantiene procedimientos legales y controles. ¿Qué concepto se aplica principalmente?",
    "correct": "Obligaciones de cumplimiento",
    "wrong": [
      "Sanción legal",
      "Igualdad real de la mujer",
      "Prevención del hostigamiento sexual"
    ],
    "explanation": "El caso ejemplifica obligaciones de cumplimiento: deber empresarial de actuar conforme a normas aplicables."
  },
  {
    "id": "X0291",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Obligaciones de cumplimiento»?",
    "correct": "Una organización mantiene procedimientos legales y controles",
    "wrong": [
      "Una autoridad impone una medida prevista en la normativa",
      "Una aspirante exige evaluación laboral sin trato desigual por género",
      "La empresa activa el procedimiento ante una denuncia de acoso"
    ],
    "explanation": "Obligaciones de cumplimiento: deber empresarial de actuar conforme a normas aplicables."
  },
  {
    "id": "X0292",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Qué concepto corresponde a esta definición? Consecuencia establecida por una infracción comprobada",
    "correct": "Sanción legal",
    "wrong": [
      "Igualdad real de la mujer",
      "Prevención del hostigamiento sexual",
      "Ley 8422"
    ],
    "explanation": "Sanción legal: consecuencia establecida por una infracción comprobada."
  },
  {
    "id": "X0293",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "Caso práctico: Una autoridad impone una medida prevista en la normativa. ¿Qué concepto se aplica principalmente?",
    "correct": "Sanción legal",
    "wrong": [
      "Igualdad real de la mujer",
      "Prevención del hostigamiento sexual",
      "Ley 8422"
    ],
    "explanation": "El caso ejemplifica sanción legal: consecuencia establecida por una infracción comprobada."
  },
  {
    "id": "X0294",
    "unit": "Normativa Legal",
    "topic": "Leyes relacionadas con la gestión empresarial",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Sanción legal»?",
    "correct": "Una autoridad impone una medida prevista en la normativa",
    "wrong": [
      "Una aspirante exige evaluación laboral sin trato desigual por género",
      "La empresa activa el procedimiento ante una denuncia de acoso",
      "Se investiga aprovechamiento indebido de un cargo público"
    ],
    "explanation": "Sanción legal: consecuencia establecida por una infracción comprobada."
  },
  {
    "id": "X0295",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Documento que fija condiciones de participación y requisitos",
    "correct": "Cartel de licitación",
    "wrong": [
      "Objeto contractual",
      "Plazo de presentación",
      "Criterios de evaluación"
    ],
    "explanation": "Cartel de licitación: documento que fija condiciones de participación y requisitos."
  },
  {
    "id": "X0296",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "Caso práctico: Una institución publica especificaciones de los bienes solicitados. ¿Qué concepto se aplica principalmente?",
    "correct": "Cartel de licitación",
    "wrong": [
      "Objeto contractual",
      "Plazo de presentación",
      "Criterios de evaluación"
    ],
    "explanation": "El caso ejemplifica cartel de licitación: documento que fija condiciones de participación y requisitos."
  },
  {
    "id": "X0297",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Cartel de licitación»?",
    "correct": "Una institución publica especificaciones de los bienes solicitados",
    "wrong": [
      "Un concurso pide suministro de computadoras para escuelas",
      "Una convocatoria indica día y hora de cierre de recepción",
      "El cartel define ponderaciones de calidad y precio"
    ],
    "explanation": "Cartel de licitación: documento que fija condiciones de participación y requisitos."
  },
  {
    "id": "X0298",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Bien, obra o servicio que necesita la institución",
    "correct": "Objeto contractual",
    "wrong": [
      "Plazo de presentación",
      "Criterios de evaluación",
      "Requisitos técnicos"
    ],
    "explanation": "Objeto contractual: bien, obra o servicio que necesita la institución."
  },
  {
    "id": "X0299",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "Caso práctico: Un concurso pide suministro de computadoras para escuelas. ¿Qué concepto se aplica principalmente?",
    "correct": "Objeto contractual",
    "wrong": [
      "Plazo de presentación",
      "Criterios de evaluación",
      "Requisitos técnicos"
    ],
    "explanation": "El caso ejemplifica objeto contractual: bien, obra o servicio que necesita la institución."
  },
  {
    "id": "X0300",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Objeto contractual»?",
    "correct": "Un concurso pide suministro de computadoras para escuelas",
    "wrong": [
      "Una convocatoria indica día y hora de cierre de recepción",
      "El cartel define ponderaciones de calidad y precio",
      "La compra de impresoras exige velocidad y conectividad definidas"
    ],
    "explanation": "Objeto contractual: bien, obra o servicio que necesita la institución."
  },
  {
    "id": "X0301",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Fecha límite para entregar una oferta",
    "correct": "Plazo de presentación",
    "wrong": [
      "Criterios de evaluación",
      "Requisitos técnicos",
      "Oferta"
    ],
    "explanation": "Plazo de presentación: fecha límite para entregar una oferta."
  },
  {
    "id": "X0302",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "Caso práctico: Una convocatoria indica día y hora de cierre de recepción. ¿Qué concepto se aplica principalmente?",
    "correct": "Plazo de presentación",
    "wrong": [
      "Criterios de evaluación",
      "Requisitos técnicos",
      "Oferta"
    ],
    "explanation": "El caso ejemplifica plazo de presentación: fecha límite para entregar una oferta."
  },
  {
    "id": "X0303",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Plazo de presentación»?",
    "correct": "Una convocatoria indica día y hora de cierre de recepción",
    "wrong": [
      "El cartel define ponderaciones de calidad y precio",
      "La compra de impresoras exige velocidad y conectividad definidas",
      "Una empresa entrega precio, condiciones y documentos solicitados"
    ],
    "explanation": "Plazo de presentación: fecha límite para entregar una oferta."
  },
  {
    "id": "X0304",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Reglas para comparar propuestas presentadas",
    "correct": "Criterios de evaluación",
    "wrong": [
      "Requisitos técnicos",
      "Oferta",
      "Transparencia"
    ],
    "explanation": "Criterios de evaluación: reglas para comparar propuestas presentadas."
  },
  {
    "id": "X0305",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "Caso práctico: El cartel define ponderaciones de calidad y precio. ¿Qué concepto se aplica principalmente?",
    "correct": "Criterios de evaluación",
    "wrong": [
      "Requisitos técnicos",
      "Oferta",
      "Transparencia"
    ],
    "explanation": "El caso ejemplifica criterios de evaluación: reglas para comparar propuestas presentadas."
  },
  {
    "id": "X0306",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Criterios de evaluación»?",
    "correct": "El cartel define ponderaciones de calidad y precio",
    "wrong": [
      "La compra de impresoras exige velocidad y conectividad definidas",
      "Una empresa entrega precio, condiciones y documentos solicitados",
      "Los participantes conocen previamente las condiciones del concurso"
    ],
    "explanation": "Criterios de evaluación: reglas para comparar propuestas presentadas."
  },
  {
    "id": "X0307",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Características que debe reunir lo solicitado",
    "correct": "Requisitos técnicos",
    "wrong": [
      "Oferta",
      "Transparencia",
      "Cartel de licitación"
    ],
    "explanation": "Requisitos técnicos: características que debe reunir lo solicitado."
  },
  {
    "id": "X0308",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "Caso práctico: La compra de impresoras exige velocidad y conectividad definidas. ¿Qué concepto se aplica principalmente?",
    "correct": "Requisitos técnicos",
    "wrong": [
      "Oferta",
      "Transparencia",
      "Cartel de licitación"
    ],
    "explanation": "El caso ejemplifica requisitos técnicos: características que debe reunir lo solicitado."
  },
  {
    "id": "X0309",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Requisitos técnicos»?",
    "correct": "La compra de impresoras exige velocidad y conectividad definidas",
    "wrong": [
      "Una empresa entrega precio, condiciones y documentos solicitados",
      "Los participantes conocen previamente las condiciones del concurso",
      "Una institución publica especificaciones de los bienes solicitados"
    ],
    "explanation": "Requisitos técnicos: características que debe reunir lo solicitado."
  },
  {
    "id": "X0310",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Propuesta presentada por un potencial proveedor",
    "correct": "Oferta",
    "wrong": [
      "Transparencia",
      "Cartel de licitación",
      "Objeto contractual"
    ],
    "explanation": "Oferta: propuesta presentada por un potencial proveedor."
  },
  {
    "id": "X0311",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "Caso práctico: Una empresa entrega precio, condiciones y documentos solicitados. ¿Qué concepto se aplica principalmente?",
    "correct": "Oferta",
    "wrong": [
      "Transparencia",
      "Cartel de licitación",
      "Objeto contractual"
    ],
    "explanation": "El caso ejemplifica oferta: propuesta presentada por un potencial proveedor."
  },
  {
    "id": "X0312",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Oferta»?",
    "correct": "Una empresa entrega precio, condiciones y documentos solicitados",
    "wrong": [
      "Los participantes conocen previamente las condiciones del concurso",
      "Una institución publica especificaciones de los bienes solicitados",
      "Un concurso pide suministro de computadoras para escuelas"
    ],
    "explanation": "Oferta: propuesta presentada por un potencial proveedor."
  },
  {
    "id": "X0313",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Qué concepto corresponde a esta definición? Publicidad y claridad de las reglas de contratación",
    "correct": "Transparencia",
    "wrong": [
      "Cartel de licitación",
      "Objeto contractual",
      "Plazo de presentación"
    ],
    "explanation": "Transparencia: publicidad y claridad de las reglas de contratación."
  },
  {
    "id": "X0314",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "Caso práctico: Los participantes conocen previamente las condiciones del concurso. ¿Qué concepto se aplica principalmente?",
    "correct": "Transparencia",
    "wrong": [
      "Cartel de licitación",
      "Objeto contractual",
      "Plazo de presentación"
    ],
    "explanation": "El caso ejemplifica transparencia: publicidad y claridad de las reglas de contratación."
  },
  {
    "id": "X0315",
    "unit": "Normativa Legal",
    "topic": "Contratación administrativa",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Transparencia»?",
    "correct": "Los participantes conocen previamente las condiciones del concurso",
    "wrong": [
      "Una institución publica especificaciones de los bienes solicitados",
      "Un concurso pide suministro de computadoras para escuelas",
      "Una convocatoria indica día y hora de cierre de recepción"
    ],
    "explanation": "Transparencia: publicidad y claridad de las reglas de contratación."
  },
  {
    "id": "X0316",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Qué concepto corresponde a esta definición? Rama jurídica que regula actos y sujetos relacionados con el comercio",
    "correct": "Derecho mercantil",
    "wrong": [
      "Comerciante",
      "Sociedad mercantil",
      "Acto de comercio"
    ],
    "explanation": "Derecho mercantil: rama jurídica que regula actos y sujetos relacionados con el comercio."
  },
  {
    "id": "X0317",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "Caso práctico: Se analizan obligaciones de una actividad comercial. ¿Qué concepto se aplica principalmente?",
    "correct": "Derecho mercantil",
    "wrong": [
      "Comerciante",
      "Sociedad mercantil",
      "Acto de comercio"
    ],
    "explanation": "El caso ejemplifica derecho mercantil: rama jurídica que regula actos y sujetos relacionados con el comercio."
  },
  {
    "id": "X0318",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Derecho mercantil»?",
    "correct": "Se analizan obligaciones de una actividad comercial",
    "wrong": [
      "Una persona dirige habitualmente la compraventa de mercancías",
      "Dos personas formalizan una empresa bajo una figura societaria",
      "Una entidad compra productos para revenderlos habitualmente"
    ],
    "explanation": "Derecho mercantil: rama jurídica que regula actos y sujetos relacionados con el comercio."
  },
  {
    "id": "X0319",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Qué concepto corresponde a esta definición? Persona que realiza profesionalmente actividades mercantiles",
    "correct": "Comerciante",
    "wrong": [
      "Sociedad mercantil",
      "Acto de comercio",
      "Persona jurídica"
    ],
    "explanation": "Comerciante: persona que realiza profesionalmente actividades mercantiles."
  },
  {
    "id": "X0320",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "Caso práctico: Una persona dirige habitualmente la compraventa de mercancías. ¿Qué concepto se aplica principalmente?",
    "correct": "Comerciante",
    "wrong": [
      "Sociedad mercantil",
      "Acto de comercio",
      "Persona jurídica"
    ],
    "explanation": "El caso ejemplifica comerciante: persona que realiza profesionalmente actividades mercantiles."
  },
  {
    "id": "X0321",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Comerciante»?",
    "correct": "Una persona dirige habitualmente la compraventa de mercancías",
    "wrong": [
      "Dos personas formalizan una empresa bajo una figura societaria",
      "Una entidad compra productos para revenderlos habitualmente",
      "Una sociedad firma un contrato a su propio nombre"
    ],
    "explanation": "Comerciante: persona que realiza profesionalmente actividades mercantiles."
  },
  {
    "id": "X0322",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Qué concepto corresponde a esta definición? Organización constituida conforme a formas previstas por el Código de Comercio",
    "correct": "Sociedad mercantil",
    "wrong": [
      "Acto de comercio",
      "Persona jurídica",
      "Responsabilidad societaria"
    ],
    "explanation": "Sociedad mercantil: organización constituida conforme a formas previstas por el Código de Comercio."
  },
  {
    "id": "X0323",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "Caso práctico: Dos personas formalizan una empresa bajo una figura societaria. ¿Qué concepto se aplica principalmente?",
    "correct": "Sociedad mercantil",
    "wrong": [
      "Acto de comercio",
      "Persona jurídica",
      "Responsabilidad societaria"
    ],
    "explanation": "El caso ejemplifica sociedad mercantil: organización constituida conforme a formas previstas por el Código de Comercio."
  },
  {
    "id": "X0324",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Sociedad mercantil»?",
    "correct": "Dos personas formalizan una empresa bajo una figura societaria",
    "wrong": [
      "Una entidad compra productos para revenderlos habitualmente",
      "Una sociedad firma un contrato a su propio nombre",
      "Se estudia qué patrimonio responde ante deudas empresariales"
    ],
    "explanation": "Sociedad mercantil: organización constituida conforme a formas previstas por el Código de Comercio."
  },
  {
    "id": "X0325",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Qué concepto corresponde a esta definición? Operación considerada comercial conforme a la ley",
    "correct": "Acto de comercio",
    "wrong": [
      "Persona jurídica",
      "Responsabilidad societaria",
      "Constitución de sociedad"
    ],
    "explanation": "Acto de comercio: operación considerada comercial conforme a la ley."
  },
  {
    "id": "X0326",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "Caso práctico: Una entidad compra productos para revenderlos habitualmente. ¿Qué concepto se aplica principalmente?",
    "correct": "Acto de comercio",
    "wrong": [
      "Persona jurídica",
      "Responsabilidad societaria",
      "Constitución de sociedad"
    ],
    "explanation": "El caso ejemplifica acto de comercio: operación considerada comercial conforme a la ley."
  },
  {
    "id": "X0327",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Acto de comercio»?",
    "correct": "Una entidad compra productos para revenderlos habitualmente",
    "wrong": [
      "Una sociedad firma un contrato a su propio nombre",
      "Se estudia qué patrimonio responde ante deudas empresariales",
      "Los socios realizan formalidades e inscripción pertinentes"
    ],
    "explanation": "Acto de comercio: operación considerada comercial conforme a la ley."
  },
  {
    "id": "X0328",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Qué concepto corresponde a esta definición? Organización reconocida por el ordenamiento como sujeto de derechos",
    "correct": "Persona jurídica",
    "wrong": [
      "Responsabilidad societaria",
      "Constitución de sociedad",
      "Derecho mercantil"
    ],
    "explanation": "Persona jurídica: organización reconocida por el ordenamiento como sujeto de derechos."
  },
  {
    "id": "X0329",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "Caso práctico: Una sociedad firma un contrato a su propio nombre. ¿Qué concepto se aplica principalmente?",
    "correct": "Persona jurídica",
    "wrong": [
      "Responsabilidad societaria",
      "Constitución de sociedad",
      "Derecho mercantil"
    ],
    "explanation": "El caso ejemplifica persona jurídica: organización reconocida por el ordenamiento como sujeto de derechos."
  },
  {
    "id": "X0330",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Persona jurídica»?",
    "correct": "Una sociedad firma un contrato a su propio nombre",
    "wrong": [
      "Se estudia qué patrimonio responde ante deudas empresariales",
      "Los socios realizan formalidades e inscripción pertinentes",
      "Se analizan obligaciones de una actividad comercial"
    ],
    "explanation": "Persona jurídica: organización reconocida por el ordenamiento como sujeto de derechos."
  },
  {
    "id": "X0331",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Qué concepto corresponde a esta definición? Alcance de las obligaciones según el tipo de sociedad",
    "correct": "Responsabilidad societaria",
    "wrong": [
      "Constitución de sociedad",
      "Derecho mercantil",
      "Comerciante"
    ],
    "explanation": "Responsabilidad societaria: alcance de las obligaciones según el tipo de sociedad."
  },
  {
    "id": "X0332",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "Caso práctico: Se estudia qué patrimonio responde ante deudas empresariales. ¿Qué concepto se aplica principalmente?",
    "correct": "Responsabilidad societaria",
    "wrong": [
      "Constitución de sociedad",
      "Derecho mercantil",
      "Comerciante"
    ],
    "explanation": "El caso ejemplifica responsabilidad societaria: alcance de las obligaciones según el tipo de sociedad."
  },
  {
    "id": "X0333",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Responsabilidad societaria»?",
    "correct": "Se estudia qué patrimonio responde ante deudas empresariales",
    "wrong": [
      "Los socios realizan formalidades e inscripción pertinentes",
      "Se analizan obligaciones de una actividad comercial",
      "Una persona dirige habitualmente la compraventa de mercancías"
    ],
    "explanation": "Responsabilidad societaria: alcance de las obligaciones según el tipo de sociedad."
  },
  {
    "id": "X0334",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Qué concepto corresponde a esta definición? Procedimiento para crear formalmente una entidad mercantil",
    "correct": "Constitución de sociedad",
    "wrong": [
      "Derecho mercantil",
      "Comerciante",
      "Sociedad mercantil"
    ],
    "explanation": "Constitución de sociedad: procedimiento para crear formalmente una entidad mercantil."
  },
  {
    "id": "X0335",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "Caso práctico: Los socios realizan formalidades e inscripción pertinentes. ¿Qué concepto se aplica principalmente?",
    "correct": "Constitución de sociedad",
    "wrong": [
      "Derecho mercantil",
      "Comerciante",
      "Sociedad mercantil"
    ],
    "explanation": "El caso ejemplifica constitución de sociedad: procedimiento para crear formalmente una entidad mercantil."
  },
  {
    "id": "X0336",
    "unit": "Normativa Legal",
    "topic": "Derecho mercantil y entes mercantiles",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Constitución de sociedad»?",
    "correct": "Los socios realizan formalidades e inscripción pertinentes",
    "wrong": [
      "Se analizan obligaciones de una actividad comercial",
      "Una persona dirige habitualmente la compraventa de mercancías",
      "Dos personas formalizan una empresa bajo una figura societaria"
    ],
    "explanation": "Constitución de sociedad: procedimiento para crear formalmente una entidad mercantil."
  },
  {
    "id": "X0337",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Qué concepto corresponde a esta definición? Organización asociativa para satisfacer necesidades comunes de socios",
    "correct": "Cooperativa",
    "wrong": [
      "Asociación solidarista",
      "Participación democrática",
      "Ahorro de asociados"
    ],
    "explanation": "Cooperativa: organización asociativa para satisfacer necesidades comunes de socios."
  },
  {
    "id": "X0338",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "Caso práctico: Productores se unen para comercializar colectivamente su cosecha. ¿Qué concepto se aplica principalmente?",
    "correct": "Cooperativa",
    "wrong": [
      "Asociación solidarista",
      "Participación democrática",
      "Ahorro de asociados"
    ],
    "explanation": "El caso ejemplifica cooperativa: organización asociativa para satisfacer necesidades comunes de socios."
  },
  {
    "id": "X0339",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Cooperativa»?",
    "correct": "Productores se unen para comercializar colectivamente su cosecha",
    "wrong": [
      "Colaboradores organizan un fondo solidario en su empresa",
      "Las personas asociadas votan conforme a sus reglas",
      "Una agrupación registra contribuciones periódicas de miembros"
    ],
    "explanation": "Cooperativa: organización asociativa para satisfacer necesidades comunes de socios."
  },
  {
    "id": "X0340",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Qué concepto corresponde a esta definición? Organización de personas trabajadoras orientada a ahorro y bienestar",
    "correct": "Asociación solidarista",
    "wrong": [
      "Participación democrática",
      "Ahorro de asociados",
      "Beneficio colectivo"
    ],
    "explanation": "Asociación solidarista: organización de personas trabajadoras orientada a ahorro y bienestar."
  },
  {
    "id": "X0341",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "Caso práctico: Colaboradores organizan un fondo solidario en su empresa. ¿Qué concepto se aplica principalmente?",
    "correct": "Asociación solidarista",
    "wrong": [
      "Participación democrática",
      "Ahorro de asociados",
      "Beneficio colectivo"
    ],
    "explanation": "El caso ejemplifica asociación solidarista: organización de personas trabajadoras orientada a ahorro y bienestar."
  },
  {
    "id": "X0342",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Asociación solidarista»?",
    "correct": "Colaboradores organizan un fondo solidario en su empresa",
    "wrong": [
      "Las personas asociadas votan conforme a sus reglas",
      "Una agrupación registra contribuciones periódicas de miembros",
      "Una asociación financia servicios para quienes la integran"
    ],
    "explanation": "Asociación solidarista: organización de personas trabajadoras orientada a ahorro y bienestar."
  },
  {
    "id": "X0343",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Qué concepto corresponde a esta definición? Intervención de miembros en decisiones de la organización",
    "correct": "Participación democrática",
    "wrong": [
      "Ahorro de asociados",
      "Beneficio colectivo",
      "Estatutos"
    ],
    "explanation": "Participación democrática: intervención de miembros en decisiones de la organización."
  },
  {
    "id": "X0344",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "Caso práctico: Las personas asociadas votan conforme a sus reglas. ¿Qué concepto se aplica principalmente?",
    "correct": "Participación democrática",
    "wrong": [
      "Ahorro de asociados",
      "Beneficio colectivo",
      "Estatutos"
    ],
    "explanation": "El caso ejemplifica participación democrática: intervención de miembros en decisiones de la organización."
  },
  {
    "id": "X0345",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Participación democrática»?",
    "correct": "Las personas asociadas votan conforme a sus reglas",
    "wrong": [
      "Una agrupación registra contribuciones periódicas de miembros",
      "Una asociación financia servicios para quienes la integran",
      "Los asociados consultan el documento de gobierno institucional"
    ],
    "explanation": "Participación democrática: intervención de miembros en decisiones de la organización."
  },
  {
    "id": "X0346",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Qué concepto corresponde a esta definición? Aportes destinados a generar recursos y beneficios colectivos",
    "correct": "Ahorro de asociados",
    "wrong": [
      "Beneficio colectivo",
      "Estatutos",
      "Finalidad organizativa"
    ],
    "explanation": "Ahorro de asociados: aportes destinados a generar recursos y beneficios colectivos."
  },
  {
    "id": "X0347",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "Caso práctico: Una agrupación registra contribuciones periódicas de miembros. ¿Qué concepto se aplica principalmente?",
    "correct": "Ahorro de asociados",
    "wrong": [
      "Beneficio colectivo",
      "Estatutos",
      "Finalidad organizativa"
    ],
    "explanation": "El caso ejemplifica ahorro de asociados: aportes destinados a generar recursos y beneficios colectivos."
  },
  {
    "id": "X0348",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Ahorro de asociados»?",
    "correct": "Una agrupación registra contribuciones periódicas de miembros",
    "wrong": [
      "Una asociación financia servicios para quienes la integran",
      "Los asociados consultan el documento de gobierno institucional",
      "Se compara prestar servicios a cooperativistas con fomentar bienestar laboral"
    ],
    "explanation": "Ahorro de asociados: aportes destinados a generar recursos y beneficios colectivos."
  },
  {
    "id": "X0349",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Qué concepto corresponde a esta definición? Ventaja compartida por integrantes de una organización",
    "correct": "Beneficio colectivo",
    "wrong": [
      "Estatutos",
      "Finalidad organizativa",
      "Cooperativa"
    ],
    "explanation": "Beneficio colectivo: ventaja compartida por integrantes de una organización."
  },
  {
    "id": "X0350",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "Caso práctico: Una asociación financia servicios para quienes la integran. ¿Qué concepto se aplica principalmente?",
    "correct": "Beneficio colectivo",
    "wrong": [
      "Estatutos",
      "Finalidad organizativa",
      "Cooperativa"
    ],
    "explanation": "El caso ejemplifica beneficio colectivo: ventaja compartida por integrantes de una organización."
  },
  {
    "id": "X0351",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Beneficio colectivo»?",
    "correct": "Una asociación financia servicios para quienes la integran",
    "wrong": [
      "Los asociados consultan el documento de gobierno institucional",
      "Se compara prestar servicios a cooperativistas con fomentar bienestar laboral",
      "Productores se unen para comercializar colectivamente su cosecha"
    ],
    "explanation": "Beneficio colectivo: ventaja compartida por integrantes de una organización."
  },
  {
    "id": "X0352",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Qué concepto corresponde a esta definición? Reglas internas que ordenan funcionamiento y derechos",
    "correct": "Estatutos",
    "wrong": [
      "Finalidad organizativa",
      "Cooperativa",
      "Asociación solidarista"
    ],
    "explanation": "Estatutos: reglas internas que ordenan funcionamiento y derechos."
  },
  {
    "id": "X0353",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "Caso práctico: Los asociados consultan el documento de gobierno institucional. ¿Qué concepto se aplica principalmente?",
    "correct": "Estatutos",
    "wrong": [
      "Finalidad organizativa",
      "Cooperativa",
      "Asociación solidarista"
    ],
    "explanation": "El caso ejemplifica estatutos: reglas internas que ordenan funcionamiento y derechos."
  },
  {
    "id": "X0354",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Estatutos»?",
    "correct": "Los asociados consultan el documento de gobierno institucional",
    "wrong": [
      "Se compara prestar servicios a cooperativistas con fomentar bienestar laboral",
      "Productores se unen para comercializar colectivamente su cosecha",
      "Colaboradores organizan un fondo solidario en su empresa"
    ],
    "explanation": "Estatutos: reglas internas que ordenan funcionamiento y derechos."
  },
  {
    "id": "X0355",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Qué concepto corresponde a esta definición? Propósito central por el que una entidad asociativa existe",
    "correct": "Finalidad organizativa",
    "wrong": [
      "Cooperativa",
      "Asociación solidarista",
      "Participación democrática"
    ],
    "explanation": "Finalidad organizativa: propósito central por el que una entidad asociativa existe."
  },
  {
    "id": "X0356",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "Caso práctico: Se compara prestar servicios a cooperativistas con fomentar bienestar laboral. ¿Qué concepto se aplica principalmente?",
    "correct": "Finalidad organizativa",
    "wrong": [
      "Cooperativa",
      "Asociación solidarista",
      "Participación democrática"
    ],
    "explanation": "El caso ejemplifica finalidad organizativa: propósito central por el que una entidad asociativa existe."
  },
  {
    "id": "X0357",
    "unit": "Normativa Legal",
    "topic": "Cooperativas y asociaciones solidaristas",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Finalidad organizativa»?",
    "correct": "Se compara prestar servicios a cooperativistas con fomentar bienestar laboral",
    "wrong": [
      "Productores se unen para comercializar colectivamente su cosecha",
      "Colaboradores organizan un fondo solidario en su empresa",
      "Las personas asociadas votan conforme a sus reglas"
    ],
    "explanation": "Finalidad organizativa: propósito central por el que una entidad asociativa existe."
  },
  {
    "id": "X0358",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Criterio de interpretación favorable al trabajador ante duda jurídica pertinente",
    "correct": "In dubio pro operario",
    "wrong": [
      "Irrenunciabilidad",
      "Gratuidad",
      "Ius variandi"
    ],
    "explanation": "In dubio pro operario: criterio de interpretación favorable al trabajador ante duda jurídica pertinente."
  },
  {
    "id": "X0359",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "Caso práctico: Se evalúa una norma laboral ambigua con interpretación protectora. ¿Qué concepto se aplica principalmente?",
    "correct": "In dubio pro operario",
    "wrong": [
      "Irrenunciabilidad",
      "Gratuidad",
      "Ius variandi"
    ],
    "explanation": "El caso ejemplifica in dubio pro operario: criterio de interpretación favorable al trabajador ante duda jurídica pertinente."
  },
  {
    "id": "X0360",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «In dubio pro operario»?",
    "correct": "Se evalúa una norma laboral ambigua con interpretación protectora",
    "wrong": [
      "Un trabajador firma una renuncia a un mínimo legal obligatorio",
      "Una persona busca reclamar un derecho sin costo procesal prohibitivo",
      "La jefatura reorganiza tareas sin afectar derechos fundamentales"
    ],
    "explanation": "In dubio pro operario: criterio de interpretación favorable al trabajador ante duda jurídica pertinente."
  },
  {
    "id": "X0361",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Imposibilidad de renunciar válidamente a derechos laborales indisponibles",
    "correct": "Irrenunciabilidad",
    "wrong": [
      "Gratuidad",
      "Ius variandi",
      "Código de Trabajo"
    ],
    "explanation": "Irrenunciabilidad: imposibilidad de renunciar válidamente a derechos laborales indisponibles."
  },
  {
    "id": "X0362",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "Caso práctico: Un trabajador firma una renuncia a un mínimo legal obligatorio. ¿Qué concepto se aplica principalmente?",
    "correct": "Irrenunciabilidad",
    "wrong": [
      "Gratuidad",
      "Ius variandi",
      "Código de Trabajo"
    ],
    "explanation": "El caso ejemplifica irrenunciabilidad: imposibilidad de renunciar válidamente a derechos laborales indisponibles."
  },
  {
    "id": "X0363",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Irrenunciabilidad»?",
    "correct": "Un trabajador firma una renuncia a un mínimo legal obligatorio",
    "wrong": [
      "Una persona busca reclamar un derecho sin costo procesal prohibitivo",
      "La jefatura reorganiza tareas sin afectar derechos fundamentales",
      "Una duda sobre obligaciones patronales se consulta en dicho código"
    ],
    "explanation": "Irrenunciabilidad: imposibilidad de renunciar válidamente a derechos laborales indisponibles."
  },
  {
    "id": "X0364",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Principio de acceso a justicia laboral sin cargas indebidas",
    "correct": "Gratuidad",
    "wrong": [
      "Ius variandi",
      "Código de Trabajo",
      "Relación de subordinación"
    ],
    "explanation": "Gratuidad: principio de acceso a justicia laboral sin cargas indebidas."
  },
  {
    "id": "X0365",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "Caso práctico: Una persona busca reclamar un derecho sin costo procesal prohibitivo. ¿Qué concepto se aplica principalmente?",
    "correct": "Gratuidad",
    "wrong": [
      "Ius variandi",
      "Código de Trabajo",
      "Relación de subordinación"
    ],
    "explanation": "El caso ejemplifica gratuidad: principio de acceso a justicia laboral sin cargas indebidas."
  },
  {
    "id": "X0366",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Gratuidad»?",
    "correct": "Una persona busca reclamar un derecho sin costo procesal prohibitivo",
    "wrong": [
      "La jefatura reorganiza tareas sin afectar derechos fundamentales",
      "Una duda sobre obligaciones patronales se consulta en dicho código",
      "El colaborador cumple horarios e instrucciones del empleador"
    ],
    "explanation": "Gratuidad: principio de acceso a justicia laboral sin cargas indebidas."
  },
  {
    "id": "X0367",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Facultad patronal de modificar condiciones no esenciales dentro de límites legales",
    "correct": "Ius variandi",
    "wrong": [
      "Código de Trabajo",
      "Relación de subordinación",
      "Fuente del derecho laboral"
    ],
    "explanation": "Ius variandi: facultad patronal de modificar condiciones no esenciales dentro de límites legales."
  },
  {
    "id": "X0368",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "Caso práctico: La jefatura reorganiza tareas sin afectar derechos fundamentales. ¿Qué concepto se aplica principalmente?",
    "correct": "Ius variandi",
    "wrong": [
      "Código de Trabajo",
      "Relación de subordinación",
      "Fuente del derecho laboral"
    ],
    "explanation": "El caso ejemplifica ius variandi: facultad patronal de modificar condiciones no esenciales dentro de límites legales."
  },
  {
    "id": "X0369",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Ius variandi»?",
    "correct": "La jefatura reorganiza tareas sin afectar derechos fundamentales",
    "wrong": [
      "Una duda sobre obligaciones patronales se consulta en dicho código",
      "El colaborador cumple horarios e instrucciones del empleador",
      "Se cita una ley y su aplicación a un conflicto de trabajo"
    ],
    "explanation": "Ius variandi: facultad patronal de modificar condiciones no esenciales dentro de límites legales."
  },
  {
    "id": "X0370",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Norma fundamental de relaciones laborales en Costa Rica",
    "correct": "Código de Trabajo",
    "wrong": [
      "Relación de subordinación",
      "Fuente del derecho laboral",
      "In dubio pro operario"
    ],
    "explanation": "Código de Trabajo: norma fundamental de relaciones laborales en Costa Rica."
  },
  {
    "id": "X0371",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "Caso práctico: Una duda sobre obligaciones patronales se consulta en dicho código. ¿Qué concepto se aplica principalmente?",
    "correct": "Código de Trabajo",
    "wrong": [
      "Relación de subordinación",
      "Fuente del derecho laboral",
      "In dubio pro operario"
    ],
    "explanation": "El caso ejemplifica código de trabajo: norma fundamental de relaciones laborales en Costa Rica."
  },
  {
    "id": "X0372",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Código de Trabajo»?",
    "correct": "Una duda sobre obligaciones patronales se consulta en dicho código",
    "wrong": [
      "El colaborador cumple horarios e instrucciones del empleador",
      "Se cita una ley y su aplicación a un conflicto de trabajo",
      "Se evalúa una norma laboral ambigua con interpretación protectora"
    ],
    "explanation": "Código de Trabajo: norma fundamental de relaciones laborales en Costa Rica."
  },
  {
    "id": "X0373",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Sujeción a dirección y órdenes laborales legítimas",
    "correct": "Relación de subordinación",
    "wrong": [
      "Fuente del derecho laboral",
      "In dubio pro operario",
      "Irrenunciabilidad"
    ],
    "explanation": "Relación de subordinación: sujeción a dirección y órdenes laborales legítimas."
  },
  {
    "id": "X0374",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "Caso práctico: El colaborador cumple horarios e instrucciones del empleador. ¿Qué concepto se aplica principalmente?",
    "correct": "Relación de subordinación",
    "wrong": [
      "Fuente del derecho laboral",
      "In dubio pro operario",
      "Irrenunciabilidad"
    ],
    "explanation": "El caso ejemplifica relación de subordinación: sujeción a dirección y órdenes laborales legítimas."
  },
  {
    "id": "X0375",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Relación de subordinación»?",
    "correct": "El colaborador cumple horarios e instrucciones del empleador",
    "wrong": [
      "Se cita una ley y su aplicación a un conflicto de trabajo",
      "Se evalúa una norma laboral ambigua con interpretación protectora",
      "Un trabajador firma una renuncia a un mínimo legal obligatorio"
    ],
    "explanation": "Relación de subordinación: sujeción a dirección y órdenes laborales legítimas."
  },
  {
    "id": "X0376",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Origen reconocido de reglas jurídicas laborales",
    "correct": "Fuente del derecho laboral",
    "wrong": [
      "In dubio pro operario",
      "Irrenunciabilidad",
      "Gratuidad"
    ],
    "explanation": "Fuente del derecho laboral: origen reconocido de reglas jurídicas laborales."
  },
  {
    "id": "X0377",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "Caso práctico: Se cita una ley y su aplicación a un conflicto de trabajo. ¿Qué concepto se aplica principalmente?",
    "correct": "Fuente del derecho laboral",
    "wrong": [
      "In dubio pro operario",
      "Irrenunciabilidad",
      "Gratuidad"
    ],
    "explanation": "El caso ejemplifica fuente del derecho laboral: origen reconocido de reglas jurídicas laborales."
  },
  {
    "id": "X0378",
    "unit": "Normativa Legal",
    "topic": "Fundamentos del derecho laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Fuente del derecho laboral»?",
    "correct": "Se cita una ley y su aplicación a un conflicto de trabajo",
    "wrong": [
      "Se evalúa una norma laboral ambigua con interpretación protectora",
      "Un trabajador firma una renuncia a un mínimo legal obligatorio",
      "Una persona busca reclamar un derecho sin costo procesal prohibitivo"
    ],
    "explanation": "Fuente del derecho laboral: origen reconocido de reglas jurídicas laborales."
  },
  {
    "id": "X0379",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Acuerdo laboral entre trabajador y patrono",
    "correct": "Contrato individual",
    "wrong": [
      "Contrato colectivo",
      "Contrato por tiempo indefinido",
      "Contrato por obra determinada"
    ],
    "explanation": "Contrato individual: acuerdo laboral entre trabajador y patrono."
  },
  {
    "id": "X0380",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "Caso práctico: Una persona acuerda tareas y salario con una empresa. ¿Qué concepto se aplica principalmente?",
    "correct": "Contrato individual",
    "wrong": [
      "Contrato colectivo",
      "Contrato por tiempo indefinido",
      "Contrato por obra determinada"
    ],
    "explanation": "El caso ejemplifica contrato individual: acuerdo laboral entre trabajador y patrono."
  },
  {
    "id": "X0381",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Contrato individual»?",
    "correct": "Una persona acuerda tareas y salario con una empresa",
    "wrong": [
      "Un grupo laboral negocia condiciones colectivas con empleadores",
      "Se contrata a una persona sin fijar fecha de fin",
      "Se contrata personal para terminar una construcción específica"
    ],
    "explanation": "Contrato individual: acuerdo laboral entre trabajador y patrono."
  },
  {
    "id": "X0382",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Acuerdo que regula condiciones para un conjunto de trabajadores en el marco legal",
    "correct": "Contrato colectivo",
    "wrong": [
      "Contrato por tiempo indefinido",
      "Contrato por obra determinada",
      "Subordinación"
    ],
    "explanation": "Contrato colectivo: acuerdo que regula condiciones para un conjunto de trabajadores en el marco legal."
  },
  {
    "id": "X0383",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "Caso práctico: Un grupo laboral negocia condiciones colectivas con empleadores. ¿Qué concepto se aplica principalmente?",
    "correct": "Contrato colectivo",
    "wrong": [
      "Contrato por tiempo indefinido",
      "Contrato por obra determinada",
      "Subordinación"
    ],
    "explanation": "El caso ejemplifica contrato colectivo: acuerdo que regula condiciones para un conjunto de trabajadores en el marco legal."
  },
  {
    "id": "X0384",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Contrato colectivo»?",
    "correct": "Un grupo laboral negocia condiciones colectivas con empleadores",
    "wrong": [
      "Se contrata a una persona sin fijar fecha de fin",
      "Se contrata personal para terminar una construcción específica",
      "Un supervisor fija tareas y horarios al personal"
    ],
    "explanation": "Contrato colectivo: acuerdo que regula condiciones para un conjunto de trabajadores en el marco legal."
  },
  {
    "id": "X0385",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Vínculo laboral sin fecha predeterminada de conclusión",
    "correct": "Contrato por tiempo indefinido",
    "wrong": [
      "Contrato por obra determinada",
      "Subordinación",
      "Suspensión laboral"
    ],
    "explanation": "Contrato por tiempo indefinido: vínculo laboral sin fecha predeterminada de conclusión."
  },
  {
    "id": "X0386",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "Caso práctico: Se contrata a una persona sin fijar fecha de fin. ¿Qué concepto se aplica principalmente?",
    "correct": "Contrato por tiempo indefinido",
    "wrong": [
      "Contrato por obra determinada",
      "Subordinación",
      "Suspensión laboral"
    ],
    "explanation": "El caso ejemplifica contrato por tiempo indefinido: vínculo laboral sin fecha predeterminada de conclusión."
  },
  {
    "id": "X0387",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Contrato por tiempo indefinido»?",
    "correct": "Se contrata a una persona sin fijar fecha de fin",
    "wrong": [
      "Se contrata personal para terminar una construcción específica",
      "Un supervisor fija tareas y horarios al personal",
      "La relación se pausa por una causa legalmente admitida"
    ],
    "explanation": "Contrato por tiempo indefinido: vínculo laboral sin fecha predeterminada de conclusión."
  },
  {
    "id": "X0388",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Vínculo vinculado con la ejecución de una obra definida",
    "correct": "Contrato por obra determinada",
    "wrong": [
      "Subordinación",
      "Suspensión laboral",
      "Terminación laboral"
    ],
    "explanation": "Contrato por obra determinada: vínculo vinculado con la ejecución de una obra definida."
  },
  {
    "id": "X0389",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "Caso práctico: Se contrata personal para terminar una construcción específica. ¿Qué concepto se aplica principalmente?",
    "correct": "Contrato por obra determinada",
    "wrong": [
      "Subordinación",
      "Suspensión laboral",
      "Terminación laboral"
    ],
    "explanation": "El caso ejemplifica contrato por obra determinada: vínculo vinculado con la ejecución de una obra definida."
  },
  {
    "id": "X0390",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Contrato por obra determinada»?",
    "correct": "Se contrata personal para terminar una construcción específica",
    "wrong": [
      "Un supervisor fija tareas y horarios al personal",
      "La relación se pausa por una causa legalmente admitida",
      "Se produce el cese definitivo del vínculo contractual"
    ],
    "explanation": "Contrato por obra determinada: vínculo vinculado con la ejecución de una obra definida."
  },
  {
    "id": "X0391",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Obligación de seguir dirección laboral legítima del patrono",
    "correct": "Subordinación",
    "wrong": [
      "Suspensión laboral",
      "Terminación laboral",
      "Contrato individual"
    ],
    "explanation": "Subordinación: obligación de seguir dirección laboral legítima del patrono."
  },
  {
    "id": "X0392",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "Caso práctico: Un supervisor fija tareas y horarios al personal. ¿Qué concepto se aplica principalmente?",
    "correct": "Subordinación",
    "wrong": [
      "Suspensión laboral",
      "Terminación laboral",
      "Contrato individual"
    ],
    "explanation": "El caso ejemplifica subordinación: obligación de seguir dirección laboral legítima del patrono."
  },
  {
    "id": "X0393",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Subordinación»?",
    "correct": "Un supervisor fija tareas y horarios al personal",
    "wrong": [
      "La relación se pausa por una causa legalmente admitida",
      "Se produce el cese definitivo del vínculo contractual",
      "Una persona acuerda tareas y salario con una empresa"
    ],
    "explanation": "Subordinación: obligación de seguir dirección laboral legítima del patrono."
  },
  {
    "id": "X0394",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Interrupción temporal de obligaciones principales sin extinguir necesariamente el vínculo",
    "correct": "Suspensión laboral",
    "wrong": [
      "Terminación laboral",
      "Contrato individual",
      "Contrato colectivo"
    ],
    "explanation": "Suspensión laboral: interrupción temporal de obligaciones principales sin extinguir necesariamente el vínculo."
  },
  {
    "id": "X0395",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "Caso práctico: La relación se pausa por una causa legalmente admitida. ¿Qué concepto se aplica principalmente?",
    "correct": "Suspensión laboral",
    "wrong": [
      "Terminación laboral",
      "Contrato individual",
      "Contrato colectivo"
    ],
    "explanation": "El caso ejemplifica suspensión laboral: interrupción temporal de obligaciones principales sin extinguir necesariamente el vínculo."
  },
  {
    "id": "X0396",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Suspensión laboral»?",
    "correct": "La relación se pausa por una causa legalmente admitida",
    "wrong": [
      "Se produce el cese definitivo del vínculo contractual",
      "Una persona acuerda tareas y salario con una empresa",
      "Un grupo laboral negocia condiciones colectivas con empleadores"
    ],
    "explanation": "Suspensión laboral: interrupción temporal de obligaciones principales sin extinguir necesariamente el vínculo."
  },
  {
    "id": "X0397",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Qué concepto corresponde a esta definición? Finalización de la relación de trabajo por causa procedente",
    "correct": "Terminación laboral",
    "wrong": [
      "Contrato individual",
      "Contrato colectivo",
      "Contrato por tiempo indefinido"
    ],
    "explanation": "Terminación laboral: finalización de la relación de trabajo por causa procedente."
  },
  {
    "id": "X0398",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "Caso práctico: Se produce el cese definitivo del vínculo contractual. ¿Qué concepto se aplica principalmente?",
    "correct": "Terminación laboral",
    "wrong": [
      "Contrato individual",
      "Contrato colectivo",
      "Contrato por tiempo indefinido"
    ],
    "explanation": "El caso ejemplifica terminación laboral: finalización de la relación de trabajo por causa procedente."
  },
  {
    "id": "X0399",
    "unit": "Normativa Legal",
    "topic": "Contratos y relación laboral",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Terminación laboral»?",
    "correct": "Se produce el cese definitivo del vínculo contractual",
    "wrong": [
      "Una persona acuerda tareas y salario con una empresa",
      "Un grupo laboral negocia condiciones colectivas con empleadores",
      "Se contrata a una persona sin fijar fecha de fin"
    ],
    "explanation": "Terminación laboral: finalización de la relación de trabajo por causa procedente."
  },
  {
    "id": "X0400",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Qué concepto corresponde a esta definición? Mecanismo de acumulación de aportes patronales bajo la ley",
    "correct": "Fondo de capitalización laboral",
    "wrong": [
      "Protección al trabajador",
      "Aporte patronal",
      "Beneficios del fondo"
    ],
    "explanation": "Fondo de capitalización laboral: mecanismo de acumulación de aportes patronales bajo la ley."
  },
  {
    "id": "X0401",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "Caso práctico: Un empleado consulta el ahorro formado por aportes de su empleador. ¿Qué concepto se aplica principalmente?",
    "correct": "Fondo de capitalización laboral",
    "wrong": [
      "Protección al trabajador",
      "Aporte patronal",
      "Beneficios del fondo"
    ],
    "explanation": "El caso ejemplifica fondo de capitalización laboral: mecanismo de acumulación de aportes patronales bajo la ley."
  },
  {
    "id": "X0402",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Fondo de capitalización laboral»?",
    "correct": "Un empleado consulta el ahorro formado por aportes de su empleador",
    "wrong": [
      "Se explica por qué existen mecanismos de ahorro vinculados al empleo",
      "La planilla incluye un aporte a un fondo correspondiente",
      "Una persona consulta las condiciones para retirar recursos"
    ],
    "explanation": "Fondo de capitalización laboral: mecanismo de acumulación de aportes patronales bajo la ley."
  },
  {
    "id": "X0403",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Qué concepto corresponde a esta definición? Finalidad de fortalecer prestaciones y protección económica laboral",
    "correct": "Protección al trabajador",
    "wrong": [
      "Aporte patronal",
      "Beneficios del fondo",
      "Administración de fondos"
    ],
    "explanation": "Protección al trabajador: finalidad de fortalecer prestaciones y protección económica laboral."
  },
  {
    "id": "X0404",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "Caso práctico: Se explica por qué existen mecanismos de ahorro vinculados al empleo. ¿Qué concepto se aplica principalmente?",
    "correct": "Protección al trabajador",
    "wrong": [
      "Aporte patronal",
      "Beneficios del fondo",
      "Administración de fondos"
    ],
    "explanation": "El caso ejemplifica protección al trabajador: finalidad de fortalecer prestaciones y protección económica laboral."
  },
  {
    "id": "X0405",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Protección al trabajador»?",
    "correct": "Se explica por qué existen mecanismos de ahorro vinculados al empleo",
    "wrong": [
      "La planilla incluye un aporte a un fondo correspondiente",
      "Una persona consulta las condiciones para retirar recursos",
      "Una entidad reporta movimientos de una cuenta laboral"
    ],
    "explanation": "Protección al trabajador: finalidad de fortalecer prestaciones y protección económica laboral."
  },
  {
    "id": "X0406",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Qué concepto corresponde a esta definición? Contribución efectuada por el empleador según regla aplicable",
    "correct": "Aporte patronal",
    "wrong": [
      "Beneficios del fondo",
      "Administración de fondos",
      "Ahorro laboral"
    ],
    "explanation": "Aporte patronal: contribución efectuada por el empleador según regla aplicable."
  },
  {
    "id": "X0407",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "Caso práctico: La planilla incluye un aporte a un fondo correspondiente. ¿Qué concepto se aplica principalmente?",
    "correct": "Aporte patronal",
    "wrong": [
      "Beneficios del fondo",
      "Administración de fondos",
      "Ahorro laboral"
    ],
    "explanation": "El caso ejemplifica aporte patronal: contribución efectuada por el empleador según regla aplicable."
  },
  {
    "id": "X0408",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Aporte patronal»?",
    "correct": "La planilla incluye un aporte a un fondo correspondiente",
    "wrong": [
      "Una persona consulta las condiciones para retirar recursos",
      "Una entidad reporta movimientos de una cuenta laboral",
      "Se registra dinero para protección económica futura"
    ],
    "explanation": "Aporte patronal: contribución efectuada por el empleador según regla aplicable."
  },
  {
    "id": "X0409",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Qué concepto corresponde a esta definición? Prestaciones que corresponden conforme a los requisitos de cada fondo",
    "correct": "Beneficios del fondo",
    "wrong": [
      "Administración de fondos",
      "Ahorro laboral",
      "Disposición tributaria"
    ],
    "explanation": "Beneficios del fondo: prestaciones que corresponden conforme a los requisitos de cada fondo."
  },
  {
    "id": "X0410",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "Caso práctico: Una persona consulta las condiciones para retirar recursos. ¿Qué concepto se aplica principalmente?",
    "correct": "Beneficios del fondo",
    "wrong": [
      "Administración de fondos",
      "Ahorro laboral",
      "Disposición tributaria"
    ],
    "explanation": "El caso ejemplifica beneficios del fondo: prestaciones que corresponden conforme a los requisitos de cada fondo."
  },
  {
    "id": "X0411",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Beneficios del fondo»?",
    "correct": "Una persona consulta las condiciones para retirar recursos",
    "wrong": [
      "Una entidad reporta movimientos de una cuenta laboral",
      "Se registra dinero para protección económica futura",
      "El personal consulta cómo se trata tributariamente un beneficio"
    ],
    "explanation": "Beneficios del fondo: prestaciones que corresponden conforme a los requisitos de cada fondo."
  },
  {
    "id": "X0412",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Qué concepto corresponde a esta definición? Gestión y custodia organizada de aportes y rendimientos",
    "correct": "Administración de fondos",
    "wrong": [
      "Ahorro laboral",
      "Disposición tributaria",
      "Fondo de capitalización laboral"
    ],
    "explanation": "Administración de fondos: gestión y custodia organizada de aportes y rendimientos."
  },
  {
    "id": "X0413",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "Caso práctico: Una entidad reporta movimientos de una cuenta laboral. ¿Qué concepto se aplica principalmente?",
    "correct": "Administración de fondos",
    "wrong": [
      "Ahorro laboral",
      "Disposición tributaria",
      "Fondo de capitalización laboral"
    ],
    "explanation": "El caso ejemplifica administración de fondos: gestión y custodia organizada de aportes y rendimientos."
  },
  {
    "id": "X0414",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Administración de fondos»?",
    "correct": "Una entidad reporta movimientos de una cuenta laboral",
    "wrong": [
      "Se registra dinero para protección económica futura",
      "El personal consulta cómo se trata tributariamente un beneficio",
      "Un empleado consulta el ahorro formado por aportes de su empleador"
    ],
    "explanation": "Administración de fondos: gestión y custodia organizada de aportes y rendimientos."
  },
  {
    "id": "X0415",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Qué concepto corresponde a esta definición? Acumulación de recursos vinculados con una relación de trabajo",
    "correct": "Ahorro laboral",
    "wrong": [
      "Disposición tributaria",
      "Fondo de capitalización laboral",
      "Protección al trabajador"
    ],
    "explanation": "Ahorro laboral: acumulación de recursos vinculados con una relación de trabajo."
  },
  {
    "id": "X0416",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "Caso práctico: Se registra dinero para protección económica futura. ¿Qué concepto se aplica principalmente?",
    "correct": "Ahorro laboral",
    "wrong": [
      "Disposición tributaria",
      "Fondo de capitalización laboral",
      "Protección al trabajador"
    ],
    "explanation": "El caso ejemplifica ahorro laboral: acumulación de recursos vinculados con una relación de trabajo."
  },
  {
    "id": "X0417",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Ahorro laboral»?",
    "correct": "Se registra dinero para protección económica futura",
    "wrong": [
      "El personal consulta cómo se trata tributariamente un beneficio",
      "Un empleado consulta el ahorro formado por aportes de su empleador",
      "Se explica por qué existen mecanismos de ahorro vinculados al empleo"
    ],
    "explanation": "Ahorro laboral: acumulación de recursos vinculados con una relación de trabajo."
  },
  {
    "id": "X0418",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Qué concepto corresponde a esta definición? Regla fiscal prevista para aportes o prestaciones pertinentes",
    "correct": "Disposición tributaria",
    "wrong": [
      "Fondo de capitalización laboral",
      "Protección al trabajador",
      "Aporte patronal"
    ],
    "explanation": "Disposición tributaria: regla fiscal prevista para aportes o prestaciones pertinentes."
  },
  {
    "id": "X0419",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "Caso práctico: El personal consulta cómo se trata tributariamente un beneficio. ¿Qué concepto se aplica principalmente?",
    "correct": "Disposición tributaria",
    "wrong": [
      "Fondo de capitalización laboral",
      "Protección al trabajador",
      "Aporte patronal"
    ],
    "explanation": "El caso ejemplifica disposición tributaria: regla fiscal prevista para aportes o prestaciones pertinentes."
  },
  {
    "id": "X0420",
    "unit": "Normativa Legal",
    "topic": "Ley de Protección al Trabajador",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Disposición tributaria»?",
    "correct": "El personal consulta cómo se trata tributariamente un beneficio",
    "wrong": [
      "Un empleado consulta el ahorro formado por aportes de su empleador",
      "Se explica por qué existen mecanismos de ahorro vinculados al empleo",
      "La planilla incluye un aporte a un fondo correspondiente"
    ],
    "explanation": "Disposición tributaria: regla fiscal prevista para aportes o prestaciones pertinentes."
  },
  {
    "id": "X0421",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Qué concepto corresponde a esta definición? Trámite patronal para registrar a personas trabajadoras según corresponda",
    "correct": "Inscripción en la CCSS",
    "wrong": [
      "Pago de remuneración",
      "Trato digno",
      "Seguridad laboral"
    ],
    "explanation": "Inscripción en la CCSS: trámite patronal para registrar a personas trabajadoras según corresponda."
  },
  {
    "id": "X0422",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "Caso práctico: Una empresa afilia a su nuevo colaborador al seguro social. ¿Qué concepto se aplica principalmente?",
    "correct": "Inscripción en la CCSS",
    "wrong": [
      "Pago de remuneración",
      "Trato digno",
      "Seguridad laboral"
    ],
    "explanation": "El caso ejemplifica inscripción en la ccss: trámite patronal para registrar a personas trabajadoras según corresponda."
  },
  {
    "id": "X0423",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Inscripción en la CCSS»?",
    "correct": "Una empresa afilia a su nuevo colaborador al seguro social",
    "wrong": [
      "Un empleador deposita el sueldo dentro del plazo correspondiente",
      "Un supervisor evita insultos y acoso hacia su personal",
      "Se suministra capacitación y equipo ante una tarea riesgosa"
    ],
    "explanation": "Inscripción en la CCSS: trámite patronal para registrar a personas trabajadoras según corresponda."
  },
  {
    "id": "X0424",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Qué concepto corresponde a esta definición? Obligación de pagar salario conforme a lo pactado y a la ley",
    "correct": "Pago de remuneración",
    "wrong": [
      "Trato digno",
      "Seguridad laboral",
      "Cumplimiento de horario"
    ],
    "explanation": "Pago de remuneración: obligación de pagar salario conforme a lo pactado y a la ley."
  },
  {
    "id": "X0425",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "Caso práctico: Un empleador deposita el sueldo dentro del plazo correspondiente. ¿Qué concepto se aplica principalmente?",
    "correct": "Pago de remuneración",
    "wrong": [
      "Trato digno",
      "Seguridad laboral",
      "Cumplimiento de horario"
    ],
    "explanation": "El caso ejemplifica pago de remuneración: obligación de pagar salario conforme a lo pactado y a la ley."
  },
  {
    "id": "X0426",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Pago de remuneración»?",
    "correct": "Un empleador deposita el sueldo dentro del plazo correspondiente",
    "wrong": [
      "Un supervisor evita insultos y acoso hacia su personal",
      "Se suministra capacitación y equipo ante una tarea riesgosa",
      "Una empleada marca entrada y realiza su turno asignado"
    ],
    "explanation": "Pago de remuneración: obligación de pagar salario conforme a lo pactado y a la ley."
  },
  {
    "id": "X0427",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Qué concepto corresponde a esta definición? Deber de mantener respeto y no incurrir en conductas prohibidas",
    "correct": "Trato digno",
    "wrong": [
      "Seguridad laboral",
      "Cumplimiento de horario",
      "Confidencialidad laboral"
    ],
    "explanation": "Trato digno: deber de mantener respeto y no incurrir en conductas prohibidas."
  },
  {
    "id": "X0428",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "Caso práctico: Un supervisor evita insultos y acoso hacia su personal. ¿Qué concepto se aplica principalmente?",
    "correct": "Trato digno",
    "wrong": [
      "Seguridad laboral",
      "Cumplimiento de horario",
      "Confidencialidad laboral"
    ],
    "explanation": "El caso ejemplifica trato digno: deber de mantener respeto y no incurrir en conductas prohibidas."
  },
  {
    "id": "X0429",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Trato digno»?",
    "correct": "Un supervisor evita insultos y acoso hacia su personal",
    "wrong": [
      "Se suministra capacitación y equipo ante una tarea riesgosa",
      "Una empleada marca entrada y realiza su turno asignado",
      "Un colaborador no divulga datos privados de clientes"
    ],
    "explanation": "Trato digno: deber de mantener respeto y no incurrir en conductas prohibidas."
  },
  {
    "id": "X0430",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Qué concepto corresponde a esta definición? Deber de prevenir peligros vinculados con el trabajo",
    "correct": "Seguridad laboral",
    "wrong": [
      "Cumplimiento de horario",
      "Confidencialidad laboral",
      "Prohibición de discriminación"
    ],
    "explanation": "Seguridad laboral: deber de prevenir peligros vinculados con el trabajo."
  },
  {
    "id": "X0431",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "Caso práctico: Se suministra capacitación y equipo ante una tarea riesgosa. ¿Qué concepto se aplica principalmente?",
    "correct": "Seguridad laboral",
    "wrong": [
      "Cumplimiento de horario",
      "Confidencialidad laboral",
      "Prohibición de discriminación"
    ],
    "explanation": "El caso ejemplifica seguridad laboral: deber de prevenir peligros vinculados con el trabajo."
  },
  {
    "id": "X0432",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Seguridad laboral»?",
    "correct": "Se suministra capacitación y equipo ante una tarea riesgosa",
    "wrong": [
      "Una empleada marca entrada y realiza su turno asignado",
      "Un colaborador no divulga datos privados de clientes",
      "La jefatura aplica criterios de ascenso sin sesgos prohibidos"
    ],
    "explanation": "Seguridad laboral: deber de prevenir peligros vinculados con el trabajo."
  },
  {
    "id": "X0433",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Qué concepto corresponde a esta definición? Obligación de respetar la jornada y asistencia acordadas",
    "correct": "Cumplimiento de horario",
    "wrong": [
      "Confidencialidad laboral",
      "Prohibición de discriminación",
      "Inscripción en la CCSS"
    ],
    "explanation": "Cumplimiento de horario: obligación de respetar la jornada y asistencia acordadas."
  },
  {
    "id": "X0434",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "Caso práctico: Una empleada marca entrada y realiza su turno asignado. ¿Qué concepto se aplica principalmente?",
    "correct": "Cumplimiento de horario",
    "wrong": [
      "Confidencialidad laboral",
      "Prohibición de discriminación",
      "Inscripción en la CCSS"
    ],
    "explanation": "El caso ejemplifica cumplimiento de horario: obligación de respetar la jornada y asistencia acordadas."
  },
  {
    "id": "X0435",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Cumplimiento de horario»?",
    "correct": "Una empleada marca entrada y realiza su turno asignado",
    "wrong": [
      "Un colaborador no divulga datos privados de clientes",
      "La jefatura aplica criterios de ascenso sin sesgos prohibidos",
      "Una empresa afilia a su nuevo colaborador al seguro social"
    ],
    "explanation": "Cumplimiento de horario: obligación de respetar la jornada y asistencia acordadas."
  },
  {
    "id": "X0436",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Qué concepto corresponde a esta definición? Protección de información que el puesto obliga a resguardar",
    "correct": "Confidencialidad laboral",
    "wrong": [
      "Prohibición de discriminación",
      "Inscripción en la CCSS",
      "Pago de remuneración"
    ],
    "explanation": "Confidencialidad laboral: protección de información que el puesto obliga a resguardar."
  },
  {
    "id": "X0437",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "Caso práctico: Un colaborador no divulga datos privados de clientes. ¿Qué concepto se aplica principalmente?",
    "correct": "Confidencialidad laboral",
    "wrong": [
      "Prohibición de discriminación",
      "Inscripción en la CCSS",
      "Pago de remuneración"
    ],
    "explanation": "El caso ejemplifica confidencialidad laboral: protección de información que el puesto obliga a resguardar."
  },
  {
    "id": "X0438",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Confidencialidad laboral»?",
    "correct": "Un colaborador no divulga datos privados de clientes",
    "wrong": [
      "La jefatura aplica criterios de ascenso sin sesgos prohibidos",
      "Una empresa afilia a su nuevo colaborador al seguro social",
      "Un empleador deposita el sueldo dentro del plazo correspondiente"
    ],
    "explanation": "Confidencialidad laboral: protección de información que el puesto obliga a resguardar."
  },
  {
    "id": "X0439",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Qué concepto corresponde a esta definición? Impedimento de trato desigual injustificado en el trabajo",
    "correct": "Prohibición de discriminación",
    "wrong": [
      "Inscripción en la CCSS",
      "Pago de remuneración",
      "Trato digno"
    ],
    "explanation": "Prohibición de discriminación: impedimento de trato desigual injustificado en el trabajo."
  },
  {
    "id": "X0440",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "Caso práctico: La jefatura aplica criterios de ascenso sin sesgos prohibidos. ¿Qué concepto se aplica principalmente?",
    "correct": "Prohibición de discriminación",
    "wrong": [
      "Inscripción en la CCSS",
      "Pago de remuneración",
      "Trato digno"
    ],
    "explanation": "El caso ejemplifica prohibición de discriminación: impedimento de trato desigual injustificado en el trabajo."
  },
  {
    "id": "X0441",
    "unit": "Normativa Legal",
    "topic": "Obligaciones y prohibiciones laborales",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Prohibición de discriminación»?",
    "correct": "La jefatura aplica criterios de ascenso sin sesgos prohibidos",
    "wrong": [
      "Una empresa afilia a su nuevo colaborador al seguro social",
      "Un empleador deposita el sueldo dentro del plazo correspondiente",
      "Un supervisor evita insultos y acoso hacia su personal"
    ],
    "explanation": "Prohibición de discriminación: impedimento de trato desigual injustificado en el trabajo."
  },
  {
    "id": "X0442",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Qué concepto corresponde a esta definición? Entidad pública titular de la potestad de exigir el tributo",
    "correct": "Sujeto activo",
    "wrong": [
      "Sujeto pasivo",
      "Hecho generador",
      "Impuesto directo"
    ],
    "explanation": "Sujeto activo: entidad pública titular de la potestad de exigir el tributo."
  },
  {
    "id": "X0443",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "Caso práctico: La administración tributaria reclama un impuesto legalmente debido. ¿Qué concepto se aplica principalmente?",
    "correct": "Sujeto activo",
    "wrong": [
      "Sujeto pasivo",
      "Hecho generador",
      "Impuesto directo"
    ],
    "explanation": "El caso ejemplifica sujeto activo: entidad pública titular de la potestad de exigir el tributo."
  },
  {
    "id": "X0444",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Sujeto activo»?",
    "correct": "La administración tributaria reclama un impuesto legalmente debido",
    "wrong": [
      "Un contribuyente debe declarar un tributo que le corresponde",
      "Se produce una operación gravada que da lugar a un impuesto",
      "Se estudia un impuesto sobre renta obtenida"
    ],
    "explanation": "Sujeto activo: entidad pública titular de la potestad de exigir el tributo."
  },
  {
    "id": "X0445",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Qué concepto corresponde a esta definición? Persona obligada tributariamente conforme a la ley",
    "correct": "Sujeto pasivo",
    "wrong": [
      "Hecho generador",
      "Impuesto directo",
      "Impuesto indirecto"
    ],
    "explanation": "Sujeto pasivo: persona obligada tributariamente conforme a la ley."
  },
  {
    "id": "X0446",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "Caso práctico: Un contribuyente debe declarar un tributo que le corresponde. ¿Qué concepto se aplica principalmente?",
    "correct": "Sujeto pasivo",
    "wrong": [
      "Hecho generador",
      "Impuesto directo",
      "Impuesto indirecto"
    ],
    "explanation": "El caso ejemplifica sujeto pasivo: persona obligada tributariamente conforme a la ley."
  },
  {
    "id": "X0447",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Sujeto pasivo»?",
    "correct": "Un contribuyente debe declarar un tributo que le corresponde",
    "wrong": [
      "Se produce una operación gravada que da lugar a un impuesto",
      "Se estudia un impuesto sobre renta obtenida",
      "Una compra incluye el IVA aplicable"
    ],
    "explanation": "Sujeto pasivo: persona obligada tributariamente conforme a la ley."
  },
  {
    "id": "X0448",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Qué concepto corresponde a esta definición? Situación prevista en la ley que origina la obligación tributaria",
    "correct": "Hecho generador",
    "wrong": [
      "Impuesto directo",
      "Impuesto indirecto",
      "Declaración tributaria"
    ],
    "explanation": "Hecho generador: situación prevista en la ley que origina la obligación tributaria."
  },
  {
    "id": "X0449",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "Caso práctico: Se produce una operación gravada que da lugar a un impuesto. ¿Qué concepto se aplica principalmente?",
    "correct": "Hecho generador",
    "wrong": [
      "Impuesto directo",
      "Impuesto indirecto",
      "Declaración tributaria"
    ],
    "explanation": "El caso ejemplifica hecho generador: situación prevista en la ley que origina la obligación tributaria."
  },
  {
    "id": "X0450",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Hecho generador»?",
    "correct": "Se produce una operación gravada que da lugar a un impuesto",
    "wrong": [
      "Se estudia un impuesto sobre renta obtenida",
      "Una compra incluye el IVA aplicable",
      "Una empresa presenta su declaración correspondiente"
    ],
    "explanation": "Hecho generador: situación prevista en la ley que origina la obligación tributaria."
  },
  {
    "id": "X0451",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Qué concepto corresponde a esta definición? Tributo que recae directamente sobre capacidad económica definida",
    "correct": "Impuesto directo",
    "wrong": [
      "Impuesto indirecto",
      "Declaración tributaria",
      "Obligación del contribuyente"
    ],
    "explanation": "Impuesto directo: tributo que recae directamente sobre capacidad económica definida."
  },
  {
    "id": "X0452",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "Caso práctico: Se estudia un impuesto sobre renta obtenida. ¿Qué concepto se aplica principalmente?",
    "correct": "Impuesto directo",
    "wrong": [
      "Impuesto indirecto",
      "Declaración tributaria",
      "Obligación del contribuyente"
    ],
    "explanation": "El caso ejemplifica impuesto directo: tributo que recae directamente sobre capacidad económica definida."
  },
  {
    "id": "X0453",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Impuesto directo»?",
    "correct": "Se estudia un impuesto sobre renta obtenida",
    "wrong": [
      "Una compra incluye el IVA aplicable",
      "Una empresa presenta su declaración correspondiente",
      "Un comercio conserva comprobantes para respaldar operaciones"
    ],
    "explanation": "Impuesto directo: tributo que recae directamente sobre capacidad económica definida."
  },
  {
    "id": "X0454",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Qué concepto corresponde a esta definición? Tributo relacionado con consumo u operaciones gravadas",
    "correct": "Impuesto indirecto",
    "wrong": [
      "Declaración tributaria",
      "Obligación del contribuyente",
      "Sujeto activo"
    ],
    "explanation": "Impuesto indirecto: tributo relacionado con consumo u operaciones gravadas."
  },
  {
    "id": "X0455",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "Caso práctico: Una compra incluye el IVA aplicable. ¿Qué concepto se aplica principalmente?",
    "correct": "Impuesto indirecto",
    "wrong": [
      "Declaración tributaria",
      "Obligación del contribuyente",
      "Sujeto activo"
    ],
    "explanation": "El caso ejemplifica impuesto indirecto: tributo relacionado con consumo u operaciones gravadas."
  },
  {
    "id": "X0456",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Impuesto indirecto»?",
    "correct": "Una compra incluye el IVA aplicable",
    "wrong": [
      "Una empresa presenta su declaración correspondiente",
      "Un comercio conserva comprobantes para respaldar operaciones",
      "La administración tributaria reclama un impuesto legalmente debido"
    ],
    "explanation": "Impuesto indirecto: tributo relacionado con consumo u operaciones gravadas."
  },
  {
    "id": "X0457",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Qué concepto corresponde a esta definición? Comunicación formal de datos fiscales exigidos",
    "correct": "Declaración tributaria",
    "wrong": [
      "Obligación del contribuyente",
      "Sujeto activo",
      "Sujeto pasivo"
    ],
    "explanation": "Declaración tributaria: comunicación formal de datos fiscales exigidos."
  },
  {
    "id": "X0458",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "Caso práctico: Una empresa presenta su declaración correspondiente. ¿Qué concepto se aplica principalmente?",
    "correct": "Declaración tributaria",
    "wrong": [
      "Obligación del contribuyente",
      "Sujeto activo",
      "Sujeto pasivo"
    ],
    "explanation": "El caso ejemplifica declaración tributaria: comunicación formal de datos fiscales exigidos."
  },
  {
    "id": "X0459",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Declaración tributaria»?",
    "correct": "Una empresa presenta su declaración correspondiente",
    "wrong": [
      "Un comercio conserva comprobantes para respaldar operaciones",
      "La administración tributaria reclama un impuesto legalmente debido",
      "Un contribuyente debe declarar un tributo que le corresponde"
    ],
    "explanation": "Declaración tributaria: comunicación formal de datos fiscales exigidos."
  },
  {
    "id": "X0460",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Qué concepto corresponde a esta definición? Deber de registrar, declarar o pagar conforme a la norma",
    "correct": "Obligación del contribuyente",
    "wrong": [
      "Sujeto activo",
      "Sujeto pasivo",
      "Hecho generador"
    ],
    "explanation": "Obligación del contribuyente: deber de registrar, declarar o pagar conforme a la norma."
  },
  {
    "id": "X0461",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "Caso práctico: Un comercio conserva comprobantes para respaldar operaciones. ¿Qué concepto se aplica principalmente?",
    "correct": "Obligación del contribuyente",
    "wrong": [
      "Sujeto activo",
      "Sujeto pasivo",
      "Hecho generador"
    ],
    "explanation": "El caso ejemplifica obligación del contribuyente: deber de registrar, declarar o pagar conforme a la norma."
  },
  {
    "id": "X0462",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Obligación del contribuyente»?",
    "correct": "Un comercio conserva comprobantes para respaldar operaciones",
    "wrong": [
      "La administración tributaria reclama un impuesto legalmente debido",
      "Un contribuyente debe declarar un tributo que le corresponde",
      "Se produce una operación gravada que da lugar a un impuesto"
    ],
    "explanation": "Obligación del contribuyente: deber de registrar, declarar o pagar conforme a la norma."
  },
  {
    "id": "X0463",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Qué concepto corresponde a esta definición? Sistema que registra y comunica operaciones económicas",
    "correct": "Contabilidad",
    "wrong": [
      "Usuario interno",
      "Usuario externo",
      "Contador público"
    ],
    "explanation": "Contabilidad: sistema que registra y comunica operaciones económicas."
  },
  {
    "id": "X0464",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "Caso práctico: Una empresa anota compras, ventas y pagos para producir informes. ¿Qué concepto se aplica principalmente?",
    "correct": "Contabilidad",
    "wrong": [
      "Usuario interno",
      "Usuario externo",
      "Contador público"
    ],
    "explanation": "El caso ejemplifica contabilidad: sistema que registra y comunica operaciones económicas."
  },
  {
    "id": "X0465",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Contabilidad»?",
    "correct": "Una empresa anota compras, ventas y pagos para producir informes",
    "wrong": [
      "Una gerenta revisa ingresos para decidir un presupuesto",
      "Un banco revisa estados financieros antes de prestar dinero",
      "Se requiere una certificación profesional autorizada"
    ],
    "explanation": "Contabilidad: sistema que registra y comunica operaciones económicas."
  },
  {
    "id": "X0466",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Qué concepto corresponde a esta definición? Persona dentro de la organización que utiliza información contable",
    "correct": "Usuario interno",
    "wrong": [
      "Usuario externo",
      "Contador público",
      "Contador privado"
    ],
    "explanation": "Usuario interno: persona dentro de la organización que utiliza información contable."
  },
  {
    "id": "X0467",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "Caso práctico: Una gerenta revisa ingresos para decidir un presupuesto. ¿Qué concepto se aplica principalmente?",
    "correct": "Usuario interno",
    "wrong": [
      "Usuario externo",
      "Contador público",
      "Contador privado"
    ],
    "explanation": "El caso ejemplifica usuario interno: persona dentro de la organización que utiliza información contable."
  },
  {
    "id": "X0468",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Usuario interno»?",
    "correct": "Una gerenta revisa ingresos para decidir un presupuesto",
    "wrong": [
      "Un banco revisa estados financieros antes de prestar dinero",
      "Se requiere una certificación profesional autorizada",
      "Se elaboran asientos y controles financieros de la empresa"
    ],
    "explanation": "Usuario interno: persona dentro de la organización que utiliza información contable."
  },
  {
    "id": "X0469",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Qué concepto corresponde a esta definición? Persona o institución ajena que consulta información contable",
    "correct": "Usuario externo",
    "wrong": [
      "Contador público",
      "Contador privado",
      "Información financiera"
    ],
    "explanation": "Usuario externo: persona o institución ajena que consulta información contable."
  },
  {
    "id": "X0470",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "Caso práctico: Un banco revisa estados financieros antes de prestar dinero. ¿Qué concepto se aplica principalmente?",
    "correct": "Usuario externo",
    "wrong": [
      "Contador público",
      "Contador privado",
      "Información financiera"
    ],
    "explanation": "El caso ejemplifica usuario externo: persona o institución ajena que consulta información contable."
  },
  {
    "id": "X0471",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Usuario externo»?",
    "correct": "Un banco revisa estados financieros antes de prestar dinero",
    "wrong": [
      "Se requiere una certificación profesional autorizada",
      "Se elaboran asientos y controles financieros de la empresa",
      "Los directivos consultan cifras de activos y utilidad"
    ],
    "explanation": "Usuario externo: persona o institución ajena que consulta información contable."
  },
  {
    "id": "X0472",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Qué concepto corresponde a esta definición? Profesional facultado para servicios de fe pública contable conforme a normas",
    "correct": "Contador público",
    "wrong": [
      "Contador privado",
      "Información financiera",
      "Registro contable"
    ],
    "explanation": "Contador público: profesional facultado para servicios de fe pública contable conforme a normas."
  },
  {
    "id": "X0473",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "Caso práctico: Se requiere una certificación profesional autorizada. ¿Qué concepto se aplica principalmente?",
    "correct": "Contador público",
    "wrong": [
      "Contador privado",
      "Información financiera",
      "Registro contable"
    ],
    "explanation": "El caso ejemplifica contador público: profesional facultado para servicios de fe pública contable conforme a normas."
  },
  {
    "id": "X0474",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Contador público»?",
    "correct": "Se requiere una certificación profesional autorizada",
    "wrong": [
      "Se elaboran asientos y controles financieros de la empresa",
      "Los directivos consultan cifras de activos y utilidad",
      "Se contabiliza el pago de un recibo a proveedor"
    ],
    "explanation": "Contador público: profesional facultado para servicios de fe pública contable conforme a normas."
  },
  {
    "id": "X0475",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Qué concepto corresponde a esta definición? Profesional centrado en registrar y analizar contabilidad de una entidad",
    "correct": "Contador privado",
    "wrong": [
      "Información financiera",
      "Registro contable",
      "Contabilidad"
    ],
    "explanation": "Contador privado: profesional centrado en registrar y analizar contabilidad de una entidad."
  },
  {
    "id": "X0476",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "Caso práctico: Se elaboran asientos y controles financieros de la empresa. ¿Qué concepto se aplica principalmente?",
    "correct": "Contador privado",
    "wrong": [
      "Información financiera",
      "Registro contable",
      "Contabilidad"
    ],
    "explanation": "El caso ejemplifica contador privado: profesional centrado en registrar y analizar contabilidad de una entidad."
  },
  {
    "id": "X0477",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Contador privado»?",
    "correct": "Se elaboran asientos y controles financieros de la empresa",
    "wrong": [
      "Los directivos consultan cifras de activos y utilidad",
      "Se contabiliza el pago de un recibo a proveedor",
      "Una empresa anota compras, ventas y pagos para producir informes"
    ],
    "explanation": "Contador privado: profesional centrado en registrar y analizar contabilidad de una entidad."
  },
  {
    "id": "X0478",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Qué concepto corresponde a esta definición? Datos organizados sobre situación y resultados económicos",
    "correct": "Información financiera",
    "wrong": [
      "Registro contable",
      "Contabilidad",
      "Usuario interno"
    ],
    "explanation": "Información financiera: datos organizados sobre situación y resultados económicos."
  },
  {
    "id": "X0479",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "Caso práctico: Los directivos consultan cifras de activos y utilidad. ¿Qué concepto se aplica principalmente?",
    "correct": "Información financiera",
    "wrong": [
      "Registro contable",
      "Contabilidad",
      "Usuario interno"
    ],
    "explanation": "El caso ejemplifica información financiera: datos organizados sobre situación y resultados económicos."
  },
  {
    "id": "X0480",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Información financiera»?",
    "correct": "Los directivos consultan cifras de activos y utilidad",
    "wrong": [
      "Se contabiliza el pago de un recibo a proveedor",
      "Una empresa anota compras, ventas y pagos para producir informes",
      "Una gerenta revisa ingresos para decidir un presupuesto"
    ],
    "explanation": "Información financiera: datos organizados sobre situación y resultados económicos."
  },
  {
    "id": "X0481",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Qué concepto corresponde a esta definición? Anotación sistemática de transacciones económicas",
    "correct": "Registro contable",
    "wrong": [
      "Contabilidad",
      "Usuario interno",
      "Usuario externo"
    ],
    "explanation": "Registro contable: anotación sistemática de transacciones económicas."
  },
  {
    "id": "X0482",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "Caso práctico: Se contabiliza el pago de un recibo a proveedor. ¿Qué concepto se aplica principalmente?",
    "correct": "Registro contable",
    "wrong": [
      "Contabilidad",
      "Usuario interno",
      "Usuario externo"
    ],
    "explanation": "El caso ejemplifica registro contable: anotación sistemática de transacciones económicas."
  },
  {
    "id": "X0483",
    "unit": "Contabilidad",
    "topic": "Fundamentos de contabilidad",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Registro contable»?",
    "correct": "Se contabiliza el pago de un recibo a proveedor",
    "wrong": [
      "Una empresa anota compras, ventas y pagos para producir informes",
      "Una gerenta revisa ingresos para decidir un presupuesto",
      "Un banco revisa estados financieros antes de prestar dinero"
    ],
    "explanation": "Registro contable: anotación sistemática de transacciones económicas."
  },
  {
    "id": "X0484",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Qué concepto corresponde a esta definición? Recurso económico controlado por la entidad",
    "correct": "Activo",
    "wrong": [
      "Pasivo",
      "Patrimonio",
      "Ingreso"
    ],
    "explanation": "Activo: recurso económico controlado por la entidad."
  },
  {
    "id": "X0485",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "Caso práctico: La empresa posee dinero en caja y maquinaria. ¿Qué concepto se aplica principalmente?",
    "correct": "Activo",
    "wrong": [
      "Pasivo",
      "Patrimonio",
      "Ingreso"
    ],
    "explanation": "El caso ejemplifica activo: recurso económico controlado por la entidad."
  },
  {
    "id": "X0486",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Activo»?",
    "correct": "La empresa posee dinero en caja y maquinaria",
    "wrong": [
      "La compañía mantiene un préstamo bancario por pagar",
      "El valor neto empresarial corresponde a propietarios",
      "Una empresa reconoce ventas de sus servicios"
    ],
    "explanation": "Activo: recurso económico controlado por la entidad."
  },
  {
    "id": "X0487",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Qué concepto corresponde a esta definición? Obligación presente de la empresa frente a terceros",
    "correct": "Pasivo",
    "wrong": [
      "Patrimonio",
      "Ingreso",
      "Gasto"
    ],
    "explanation": "Pasivo: obligación presente de la empresa frente a terceros."
  },
  {
    "id": "X0488",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "Caso práctico: La compañía mantiene un préstamo bancario por pagar. ¿Qué concepto se aplica principalmente?",
    "correct": "Pasivo",
    "wrong": [
      "Patrimonio",
      "Ingreso",
      "Gasto"
    ],
    "explanation": "El caso ejemplifica pasivo: obligación presente de la empresa frente a terceros."
  },
  {
    "id": "X0489",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Pasivo»?",
    "correct": "La compañía mantiene un préstamo bancario por pagar",
    "wrong": [
      "El valor neto empresarial corresponde a propietarios",
      "Una empresa reconoce ventas de sus servicios",
      "Se contabiliza el pago mensual de alquiler"
    ],
    "explanation": "Pasivo: obligación presente de la empresa frente a terceros."
  },
  {
    "id": "X0490",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Qué concepto corresponde a esta definición? Participación residual sobre activos después de deducir pasivos",
    "correct": "Patrimonio",
    "wrong": [
      "Ingreso",
      "Gasto",
      "Debe"
    ],
    "explanation": "Patrimonio: participación residual sobre activos después de deducir pasivos."
  },
  {
    "id": "X0491",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "Caso práctico: El valor neto empresarial corresponde a propietarios. ¿Qué concepto se aplica principalmente?",
    "correct": "Patrimonio",
    "wrong": [
      "Ingreso",
      "Gasto",
      "Debe"
    ],
    "explanation": "El caso ejemplifica patrimonio: participación residual sobre activos después de deducir pasivos."
  },
  {
    "id": "X0492",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Patrimonio»?",
    "correct": "El valor neto empresarial corresponde a propietarios",
    "wrong": [
      "Una empresa reconoce ventas de sus servicios",
      "Se contabiliza el pago mensual de alquiler",
      "Un asiento coloca el aumento de caja en el lado izquierdo"
    ],
    "explanation": "Patrimonio: participación residual sobre activos después de deducir pasivos."
  },
  {
    "id": "X0493",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Qué concepto corresponde a esta definición? Aumento de beneficios económicos por actividad generadora",
    "correct": "Ingreso",
    "wrong": [
      "Gasto",
      "Debe",
      "Haber"
    ],
    "explanation": "Ingreso: aumento de beneficios económicos por actividad generadora."
  },
  {
    "id": "X0494",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "Caso práctico: Una empresa reconoce ventas de sus servicios. ¿Qué concepto se aplica principalmente?",
    "correct": "Ingreso",
    "wrong": [
      "Gasto",
      "Debe",
      "Haber"
    ],
    "explanation": "El caso ejemplifica ingreso: aumento de beneficios económicos por actividad generadora."
  },
  {
    "id": "X0495",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Ingreso»?",
    "correct": "Una empresa reconoce ventas de sus servicios",
    "wrong": [
      "Se contabiliza el pago mensual de alquiler",
      "Un asiento coloca el aumento de caja en el lado izquierdo",
      "Un asiento registra en la derecha un incremento de préstamo"
    ],
    "explanation": "Ingreso: aumento de beneficios económicos por actividad generadora."
  },
  {
    "id": "X0496",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Qué concepto corresponde a esta definición? Consumo o disminución económica asociado a operaciones",
    "correct": "Gasto",
    "wrong": [
      "Debe",
      "Haber",
      "Activo"
    ],
    "explanation": "Gasto: consumo o disminución económica asociado a operaciones."
  },
  {
    "id": "X0497",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "Caso práctico: Se contabiliza el pago mensual de alquiler. ¿Qué concepto se aplica principalmente?",
    "correct": "Gasto",
    "wrong": [
      "Debe",
      "Haber",
      "Activo"
    ],
    "explanation": "El caso ejemplifica gasto: consumo o disminución económica asociado a operaciones."
  },
  {
    "id": "X0498",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Gasto»?",
    "correct": "Se contabiliza el pago mensual de alquiler",
    "wrong": [
      "Un asiento coloca el aumento de caja en el lado izquierdo",
      "Un asiento registra en la derecha un incremento de préstamo",
      "La empresa posee dinero en caja y maquinaria"
    ],
    "explanation": "Gasto: consumo o disminución económica asociado a operaciones."
  },
  {
    "id": "X0499",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Qué concepto corresponde a esta definición? Columna izquierda utilizada en el registro de una cuenta",
    "correct": "Debe",
    "wrong": [
      "Haber",
      "Activo",
      "Pasivo"
    ],
    "explanation": "Debe: columna izquierda utilizada en el registro de una cuenta."
  },
  {
    "id": "X0500",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "Caso práctico: Un asiento coloca el aumento de caja en el lado izquierdo. ¿Qué concepto se aplica principalmente?",
    "correct": "Debe",
    "wrong": [
      "Haber",
      "Activo",
      "Pasivo"
    ],
    "explanation": "El caso ejemplifica debe: columna izquierda utilizada en el registro de una cuenta."
  },
  {
    "id": "X0501",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Debe»?",
    "correct": "Un asiento coloca el aumento de caja en el lado izquierdo",
    "wrong": [
      "Un asiento registra en la derecha un incremento de préstamo",
      "La empresa posee dinero en caja y maquinaria",
      "La compañía mantiene un préstamo bancario por pagar"
    ],
    "explanation": "Debe: columna izquierda utilizada en el registro de una cuenta."
  },
  {
    "id": "X0502",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Qué concepto corresponde a esta definición? Columna derecha utilizada en el registro de una cuenta",
    "correct": "Haber",
    "wrong": [
      "Activo",
      "Pasivo",
      "Patrimonio"
    ],
    "explanation": "Haber: columna derecha utilizada en el registro de una cuenta."
  },
  {
    "id": "X0503",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "Caso práctico: Un asiento registra en la derecha un incremento de préstamo. ¿Qué concepto se aplica principalmente?",
    "correct": "Haber",
    "wrong": [
      "Activo",
      "Pasivo",
      "Patrimonio"
    ],
    "explanation": "El caso ejemplifica haber: columna derecha utilizada en el registro de una cuenta."
  },
  {
    "id": "X0504",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Haber»?",
    "correct": "Un asiento registra en la derecha un incremento de préstamo",
    "wrong": [
      "La empresa posee dinero en caja y maquinaria",
      "La compañía mantiene un préstamo bancario por pagar",
      "El valor neto empresarial corresponde a propietarios"
    ],
    "explanation": "Haber: columna derecha utilizada en el registro de una cuenta."
  },
  {
    "id": "X0505",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Qué concepto corresponde a esta definición? Bienes y derechos realizables o utilizables en el ciclo normal o corto plazo",
    "correct": "Activo corriente",
    "wrong": [
      "Propiedad planta y equipo",
      "Pasivo corriente",
      "Pasivo a largo plazo"
    ],
    "explanation": "Activo corriente: bienes y derechos realizables o utilizables en el ciclo normal o corto plazo."
  },
  {
    "id": "X0506",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "Caso práctico: El negocio posee efectivo e inventarios disponibles. ¿Qué concepto se aplica principalmente?",
    "correct": "Activo corriente",
    "wrong": [
      "Propiedad planta y equipo",
      "Pasivo corriente",
      "Pasivo a largo plazo"
    ],
    "explanation": "El caso ejemplifica activo corriente: bienes y derechos realizables o utilizables en el ciclo normal o corto plazo."
  },
  {
    "id": "X0507",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Activo corriente»?",
    "correct": "El negocio posee efectivo e inventarios disponibles",
    "wrong": [
      "Una empresa tiene un camión y equipos de oficina",
      "Una factura a proveedor vence el mes próximo",
      "Un préstamo empresarial se pagará en varios años"
    ],
    "explanation": "Activo corriente: bienes y derechos realizables o utilizables en el ciclo normal o corto plazo."
  },
  {
    "id": "X0508",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Qué concepto corresponde a esta definición? Activos tangibles destinados a uso continuo en la actividad",
    "correct": "Propiedad planta y equipo",
    "wrong": [
      "Pasivo corriente",
      "Pasivo a largo plazo",
      "Estado de resultados"
    ],
    "explanation": "Propiedad planta y equipo: activos tangibles destinados a uso continuo en la actividad."
  },
  {
    "id": "X0509",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "Caso práctico: Una empresa tiene un camión y equipos de oficina. ¿Qué concepto se aplica principalmente?",
    "correct": "Propiedad planta y equipo",
    "wrong": [
      "Pasivo corriente",
      "Pasivo a largo plazo",
      "Estado de resultados"
    ],
    "explanation": "El caso ejemplifica propiedad planta y equipo: activos tangibles destinados a uso continuo en la actividad."
  },
  {
    "id": "X0510",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Propiedad planta y equipo»?",
    "correct": "Una empresa tiene un camión y equipos de oficina",
    "wrong": [
      "Una factura a proveedor vence el mes próximo",
      "Un préstamo empresarial se pagará en varios años",
      "Gerencia consulta si obtuvo utilidad o pérdida"
    ],
    "explanation": "Propiedad planta y equipo: activos tangibles destinados a uso continuo en la actividad."
  },
  {
    "id": "X0511",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Qué concepto corresponde a esta definición? Obligaciones exigibles en el corto plazo",
    "correct": "Pasivo corriente",
    "wrong": [
      "Pasivo a largo plazo",
      "Estado de resultados",
      "Balance de situación"
    ],
    "explanation": "Pasivo corriente: obligaciones exigibles en el corto plazo."
  },
  {
    "id": "X0512",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "Caso práctico: Una factura a proveedor vence el mes próximo. ¿Qué concepto se aplica principalmente?",
    "correct": "Pasivo corriente",
    "wrong": [
      "Pasivo a largo plazo",
      "Estado de resultados",
      "Balance de situación"
    ],
    "explanation": "El caso ejemplifica pasivo corriente: obligaciones exigibles en el corto plazo."
  },
  {
    "id": "X0513",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Pasivo corriente»?",
    "correct": "Una factura a proveedor vence el mes próximo",
    "wrong": [
      "Un préstamo empresarial se pagará en varios años",
      "Gerencia consulta si obtuvo utilidad o pérdida",
      "El contador muestra posición financiera al 31 de diciembre"
    ],
    "explanation": "Pasivo corriente: obligaciones exigibles en el corto plazo."
  },
  {
    "id": "X0514",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Qué concepto corresponde a esta definición? Obligaciones cuyo vencimiento corresponde al largo plazo",
    "correct": "Pasivo a largo plazo",
    "wrong": [
      "Estado de resultados",
      "Balance de situación",
      "Utilidad"
    ],
    "explanation": "Pasivo a largo plazo: obligaciones cuyo vencimiento corresponde al largo plazo."
  },
  {
    "id": "X0515",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "Caso práctico: Un préstamo empresarial se pagará en varios años. ¿Qué concepto se aplica principalmente?",
    "correct": "Pasivo a largo plazo",
    "wrong": [
      "Estado de resultados",
      "Balance de situación",
      "Utilidad"
    ],
    "explanation": "El caso ejemplifica pasivo a largo plazo: obligaciones cuyo vencimiento corresponde al largo plazo."
  },
  {
    "id": "X0516",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Pasivo a largo plazo»?",
    "correct": "Un préstamo empresarial se pagará en varios años",
    "wrong": [
      "Gerencia consulta si obtuvo utilidad o pérdida",
      "El contador muestra posición financiera al 31 de diciembre",
      "Las ventas superan costos y demás gastos del período"
    ],
    "explanation": "Pasivo a largo plazo: obligaciones cuyo vencimiento corresponde al largo plazo."
  },
  {
    "id": "X0517",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Qué concepto corresponde a esta definición? Informe que presenta ingresos y gastos de un período",
    "correct": "Estado de resultados",
    "wrong": [
      "Balance de situación",
      "Utilidad",
      "Activo corriente"
    ],
    "explanation": "Estado de resultados: informe que presenta ingresos y gastos de un período."
  },
  {
    "id": "X0518",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "Caso práctico: Gerencia consulta si obtuvo utilidad o pérdida. ¿Qué concepto se aplica principalmente?",
    "correct": "Estado de resultados",
    "wrong": [
      "Balance de situación",
      "Utilidad",
      "Activo corriente"
    ],
    "explanation": "El caso ejemplifica estado de resultados: informe que presenta ingresos y gastos de un período."
  },
  {
    "id": "X0519",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Estado de resultados»?",
    "correct": "Gerencia consulta si obtuvo utilidad o pérdida",
    "wrong": [
      "El contador muestra posición financiera al 31 de diciembre",
      "Las ventas superan costos y demás gastos del período",
      "El negocio posee efectivo e inventarios disponibles"
    ],
    "explanation": "Estado de resultados: informe que presenta ingresos y gastos de un período."
  },
  {
    "id": "X0520",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Qué concepto corresponde a esta definición? Estado que expone activos, pasivos y patrimonio en una fecha",
    "correct": "Balance de situación",
    "wrong": [
      "Utilidad",
      "Activo corriente",
      "Propiedad planta y equipo"
    ],
    "explanation": "Balance de situación: estado que expone activos, pasivos y patrimonio en una fecha."
  },
  {
    "id": "X0521",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "Caso práctico: El contador muestra posición financiera al 31 de diciembre. ¿Qué concepto se aplica principalmente?",
    "correct": "Balance de situación",
    "wrong": [
      "Utilidad",
      "Activo corriente",
      "Propiedad planta y equipo"
    ],
    "explanation": "El caso ejemplifica balance de situación: estado que expone activos, pasivos y patrimonio en una fecha."
  },
  {
    "id": "X0522",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Balance de situación»?",
    "correct": "El contador muestra posición financiera al 31 de diciembre",
    "wrong": [
      "Las ventas superan costos y demás gastos del período",
      "El negocio posee efectivo e inventarios disponibles",
      "Una empresa tiene un camión y equipos de oficina"
    ],
    "explanation": "Balance de situación: estado que expone activos, pasivos y patrimonio en una fecha."
  },
  {
    "id": "X0523",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Qué concepto corresponde a esta definición? Resultado positivo cuando los ingresos exceden gastos",
    "correct": "Utilidad",
    "wrong": [
      "Activo corriente",
      "Propiedad planta y equipo",
      "Pasivo corriente"
    ],
    "explanation": "Utilidad: resultado positivo cuando los ingresos exceden gastos."
  },
  {
    "id": "X0524",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "Caso práctico: Las ventas superan costos y demás gastos del período. ¿Qué concepto se aplica principalmente?",
    "correct": "Utilidad",
    "wrong": [
      "Activo corriente",
      "Propiedad planta y equipo",
      "Pasivo corriente"
    ],
    "explanation": "El caso ejemplifica utilidad: resultado positivo cuando los ingresos exceden gastos."
  },
  {
    "id": "X0525",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Utilidad»?",
    "correct": "Las ventas superan costos y demás gastos del período",
    "wrong": [
      "El negocio posee efectivo e inventarios disponibles",
      "Una empresa tiene un camión y equipos de oficina",
      "Una factura a proveedor vence el mes próximo"
    ],
    "explanation": "Utilidad: resultado positivo cuando los ingresos exceden gastos."
  },
  {
    "id": "X0526",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Qué concepto corresponde a esta definición? Documento que respalda la venta de bienes o servicios",
    "correct": "Factura",
    "wrong": [
      "Nota de crédito",
      "Nota de débito",
      "Orden de compra"
    ],
    "explanation": "Factura: documento que respalda la venta de bienes o servicios."
  },
  {
    "id": "X0527",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "Caso práctico: Un comercio emite comprobante al vender mercadería. ¿Qué concepto se aplica principalmente?",
    "correct": "Factura",
    "wrong": [
      "Nota de crédito",
      "Nota de débito",
      "Orden de compra"
    ],
    "explanation": "El caso ejemplifica factura: documento que respalda la venta de bienes o servicios."
  },
  {
    "id": "X0528",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Factura»?",
    "correct": "Un comercio emite comprobante al vender mercadería",
    "wrong": [
      "Una tienda acredita parte del importe facturado",
      "El proveedor emite un cargo adicional justificado",
      "El negocio envía pedido autorizado a su proveedor"
    ],
    "explanation": "Factura: documento que respalda la venta de bienes o servicios."
  },
  {
    "id": "X0529",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Qué concepto corresponde a esta definición? Documento para registrar disminución o corrección de un cobro previo",
    "correct": "Nota de crédito",
    "wrong": [
      "Nota de débito",
      "Orden de compra",
      "Recibo"
    ],
    "explanation": "Nota de crédito: documento para registrar disminución o corrección de un cobro previo."
  },
  {
    "id": "X0530",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "Caso práctico: Una tienda acredita parte del importe facturado. ¿Qué concepto se aplica principalmente?",
    "correct": "Nota de crédito",
    "wrong": [
      "Nota de débito",
      "Orden de compra",
      "Recibo"
    ],
    "explanation": "El caso ejemplifica nota de crédito: documento para registrar disminución o corrección de un cobro previo."
  },
  {
    "id": "X0531",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Nota de crédito»?",
    "correct": "Una tienda acredita parte del importe facturado",
    "wrong": [
      "El proveedor emite un cargo adicional justificado",
      "El negocio envía pedido autorizado a su proveedor",
      "Un cliente paga y se le entrega constancia"
    ],
    "explanation": "Nota de crédito: documento para registrar disminución o corrección de un cobro previo."
  },
  {
    "id": "X0532",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Qué concepto corresponde a esta definición? Documento que registra incremento o cargo adicional",
    "correct": "Nota de débito",
    "wrong": [
      "Orden de compra",
      "Recibo",
      "Pagaré"
    ],
    "explanation": "Nota de débito: documento que registra incremento o cargo adicional."
  },
  {
    "id": "X0533",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "Caso práctico: El proveedor emite un cargo adicional justificado. ¿Qué concepto se aplica principalmente?",
    "correct": "Nota de débito",
    "wrong": [
      "Orden de compra",
      "Recibo",
      "Pagaré"
    ],
    "explanation": "El caso ejemplifica nota de débito: documento que registra incremento o cargo adicional."
  },
  {
    "id": "X0534",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Nota de débito»?",
    "correct": "El proveedor emite un cargo adicional justificado",
    "wrong": [
      "El negocio envía pedido autorizado a su proveedor",
      "Un cliente paga y se le entrega constancia",
      "Una persona firma compromiso de pagar un monto a futuro"
    ],
    "explanation": "Nota de débito: documento que registra incremento o cargo adicional."
  },
  {
    "id": "X0535",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Qué concepto corresponde a esta definición? Solicitud formal del comprador para adquirir bienes",
    "correct": "Orden de compra",
    "wrong": [
      "Recibo",
      "Pagaré",
      "Cheque"
    ],
    "explanation": "Orden de compra: solicitud formal del comprador para adquirir bienes."
  },
  {
    "id": "X0536",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "Caso práctico: El negocio envía pedido autorizado a su proveedor. ¿Qué concepto se aplica principalmente?",
    "correct": "Orden de compra",
    "wrong": [
      "Recibo",
      "Pagaré",
      "Cheque"
    ],
    "explanation": "El caso ejemplifica orden de compra: solicitud formal del comprador para adquirir bienes."
  },
  {
    "id": "X0537",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Orden de compra»?",
    "correct": "El negocio envía pedido autorizado a su proveedor",
    "wrong": [
      "Un cliente paga y se le entrega constancia",
      "Una persona firma compromiso de pagar un monto a futuro",
      "Una empresa usa un documento bancario para pagar a un proveedor"
    ],
    "explanation": "Orden de compra: solicitud formal del comprador para adquirir bienes."
  },
  {
    "id": "X0538",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Qué concepto corresponde a esta definición? Comprobante de que se recibió una suma de dinero",
    "correct": "Recibo",
    "wrong": [
      "Pagaré",
      "Cheque",
      "Factura"
    ],
    "explanation": "Recibo: comprobante de que se recibió una suma de dinero."
  },
  {
    "id": "X0539",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "Caso práctico: Un cliente paga y se le entrega constancia. ¿Qué concepto se aplica principalmente?",
    "correct": "Recibo",
    "wrong": [
      "Pagaré",
      "Cheque",
      "Factura"
    ],
    "explanation": "El caso ejemplifica recibo: comprobante de que se recibió una suma de dinero."
  },
  {
    "id": "X0540",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Recibo»?",
    "correct": "Un cliente paga y se le entrega constancia",
    "wrong": [
      "Una persona firma compromiso de pagar un monto a futuro",
      "Una empresa usa un documento bancario para pagar a un proveedor",
      "Un comercio emite comprobante al vender mercadería"
    ],
    "explanation": "Recibo: comprobante de que se recibió una suma de dinero."
  },
  {
    "id": "X0541",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Qué concepto corresponde a esta definición? Título que expresa promesa de pago según sus requisitos",
    "correct": "Pagaré",
    "wrong": [
      "Cheque",
      "Factura",
      "Nota de crédito"
    ],
    "explanation": "Pagaré: título que expresa promesa de pago según sus requisitos."
  },
  {
    "id": "X0542",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "Caso práctico: Una persona firma compromiso de pagar un monto a futuro. ¿Qué concepto se aplica principalmente?",
    "correct": "Pagaré",
    "wrong": [
      "Cheque",
      "Factura",
      "Nota de crédito"
    ],
    "explanation": "El caso ejemplifica pagaré: título que expresa promesa de pago según sus requisitos."
  },
  {
    "id": "X0543",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Pagaré»?",
    "correct": "Una persona firma compromiso de pagar un monto a futuro",
    "wrong": [
      "Una empresa usa un documento bancario para pagar a un proveedor",
      "Un comercio emite comprobante al vender mercadería",
      "Una tienda acredita parte del importe facturado"
    ],
    "explanation": "Pagaré: título que expresa promesa de pago según sus requisitos."
  },
  {
    "id": "X0544",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Qué concepto corresponde a esta definición? Orden de pago emitida contra entidad bancaria",
    "correct": "Cheque",
    "wrong": [
      "Factura",
      "Nota de crédito",
      "Nota de débito"
    ],
    "explanation": "Cheque: orden de pago emitida contra entidad bancaria."
  },
  {
    "id": "X0545",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "Caso práctico: Una empresa usa un documento bancario para pagar a un proveedor. ¿Qué concepto se aplica principalmente?",
    "correct": "Cheque",
    "wrong": [
      "Factura",
      "Nota de crédito",
      "Nota de débito"
    ],
    "explanation": "El caso ejemplifica cheque: orden de pago emitida contra entidad bancaria."
  },
  {
    "id": "X0546",
    "unit": "Contabilidad",
    "topic": "Documentos comerciales y títulos valores",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Cheque»?",
    "correct": "Una empresa usa un documento bancario para pagar a un proveedor",
    "wrong": [
      "Un comercio emite comprobante al vender mercadería",
      "Una tienda acredita parte del importe facturado",
      "El proveedor emite un cargo adicional justificado"
    ],
    "explanation": "Cheque: orden de pago emitida contra entidad bancaria."
  },
  {
    "id": "X0547",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Qué concepto corresponde a esta definición? Registro cronológico de operaciones mediante asientos",
    "correct": "Libro diario",
    "wrong": [
      "Libro mayor",
      "Libro de inventarios y balances",
      "Libro auxiliar"
    ],
    "explanation": "Libro diario: registro cronológico de operaciones mediante asientos."
  },
  {
    "id": "X0548",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "Caso práctico: Se anota en orden de fecha una compra y su pago. ¿Qué concepto se aplica principalmente?",
    "correct": "Libro diario",
    "wrong": [
      "Libro mayor",
      "Libro de inventarios y balances",
      "Libro auxiliar"
    ],
    "explanation": "El caso ejemplifica libro diario: registro cronológico de operaciones mediante asientos."
  },
  {
    "id": "X0549",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Libro diario»?",
    "correct": "Se anota en orden de fecha una compra y su pago",
    "wrong": [
      "El contador revisa todos los cargos y abonos de caja",
      "Se documenta la relación de activos y deudas de un período",
      "Se detallan saldos de cada cliente por cobrar"
    ],
    "explanation": "Libro diario: registro cronológico de operaciones mediante asientos."
  },
  {
    "id": "X0550",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Qué concepto corresponde a esta definición? Agrupación de movimientos y saldos por cada cuenta",
    "correct": "Libro mayor",
    "wrong": [
      "Libro de inventarios y balances",
      "Libro auxiliar",
      "Asiento contable"
    ],
    "explanation": "Libro mayor: agrupación de movimientos y saldos por cada cuenta."
  },
  {
    "id": "X0551",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "Caso práctico: El contador revisa todos los cargos y abonos de caja. ¿Qué concepto se aplica principalmente?",
    "correct": "Libro mayor",
    "wrong": [
      "Libro de inventarios y balances",
      "Libro auxiliar",
      "Asiento contable"
    ],
    "explanation": "El caso ejemplifica libro mayor: agrupación de movimientos y saldos por cada cuenta."
  },
  {
    "id": "X0552",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Libro mayor»?",
    "correct": "El contador revisa todos los cargos y abonos de caja",
    "wrong": [
      "Se documenta la relación de activos y deudas de un período",
      "Se detallan saldos de cada cliente por cobrar",
      "Se anota una compra de equipo mediante partida doble"
    ],
    "explanation": "Libro mayor: agrupación de movimientos y saldos por cada cuenta."
  },
  {
    "id": "X0553",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Qué concepto corresponde a esta definición? Registro de inventarios y situaciones patrimoniales",
    "correct": "Libro de inventarios y balances",
    "wrong": [
      "Libro auxiliar",
      "Asiento contable",
      "Partida doble"
    ],
    "explanation": "Libro de inventarios y balances: registro de inventarios y situaciones patrimoniales."
  },
  {
    "id": "X0554",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "Caso práctico: Se documenta la relación de activos y deudas de un período. ¿Qué concepto se aplica principalmente?",
    "correct": "Libro de inventarios y balances",
    "wrong": [
      "Libro auxiliar",
      "Asiento contable",
      "Partida doble"
    ],
    "explanation": "El caso ejemplifica libro de inventarios y balances: registro de inventarios y situaciones patrimoniales."
  },
  {
    "id": "X0555",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Libro de inventarios y balances»?",
    "correct": "Se documenta la relación de activos y deudas de un período",
    "wrong": [
      "Se detallan saldos de cada cliente por cobrar",
      "Se anota una compra de equipo mediante partida doble",
      "Un registro afecta al menos dos cuentas y mantiene el equilibrio"
    ],
    "explanation": "Libro de inventarios y balances: registro de inventarios y situaciones patrimoniales."
  },
  {
    "id": "X0556",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Qué concepto corresponde a esta definición? Registro que desglosa movimientos de una cuenta principal",
    "correct": "Libro auxiliar",
    "wrong": [
      "Asiento contable",
      "Partida doble",
      "Documentación de respaldo"
    ],
    "explanation": "Libro auxiliar: registro que desglosa movimientos de una cuenta principal."
  },
  {
    "id": "X0557",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "Caso práctico: Se detallan saldos de cada cliente por cobrar. ¿Qué concepto se aplica principalmente?",
    "correct": "Libro auxiliar",
    "wrong": [
      "Asiento contable",
      "Partida doble",
      "Documentación de respaldo"
    ],
    "explanation": "El caso ejemplifica libro auxiliar: registro que desglosa movimientos de una cuenta principal."
  },
  {
    "id": "X0558",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Libro auxiliar»?",
    "correct": "Se detallan saldos de cada cliente por cobrar",
    "wrong": [
      "Se anota una compra de equipo mediante partida doble",
      "Un registro afecta al menos dos cuentas y mantiene el equilibrio",
      "Un asiento de venta se sustenta en la factura respectiva"
    ],
    "explanation": "Libro auxiliar: registro que desglosa movimientos de una cuenta principal."
  },
  {
    "id": "X0559",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Qué concepto corresponde a esta definición? Registro de una operación con cargos y abonos correspondientes",
    "correct": "Asiento contable",
    "wrong": [
      "Partida doble",
      "Documentación de respaldo",
      "Libro diario"
    ],
    "explanation": "Asiento contable: registro de una operación con cargos y abonos correspondientes."
  },
  {
    "id": "X0560",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "Caso práctico: Se anota una compra de equipo mediante partida doble. ¿Qué concepto se aplica principalmente?",
    "correct": "Asiento contable",
    "wrong": [
      "Partida doble",
      "Documentación de respaldo",
      "Libro diario"
    ],
    "explanation": "El caso ejemplifica asiento contable: registro de una operación con cargos y abonos correspondientes."
  },
  {
    "id": "X0561",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Asiento contable»?",
    "correct": "Se anota una compra de equipo mediante partida doble",
    "wrong": [
      "Un registro afecta al menos dos cuentas y mantiene el equilibrio",
      "Un asiento de venta se sustenta en la factura respectiva",
      "Se anota en orden de fecha una compra y su pago"
    ],
    "explanation": "Asiento contable: registro de una operación con cargos y abonos correspondientes."
  },
  {
    "id": "X0562",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Qué concepto corresponde a esta definición? Método por el que los débitos y créditos totales deben coincidir",
    "correct": "Partida doble",
    "wrong": [
      "Documentación de respaldo",
      "Libro diario",
      "Libro mayor"
    ],
    "explanation": "Partida doble: método por el que los débitos y créditos totales deben coincidir."
  },
  {
    "id": "X0563",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "Caso práctico: Un registro afecta al menos dos cuentas y mantiene el equilibrio. ¿Qué concepto se aplica principalmente?",
    "correct": "Partida doble",
    "wrong": [
      "Documentación de respaldo",
      "Libro diario",
      "Libro mayor"
    ],
    "explanation": "El caso ejemplifica partida doble: método por el que los débitos y créditos totales deben coincidir."
  },
  {
    "id": "X0564",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Partida doble»?",
    "correct": "Un registro afecta al menos dos cuentas y mantiene el equilibrio",
    "wrong": [
      "Un asiento de venta se sustenta en la factura respectiva",
      "Se anota en orden de fecha una compra y su pago",
      "El contador revisa todos los cargos y abonos de caja"
    ],
    "explanation": "Partida doble: método por el que los débitos y créditos totales deben coincidir."
  },
  {
    "id": "X0565",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Qué concepto corresponde a esta definición? Comprobante que permite justificar un registro contable",
    "correct": "Documentación de respaldo",
    "wrong": [
      "Libro diario",
      "Libro mayor",
      "Libro de inventarios y balances"
    ],
    "explanation": "Documentación de respaldo: comprobante que permite justificar un registro contable."
  },
  {
    "id": "X0566",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "Caso práctico: Un asiento de venta se sustenta en la factura respectiva. ¿Qué concepto se aplica principalmente?",
    "correct": "Documentación de respaldo",
    "wrong": [
      "Libro diario",
      "Libro mayor",
      "Libro de inventarios y balances"
    ],
    "explanation": "El caso ejemplifica documentación de respaldo: comprobante que permite justificar un registro contable."
  },
  {
    "id": "X0567",
    "unit": "Contabilidad",
    "topic": "Libros contables y trámites",
    "prompt": "¿Cuál situación es un ejemplo más claro de «Documentación de respaldo»?",
    "correct": "Un asiento de venta se sustenta en la factura respectiva",
    "wrong": [
      "Se anota en orden de fecha una compra y su pago",
      "El contador revisa todos los cargos y abonos de caja",
      "Se documenta la relación de activos y deudas de un período"
    ],
    "explanation": "Documentación de respaldo: comprobante que permite justificar un registro contable."
  },
  {
    "id": "CAL652",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "Un salario bruto de ₡420 000 tiene deducciones suministradas de ₡42 000. ¿Cuál es el salario neto?",
    "correct": "₡378 000",
    "wrong": [
      "₡462 000",
      "₡420 000",
      "₡42 000"
    ],
    "explanation": "Salario neto = ₡420 000 − ₡42 000 = ₡378 000."
  },
  {
    "id": "CAL653",
    "unit": "Administración de Empresas",
    "topic": "Salarios y beneficios sociales",
    "prompt": "Una persona gana ₡3 000 por cada pieza producida y termina 18 piezas. ¿Cuánto gana por destajo?",
    "correct": "₡54 000",
    "wrong": [
      "₡21 000",
      "₡6 000",
      "₡60 000"
    ],
    "explanation": "18 × ₡3 000 = ₡54 000, antes de las deducciones correspondientes."
  },
  {
    "id": "CAL654",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "Un producto cuesta ₡8 000 y se aplica sobreprecio de 25 % sobre el costo. ¿Precio de venta?",
    "correct": "₡10 000",
    "wrong": [
      "₡8 250",
      "₡6 000",
      "₡12 000"
    ],
    "explanation": "Sobreprecio = ₡8 000 × 0,25 = ₡2 000. Precio = ₡10 000."
  },
  {
    "id": "CAL655",
    "unit": "Administración de Empresas",
    "topic": "Mercadeo y precios",
    "prompt": "Se venden 12 unidades por ₡30 000 en total. ¿Cuál es el precio por unidad?",
    "correct": "₡2 500",
    "wrong": [
      "₡360 000",
      "₡3 600",
      "₡18 000"
    ],
    "explanation": "Precio unitario = ₡30 000 ÷ 12 = ₡2 500."
  },
  {
    "id": "CAL656",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "En una encuesta de 80 personas, 20 eligen una marca. ¿Qué porcentaje representa?",
    "correct": "25 %",
    "wrong": [
      "20 %",
      "40 %",
      "80 %"
    ],
    "explanation": "20 ÷ 80 × 100 = 25 %."
  },
  {
    "id": "CAL657",
    "unit": "Administración de Empresas",
    "topic": "Estadística aplicada",
    "prompt": "Un gráfico de barras muestra A=15, B=25 y C=10. ¿Qué categoría es la mayor?",
    "correct": "B",
    "wrong": [
      "A",
      "C",
      "Todas son iguales"
    ],
    "explanation": "B tiene 25, más que A (15) y C (10)."
  },
  {
    "id": "CAL658",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "Si el activo es ₡950 000 y el pasivo ₡360 000, ¿cuánto es el patrimonio?",
    "correct": "₡590 000",
    "wrong": [
      "₡1 310 000",
      "₡360 000",
      "₡950 000"
    ],
    "explanation": "Patrimonio = Activo − Pasivo = ₡590 000."
  },
  {
    "id": "CAL659",
    "unit": "Contabilidad",
    "topic": "Elementos y ecuación contable",
    "prompt": "Si el pasivo es ₡250 000 y el patrimonio ₡400 000, ¿cuánto suman los activos?",
    "correct": "₡650 000",
    "wrong": [
      "₡150 000",
      "₡250 000",
      "₡400 000"
    ],
    "explanation": "Activo = Pasivo + Patrimonio = ₡650 000."
  },
  {
    "id": "CAL660",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "Ingresos ₡700 000; costos ₡400 000 y gastos ₡150 000. ¿Cuál es la utilidad?",
    "correct": "₡150 000",
    "wrong": [
      "₡300 000",
      "₡550 000",
      "₡1 250 000"
    ],
    "explanation": "Utilidad = 700 000 − 400 000 − 150 000 = ₡150 000."
  },
  {
    "id": "CAL661",
    "unit": "Contabilidad",
    "topic": "Cuentas y estados financieros",
    "prompt": "Una empresa tiene activos por ₡1 200 000 y pasivos por ₡450 000. ¿Cuánto patrimonio muestra su balance?",
    "correct": "₡750 000",
    "wrong": [
      "₡1 650 000",
      "₡450 000",
      "₡1 200 000"
    ],
    "explanation": "Patrimonio = ₡1 200 000 − ₡450 000 = ₡750 000."
  },
  {
    "id": "CAL662",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "Para un ejercicio se indica IVA de 13 % sobre ₡10 000. ¿Cuál es el impuesto calculado?",
    "correct": "₡1 300",
    "wrong": [
      "₡13 000",
      "₡11 300",
      "₡130"
    ],
    "explanation": "₡10 000 × 0,13 = ₡1 300. Se usa la tasa dada en el ejercicio."
  },
  {
    "id": "CAL663",
    "unit": "Normativa Legal",
    "topic": "Administración tributaria",
    "prompt": "Un ejercicio indica un impuesto de 10 % aplicado a una base de ₡50 000. ¿Qué monto resulta?",
    "correct": "₡5 000",
    "wrong": [
      "₡55 000",
      "₡500",
      "₡10 000"
    ],
    "explanation": "₡50 000 × 0,10 = ₡5 000. La tasa es un dato hipotético del ejercicio."
  }
];
