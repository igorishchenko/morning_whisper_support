/**
 * Privacy Policy — Spanish.
 *
 * Full translation of privacy.en.js. GDPR terminology follows the Spanish text
 * of the Regulation (RGPD): «responsable del tratamiento», «base jurídica»,
 * «ejecución de un contrato», «interés legítimo», «cláusulas contractuales tipo».
 * Product names, provider names and URLs stay as they are.
 */
export const privacyEs = {
  eyebrow: 'Legal',
  title: 'Política de Privacidad',
  lede:
    'Cómo trata Turn the Cup tu información: qué se queda en tu dispositivo, qué se sincroniza con nuestros servidores cuando inicias sesión, qué pueden ver tus amigos y cómo borrarlo todo.',
  updatedLabel: 'Última actualización:',
  updated: '1 de septiembre de 2026',
  tocTitle: 'En esta página',
  meta: {
    title: 'Política de Privacidad — Turn the Cup',
    description:
      'Cómo Turn the Cup recopila, usa y protege tus datos: qué se queda en tu dispositivo, qué se sincroniza, qué nunca recopilamos y cómo borrar tu cuenta.',
  },
  sections: [
    {
      id: 'overview',
      title: 'Quiénes somos',
      blocks: [
        { p: 'Turn the Cup («Turn the Cup», «nosotros» o «nos») es una app de desarrollo independiente para iPhone y iPad. Terminas tu café, giras la taza y lees la predicción en su base. Alrededor de eso hay tazas de colección, puntos de café y una capa opcional de amigos.' },
        { p: 'Esta Política de Privacidad explica qué información maneja la app, por qué, y qué control tienes sobre ella. Se aplica a la app móvil Turn the Cup (identificador de paquete **com.entertainment.turnthecup**) y a este sitio web de soporte.' },
        { p: 'A efectos del Reglamento General de Protección de Datos de la UE y del Reino Unido, el desarrollador de Turn the Cup es el responsable del tratamiento. Puedes escribirnos cuando quieras a [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com).' },
        { p: 'Esta es una traducción de la versión en inglés. Si hubiera alguna discrepancia entre ambas, prevalece el texto en inglés.' },
      ],
    },
    {
      id: 'entertainment',
      title: 'Solo entretenimiento',
      blocks: [
        {
          callout: [
            { p: '**Turn the Cup existe para divertir.** Las lecturas —predicciones, afirmaciones, consejos, citas, chistes, preguntas y demás— las escribimos nosotros como entretenimiento. No son adivinación, ni servicios psíquicos, ni asesoramiento profesional de ningún tipo.' },
            { p: 'Nada en la app se basa en ningún método científico, médico, financiero, jurídico o factual, y nada de lo que contiene debe usarse para tomar una decisión importante. Tú eres responsable de tus propias decisiones. Consulta nuestros [Términos de Uso](/terms) para ver la exención completa.' },
          ],
          icon: '☕',
          tone: 'hot',
        },
      ],
    },
    {
      id: 'modes',
      title: 'Dos formas de usar la app',
      blocks: [
        { p: 'Cuántos datos salen de tu dispositivo depende enteramente de si inicias sesión o no. Ambos modos están plenamente admitidos: la app funciona sin conexión y sin cuenta.' },
        { h3: 'Con la sesión cerrada (solo local)' },
        { p: 'Todo vive en tu dispositivo: tus respuestas de configuración, el historial de lecturas, la racha, los puntos de café y las preferencias se guardan en el almacenamiento local de la app y nunca llegan a nuestros servidores. Borrar la app borra estos datos. La única información que puede salir de tu dispositivo en este modo son los datos publicitarios, y solo si eliges ver un anuncio recompensado.' },
        { h3: 'Con la sesión iniciada (sincronización en la nube y amigos)' },
        { p: 'Iniciar sesión con Apple o Google crea una cuenta en nuestro backend, alojado en Supabase. Tu historial, ajustes, tazas, puntos y actividad social se guardan entonces en nuestros servidores para que sobrevivan a una reinstalación o a un teléfono nuevo, y para que funcionen las funciones de amigos. Las secciones siguientes describen exactamente qué incluye eso.' },
      ],
    },
    {
      id: 'collect',
      title: 'Información que recopilamos',
      blocks: [
        { h3: '1. Información de la cuenta' },
        { p: 'Puedes iniciar sesión con **Sign in with Apple** o con **Google**. Recibimos un identificador de usuario y, según lo que autorices, tu dirección de correo y el nombre de tu cuenta del proveedor. Nunca recibimos tu contraseña de Apple ni de Google.' },
        {
          ul: [
            'Si usas la función Ocultar mi correo de Apple, solo vemos la dirección de reenvío que Apple genera; no hay problema, todo funciona igual.',
            'La autenticación la gestiona Supabase Auth. Los tokens de sesión se guardan en el llavero seguro de tu dispositivo (iOS Keychain), no en el almacenamiento normal de la app.',
          ],
        },
        { h3: '2. Tu perfil y tus preferencias' },
        {
          ul: [
            '**Nombre visible**: el nombre que escribes durante la configuración, visible para tus amigos.',
            '**Avatar**: un identificador y un color de una de las ocho caras ilustradas predefinidas. En Turn the Cup no se pueden subir fotos, así que nunca recibimos una imagen tuya.',
            '**Respuestas de configuración**: las opciones opcionales de ánimo, energía, foco vital y situación actual que ajustan qué lecturas ves, además de tus preferencias de colección.',
            '**Idioma**: inglés, español, francés o ucraniano.',
            '**Horario de notificaciones**: las horas que configuras, si activas los recordatorios.',
            '**Taza equipada**: qué taza de colección usas actualmente.',
          ],
        },
        { h3: '3. Tu actividad en la app' },
        {
          ul: [
            '**Historial de lecturas**: qué predicción recibiste, cuándo, en qué taza y si la marcaste como favorita.',
            '**Racha e interacción**: recuento de racha diaria, hitos alcanzados y estado diario.',
            '**Registro de puntos de café**: cada abono y cargo: bonificaciones diarias, hitos de racha, anuncios recompensados, referidos, packs comprados y lo que gastaste en tazas, envíos y regalos.',
            '**Tazas en propiedad y compradas.**',
            '**Instalaciones**: un registro por dispositivo (un identificador de instalación generado y la plataforma) para que la misma cuenta pueda sincronizarse entre tus dispositivos.',
            '**Contadores de uso**: horas de apertura de la app, recuento diario de sesiones y un registro limitado de eventos internos (app abierta, lectura generada, racha alcanzada y similares). Se guardan en las filas de tu propia cuenta en nuestro backend. No usamos Google Analytics, Firebase Analytics, Amplitude, Mixpanel ni ningún otro SDK de analítica de terceros.',
          ],
        },
        { h3: '4. Datos sociales (solo si usas las funciones de amigos)' },
        {
          ul: [
            '**Amistades**: con quién estás conectado.',
            '**Códigos de invitación**: el código que generas y un registro de qué cuenta lo canjeó, para poder pagar las recompensas por referidos.',
            '**Historias / contenido compartido**: una lectura que eliges compartir con amigos, su texto, la taza en la que apareció y las reacciones con emoji que otros dejan en ella.',
            '**Predicciones enviadas**: cuando envías una predicción a un amigo escribes un mensaje breve (hasta 280 caracteres). Guardamos ese texto, el remitente, el destinatario, la taza y si se ha leído.',
            '**Regalos**: el artículo enviado, su precio, uno de los ocho mensajes predefinidos (guardamos el número, no texto libre) y cuándo se abrió.',
            '**Bloqueos y denuncias**: si bloqueas o denuncias a alguien, guardamos quién bloqueó o denunció a quién y el texto del motivo que aportas, para poder revisarlo.',
          ],
        },
        { h3: '5. Datos técnicos y del dispositivo' },
        {
          ul: [
            '**Token push**: un token push de Expo junto con tu plataforma e idioma, si permites las notificaciones.',
            '**Identificadores publicitarios**: los gestiona Google AdMob cuando ves un anuncio recompensado. Consulta [Publicidad y consentimiento](#ads).',
            '**Recibos de compra**: un identificador de transacción y de producto que se envían a RevenueCat para su verificación. Consulta [Compras y puntos de café](#purchases).',
            '**Registros del servidor**: nuestro proveedor de alojamiento registra metadatos estándar de las solicitudes (dirección IP, marca temporal, endpoint) por seguridad y prevención de abusos.',
          ],
        },
        { h3: '6. Información que nos envías directamente' },
        { p: 'Si usas el [formulario de contacto](/contact) de este sitio o nos escribes un correo, recibimos tu nombre, tu dirección de correo y lo que nos cuentes, y lo conservamos el tiempo necesario para resolver tu solicitud.' },
      ],
    },
    {
      id: 'not-collected',
      title: 'Lo que nunca recopilamos',
      blocks: [
        { p: 'Turn the Cup no solicita, recopila ni almacena:' },
        {
          ul: [
            'Tu ubicación precisa ni aproximada',
            'Tus contactos, calendario, fotos, cámara ni micrófono',
            'Datos de salud, forma física o biométricos',
            'Números de tarjeta ni datos bancarios: Apple gestiona todos los pagos',
            'Tu fecha de nacimiento, dirección postal ni número de teléfono',
            'Ninguna foto subida ni imagen de perfil (los avatares son solo ilustraciones predefinidas)',
          ],
        },
      ],
    },
    {
      id: 'use',
      title: 'Cómo usamos la información',
      blocks: [
        { p: 'Usamos tu información únicamente para los fines indicados a continuación. Cuando se aplica el RGPD, se indica la base jurídica de cada fin.' },
        {
          table: {
            head: ['Finalidad', 'Datos utilizados', 'Base jurídica (RGPD)'],
            rows: [
              ['Hacer funcionar la app y elegir tu lectura diaria', 'Respuestas de configuración, preferencias, historial, racha', 'Ejecución de un contrato'],
              ['Sincronizar tus datos entre dispositivos', 'ID de cuenta, perfil, historial, ajustes, instalaciones', 'Ejecución de un contrato'],
              ['Amigos, historias, envíos y regalos', 'Los datos sociales indicados arriba', 'Ejecución de un contrato (eliges usarlo)'],
              ['Puntos de café, compras y prevención del fraude', 'Registro de puntos, IDs de transacción y producto', 'Contrato; interés legítimo en prevenir abusos'],
              ['Enviar notificaciones push', 'Token push, plataforma, idioma', 'Consentimiento (permiso del dispositivo)'],
              ['Mostrar anuncios recompensados', 'Identificadores publicitarios, interacción con el anuncio', 'Consentimiento en el EEE/Reino Unido/Suiza; interés legítimo en el resto'],
              ['Mantener el servicio seguro: bloqueos, denuncias, moderación', 'Denuncias, bloqueos, IDs de cuenta relacionados', 'Interés legítimo; obligación legal'],
              ['Mejorar la app', 'Contadores de uso agregados', 'Interés legítimo'],
              ['Responder a tus mensajes de soporte', 'Lo que nos envías', 'Interés legítimo'],
            ],
          },
        },
        { p: 'No vendemos tu información personal y no usamos tus datos para crear perfiles publicitarios por nuestra cuenta.' },
      ],
    },
    {
      id: 'social',
      title: 'Lo que pueden ver otras personas',
      blocks: [
        { p: 'Turn the Cup no tiene perfiles públicos ni descubrimiento. Nadie puede encontrarte por nombre, correo o número de teléfono: las conexiones se hacen solo compartiendo un código de invitación. Una vez que sois amigos, esa persona puede ver:' },
        {
          ul: [
            'Tu nombre visible y tu avatar predefinido',
            'Las lecturas que compartes deliberadamente como historia, y el arte de la taza que las rodea',
            'Las predicciones que le envías, incluido el mensaje que escribes',
            'Los regalos que le envías',
            'Tu estantería de regalos, allí donde la app la muestra',
          ],
        },
        { p: 'Tus amigos nunca ven tu historial, tus favoritas, tu racha, tu saldo de puntos, tus respuestas de configuración ni tu dirección de correo. Las notificaciones push sobre un envío nombran al remitente pero nunca llevan el texto del mensaje; las notificaciones de regalo nombran al remitente pero nunca el artículo.' },
        { p: 'Puedes bloquear a alguien en cualquier momento desde su perfil, lo que detiene toda interacción entre vosotros, y puedes denunciar contenido o comportamientos para su revisión. Consulta los [Términos de Uso](/terms) para conocer nuestras normas de contenido.' },
      ],
    },
    {
      id: 'sharing',
      title: 'Con quién compartimos datos',
      blocks: [
        { p: 'No vendemos, alquilamos ni intercambiamos tu información personal. Usamos un número reducido de proveedores de servicios para hacer funcionar la app, y cada uno trata solo lo que su función requiere:' },
        {
          table: {
            head: ['Proveedor', 'Qué hace', 'Política de privacidad'],
            rows: [
              ['Supabase', 'Base de datos, autenticación, almacenamiento y funciones de servidor', '[supabase.com/privacy](https://supabase.com/privacy)'],
              ['Apple', 'Sign in with Apple, distribución en el App Store, compras integradas, entrega de notificaciones', '[apple.com/legal/privacy](https://www.apple.com/legal/privacy/)'],
              ['Google', 'Google Sign-In', '[policies.google.com/privacy](https://policies.google.com/privacy)'],
              ['Google AdMob', 'Anuncios de vídeo recompensados y gestión del consentimiento', '[policies.google.com/technologies/ads](https://policies.google.com/technologies/ads)'],
              ['RevenueCat', 'Verificación de los recibos de compras integradas', '[revenuecat.com/privacy](https://www.revenuecat.com/privacy)'],
              ['Expo', 'Entrega de notificaciones push y compilaciones de la app', '[expo.dev/privacy](https://expo.dev/privacy)'],
              ['Resend', 'Entrega de los mensajes enviados por el formulario de contacto de este sitio', '[resend.com/legal/privacy-policy](https://resend.com/legal/privacy-policy)'],
            ],
          },
        },
        { p: 'También podemos revelar información si estamos legalmente obligados a ello, o cuando sea necesario para investigar abusos, hacer cumplir nuestros [Términos de Uso](/terms) o proteger los derechos y la seguridad de nuestros usuarios. Si alguna vez la app se transfiere a otro propietario, tus datos podrían acompañarla, y lo indicaremos aquí antes de que eso surta efecto.' },
      ],
    },
    {
      id: 'ads',
      title: 'Publicidad y consentimiento',
      blocks: [
        { p: 'Turn the Cup muestra **únicamente anuncios de vídeo recompensados**, suministrados por Google AdMob. No hay banners, ni intersticiales, ni anuncios que aparezcan por su cuenta. Un anuncio se reproduce solo cuando tocas para verlo a cambio de puntos de café, hasta cinco al día.' },
        { h3: 'Qué recibe AdMob' },
        {
          ul: [
            'El identificador publicitario de tu dispositivo (el IDFA)',
            'La dirección IP e información del dispositivo, como el modelo y la versión del sistema operativo',
            'Datos de interacción: que se solicitó, se mostró y se completó un anuncio',
          ],
        },
        { p: 'El uso que Google hace de esta información se rige por la [Política de Privacidad de Publicidad de Google](https://policies.google.com/technologies/ads). Para asegurarnos de que una recompensa es genuina, también enviamos a AdMob un número aleatorio de un solo uso, que Google devuelve a nuestro servidor en una llamada de verificación firmada. No contiene ninguna información personal sobre ti.' },
        { h3: 'Consentimiento en el EEE, el Reino Unido y Suiza (RGPD)' },
        { p: 'Antes de solicitar cualquier anuncio, la app presenta el formulario de consentimiento certificado de Google (la User Messaging Platform, o UMP), tal como exigen el RGPD y la política de consentimiento de usuarios de la UE de Google. Tu elección se registra en tu dispositivo.' },
        {
          ul: [
            'Si das tu consentimiento, es posible que se te muestren anuncios personalizados.',
            'Si lo rechazas, o si no se ha registrado ningún consentimiento, la app solicita **únicamente anuncios no personalizados**.',
            'Si no permites anuncios en absoluto, la función de anuncios recompensados simplemente no se ejecuta. Nada más en Turn the Cup se ve afectado: los anuncios nunca son necesarios para usar la app.',
          ],
        },
        { p: 'Puedes retirar tu consentimiento en cualquier momento restableciendo el identificador publicitario en los ajustes de tu dispositivo, o escribiéndonos a [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com) y lo gestionaremos.' },
        { h3: 'App Tracking Transparency (iOS)' },
        { p: 'En iOS, el sistema te pide permiso antes de que pueda usarse cualquier identificador de seguimiento con fines publicitarios. Si lo rechazas, los anuncios no son personalizados. Puedes cambiarlo cuando quieras en **Ajustes → Privacidad y seguridad → Rastreo**.' },
        { h3: 'Exclusiones a nivel de dispositivo' },
        { ul: ['**iOS:** Ajustes → Privacidad y seguridad → Publicidad de Apple → Anuncios personalizados'] },
        { p: 'Seguirás viendo anuncios recompensados si eliges verlos; simplemente serán menos relevantes.' },
      ],
    },
    {
      id: 'purchases',
      title: 'Compras y puntos de café',
      blocks: [
        { p: 'Los puntos de café son una moneda virtual dentro de la app. Los ganas usándola —una bonificación diaria, hitos de racha, referidos y anuncios recompensados— y también puedes comprar packs de puntos.' },
        { p: '**Todos los pagos los procesa Apple.** Nunca vemos ni almacenamos tu número de tarjeta, tu dirección de facturación ni ninguna credencial de pago. Cuando se completa una compra, el App Store entrega a la app un identificador de transacción y de producto, que enviamos a RevenueCat y a nuestro servidor para verificar que el recibo es auténtico y abonar el número correcto de puntos. Tu saldo de puntos y su historial completo viven en tu cuenta en nuestro backend.' },
        { p: 'Los puntos de café no tienen valor monetario, no pueden canjearse por dinero y no pueden transferirse fuera de la app. Los reembolsos los gestiona Apple conforme a sus propias políticas: consulta los [Términos de Uso](/terms).' },
      ],
    },
    {
      id: 'notifications',
      title: 'Notificaciones push',
      blocks: [
        { p: 'Las notificaciones son opcionales y están desactivadas hasta que las permitas. Si lo haces, guardamos un token push de Expo para tu dispositivo junto con tu plataforma e idioma, para que los mensajes lleguen en el idioma correcto. La entrega se realiza a través del servicio push de Expo hacia el servicio de notificaciones push de Apple.' },
        { p: 'Usamos las notificaciones para tus propios recordatorios y para avisarte cuando un amigo te envía una predicción o un regalo. Nunca las usamos con fines publicitarios.' },
        { p: 'Puedes desactivarlas cuando quieras en los ajustes de la app o en los de tu dispositivo. Desactivarlas en los ajustes del dispositivo detiene la entrega de inmediato; eliminamos el token guardado cuando cierras sesión o borras tu cuenta.' },
      ],
    },
    {
      id: 'transfers',
      title: 'Transferencias internacionales',
      blocks: [
        { p: 'Turn the Cup está disponible en todo el mundo y nuestros proveedores de servicios operan globalmente. Por tanto, tus datos pueden tratarse en países distintos del tuyo, incluido Estados Unidos.' },
        { p: 'Cuando los datos se transfieren fuera del EEE, el Reino Unido o Suiza, nuestros proveedores se basan en las Cláusulas Contractuales Tipo de la Comisión Europea, en el Addendum de Transferencia Internacional de Datos del Reino Unido o en una decisión de adecuación, tal como se establece en su propia documentación de privacidad enlazada en [Con quién compartimos datos](#sharing).' },
      ],
    },
    {
      id: 'retention',
      title: 'Cuánto tiempo conservamos los datos',
      blocks: [
        {
          table: {
            head: ['Datos', 'Conservación'],
            rows: [
              ['Datos locales del dispositivo (sesión cerrada)', 'Hasta que borres los datos de la app o la desinstales'],
              ['Cuenta, perfil, historial, puntos y tazas', 'Hasta que borres tu cuenta'],
              ['Historias y contenido compartido', 'Hasta que los elimines o borres tu cuenta'],
              ['Predicciones enviadas y regalos', 'Se conservan para remitente y destinatario hasta que alguno borre su cuenta'],
              ['Contadores de uso', 'Limitados a los 1.000 eventos más recientes por cuenta'],
              ['Tokens push', 'Se eliminan al cerrar sesión, desactivar las notificaciones o borrar tu cuenta'],
              ['Denuncias y bloqueos', 'Hasta 12 meses después de la revisión, por seguridad y detección de abusos reiterados'],
              ['Registros de compras', 'El tiempo exigido a efectos fiscales, contables y de gestión de reclamaciones'],
              ['Correos de soporte', 'Hasta 24 meses después de resolver tu solicitud'],
            ],
          },
        },
      ],
    },
    {
      id: 'security',
      title: 'Seguridad',
      blocks: [
        {
          ul: [
            'Todo el tráfico entre la app y nuestros servidores usa cifrado TLS.',
            'Cada tabla de nuestro backend está protegida por políticas de seguridad a nivel de fila, de modo que una cuenta solo puede leer y escribir sus propias filas. Los puntos, los precios y las compras los decide el servidor; nunca se confía en el cliente.',
            'Las sesiones de autenticación se guardan en el llavero del dispositivo, no en el almacenamiento normal de la app.',
            'Las credenciales de pago nunca llegan hasta nosotros: las custodia Apple.',
          ],
        },
        { p: 'Ningún sistema es perfectamente seguro y no podemos garantizar una seguridad absoluta. Si alguna vez tenemos conocimiento de una violación que afecte a tus datos personales, te lo notificaremos a ti y a la autoridad de control competente, como exige la ley.' },
      ],
    },
    {
      id: 'rights',
      title: 'Tus derechos',
      blocks: [
        { h3: 'Si te encuentras en el EEE, el Reino Unido o Suiza (RGPD)' },
        { p: 'Tienes derecho a:' },
        {
          ul: [
            'Acceder a los datos personales que tenemos sobre ti y recibir una copia',
            'Rectificar los datos inexactos',
            'Suprimir tus datos',
            'Limitar u oponerte a determinados tratamientos, incluidos los basados en intereses legítimos',
            'Recibir tus datos en un formato portátil y legible por máquina',
            'Retirar tu consentimiento en cualquier momento, sin que ello afecte al tratamiento ya realizado',
            'Presentar una reclamación ante tu autoridad local de protección de datos',
          ],
        },
        { h3: 'Si te encuentras en California (CCPA/CPRA)' },
        { p: 'Tienes derecho a saber qué recopilamos, a que se suprima, a que se corrija y a no sufrir discriminación por ejercer esos derechos.' },
        { p: '**No vendemos información personal** ni la compartimos con fines de publicidad conductual entre contextos, salvo mediante la elección de consentimiento de AdMob descrita en [Publicidad y consentimiento](#ads), que tú controlas. Rechazar el consentimiento o desactivar tu identificador publicitario es tu forma de exclusión.' },
        { h3: 'Cómo ejercerlos' },
        { p: 'La mayoría está a un toque de distancia: consulta [Borrar tus datos](#deletion). Para cualquier otra cosa, escribe a [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com) desde la dirección de tu cuenta, o usa el [formulario de contacto](/contact). Respondemos en un plazo de 30 días y no cobramos por ello.' },
      ],
    },
    {
      id: 'deletion',
      title: 'Borrar tus datos',
      blocks: [
        { h3: 'Desde dentro de la app' },
        { p: 'Abre **Ajustes → Eliminar cuenta** y confirma. Esto elimina de inmediato de nuestros servidores tu perfil, tu historial de lecturas, tus datos de racha e interacción, tus ajustes, tus contadores de uso, tus instalaciones de dispositivo y tus tokens push; borra todo lo guardado localmente en el dispositivo y cierra tu sesión.' },
        { h3: 'Completar la supresión' },
        { p: 'Tu registro de autenticación subyacente y tus registros sociales —amistades, canjes de invitaciones, historias, predicciones enviadas y regalos— los eliminamos nosotros como parte de una supresión completa de la cuenta. Escribe a [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com) desde la dirección de tu cuenta y lo completaremos en un plazo de 30 días, confirmándotelo cuando esté hecho.' },
        { h3: 'Sin cuenta' },
        { p: 'Si nunca iniciaste sesión, desinstalar la app lo elimina todo, porque nada llegó a guardarse en ningún otro sitio.' },
        { h3: 'Qué puede quedar' },
        { p: 'Conservamos el mínimo necesario por motivos legales: los registros de compra exigidos a efectos fiscales y contables, y las denuncias presentadas por abusos graves. El contenido que enviaste a otra persona —una predicción o un regalo que recibió— permanece en su copia, como ocurre en cualquier app de mensajería.' },
      ],
    },
    {
      id: 'children',
      title: 'Privacidad de menores',
      blocks: [
        { p: 'Turn the Cup no está dirigida a menores. Debes tener al menos 13 años para usarla, y al menos 16 en los países donde 16 es la edad mínima para consentir el tratamiento de datos, salvo que un padre, madre o tutor consienta en tu nombre.' },
        { p: 'No recopilamos conscientemente información personal de menores por debajo de esas edades. Si crees que un menor nos ha facilitado información personal, escríbenos y borraremos la cuenta y sus datos con prontitud.' },
      ],
    },
    {
      id: 'changes',
      title: 'Cambios en esta política',
      blocks: [
        { p: 'Actualizamos esta política cuando la app cambia. La fecha de «última actualización» que figura arriba refleja siempre la versión vigente. En caso de cambios sustanciales, avisaremos dentro de la app antes de que surtan efecto. Seguir usando Turn the Cup después de un cambio significa que aceptas la política actualizada.' },
      ],
    },
    {
      id: 'contact',
      title: 'Contacto',
      blocks: [
        { p: 'Preguntas sobre esta política, una solicitud sobre tus datos o cualquier otra cosa:' },
        {
          ul: [
            '**Correo:** [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com)',
            '**Formulario de soporte:** [Contactar con soporte](/contact)',
          ],
        },
        { p: 'Normalmente respondemos en 24–48 horas, y siempre dentro de 30 días para las solicitudes de privacidad.' },
      ],
    },
  ],
}

export default privacyEs
