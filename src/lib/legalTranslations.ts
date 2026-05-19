import type { LanguageCode } from "@/lib/i18n"
export { TRANSLATION_NOTICE } from "@/lib/legalTranslationNotice"

export type LegalDocumentKey = "terms" | "privacy" | "refunds" | "disclaimer" | "cookies"
export type LocalizedLegalLanguage = Exclude<LanguageCode, "en">

// Static translations generated from src/lib/legalContent.ts.
// When English legal documents change, regenerate these translations from the updated English source.
// Each translated document must keep its localized translation notice as the first visible content.
export const localizedLegalContent: Record<LocalizedLegalLanguage, Record<LegalDocumentKey, string>> = {
  "es": {
    "terms": `Esta es una versión traducida proporcionada para su conveniencia. En caso de discrepancia, prevalecerá la versión en inglés.

FAST DISPUTE RESOLUTION
TÉRMINOS DE SERVICIO

Última actualización: 19 de mayo de 2026

Estos Términos de servicio (“Términos”) rigen su acceso y uso del sitio web Fast Dispute Resolution, las páginas relacionadas y cualquier servicio, característica, contenido, admisión de casos, comunicaciones, flujos de trabajo o herramientas disponibles a través de este sitio web o de nuestra plataforma conectada (“Servicios”). “Fast Dispute Resolution”, “FDR”, “nosotros”, “nos” y “nuestro” significan el operador de este sitio web y de los Servicios. "Usted" significa cualquier visitante, usuario, cliente, parte en una disputa u otra persona que acceda o utilice los Servicios.

Al acceder o utilizar los Servicios, usted acepta estos Términos. Si no está de acuerdo, no utilice los Servicios.

1. Naturaleza de los servicios
Fast Dispute Resolution proporciona facilitación en línea de resolución de disputas, admisión de casos, gestión del flujo de trabajo y servicios relacionados con la mediación. A menos que se indique expresamente en una descripción de servicio específica, una página de pedido o un aviso de caso, nuestros Servicios son únicamente servicios de mediación y facilitación de resolución de disputas.

No somos una firma de abogados a través de este sitio web y el uso de los Servicios no crea por sí solo:
(a) una relación abogado-cliente,
(b) representación legal,
(c) asesoramiento legal,
(d) un deber fiduciario más allá de la ley aplicable, o
(e) una garantía de cualquier resultado.

Proporcionamos procesos estructurados, flujos de trabajo guiados, facilitación neutral y soporte administrativo relacionado. No prometemos que las partes lleguen a un acuerdo.

2. Sin asesoramiento jurídico; Se recomienda asesoramiento independiente
La información contenida en este sitio web y en los Servicios tiene fines informativos generales y de facilitación de procesos únicamente. No es un asesoramiento legal, fiscal, financiero, contable, de salud mental ni de otro tipo profesional.

Usted es responsable de obtener su propio asesoramiento legal o profesional independiente cuando corresponda, incluso antes de firmar cualquier acuerdo final o confiar en cualquier contenido traducido o resumido.

3. Neutralidad
Cuando se proporcionan servicios de mediación, el mediador debe actuar como un facilitador neutral. Excepto cuando se indique expresamente en un compromiso escrito por separado, no defendemos a una parte frente a la otra.

La existencia de un mediador, una plataforma, un flujo de trabajo o un lenguaje propuesto no significa que respaldamos la posición de ninguna de las partes ni garantizamos la imparcialidad, la aplicabilidad o la idoneidad de un resultado para sus circunstancias.

4. Proceso Voluntario; Sin garantía de resultado
Los resultados de la resolución de disputas y la mediación son inherentemente inciertos. Cualquier acuerdo, propuesta o borrador de acuerdo es voluntario a menos y hasta que las partes acuerden lo contrario en un escrito válido y ejecutable.

No garantizamos:
(a) que la otra parte participará,
(b) que cualquier asunto se arreglará,
(c) que cualquier proyecto será aceptado,
(d) que cualquier acuerdo será ejecutable en todas las jurisdicciones,
(e) que un tribunal aprobará o adoptará cualquier acuerdo, o
(f) que cualquier traducción, resumen o contenido generado esté libre de errores.

5. Asuntos inadecuados o de emergencia
Los Servicios no sustituyen a los servicios de emergencia, la ayuda judicial urgente, la aplicación de la ley o la intervención en crisis. No confíe únicamente en los Servicios si su asunto implica peligro inmediato, amenazas, coerción, acecho, abuso, poner en peligro a niños, órdenes de protección urgentes, acusaciones penales, fechas límite de presentación inminentes u otras circunstancias que requieran intervención profesional inmediata.

Podemos rechazar, suspender o cancelar los Servicios por cualquier asunto que determinemos, a nuestro criterio, que no es adecuado para la mediación en línea o la facilitación basada en plataforma.

6. Elegibilidad y autoridad
Tu representas eso:
(a) tienes al menos 18 años,
(b) tiene capacidad legal para celebrar acuerdos vinculantes,
(c) cualquier información que proporcione es precisa y actual,
(d) si actúa para una empresa u organización, tiene autoridad para vincular a esa entidad, y
(e) su uso de los Servicios cumple con la ley aplicable.

7. Cuentas, acceso y seguridad
Es posible que deba crear una cuenta o acceder a un caso a través de un enlace, correo electrónico o flujo de trabajo de la plataforma. Usted es responsable de mantener la confidencialidad de su información de inicio de sesión, acceso al dispositivo y enlaces de acceso al caso, y de toda la actividad que ocurra a través de su cuenta o credenciales de acceso.

Debe notificarnos de inmediato sobre cualquier sospecha de acceso no autorizado o incidente de seguridad que involucre su cuenta o caso.

8. Plataforma y servicios de terceros
Algunos o todos los Servicios pueden entregarse a través de sistemas conectados o de terceros, incluidas herramientas de gestión de casos, mensajería, alojamiento, pago, documentos o comunicaciones. Esto puede incluir la plataforma ArtemisChat y Stripe para el procesamiento de pagos.

Los servicios de terceros están sujetos a sus propios términos, disponibilidad y limitaciones. No somos responsables de cortes, interrupciones, retrasos o fallas causadas por proveedores externos, excepto según lo exija la ley.

9. Pagos
Las tarifas, la estructura de precios, las divisiones de pago, las tarifas suplementarias y el momento del pago pueden variar según el servicio o caso y se mostrarán antes de solicitar o cobrar el pago.

Al realizar un pago, usted nos autoriza a nosotros y a nuestro procesador de pagos a cobrar al método de pago que proporcione las tarifas autorizadas, los impuestos, si corresponde, y cualquier cargo suplementario aprobado.

Acepta no iniciar devoluciones de cargo ni disputas de pago excepto de buena fe y por motivos legítimos. Si se presenta una devolución de cargo o una disputa de pago, podemos suspender el acceso al caso o los Servicios mientras se revisa el asunto.

10. Reembolsos y Cancelaciones
Las reglas de reembolso y cancelación se rigen por nuestra Política de reembolso y cancelación, que se incorpora a estos Términos por referencia.

11. Comunicaciones y registros electrónicos
Usted acepta recibir comunicaciones electrónicamente, incluso por correo electrónico, aviso en la plataforma, mensaje de texto (si está habilitado) o aviso en el sitio web. Usted acepta que las comunicaciones, registros, reconocimientos y firmas electrónicos pueden satisfacer los requisitos legales para escritos y firmas en la máxima medida permitida por la ley.

12. Contenido del usuario
Puede proporcionar declaraciones, respuestas, cargas, borradores, notas, mensajes, nombres, detalles de contacto, hechos de casos, detalles relacionados con niños, detalles financieros y otro contenido (“Contenido de usuario”).

Usted conserva la propiedad de su Contenido de usuario, pero nos otorga una licencia no exclusiva, mundial y libre de regalías para alojar, almacenar, usar, procesar, reproducir, transmitir, mostrar, traducir, resumir y utilizar de otro modo el Contenido de usuario según sea razonablemente necesario para proporcionar, asegurar, mejorar y administrar los Servicios, hacer cumplir nuestros derechos, cumplir con la ley y mantener registros.

Usted es el único responsable de la legalidad, exactitud e idoneidad de su Contenido de usuario.

13. Conducta prohibida
No puedes:
(a) proporcionar información falsa, engañosa o fraudulenta;
(b) hacerse pasar por otra persona;
(c) cargar código malicioso o intentar acceso no autorizado;
(d) acosar, amenazar o abusar de cualquier persona;
(e) utilizar los Servicios con fines ilegales, engañosos o de mala fe;
(f) extraer, copiar, aplicar ingeniería inversa o explotar los Servicios sin autorización; o
(g) interferir con la seguridad, integridad o funcionamiento normal de los Servicios.

14. Confidencialidad y Privacidad
Tomamos medidas razonables para proteger la información confidencial, pero no podemos garantizar absoluta confidencialidad o seguridad. La información del caso puede compartirse con la otra parte, el mediador, nuestros proveedores de servicios y otros, según sea necesario para proporcionar los Servicios o cumplir con la ley.

Nuestra Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos la información.

15. Propiedad Intelectual
Los Servicios, el sitio web, el diseño, la marca, los logotipos, los flujos de trabajo, el contenido, el texto, los gráficos, el código y los materiales que proporcionamos son de nuestra propiedad o de nuestros licenciantes y están protegidos por la ley. Excepto por su Contenido de usuario y el uso personal permitido, no puede copiarlos, modificarlos, distribuirlos, venderlos, licenciarlos ni explotarlos sin el consentimiento previo por escrito.

16. Renuncia de garantías
EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, LOS SERVICIOS SE PROPORCIONAN “TAL CUAL” Y “SEGÚN DISPONIBILIDAD”, SIN GARANTÍAS DE NINGÚN TIPO, EXPRESAS O IMPLÍCITAS, INCLUYENDO GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR, NO INFRACCIÓN, EXACTITUD, DISFRUTE TRANQUILO O QUE LOS SERVICIOS SERAN ININTERRUMPIDOS. LIBRE DE ERRORES O SEGURO.

17. Limitación de responsabilidad
EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, FAST DISPUTE RESOLUTION Y SUS PROPIETARIOS, AFILIADOS, CONTRATISTAS, MEDIADORES, AGENTES, LICENCIANTES Y PROVEEDORES DE SERVICIOS NO SERÁN RESPONSABLES DE NINGÚN DAÑO INDIRECTO, INCIDENTAL, CONSECUENTE, ESPECIAL, EJEMPLAR O PUNITIVO, NI DE CUALQUIER PÉRDIDA DE DATOS, GANANCIAS, INGRESOS, VOLUNTAD COMERCIAL, OPORTUNIDAD DE NEGOCIO O ACUERDOS, QUE SURJAN DE O ESTÁN RELACIONADOS CON LOS SERVICIOS, INCLUSO SI SE AVISÓ LA POSIBILIDAD.

EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, NUESTRA RESPONSABILIDAD TOTAL POR TODOS LOS RECLAMOS QUE SURJAN DE O RELACIONADOS CON LOS SERVICIOS NO EXCEDERÁ EL MAYOR DE: (A) LAS CANTIDADES QUE USTED NOS PAGÓ POR EL SERVICIO ESPECÍFICO QUE DA ORIGEN AL RECLAMO DURANTE LOS 3 MESES ANTES DEL EVENTO QUE DA ORIGEN AL RECLAMO; O (B) US$250.

Algunas jurisdicciones no permiten ciertas limitaciones, por lo que es posible que partes de esta sección no se apliquen a usted.

18. Indemnización
Usted acepta defender, indemnizar y eximir de responsabilidad a Fast Dispute Resolution y sus propietarios, afiliados, contratistas, mediadores, agentes, licenciantes y proveedores de servicios de y contra reclamos, responsabilidades, daños, pérdidas, sentencias, costos y gastos (incluidos los honorarios razonables de abogados) que surjan de o estén relacionados con:
(a) su uso de los Servicios,
(b) su contenido de usuario,
(c) su violación de estos Términos,
(d) su violación de la ley, o
(e) su disputa con otro usuario o parte.

19. Suspensión y Terminación
Podemos suspender, limitar o cancelar el acceso a los Servicios en cualquier momento, con o sin previo aviso, si creemos que es necesario para proteger los Servicios, los usuarios, la integridad de la plataforma, el cumplimiento legal, la seguridad o nuestros intereses comerciales.

20. Ley aplicable y jurisdicción
Excepto cuando la ley obligatoria requiera lo contrario, estos Términos se rigen por las leyes del Estado de California, sin tener en cuenta las normas de conflicto de leyes.

Cualquier disputa no arbitrable que surja de estos Términos o el sitio web o se relacione con ellos se presentará exclusivamente en los tribunales estatales o federales ubicados en el condado de Los Ángeles, California, y usted acepta su jurisdicción.

21. Cambios en los Servicios o Términos
Podemos modificar estos Términos o los Servicios de vez en cuando. La versión actualizada entrará en vigor cuando se publique, a menos que se indique una fecha posterior. Su uso continuado de los Servicios después de una actualización significa que acepta los Términos revisados.

22. Contacto
Fast Dispute Resolution
Soporte: support@fastdisputeresolution.com

Si no está de acuerdo con estos Términos, no utilice los Servicios.`,
    "privacy": `Esta es una versión traducida proporcionada para su conveniencia. En caso de discrepancia, prevalecerá la versión en inglés.

FAST DISPUTE RESOLUTION
POLÍTICA DE PRIVACIDAD

Última actualización: 19 de mayo de 2026

Esta Política de Privacidad explica cómo Fast Dispute Resolution (“FDR”, “nosotros”, “nos”, “nuestro”) recopila, utiliza, divulga, almacena y protege información personal a través de este sitio web y nuestros servicios conectados y flujos de trabajo de plataforma.

Al utilizar el sitio web o los Servicios, usted reconoce esta Política de Privacidad.

1. Alcance
Esta Política de Privacidad se aplica a:
(a) visitantes de este sitio web,
(b) personas que nos contactan,
(c) personas que inician o participan en un caso,
(d) partes en una disputa,
(e) clientes potenciales,
(f) personas cuya información se presenta en relación con un caso, y
(g) usuarios de flujos de trabajo relacionados entregados a través de plataformas conectadas, incluido ArtemisChat.

2. Información que recopilamos
Podemos recopilar las siguientes categorías de información:

A. Información de contacto e identidad
- nombre
- dirección de correo electrónico
- número de teléfono
- Dirección de envio
- nombre de la organización
- identificadores de cuenta de usuario

B. Información de casos y disputas
- tipo de disputa
- declaraciones y descripciones
- detalles de la relación
- detalles relacionados con la familia
- detalles relacionados con el niño
- preferencias de programación
- preferencias de comunicación
- archivos y mensajes subidos
- resultados solicitados
- acuerdos, borradores y ediciones

C. Información financiera y de pagos
- detalles de facturación
- historial de transacciones
- estado de pago
- datos de pago parcial/pago fraccionado
- información de tarifa suplementaria
Los datos de la tarjeta de pago son procesados ​​por Stripe y no los almacenamos en su totalidad.

D. Información técnica y de uso.
- dirección IP
- información del navegador/dispositivo
- Sistema operativo
- ubicación aproximada inferida de IP
- páginas vistas
- clics e interacciones
- cookies y tecnologías similares
- registros, diagnósticos y eventos de seguridad

E. Información de soporte
- consultas de atención al cliente
- correspondencia
- informes de emisión

F. Datos relacionados con niños
Debido a que las disputas familiares pueden involucrar la custodia de los niños, manutención, educación, salud o cuestiones de paternidad, los adultos que utilizan los Servicios pueden proporcionar información relacionada con los niños como parte de un caso. El sitio web y los Servicios no están dirigidos a niños y no buscamos intencionadamente recopilar información directamente de niños a través de interfaces públicas.

3. Fuentes de información
Recopilamos información:
- directamente de ti
- de la otra parte en una disputa
- de representantes autorizados
- desde flujos de trabajo de plataformas conectadas
- de procesadores de pagos y proveedores de servicios
- automáticamente a partir de su uso del sitio web o los Servicios

4. Cómo utilizamos la información
Podemos utilizar información para:
- proporcionar y administrar los Servicios
- abrir y gestionar casos
- facilitar la comunicación y la resolución de disputas
- verificar identidad y autoridad
- procesar pagos y prevenir fraudes
- generar borradores, resúmenes, traducciones o resultados de flujo de trabajo
- proporcionar soporte al cliente
- mejorar, proteger y solucionar problemas de los Servicios
- hacer cumplir nuestros derechos y políticas
- cumplir con las obligaciones legales
- mantener registros comerciales y de casos

5. Bases legales (cuando corresponda)
Dependiendo de su ubicación y la ley aplicable, podemos procesar información personal en función de:
- tu consentimiento
- ejecución de un contrato o pasos solicitados antes de entrar en uno
- nuestros intereses legítimos en proporcionar, asegurar y mejorar los Servicios
- cumplimiento de obligaciones legales
- protección de intereses vitales cuando lo permita la ley

6. Cómo compartimos información
Podemos revelar información:
- a la otra parte o partes en un caso, cuando así lo requiera el proceso
- a mediadores, contratistas y personal de apoyo que trabajan en un caso
- a proveedores de servicios que alojan, aseguran, procesan o respaldan los Servicios
- a procesadores de pagos como Stripe
- a asesores profesionales, aseguradores o auditores
- a los tribunales, reguladores, autoridades policiales u otros cuando así lo exija la ley
- en relación con una fusión, venta, financiación, reorganización o transferencia de activos
- con su consentimiento o bajo su dirección

No vendemos información personal por dinero.

7. Stripe y Pagos
Los pagos se procesan a través de Stripe. Stripe puede recopilar, utilizar y procesar datos de pago y prevención de fraude según sus propias políticas y acuerdos. Es posible que recibamos información limitada relacionada con transacciones de Stripe, como estado de pago, detalles parciales de la tarjeta, nombre de facturación, país e identificadores necesarios para administrar pagos, prevenir fraudes y respaldar disputas.

8. Cookies y tecnologías similares
Podemos utilizar cookies, píxeles, almacenamiento local, herramientas de sesión y tecnologías similares para:
- funcionalidad esencial del sitio
- seguridad y prevención de fraude
- preferencias y configuración de idioma
- análisis y rendimiento
- solución de problemas y diagnóstico

Cuando lo exija la ley, solicitaremos consentimiento antes de utilizar cookies no esenciales o tecnologías similares.

9. Retención de datos
Conservamos información solo el tiempo que sea razonablemente necesario para los fines descritos en esta Política, que incluyen:
- proporcionar servicios
- completar transacciones
- mantener registros de casos
- cumplir con obligaciones legales, fiscales, contables, de seguros o de resolución de disputas
- hacer cumplir los acuerdos
- resolver disputas
- prevenir el fraude y el abuso

Los períodos de retención pueden variar según el tipo de caso, la ley aplicable y las necesidades operativas. Cuando la información ya no sea necesaria, la eliminaremos, la haremos anónima o la eliminaremos de forma segura cuando sea posible.

10. Seguridad de datos
Utilizamos medidas de seguridad administrativas, técnicas y organizativas razonables diseñadas para proteger la información contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Sin embargo, no se garantiza que ningún método de transmisión, almacenamiento o seguridad sea completamente seguro y no podemos prometer seguridad absoluta.

11. Transferencias Internacionales
Nuestro sitio web, proveedores de plataformas o proveedores de servicios pueden almacenar o procesar información en los Estados Unidos u otras jurisdicciones. Al utilizar los Servicios, usted reconoce que su información puede transferirse y procesarse en países que pueden tener reglas de protección de datos diferentes a las de su lugar de residencia.

12. Sus opciones y derechos
Dependiendo de la ley aplicable, es posible que tenga derechos a:
- acceder a cierta información personal
- solicitar corrección de información inexacta
- solicitar la eliminación de cierta información
- oponerse o restringir cierto procesamiento
- retirar el consentimiento cuando el procesamiento depende del consentimiento
- solicitar la portabilidad de cierta información
- apelar una denegación de una solicitud cuando lo exija la ley

Para ejercer una solicitud, contáctenos al support@fastdisputeresolution.com. Es posible que necesitemos verificar su identidad y autoridad antes de procesar su solicitud. También podemos denegar o limitar solicitudes cuando lo permita la ley, incluso cuando la divulgación afectaría negativamente los derechos de otra parte o entraría en conflicto con obligaciones legales.

13. Derechos de privacidad de California y otros estados de EE. UU.
Si las leyes de privacidad de su jurisdicción otorgan derechos específicos, respetaremos esos derechos en la medida que corresponda. Si es residente de California y la ley de privacidad de California aplicable se aplica a su solicitud, puede comunicarse con nosotros utilizando la información a continuación para enviar una solicitud verificable.

14. No rastrear
Es posible que nuestros Servicios no respondan a todas las señales de “No rastrear” basadas en el navegador. Cuando lo exija la ley, respetaremos las opciones de exclusión voluntaria proporcionadas a través de mecanismos legalmente reconocidos.

15. Enlaces y servicios de terceros
El sitio web o los Servicios pueden contener enlaces a sitios web, herramientas o integraciones de terceros. No somos responsables de sus prácticas de privacidad. Revise sus políticas antes de brindarles información.

16. Privacidad de los niños
El sitio web no está dirigido a niños menores de 13 años. No recopilamos intencionadamente información personal directamente de niños a través del sitio web público. Sin embargo, los adultos pueden enviar información relacionada con niños cuando sea razonablemente necesario para un caso familiar. Si cree que hemos recopilado información directamente de un niño de una manera que no es apropiada, contáctenos y la revisaremos.

17. Cambios a esta política
Podemos actualizar esta Política de Privacidad de vez en cuando. La versión revisada entra en vigor cuando se publica, a menos que se indique una fecha posterior.

18. Contacto
Fast Dispute Resolution
Soporte: support@fastdisputeresolution.com

Si se comunica con nosotros con respecto a la privacidad, incluya suficiente información para que podamos comprender y responder a su solicitud.`,
    "refunds": `Esta es una versión traducida proporcionada para su conveniencia. En caso de discrepancia, prevalecerá la versión en inglés.

FAST DISPUTE RESOLUTION
POLÍTICA DE REEMBOLSO Y CANCELACIÓN

Última actualización: 19 de mayo de 2026

Esta Política de reembolso y cancelación explica cómo Fast Dispute Resolution maneja cancelaciones, créditos y reembolsos.

1. Regla general
A menos que lo exija la ley o se indique expresamente lo contrario en un aviso de honorarios por escrito, una cotización, una factura o una página de pago específica de un caso, los honorarios generalmente se ganan a medida que los servicios están disponibles, se reservan, se inician o se realizan.

2. Tarifas no reembolsables o ganadas
Los siguientes generalmente no son reembolsables una vez cobrados o una vez que comienza el trabajo relacionado:
- tarifas de apertura o admisión/instalación de casos
- tarifas de activación administrativa
- Tarifas de acceso a la plataforma vinculadas al lanzamiento del caso.
- honorarios por sesiones de mediación completadas
- honorarios de redacción o preparación de documentos una vez que comienza la redacción
- honorarios suplementarios una vez que comience el trabajo o hito relacionado
- Honorarios asociados con traducciones completadas, resúmenes o resultados de flujo de trabajo generados y preparados para el caso.

3. Pagos divididos y pagos específicos de cada partido
Cuando los honorarios se dividen entre las partes, cada parte es responsable de la parte asignada a esa parte, a menos que una notificación escrita del caso indique lo contrario. La falta de pago, el retraso, la negativa a participar o el retiro de una de las partes no dan automáticamente derecho a la otra parte a un reembolso.

4. Casos que no proceden
Si un caso no procede, cualquier reembolso o crédito se determina caso por caso y depende de los servicios, configuración, revisión o trabajo de caso que ya se hayan brindado. Podemos, pero no estamos obligados a hacerlo, emitir un reembolso completo, un reembolso parcial, un crédito de servicio o ningún reembolso, excepto cuando lo exija la ley.

5. Cancelaciones por su parte
Puede dejar de utilizar los Servicios en cualquier momento. Sin embargo, suspender el uso no le da derecho automáticamente a un reembolso por los servicios ya prestados, puestos a disposición, reservados o iniciados.

6. Reprogramación y sesiones en vivo
Si se ofrecen sesiones en vivo para un caso particular:
- las solicitudes de reprogramación deberían presentarse lo antes posible;
- las sesiones perdidas o las cancelaciones tardías pueden considerarse tiempo usado o tiempo reservado no reembolsable;
- Podemos establecer reglas de reprogramación específicas de cada caso en un aviso de programación o factura.

7. Cancelaciones o terminación por nuestra parte
Podemos rechazar, suspender o cancelar los Servicios si un asunto parece inseguro, inadecuado, ilegal, abusivo o de otro modo inconsistente con nuestras políticas. Si terminamos antes de que comience el trabajo sustancial, podemos, a nuestra discreción, emitir un reembolso o crédito total o parcial. Si el trabajo sustancial ya ha comenzado, podemos retener los honorarios por el trabajo realizado o puesto a disposición.

8. Devoluciones de cargo y disputas de pago
Antes de disputar un cargo con su banco o emisor de su tarjeta, contáctenos al support@fastdisputeresolution.com. Presentar una devolución de cargo no cancela automáticamente sus obligaciones según nuestros Términos. Nos reservamos el derecho de suspender el acceso al caso mientras se revisa una devolución de cargo y de impugnar las devoluciones de cargo que consideremos inapropiadas.

9. Método de reembolso
Los reembolsos aprobados, si los hubiera, generalmente se devuelven al método de pago original a menos que la ley exija lo contrario o se acuerde por escrito.

10. Momento
Los tiempos de revisión de reembolsos varían según el caso y el método de pago. Si se aprueba un reembolso, el tiempo de procesamiento también depende del procesador de pagos y de su banco.

11. Contacto
Soporte: support@fastdisputeresolution.com`,
    "disclaimer": `Esta es una versión traducida proporcionada para su conveniencia. En caso de discrepancia, prevalecerá la versión en inglés.

FAST DISPUTE RESOLUTION
AVISO LEGAL

Última actualización: 19 de mayo de 2026

Fast Dispute Resolution proporciona facilitación de resolución de disputas, servicios relacionados con la mediación y herramientas de flujo de trabajo relacionadas. La información en este sitio web y a través de nuestros Servicios se proporciona únicamente con fines informativos y de facilitación generales.

1. No asesoramiento legal
Nada en este sitio web o en nuestros Servicios es asesoramiento legal, y nada aquí debe tratarse como un sustituto del asesoramiento de un abogado calificado con licencia en la jurisdicción correspondiente.

2. Sin relación abogado-cliente
Su uso de este sitio web o Servicios no crea una relación abogado-cliente o representación legal a menos que un compromiso escrito por separado lo indique expresamente.

3. Proceso neutral
Cuando se brindan servicios de mediación, el mediador debe actuar como un facilitador neutral en lugar de un defensor de cualquiera de las partes.

4. Sin garantía
No garantizamos:
- que un caso se resolverá,
- que todas las partes participarán,
- que cualquier propuesta será aceptada,
- que cualquier acuerdo será ejecutable en todas partes,
- o que cualquier resultado será adecuado a sus necesidades.

5. Asesoramiento independiente
Usted es responsable de decidir si consultar a profesionales legales, fiscales, contables, financieros o de salud mental antes de confiar en cualquier acuerdo, traducción, borrador o resumen.

6. No para emergencias o situaciones inseguras
No confíe únicamente en este sitio web o en los Servicios para situaciones de emergencia, inseguridad o crisis, incluidas amenazas de violencia, coerción, abuso, acecho, puesta en peligro de niños, órdenes de protección urgentes o fechas límite inminentes que requieran una acción judicial.

7. Servicios futuros
Si luego ofrecemos servicios adicionales, como arbitraje u otros servicios de resolución de disputas, esos servicios se describirán por separado y pueden estar sujetos a términos adicionales.

8. Contacto
Soporte: support@fastdisputeresolution.com`,
    "cookies": `Esta es una versión traducida proporcionada para su conveniencia. En caso de discrepancia, prevalecerá la versión en inglés.

FAST DISPUTE RESOLUTION
AVISO DE COOKIES

Última actualización: 19 de mayo de 2026

Utilizamos cookies y tecnologías similares para operar nuestro sitio web, recordar preferencias, mejorar el rendimiento, proteger el sitio y comprender cómo los visitantes utilizan nuestros servicios. Algunas cookies son estrictamente necesarias; otros pueden usarse para análisis o fines similares.

Cuando lo exija la ley, solicitaremos el consentimiento antes de utilizar cookies no esenciales. También puede administrar las cookies a través de la configuración de su navegador, aunque deshabilitar algunas cookies puede afectar la funcionalidad del sitio.

Para obtener más información sobre cómo utilizamos la información personal, consulte nuestra Política de privacidad.`,
  },
  "pt": {
    "terms": `Esta é uma versão traduzida fornecida por conveniência. Em caso de qualquer discrepância, a versão em inglês prevalecerá.

FAST DISPUTE RESOLUTION
TERMOS DE SERVIÇO

Última atualização: 19 de maio de 2026

Estes Termos de Serviço (“Termos”) regem o seu acesso e uso do site Fast Dispute Resolution, páginas relacionadas e quaisquer serviços, recursos, conteúdo, recebimento de casos, comunicações, fluxos de trabalho ou ferramentas disponibilizadas através deste site ou através de nossa plataforma conectada (“Serviços”). “Fast Dispute Resolution”, “FDR”, “nós”, “nos” e “nosso” significa o operador deste site e dos Serviços. “Você” significa qualquer visitante, usuário, cliente, parte em uma disputa ou outra pessoa que acesse ou use os Serviços.

Ao acessar ou usar os Serviços, você concorda com estes Termos. Se você não concordar, não utilize os Serviços.

1. Natureza dos Serviços
Fast Dispute Resolution fornece facilitação de resolução de disputas on-line, recebimento de casos, gerenciamento de fluxo de trabalho e serviços relacionados à mediação. Salvo indicação expressa em uma descrição de serviço específica, página de pedido ou aviso de caso, nossos Serviços são apenas serviços de mediação e facilitação de resolução de disputas.

Não somos um escritório de advocacia através deste site, e o uso dos Serviços não cria por si só:
(a) uma relação advogado-cliente,
(b) representação legal,
(c) aconselhamento jurídico,
(d) um dever fiduciário além da lei aplicável, ou
(e) uma garantia de qualquer resultado.

Fornecemos processos estruturados, fluxos de trabalho orientados, facilitação neutra e suporte administrativo relacionado. Não prometemos que as partes chegarão a um acordo.

2. Sem aconselhamento jurídico; Aconselhamento independente recomendado
As informações neste site e nos Serviços são apenas para fins informativos gerais e de facilitação de processos. Não se trata de aconselhamento jurídico, fiscal, financeiro, contábil, de saúde mental ou outro aconselhamento profissional.

Você é responsável por obter seu próprio aconselhamento jurídico ou profissional independente, quando apropriado, inclusive antes de assinar qualquer acordo final ou confiar em qualquer conteúdo traduzido ou resumido.

3. Neutralidade
Quando são prestados serviços de mediação, o mediador deve agir como um facilitador neutro. Exceto quando expressamente declarado num compromisso escrito separado, não defendemos um lado contra o outro.

A existência de um mediador, plataforma, fluxo de trabalho ou linguagem proposta não significa que endossamos a posição de qualquer parte ou garantimos justiça, aplicabilidade ou adequação de um resultado às suas circunstâncias.

4. Processo Voluntário; Nenhuma garantia de resultado
Os resultados da resolução de disputas e da mediação são inerentemente incertos. Qualquer acordo, proposta ou projeto de acordo é voluntário, a menos que e até que as partes acordem de outra forma por escrito, válido e executável.

Não garantimos:
(a) que a outra parte participará,
(b) que qualquer assunto será resolvido,
(c) que qualquer rascunho será aceito,
(d) que qualquer acordo será executável em todas as jurisdições,
(e) que um tribunal aprovará ou adotará qualquer acordo, ou
(f) que qualquer tradução, resumo ou conteúdo gerado esteja livre de erros.

5. Assuntos inadequados ou emergenciais
Os Serviços não substituem serviços de emergência, assistência judicial urgente, aplicação da lei ou intervenção em crises. Não confie apenas nos Serviços se o seu assunto envolver perigo imediato, ameaças, coerção, perseguição, abuso, perigo para crianças, ordens de proteção urgentes, alegações criminais, prazos de arquivamento iminentes ou outras circunstâncias que exijam intervenção profissional imediata.

Poderemos recusar, suspender ou encerrar os Serviços por qualquer assunto que determinemos, a nosso critério, ser inadequado para mediação online ou facilitação baseada em plataforma.

6. Elegibilidade e Autoridade
Você representa isso:
(a) você tem pelo menos 18 anos,
(b) você tem capacidade legal para celebrar acordos vinculativos,
(c) qualquer informação que você fornecer é precisa e atual,
(d) se estiver agindo para uma empresa ou organização, você tem autoridade para vincular essa entidade, e
(e) seu uso dos Serviços está em conformidade com a lei aplicável.

7. Contas, acesso e segurança
Pode ser necessário que você crie uma conta ou acesse um caso por meio de um link, e-mail ou fluxo de trabalho da plataforma. Você é responsável por manter a confidencialidade de suas informações de login, acesso ao dispositivo e links de acesso ao caso, e por todas as atividades que ocorrem por meio de sua conta ou credenciais de acesso.

Você deve nos notificar imediatamente sobre qualquer suspeita de acesso não autorizado ou incidente de segurança envolvendo sua conta ou caso.

8. Plataforma e serviços de terceiros
Alguns ou todos os Serviços podem ser prestados através de sistemas conectados ou de terceiros, incluindo gerenciamento de casos, mensagens, hospedagem, pagamento, documentos ou ferramentas de comunicação. Isso pode incluir a plataforma ArtemisChat e Stripe para processamento de pagamentos.

Os serviços de terceiros estão sujeitos aos seus próprios termos, disponibilidade e limitações. Não nos responsabilizamos por interrupções, atrasos ou falhas causadas por fornecedores terceirizados, exceto conforme exigido por lei.

9. Pagamentos
As taxas, a estrutura de preços, as divisões de pagamento, as taxas suplementares e o prazo de pagamento podem variar de acordo com o serviço ou caso e serão mostrados antes do pagamento ser solicitado ou cobrado.

Ao efetuar um pagamento, você autoriza a nós e ao nosso processador de pagamentos a cobrar, no método de pagamento fornecido, taxas autorizadas, impostos, se aplicável, e quaisquer cobranças suplementares aprovadas.

Você concorda em não iniciar estornos ou disputas de pagamento, exceto de boa fé por motivos legítimos. Se for apresentado um estorno ou disputa de pagamento, poderemos suspender o acesso ao caso ou aos Serviços enquanto o assunto é analisado.

10. Reembolsos e cancelamentos
As regras de reembolso e cancelamento são regidas pela nossa Política de Reembolso e Cancelamento, que está incorporada nestes Termos por referência.

11. Comunicações Eletrônicas e Registros
Você concorda em receber comunicações eletronicamente, inclusive por e-mail, aviso na plataforma, mensagem de texto (se habilitado) ou aviso no site. Você concorda que as comunicações eletrônicas, registros, reconhecimentos e assinaturas podem satisfazer os requisitos legais para escritos e assinaturas em toda a extensão permitida por lei.

12. Conteúdo do usuário
Você pode fornecer declarações, respostas, uploads, rascunhos, notas, mensagens, nomes, detalhes de contato, fatos de casos, detalhes relacionados a crianças, detalhes financeiros e outros conteúdos (“Conteúdo do Usuário”).

Você mantém a propriedade do seu Conteúdo do Usuário, mas nos concede uma licença não exclusiva, mundial e isenta de royalties para hospedar, armazenar, usar, processar, reproduzir, transmitir, exibir, traduzir, resumir e de outra forma usar o Conteúdo do Usuário conforme razoavelmente necessário para fornecer, proteger, melhorar e administrar os Serviços, fazer cumprir nossos direitos, cumprir a lei e manter registros.

Você é o único responsável pela legalidade, precisão e adequação do seu Conteúdo do Usuário.

13. Conduta Proibida
Você não pode:
(a) fornecer informações falsas, enganosas ou fraudulentas;
(b) personificar outra pessoa;
(c) fazer upload de código malicioso ou tentar acesso não autorizado;
(d) assediar, ameaçar ou abusar de qualquer pessoa;
(e) usar os Serviços para fins ilegais, enganosos ou de má-fé;
(f) raspar, copiar, fazer engenharia reversa ou explorar os Serviços sem autorização; ou
(g) interferir na segurança, integridade ou operação normal dos Serviços.

14. Confidencialidade e Privacidade
Tomamos medidas razoáveis ​​para proteger informações confidenciais, mas não podemos garantir confidencialidade ou segurança absoluta. As informações do caso podem ser compartilhadas com a outra parte, o mediador, nossos prestadores de serviços e outros, conforme necessário para fornecer os Serviços ou cumprir a lei.

Nossa Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos informações.

15. Propriedade intelectual
Os Serviços, site, design, marca, logotipos, fluxos de trabalho, conteúdo, texto, gráficos, código e materiais fornecidos por nós são de nossa propriedade ou de nossos licenciadores e são protegidos por lei. Exceto pelo seu Conteúdo de Usuário e uso pessoal permitido, você não pode copiá-los, modificá-los, distribuí-los, vendê-los, licenciá-los ou explorá-los sem consentimento prévio por escrito.

16. Isenção de responsabilidade de garantias
NA MEDIDA MÁXIMA PERMITIDA POR LEI, OS SERVIÇOS SÃO FORNECIDOS “COMO ESTÃO” E “CONFORME DISPONÍVEIS”, SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS, INCLUINDO GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM DETERMINADO FIM, NÃO VIOLAÇÃO, PRECISÃO, USO SILENCIOSO, OU QUE OS SERVIÇOS SERÃO SEJA ININTERRUPTO, LIVRE DE ERROS OU SEGURO.

17. Limitação de responsabilidade
NA EXTENSÃO MÁXIMA PERMITIDA POR LEI, FAST DISPUTE RESOLUTION E SEUS PROPRIETÁRIOS, AFILIADOS, CONTRATADOS, MEDIADORES, AGENTES, LICENCIADORES E PRESTADORES DE SERVIÇOS NÃO SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, CONSEQUENCIAIS, ESPECIAIS, EXEMPLARES OU PUNITIVOS, OU POR QUALQUER PERDA DE DADOS, LUCROS, RECEITAS, BOA VONTADE, OPORTUNIDADES DE NEGÓCIOS OU ACORDOS, DECORRENTES OU RELACIONADOS AOS SERVIÇOS, MESMO SE AVISADOS DA POSSIBILIDADE.

NA EXTENSÃO MÁXIMA PERMITIDA POR LEI, NOSSA RESPONSABILIDADE TOTAL POR TODAS AS RECLAMAÇÕES DECORRENTES OU RELACIONADAS AOS SERVIÇOS NÃO EXCEDERÁ O MAIOR DE: (A) VALOR QUE VOCÊ PAGOU PELO SERVIÇO ESPECÍFICO QUE DÁ ORIGEM À RECLAMAÇÃO DURANTE OS 3 MESES ANTES DO EVENTO QUE DÁ ORIGEM À RECLAMAÇÃO; OU (B) US$250.

Algumas jurisdições não permitem determinadas limitações, portanto partes desta seção podem não se aplicar a você.

18. Indenização
Você concorda em defender, indenizar e isentar Fast Dispute Resolution e seus proprietários, afiliados, contratados, mediadores, agentes, licenciantes e prestadores de serviços de e contra reivindicações, responsabilidades, danos, perdas, julgamentos, custos e despesas (incluindo honorários advocatícios razoáveis) decorrentes ou relacionados a:
(a) seu uso dos Serviços,
(b) seu Conteúdo do Usuário,
(c) sua violação destes Termos,
(d) sua violação da lei, ou
(e) sua disputa com outro usuário ou parte.

19. Suspensão e Rescisão
Poderemos suspender, limitar ou encerrar o acesso aos Serviços a qualquer momento, com ou sem aviso prévio, se acreditarmos que seja necessário para proteger os Serviços, os usuários, a integridade da plataforma, a conformidade legal, a segurança ou nossos interesses comerciais.

20. Lei Aplicável e Foro
Exceto quando a lei obrigatória exigir o contrário, estes Termos são regidos pelas leis do Estado da Califórnia, independentemente das regras de conflito de leis.

Qualquer disputa não arbitrável decorrente ou relacionada a estes Termos ou ao site será levada exclusivamente aos tribunais estaduais ou federais localizados no Condado de Los Angeles, Califórnia, e você concorda com sua jurisdição.

21. Alterações nos Serviços ou Termos
Poderemos modificar estes Termos ou os Serviços de tempos em tempos. A versão atualizada entrará em vigor quando publicada, a menos que uma data posterior seja indicada. O uso continuado dos Serviços após uma atualização significa que você aceita os Termos revisados.

22. Contato
Fast Dispute Resolution
Suporte: support@fastdisputeresolution.com

Se você não concordar com estes Termos, não use os Serviços.`,
    "privacy": `Esta é uma versão traduzida fornecida por conveniência. Em caso de qualquer discrepância, a versão em inglês prevalecerá.

FAST DISPUTE RESOLUTION
POLÍTICA DE PRIVACIDADE

Última atualização: 19 de maio de 2026

Esta Política de Privacidade explica como Fast Dispute Resolution (“FDR”, “nós”, “nos”, “nosso”) coleta, usa, divulga, armazena e protege informações pessoais por meio deste site e de nossos serviços conectados e fluxos de trabalho de plataforma.

Ao utilizar o site ou Serviços, você reconhece esta Política de Privacidade.

1. Escopo
Esta Política de Privacidade aplica-se a:
(a) visitantes deste site,
(b) pessoas que nos contactam,
(c) pessoas que iniciam ou participam de um caso,
(d) partes em uma disputa,
(e) clientes em potencial,
(f) pessoas cujas informações são enviadas em conexão com um caso, e
(g) usuários de fluxos de trabalho relacionados entregues por meio de plataformas conectadas, incluindo ArtemisChat.

2. Informações que coletamos
Podemos coletar as seguintes categorias de informações:

A. Informações de contato e identidade
- nome
- endereço de email
- número de telefone
- endereço para correspondência
- nome da organização
- identificadores de conta de usuário

B. Informações sobre casos e disputas
- tipo de disputa
- declarações e descrições
- detalhes do relacionamento
- detalhes relacionados à família
- detalhes relacionados à criança
- preferências de agendamento
- preferências de comunicação
- arquivos e mensagens enviados
- resultados solicitados
- acordos, rascunhos e edições

C. Informações financeiras e de pagamento
- detalhes de faturamento
- histórico de transações
- status do pagamento
- dados de pagamento parcial/pagamento dividido
- informações sobre taxas suplementares
Os dados do cartão de pagamento são processados ​​por Stripe e não são totalmente armazenados por nós.

D. Informações técnicas e de uso
- Endereço IP
- informações do navegador/dispositivo
- sistema operacional
- localização aproximada inferida do IP
- páginas visualizadas
- cliques e interações
- cookies e tecnologias semelhantes
- logs, diagnósticos e eventos de segurança

E. Informações de suporte
- consultas de suporte ao cliente
- correspondência
- emitir relatórios

F. Dados relacionados a crianças
Como as disputas familiares podem envolver questões de custódia, apoio, escolaridade, saúde ou parentalidade dos filhos, os adultos que utilizam os Serviços podem fornecer informações relacionadas às crianças como parte de um caso. O site e os Serviços não são direcionados a crianças e não procuramos intencionalmente coletar informações diretamente de crianças por meio de interfaces voltadas ao público.

3. Fontes de informação
Coletamos informações:
- diretamente de você
- da outra parte em uma disputa
- de representantes autorizados
- de fluxos de trabalho de plataforma conectada
- de processadores de pagamento e provedores de serviços
- automaticamente do seu uso do site ou dos Serviços

4. Como usamos as informações
Podemos usar informações para:
- fornecer e administrar os Serviços
- abrir e gerenciar casos
- facilitar a comunicação e a resolução de disputas
- verificar identidade e autoridade
- processar pagamentos e prevenir fraudes
- gerar rascunhos, resumos, traduções ou saídas de fluxo de trabalho
- fornecer suporte ao cliente
- melhorar, proteger e solucionar problemas dos Serviços
- fazer cumprir nossos direitos e políticas
- cumprir as obrigações legais
- manter registros de negócios e casos

5. Bases Legais (Quando Aplicável)
Dependendo da sua localização e da legislação aplicável, poderemos processar informações pessoais com base em:
- seu consentimento
- execução de um contrato ou etapas solicitadas antes de entrar em um
- nossos interesses legítimos em fornecer, proteger e melhorar os Serviços
- cumprimento das obrigações legais
- proteção de interesses vitais quando permitido por lei

6. Como compartilhamos informações
Podemos divulgar informações:
- à outra parte ou partes em um caso, quando necessário para o processo
- para mediadores, contratados e pessoal de apoio que trabalha em um caso
- para provedores de serviços que hospedam, protegem, processam ou oferecem suporte aos Serviços
- para processadores de pagamento como Stripe
- para consultores profissionais, seguradoras ou auditores
- a tribunais, reguladores, autoridades policiais ou outros, quando exigido por lei
- em conexão com uma fusão, venda, financiamento, reorganização ou transferência de ativos
- com o seu consentimento ou sob sua orientação

Não vendemos informações pessoais por dinheiro.

7. Stripe e Pagamentos
Os pagamentos são processados ​​através de Stripe. Stripe pode coletar, usar e processar dados de pagamento e prevenção de fraudes de acordo com suas próprias políticas e acordos. Podemos receber informações limitadas relacionadas a transações de Stripe, como status de pagamento, detalhes parciais do cartão, nome de cobrança, país e identificadores necessários para gerenciar pagamentos, prevenir fraudes e apoiar disputas.

8. Cookies e tecnologias semelhantes
Podemos usar cookies, pixels, armazenamento local, ferramentas de sessão e tecnologias semelhantes para:
- funcionalidade essencial do site
- segurança e prevenção de fraude
- preferências e configurações de idioma
- análise e desempenho
- solução de problemas e diagnóstico

Sempre que exigido por lei, solicitaremos consentimento antes de utilizar cookies não essenciais ou tecnologias semelhantes.

9. Retenção de dados
Mantemos informações apenas enquanto for razoavelmente necessário para os fins descritos nesta Política, incluindo para:
- fornecer serviços
- transações completas
- manter registros de casos
- cumprir obrigações legais, fiscais, contábeis, de seguros ou de resolução de disputas
- fazer cumprir acordos
- resolver disputas
- prevenir fraudes e abusos

Os períodos de retenção podem variar dependendo do tipo de caso, da lei aplicável e das necessidades operacionais. Quando as informações não forem mais necessárias, iremos excluí-las, torná-las anônimas ou descartá-las com segurança sempre que possível.

10. Segurança de dados
Utilizamos salvaguardas administrativas, técnicas e organizacionais razoáveis, concebidas para proteger as informações contra acesso não autorizado, divulgação, alteração ou destruição. No entanto, nenhum método de transmissão, armazenamento ou segurança é totalmente seguro e não podemos prometer segurança absoluta.

11. Transferências Internacionais
Nosso site, provedores de plataforma ou prestadores de serviços podem armazenar ou processar informações nos Estados Unidos ou em outras jurisdições. Ao utilizar os Serviços, você reconhece que suas informações podem ser transferidas e processadas em países que podem ter regras de proteção de dados diferentes do seu local de residência.

12. Suas escolhas e direitos
Dependendo da lei aplicável, você pode ter direitos a:
- acessar certas informações pessoais
- solicitar correção de informações imprecisas
- solicitar a exclusão de determinadas informações
- opor-se ou restringir determinado processamento
- retirar o consentimento quando o processamento depender do consentimento
- solicitar a portabilidade de determinadas informações
- recorrer de uma negação de um pedido quando exigido por lei

Para exercer uma solicitação, entre em contato conosco pelo telefone support@fastdisputeresolution.com. Talvez seja necessário verificar sua identidade e autoridade antes de processar sua solicitação. Também poderemos negar ou limitar solicitações quando permitido por lei, inclusive quando a divulgação afetar negativamente os direitos de outra parte ou entrar em conflito com obrigações legais.

13. Direitos de privacidade da Califórnia e de outros estados dos EUA
Se as leis de privacidade na sua jurisdição fornecerem direitos específicos, honraremos esses direitos na medida aplicável. Se você reside na Califórnia e a lei de privacidade aplicável da Califórnia se aplica à sua solicitação, entre em contato conosco usando as informações abaixo para enviar uma solicitação verificável.

14. Não rastrear
Nossos serviços podem não responder a todos os sinais “Do Not Track” baseados no navegador. Quando exigido por lei, honraremos as opções de exclusão fornecidas através de mecanismos legalmente reconhecidos.

15. Links e serviços de terceiros
O site ou Serviços podem conter links para sites, ferramentas ou integrações de terceiros. Não somos responsáveis ​​por suas práticas de privacidade. Revise suas políticas antes de fornecer informações a eles.

16. Privacidade infantil
O site não é direcionado a crianças menores de 13 anos. Não coletamos intencionalmente informações pessoais diretamente de crianças por meio do site público. Os adultos podem, no entanto, submeter informações relacionadas com crianças quando for razoavelmente necessário para um caso familiar. Se você acredita que coletamos informações diretamente de uma criança de uma forma inadequada, entre em contato conosco e iremos analisá-las.

17. Mudanças nesta política
Poderemos atualizar esta Política de Privacidade de tempos em tempos. A versão revisada entra em vigor quando publicada, a menos que uma data posterior seja indicada.

18. Contato
Fast Dispute Resolution
Suporte: support@fastdisputeresolution.com

Se você entrar em contato conosco a respeito de privacidade, inclua informações suficientes para que possamos entender e responder à sua solicitação.`,
    "refunds": `Esta é uma versão traduzida fornecida por conveniência. Em caso de qualquer discrepância, a versão em inglês prevalecerá.

FAST DISPUTE RESOLUTION
POLÍTICA DE REEMBOLSO E CANCELAMENTO

Última atualização: 19 de maio de 2026

Esta Política de Reembolso e Cancelamento explica como Fast Dispute Resolution lida com cancelamentos, créditos e reembolsos.

1. Regra Geral
A menos que exigido por lei ou expressamente declarado de outra forma em um aviso de honorários por escrito, cotação, fatura ou página de pagamento específica do caso, os honorários geralmente são ganhos à medida que os serviços são disponibilizados, reservados, iniciados ou executados.

2. Taxas não reembolsáveis ​​ou ganhas
Os itens a seguir geralmente não são reembolsáveis ​​após a cobrança ou o início do trabalho relacionado:
- taxas de abertura de caso ou admissão/configuração
- taxas de ativação administrativa
- taxas de acesso à plataforma vinculadas ao lançamento do caso
- taxas para sessões de mediação concluídas
- taxas de redação ou preparação de documentos assim que a redação começar
- taxas suplementares assim que o trabalho ou marco relacionado começar
- taxas associadas a traduções concluídas, resumos ou resultados de fluxo de trabalho gerados preparados para o caso

3. Pagamentos divididos e pagamentos específicos para partes
Quando os honorários são divididos entre as partes, cada parte é responsável pela parcela alocada a essa parte, a menos que uma notificação por escrito do caso indique o contrário. O não pagamento, atraso, recusa em participar ou desistência de uma parte não dá automaticamente direito a um reembolso à outra parte.

4. Casos que não prosseguem
Se um caso não prosseguir, qualquer reembolso ou crédito será determinado caso a caso e dependerá de quais serviços, configuração, revisão ou trabalho de caso já foram fornecidos. Podemos, mas não somos obrigados a, emitir um reembolso total, parcial, crédito de serviço ou nenhum reembolso, exceto quando exigido por lei.

5. Cancelamentos feitos por você
Você pode parar de usar os Serviços a qualquer momento. No entanto, a interrupção do uso não lhe dá automaticamente direito ao reembolso por serviços já entregues, disponibilizados, reservados ou iniciados.

6. Reagendamento e sessões ao vivo
Se sessões ao vivo forem oferecidas para um caso específico:
- os pedidos de reagendamento deverão ser feitos o mais cedo possível;
- sessões perdidas ou cancelamentos tardios poderão ser tratados como tempo utilizado ou tempo reservado não reembolsável;
- podemos definir regras de reagendamento específicas para cada caso em um aviso de agendamento ou fatura.

7. Cancelamentos ou Rescisão por Nós
Poderemos recusar, suspender ou encerrar Serviços se um assunto parecer inseguro, inadequado, ilegal, abusivo ou de outra forma inconsistente com nossas políticas. Se rescindirmos antes do início do trabalho substantivo, poderemos, a nosso critério, emitir um reembolso ou crédito total ou parcial. Se um trabalho substancial já tiver sido iniciado, poderemos reter honorários pelo trabalho executado ou disponibilizado.

8. Estornos e disputas de pagamento
Antes de contestar uma cobrança junto ao seu banco ou emissor do cartão, entre em contato conosco pelo telefone support@fastdisputeresolution.com. A apresentação de um estorno não cancela automaticamente suas obrigações sob nossos Termos. Reservamo-nos o direito de suspender o acesso ao caso enquanto um estorno estiver em análise e de contestar estornos que acreditamos serem impróprios.

9. Método de reembolso
Os reembolsos aprovados, se houver, são geralmente devolvidos ao método de pagamento original, a menos que exigido de outra forma por lei ou acordado por escrito.

10. Tempo
Os tempos de revisão do reembolso variam dependendo do caso e da forma de pagamento. Se um reembolso for aprovado, o tempo de processamento também dependerá do processador de pagamento e do seu banco.

11. Contato
Suporte: support@fastdisputeresolution.com`,
    "disclaimer": `Esta é uma versão traduzida fornecida por conveniência. Em caso de qualquer discrepância, a versão em inglês prevalecerá.

FAST DISPUTE RESOLUTION
AVISO LEGAL

Última atualização: 19 de maio de 2026

Fast Dispute Resolution fornece facilitação de resolução de disputas, serviços relacionados à mediação e ferramentas de fluxo de trabalho relacionadas. As informações neste site e através de nossos Serviços são fornecidas apenas para fins informativos gerais e de facilitação.

1. Não é aconselhamento jurídico
Nada neste site ou em nossos Serviços constitui aconselhamento jurídico e nada aqui deve ser tratado como um substituto ao aconselhamento de um advogado qualificado e licenciado na jurisdição apropriada.

2. Sem relação advogado-cliente
O uso deste site ou dos Serviços não cria uma relação advogado-cliente ou representação legal, a menos que um contrato escrito separado o indique expressamente.

3. Processo Neutro
Quando são prestados serviços de mediação, o mediador pretende agir como um facilitador neutro e não como um defensor de qualquer uma das partes.

4. Sem garantia
Não garantimos:
- que um caso será resolvido,
- que todas as partes participarão,
- que qualquer proposta será aceita,
- que qualquer acordo será aplicável em todos os lugares,
- ou que qualquer resultado será adequado às suas necessidades.

5. Conselho Independente
Você é responsável por decidir se deve consultar profissionais jurídicos, fiscais, contábeis, financeiros ou de saúde mental antes de confiar em qualquer acordo, tradução, rascunho ou resumo.

6. Não para emergências ou situações inseguras
Não confie apenas neste site ou nos Serviços para situações de emergência, inseguras ou de crise, incluindo ameaças de violência, coerção, abuso, perseguição, perigo para crianças, ordens de proteção urgentes ou prazos iminentes que exijam ação judicial.

7. Serviços Futuros
Se posteriormente oferecermos serviços adicionais, como arbitragem ou outros serviços de resolução de disputas, esses serviços serão descritos separadamente e poderão estar sujeitos a termos adicionais.

8. Contato
Suporte: support@fastdisputeresolution.com`,
    "cookies": `Esta é uma versão traduzida fornecida por conveniência. Em caso de qualquer discrepância, a versão em inglês prevalecerá.

FAST DISPUTE RESOLUTION
AVISO DE COOKIES

Última atualização: 19 de maio de 2026

Utilizamos cookies e tecnologias semelhantes para operar o nosso site, lembrar preferências, melhorar o desempenho, proteger o site e compreender como os visitantes utilizam os nossos serviços. Alguns cookies são estritamente necessários; outros podem ser usados ​​para fins analíticos ou similares.

Quando exigido por lei, solicitaremos consentimento antes de utilizar cookies não essenciais. Você também pode gerenciar cookies através das configurações do seu navegador, embora a desativação de alguns cookies possa afetar a funcionalidade do site.

Para obter mais informações sobre como usamos informações pessoais, consulte nossa Política de Privacidade.`,
  },
  "fr": {
    "terms": `Ceci est une version traduite fournie à titre de commodité. En cas de divergence, la version anglaise prévaudra.

FAST DISPUTE RESOLUTION
CONDITIONS DE SERVICE

Dernière mise à jour : 19 mai 2026

Ces conditions d'utilisation (« Conditions ») régissent votre accès et votre utilisation du site Web Fast Dispute Resolution, des pages associées, ainsi que de tous les services, fonctionnalités, contenus, prise en charge des dossiers, communications, flux de travail ou outils mis à disposition via ce site Web ou via notre plateforme connectée (« Services »). « Fast Dispute Resolution », « FDR », « nous », « notre » et « notre » désignent l'opérateur de ce site Web et de ces services. « Vous » désigne tout visiteur, utilisateur, client, partie à un litige ou toute autre personne accédant ou utilisant les Services.

En accédant ou en utilisant les Services, vous acceptez ces Conditions. Si vous n’êtes pas d’accord, n’utilisez pas les Services.

1. Nature des services
Fast Dispute Resolution fournit des services de facilitation de résolution des litiges en ligne, de prise en charge des dossiers, de gestion des flux de travail et de services liés à la médiation. Sauf indication expresse dans une description de service spécifique, une page de commande ou un avis de cas, nos services sont uniquement des services de médiation et de facilitation de résolution des litiges.

Nous ne sommes pas un cabinet d'avocats par l'intermédiaire de ce site Web, et l'utilisation des Services ne crée pas en elle-même :
(a) une relation avocat-client,
(b) représentation légale,
(c) conseils juridiques,
(d) une obligation fiduciaire allant au-delà de la loi applicable, ou
(e) une garantie de tout résultat.

Nous fournissons des processus structurés, des flux de travail guidés, une facilitation neutre et un soutien administratif associé. Nous ne promettons pas que les parties parviendront à un accord.

2. Aucun conseil juridique ; Conseils indépendants recommandés
Les informations contenues sur ce site Web et dans les Services sont uniquement destinées à des fins d’information générale et de facilitation du processus. Il ne s’agit pas de conseils juridiques, fiscaux, financiers, comptables, de santé mentale ou autres conseils professionnels.

Il vous incombe d'obtenir vos propres conseils juridiques ou professionnels indépendants, le cas échéant, y compris avant de signer un accord final ou de vous fier à tout contenu traduit ou résumé.

3. Neutralité
Lorsque des services de médiation sont fournis, le médiateur est censé agir en tant que facilitateur neutre. Sauf indication expresse dans un engagement écrit distinct, nous ne défendons pas une partie contre l’autre.

L’existence d’un médiateur, d’une plateforme, d’un flux de travail ou d’un langage proposé ne signifie pas que nous approuvons la position d’une partie ou garantissons l’équité, l’applicabilité ou l’adéquation d’un résultat à votre situation.

4. Processus volontaire ; Aucune garantie de résultat
Les résultats du règlement des différends et de la médiation sont par nature incertains. Tout règlement, proposition ou projet d'accord est volontaire, à moins que les parties n'en conviennent autrement dans un écrit valide et exécutoire.

Nous ne garantissons pas :
(a) que l'autre partie participera,
(b) que toute affaire sera réglée,
(c) que tout projet sera accepté,
(d) que tout accord sera exécutoire dans toutes les juridictions,
(e) qu'un tribunal approuvera ou adoptera un accord, ou
(f) que toute traduction, résumé ou contenu généré est sans erreur.

5. Questions inappropriées ou urgentes
Les services ne remplacent pas les services d’urgence, les secours judiciaires urgents, les forces de l’ordre ou les interventions en cas de crise. Ne comptez pas uniquement sur les Services si votre affaire implique un danger immédiat, des menaces, la coercition, le harcèlement, la maltraitance, la mise en danger d'enfants, des ordonnances de protection urgentes, des allégations criminelles, des délais de dépôt imminents ou d'autres circonstances nécessitant une intervention professionnelle immédiate.

Nous pouvons refuser, suspendre ou résilier les Services pour toute question que nous jugeons, à notre discrétion, inappropriée pour la médiation en ligne ou la facilitation basée sur une plateforme.

6. Admissibilité et autorité
Vous représentez que :
(a) vous avez au moins 18 ans,
(b) vous avez la capacité juridique de conclure des accords contraignants,
(c) toutes les informations que vous fournissez sont exactes et à jour,
(d) si vous agissez pour une entreprise ou une organisation, vous avez le pouvoir de lier cette entité, et
(e) votre utilisation des Services est conforme à la loi applicable.

7. Comptes, accès et sécurité
Vous devrez peut-être créer un compte ou accéder à un dossier via un lien, un e-mail ou le flux de travail de la plateforme. Vous êtes responsable du maintien de la confidentialité de vos informations de connexion, de l'accès à votre appareil et des liens d'accès aux dossiers, ainsi que de toute activité se produisant via votre compte ou vos identifiants d'accès.

Vous devez nous informer rapidement de tout accès non autorisé présumé ou incident de sécurité impliquant votre compte ou votre dossier.

8. Plateforme et services tiers
Tout ou partie des Services peuvent être fournis via des systèmes tiers ou connectés, notamment des outils de gestion de cas, de messagerie, d'hébergement, de paiement, de documentation ou de communication. Cela peut inclure la plateforme ArtemisChat et Stripe pour le traitement des paiements.

Les services tiers sont soumis à leurs propres conditions, disponibilités et limitations. Nous ne sommes pas responsables des pannes, interruptions, retards ou pannes causés par des fournisseurs tiers, sauf si la loi l'exige.

9. Paiements
Les frais, la structure tarifaire, les répartitions de paiement, les frais supplémentaires et le calendrier de paiement peuvent varier selon le service ou le cas et seront affichés avant que le paiement ne soit demandé ou facturé.

En effectuant un paiement, vous nous autorisez, ainsi que notre processeur de paiement, à facturer le mode de paiement que vous fournissez pour les frais autorisés, les taxes le cas échéant et tous frais supplémentaires approuvés.

Vous acceptez de ne pas initier de rétrofacturation ou de litige de paiement, sauf de bonne foi pour des raisons légitimes. Si une rétrofacturation ou un litige de paiement est déposé, nous pouvons suspendre l'accès au dossier ou aux Services pendant que l'affaire est examinée.

10. Remboursements et annulations
Les règles de remboursement et d'annulation sont régies par notre Politique de remboursement et d'annulation, qui est intégrée aux présentes Conditions par référence.

11. Communications et dossiers électroniques
Vous consentez à recevoir des communications par voie électronique, y compris par courrier électronique, notification sur la plateforme, message texte (si activé) ou notification sur le site Web. Vous acceptez que les communications électroniques, les enregistrements, les accusés de réception et les signatures puissent satisfaire aux exigences légales en matière d'écrits et de signatures dans toute la mesure permise par la loi.

12. Contenu utilisateur
Vous pouvez fournir des déclarations, des réponses, des téléchargements, des brouillons, des notes, des messages, des noms, des coordonnées, des faits sur des cas, des détails relatifs aux enfants, des détails financiers et d'autres contenus (« Contenu utilisateur »).

Vous conservez la propriété de votre contenu utilisateur, mais vous nous accordez une licence non exclusive, mondiale et libre de droits pour héberger, stocker, utiliser, traiter, reproduire, transmettre, afficher, traduire, résumer et autrement utiliser le contenu utilisateur dans la mesure raisonnablement nécessaire pour fournir, sécuriser, améliorer et administrer les services, faire respecter nos droits, respecter la loi et tenir des registres.

Vous êtes seul responsable de la légalité, de l’exactitude et de la pertinence de votre contenu utilisateur.

13. Conduite interdite
Vous ne pouvez pas :
(a) fournir des informations fausses, trompeuses ou frauduleuses ;
(b) usurper l'identité d'une autre personne ;
(c) télécharger un code malveillant ou tenter un accès non autorisé ;
(d) harceler, menacer ou maltraiter toute personne ;
(e) utiliser les Services à des fins illégales, trompeuses ou de mauvaise foi ;
(f) gratter, copier, procéder à une ingénierie inverse ou exploiter les Services sans autorisation ; ou
(g) interférer avec la sécurité, l’intégrité ou le fonctionnement normal des Services.

14. Confidentialité et vie privée
Nous prenons des mesures raisonnables pour protéger les informations confidentielles, mais nous ne pouvons garantir une confidentialité ou une sécurité absolue. Les informations sur le cas peuvent être partagées avec l'autre partie, le médiateur, nos prestataires de services et d'autres personnes si nécessaire pour fournir les services ou se conformer à la loi.

Notre politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons les informations.

15. Propriété intellectuelle
Les services, le site Web, la conception, la marque, les logos, les flux de travail, le contenu, les textes, les graphiques, le code et les documents que nous fournissons appartiennent à nous ou à nos concédants de licence et sont protégés par la loi. À l'exception de votre contenu utilisateur et de votre utilisation personnelle autorisée, vous ne pouvez pas les copier, les modifier, les distribuer, les vendre, les concéder sous licence ou les exploiter sans consentement écrit préalable.

16. Exclusion de garanties
DANS TOUTE LA MESURE AUTORISÉE PAR LA LOI, LES SERVICES SONT FOURNIS « EN L'ÉTAT » ET « SELON LA DISPONIBILITÉ », SANS GARANTIE D'AUCUNE SORTE, EXPRESSE OU IMPLICITE, Y COMPRIS LES GARANTIES DE QUALITÉ MARCHANDE, D'ADAPTATION À UN USAGE PARTICULIER, DE NON-VIOLATION, D'EXACTITUDE, DE JOUISSANCE SILENCIEUSE OU QUE LES SERVICES SERONT ININTERROMPUS, SANS ERREUR OU SÉCURISÉ.

17. Limitation de responsabilité
DANS TOUTE LA MESURE AUTORISÉE PAR LA LOI, FAST DISPUTE RESOLUTION ET SES PROPRIÉTAIRES, AFFILIÉS, ENTREPRENEURS, MÉDIATEURS, AGENTS, CONCÉDANTS DE LICENCE ET FOURNISSEURS DE SERVICES NE SERONT PAS RESPONSABLES DE TOUT DOMMAGE INDIRECT, ACCESSOIRE, CONSÉCUTIF, SPÉCIAL, EXEMPLAIRE OU PUNITIF, OU DE TOUTE PERTE DE DONNÉES, DE BÉNÉFICES, REVENUS, GOODWILL, OPPORTUNITÉ COMMERCIALE OU ACCORDS DÉCOULANT DE OU LIÉS AUX SERVICES, MÊME SI INFORMÉ DE LA POSSIBILITÉ.

DANS LA MESURE MAXIMALE PERMISE PAR LA LOI, NOTRE RESPONSABILITÉ TOTALE POUR TOUTES LES RÉCLAMATIONS DÉCOULANT DE OU LIÉES AUX SERVICES NE DÉPASSERA PAS LE PLUS ÉLEVÉ DES MONTANTS QUE VOUS NOUS AVEZ PAYÉS POUR LE SERVICE SPÉCIFIQUE DONNANT LIEU À LA RÉCLAMATION PENDANT LES 3 MOIS AVANT L'ÉVÉNEMENT DONNENT LIEU À LA RÉCLAMATION ; OU (B) US$250.

Certaines juridictions n'autorisant pas certaines limitations, certaines parties de cette section peuvent ne pas s'appliquer à vous.

18. Indemnité
Vous acceptez de défendre, d'indemniser et de tenir indemnes Fast Dispute Resolution et ses propriétaires, sociétés affiliées, sous-traitants, médiateurs, agents, concédants de licence et prestataires de services contre les réclamations, responsabilités, dommages, pertes, jugements, coûts et dépenses (y compris les honoraires raisonnables d'avocat) découlant de ou liés à :
(a) votre utilisation des Services,
(b) votre Contenu Utilisateur,
(c) votre violation de ces Conditions,
(d) votre violation de la loi, ou
(e) votre litige avec un autre utilisateur ou partie.

19. Suspension et résiliation
Nous pouvons suspendre, limiter ou mettre fin à l'accès aux Services à tout moment, avec ou sans préavis, si nous estimons que cela est nécessaire pour protéger les Services, les utilisateurs, l'intégrité de la plateforme, la conformité légale, la sécurité ou nos intérêts commerciaux.

20. Loi applicable et lieu
Sauf lorsque la loi impérative exige autrement, les présentes Conditions sont régies par les lois de l’État de Californie, sans égard aux règles de conflit de lois.

Tout litige non arbitrable découlant de ou lié à ces Conditions ou au site Web sera porté exclusivement devant les tribunaux d'État ou fédéraux situés dans le comté de Los Angeles, en Californie, et vous consentez à leur juridiction.

21. Modifications des services ou des conditions
Nous pouvons modifier ces Conditions ou les Services de temps à autre. La version mise à jour entrera en vigueur dès sa publication, à moins qu'une date ultérieure ne soit indiquée. Votre utilisation continue des Services après une mise à jour signifie que vous acceptez les Conditions révisées.

22. Contact
Fast Dispute Resolution
Prise en charge : support@fastdisputeresolution.com

Si vous n'acceptez pas ces Conditions, n'utilisez pas les Services.`,
    "privacy": `Ceci est une version traduite fournie à titre de commodité. En cas de divergence, la version anglaise prévaudra.

FAST DISPUTE RESOLUTION
POLITIQUE DE CONFIDENTIALITÉ

Dernière mise à jour : 19 mai 2026

Cette politique de confidentialité explique comment Fast Dispute Resolution (« FDR », « nous », « notre », « notre ») collecte, utilise, divulgue, stocke et protège les informations personnelles via ce site Web et nos services connectés et les flux de travail de notre plateforme.

En utilisant le site Web ou les services, vous reconnaissez cette politique de confidentialité.

1. Portée
Cette politique de confidentialité s'applique à :
(a) les visiteurs de ce site Web,
(b) les personnes qui nous contactent,
(c) les personnes qui démarrent ou participent à une affaire,
(d) parties à un litige,
(e) des clients potentiels,
(f) les personnes dont les informations sont soumises dans le cadre d’une affaire, et
(g) les utilisateurs de flux de travail associés fournis via des plates-formes connectées, notamment ArtemisChat.

2. Informations que nous collectons
Nous pouvons collecter les catégories d’informations suivantes :

A. Informations de contact et d'identité
- nom
- adresse email
- numéro de téléphone
- adresse postale
- nom de l'organisation
- identifiants de compte utilisateur

B. Informations sur les dossiers et les litiges
- type de litige
- déclarations et descriptions
- détails de la relation
- détails relatifs à la famille
- détails relatifs à l'enfant
- préférences de planification
- préférences de communication
- fichiers et messages téléchargés
- résultats demandés
- accords, brouillons et modifications

C. Informations financières et de paiement
- détails de facturation
- historique des transactions
- statut de paiement
- données de paiement partiel / paiement fractionné
- informations sur les frais supplémentaires
Les données des cartes de paiement sont traitées par Stripe et ne sont pas entièrement stockées par nous.

D. Informations techniques et d'utilisation
- Adresse IP
- informations sur le navigateur/l'appareil
- système opérateur
- emplacement approximatif déduit de l'IP
- pages consultées
- clics et interactions
- cookies et technologies similaires
- journaux, diagnostics et événements de sécurité

E. Informations d'assistance
- demandes d'assistance client
- correspondance
- émettre des rapports

F. Données relatives aux enfants
Étant donné que les conflits familiaux peuvent concerner la garde des enfants, la pension alimentaire, la scolarité, la santé ou des problèmes parentaux, les adultes utilisant les Services peuvent fournir des informations relatives aux enfants dans le cadre d'un dossier. Le site Web et les services ne sont pas destinés aux enfants et nous ne cherchons pas sciemment à collecter des informations directement auprès des enfants via des interfaces publiques.

3. Sources d'informations
Nous collectons des informations :
- directement de vous
- de l'autre partie à un litige
- des représentants autorisés
- à partir des workflows de la plateforme connectée
- des processeurs de paiement et des prestataires de services
- automatiquement à partir de votre utilisation du site Web ou des services

4. Comment nous utilisons les informations
Nous pouvons utiliser les informations pour :
- fournir et administrer les Services
- ouvrir et gérer des dossiers
- faciliter la communication et la résolution des litiges
- vérifier l'identité et l'autorité
- traiter les paiements et prévenir la fraude
- générer des brouillons, des résumés, des traductions ou des sorties de flux de travail
- fournir un support client
- améliorer, sécuriser et dépanner les Services
- faire respecter nos droits et nos politiques
- respecter les obligations légales
- tenir à jour les dossiers commerciaux et les dossiers

5. Bases juridiques (le cas échéant)
En fonction de votre emplacement et de la loi applicable, nous pouvons traiter les informations personnelles sur la base de :
- votre consentement
- exécution d'un contrat ou démarches demandées avant d'en conclure un
- nos intérêts légitimes à fournir, sécuriser et améliorer les Services
- le respect des obligations légales
- protection des intérêts vitaux lorsque la loi le permet

6. Comment nous partageons les informations
Nous pouvons divulguer des informations :
- à l'autre ou aux autres parties dans une affaire, lorsque le processus l'exige
- aux médiateurs, sous-traitants et personnel de soutien travaillant sur une affaire
- aux prestataires de services qui hébergent, sécurisent, traitent ou prennent en charge les Services
- aux processeurs de paiement tels que Stripe
- à des conseillers professionnels, des assureurs ou des auditeurs
- aux tribunaux, aux régulateurs, aux forces de l'ordre ou à d'autres lorsque la loi l'exige
- dans le cadre d'une fusion, d'une vente, d'un financement, d'une réorganisation ou d'un transfert d'actifs
- avec votre consentement ou selon vos instructions

Nous ne vendons pas d'informations personnelles contre de l'argent.

7. Stripe et paiements
Les paiements sont traités via Stripe. Stripe peut collecter, utiliser et traiter des données de paiement et de prévention de la fraude dans le cadre de ses propres politiques et accords. Nous pouvons recevoir des informations limitées relatives aux transactions de Stripe, telles que le statut du paiement, les détails partiels de la carte, le nom de facturation, le pays et les identifiants nécessaires pour gérer les paiements, prévenir la fraude et prendre en charge les litiges.

8. Cookies et technologies similaires
Nous pouvons utiliser des cookies, des pixels, un stockage local, des outils de session et des technologies similaires pour :
- fonctionnalités essentielles du site
- sécurité et prévention de la fraude
- préférences et paramètres de langue
- analyses et performances
- dépannage et diagnostic

Lorsque la loi l'exige, nous demanderons le consentement avant d'utiliser des cookies non essentiels ou des technologies similaires.

9. Conservation des données
Nous conservons les informations uniquement aussi longtemps que cela est raisonnablement nécessaire aux fins décrites dans la présente Politique, notamment pour :
- fournir des services
- effectuer des transactions
- tenir des dossiers de cas
- respecter les obligations légales, fiscales, comptables, d’assurance ou de règlement des litiges
- faire respecter les accords
- résoudre les différends
- prévenir la fraude et les abus

Les périodes de conservation peuvent varier en fonction du type de cas, de la loi applicable et des besoins opérationnels. Lorsque les informations ne sont plus nécessaires, nous les supprimerons, les anonymiserons ou les éliminerons en toute sécurité lorsque cela est possible.

10. Sécurité des données
Nous utilisons des mesures de protection administratives, techniques et organisationnelles raisonnables conçues pour protéger les informations contre tout accès, divulgation, altération ou destruction non autorisés. Cependant, aucune méthode de transmission, de stockage ou de sécurité n’est garantie comme étant totalement sécurisée, et nous ne pouvons pas promettre une sécurité absolue.

11. Virements internationaux
Notre site Web, nos fournisseurs de plateforme ou nos prestataires de services peuvent stocker ou traiter des informations aux États-Unis ou dans d'autres juridictions. En utilisant les Services, vous reconnaissez que vos informations peuvent être transférées et traitées dans des pays qui peuvent avoir des règles de protection des données différentes de celles de votre lieu de résidence.

12. Vos choix et droits
Selon la loi applicable, vous pouvez avoir les droits suivants :
- accéder à certaines informations personnelles
- demander la correction d'informations inexactes
- demander la suppression de certaines informations
- s'opposer ou restreindre certains traitements
- retirer le consentement lorsque le traitement dépend du consentement
- demander la portabilité de certaines informations
- faire appel du refus d’une demande lorsque la loi l’exige

Pour exercer une demande, contactez-nous au support@fastdisputeresolution.com. Nous devrons peut-être vérifier votre identité et votre autorité avant de traiter votre demande. Nous pouvons également refuser ou limiter les demandes lorsque la loi le permet, y compris lorsque la divulgation porterait atteinte aux droits d’une autre partie ou entrerait en conflit avec des obligations légales.

13. Droits à la vie privée en Californie et dans d’autres États américains
Si les lois sur la confidentialité de votre juridiction prévoient des droits spécifiques, nous honorerons ces droits dans la mesure applicable. Si vous résidez en Californie et que la loi californienne sur la protection de la vie privée s'applique à votre demande, vous pouvez nous contacter en utilisant les informations ci-dessous pour soumettre une demande vérifiable.

14. Ne pas suivre
Nos services peuvent ne pas répondre à tous les signaux « Ne pas suivre » basés sur le navigateur. Lorsque la loi l’exige, nous honorerons les choix de désinscription fournis par le biais de mécanismes légalement reconnus.

15. Liens et services tiers
Le site Web ou les services peuvent contenir des liens vers des sites Web, des outils ou des intégrations tiers. Nous ne sommes pas responsables de leurs pratiques de confidentialité. Passez en revue leurs politiques avant de leur fournir des informations.

16. Confidentialité des enfants
Le site Web n'est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles directement auprès des enfants via le site Web public. Les adultes peuvent toutefois soumettre des informations relatives aux enfants lorsque cela est raisonnablement nécessaire pour une affaire familiale. Si vous pensez que nous avons collecté des informations directement auprès d'un enfant d'une manière inappropriée, contactez-nous et nous les examinerons.

17. Modifications de cette politique
Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. La version révisée entre en vigueur dès sa publication, à moins qu'une date ultérieure ne soit indiquée.

18. Contact
Fast Dispute Resolution
Prise en charge : support@fastdisputeresolution.com

Si vous nous contactez concernant la confidentialité, veuillez inclure suffisamment d'informations pour que nous puissions comprendre et répondre à votre demande.`,
    "refunds": `Ceci est une version traduite fournie à titre de commodité. En cas de divergence, la version anglaise prévaudra.

FAST DISPUTE RESOLUTION
POLITIQUE DE REMBOURSEMENT ET D'ANNULATION

Dernière mise à jour : 19 mai 2026

Cette politique de remboursement et d'annulation explique comment Fast Dispute Resolution gère les annulations, les crédits et les remboursements.

1. Règle générale
Sauf disposition contraire de la loi ou indication expresse contraire dans un avis de frais écrit, un devis, une facture ou une page de paiement spécifique au cas, les frais sont généralement gagnés au fur et à mesure que les services sont rendus disponibles, réservés, initiés ou exécutés.

2. Frais non remboursables ou gagnés
Les éléments suivants ne sont généralement pas remboursables une fois facturés ou une fois les travaux connexes commencés :
- Frais d’ouverture de dossier ou d’admission/mise en place
- frais administratifs d'activation
- frais d'accès à la plateforme liés au lancement du dossier
- frais pour les séances de médiation terminées
- frais de rédaction ou de préparation de documents une fois la rédaction commencée
- frais supplémentaires une fois que les travaux ou les étapes connexes commencent
- les frais associés aux traductions terminées, aux résumés ou aux sorties de flux de travail générées préparées pour le cas

3. Paiements fractionnés et paiements spécifiques à une partie
Lorsque les honoraires sont partagés entre les parties, chaque partie est responsable de la part qui lui est attribuée, sauf indication contraire dans un avis écrit. Le non-paiement, le retard, le refus de participer ou le désistement d’une partie ne donne pas automatiquement droit à un remboursement à l’autre partie.

4. Affaires qui ne donnent pas suite
Si un dossier n'aboutit pas, tout remboursement ou crédit est déterminé au cas par cas et dépend des services, de la configuration, de la révision ou du traitement du dossier déjà fournis. Nous pouvons, sans y être obligés, émettre un remboursement complet, un remboursement partiel, un crédit de service ou aucun remboursement du tout, sauf lorsque la loi l'exige.

5. Annulations de votre part
Vous pouvez cesser d'utiliser les Services à tout moment. Toutefois, l’arrêt d’utilisation ne donne pas automatiquement droit au remboursement des prestations déjà délivrées, mises à disposition, réservées ou initiées.

6. Reprogrammation et sessions en direct
Si des sessions live sont proposées pour un cas particulier :
- les demandes de report doivent être faites le plus tôt possible ;
- les séances manquées ou les annulations tardives peuvent être traitées comme du temps utilisé ou du temps réservé non remboursable ;
- nous pouvons définir des règles de reprogrammation spécifiques à un cas dans un avis de programmation ou une facture.

7. Annulations ou résiliation de notre part
Nous pouvons refuser, suspendre ou mettre fin aux Services si une question semble dangereuse, inappropriée, illégale, abusive ou autrement incompatible avec nos politiques. Si nous résilions avant le début des travaux de fond, nous pouvons, à notre discrétion, émettre un remboursement ou un crédit total ou partiel. Si un travail de fond a déjà commencé, nous pouvons retenir des honoraires pour le travail effectué ou mis à disposition.

8. Rétrofacturations et litiges de paiement
Avant de contester un débit auprès de votre banque ou de l'émetteur de votre carte, contactez-nous au support@fastdisputeresolution.com. Le dépôt d’une rétrofacturation n’annule pas automatiquement vos obligations en vertu de nos Conditions. Nous nous réservons le droit de suspendre l'accès au dossier pendant qu'une rétrofacturation est en cours d'examen et de contester les rétrofacturations que nous jugeons inappropriées.

9. Méthode de remboursement
Les remboursements approuvés, le cas échéant, sont généralement renvoyés selon le mode de paiement d'origine, sauf disposition contraire de la loi ou accord écrit.

10. Timing
Les délais d’examen du remboursement varient en fonction du cas et du mode de paiement. Si un remboursement est approuvé, le délai de traitement dépend également du processeur de paiement et de votre banque.

11. Contact
Prise en charge : support@fastdisputeresolution.com`,
    "disclaimer": `Ceci est une version traduite fournie à titre de commodité. En cas de divergence, la version anglaise prévaudra.

FAST DISPUTE RESOLUTION
AVERTISSEMENT LÉGAL

Dernière mise à jour : 19 mai 2026

Fast Dispute Resolution fournit des services de facilitation du règlement des litiges, des services liés à la médiation et des outils de flux de travail associés. Les informations sur ce site Web et via nos services sont fournies uniquement à des fins d’information générale et de facilitation.

1. Pas de conseils juridiques
Rien sur ce site Web ou dans nos services ne constitue un conseil juridique, et rien ici ne doit être traité comme un substitut aux conseils d'un avocat qualifié agréé dans la juridiction appropriée.

2. Aucune relation avocat-client
Votre utilisation de ce site Web ou de ces services ne crée pas de relation avocat-client ni de représentation légale, à moins qu'un engagement écrit distinct ne l'indique expressément.

3. Processus neutre
Lorsque des services de médiation sont fournis, le médiateur est censé agir comme un facilitateur neutre plutôt que comme un défenseur des deux parties.

4. Aucune garantie
Nous ne garantissons pas :
- qu'une affaire sera réglée,
- que toutes les parties participeront,
- que toute proposition sera acceptée,
- que tout accord sera applicable partout,
- ou que tout résultat sera adapté à vos besoins.

5. Conseils indépendants
Il vous appartient de décider si vous devez consulter des professionnels du droit, de la fiscalité, de la comptabilité, de la finance ou de la santé mentale avant de vous fier à un accord, une traduction, un projet ou un résumé.

6. Pas pour les urgences ou les situations dangereuses
Ne comptez pas uniquement sur ce site Web ou sur les services en cas de situations d'urgence, dangereuses ou de crise, y compris les menaces de violence, de coercition, d'abus, de harcèlement criminel, de mise en danger d'enfants, d'ordonnances de protection urgentes ou de délais imminents nécessitant une action en justice.

7. Services futurs
Si nous proposons ultérieurement des services supplémentaires tels que l'arbitrage ou d'autres services de résolution des litiges, ces services seront décrits séparément et peuvent être soumis à des conditions supplémentaires.

8. Contact
Prise en charge : support@fastdisputeresolution.com`,
    "cookies": `Ceci est une version traduite fournie à titre de commodité. En cas de divergence, la version anglaise prévaudra.

FAST DISPUTE RESOLUTION
AVIS SUR LES COOKIES

Dernière mise à jour : 19 mai 2026

Nous utilisons des cookies et des technologies similaires pour exploiter notre site Web, mémoriser les préférences, améliorer les performances, sécuriser le site et comprendre comment les visiteurs utilisent nos services. Certains cookies sont strictement nécessaires ; d'autres peuvent être utilisés à des fins d'analyse ou à des fins similaires.

Lorsque la loi l'exige, nous demanderons le consentement avant d'utiliser des cookies non essentiels. Vous pouvez également gérer les cookies via les paramètres de votre navigateur, bien que la désactivation de certains cookies puisse affecter la fonctionnalité du site.

Pour plus d'informations sur la façon dont nous utilisons les informations personnelles, veuillez consulter notre Politique de confidentialité.`,
  },
  "ar": {
    "terms": `هذه نسخة مترجمة مقدمة للتيسير. في حال وجود أي تعارض، تسود النسخة الإنجليزية.

FAST DISPUTE RESOLUTION
شروط الخدمة

آخر تحديث: 19 مايو 2026

تحكم شروط الخدمة هذه ("الشروط") وصولك إلى موقع Fast Dispute Resolution واستخدامه والصفحات ذات الصلة وأي خدمات أو ميزات أو محتوى أو تلقي حالة أو اتصالات أو سير عمل أو أدوات متاحة من خلال هذا الموقع أو من خلال نظامنا الأساسي المتصل ("الخدمات"). "Fast Dispute Resolution" و"FDR" و"نحن" و"لنا" و"خاصتنا" تعني مشغل هذا الموقع والخدمات. "أنت" تعني أي زائر أو مستخدم أو عميل أو طرف في نزاع أو أي شخص آخر يصل إلى الخدمات أو يستخدمها.

من خلال الوصول إلى الخدمات أو استخدامها، فإنك توافق على هذه الشروط. إذا كنت لا توافق، فلا تستخدم الخدمات.

1. طبيعة الخدمات
يوفر Fast Dispute Resolution تسهيلات حل النزاعات عبر الإنترنت، وتناول القضايا، وإدارة سير العمل، والخدمات المتعلقة بالوساطة. ما لم يُنص على ذلك صراحةً في وصف خدمة محدد أو صفحة الطلب أو إشعار الحالة، فإن خدماتنا هي خدمات الوساطة وتسهيل حل النزاعات فقط.

نحن لسنا شركة محاماة من خلال هذا الموقع، واستخدام الخدمات لا يؤدي في حد ذاته إلى:
(a) العلاقة بين المحامي وموكله،
(b) التمثيل القانوني،
(c) المشورة القانونية،
(d) واجب ائتماني يتجاوز القانون المعمول به، أو
(e) ضمانة لأي نتيجة.

نحن نقدم عمليات منظمة، وسير عمل موجه، وتسهيل محايد، والدعم الإداري ذي الصلة. نحن لا نعد بأن الأطراف سوف تتوصل إلى اتفاق.

2. لا توجد مشورة قانونية؛ يوصى بالمشورة المستقلة
المعلومات الواردة في هذا الموقع وفي الخدمات هي لأغراض المعلومات العامة وتسهيل العملية فقط. إنها ليست نصيحة قانونية أو ضريبية أو مالية أو محاسبية أو تتعلق بالصحة العقلية أو أي نصيحة مهنية أخرى.

أنت مسؤول عن الحصول على المشورة القانونية أو المهنية المستقلة الخاصة بك حيثما كان ذلك مناسبًا، بما في ذلك قبل التوقيع على أي اتفاقية نهائية أو الاعتماد على أي محتوى مترجم أو ملخص.

3. الحياد
عندما يتم تقديم خدمات الوساطة، فإن المقصود من الوسيط هو العمل كميسر محايد. باستثناء ما هو منصوص عليه صراحة في ارتباط مكتوب منفصل، فإننا لا ندافع عن طرف ضد الآخر.

إن وجود وسيط أو منصة أو سير عمل أو لغة مقترحة لا يعني أننا نؤيد موقف أي طرف أو نضمن العدالة أو قابلية التنفيذ أو ملاءمة النتيجة لظروفك.

4. عملية طوعية؛ لا يوجد ضمان للنتيجة
إن نتائج حل النزاعات والوساطة غير مؤكدة بطبيعتها. تعتبر أي تسوية أو اقتراح أو مسودة اتفاقية طوعية ما لم يتفق الطرفان على خلاف ذلك بشكل كتابي صالح وقابل للتنفيذ.

نحن لا نضمن:
(a) أن الطرف الآخر سوف يشارك،
(b) أن أي مسألة سوف تحل،
(c) أنه سيتم قبول أي مشروع،
(d) أن أي اتفاق سيكون قابلاً للتنفيذ في كل ولاية قضائية،
(e) أن المحكمة ستوافق أو تتبنى أي اتفاق، أو
(f) أن تكون أي ترجمة أو ملخص أو محتوى تم إنشاؤه خالية من الأخطاء.

5. الأمور غير المناسبة أو الطارئة
الخدمات ليست بديلاً عن خدمات الطوارئ أو الإغاثة القضائية العاجلة أو إنفاذ القانون أو التدخل في الأزمات. لا تعتمد على الخدمات وحدها إذا كانت قضيتك تنطوي على خطر فوري، أو تهديدات، أو إكراه، أو مطاردة، أو إساءة، أو تعريض الأطفال للخطر، أو أوامر حماية عاجلة، أو ادعاءات جنائية، أو مواعيد نهائية وشيكة لتقديم الطلبات، أو ظروف أخرى تتطلب تدخلًا احترافيًا فوريًا.

يجوز لنا رفض الخدمات أو تعليقها أو إنهاؤها لأي أمر نحدده، وفقًا لتقديرنا، على أنه غير مناسب للوساطة عبر الإنترنت أو التسهيلات القائمة على النظام الأساسي.

6. الأهلية والسلطة
أنت تمثل ذلك:
(a) أن يكون عمرك 18 عامًا على الأقل،
(b) لديك الأهلية القانونية للدخول في اتفاقيات ملزمة،
(c) أي معلومات تقدمها دقيقة وحديثة،
(d) إذا كنت تتصرف لصالح شركة أو مؤسسة، فلديك السلطة لإلزام هذا الكيان، و
(e) يتوافق استخدامك للخدمات مع القانون المعمول به.

7. الحسابات والوصول والأمن
قد يُطلب منك إنشاء حساب أو الوصول إلى الحالة من خلال رابط أو بريد إلكتروني أو سير عمل النظام الأساسي. أنت مسؤول عن الحفاظ على سرية معلومات تسجيل الدخول الخاصة بك، والوصول إلى الجهاز، وروابط الوصول إلى الحالة، وعن جميع الأنشطة التي تحدث من خلال حسابك أو بيانات اعتماد الوصول.

يجب عليك إخطارنا على الفور بأي وصول غير مصرح به أو حادث أمني يتعلق بحسابك أو حالتك.

8. المنصة وخدمات الطرف الثالث
قد يتم تقديم بعض أو كل الخدمات من خلال أنظمة تابعة لجهات خارجية أو أنظمة متصلة، بما في ذلك أدوات إدارة الحالة أو المراسلة أو الاستضافة أو الدفع أو المستندات أو الاتصالات. قد يشمل ذلك منصة ArtemisChat وStripe لمعالجة الدفع.

تخضع خدمات الطرف الثالث لشروطها وتوافرها وقيودها. نحن لسنا مسؤولين عن الانقطاعات أو الانقطاعات أو التأخير أو الأعطال التي يسببها مقدمو الطرف الثالث، باستثناء ما يقتضيه القانون.

9. المدفوعات
قد تختلف الرسوم وهيكل التسعير وتقسيمات الدفع والرسوم الإضافية وتوقيت الدفع حسب الخدمة أو الحالة وسيتم عرضها قبل طلب الدفع أو تحصيله.

من خلال إجراء الدفع، فإنك تسمح لنا ولمعالج الدفع الخاص بنا بتحصيل الرسوم والضرائب المعتمدة، إن وجدت، وأي رسوم تكميلية معتمدة من طريقة الدفع التي تقدمها.

أنت توافق على عدم بدء عمليات رد المبالغ المدفوعة أو نزاعات الدفع إلا بحسن نية ولأسباب مشروعة. إذا تم تقديم نزاع بشأن رد المبالغ المدفوعة أو الدفع، فقد نقوم بتعليق الوصول إلى الحالة أو الخدمات أثناء مراجعة الأمر.

10. المبالغ المستردة والإلغاءات
تخضع قواعد الاسترداد والإلغاء لسياسة الاسترداد والإلغاء الخاصة بنا، والتي تم دمجها في هذه الشروط بالرجوع إليها.

11. الاتصالات والسجلات الإلكترونية
أنت توافق على تلقي الاتصالات إلكترونيًا، بما في ذلك عن طريق البريد الإلكتروني، أو إشعار النظام الأساسي، أو الرسائل النصية (إذا كانت ممكّنة)، أو إشعار موقع الويب. أنت توافق على أن الاتصالات الإلكترونية والسجلات والإقرارات والتوقيعات قد تلبي المتطلبات القانونية للكتابات والتوقيعات إلى أقصى حد يسمح به القانون.

12. محتوى المستخدم
يمكنك تقديم البيانات والإجابات والتحميلات والمسودات والملاحظات والرسائل والأسماء وتفاصيل الاتصال وحقائق الحالة والتفاصيل المتعلقة بالطفل والتفاصيل المالية والمحتويات الأخرى ("محتوى المستخدم").

أنت تحتفظ بملكية محتوى المستخدم الخاص بك، ولكنك تمنحنا ترخيصًا غير حصري وعالمي وخالي من حقوق الملكية لاستضافة محتوى المستخدم وتخزينه واستخدامه ومعالجته وإعادة إنتاجه ونقله وعرضه وترجمته وتلخيصه واستخدامه بطريقة أخرى حسب الضرورة المعقولة لتوفير الخدمات وتأمينها وتحسينها وإدارتها وإنفاذ حقوقنا والامتثال للقانون والاحتفاظ بالسجلات.

أنت وحدك المسؤول عن شرعية ودقة وملاءمة محتوى المستخدم الخاص بك.

13. السلوك المحظور
لا يجوز لك:
(a) تقديم معلومات كاذبة أو مضللة أو احتيالية؛
(b) انتحال شخصية شخص آخر؛
(c) تحميل تعليمات برمجية ضارة أو محاولة الوصول غير المصرح به؛
(d) مضايقة أو تهديد أو إساءة معاملة أي شخص؛
(e) استخدام الخدمات لأغراض غير قانونية أو خادعة أو سيئة النية؛
(f) استخلاص الخدمات أو نسخها أو إجراء هندسة عكسية لها أو استغلالها دون تصريح؛ أو
(g) التدخل في أمان الخدمات أو سلامتها أو تشغيلها العادي.

14. السرية والخصوصية
نحن نتخذ تدابير معقولة لحماية المعلومات السرية، ولكن لا يمكننا ضمان السرية أو الأمن المطلق. يجوز مشاركة معلومات الحالة مع الطرف الآخر والوسيط ومقدمي الخدمات لدينا وغيرهم حسب الضرورة لتقديم الخدمات أو الامتثال للقانون.

توضح سياسة الخصوصية الخاصة بنا كيف نقوم بجمع المعلومات واستخدامها والكشف عنها وحمايتها.

15. الملكية الفكرية
الخدمات والموقع الإلكتروني والتصميم والعلامات التجارية والشعارات وسير العمل والمحتوى والنص والرسومات والتعليمات البرمجية والمواد المقدمة من جانبنا مملوكة لنا أو للمرخصين لنا، وهي محمية بموجب القانون. باستثناء محتوى المستخدم الخاص بك والاستخدام الشخصي المسموح به، لا يجوز لك نسخها أو تعديلها أو توزيعها أو بيعها أو ترخيصها أو استغلالها دون موافقة كتابية مسبقة.

16. إخلاء المسؤولية عن الضمانات
إلى الحد الأقصى الذي يسمح به القانون، يتم تقديم الخدمات "كما هي" و"كما هي متاحة"، دون ضمانات من أي نوع، صريحة أو ضمنية، بما في ذلك ضمانات القابلية للتسويق، والملاءمة لغرض معين، وعدم الانتهاك، والدقة، الاستمتاع الهادئ، أو أن الخدمات ستكون دون انقطاع، أو خالية من الأخطاء، أو آمنة.

17. حدود المسؤولية
إلى الحد الأقصى الذي يسمح به القانون، لن تكون FAST DISPUTE RESOLUTION ومالكيها والشركات التابعة لها والمقاولين والوسطاء والوكلاء والمرخصين ومقدمي الخدمات مسؤولين عن أي أمر غير مباشر أو عرضي أو تبعي أو خاص أو نموذجي أو الأضرار التأديبية، أو عن أي خسارة للبيانات أو الأرباح أو الإيرادات أو الشهرة أو فرص العمل أو الاتفاقيات، الناشئة عن الخدمات أو المتعلقة بها، حتى لو تم الإبلاغ عن هذا الاحتمال.

إلى الحد الأقصى الذي يسمح به القانون، لن تتجاوز مسؤوليتنا الإجمالية عن جميع المطالبات الناشئة عن الخدمات أو المتعلقة بها أكبر ما يلي: (أ) المبالغ التي دفعتها لنا مقابل الخدمة المحددة التي أدت إلى المطالبة خلال الأشهر الثلاثة السابقة للحدث التسبب في المطالبة؛ أو (ب) US$250.

لا تسمح بعض السلطات القضائية بقيود معينة، لذا قد لا تنطبق عليك أجزاء من هذا القسم.

18. التعويض
أنت توافق على الدفاع عن Fast Dispute Resolution وتعويضها وحمايتها ومالكيها والشركات التابعة لها والمقاولين والوسطاء والوكلاء والمرخصين ومقدمي الخدمات من وضد المطالبات والالتزامات والأضرار والخسائر والأحكام والتكاليف والنفقات (بما في ذلك أتعاب المحاماة المعقولة) الناشئة عن أو المتعلقة بما يلي:
(a) استخدامك للخدمات،
(b) محتوى المستخدم الخاص بك،
(c) انتهاكك لهذه الشروط،
(d) انتهاكك للقانون، أو
(e) نزاعك مع مستخدم أو طرف آخر.

19. التعليق والإنهاء
يجوز لنا تعليق الوصول إلى الخدمات أو تقييده أو إنهائه في أي وقت، بإشعار أو بدون إشعار، إذا كنا نعتقد أن ذلك ضروري لحماية الخدمات أو المستخدمين أو سلامة النظام الأساسي أو الامتثال القانوني أو السلامة أو مصالحنا التجارية.

20. القانون الحاكم والمكان
باستثناء الحالات التي يتطلب فيها القانون الإلزامي خلاف ذلك، تخضع هذه الشروط لقوانين ولاية كاليفورنيا، بغض النظر عن قواعد تنازع القوانين.

يتم تقديم أي نزاع غير قابل للتحكيم ينشأ عن أو يتعلق بهذه الشروط أو موقع الويب حصريًا إلى محاكم الولاية أو المحاكم الفيدرالية الموجودة في مقاطعة لوس أنجلوس، كاليفورنيا، وأنت توافق على اختصاصها القضائي.

21. التغييرات على الخدمات أو الشروط
يجوز لنا تعديل هذه الشروط أو الخدمات من وقت لآخر. سيكون الإصدار المحدث ساري المفعول عند نشره، ما لم يتم ذكر تاريخ لاحق. إن استمرارك في استخدام الخدمات بعد التحديث يعني قبولك للشروط المعدلة.

22. اتصال
Fast Dispute Resolution
الدعم: support@fastdisputeresolution.com

إذا كنت لا توافق على هذه الشروط، فلا تستخدم الخدمات.`,
    "privacy": `هذه نسخة مترجمة مقدمة للتيسير. في حال وجود أي تعارض، تسود النسخة الإنجليزية.

FAST DISPUTE RESOLUTION
سياسة الخصوصية

آخر تحديث: 19 مايو 2026

تشرح سياسة الخصوصية هذه كيف تقوم Fast Dispute Resolution ("FDR،" "نحن"، "نا"، "خاصتنا") بجمع المعلومات الشخصية واستخدامها والكشف عنها وتخزينها وحمايتها من خلال هذا الموقع وخدماتنا المتصلة وسير عمل النظام الأساسي.

باستخدام الموقع أو الخدمات، فإنك تقر بسياسة الخصوصية هذه.

1. نِطَاق
تنطبق سياسة الخصوصية هذه على:
(a) زوار هذا الموقع،
(b) الأشخاص الذين يتصلون بنا،
(c) الأشخاص الذين يبدأون قضية ما أو يشاركون فيها،
(d) أطراف النزاع،
(e) العملاء المحتملين،
(f) الأشخاص الذين يتم تقديم معلوماتهم فيما يتعلق بالقضية، و
(g) مستخدمي سير العمل ذات الصلة التي يتم تسليمها من خلال الأنظمة الأساسية المتصلة، بما في ذلك ArtemisChat.

2. المعلومات التي نجمعها
قد نقوم بجمع الفئات التالية من المعلومات:

A. معلومات الاتصال والهوية
- اسم
- عنوان البريد الإلكتروني
- رقم التليفون
- العنوان البريدي
- اسم المنظمة
- معرفات حساب المستخدم

B. معلومات القضية والنزاع
- نوع النزاع
- البيانات والأوصاف
- تفاصيل العلاقة
- التفاصيل المتعلقة بالعائلة
- التفاصيل المتعلقة بالطفل
- تفضيلات الجدولة
- تفضيلات الاتصال
- الملفات والرسائل المرفوعة
- النتائج المطلوبة
- الاتفاقيات والمسودات والتعديلات

C. المعلومات المالية ومعلومات الدفع
- تفاصيل الفواتير
- تاريخ المعاملة
- حالة الدفع
- بيانات الدفع الجزئي / الدفع المجزأ
- معلومات الرسوم التكميلية
تتم معالجة بيانات بطاقة الدفع بواسطة Stripe ولا يتم تخزينها بالكامل بواسطتنا.

D. المعلومات التقنية والاستخدام
- عنوان IP
- معلومات المتصفح/الجهاز
- نظام التشغيل
- الموقع التقريبي المستنتج من IP
- الصفحات التي تم مشاهدتها
- النقرات والتفاعلات
- ملفات تعريف الارتباط والتقنيات المماثلة
- السجلات والتشخيصات والأحداث الأمنية

E. معلومات الدعم
- استفسارات دعم العملاء
- مراسلة
- إصدار التقارير

F. البيانات المتعلقة بالطفل
نظرًا لأن النزاعات العائلية قد تنطوي على قضايا تتعلق بحضانة الأطفال أو دعمهم أو تعليمهم أو صحتهم أو الأبوة والأمومة، فقد يقدم البالغون الذين يستخدمون الخدمات معلومات تتعلق بالأطفال كجزء من القضية. الموقع والخدمات غير موجهة للأطفال، ونحن لا نسعى عمدًا إلى جمع المعلومات مباشرة من الأطفال من خلال الواجهات العامة.

3. مصادر المعلومات
نقوم بجمع المعلومات:
- مباشرة منك
- من الطرف الآخر إلى النزاع
- من الممثلين المعتمدين
- من سير عمل النظام الأساسي المتصل
- من معالجات الدفع ومقدمي الخدمات
- تلقائيًا من استخدامك للموقع أو الخدمات

4. كيف نستخدم المعلومات
قد نستخدم المعلومات من أجل:
- تقديم وإدارة الخدمات
- فتح وإدارة الحالات
- تسهيل التواصل وحل النزاعات
- التحقق من الهوية والسلطة
- معالجة المدفوعات ومنع الاحتيال
- إنشاء مسودات أو ملخصات أو ترجمات أو مخرجات سير العمل
- تقديم دعم العملاء
- تحسين الخدمات وتأمينها واستكشاف الأخطاء وإصلاحها
- فرض حقوقنا وسياساتنا
- الامتثال للالتزامات القانونية
- الاحتفاظ بسجلات الأعمال والقضايا

5. الأسس القانونية (حيثما ينطبق ذلك)
اعتمادًا على موقعك والقانون المعمول به، قد نقوم بمعالجة المعلومات الشخصية بناءً على:
- موافقتك
- تنفيذ العقد أو الخطوات المطلوبة قبل الدخول فيه
- مصالحنا المشروعة في توفير الخدمات وتأمينها وتحسينها
- الامتثال للالتزامات القانونية
- حماية المصالح الحيوية حيثما يسمح القانون بذلك

6. كيف نشارك المعلومات
قد نكشف عن المعلومات:
- إلى الطرف أو الأطراف الأخرى في القضية، حيثما يكون ذلك مطلوبًا لهذه العملية
- للوسطاء والمقاولين وموظفي الدعم العاملين في القضية
- لمقدمي الخدمات الذين يستضيفون الخدمات أو يؤمنونها أو يعالجونها أو يدعمونها
- لمعالجات الدفع مثل Stripe
- للمستشارين المحترفين أو شركات التأمين أو المدققين
- إلى المحاكم أو الجهات التنظيمية أو جهات إنفاذ القانون أو غيرها حيثما يقتضي القانون ذلك
- فيما يتعلق بدمج الأصول أو بيعها أو تمويلها أو إعادة تنظيمها أو نقلها
- بموافقتك أو بتوجيه منك

نحن لا نبيع المعلومات الشخصية مقابل المال.

7. Stripe والمدفوعات
تتم معالجة المدفوعات من خلال Stripe. يجوز لشركة Stripe جمع واستخدام ومعالجة بيانات الدفع ومنع الاحتيال بموجب سياساتها واتفاقياتها الخاصة. قد نتلقى معلومات محدودة متعلقة بالمعاملة من Stripe، مثل حالة الدفع وتفاصيل البطاقة الجزئية واسم الفواتير والبلد والمعرفات اللازمة لإدارة المدفوعات ومنع الاحتيال ودعم النزاعات.

8. ملفات تعريف الارتباط والتقنيات المشابهة
قد نستخدم ملفات تعريف الارتباط ووحدات البكسل والتخزين المحلي وأدوات الجلسة والتقنيات المشابهة من أجل:
- وظائف الموقع الأساسية
- الأمن ومنع الاحتيال
- التفضيلات وإعدادات اللغة
- التحليلات والأداء
- استكشاف الأخطاء وإصلاحها والتشخيص

حيثما يقتضي القانون، سنطلب الموافقة قبل استخدام ملفات تعريف الارتباط غير الضرورية أو التقنيات المشابهة.

9. الاحتفاظ بالبيانات
نحن نحتفظ بالمعلومات فقط طالما كانت ضرورية بشكل معقول للأغراض الموضحة في هذه السياسة، بما في ذلك:
- تقديم الخدمات
- المعاملات الكاملة
- الاحتفاظ بسجلات القضية
- الامتثال للالتزامات القانونية أو الضريبية أو المحاسبية أو التأمينية أو تسوية المنازعات
- إنفاذ الاتفاقيات
- حل النزاعات
- منع الاحتيال وسوء الاستخدام

قد تختلف فترات الاستبقاء وفقًا لنوع الحالة والقانون المعمول به والاحتياجات التشغيلية. عندما لا تكون هناك حاجة إلى المعلومات، سنقوم بحذفها أو إخفاء هويتها أو التخلص منها بشكل آمن حيثما أمكن ذلك.

10. أمن البيانات
نحن نستخدم ضمانات إدارية وفنية وتنظيمية معقولة مصممة لحماية المعلومات من الوصول غير المصرح به أو الكشف عنها أو تغييرها أو إتلافها. ومع ذلك، لا توجد طريقة مضمونة لتكون آمنة تمامًا للنقل أو التخزين أو الأمان، ولا يمكننا أن نعد بالأمان المطلق.

11. التحويلات الدولية
قد يقوم موقعنا الإلكتروني أو مقدمو المنصات أو مقدمو الخدمات بتخزين المعلومات أو معالجتها في الولايات المتحدة أو الولايات القضائية الأخرى. باستخدام الخدمات، فإنك تقر بأنه يجوز نقل معلوماتك ومعالجتها في بلدان قد يكون لديها قواعد مختلفة لحماية البيانات عن مكان إقامتك.

12. اختياراتك وحقوقك
وفقًا للقانون المعمول به، قد يكون لديك الحقوق في:
- الوصول إلى بعض المعلومات الشخصية
- طلب تصحيح المعلومات غير الدقيقة
- طلب حذف بعض المعلومات
- الاعتراض على معالجة معينة أو تقييدها
- سحب الموافقة حيث تعتمد المعالجة على الموافقة
- طلب إمكانية نقل بعض المعلومات
- استئناف رفض الطلب حيثما يقتضي القانون ذلك

لممارسة الطلب، اتصل بنا على support@fastdisputeresolution.com. قد نحتاج إلى التحقق من هويتك وسلطتك قبل معالجة طلبك. يجوز لنا أيضًا رفض الطلبات أو تقييدها حيثما يسمح القانون بذلك، بما في ذلك الحالات التي قد يؤثر فيها الكشف سلبًا على حقوق طرف آخر أو يتعارض مع الالتزامات القانونية.

13. كاليفورنيا وحقوق الخصوصية الأخرى في الولايات المتحدة
إذا كانت قوانين الخصوصية في نطاق سلطتك القضائية توفر حقوقًا محددة، فسنحترم هذه الحقوق إلى الحد الذي ينطبق عليه ذلك. إذا كنت مقيمًا في كاليفورنيا وكان قانون الخصوصية المعمول به في كاليفورنيا ينطبق على طلبك، فيمكنك الاتصال بنا باستخدام المعلومات الواردة أدناه لإرسال طلب يمكن التحقق منه.

14. لا تتبع
قد لا تستجيب خدماتنا لجميع إشارات "عدم التتبع" المستندة إلى المتصفح. حيثما يقتضي القانون، سنحترم خيارات إلغاء الاشتراك المقدمة من خلال الآليات المعترف بها قانونًا.

15. روابط وخدمات الطرف الثالث
قد يحتوي موقع الويب أو الخدمات على روابط لمواقع ويب أو أدوات أو عمليات تكامل تابعة لجهات خارجية. نحن لسنا مسؤولين عن ممارسات الخصوصية الخاصة بهم. قم بمراجعة سياساتهم قبل تقديم المعلومات لهم.

16. خصوصية الأطفال
الموقع غير موجه للأطفال دون سن 13 عامًا. نحن لا نجمع معلومات شخصية عن قصد مباشرة من الأطفال من خلال الموقع العام. ومع ذلك، يجوز للبالغين تقديم معلومات تتعلق بالطفل عندما تكون ضرورية بشكل معقول لقضية عائلية. إذا كنت تعتقد أننا قمنا بجمع معلومات مباشرة من طفل بطريقة غير مناسبة، فاتصل بنا وسنقوم بمراجعتها.

17. التغييرات على هذه السياسة
قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. وتصبح النسخة المنقحة سارية المفعول عند نشرها، ما لم يتم ذكر تاريخ لاحق.

18. اتصال
Fast Dispute Resolution
الدعم: support@fastdisputeresolution.com

إذا اتصلت بنا بخصوص الخصوصية، فيرجى تضمين معلومات كافية حتى نتمكن من فهم طلبك والرد عليه.`,
    "refunds": `هذه نسخة مترجمة مقدمة للتيسير. في حال وجود أي تعارض، تسود النسخة الإنجليزية.

FAST DISPUTE RESOLUTION
سياسة الاسترداد والإلغاء

آخر تحديث: 19 مايو 2026

توضح سياسة الاسترداد والإلغاء هذه كيفية تعامل Fast Dispute Resolution مع عمليات الإلغاء والائتمانات والمبالغ المستردة.

1. القاعدة العامة
ما لم يكن ذلك مطلوبًا بموجب القانون أو ينص صراحةً على خلاف ذلك في إشعار مكتوب بالرسوم أو عرض أسعار أو فاتورة أو صفحة دفع خاصة بحالة معينة، يتم تحصيل الرسوم بشكل عام عند توفير الخدمات أو حجزها أو بدئها أو تنفيذها.

2. الرسوم غير القابلة للاسترداد أو المكتسبة
فيما يلي بشكل عام غير قابل للاسترداد بمجرد تحصيله أو بمجرد بدء العمل ذي الصلة:
- رسوم فتح القضية أو رسوم القبول/الإعداد
- رسوم التنشيط الإداري
- رسوم الوصول إلى المنصة مرتبطة بإطلاق الحالة
- رسوم جلسات الوساطة المكتملة
- رسوم الصياغة أو إعداد المستندات بمجرد بدء الصياغة
- رسوم إضافية بمجرد بدء العمل أو الإنجاز ذي الصلة
- الرسوم المرتبطة بالترجمات المكتملة أو الملخصات أو مخرجات سير العمل التي تم إنشاؤها المعدة للحالة

3. تقسيم المدفوعات والمدفوعات الخاصة بالطرف
عندما يتم تقسيم الرسوم بين الأطراف، يكون كل طرف مسؤولاً عن الجزء المخصص لذلك الطرف ما لم ينص إشعار مكتوب على خلاف ذلك. إن عدم الدفع أو التأخير أو رفض المشاركة أو الانسحاب من جانب أحد الأطراف لا يمنح الطرف الآخر حق استرداد الأموال تلقائيًا.

4. الحالات التي لا تستمر
إذا لم تتم متابعة الحالة، فسيتم تحديد أي استرداد أو رصيد على أساس كل حالة على حدة ويعتمد على الخدمات أو الإعداد أو المراجعة أو عمل الحالة التي تم تقديمها بالفعل. يجوز لنا، ولكن ليس مطلوبًا منا، إصدار استرداد كامل المبلغ أو استرداد جزئي أو رصيد خدمة أو عدم استرداد أي مبلغ على الإطلاق، باستثناء ما يقتضيه القانون.

5. الإلغاءات بواسطتك
يجوز لك التوقف عن استخدام الخدمات في أي وقت. ومع ذلك، فإن إيقاف الاستخدام لا يؤهلك تلقائيًا لاسترداد الأموال مقابل الخدمات التي تم تقديمها بالفعل، أو إتاحتها، أو حجزها، أو البدء بها.

6. إعادة الجدولة والجلسات المباشرة
إذا تم تقديم جلسات حية لحالة معينة:
- وينبغي تقديم طلبات إعادة الجدولة في أقرب وقت ممكن؛
- قد يتم التعامل مع الجلسات الفائتة أو الإلغاءات المتأخرة على أنها وقت مستخدم أو وقت محجوز غير قابل للاسترداد؛
- يجوز لنا وضع قواعد إعادة جدولة خاصة بحالة معينة في إشعار الجدولة أو الفاتورة.

7. الإلغاءات أو الإنهاء من قبلنا
يجوز لنا رفض الخدمات أو تعليقها أو إنهاؤها إذا بدا الأمر غير آمن أو غير مناسب أو غير قانوني أو مسيئ أو غير متوافق مع سياساتنا. إذا أنهينا العمل قبل بدء العمل الجوهري، فيجوز لنا، وفقًا لتقديرنا، إصدار استرداد أو ائتمان كامل أو جزئي. إذا كان العمل الجوهري قد بدأ بالفعل، فقد نحتفظ برسوم العمل المنجز أو المتاح.

8. رد المبالغ المدفوعة ونزاعات الدفع
قبل الاعتراض على الرسوم مع البنك الذي تتعامل معه أو جهة إصدار البطاقة، اتصل بنا على support@fastdisputeresolution.com. لا يؤدي تقديم طلب رد المبالغ المدفوعة إلى إلغاء التزاماتك تلقائيًا بموجب شروطنا. نحن نحتفظ بالحق في تعليق الوصول إلى الحالة بينما تكون عملية رد المبالغ المدفوعة قيد المراجعة والاعتراض على عمليات رد المبالغ المدفوعة التي نعتقد أنها غير مناسبة.

9. طريقة استرداد الأموال
يتم إرجاع المبالغ المستردة المعتمدة، إن وجدت، بشكل عام إلى طريقة الدفع الأصلية ما لم ينص القانون على خلاف ذلك أو يتم الاتفاق عليه كتابيًا.

10. توقيت
تختلف أوقات مراجعة استرداد الأموال حسب الحالة وطريقة الدفع. إذا تمت الموافقة على استرداد الأموال، فإن وقت المعالجة يعتمد أيضًا على معالج الدفع والبنك الذي تتعامل معه.

11. اتصال
الدعم: support@fastdisputeresolution.com`,
    "disclaimer": `هذه نسخة مترجمة مقدمة للتيسير. في حال وجود أي تعارض، تسود النسخة الإنجليزية.

FAST DISPUTE RESOLUTION
إخلاء المسؤولية القانونية

آخر تحديث: 19 مايو 2026

يوفر Fast Dispute Resolution تسهيلات حل النزاعات والخدمات المتعلقة بالوساطة وأدوات سير العمل ذات الصلة. يتم توفير المعلومات الموجودة على هذا الموقع ومن خلال خدماتنا لأغراض المعلومات والتسهيلات العامة فقط.

1. ليست نصيحة قانونية
لا يوجد في هذا الموقع أو في خدماتنا ما يمثل نصيحة قانونية، ولا ينبغي التعامل مع أي شيء هنا كبديل للمشورة المقدمة من محامٍ مؤهل مرخص في الولاية القضائية المناسبة.

2. لا توجد علاقة بين المحامي وموكله
لا يؤدي استخدامك لهذا الموقع أو الخدمات إلى إنشاء علاقة بين المحامي وموكله أو تمثيل قانوني ما لم ينص تعهد كتابي منفصل على ذلك صراحةً.

3. عملية محايدة
عندما يتم تقديم خدمات الوساطة، فإن المقصود من الوسيط هو العمل كميسر محايد وليس كمدافع عن أي من الجانبين.

4. لا يوجد ضمان
نحن لا نضمن:
- أن القضية ستحسم
- وأن جميع الأطراف ستشارك
- أن أي اقتراح سيتم قبوله،
- أن أي اتفاق سيكون قابلاً للتنفيذ في كل مكان،
- أو أن أي نتيجة ستكون مناسبة لاحتياجاتك.

5. نصيحة مستقلة
أنت مسؤول عن اتخاذ القرار بشأن استشارة المتخصصين في الشؤون القانونية أو الضريبية أو المحاسبية أو المالية أو في مجال الصحة العقلية قبل الاعتماد على أي اتفاقية أو ترجمة أو مسودة أو ملخص.

6. ليس لحالات الطوارئ أو المواقف غير الآمنة
لا تعتمد على هذا الموقع أو الخدمات وحدها في حالات الطوارئ أو غير الآمنة أو الأزمات، بما في ذلك التهديد بالعنف أو الإكراه أو سوء المعاملة أو المطاردة أو تعريض الأطفال للخطر أو أوامر الحماية العاجلة أو المواعيد النهائية الوشيكة التي تتطلب اتخاذ إجراء من المحكمة.

7. الخدمات المستقبلية
إذا قدمنا ​​لاحقًا خدمات إضافية مثل التحكيم أو خدمات حل النزاعات الأخرى، فسيتم وصف هذه الخدمات بشكل منفصل وقد تخضع لشروط إضافية.

8. اتصال
الدعم: support@fastdisputeresolution.com`,
    "cookies": `هذه نسخة مترجمة مقدمة للتيسير. في حال وجود أي تعارض، تسود النسخة الإنجليزية.

FAST DISPUTE RESOLUTION
إشعار ملفات تعريف الارتباط

آخر تحديث: 19 مايو 2026

نحن نستخدم ملفات تعريف الارتباط والتقنيات المشابهة لتشغيل موقعنا الإلكتروني وتذكر التفضيلات وتحسين الأداء وتأمين الموقع وفهم كيفية استخدام الزوار لخدماتنا. بعض ملفات تعريف الارتباط ضرورية للغاية؛ ويمكن استخدام الآخرين للتحليلات أو لأغراض مماثلة.

حيثما يقتضي القانون، سنطلب الموافقة قبل استخدام ملفات تعريف الارتباط غير الضرورية. يمكنك أيضًا إدارة ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك، على الرغم من أن تعطيل بعض ملفات تعريف الارتباط قد يؤثر على وظائف الموقع.

لمزيد من المعلومات حول كيفية استخدامنا للمعلومات الشخصية، يرجى الاطلاع على سياسة الخصوصية الخاصة بنا.`,
  },
  "fa": {
    "terms": `این نسخه ترجمه‌شده برای سهولت ارائه شده است. در صورت وجود هرگونه مغایرت، نسخه انگلیسی ملاک خواهد بود.

FAST DISPUTE RESOLUTION
شرایط خدمات

آخرین به روز رسانی: 19 مه 2026

این شرایط خدمات («شرایط») بر دسترسی و استفاده شما از وب‌سایت Fast Dispute Resolution، صفحات مرتبط، و هر گونه خدمات، ویژگی‌ها، محتوا، موارد ورودی، ارتباطات، گردش کار یا ابزارهایی که از طریق این وب‌سایت یا از طریق پلتفرم متصل ما («سرویس‌ها») در دسترس است، کنترل می‌کند. «Fast Dispute Resolution»، «FDR»، «ما»، «ما» و «ما» به معنای اپراتور این وب سایت و خدمات است. "شما" به معنای هر بازدید کننده، کاربر، مشتری، طرف اختلاف یا شخص دیگری است که به خدمات دسترسی یا استفاده می کند.

با دسترسی یا استفاده از خدمات، با این شرایط موافقت می کنید. اگر موافق نیستید، از خدمات استفاده نکنید.

1. ماهیت خدمات
Fast Dispute Resolution تسهیلات حل اختلاف آنلاین، پذیرش پرونده، مدیریت گردش کار و خدمات مرتبط با میانجیگری را ارائه می دهد. مگر اینکه به صراحت در توضیح خدمات خاص، صفحه سفارش یا اخطار موردی ذکر شده باشد، خدمات ما فقط خدمات میانجیگری و تسهیل حل اختلاف هستند.

ما یک شرکت حقوقی از طریق این وب سایت نیستیم و استفاده از خدمات به خودی خود باعث ایجاد موارد زیر نمی شود:
(a) رابطه وکیل و موکل،
(b) نمایندگی قانونی،
(c) مشاوره حقوقی،
(d) وظیفه امانتداری فراتر از قانون قابل اجرا، یا
(e) تضمین هر نتیجه ای

ما فرآیندهای ساختاریافته، گردش کار هدایت شده، تسهیلات بی طرف، و پشتیبانی اداری مرتبط را ارائه می دهیم. ما قول نمی دهیم که طرفین به توافق برسند.

2. بدون مشاوره حقوقی؛ مشاوره مستقل توصیه می شود
اطلاعات موجود در این وب سایت و در خدمات فقط برای اهداف اطلاعاتی عمومی و تسهیل فرآیند است. این مشاوره قانونی، مالیاتی، مالی، حسابداری، بهداشت روانی یا سایر مشاوره های حرفه ای نیست.

شما مسئول دریافت مشاوره حقوقی یا حرفه ای مستقل خود در صورت لزوم، از جمله قبل از امضای هر قرارداد نهایی یا تکیه بر محتوای ترجمه شده یا خلاصه شده هستید.

3. بی طرفی
در مواردی که خدمات میانجیگری ارائه می شود، در نظر گرفته شده است که میانجی به عنوان یک تسهیل کننده بی طرف عمل کند. به جز مواردی که به صراحت در یک تعهد کتبی جداگانه ذکر شده است، ما از یک طرف علیه طرف دیگر دفاع نمی کنیم.

وجود میانجی، پلتفرم، گردش کار، یا زبان پیشنهادی به این معنا نیست که ما موضع هیچ یک از طرفین را تأیید می‌کنیم یا عادلانه، قابل اجرا یا مناسب بودن نتیجه را برای شرایط شما تضمین می‌کنیم.

4. فرآیند داوطلبانه؛ بدون تضمین نتیجه
نتایج حل اختلاف و میانجیگری ذاتا نامشخص است. هرگونه تسویه حساب، پیشنهاد یا پیش نویس توافق داوطلبانه است، مگر اینکه و تا زمانی که طرفین در یک نوشته معتبر و لازم الاجرا توافق کنند.

ما تضمین نمی کنیم:
(a) که طرف مقابل شرکت خواهد کرد،
(b) که هر موضوعی حل شود،
(c) که هر پیش نویسی پذیرفته خواهد شد،
(d) که هر توافقی در هر حوزه قضایی قابل اجرا خواهد بود،
(e) که دادگاه هر توافقی را تایید یا اتخاذ کند، یا
(f) هر گونه ترجمه، خلاصه یا محتوای تولید شده بدون خطا است.

5. موارد نامناسب یا اضطراری
خدمات جایگزین خدمات اضطراری، امداد فوری دادگاه، اجرای قانون، یا مداخله در بحران نیستند. اگر موضوع شما مستلزم خطر فوری، تهدید، اجبار، تعقیب، سوء استفاده، به خطر انداختن کودکان، دستورات حفاظتی فوری، اتهامات جنایی، مهلت‌های ارسال قریب‌الوقوع یا سایر شرایطی است که نیاز به مداخله فوری حرفه‌ای دارد، به تنهایی به خدمات اعتماد نکنید.

ما ممکن است خدمات را برای هر موضوعی که بنا به صلاحدید خود تشخیص دهیم برای میانجیگری آنلاین یا تسهیلات مبتنی بر پلت فرم نامناسب است، رد، تعلیق یا خاتمه دهیم.

6. صلاحیت و اختیار
شما نشان می دهید که:
(a) شما حداقل 18 سال سن دارید،
(b) شما دارای ظرفیت قانونی برای انعقاد قراردادهای الزام آور هستید،
(c) هر اطلاعاتی که ارائه می دهید دقیق و جاری است،
(d) اگر برای یک کسب و کار یا سازمان اقدام می کنید، اختیار دارید که آن نهاد را ملزم کنید، و
(e) استفاده شما از خدمات با قوانین قابل اجرا مطابقت دارد.

7. حساب ها، دسترسی و امنیت
ممکن است از شما خواسته شود که یک حساب کاربری ایجاد کنید یا از طریق یک پیوند، ایمیل یا گردش کار پلتفرم به پرونده دسترسی داشته باشید. شما مسئول حفظ محرمانه بودن اطلاعات ورود به سیستم، دسترسی به دستگاه و پیوندهای دسترسی به پرونده و کلیه فعالیت‌هایی هستید که از طریق حساب یا اعتبار دسترسی شما انجام می‌شود.

شما باید فوراً ما را از هرگونه دسترسی غیرمجاز یا حادثه امنیتی مشکوک مربوط به حساب یا پرونده خود مطلع کنید.

8. پلتفرم و خدمات شخص ثالث
برخی یا همه سرویس‌ها ممکن است از طریق سیستم‌های شخص ثالث یا متصل، از جمله مدیریت پرونده، پیام‌رسانی، میزبانی، پرداخت، اسناد یا ابزارهای ارتباطی ارائه شوند. این ممکن است شامل پلت فرم ArtemisChat و Stripe برای پردازش پرداخت باشد.

خدمات شخص ثالث تابع شرایط، در دسترس بودن و محدودیت های خود است. ما مسئولیتی در قبال قطع‌ها، وقفه‌ها، تأخیرها یا خرابی‌های ناشی از ارائه‌دهندگان شخص ثالث نداریم، مگر در مواردی که قانون لازم باشد.

9. پرداخت ها
کارمزدها، ساختار قیمت‌گذاری، تقسیم‌بندی پرداخت، هزینه‌های تکمیلی، و زمان پرداخت ممکن است بسته به سرویس یا مورد متفاوت باشد و قبل از درخواست یا هزینه پرداخت نشان داده می‌شود.

با پرداخت، به ما و پردازشگر پرداخت ما اجازه می‌دهید تا از روش پرداختی که ارائه می‌کنید، هزینه‌های مجاز، مالیات‌ها، در صورت وجود، و هرگونه هزینه اضافی تأیید شده را کسر کنیم.

شما موافقت می کنید که بازپرداخت هزینه یا اختلافات پرداخت را به جز با حسن نیت به دلایل قانونی شروع نکنید. اگر اعتراض به استرداد وجه یا پرداخت مطرح شود، ممکن است دسترسی به پرونده یا خدمات را تا زمانی که موضوع بررسی می‌شود، به حالت تعلیق درآوریم.

10. بازپرداخت و لغو
قوانین بازپرداخت و لغو توسط خط‌مشی بازپرداخت و لغو ما کنترل می‌شوند که با مرجع در این شرایط گنجانده شده است.

11. ارتباطات و سوابق الکترونیکی
شما موافقت می کنید که ارتباطات را به صورت الکترونیکی دریافت کنید، از جمله از طریق ایمیل، اعلان درون پلت فرم، پیام متنی (در صورت فعال بودن)، یا اطلاعیه وب سایت. شما موافقت می‌کنید که ارتباطات الکترونیکی، سوابق، تأییدیه‌ها و امضاها ممکن است الزامات قانونی را برای نوشته‌ها و امضاها تا حدی که قانون مجاز بداند برآورده کند.

12. محتوای کاربر
می‌توانید بیانیه‌ها، پاسخ‌ها، بارگذاری‌ها، پیش‌نویس‌ها، یادداشت‌ها، پیام‌ها، نام‌ها، جزئیات تماس، حقایق پرونده، جزئیات مربوط به کودک، جزئیات مالی و سایر محتواها ("محتوای کاربر") را ارائه دهید.

شما مالکیت محتوای کاربری خود را حفظ می کنید، اما مجوزی غیر انحصاری، جهانی و بدون حق امتیاز برای میزبانی، ذخیره، استفاده، پردازش، تکثیر، انتقال، نمایش، ترجمه، خلاصه کردن، و در غیر این صورت استفاده از محتوای کاربر در صورت لزوم برای ارائه، ایمن سازی، بهبود، و مدیریت خدمات، اجرای حقوق و حفظ سوابق، مطابقت با قوانین، به ما اعطا می کنید.

شما تنها مسئول قانونی بودن، صحت و مناسب بودن محتوای کاربری خود هستید.

13. رفتار ممنوع
شما ممکن است:
(a) ارائه اطلاعات نادرست، گمراه کننده یا متقلبانه؛
(b) جعل هویت شخص دیگری؛
(c) آپلود کد مخرب یا تلاش برای دسترسی غیرمجاز؛
(d) آزار و اذیت، تهدید یا سوء استفاده از هر شخصی؛
(e) استفاده از خدمات برای اهداف غیرقانونی، فریبنده، یا سوء نیت؛
(f) خراش دادن، کپی کردن، مهندسی معکوس، یا بهره برداری از خدمات بدون مجوز؛ یا
(g) با امنیت، یکپارچگی یا عملکرد عادی سرویس ها تداخل ایجاد کند.

14. رازداری و حریم خصوصی
ما اقدامات معقولی را برای محافظت از اطلاعات محرمانه انجام می دهیم، اما نمی توانیم محرمانه بودن یا امنیت مطلق را تضمین کنیم. اطلاعات پرونده ممکن است با طرف دیگر، میانجی، ارائه دهندگان خدمات ما و سایرین در صورت لزوم برای ارائه خدمات یا رعایت قانون به اشتراک گذاشته شود.

خط مشی رازداری ما نحوه جمع آوری، استفاده، افشا و محافظت از اطلاعات را توضیح می دهد.

15. مالکیت فکری
خدمات، وب سایت، طراحی، نام تجاری، آرم ها، گردش کار، محتوا، متن، گرافیک، کد، و مطالب ارائه شده توسط ما متعلق به ما یا مجوز دهندگان ما است و توسط قانون محافظت می شود. به جز محتوای کاربر و استفاده شخصی مجاز، نمی‌توانید بدون رضایت کتبی قبلی، آنها را کپی، تغییر، توزیع، فروش، مجوز یا بهره‌برداری کنید.

16. سلب مسئولیت از گارانتی
تا حداكثري كه قانون اجازه مي‌دهد، خدمات «همانطور كه هست» و «در صورت موجود»، بدون هيچ گونه ضمانت‌نامه، صريح يا ضمني، از جمله ضمانت‌نامه‌هاي ضمانت‌نامه، ضمانت تجاري، ارائه مي‌شوند. عدم نقض، دقت، لذت بردن بی سر و صدا، یا اینکه خدمات بدون وقفه، بدون خطا، یا ایمن خواهد بود.

17. محدودیت مسئولیت
FAST DISPUTE RESOLUTION و صاحبان آن، شرکت های وابسته، پیمانکاران، میانجی ها، نمایندگان، مجوز دهندگان، و ارائه دهندگان خدمات در قبال هیچ موضوع غیرمجاز، مسئولیتی ندارند تا حداکثر میزان مجاز توسط قانون خسارات خاص، مثالی یا کیفری، یا برای هر گونه از دست دادن داده ها، سود، درآمد، سرقفلی، فرصت های تجاری، یا توافق نامه های ناشی از خدمات یا مربوط به خدمات، خدمات.

تا حداكثري كه قانون اجازه مي‌دهد، كل مسئوليت ما در قبال كليه ادعاهاي ناشي از خدمات يا مرتبط با خدمات، از موارد زير تجاوز نخواهد كرد: (الف) مبالغي كه شما در قبال آن به ما پرداخت مي‌كنيد. 3 ماه قبل از رویداد که منجر به ادعا شد. یا (B) US$250.

برخی از حوزه های قضایی محدودیت های خاصی را مجاز نمی دانند، بنابراین ممکن است بخش هایی از این بخش برای شما اعمال نشود.

18. غرامت
شما موافقت می‌کنید که از Fast Dispute Resolution و صاحبان آن، شرکت‌های وابسته، پیمانکاران، واسطه‌ها، نمایندگان، مجوز دهندگان، و ارائه‌دهندگان خدمات از ادعاها، بدهی‌ها، خسارات، زیان‌ها، قضاوت‌ها، هزینه‌ها و مخارج (از جمله حق الوکاله‌های معقول یا مربوط به موارد زیر) دفاع کنید، غرامت بدهید و نگه دارید.
(a) استفاده شما از خدمات،
(b) محتوای کاربری شما،
(c) نقض این شرایط توسط شما،
(d) نقض قانون شما، یا
(e) اختلاف شما با کاربر یا طرف دیگر

19. تعلیق و خاتمه
در صورتی که فکر کنیم برای محافظت از سرویس‌ها، کاربران، یکپارچگی پلتفرم، انطباق قانونی، ایمنی یا منافع تجاری ما ضروری است، ممکن است دسترسی به خدمات را در هر زمان، با یا بدون اطلاع قبلی، تعلیق، محدود یا خاتمه دهیم.

20. قانون حاکم و محل برگزاری
به جز مواردی که قانون اجباری اقتضا کند، این شرایط تحت قوانین ایالت کالیفرنیا، بدون توجه به قوانین تضاد قانون، اداره می شوند.

هر گونه اختلاف غیرقابل داوری ناشی از یا مربوط به این شرایط یا وب سایت باید منحصراً در دادگاه های ایالتی یا فدرال واقع در شهرستان لس آنجلس، کالیفرنیا مطرح شود و شما با صلاحیت قضایی آنها موافقت می کنید.

21. تغییرات در خدمات یا شرایط
ممکن است هر از چند گاهی این شرایط یا خدمات را تغییر دهیم. نسخه به روز شده پس از ارسال موثر خواهد بود، مگر اینکه تاریخ بعدی ذکر شود. ادامه استفاده شما از خدمات پس از به روز رسانی به این معنی است که شرایط اصلاح شده را می پذیرید.

22. تماس بگیرید
Fast Dispute Resolution
پشتیبانی: support@fastdisputeresolution.com

اگر با این شرایط موافق نیستید، از خدمات استفاده نکنید.`,
    "privacy": `این نسخه ترجمه‌شده برای سهولت ارائه شده است. در صورت وجود هرگونه مغایرت، نسخه انگلیسی ملاک خواهد بود.

FAST DISPUTE RESOLUTION
سیاست حفظ حریم خصوصی

آخرین به روز رسانی: 19 مه 2026

این خط‌مشی رازداری توضیح می‌دهد که چگونه Fast Dispute Resolution ("FDR"، "ما"، "ما"، "ما") اطلاعات شخصی را از طریق این وب‌سایت و سرویس‌های متصل و گردش‌های کاری پلت فرم جمع‌آوری، استفاده، افشا، ذخیره و محافظت می‌کند.

با استفاده از وب سایت یا خدمات، این سیاست حفظ حریم خصوصی را تأیید می کنید.

1. دامنه
این سیاست حفظ حریم خصوصی برای موارد زیر اعمال می شود:
(a) بازدیدکنندگان این وب سایت،
(b) افرادی که با ما تماس می گیرند،
(c) افرادی که شروع می کنند یا در یک پرونده شرکت می کنند،
(d) طرفین اختلاف،
(e) مشتریان بالقوه،
(f) افرادی که اطلاعات آنها در ارتباط با یک پرونده ارائه شده است، و
(g) کاربران جریان های کاری مرتبط که از طریق پلتفرم های متصل، از جمله ArtemisChat ارائه می شوند.

2. اطلاعاتی که ما جمع آوری می کنیم
ما ممکن است دسته بندی های زیر را جمع آوری کنیم:

A. اطلاعات تماس و هویت
- نام
- آدرس ایمیل
- شماره تلفن
- آدرس پستی
- نام سازمان
- شناسه های حساب کاربری

B. اطلاعات پرونده و اختلاف
- نوع اختلاف
- اظهارات و توضیحات
- جزئیات رابطه
- جزئیات مربوط به خانواده
- جزئیات مربوط به کودک
- اولویت های زمان بندی
- ترجیحات ارتباطی
- فایل ها و پیام های آپلود شده
- نتایج درخواست شده
- توافقنامه ها، پیش نویس ها و ویرایش ها

C. اطلاعات مالی و پرداخت
- جزئیات صورتحساب
- تاریخچه تراکنش
- وضعیت پرداخت
- داده های پرداخت جزئی / تقسیم پرداخت
- اطلاعات هزینه تکمیلی
داده های کارت پرداخت توسط Stripe پردازش می شود و به طور کامل توسط ما ذخیره نمی شود.

D. اطلاعات فنی و استفاده
- آدرس IP
- اطلاعات مرورگر/دستگاه
- سیستم عامل
- مکان تقریبی استنباط شده از IP
- صفحات مشاهده شده
- کلیک ها و تعاملات
- کوکی ها و فناوری های مشابه
- گزارش‌ها، تشخیص‌ها و رویدادهای امنیتی

E. اطلاعات پشتیبانی
- سوالات پشتیبانی مشتری
- مکاتبات
- گزارش های صادر می کند

F. داده های مربوط به کودک
از آنجایی که اختلافات خانوادگی ممکن است مربوط به حضانت، حمایت، تحصیل، بهداشت، یا مسائل مربوط به والدین باشد، بزرگسالانی که از خدمات استفاده می کنند ممکن است اطلاعات مربوط به کودکان را به عنوان بخشی از پرونده ارائه دهند. وب‌سایت و سرویس‌ها برای کودکان هدایت نمی‌شوند و ما آگاهانه به دنبال جمع‌آوری اطلاعات مستقیم از کودکان از طریق رابط‌های عمومی نیستیم.

3. منابع اطلاعات
ما اطلاعات را جمع آوری می کنیم:
- مستقیما از شما
- از طرف مقابل به اختلاف
- از نمایندگان مجاز
- از جریان های کاری پلت فرم متصل
- از پردازنده های پرداخت و ارائه دهندگان خدمات
- به طور خودکار از استفاده شما از وب سایت یا خدمات

4. چگونه از اطلاعات استفاده می کنیم
ما ممکن است از اطلاعات برای موارد زیر استفاده کنیم:
- ارائه و مدیریت خدمات
- باز کردن و مدیریت پرونده ها
- تسهیل ارتباطات و حل اختلاف
- تایید هویت و اقتدار
- پرداخت ها را پردازش کرده و از تقلب جلوگیری کنید
- پیش نویس ها، خلاصه ها، ترجمه ها یا خروجی های گردش کار را ایجاد کنید
- پشتیبانی مشتری را ارائه دهد
- خدمات را بهبود، ایمن و عیب یابی کنید
- حقوق و سیاست های خود را اجرا کنیم
- تعهدات قانونی را رعایت کنند
- سوابق تجاری و پرونده را حفظ کنید

5. مبانی قانونی (در صورت لزوم)
بسته به موقعیت مکانی شما و قانون قابل اجرا، ممکن است اطلاعات شخصی را بر اساس موارد زیر پردازش کنیم:
- رضایت شما
- اجرای یک قرارداد یا مراحل درخواست شده قبل از ورود به آن
- منافع مشروع ما در ارائه، ایمن سازی و بهبود خدمات
- رعایت تعهدات قانونی
- حفاظت از منافع حیاتی در مواردی که قانون اجازه می دهد

6. چگونه اطلاعات را به اشتراک می گذاریم
ممکن است اطلاعاتی را فاش کنیم:
- به طرف یا طرف های دیگر در یک مورد، در صورت لزوم برای فرآیند
- به میانجی ها، پیمانکاران و پرسنل پشتیبانی که روی یک پرونده کار می کنند
- به ارائه دهندگان خدماتی که سرویس ها را میزبانی، ایمن، پردازش یا پشتیبانی می کنند
- به پردازنده های پرداخت مانند Stripe
- به مشاوران حرفه ای، بیمه گذاران یا حسابرسان
- به دادگاه ها، رگولاتورها، مجریان قانون، یا سایر مواردی که توسط قانون الزامی است
- در ارتباط با ادغام، فروش، تامین مالی، سازماندهی مجدد یا انتقال دارایی ها
- با رضایت شما یا به دستور شما

ما اطلاعات شخصی را برای پول نمی فروشیم.

7. Stripe و پرداخت ها
پرداخت ها از طریق Stripe پردازش می شوند. Stripe ممکن است داده‌های پرداخت و پیشگیری از کلاهبرداری را تحت خط‌مشی‌ها و توافق‌های خود جمع‌آوری، استفاده و پردازش کند. ممکن است اطلاعات محدودی مربوط به تراکنش را از Stripe دریافت کنیم، مانند وضعیت پرداخت، جزئیات کارت جزئی، نام صورت‌حساب، کشور، و شناسه‌های لازم برای مدیریت پرداخت‌ها، جلوگیری از کلاهبرداری و اختلافات پشتیبانی.

8. کوکی ها و فناوری های مشابه
ممکن است از کوکی‌ها، پیکسل‌ها، فضای ذخیره‌سازی محلی، ابزارهای جلسه و فناوری‌های مشابه برای موارد زیر استفاده کنیم:
- عملکرد ضروری سایت
- امنیت و جلوگیری از تقلب
- تنظیمات برگزیده و زبان
- تجزیه و تحلیل و عملکرد
- عیب یابی و تشخیص

در صورت لزوم، قبل از استفاده از کوکی‌های غیرضروری یا فناوری‌های مشابه، درخواست رضایت می‌کنیم.

9. حفظ داده ها
ما اطلاعات را فقط تا زمانی که به طور منطقی برای اهدافی که در این خط‌مشی توضیح داده شده است، از جمله موارد زیر نگهداری می‌کنیم:
- ارائه خدمات
- معاملات کامل
- نگهداری سوابق پرونده
- از تعهدات قانونی، مالیاتی، حسابداری، بیمه ای یا حل اختلاف پیروی کنید
- اجرای توافقات
- حل اختلافات
- جلوگیری از تقلب و سوء استفاده

دوره های نگهداری ممکن است بسته به نوع پرونده، قانون قابل اجرا و نیازهای عملیاتی متفاوت باشد. زمانی که اطلاعات دیگر مورد نیاز نباشد، آن‌ها را حذف، ناشناس می‌کنیم، یا در صورت امکان به طور ایمن از بین می‌بریم.

10. امنیت داده ها
ما از پادمان‌های اداری، فنی و سازمانی معقولی استفاده می‌کنیم که برای محافظت از اطلاعات در برابر دسترسی، افشا، تغییر یا تخریب غیرمجاز طراحی شده‌اند. با این حال، هیچ روش انتقال، ذخیره سازی یا امنیت کاملاً ایمن نیست و ما نمی توانیم امنیت مطلق را قول بدهیم.

11. نقل و انتقالات بین المللی
وب سایت ما، ارائه دهندگان پلت فرم، یا ارائه دهندگان خدمات ممکن است اطلاعات را در ایالات متحده یا سایر حوزه های قضایی ذخیره یا پردازش کنند. با استفاده از خدمات، تصدیق می‌کنید که اطلاعات شما ممکن است به کشورهایی که ممکن است قوانین حفاظت از داده‌ها متفاوت از محل سکونت شما داشته باشند، منتقل و پردازش شود.

12. انتخاب ها و حقوق شما
بسته به قانون قابل اجرا، ممکن است حقوق زیر را داشته باشید:
- دسترسی به اطلاعات شخصی خاص
- درخواست تصحیح اطلاعات نادرست
- درخواست حذف برخی اطلاعات
- اعتراض یا محدود کردن پردازش خاصی
- در جایی که پردازش به رضایت بستگی دارد، رضایت را پس بگیرید
- درخواست قابل حمل بودن اطلاعات خاص
- در صورت رد درخواست، در صورت لزوم، اعتراض کنید

برای انجام یک درخواست، با ما در support@fastdisputeresolution.com تماس بگیرید. ممکن است لازم باشد قبل از پردازش درخواست شما هویت و اعتبار شما را تأیید کنیم. همچنین ممکن است درخواست‌ها را در مواردی که قانون اجازه می‌دهد رد یا محدود کنیم، از جمله مواردی که افشای آن بر حقوق طرف دیگر تأثیر منفی می‌گذارد یا با تعهدات قانونی در تضاد است.

13. کالیفرنیا و سایر حقوق حریم خصوصی ایالتی ایالات متحده
اگر قوانین حفظ حریم خصوصی در حوزه قضایی شما حقوق خاصی را ارائه می کنند، ما این حقوق را تا حد قابل اجرا رعایت خواهیم کرد. اگر شما مقیم کالیفرنیا هستید و قانون قابل اجرا در مورد حفظ حریم خصوصی کالیفرنیا در مورد درخواست شما اعمال می شود، می توانید با استفاده از اطلاعات زیر با ما تماس بگیرید تا درخواستی قابل تأیید ارسال کنید.

14. پیگیری نکنید
ممکن است خدمات ما به همه سیگنال‌های «ردیابی نشوید» مبتنی بر مرورگر پاسخ ندهند. در مواردی که قانون الزامی می کند، ما به انتخاب های انصرافی که از طریق مکانیسم های قانونی به رسمیت شناخته شده است احترام می گذاریم.

15. پیوندها و خدمات شخص ثالث
وب‌سایت یا خدمات ممکن است حاوی پیوندهایی به وب‌سایت‌ها، ابزارها یا ادغام‌های شخص ثالث باشد. ما مسئولیتی در قبال اقدامات حفظ حریم خصوصی آنها نداریم. قبل از ارائه اطلاعات به آنها، خط مشی های آنها را مرور کنید.

16. حریم خصوصی کودکان
این وب سایت برای کودکان زیر 13 سال هدایت نمی شود. ما آگاهانه اطلاعات شخصی را مستقیماً از طریق وب سایت عمومی از کودکان جمع آوری نمی کنیم. با این حال، بزرگسالان ممکن است اطلاعات مربوط به کودک را در صورت لزوم برای یک پرونده خانوادگی ارائه دهند. اگر فکر می کنید که ما اطلاعاتی را مستقیماً از یک کودک به شیوه ای نامناسب جمع آوری کرده ایم، با ما تماس بگیرید و ما آن را بررسی می کنیم.

17. تغییرات در این سیاست
ممکن است هر از چند گاهی این سیاست حفظ حریم خصوصی را به روز کنیم. نسخه اصلاح شده زمانی که پست شود، قابل اجرا می شود، مگر اینکه تاریخ بعدی ذکر شود.

18. تماس بگیرید
Fast Dispute Resolution
پشتیبانی: support@fastdisputeresolution.com

اگر در مورد حفظ حریم خصوصی با ما تماس می گیرید، لطفاً اطلاعات کافی برای درک و پاسخ به درخواست شما درج کنید.`,
    "refunds": `این نسخه ترجمه‌شده برای سهولت ارائه شده است. در صورت وجود هرگونه مغایرت، نسخه انگلیسی ملاک خواهد بود.

FAST DISPUTE RESOLUTION
سیاست بازپرداخت و لغو

آخرین به روز رسانی: 19 مه 2026

این خط‌مشی بازپرداخت و لغو توضیح می‌دهد که Fast Dispute Resolution چگونه لغو، اعتبار و بازپرداخت را مدیریت می‌کند.

1. قانون کلی
به استثنای مواردی که توسط قانون الزامی شده باشد یا در یک اطلاعیه هزینه کتبی، نقل قول، صورتحساب، یا صفحه پرداخت خاص به طور صراحتاً غیر از آن ذکر شده باشد، هزینه‌ها معمولاً با در دسترس قرار گرفتن، رزرو، شروع یا انجام خدمات دریافت می‌شوند.

2. هزینه های غیر قابل استرداد یا به دست آمده
موارد زیر معمولاً پس از شارژ شدن یا شروع کار مرتبط قابل استرداد نیستند:
- هزینه های باز کردن یا ورودی/راه اندازی کیس
- هزینه های فعال سازی اداری
- هزینه های دسترسی به پلت فرم مربوط به راه اندازی مورد
- هزینه جلسات میانجیگری تکمیل شده
- هزینه های پیش نویس یا تهیه سند پس از شروع پیش نویس
- هزینه های تکمیلی پس از شروع کار یا نقطه عطف مرتبط
- هزینه‌های مرتبط با ترجمه‌های تکمیل‌شده، خلاصه‌ها، یا خروجی‌های گردش کار ایجاد شده برای این پرونده

3. تقسیم پرداخت ها و پرداخت های خاص مهمانی
در مواردی که هزینه ها بین طرفین تقسیم می شود، هر یک از طرفین مسئول قسمتی است که به آن طرف اختصاص داده شده است، مگر اینکه در یک اخطار کتبی موردی خلاف آن ذکر شده باشد. عدم پرداخت، تأخیر، امتناع از مشارکت یا انصراف یک طرف به طور خودکار به طرف دیگر حق بازپرداخت نمی دهد.

4. مواردی که ادامه نمی یابد
اگر پرونده ای ادامه پیدا نکند، هر گونه بازپرداخت یا اعتبار مورد به مورد تعیین می شود و بستگی به خدمات، راه اندازی، بررسی یا کار موردی دارد که قبلاً ارائه شده است. ما ممکن است، اما ملزم به صدور بازپرداخت کامل، بازپرداخت جزئی، اعتبار خدمات، یا عدم بازپرداخت به هیچ عنوان، مگر در مواردی که طبق قانون الزامی باشد، نداریم.

5. لغو توسط شما
شما می توانید در هر زمانی استفاده از خدمات را متوقف کنید. با این حال، توقف استفاده به طور خودکار به شما حق بازپرداخت برای خدماتی را که قبلاً تحویل داده، در دسترس، رزرو شده یا آغاز شده است، نمی‌دهد.

6. زمان بندی مجدد و جلسات زنده
اگر جلسات زنده برای یک مورد خاص ارائه می شود:
- درخواست‌های زمان‌بندی مجدد باید در اسرع وقت انجام شوند.
- جلسات از دست رفته یا لغو دیرهنگام ممکن است به عنوان زمان استفاده شده یا زمان رزرو غیر قابل استرداد تلقی شود.
- ما ممکن است قوانین زمانبندی مجدد مورد خاص را در اعلامیه زمانبندی یا فاکتور تنظیم کنیم.

7. لغو یا فسخ توسط ما
اگر موضوعی ناامن، نامناسب، غیرقانونی، توهین‌آمیز یا ناهماهنگ با خط‌مشی‌های ما به نظر برسد، ممکن است خدمات را رد، تعلیق یا خاتمه دهیم. اگر قبل از شروع کار اساسی کار را خاتمه دهیم، ممکن است به صلاحدید خود، بازپرداخت یا اعتبار کامل یا جزئی را صادر کنیم. اگر کار اساسی از قبل شروع شده باشد، ممکن است هزینه های کار انجام شده یا در دسترس را حفظ کنیم.

8. استرداد وجه و اختلافات پرداخت
قبل از بحث در مورد هزینه با بانک یا صادرکننده کارت خود، با ما در support@fastdisputeresolution.com تماس بگیرید. ثبت استرداد وجه به طور خودکار تعهدات شما را تحت شرایط ما لغو نمی کند. ما این حق را برای خود محفوظ می داریم که دسترسی به پرونده را تا زمانی که بازپرداخت وجه در دست بررسی است، معلق کنیم و با استرداد وجهی که معتقدیم نامناسب هستند، مخالفت کنیم.

9. روش بازپرداخت
بازپرداخت‌های تأیید شده، در صورت وجود، معمولاً به روش پرداخت اصلی بازگردانده می‌شوند، مگر اینکه طبق قانون یا کتباً توافق شده باشد.

10. زمان بندی
زمان بررسی بازپرداخت بسته به مورد و روش پرداخت متفاوت است. اگر بازپرداخت تأیید شود، زمان پردازش به پردازشگر پرداخت و بانک شما نیز بستگی دارد.

11. تماس بگیرید
پشتیبانی: support@fastdisputeresolution.com`,
    "disclaimer": `این نسخه ترجمه‌شده برای سهولت ارائه شده است. در صورت وجود هرگونه مغایرت، نسخه انگلیسی ملاک خواهد بود.

FAST DISPUTE RESOLUTION
سلب مسئولیت قانونی

آخرین به روز رسانی: 19 مه 2026

Fast Dispute Resolution تسهیل حل اختلاف، خدمات مربوط به میانجیگری و ابزارهای گردش کار مرتبط را فراهم می کند. اطلاعات این وب سایت و از طریق خدمات ما فقط برای اهداف اطلاعاتی و تسهیلی عمومی ارائه می شود.

1. مشاوره حقوقی نیست
هیچ چیز در این وب سایت یا خدمات ما مشاوره حقوقی نیست و هیچ چیز در اینجا نباید به عنوان جایگزین مشاوره از یک وکیل واجد شرایط دارای مجوز در حوزه قضایی مناسب باشد.

2. بدون رابطه وکیل و موکل
استفاده شما از این وب‌سایت یا خدمات، رابطه وکیل و مشتری یا نمایندگی قانونی ایجاد نمی‌کند، مگر اینکه یک تعهد کتبی جداگانه به صراحت بیان کند.

3. فرآیند خنثی
در جایی که خدمات میانجیگری ارائه می‌شود، در نظر گرفته شده است که میانجی به‌عنوان یک تسهیل‌کننده بی‌طرف عمل کند تا مدافع هر یک از طرفین.

4. بدون گارانتی
ما تضمین نمی کنیم:
- که یک پرونده حل می شود،
- که همه احزاب شرکت خواهند کرد،
- که هر پیشنهادی پذیرفته خواهد شد
- که هر توافقی در همه جا قابل اجرا خواهد بود،
- یا اینکه هر نتیجه ای برای نیازهای شما مناسب باشد.

5. مشاوره مستقل
شما مسئول تصمیم گیری در مورد مشورت با متخصصان حقوقی، مالیاتی، حسابداری، مالی یا سلامت روان قبل از تکیه بر هرگونه توافق، ترجمه، پیش نویس یا خلاصه هستید.

6. نه برای شرایط اضطراری یا ناامن
برای موقعیت‌های اضطراری، ناامن یا بحرانی، از جمله تهدید به خشونت، اجبار، سوء استفاده، تعقیب، به خطر انداختن کودکان، دستورات حفاظتی فوری یا ضرب‌الاجل‌های قریب‌الوقوع که نیاز به اقدام دادگاه دارند، به تنهایی به این وب‌سایت یا خدمات اعتماد نکنید.

7. خدمات آینده
اگر بعداً خدمات دیگری مانند داوری یا سایر خدمات حل اختلاف ارائه دهیم، این خدمات جداگانه توضیح داده می‌شوند و ممکن است مشمول شرایط اضافی شوند.

8. تماس بگیرید
پشتیبانی: support@fastdisputeresolution.com`,
    "cookies": `این نسخه ترجمه‌شده برای سهولت ارائه شده است. در صورت وجود هرگونه مغایرت، نسخه انگلیسی ملاک خواهد بود.

FAST DISPUTE RESOLUTION
اطلاعیه کوکی

آخرین به روز رسانی: 19 مه 2026

ما از کوکی‌ها و فناوری‌های مشابه برای راه‌اندازی وب‌سایت خود، یادآوری تنظیمات برگزیده، بهبود عملکرد، ایمن سازی سایت و درک نحوه استفاده بازدیدکنندگان از خدمات ما استفاده می‌کنیم. برخی از کوکی ها به شدت ضروری هستند. سایر موارد ممکن است برای تجزیه و تحلیل یا اهداف مشابه استفاده شوند.

در صورت لزوم، قبل از استفاده از کوکی‌های غیر ضروری، درخواست رضایت می‌کنیم. همچنین می‌توانید کوکی‌ها را از طریق تنظیمات مرورگر خود مدیریت کنید، اگرچه غیرفعال کردن برخی از کوکی‌ها ممکن است بر عملکرد سایت تأثیر بگذارد.

برای اطلاعات بیشتر در مورد نحوه استفاده از اطلاعات شخصی، لطفاً به سیاست حفظ حریم خصوصی ما مراجعه کنید.`,
  },
  "ru": {
    "terms": `Это переведенная версия, предоставленная для удобства. В случае любого расхождения преимущественную силу имеет английская версия.

FAST DISPUTE RESOLUTION
УСЛОВИЯ ОБСЛУЖИВАНИЯ

Последнее обновление: 19 мая 2026 г.

Настоящие Условия обслуживания («Условия») регулируют ваш доступ и использование веб-сайта Fast Dispute Resolution, связанных страниц, а также любых услуг, функций, контента, приема заявок, коммуникаций, рабочих процессов или инструментов, доступных через этот веб-сайт или через нашу подключенную платформу («Услуги»). «Fast Dispute Resolution», «FDR», «мы», «нас» и «наш» означают оператора данного веб-сайта и Услуг. «Вы» означает любого посетителя, пользователя, клиента, сторону в споре или другое лицо, получающее доступ к Услугам или использующее их.

Получая доступ к Сервисам или используя их, вы соглашаетесь с настоящими Условиями. Если вы не согласны, не используйте Услуги.

1. Характер услуг
Fast Dispute Resolution обеспечивает содействие онлайн-разрешению споров, приему дел, управлению рабочими процессами и посредническим услугам. Если прямо не указано иное в описании конкретной услуги, на странице заказа или в уведомлении о случае, наши Услуги представляют собой только услуги по посредничеству и разрешению споров.

На этом веб-сайте мы не являемся юридической фирмой, и использование Услуг само по себе не создает:
(a) отношения адвокат-клиент,
(b) юридическое представительство,
(c) юридические консультации,
(d) фидуциарная обязанность, выходящая за рамки применимого законодательства, или
(e) гарантия любого результата.

Мы обеспечиваем структурированные процессы, управляемые рабочие процессы, нейтральное содействие и соответствующую административную поддержку. Мы не обещаем, что стороны достигнут соглашения.

2. Никаких юридических консультаций; Рекомендуется независимая консультация
Информация на этом веб-сайте и в Сервисах предназначена только для общих информационных целей и целей упрощения процессов. Это не юридические, налоговые, финансовые, бухгалтерские, психические или другие профессиональные консультации.

Вы несете ответственность за получение собственной независимой юридической или профессиональной консультации, когда это необходимо, в том числе перед подписанием какого-либо окончательного соглашения или использованием любого переведенного или обобщенного контента.

3. Нейтралитет
В тех случаях, когда предоставляются посреднические услуги, медиатор призван действовать в качестве нейтрального посредника. За исключением случаев, прямо оговоренных в отдельном письменном соглашении, мы не выступаем за одну сторону против другой.

Существование посредника, платформы, рабочего процесса или предлагаемых формулировок не означает, что мы поддерживаем позицию какой-либо стороны или гарантируем справедливость, осуществимость или соответствие результата вашим обстоятельствам.

4. Добровольный процесс; Нет гарантии результата
Результаты разрешения споров и посредничества по своей сути неопределенны. Любое урегулирование, предложение или проект соглашения являются добровольными, если и до тех пор, пока стороны не договорятся об ином в действительной и имеющей обязательную силу письменной форме.

Мы не гарантируем:
(a) что другая сторона будет участвовать,
(b) что любое дело разрешится,
(c) что любой проект будет принят,
(d) что любое соглашение будет иметь силу в каждой юрисдикции,
(e) что суд одобрит или примет какое-либо соглашение, или
(f) что любой перевод, резюме или созданный контент не содержит ошибок.

5. Неподходящие или срочные дела
Услуги не заменяют службы экстренной помощи, срочную судебную помощь, правоохранительные органы или кризисное вмешательство. Не полагайтесь только на Службы, если ваш вопрос связан с непосредственной опасностью, угрозами, принуждением, преследованием, жестоким обращением, угрозой для детей, срочными охранными приказами, уголовными обвинениями, приближающимися сроками подачи заявок или другими обстоятельствами, требующими немедленного профессионального вмешательства.

Мы можем отклонить, приостановить или прекратить предоставление Услуг по любому вопросу, который мы считаем, по нашему усмотрению, непригодным для онлайн-посредничества или содействия на платформе.

6. Право на участие и полномочия
Вы представляете, что:
(a) вам исполнилось 18 лет,
(b) вы обладаете правоспособностью заключать обязательные соглашения,
(c) любая предоставленная вами информация является точной и актуальной,
(d) если вы действуете от имени бизнеса или организации, у вас есть полномочия налагать обязательства на эту организацию, и
(e) использование вами Услуг соответствует действующему законодательству.

7. Учетные записи, доступ и безопасность
Вам может потребоваться создать учетную запись или получить доступ к делу через ссылку, электронную почту или рабочий процесс платформы. Вы несете ответственность за сохранение конфиденциальности вашей информации для входа в систему, доступа к устройствам и ссылок на доступ к делу, а также за все действия, происходящие через вашу учетную запись или учетные данные для доступа.

Вы должны незамедлительно уведомить нас о любом предполагаемом несанкционированном доступе или инциденте безопасности, связанном с вашей учетной записью или делом.

8. Платформа и сторонние сервисы
Некоторые или все Услуги могут предоставляться через сторонние или подключенные системы, включая инструменты управления делами, обмена сообщениями, хостинга, оплаты, документов или связи. Сюда могут входить платформа ArtemisChat и Stripe для обработки платежей.

Сторонние услуги регулируются собственными условиями, доступностью и ограничениями. Мы не несем ответственности за сбои, перебои, задержки или сбои, вызванные действиями сторонних поставщиков, за исключением случаев, предусмотренных законом.

9. Платежи
Сборы, структура ценообразования, разделение платежей, дополнительные сборы и сроки оплаты могут различаться в зависимости от услуги или случая и будут показаны до того, как будет запрошен или снят платеж.

Совершая платеж, вы разрешаете нам и нашей платежной системе взимать с указанного вами способа оплаты авторизованные сборы, налоги, если применимо, и любые утвержденные дополнительные сборы.

Вы соглашаетесь не инициировать возвратные платежи или споры по платежам, кроме как добросовестно и по законным причинам. В случае возврата платежа или спора по платежу мы можем приостановить доступ к делу или Услугам на время рассмотрения дела.

10. Возврат и отмена
Правила возврата и отмены регулируются нашей Политикой возврата и отмены, которая включена в настоящие Условия посредством ссылки.

11. Электронные коммуникации и записи
Вы соглашаетесь получать сообщения в электронном виде, в том числе по электронной почте, с помощью уведомлений на платформе, текстовых сообщений (если они включены) или уведомлений на веб-сайте. Вы соглашаетесь с тем, что электронные сообщения, записи, подтверждения и подписи могут удовлетворять юридическим требованиям к письменным документам и подписям в максимальной степени, разрешенной законом.

12. Пользовательский контент
Вы можете предоставлять заявления, ответы, загрузки, черновики, заметки, сообщения, имена, контактные данные, факты дела, сведения о детях, финансовые сведения и другой контент («Пользовательский контент»).

Вы сохраняете право собственности на свой Пользовательский контент, но предоставляете нам неисключительную, действующую по всему миру, безвозмездную лицензию на размещение, хранение, использование, обработку, воспроизведение, передачу, отображение, перевод, обобщение и иное использование Пользовательского контента, если это разумно необходимо для предоставления, защиты, улучшения и администрирования Сервисов, обеспечения соблюдения наших прав, соблюдения закона и ведения учета.

Вы несете единоличную ответственность за законность, точность и уместность вашего Пользовательского контента.

13. Запрещенное поведение
Вы не можете:
(a) предоставлять ложную, вводящую в заблуждение или мошенническую информацию;
(b) выдавать себя за другого человека;
(c) загружать вредоносный код или пытаться несанкционированный доступ;
(d) преследовать, угрожать или оскорблять любого человека;
(e) использовать Услуги в незаконных, вводящих в заблуждение или недобросовестных целях;
(f) очищать, копировать, реконструировать или использовать Сервисы без разрешения; или
(g) вмешиваться в безопасность, целостность или нормальную работу Сервисов.

14. Конфиденциальность и конфиденциальность
Мы принимаем разумные меры для защиты конфиденциальной информации, но не можем гарантировать абсолютную конфиденциальность или безопасность. Информация о деле может быть передана другой стороне, посреднику, нашим поставщикам услуг и другим лицам, если это необходимо для предоставления Услуг или соблюдения закона.

В нашей Политике конфиденциальности объясняется, как мы собираем, используем, раскрываем и защищаем информацию.

15. Интеллектуальная собственность
Предоставляемые нами Услуги, веб-сайт, дизайн, брендинг, логотипы, рабочие процессы, контент, текст, графика, код и материалы принадлежат нам или нашим лицензиарам и защищены законом. За исключением вашего Пользовательского контента и разрешенного личного использования, вы не имеете права копировать, изменять, распространять, продавать, лицензировать или использовать его без предварительного письменного согласия.

16. Отказ от гарантий
В МАКСИМАЛЬНОЙ СТЕПЕНИ, РАЗРЕШЕННОЙ ЗАКОНОМ, УСЛУГИ ПРЕДОСТАВЛЯЮТСЯ «КАК ЕСТЬ» И «КАК ДОСТУПНО», БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ЯВНЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ ГАРАНТИИ ТОВАРНОЙ ЦЕННОСТИ, ПРИГОДНОСТИ ДЛЯ ОПРЕДЕЛЕННОЙ ЦЕЛИ, НЕНАРУШЕНИЯ ПРАВ, ТОЧНОСТИ, ТИХОСТИ НАСЛАЖДЕНИЕ ИЛИ ЧТО УСЛУГИ БУДУТ БЕСПЕРЕБОЙНЫМИ, БЕЗОШИБОЧНЫМИ ИЛИ БЕЗОПАСНЫМИ.

17. Ограничение ответственности
В МАКСИМАЛЬНОЙ СТЕПЕНИ, РАЗРЕШЕННОЙ ЗАКОНОДАТЕЛЬСТВОМ, FAST DISPUTE RESOLUTION И ЕГО ВЛАДЕЛЬЦЫ, ФИЛИАЛЫ, ПОДРЯДЧИКИ, ПОСРЕДНИКИ, АГЕНТЫ, ЛИЦЕНЗИАРЫ И ПОСТАВЩИКИ УСЛУГ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ЗА ЛЮБЫЕ КОСВЕННЫЕ, СЛУЧАЙНЫЕ, ПОСЛЕДНИЕ, СПЕЦИАЛЬНЫЕ, ПРИМЕРНЫЕ ИЛИ НАКАЗАТЕЛЬНЫЕ МЕРЫ УЩЕРБ ИЛИ ЛЮБАЯ ПОТЕРЯ ДАННЫХ, ПРИБЫЛИ, ДОХОДА, ДОХОДА, БИЗНЕС-ВОЗМОЖНОСТЕЙ ИЛИ СОГЛАШЕНИЙ, ВОЗНИКАЮЩИХ ИЗ УСЛУГ ИЛИ СВЯЗАННЫХ С УСЛУГАМИ, ДАЖЕ ЕСЛИ УВЕДОМЛЕНЫ О ВОЗМОЖНОСТИ.

В МАКСИМАЛЬНОЙ СТЕПЕНИ, РАЗРЕШЕННОЙ ЗАКОНОДАТЕЛЬСТВОМ, НАША ОБЩАЯ ОТВЕТСТВЕННОСТЬ ПО ВСЕМ ПРЕТЕНЗИЯМ, ВОЗНИКАЮЩИМ ИЗ УСЛУГ ИЛИ СВЯЗАННЫМ С УСЛУГАМИ, НЕ БУДЕТ ПРЕВЫШАТЬ БОЛЬШУЮ ИЗ: (A) СУММЫ, ВЫ ЗАПЛАТЕННОЙ НАМ ЗА КОНКРЕТНУЮ УСЛУГУ, ПОЗВОЛЯЮЩУЮ ПРЕТЕНЗИИ В ТЕЧЕНИЕ 3 МЕСЯЦЕВ ДО ПРЕДОСТАВЛЕНИЯ СОБЫТИЯ ПОДЪЕМ К ПРЕТЕНЗИИ; ИЛИ (B) US$250.

В некоторых юрисдикциях не допускаются определенные ограничения, поэтому некоторые части этого раздела могут к вам не относиться.

18. Возмещение ущерба
Вы соглашаетесь защищать, возмещать и ограждать Fast Dispute Resolution и его владельцев, аффилированных лиц, подрядчиков, посредников, агентов, лицензиаров и поставщиков услуг от претензий, обязательств, ущерба, потерь, судебных решений, издержек и расходов (включая разумные гонорары адвокатов), возникающих или связанных с:
(a) использование вами Услуг,
(b) ваш Пользовательский контент,
(c) нарушение вами настоящих Условий,
(d) нарушение вами закона или
(e) ваш спор с другим пользователем или стороной.

19. Приостановление и прекращение действия
Мы можем приостановить, ограничить или прекратить доступ к Сервисам в любое время, с уведомлением или без него, если мы считаем, что это необходимо для защиты Сервисов, пользователей, целостности платформы, соблюдения законодательства, безопасности или наших деловых интересов.

20. Регулирующее право и место проведения
За исключением случаев, когда обязательное законодательство требует иного, настоящие Условия регулируются законодательством штата Калифорния без учета норм коллизионного права.

Любой неарбитражный спор, возникающий в связи с настоящими Условиями или веб-сайтом или в связи с ними, подлежит рассмотрению исключительно в судах штата или федеральных судах, расположенных в округе Лос-Анджелес, штат Калифорния, и вы соглашаетесь на их юрисдикцию.

21. Изменения в Услугах или Условиях
Мы можем время от времени изменять настоящие Условия или Услуги. Обновленная версия вступит в силу с момента публикации, если не указана более поздняя дата. Продолжение использования вами Услуг после обновления означает, что вы принимаете пересмотренные Условия.

22. Контакт
Fast Dispute Resolution
Поддержка: support@fastdisputeresolution.com

Если вы не согласны с настоящими Условиями, не используйте Услуги.`,
    "privacy": `Это переведенная версия, предоставленная для удобства. В случае любого расхождения преимущественную силу имеет английская версия.

FAST DISPUTE RESOLUTION
ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ

Последнее обновление: 19 мая 2026 г.

В настоящей Политике конфиденциальности объясняется, как Fast Dispute Resolution («FDR», «мы», «нас», «наш») собирает, использует, раскрывает, хранит и защищает личную информацию через этот веб-сайт, а также через наши связанные службы и рабочие процессы платформы.

Используя веб-сайт или Услуги, вы подтверждаете настоящую Политику конфиденциальности.

1. Объем
Настоящая Политика конфиденциальности распространяется на:
(a) посетители этого сайта,
(b) люди, которые обращаются к нам,
(c) люди, которые начинают или участвуют в деле,
(d) стороны спора,
(e) потенциальные клиенты,
(f) лица, сведения о которых представлены в связи с делом, и
(g) пользователи связанных рабочих процессов, реализуемых через подключенные платформы, включая ArtemisChat.

2. Информация, которую мы собираем
Мы можем собирать следующие категории информации:

A. Контактная и идентификационная информация
- имя
- Адрес электронной почты
- номер телефона
- почтовый адрес
- название организации
- идентификаторы учетных записей пользователей

B. Информация о делах и спорах
- тип спора
- утверждения и описания
- подробности отношений
- подробности, связанные с семьей
- детали, связанные с ребенком
- предпочтения планирования
- коммуникационные предпочтения
- загруженные файлы и сообщения
- запрошенные результаты
- соглашения, проекты и правки

C. Финансовая и платежная информация
- платежные реквизиты
- история транзакций
- статус платежа
- данные частичной оплаты/раздельной оплаты
- дополнительная информация о плате
Данные платежной карты обрабатываются Stripe и не сохраняются нами в полном объеме.

D. Техническая информация и информация об использовании
- IP-адрес
- информация о браузере/устройстве
- Операционная система
- приблизительное местоположение определяется по IP
- просмотренные страницы
- клики и взаимодействия
- файлы cookie и аналогичные технологии
- журналы, диагностика и события безопасности

E. Информация о поддержке
- запросы в службу поддержки клиентов
- переписка
- выпускать отчеты

F. Данные, связанные с детьми
Поскольку семейные споры могут затрагивать вопросы опеки над детьми, поддержки, обучения, здоровья или воспитания детей, взрослые, использующие Сервисы, могут предоставлять информацию, касающуюся детей, в рамках дела. Веб-сайт и Услуги не предназначены для детей, и мы сознательно не стремимся собирать информацию непосредственно от детей через общедоступные интерфейсы.

3. Источники информации
Мы собираем информацию:
- прямо от тебя
- от другой стороны спора
- от уполномоченных представителей
- из рабочих процессов подключенной платформы
- от платежных систем и поставщиков услуг
- автоматически при использовании вами веб-сайта или Услуг

4. Как мы используем информацию
Мы можем использовать информацию для:
- предоставлять и администрировать Услуги
- открывать и управлять делами
- облегчить общение и разрешение споров
- подтвердить личность и полномочия
- обрабатывать платежи и предотвращать мошенничество
- генерировать черновики, резюме, переводы или результаты рабочего процесса
- обеспечить поддержку клиентов
- улучшать, защищать и устранять неполадки Сервисов
- обеспечивать соблюдение наших прав и политики
- соблюдать юридические обязательства
- вести учет деловых операций и дел

5. Правовые основы (где это применимо)
В зависимости от вашего местоположения и применимого законодательства мы можем обрабатывать личную информацию на основании:
- ваше согласие
- выполнение контракта или шаги, запрошенные перед его заключением
- наши законные интересы в предоставлении, обеспечении безопасности и улучшении Услуг
- соблюдение юридических обязательств
- защита жизненно важных интересов в случаях, разрешенных законом

6. Как мы делимся информацией
Мы можем раскрывать информацию:
- другой стороне или сторонам в случае, если это необходимо для процесса
- посредникам, подрядчикам и вспомогательному персоналу, работающему над делом
- поставщикам услуг, которые размещают, защищают, обрабатывают или поддерживают Услуги
- платежным системам, таким как Stripe
- профессиональным консультантам, страховщикам или аудиторам
- судам, регулирующим органам, правоохранительным органам или другим лицам, если этого требует закон
- в связи со слиянием, продажей, финансированием, реорганизацией или передачей активов
- с вашего согласия или по вашему указанию

Мы не продаем личную информацию за деньги.

7. Stripe и платежи
Платежи обрабатываются через Stripe. Stripe может собирать, использовать и обрабатывать данные о платежах и предотвращении мошенничества в соответствии со своими собственными политиками и соглашениями. Мы можем получать ограниченную информацию, связанную с транзакциями, от Stripe, такую ​​как статус платежа, частичные данные карты, имя для выставления счета, страна и идентификаторы, необходимые для управления платежами, предотвращения мошенничества и поддержки споров.

8. Файлы cookie и аналогичные технологии
Мы можем использовать файлы cookie, пиксели, локальное хранилище, инструменты сеансов и аналогичные технологии для:
- необходимый функционал сайта
- безопасность и предотвращение мошенничества
- предпочтения и языковые настройки
- аналитика и производительность
- устранение неполадок и диагностика

Если этого требует закон, мы запросим согласие перед использованием второстепенных файлов cookie или аналогичных технологий.

9. Хранение данных
Мы храним информацию только до тех пор, пока это разумно необходимо для целей, описанных в настоящей Политике, в том числе для:
- предоставлять услуги
- завершить транзакции
- вести записи дел
- соблюдать юридические, налоговые, бухгалтерские, страховые обязательства или обязательства по разрешению споров
- обеспечивать соблюдение соглашений
- разрешать споры
- предотвращать мошенничество и злоупотребления

Сроки хранения могут варьироваться в зависимости от типа дела, применимого законодательства и оперативных потребностей. Когда информация больше не нужна, мы удалим, анонимизируем или безопасно удалим ее, если это возможно.

10. Безопасность данных
Мы используем разумные административные, технические и организационные меры безопасности, предназначенные для защиты информации от несанкционированного доступа, раскрытия, изменения или уничтожения. Однако ни один метод передачи, хранения или обеспечения безопасности не может быть полностью безопасным, и мы не можем обещать абсолютную безопасность.

11. Международные переводы
Наш веб-сайт, поставщики платформ или поставщики услуг могут хранить или обрабатывать информацию в США или других юрисдикциях. Используя Сервисы, вы признаете, что ваша информация может передаваться и обрабатываться в странах, правила защиты данных которых могут отличаться от правил вашего места жительства.

12. Ваш выбор и права
В зависимости от действующего законодательства вы можете иметь права на:
- получить доступ к определенной личной информации
- запросить исправление неточной информации
- запросить удаление определенной информации
- возражать против определенной обработки или ограничивать ее
- отозвать согласие, если обработка зависит от согласия
- запросить переносимость определенной информации
- обжаловать отказ в удовлетворении запроса, если этого требует закон

Чтобы выполнить запрос, свяжитесь с нами по телефону support@fastdisputeresolution.com. Перед обработкой вашего запроса нам может потребоваться подтвердить вашу личность и полномочия. Мы также можем отклонить или ограничить запросы, если это разрешено законом, в том числе в тех случаях, когда раскрытие информации может отрицательно повлиять на права другой стороны или противоречить юридическим обязательствам.

13. Права на конфиденциальность Калифорнии и других штатов США
Если законы о конфиденциальности в вашей юрисдикции предусматривают особые права, мы будем соблюдать эти права в применимой степени. Если вы являетесь жителем Калифорнии и к вашему запросу применяется применимый закон Калифорнии о конфиденциальности, вы можете связаться с нами, используя информацию ниже, чтобы отправить поддающийся проверке запрос.

14. Не отслеживать
Наши Сервисы могут не реагировать на все сигналы браузера «Не отслеживать». Там, где это требуется по закону, мы будем соблюдать возможность отказа, предоставляемую через юридически признанные механизмы.

15. Сторонние ссылки и услуги
Веб-сайт или Сервисы могут содержать ссылки на сторонние веб-сайты, инструменты или интеграции. Мы не несем ответственности за их политику конфиденциальности. Ознакомьтесь с их политикой, прежде чем предоставлять им информацию.

16. Конфиденциальность детей
Веб-сайт не предназначен для детей младше 13 лет. Мы сознательно не собираем личную информацию непосредственно от детей через общедоступный веб-сайт. Однако взрослые могут предоставить информацию о детях, когда это разумно необходимо для семейного дела. Если вы считаете, что мы получили информацию непосредственно от ребенка ненадлежащим образом, свяжитесь с нами, и мы ее проверим.

17. Изменения в этой политике
Мы можем время от времени обновлять настоящую Политику конфиденциальности. Пересмотренная версия вступает в силу с момента публикации, если не указана более поздняя дата.

18. Контакт
Fast Dispute Resolution
Поддержка: support@fastdisputeresolution.com

Если вы обращаетесь к нам по вопросам конфиденциальности, укажите достаточно информации, чтобы мы могли понять ваш запрос и ответить на него.`,
    "refunds": `Это переведенная версия, предоставленная для удобства. В случае любого расхождения преимущественную силу имеет английская версия.

FAST DISPUTE RESOLUTION
ПОЛИТИКА ВОЗВРАТА И ОТМЕНЫ

Последнее обновление: 19 мая 2026 г.

В настоящей Политике возврата и отмены объясняется, как Fast Dispute Resolution обрабатывает отмены, кредиты и возмещения.

1. Общее правило
Если это не требуется по закону или прямо не указано иное в письменном уведомлении о гонораре, предложении, счете или на странице оплаты для конкретного случая, сборы обычно взимаются по мере предоставления, резервирования, инициирования или выполнения услуг.

2. Невозвратные или заработанные комиссии
Следующие расходы, как правило, не подлежат возврату после оплаты или начала соответствующих работ:
- плата за открытие дела или прием/установку
- административная плата за активацию
- плата за доступ к платформе привязана к запуску дела
- гонорары за завершенные медиационные сессии
- плата за составление или подготовку документов после начала разработки
- дополнительные сборы после начала соответствующей работы или этапа
- сборы, связанные с завершенными переводами, резюме или результатами рабочего процесса, подготовленными для дела

3. Разделенные платежи и партийные платежи
Если гонорары делятся между сторонами, каждая сторона несет ответственность за часть, выделенную этой стороне, если в письменном уведомлении о деле не указано иное. Неуплата, задержка, отказ от участия или выход одной из сторон не дает автоматически другой стороне права на возмещение.

4. Дела, которые не продолжаются
Если дело не будет продолжено, любой возврат средств или кредит определяется в каждом конкретном случае и зависит от того, какие услуги, настройка, проверка или работа по делу уже были предоставлены. Мы можем, но не обязаны, производить полный возврат средств, частичный возврат средств, кредит за услуги или вообще не возвращать средства, за исключением случаев, когда это требуется по закону.

5. Отмены с вашей стороны
Вы можете прекратить использование Сервисов в любое время. Однако прекращение использования не дает вам автоматического права на возмещение за уже оказанные, предоставленные, зарезервированные или инициированные услуги.

6. Перепланирование и прямые сеансы
Если для конкретного случая предлагаются живые сеансы:
- запросы на перенос графика следует подавать как можно раньше;
- пропущенные сеансы или поздняя отмена могут рассматриваться как использованное время или невозвратное зарезервированное время;
- мы можем установить правила переоформления для конкретного случая в уведомлении о поставках или счете-фактуре.

7. Отмена или прекращение с нашей стороны
Мы можем отклонить, приостановить или прекратить предоставление Услуг, если какой-либо вопрос окажется небезопасным, неподходящим, незаконным, оскорбительным или иным образом несовместимым с нашей политикой. Если мы расторгнем соглашение до начала основной работы, мы можем, по нашему усмотрению, произвести полное или частичное возмещение или кредит. Если основная работа уже началась, мы можем удержать плату за выполненную или предоставленную работу.

8. Возвратные платежи и споры по платежам
Прежде чем оспаривать списание средств с вашим банком или эмитентом карты, свяжитесь с нами по телефону support@fastdisputeresolution.com. Подача возвратного платежа не отменяет автоматически ваши обязательства в соответствии с нашими Условиями. Мы оставляем за собой право приостановить доступ к делу, пока возвратный платеж находится на рассмотрении, а также оспаривать возвратные платежи, которые мы считаем неправомерными.

9. Способ возврата
Утвержденные возвраты средств, если таковые имеются, обычно возвращаются исходным способом оплаты, если иное не требуется по закону или не согласовано в письменной форме.

10. Тайминг
Время рассмотрения возврата зависит от случая и способа оплаты. Если возврат одобрен, время обработки также зависит от платежной системы и вашего банка.

11. Контакт
Поддержка: support@fastdisputeresolution.com`,
    "disclaimer": `Это переведенная версия, предоставленная для удобства. В случае любого расхождения преимущественную силу имеет английская версия.

FAST DISPUTE RESOLUTION
ЮРИДИЧЕСКАЯ ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ

Последнее обновление: 19 мая 2026 г.

Fast Dispute Resolution предоставляет помощь в разрешении споров, услуги посредничества и соответствующие инструменты рабочего процесса. Информация на этом веб-сайте и через наши Сервисы предоставляется только в общих информационных и вспомогательных целях.

1. Не юридическая консультация
Ничто на этом веб-сайте или в наших Сервисах не является юридической консультацией, и ничто здесь не должно рассматриваться как замена консультации квалифицированного адвоката, имеющего лицензию в соответствующей юрисдикции.

2. Нет отношений между адвокатом и клиентом
Использование вами данного веб-сайта или Услуг не создает отношений между адвокатом и клиентом или юридического представительства, если только это прямо не указано в отдельном письменном соглашении.

3. Нейтральный процесс
Там, где предоставляются посреднические услуги, посредник призван действовать как нейтральный посредник, а не защитник какой-либо стороны.

4. Нет гарантии
Мы не гарантируем:
- что дело разрешится,
- что все стороны будут участвовать,
- что любое предложение будет принято,
- что любое соглашение будет иметь силу повсюду,
- или что любой результат будет соответствовать вашим потребностям.

5. Независимый совет
Вы несете ответственность за принятие решения о том, следует ли проконсультироваться со специалистами в области права, налогообложения, бухгалтерского учета, финансов или психического здоровья, прежде чем полагаться на какое-либо соглашение, перевод, черновик или резюме.

6. Не для чрезвычайных ситуаций или небезопасных ситуаций
Не полагайтесь только на этот веб-сайт или Сервисы в чрезвычайных, небезопасных или кризисных ситуациях, включая угрозы насилия, принуждения, жестокого обращения, преследования, угрозы для детей, срочных защитных приказов или приближающихся сроков, требующих судебного разбирательства.

7. Будущие услуги
Если позже мы предложим дополнительные услуги, такие как арбитраж или другие услуги по разрешению споров, эти услуги будут описаны отдельно и могут регулироваться дополнительными условиями.

8. Контакт
Поддержка: support@fastdisputeresolution.com`,
    "cookies": `Это переведенная версия, предоставленная для удобства. В случае любого расхождения преимущественную силу имеет английская версия.

FAST DISPUTE RESOLUTION
УВЕДОМЛЕНИЕ О КУКИ-ФАЙЛЕ

Последнее обновление: 19 мая 2026 г.

Мы используем файлы cookie и аналогичные технологии для управления нашим веб-сайтом, запоминания предпочтений, улучшения производительности, обеспечения безопасности сайта и понимания того, как посетители используют наши услуги. Некоторые файлы cookie строго необходимы; другие могут использоваться для аналитики или аналогичных целей.

Если этого требует закон, мы запросим согласие перед использованием несущественных файлов cookie. Вы также можете управлять файлами cookie через настройки вашего браузера, однако отключение некоторых файлов cookie может повлиять на функциональность сайта.

Для получения дополнительной информации о том, как мы используем личную информацию, ознакомьтесь с нашей Политикой конфиденциальности.`,
  },
  "zh": {
    "terms": `本译文仅为方便起见提供。如有任何不一致，应以英文版本为准。

FAST DISPUTE RESOLUTION
服务条款

最后更新时间：2026 年 5 月 19 日

这些服务条款（“条款”）管辖您对 Fast Dispute Resolution 网站、相关页面以及通过本网站或我们的连接平台提供的任何服务、功能、内容、案例受理、通信、工作流程或工具（“服务”）的访问和使用。 “Fast Dispute Resolution”、“FDR”、“我们”、“我们”和“我们的”是指本网站和服务的运营商。 “您”是指任何访问者、用户、客户、争议方或访问或使用服务的其他人。

通过访问或使用服务，即表示您同意这些条款。如果您不同意，请勿使用服务。

1. 服务性质
Fast Dispute Resolution 提供在线争议解决便利、案件受理、工作流程管理和调解相关服务。除非在具体服务说明、订单页面或案例通知中明确说明，否则我们的服务仅是调解和争议解决便利服务。

我们不是本网站的律师事务所，使用服务本身不会产生：
(a) 律师与委托人的关系，
(b) 法律代表，
(c) 法律咨询，
(d) 超出适用法律的信托义务，或
(e) 任何结果的保证。

我们提供结构化流程、指导工作流程、中立的便利以及相关的行政支持。我们不承诺各方会达成协议。

2. 无法律建议；推荐独立建议
本网站和服务中的信息仅用于一般信息和流程简化目的。它不是法律、税务、财务、会计、心理健康或其他专业建议。

您有责任在适当的情况下获取自己的独立法律或专业建议，包括在签署任何最终协议或依赖任何翻译或摘要内容之前。

3. 中立性
在提供调解服务的情况下，调解员旨在充当中立的调解人。除非在单独的书面约定中明确说明，否则我们不主张一方反对另一方。

调解者、平台、工作流程或提议语言的存在并不意味着我们认可任何一方的立场或保证结果的公平性、可执行性或适合您的情况。

4. 自愿程序；不保证结果
争议解决和调解结果本质上是不确定的。任何和解、建议或协议草案都是自愿的，除非双方以有效且可执行的书面形式另行达成一致。

我们不保证：
(a) 另一方将参加，
(b) 任何事情都会解决，
(c) 任何草案都会被接受，
(d) 任何协议将在每个司法管辖区强制执行，
(e) 法院将批准或通过任何协议，或
(f) 任何翻译、摘要或生成的内容都没有错误。

5. 不适合或紧急事项
这些服务不能替代紧急服务、紧急法院救济、执法或危机干预。如果您的问题涉及直接危险、威胁、胁迫、跟踪、虐待、危害儿童、紧急保护令、刑事指控、迫在眉睫的提交截止日期或其他需要立即专业干预的情况，请勿仅依赖服务。

对于我们自行判断不适合在线调解或基于平台的协助的任何事项，我们可以拒绝、暂停或终止服务。

6. 资格和权限
您代表：
(a) 您已年满 18 岁，
(b) 您具有签订具有约束力的协议的法律能力，
(c) 您提供的任何信息都是准确且最新的，
(d) 如果代表企业或组织，您有权约束该实体，并且
(e) 您对服务的使用符合适用法律。

7. 帐户、访问和安全
您可能需要创建帐户或通过链接、电子邮件或平台工作流程访问案例。您有责任维护您的登录信息、设备访问和案例访问链接的机密性，以及通过您的帐户或访问凭据进行的所有活动的机密性。

如果涉及您的帐户或案例的任何疑似未经授权的访问或安全事件，您必须立即通知我们。

8. 平台和第三方服务
部分或全部服务可能通过第三方或连接系统提供，包括案例管理、消息传递、托管、支付、文档或通信工具。这可能包括用于支付处理的 ArtemisChat 平台和 Stripe。

第三方服务受其自身条款、可用性和限制的约束。除非法律要求，否则我们不对第三方提供商造成的中断、中断、延迟或故障负责。

9. 付款方式
费用、定价结构、付款分割、补充费用和付款时间可能会因服务或案例而异，并将在请求或收取付款之前显示。

通过付款，您授权我们和我们的付款处理商通过您提供的付款方式收取授权费用、税费（如果适用）以及任何批准的补充费用。

您同意除非出于正当理由善意，否则不会发起退款或付款纠纷。如果提出退款或付款争议，我们可能会在审核此事期间暂停案件访问或服务。

10. 退款和取消
退款和取消规则受我们的退款和取消政策管辖，该政策通过引用并入本条款。

11. 电子通讯和记录
您同意以电子方式接收通信，包括通过电子邮件、平台内通知、短信（如果启用）或网站通知。您同意电子通信、记录、确认和签名可以在法律允许的最大范围内满足书面和签名的法律要求。

12. 用户内容
您可以提供陈述、答案、上传、草稿、注释、消息、姓名、联系方式、案件事实、儿童相关详细信息、财务详细信息和其他内容（“用户内容”）。

您保留您的用户内容的所有权，但您授予我们非排他性、全球性、免版税的许可，以托管、存储、使用、处理、复制、传输、显示、翻译、总结和以其他合理必要方式使用用户内容，以提供、保护、改进和管理服务、执行我们的权利、遵守法律和维护记录。

您对您的用户内容的合法性、准确性和适当性承担全部责任。

13. 禁止行为
你不可以：
(a) 提供虚假、误导性或欺诈性信息；
(b) 冒充他人；
(c) 上传恶意代码或尝试未经授权的访问；
(d) 骚扰、威胁或虐待任何人；
(e) 将服务用于非法、欺骗或恶意目的；
(f) 未经授权抓取、复制、逆向工程或利用服务；或者
(g) 干扰服务的安全性、完整性或正常运行。

14. 保密和隐私
我们采取合理措施保护机密信息，但我们不能保证绝对的机密性或安全性。案件信息可能会根据需要与另一方、调解员、我们的服务提供商和其他人共享，以提供服务或遵守法律。

我们的隐私政策解释了我们如何收集、使用、披露和保护信息。

15. 知识产权
我们提供的服务、网站、设计、品牌、徽标、工作流程、内容、文本、图形、代码和材料归我们或我们的许可方所有，并受法律保护。除您的用户内容和允许的个人使用外，未经事先书面同意，您不得复制、修改、分发、出售、许可或利用它们。

16. 免责声明
在法律允许的最大范围内，服务按“原样”和“可用”提供，不提供任何类型的明示或暗示的保证，包括适销性、特定用途的适用性、不侵权、准确性、安静的保证享受，或者服务不会中断、没有错误或安全。

17. 责任限制
在法律允许的最大范围内，FAST DISPUTE RESOLUTION 及其所有者、附属公司、承包商、调解员、代理、许可方和服务提供商不对任何间接、附带、后果性、特殊、惩戒性或惩罚性损害承担责任，或者因服务而产生或与之相关的任何数据、利润、收入、商誉、商业机会或协议的损失，即使已被告知这种可能性。

在法律允许的最大范围内，我们对由服务引起的或与服务相关的所有索赔的总责任不会超过以下两者中的较高者： (A) 您在引发索赔的事件发生前 3 个月内为引发索赔的特定服务向我们支付的金额（以较高者为准）索赔；或 (B) US$250。

某些司法管辖区不允许某些限制，因此本节的部分内容可能不适用于您。

18. 保障
您同意为 Fast Dispute Resolution 及其所有者、附属公司、承包商、调解员、代理人、许可方和服务提供商辩护、赔偿并使其免受因以下原因引起或与之相关的索赔、责任、损害、损失、判决、成本和费用（包括合理的律师费）：
(a) 您对服务的使用，
(b) 您的用户内容，
(c) 您违反这些条款，
(d) 您的违法行为，或
(e) 您与其他用户或一方的争议。

19. 暂停和终止
如果我们认为有必要保护服务、用户、平台完整性、法律合规性、安全或我们的商业利益，我们可以随时暂停、限制或终止对服务的访问，无论是否发出通知。

20. 适用法律和管辖地
除非强制性法律另有要求，否则这些条款受加利福尼亚州法律管辖，不考虑法律冲突规则。

因这些条款或网站引起的或与之相关的任何不可仲裁的争议应专门提交位于加利福尼亚州洛杉矶县的州法院或联邦法院，并且您同意接受其管辖。

21. 服务或条款的变更
我们可能会不时修改这些条款或服务。更新版本将在发布后生效，除非指定较晚的日期。您在更新后继续使用服务即表示您接受修订后的条款。

22. 接触
Fast Dispute Resolution
技术支持：support@fastdisputeresolution.com

如果您不同意这些条款，请勿使用服务。`,
    "privacy": `本译文仅为方便起见提供。如有任何不一致，应以英文版本为准。

FAST DISPUTE RESOLUTION
隐私政策

最后更新时间：2026 年 5 月 19 日

本隐私政策解释了 Fast Dispute Resolution（“FDR”、“我们”、“我们的”）如何通过本网站以及我们的连接服务和平台工作流程收集、使用、披露、存储和保护个人信息。

通过使用网站或服务，即表示您承认本隐私政策。

1. 范围
本隐私政策适用于：
(a) 本网站的访问者，
(b) 联系我们的人，
(c) 发起或参与案件的人，
(d) 争议各方，
(e) 潜在客户，
(f) 提交与案件有关的信息的人员，以及
(g) 通过连接平台（包括 ArtemisChat）提供的相关工作流程的用户。

2. 我们收集的信息
我们可能会收集以下类别的信息：

A. 联系方式和身份信息
- 姓名
- 电子邮件
- 电话号码
- 邮寄地址
- 组织名称
- 用户帐户标识符

B. 案件及争议信息
- 争议类型
- 陈述和描述
- 关系细节
- 家庭相关细节
- 与儿童相关的详细信息
- 日程安排偏好
- 沟通偏好
- 上传的文件和消息
- 要求的结果
- 协议、草稿和编辑

C. 财务和付款信息
- 帐单详情
- 交易记录
- 付款状态
- 部分付款/分期付款数据
- 补充费用信息
支付卡数据由 Stripe 处理，我们并不完全存储。

D. 技术和使用信息
- IP地址
- 浏览器/设备信息
- 操作系统
- 从 IP 推断出的大概位置
- 浏览的页面
- 点击和互动
- cookie 和类似技术
- 日志、诊断和安全事件

E. 支持信息
- 客户支持查询
- 一致
- 问题报告

F. 儿童相关数据
由于家庭纠纷可能涉及儿童监护权、赡养费、学业、健康或养育问题，因此使用服务的成年人可能会提供与儿童有关的信息作为案件的一部分。该网站和服务不针对儿童，我们不会有意通过面向公众的界面直接从儿童那里收集信息。

3. 信息来源
我们收集信息：
- 直接来自您
- 来自争议的另一方
- 来自授权代表
- 来自连接的平台工作流程
- 来自支付处理商和服务提供商
- 从您使用网站或服务时自动产生

4. 我们如何使用信息
我们可能会使用信息来：
- 提供和管理服务
- 打开和管理案例
- 促进沟通和争议解决
- 验证身份和权限
- 处理付款并防止欺诈
- 生成草稿、摘要、翻译或工作流程输出
- 提供客户支持
- 改进、保护服务并排除服务故障
- 执行我们的权利和政策
- 遵守法律义务
- 维护业务和案件记录

5. 法律依据（如适用）
根据您所在的位置和适用的法律，我们可能会根据以下条件处理个人信息：
- 您的同意
- 履行合同或签订合同之前要求的步骤
- 我们在提供、保护和改进服务方面的合法利益
- 遵守法律义务
- 在法律允许的情况下保护切身利益

6. 我们如何共享信息
我们可能会披露信息：
- 如果流程需要，向案件中的另一方或多方提供
- 致调解员、承包商和处理案件的支持人员
- 托管、保护、处理或支持服务的服务提供商
- 支付处理商，例如 Stripe
- 专业顾问、保险公司或审计师
- 向法院、监管机构、执法部门或法律要求的其他人提供
- 与合并、出售、融资、重组或资产转让有关
- 经您同意或按照您的指示

我们不会为了金钱而出售个人信息。

7. Stripe 和付款
付款通过 Stripe 处理。 Stripe 可以根据自己的政策和协议收集、使用和处理支付和防欺诈数据。我们可能会从 Stripe 收到有限的交易相关信息，例如付款状态、部分卡详细信息、帐单名称、国家/地区以及管理付款、防止欺诈和支持争议所需的标识符。

8. Cookie 和类似技术
我们可能将 Cookie、像素、本地存储、会话工具和类似技术用于：
- 基本网站功能
- 安全和欺诈预防
- 首选项和语言设置
- 分析和性能
- 故障排除和诊断

根据法律要求，我们将在使用非必要的 cookie 或类似技术之前请求同意。

9. 数据保留
我们仅在本政策所述目的合理必要的时间内保留信息，包括：
- 提供服务
- 完成交易
- 维护案件记录
- 遵守法律、税务、会计、保险或争议解决义务
- 执行协议
- 解决纠纷
- 防止欺诈和滥用

保留期限可能会根据案件类型、适用法律和运营需求而有所不同。当不再需要信息时，我们将在可行的情况下将其删除、匿名或安全处置。

10. 数据安全
我们使用合理的管理、技术和组织保障措施来保护信息免遭未经授权的访问、披露、更改或破坏。然而，没有一种传输、存储或安全方法能够保证完全安全，我们也不能保证绝对安全。

11. 国际转账
我们的网站、平台提供商或服务提供商可能会在美国或其他司法管辖区存储或处理信息。通过使用服务，您承认您的信息可能会被传输到数据保护规则与您居住地不同的国家/地区并在这些国家/地区进行处理。

12. 您的选择和权利
根据适用法律，您可能有权：
- 访问某些个人信息
- 要求更正不准确的信息
- 请求删除某些信息
- 反对或限制某些处理
- 在处理取决于同意的情况下撤回同意
- 请求某些信息的可移植性
- 根据法律要求对拒绝请求提出上诉

要提出请求，请通过 support@fastdisputeresolution.com 联系我们。在处理您的请求之前，我们可能需要验证您的身份和权限。在法律允许的情况下，我们也可能拒绝或限制请求，包括披露会对另一方的权利产生不利影响或与法律义务发生冲突的情况。

13. 加利福尼亚州和美国其他州的隐私权
如果您所在司法管辖区的隐私法规定了特定权利，我们将在适用的范围内尊重这些权利。如果您是加利福尼亚州居民并且适用的加利福尼亚州隐私法适用于您的请求，您可以使用以下信息与我们联系以提交可验证的请求。

14. 请勿追踪
我们的服务可能不会响应所有基于浏览器的“请勿跟踪”信号。如果法律要求，我们将尊重通过法律认可的机制提供的退出选择。

15. 第三方链接和服务
网站或服务可能包含第三方网站、工具或集成的链接。我们不对他们的隐私做法负责。在向他们提供信息之前先查看他们的政策。

16. 儿童隐私
该网站不针对 13 岁以下儿童。我们不会故意通过面向公众的网站直接收集儿童的个人信息。但是，在家庭案件合理必要时，成年人可以提交与儿童相关的信息。如果您认为我们以不适当的方式直接从儿童那里收集信息，请联系我们，我们将进行审核。

17. 本政策的变更
我们可能会不时更新本隐私政策。除非注明较晚的日期，否则修订版本一经发布即生效。

18. 接触
Fast Dispute Resolution
技术支持：support@fastdisputeresolution.com

如果您就隐私问题联系我们，请提供足够的信息，以便我们理解并回应您的请求。`,
    "refunds": `本译文仅为方便起见提供。如有任何不一致，应以英文版本为准。

FAST DISPUTE RESOLUTION
退款和取消政策

最后更新时间：2026 年 5 月 19 日

本退款和取消政策解释了 Fast Dispute Resolution 如何处理取消、积分和退款。

1. 通则
除非法律要求或在书面费用通知、报价、发票或特定情况的付款页面中另有明确规定，否则费用通常是在提供、保留、启动或执行服务时赚取的。

2. 不可退还或赚取的费用
以下费用一旦收费或相关工作开始后通常不可退款：
- 开案或受理/开办费
- 行政启动费
- 平台接入费与案例启动相关
- 完成调解会议的费用
- 起草开始后的起草或文件准备费
- 相关工作或里程碑开始后的补充费用
- 与为案件准备的已完成翻译、摘要或生成的工作流程输出相关的费用

3. 分割付款和特定当事人付款
如果费用在各方之间分摊，则各方负责分配给该方的部分，除非书面案件通知另有说明。一方不付款、延迟、拒绝参加或退出并不自动使另一方有权获得退款。

4. 不予处理的案件
如果案件没有继续进行，任何退款或抵免将根据具体情况确定，并取决于已提供的服务、设置、审核或案件工作。我们可以但不要求全额退款、部分退款、服务积分或根本不退款，法律要求的情况除外。

5. 您取消
您可以随时停止使用服务。但是，停止使用并不自动使您有权获得已交付、可用、预订或启动的服务的退款。

6. 重新安排和现场会议
如果针对特定案例提供现场会议：
- 应尽早提出重新安排时间的请求；
- 错过会议或延迟取消可能被视为已使用时间或不可退款的预留时间；
- 我们可以在调度通知或发票中设置特定情况的重新调度规则。

7. 我们取消或终止
如果某件事看起来不安全、不合适、非法、滥用或与我们的政策不一致，我们可能会拒绝、暂停或终止服务。如果我们在实质性工作开始之前终止，我们可以自行决定全额或部分退款或抵免。如果实质性工作已经开始，我们可能会保留已完成或提供的工作的费用。

8. 退款和付款纠纷
在与您的银行或发卡机构对费用产生争议之前，请通过 support@fastdisputeresolution.com 联系我们。提出退款并不会自动取消您在我们的条款下的义务。我们保留在审核退款期间暂停案例访问以及对我们认为不当的退款提出异议的权利。

9. 退款方式
批准的退款（如有）通常会退回到原来的付款方式，除非法律另有要求或书面同意。

10. 定时
退款审核时间因案件和付款方式而异。如果退款获得批准，处理时间还取决于付款处理商和您的银行。

11. 接触
技术支持：support@fastdisputeresolution.com`,
    "disclaimer": `本译文仅为方便起见提供。如有任何不一致，应以英文版本为准。

FAST DISPUTE RESOLUTION
法律免责声明

最后更新时间：2026 年 5 月 19 日

Fast Dispute Resolution 提供纠纷解决便利、调解相关服务以及相关工作流程工具。本网站上以及通过我们的服务提供的信息仅用于一般信息和便利目的。

1. 不是法律建议
本网站或我们的服务中的任何内容都不是法律建议，并且此处的任何内容均不应被视为替代在适当司法管辖区获得许可的合格律师的建议。

2. 无律师与客户关系
除非单独的书面约定明确说明，否则您对本网站或服务的使用不会建立律师-客户关系或法律代表。

3. 中立过程
在提供调解服务的情况下，调解员旨在充当中立的调解人，而不是任何一方的倡导者。

4. 无保证
我们不保证：
- 案件将会得到解决，
- 所有各方都将参与，
- 任何建议都会被接受，
- 任何协议都将在任何地方强制执行，
- 或者任何结果都适合您的需求。

5. 独立建议
在依赖任何协议、翻译、草稿或摘要之前，您有责任决定是否咨询法律、税务、会计、财务或心理健康专业人士。

6. 不适用于紧急情况或不安全情况
请勿在紧急、不安全或危机情况下仅依赖本网站或服务，包括暴力威胁、胁迫、虐待、跟踪、危及儿童、紧急保护令或需要法院采取行动的紧迫期限。

7. 未来服务
如果我们稍后提供仲裁或其他争议解决服务等附加服务，这些服务将单独描述，并可能受附加条款的约束。

8. 接触
技术支持：support@fastdisputeresolution.com`,
    "cookies": `本译文仅为方便起见提供。如有任何不一致，应以英文版本为准。

FAST DISPUTE RESOLUTION
Cookie 通知

最后更新时间：2026 年 5 月 19 日

我们使用 cookie 和类似技术来运营我们的网站、记住偏好、提高性能、保护网站并了解访问者如何使用我们的服务。有些 cookie 是绝对必要的；其他可用于分析或类似目的。

根据法律要求，我们将在使用非必要 cookie 之前请求同意。您还可以通过浏览器设置管理 cookie，但禁用某些 cookie 可能会影响网站功能。

有关我们如何使用个人信息的更多信息，请参阅我们的隐私政策。`,
  },
  "hi": {
    "terms": `यह सुविधा के लिए प्रदान किया गया अनुवादित संस्करण है। किसी भी विसंगति की स्थिति में, अंग्रेज़ी संस्करण प्रभावी होगा।

FAST DISPUTE RESOLUTION
सेवा की शर्तें

अंतिम अद्यतन: 19 मई, 2026

ये सेवा की शर्तें ("शर्तें") Fast Dispute Resolution वेबसाइट, संबंधित पृष्ठों और इस वेबसाइट या हमारे कनेक्टेड प्लेटफ़ॉर्म ("सेवाएं") के माध्यम से उपलब्ध कराई गई किसी भी सेवा, सुविधाओं, सामग्री, केस सेवन, संचार, वर्कफ़्लो या टूल तक आपकी पहुंच और उपयोग को नियंत्रित करती हैं। "Fast Dispute Resolution," "FDR," "हम," "हम," और "हमारा" का अर्थ इस वेबसाइट और सेवाओं के संचालक से है। "आप" का अर्थ है कोई भी आगंतुक, उपयोगकर्ता, ग्राहक, विवाद का पक्ष, या सेवाओं तक पहुंचने या उपयोग करने वाला अन्य व्यक्ति।

सेवाओं तक पहुंच या उपयोग करके, आप इन शर्तों से सहमत होते हैं। यदि आप सहमत नहीं हैं, तो सेवाओं का उपयोग न करें।

1. सेवाओं की प्रकृति
Fast Dispute Resolution ऑनलाइन विवाद-समाधान सुविधा, केस इंटेक, वर्कफ़्लो प्रबंधन और मध्यस्थता से संबंधित सेवाएं प्रदान करता है। जब तक किसी विशिष्ट सेवा विवरण, आदेश पृष्ठ, या केस नोटिस में स्पष्ट रूप से नहीं कहा गया हो, हमारी सेवाएँ केवल मध्यस्थता और विवाद-समाधान सुविधा सेवाएँ हैं।

हम इस वेबसाइट के माध्यम से एक कानूनी फर्म नहीं हैं, और सेवाओं का उपयोग स्वयं निर्मित नहीं होता है:
(a) एक वकील-ग्राहक संबंध,
(b) कानूनी प्रतिनिधित्व,
(c) कानूनी सलाह,
(d) लागू कानून से परे एक प्रत्ययी कर्तव्य, या
(e) किसी भी परिणाम की गारंटी.

हम संरचित प्रक्रियाएं, निर्देशित वर्कफ़्लो, तटस्थ सुविधा और संबंधित प्रशासनिक सहायता प्रदान करते हैं। हम यह वादा नहीं करते कि पार्टियां समझौते पर पहुंचेंगी।

2. No Legal Advice; स्वतंत्र सलाह अनुशंसित
इस वेबसाइट और सेवाओं पर जानकारी केवल सामान्य सूचनात्मक और प्रक्रिया-सुविधा उद्देश्यों के लिए है। यह कानूनी, कर, वित्तीय, लेखांकन, मानसिक-स्वास्थ्य, या अन्य पेशेवर सलाह नहीं है।

जहां उपयुक्त हो, वहां अपनी स्वतंत्र कानूनी या पेशेवर सलाह प्राप्त करने के लिए आप जिम्मेदार हैं, जिसमें किसी अंतिम समझौते पर हस्ताक्षर करने से पहले या किसी अनुवादित या सारांशित सामग्री पर भरोसा करना शामिल है।

3. तटस्थता
जहां मध्यस्थता सेवाएं प्रदान की जाती हैं, मध्यस्थ का उद्देश्य एक तटस्थ सुविधाकर्ता के रूप में कार्य करना होता है। जब तक कि एक अलग लिखित अनुबंध में स्पष्ट रूप से कहा न गया हो, हम एक पक्ष के खिलाफ दूसरे पक्ष की वकालत नहीं करते हैं।

मध्यस्थ, मंच, वर्कफ़्लो, या प्रस्तावित भाषा के अस्तित्व का मतलब यह नहीं है कि हम किसी भी पार्टी की स्थिति का समर्थन करते हैं या आपकी परिस्थितियों के लिए निष्पक्षता, प्रवर्तनीयता या परिणाम की उपयुक्तता की गारंटी देते हैं।

4. स्वैच्छिक प्रक्रिया; परिणाम की कोई गारंटी नहीं
विवाद-समाधान और मध्यस्थता के परिणाम स्वाभाविक रूप से अनिश्चित हैं। कोई भी समझौता, प्रस्ताव, या मसौदा समझौता स्वैच्छिक है जब तक कि पक्ष वैध और लागू करने योग्य लिखित रूप में अन्यथा सहमत न हों।

हम गारंटी नहीं देते:
(a) कि दूसरी पार्टी भाग लेगी,
(b) कि कोई भी मामला सुलझ जाएगा,
(c) कि कोई भी ड्राफ्ट स्वीकार किया जायेगा,
(d) कि कोई भी समझौता हर क्षेत्राधिकार में लागू होगा,
(e) कि कोई अदालत किसी समझौते को मंजूरी देगी या अपनाएगी, या
(f) कोई भी अनुवाद, सारांश या उत्पन्न सामग्री त्रुटि-मुक्त है।

5. अनुपयुक्त या आपातकालीन मामले
सेवाएँ आपातकालीन सेवाओं, तत्काल अदालती राहत, कानून प्रवर्तन, या संकट हस्तक्षेप का विकल्प नहीं हैं। यदि आपके मामले में तत्काल खतरा, धमकी, जबरदस्ती, पीछा करना, दुर्व्यवहार, बच्चे को खतरे में डालना, तत्काल सुरक्षात्मक आदेश, आपराधिक आरोप, आसन्न फाइलिंग समय सीमा, या तत्काल पेशेवर हस्तक्षेप की आवश्यकता वाली अन्य परिस्थितियां शामिल हैं, तो केवल सेवाओं पर भरोसा न करें।

हम अपने विवेक से, ऑनलाइन मध्यस्थता या प्लेटफ़ॉर्म-आधारित सुविधा के लिए अनुपयुक्त होने वाले किसी भी मामले के लिए सेवाओं को अस्वीकार, निलंबित या समाप्त कर सकते हैं।

6. पात्रता एवं अधिकार
आप इसका प्रतिनिधित्व करते हैं:
(a) आपकी आयु कम से कम 18 वर्ष है,
(b) आपके पास बाध्यकारी समझौते करने की कानूनी क्षमता है,
(c) आपके द्वारा प्रदान की गई कोई भी जानकारी सटीक और नवीनतम है,
(d) यदि आप किसी व्यवसाय या संगठन के लिए काम कर रहे हैं, तो आपके पास उस इकाई को बाध्य करने का अधिकार है, और
(e) सेवाओं का आपका उपयोग लागू कानून के अनुरूप है।

7. खाते, पहुंच और सुरक्षा
आपको एक खाता बनाने या किसी लिंक, ईमेल या प्लेटफ़ॉर्म वर्कफ़्लो के माध्यम से किसी मामले तक पहुंचने की आवश्यकता हो सकती है। आप अपनी लॉगिन जानकारी, डिवाइस एक्सेस और केस एक्सेस लिंक की गोपनीयता बनाए रखने और अपने खाते या एक्सेस क्रेडेंशियल के माध्यम से होने वाली सभी गतिविधियों के लिए जिम्मेदार हैं।

आपको अपने खाते या मामले से जुड़ी किसी भी संदिग्ध अनधिकृत पहुंच या सुरक्षा घटना के बारे में हमें तुरंत सूचित करना होगा।

8. प्लेटफ़ॉर्म और तृतीय-पक्ष सेवाएँ
कुछ या सभी सेवाएँ तृतीय-पक्ष या कनेक्टेड सिस्टम के माध्यम से वितरित की जा सकती हैं, जिनमें केस-प्रबंधन, संदेश, होस्टिंग, भुगतान, दस्तावेज़ या संचार उपकरण शामिल हैं। इसमें भुगतान प्रसंस्करण के लिए ArtemisChat प्लेटफ़ॉर्म और Stripe शामिल हो सकते हैं।

तृतीय-पक्ष सेवाएँ उनकी अपनी शर्तों, उपलब्धता और सीमाओं के अधीन हैं। हम कानून द्वारा अपेक्षित को छोड़कर, तृतीय-पक्ष प्रदाताओं के कारण होने वाली रुकावटों, रुकावटों, देरी या विफलताओं के लिए ज़िम्मेदार नहीं हैं।

9. भुगतान
शुल्क, मूल्य निर्धारण संरचना, भुगतान विभाजन, पूरक शुल्क और भुगतान का समय सेवा या मामले के अनुसार भिन्न हो सकता है और भुगतान का अनुरोध या शुल्क लेने से पहले दिखाया जाएगा।

भुगतान करके, आप हमें और हमारे भुगतान प्रोसेसर को अधिकृत शुल्क, यदि लागू हो तो कर और किसी भी स्वीकृत पूरक शुल्क के लिए आपके द्वारा प्रदान की गई भुगतान विधि चार्ज करने के लिए अधिकृत करते हैं।

आप सहमत हैं कि वैध कारणों से सद्भावना के अलावा चार्जबैक या भुगतान विवाद शुरू नहीं करेंगे। यदि चार्जबैक या भुगतान विवाद दायर किया जाता है, तो मामले की समीक्षा के दौरान हम केस एक्सेस या सेवाओं को निलंबित कर सकते हैं।

10. धनवापसी और रद्दीकरण
धनवापसी और रद्दीकरण नियम हमारी धनवापसी और रद्दीकरण नीति द्वारा शासित होते हैं, जिसे संदर्भ द्वारा इन शर्तों में शामिल किया गया है।

11. इलेक्ट्रॉनिक संचार और रिकॉर्ड
आप इलेक्ट्रॉनिक रूप से संचार प्राप्त करने के लिए सहमति देते हैं, जिसमें ईमेल, इन-प्लेटफ़ॉर्म नोटिस, टेक्स्ट संदेश (यदि सक्षम हो), या वेबसाइट नोटिस शामिल है। आप सहमत हैं कि इलेक्ट्रॉनिक संचार, रिकॉर्ड, पावती और हस्ताक्षर कानून द्वारा अनुमत पूर्ण सीमा तक लेखन और हस्ताक्षर के लिए कानूनी आवश्यकताओं को पूरा कर सकते हैं।

12. उपयोगकर्ता सामग्री
आप विवरण, उत्तर, अपलोड, ड्राफ्ट, नोट्स, संदेश, नाम, संपर्क विवरण, मामले के तथ्य, बच्चे से संबंधित विवरण, वित्तीय विवरण और अन्य सामग्री ("उपयोगकर्ता सामग्री") प्रदान कर सकते हैं।

आप अपनी उपयोगकर्ता सामग्री का स्वामित्व बरकरार रखते हैं, लेकिन आप हमें सेवाओं को प्रदान करने, सुरक्षित करने, सुधारने और प्रशासित करने, हमारे अधिकारों को लागू करने, कानून का अनुपालन करने और रिकॉर्ड बनाए रखने के लिए उचित रूप से आवश्यक उपयोगकर्ता सामग्री को होस्ट करने, स्टोर करने, उपयोग करने, संसाधित करने, पुनरुत्पादित करने, प्रसारित करने, प्रदर्शित करने, अनुवाद करने, सारांशित करने और अन्यथा उपयोग करने के लिए एक गैर-अनन्य, विश्वव्यापी, रॉयल्टी-मुक्त लाइसेंस प्रदान करते हैं।

आप अपनी उपयोगकर्ता सामग्री की वैधता, सटीकता और उपयुक्तता के लिए पूरी तरह जिम्मेदार हैं।

13. निषिद्ध आचरण
आप न कर सकें:
(a) गलत, भ्रामक या कपटपूर्ण जानकारी प्रदान करना;
(b) किसी अन्य व्यक्ति का प्रतिरूपण करना;
(c) दुर्भावनापूर्ण कोड अपलोड करें या अनधिकृत पहुंच का प्रयास करें;
(d) किसी व्यक्ति को परेशान करना, धमकी देना या दुर्व्यवहार करना;
(e) गैरकानूनी, भ्रामक, या दुर्भावनापूर्ण उद्देश्यों के लिए सेवाओं का उपयोग करें;
(f) प्राधिकरण के बिना सेवाओं को स्क्रैप करना, कॉपी करना, रिवर्स इंजीनियर करना या उनका दोहन करना; या
(g) सेवाओं की सुरक्षा, अखंडता या सामान्य संचालन में हस्तक्षेप करें।

14. गोपनीयता और निजता
हम गोपनीय जानकारी की सुरक्षा के लिए उचित उपाय करते हैं, लेकिन हम पूर्ण गोपनीयता या सुरक्षा की गारंटी नहीं दे सकते। सेवाएँ प्रदान करने या कानून का अनुपालन करने के लिए आवश्यक होने पर मामले की जानकारी दूसरे पक्ष, मध्यस्थ, हमारे सेवा प्रदाताओं और अन्य लोगों के साथ साझा की जा सकती है।

हमारी गोपनीयता नीति बताती है कि हम जानकारी कैसे एकत्रित, उपयोग, प्रकटीकरण और सुरक्षा करते हैं।

15. बौद्धिक संपदा
हमारे द्वारा प्रदान की गई सेवाएँ, वेबसाइट, डिज़ाइन, ब्रांडिंग, लोगो, वर्कफ़्लो, सामग्री, पाठ, ग्राफिक्स, कोड और सामग्री हमारे या हमारे लाइसेंसकर्ताओं के स्वामित्व में हैं और कानून द्वारा संरक्षित हैं। आपकी उपयोगकर्ता सामग्री और अनुमत व्यक्तिगत उपयोग को छोड़कर, आप पूर्व लिखित सहमति के बिना उनकी प्रतिलिपि, संशोधन, वितरण, बिक्री, लाइसेंस या शोषण नहीं कर सकते हैं।

16. वारंटियों का अस्वीकरण
कानून द्वारा अनुमत अधिकतम सीमा तक, सेवाएँ "जैसी है" और "जैसी उपलब्ध हैं" प्रदान की जाती हैं, बिना किसी प्रकार की स्पष्ट या निहित वारंटी के, जिसमें व्यापारिकता, किसी विशेष उद्देश्य के लिए उपयुक्तता, गैर-उल्लंघन, सटीकता, शांति की वारंटी शामिल हैं। आनंद, या कि सेवाएँ निर्बाध, त्रुटि-मुक्त, या सुरक्षित होंगी।

17. दायित्व की सीमा
कानून द्वारा अनुमत अधिकतम सीमा तक, FAST DISPUTE RESOLUTION और इसके मालिक, सहयोगी, ठेकेदार, मध्यस्थ, एजेंट, लाइसेंसकर्ता और सेवा प्रदाता किसी भी अप्रत्यक्ष, आकस्मिक, परिणामी, विशेष के लिए उत्तरदायी नहीं होंगे। अनुकरणीय, या दंडात्मक क्षति, या सेवाओं से उत्पन्न या उससे संबंधित डेटा, लाभ, राजस्व, सद्भावना, व्यावसायिक अवसर, या समझौतों की किसी भी हानि के लिए, भले ही संभावना की सलाह दी गई हो।

कानून द्वारा अनुमत अधिकतम सीमा तक, सेवाओं से उत्पन्न या संबंधित सभी दावों के लिए हमारी कुल देनदारी इससे अधिक नहीं होगी: (ए) घटना से पहले 3 महीने के दौरान दावे को जन्म देने वाली विशिष्ट सेवा के लिए आपने हमें कितनी राशि का भुगतान किया है दावे को जन्म देना; या (बी) US$250।

कुछ क्षेत्राधिकार कुछ सीमाओं की अनुमति नहीं देते हैं, इसलिए इस अनुभाग के कुछ भाग आप पर लागू नहीं हो सकते हैं।

18. प्रीमियम
आप Fast Dispute Resolution और उसके मालिकों, सहयोगियों, ठेकेदारों, मध्यस्थों, एजेंटों, लाइसेंसदाताओं और सेवा प्रदाताओं को दावों, देनदारियों, क्षति, हानि, निर्णय, लागत और व्यय (उचित वकील की फीस सहित) से बचाव, क्षतिपूर्ति और हानिरहित रखने के लिए सहमत हैं:
(a) सेवाओं का आपका उपयोग,
(b) आपकी उपयोगकर्ता सामग्री,
(c) आपके द्वारा इन शर्तों का उल्लंघन,
(d) आपके द्वारा कानून का उल्लंघन, या
(e) किसी अन्य उपयोगकर्ता या पार्टी के साथ आपका विवाद।

19. निलंबन एवं समाप्ति
यदि हमें लगता है कि सेवाओं, उपयोगकर्ताओं, प्लेटफ़ॉर्म की अखंडता, कानूनी अनुपालन, सुरक्षा, या हमारे व्यावसायिक हितों की रक्षा के लिए यह आवश्यक है, तो हम किसी भी समय, नोटिस देकर या बिना किसी सूचना के सेवाओं तक पहुंच को निलंबित, सीमित या समाप्त कर सकते हैं।

20. शासी कानून और स्थान
सिवाय इसके कि जहां अनिवार्य कानून की अन्यथा आवश्यकता हो, ये शर्तें कानून के टकराव के नियमों की परवाह किए बिना, कैलिफोर्निया राज्य के कानूनों द्वारा शासित होती हैं।

इन शर्तों या वेबसाइट से उत्पन्न या संबंधित कोई भी गैर-मध्यस्थता योग्य विवाद विशेष रूप से लॉस एंजिल्स काउंटी, कैलिफ़ोर्निया में स्थित राज्य या संघीय अदालतों में लाया जाएगा, और आप उनके क्षेत्राधिकार पर सहमति देते हैं।

21. सेवाओं या शर्तों में परिवर्तन
हम समय-समय पर इन शर्तों या सेवाओं को संशोधित कर सकते हैं। अद्यतन संस्करण पोस्ट किए जाने पर प्रभावी होगा, जब तक कि कोई बाद की तारीख न बताई गई हो। अपडेट के बाद आपके द्वारा सेवाओं का उपयोग जारी रखने का मतलब है कि आप संशोधित शर्तों को स्वीकार करते हैं।

22. संपर्क
Fast Dispute Resolution
समर्थन: support@fastdisputeresolution.com

यदि आप इन शर्तों से सहमत नहीं हैं, तो सेवाओं का उपयोग न करें।`,
    "privacy": `यह सुविधा के लिए प्रदान किया गया अनुवादित संस्करण है। किसी भी विसंगति की स्थिति में, अंग्रेज़ी संस्करण प्रभावी होगा।

FAST DISPUTE RESOLUTION
गोपनीयता नीति

अंतिम अद्यतन: 19 मई, 2026

यह गोपनीयता नीति बताती है कि कैसे Fast Dispute Resolution ("FDR," "हम," "हमें," "हमारा") इस वेबसाइट और हमारी कनेक्टेड सेवाओं और प्लेटफ़ॉर्म वर्कफ़्लो के माध्यम से व्यक्तिगत जानकारी एकत्र, उपयोग, प्रकटीकरण, भंडारण और सुरक्षा करता है।

वेबसाइट या सेवाओं का उपयोग करके, आप इस गोपनीयता नीति को स्वीकार करते हैं।

1. दायरा
यह गोपनीयता नीति इन पर लागू होती है:
(a) इस वेबसाइट पर आने वाले विज़िटर,
(b) जो लोग हमसे संपर्क करते हैं,
(c) जो लोग किसी मामले को शुरू करते हैं या उसमें भाग लेते हैं,
(d) विवाद के पक्षकार,
(e) संभावित ग्राहक,
(f) वे व्यक्ति जिनकी जानकारी किसी मामले के संबंध में प्रस्तुत की गई है, और
(g) संबंधित वर्कफ़्लो के उपयोगकर्ताओं को ArtemisChat सहित कनेक्टेड प्लेटफ़ॉर्म के माध्यम से वितरित किया जाता है।

2. जानकारी हम एकत्रित करते हैं
हम निम्नलिखित श्रेणियों की जानकारी एकत्र कर सकते हैं:

A. संपर्क और पहचान संबंधी जानकारी
- नाम
- मेल पता
- फ़ोन नंबर
- डाक पता
- संगठन का नाम
- उपयोगकर्ता खाता पहचानकर्ता

B. मामले और विवाद की जानकारी
- विवाद प्रकार
- कथन और विवरण
- संबंध विवरण
- परिवार से संबंधित विवरण
- बच्चे से संबंधित विवरण
- शेड्यूलिंग प्राथमिकताएँ
- संचार प्राथमिकताएं
- अपलोड की गई फ़ाइलें और संदेश
- अनुरोधित परिणाम
- समझौते, ड्राफ्ट और संपादन

C. वित्तीय और भुगतान संबंधी जानकारी
- बिलिंग विवरण
- ट्रांजेक्शन इतिहास
- भुगतान की स्थिति
- आंशिक भुगतान/विभाजित-भुगतान डेटा
- पूरक शुल्क की जानकारी
भुगतान कार्ड डेटा Stripe द्वारा संसाधित किया जाता है और हमारे द्वारा पूरी तरह से संग्रहीत नहीं किया जाता है।

D. तकनीकी एवं उपयोग संबंधी जानकारी
- आईपी ​​पता
- ब्राउज़र/डिवाइस जानकारी
- ऑपरेटिंग सिस्टम
- आईपी ​​से अनुमानित स्थान का अनुमान लगाया गया
- पृष्ठ देखे गए
- क्लिक और इंटरैक्शन
- कुकीज़ और समान प्रौद्योगिकियाँ
- लॉग, डायग्नोस्टिक्स और सुरक्षा ईवेंट

E. समर्थन जानकारी
- ग्राहक सहायता पूछताछ
- पत्र-व्यवहार
- रिपोर्ट जारी करें

F. बच्चों से संबंधित डेटा
चूँकि पारिवारिक विवादों में बच्चे की हिरासत, सहायता, स्कूली शिक्षा, स्वास्थ्य या पालन-पोषण के मुद्दे शामिल हो सकते हैं, सेवाओं का उपयोग करने वाले वयस्क किसी मामले के हिस्से के रूप में बच्चों से संबंधित जानकारी प्रदान कर सकते हैं। वेबसाइट और सेवाएँ बच्चों के लिए नहीं हैं, और हम जानबूझकर सार्वजनिक-सामना वाले इंटरफेस के माध्यम से बच्चों से सीधे जानकारी एकत्र करने का प्रयास नहीं करते हैं।

3. जानकारी का स्रोत
हम जानकारी एकत्र करते हैं:
- सीधे आपसे
- दूसरे पक्ष से विवाद के लिए
- अधिकृत प्रतिनिधियों से
- कनेक्टेड प्लेटफ़ॉर्म वर्कफ़्लोज़ से
- भुगतान प्रोसेसर और सेवा प्रदाताओं से
- वेबसाइट या सेवाओं के आपके उपयोग से स्वचालित रूप से

4. हम जानकारी का उपयोग कैसे करते हैं
हम जानकारी का उपयोग इसके लिए कर सकते हैं:
- सेवाएँ प्रदान करें और प्रशासित करें
- मामलों को खोलें और प्रबंधित करें
- संचार और विवाद समाधान को सुविधाजनक बनाना
- पहचान और अधिकार सत्यापित करें
- भुगतान संसाधित करें और धोखाधड़ी रोकें
- ड्राफ्ट, सारांश, अनुवाद या वर्कफ़्लो आउटपुट उत्पन्न करें
- ग्राहक सहायता प्रदान करें
- सेवाओं में सुधार, सुरक्षा और समस्या निवारण करें
- हमारे अधिकारों और नीतियों को लागू करें
- कानूनी दायित्वों का पालन करें
- व्यवसाय और केस रिकॉर्ड बनाए रखें

5. कानूनी आधार (जहाँ लागू हो)
आपके स्थान और लागू कानून के आधार पर, हम निम्नलिखित के आधार पर व्यक्तिगत जानकारी संसाधित कर सकते हैं:
- आपकी सहमति
- किसी अनुबंध का निष्पादन या किसी अनुबंध में प्रवेश करने से पहले अनुरोधित कदम
- सेवाएँ प्रदान करने, सुरक्षित करने और सुधारने में हमारे वैध हित हैं
- कानूनी दायित्वों का अनुपालन
- महत्वपूर्ण हितों की सुरक्षा, जहां कानून द्वारा अनुमति हो

6. हम जानकारी कैसे साझा करते हैं
हम जानकारी का खुलासा कर सकते हैं:
- किसी मामले में दूसरे पक्ष या पार्टियों को, जहां प्रक्रिया के लिए आवश्यक हो
- किसी मामले पर काम करने वाले मध्यस्थों, ठेकेदारों और सहायक कर्मियों के लिए
- सेवा प्रदाताओं के लिए जो सेवाओं को होस्ट, सुरक्षित, संसाधित या समर्थन करते हैं
- Stripe जैसे भुगतान प्रोसेसर के लिए
- पेशेवर सलाहकारों, बीमाकर्ताओं, या लेखा परीक्षकों के लिए
- अदालतों, नियामकों, कानून प्रवर्तन, या अन्य जहां कानून द्वारा आवश्यक हो
- विलय, बिक्री, वित्तपोषण, पुनर्गठन, या परिसंपत्तियों के हस्तांतरण के संबंध में
- आपकी सहमति से या आपके निर्देश पर

हम पैसे के लिए व्यक्तिगत जानकारी नहीं बेचते हैं।

7. Stripe और भुगतान
भुगतान Stripe के माध्यम से संसाधित किए जाते हैं। Stripe अपनी नीतियों और समझौतों के तहत भुगतान और धोखाधड़ी-रोकथाम डेटा एकत्र, उपयोग और संसाधित कर सकता है। हमें Stripe से सीमित लेन-देन संबंधी जानकारी प्राप्त हो सकती है, जैसे भुगतान की स्थिति, आंशिक कार्ड विवरण, बिलिंग नाम, देश और भुगतान प्रबंधित करने, धोखाधड़ी रोकने और विवादों का समर्थन करने के लिए आवश्यक पहचानकर्ता।

8. कुकीज़ और समान प्रौद्योगिकियाँ
हम कुकीज़, पिक्सेल, स्थानीय भंडारण, सत्र उपकरण और इसी तरह की तकनीकों का उपयोग कर सकते हैं:
- आवश्यक साइट कार्यक्षमता
- सुरक्षा और धोखाधड़ी की रोकथाम
- प्राथमिकताएँ और भाषा सेटिंग
- विश्लेषण और प्रदर्शन
- समस्या निवारण और निदान

जहां कानून द्वारा आवश्यक होगा, हम गैर-आवश्यक कुकीज़ या समान तकनीकों का उपयोग करने से पहले सहमति का अनुरोध करेंगे।

9. डेटा प्रतिधारण
हम जानकारी केवल तब तक ही रखते हैं जब तक इस नीति में वर्णित उद्देश्यों के लिए उचित रूप से आवश्यक हो, जिसमें शामिल हैं:
- सेवाएँ प्रदान करें
- पूर्ण लेन-देन
- केस रिकॉर्ड बनाए रखें
- कानूनी, कर, लेखांकन, बीमा, या विवाद-समाधान दायित्वों का अनुपालन करें
- समझौतों को लागू करें
- विवाद का निबटारा करो
- धोखाधड़ी और दुरुपयोग को रोकें

मामले के प्रकार, लागू कानून और परिचालन आवश्यकताओं के आधार पर प्रतिधारण अवधि भिन्न हो सकती है। जब जानकारी की आवश्यकता नहीं रह जाती है, तो हम जहां संभव हो उसे हटा देंगे, अज्ञात कर देंगे या सुरक्षित रूप से उसका निपटान कर देंगे।

10. डेटा सुरक्षा
हम जानकारी को अनधिकृत पहुंच, प्रकटीकरण, परिवर्तन या विनाश से बचाने के लिए डिज़ाइन किए गए उचित प्रशासनिक, तकनीकी और संगठनात्मक सुरक्षा उपायों का उपयोग करते हैं। हालाँकि, ट्रांसमिशन, भंडारण या सुरक्षा का कोई भी तरीका पूरी तरह से सुरक्षित होने की गारंटी नहीं देता है, और हम पूर्ण सुरक्षा का वादा नहीं कर सकते हैं।

11. अंतर्राष्ट्रीय स्थानान्तरण
हमारी वेबसाइट, प्लेटफ़ॉर्म प्रदाता, या सेवा प्रदाता संयुक्त राज्य अमेरिका या अन्य न्यायक्षेत्रों में जानकारी संग्रहीत या संसाधित कर सकते हैं। सेवाओं का उपयोग करके, आप स्वीकार करते हैं कि आपकी जानकारी उन देशों में स्थानांतरित और संसाधित की जा सकती है, जहां आपके निवास स्थान की तुलना में अलग-अलग डेटा-सुरक्षा नियम हो सकते हैं।

12. आपकी पसंद और अधिकार
लागू कानून के आधार पर, आपके पास ये अधिकार हो सकते हैं:
- कुछ व्यक्तिगत जानकारी तक पहुँचें
- ग़लत जानकारी में सुधार का अनुरोध करें
- कुछ जानकारी हटाने का अनुरोध करें
- कुछ प्रसंस्करण पर आपत्ति करना या उसे प्रतिबंधित करना
- जहां प्रसंस्करण सहमति पर निर्भर करता है वहां सहमति वापस लें
- कुछ जानकारी की पोर्टेबिलिटी का अनुरोध करें
- जहां कानून द्वारा आवश्यक हो, किसी अनुरोध को अस्वीकार करने की अपील करें

अनुरोध का पालन करने के लिए, support@fastdisputeresolution.com पर हमसे संपर्क करें। आपके अनुरोध पर कार्रवाई करने से पहले हमें आपकी पहचान और प्राधिकार को सत्यापित करने की आवश्यकता हो सकती है। हम उन अनुरोधों को अस्वीकार या सीमित भी कर सकते हैं जहां कानून द्वारा अनुमति दी गई है, जिसमें ऐसे मामले भी शामिल हैं जहां प्रकटीकरण किसी अन्य पक्ष के अधिकारों पर प्रतिकूल प्रभाव डालेगा या कानूनी दायित्वों के साथ टकराव होगा।

13. कैलिफ़ोर्निया और अन्य अमेरिकी राज्य गोपनीयता अधिकार
यदि आपके अधिकार क्षेत्र में गोपनीयता कानून विशिष्ट अधिकार प्रदान करते हैं, तो हम लागू सीमा तक उन अधिकारों का सम्मान करेंगे। यदि आप कैलिफ़ोर्निया के निवासी हैं और कैलिफ़ोर्निया का लागू गोपनीयता कानून आपके अनुरोध पर लागू होता है, तो आप सत्यापन योग्य अनुरोध सबमिट करने के लिए नीचे दी गई जानकारी का उपयोग करके हमसे संपर्क कर सकते हैं।

14. ट्रैक न करें
हमारी सेवाएँ सभी ब्राउज़र-आधारित "ट्रैक न करें" संकेतों पर प्रतिक्रिया नहीं दे सकती हैं। जहां कानून द्वारा आवश्यक होगा, हम कानूनी रूप से मान्यता प्राप्त तंत्र के माध्यम से प्रदान किए गए ऑप्ट-आउट विकल्पों का सम्मान करेंगे।

15. तृतीय-पक्ष लिंक और सेवाएँ
वेबसाइट या सेवाओं में तृतीय-पक्ष वेबसाइटों, टूल या एकीकरण के लिंक हो सकते हैं। हम उनकी गोपनीयता प्रथाओं के लिए ज़िम्मेदार नहीं हैं। उन्हें जानकारी प्रदान करने से पहले उनकी नीतियों की समीक्षा करें।

16. बच्चों की गोपनीयता
वेबसाइट 13 वर्ष से कम उम्र के बच्चों के लिए नहीं है। हम जानबूझकर सार्वजनिक वेबसाइट के माध्यम से सीधे बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते हैं। हालाँकि, पारिवारिक मामले के लिए उचित आवश्यक होने पर वयस्क बच्चे से संबंधित जानकारी प्रस्तुत कर सकते हैं। यदि आपको लगता है कि हमने किसी बच्चे से सीधे इस तरह से जानकारी एकत्र की है जो उचित नहीं है, तो हमसे संपर्क करें और हम इसकी समीक्षा करेंगे।

17. इस नीति में परिवर्तन
हम इस गोपनीयता नीति को समय-समय पर अद्यतन कर सकते हैं। संशोधित संस्करण पोस्ट किए जाने पर प्रभावी हो जाता है, जब तक कि कोई बाद की तारीख न बताई गई हो।

18. संपर्क
Fast Dispute Resolution
समर्थन: support@fastdisputeresolution.com

यदि आप गोपनीयता के संबंध में हमसे संपर्क करते हैं, तो कृपया हमें आपके अनुरोध को समझने और उसका जवाब देने के लिए पर्याप्त जानकारी शामिल करें।`,
    "refunds": `यह सुविधा के लिए प्रदान किया गया अनुवादित संस्करण है। किसी भी विसंगति की स्थिति में, अंग्रेज़ी संस्करण प्रभावी होगा।

FAST DISPUTE RESOLUTION
धनवापसी और रद्दीकरण नीति

अंतिम अद्यतन: 19 मई, 2026

यह रिफंड और रद्दीकरण नीति बताती है कि Fast Dispute Resolution रद्दीकरण, क्रेडिट और रिफंड को कैसे संभालता है।

1. सामान्य नियम
जब तक कानून द्वारा आवश्यक न हो या लिखित शुल्क नोटिस, उद्धरण, चालान, या मामले-विशिष्ट भुगतान पृष्ठ में स्पष्ट रूप से अन्यथा न कहा गया हो, शुल्क आम तौर पर सेवाओं के उपलब्ध होने, आरक्षित होने, शुरू होने या निष्पादित होने पर अर्जित किया जाता है।

2. गैर-वापसीयोग्य या अर्जित शुल्क
एक बार शुल्क लेने या संबंधित कार्य शुरू होने के बाद निम्नलिखित आमतौर पर वापस नहीं किए जाते हैं:
- केस खोलने या प्रवेश/सेटअप शुल्क
- प्रशासनिक सक्रियण शुल्क
- प्लेटफ़ॉर्म एक्सेस शुल्क केस लॉन्च से जुड़ा हुआ है
- पूर्ण मध्यस्थता सत्रों के लिए शुल्क
- ड्राफ्टिंग शुरू होने पर ड्राफ्टिंग या दस्तावेज़-तैयारी शुल्क
- संबंधित कार्य या मील का पत्थर शुरू होने पर पूरक शुल्क
- मामले के लिए तैयार किए गए पूर्ण अनुवाद, सारांश, या जेनरेट किए गए वर्कफ़्लो आउटपुट से जुड़ी फीस

3. विभाजित भुगतान और पार्टी-विशिष्ट भुगतान
जहां फीस को पार्टियों के बीच विभाजित किया जाता है, प्रत्येक पार्टी उस पार्टी को आवंटित हिस्से के लिए जिम्मेदार होती है जब तक कि लिखित मामले की सूचना में अन्यथा न कहा गया हो। एक पक्ष का भुगतान न करना, देरी करना, भाग लेने से इनकार करना या वापसी स्वचालित रूप से दूसरे पक्ष को धन वापसी का अधिकार नहीं देती है।

4. ऐसे मामले जो आगे नहीं बढ़ते
यदि कोई मामला आगे नहीं बढ़ता है, तो कोई भी धनवापसी या क्रेडिट मामला-दर-मामला निर्धारित किया जाता है और यह इस बात पर निर्भर करता है कि कौन सी सेवाएं, सेटअप, समीक्षा, या केस कार्य पहले ही प्रदान किया जा चुका है। हम पूर्ण धन-वापसी, आंशिक धन-वापसी, सेवा क्रेडिट, या कोई धन-वापसी जारी नहीं कर सकते हैं, लेकिन ऐसा करने की आवश्यकता नहीं है, सिवाय इसके कि जहां कानून द्वारा आवश्यक हो।

5. आपके द्वारा रद्दीकरण
आप किसी भी समय सेवाओं का उपयोग बंद कर सकते हैं। हालाँकि, उपयोग बंद करने से आप स्वचालित रूप से पहले से वितरित, उपलब्ध कराई गई, आरक्षित या शुरू की गई सेवाओं के लिए धनवापसी का हकदार नहीं हो जाते हैं।

6. पुनर्निर्धारण और लाइव सत्र
यदि किसी विशेष मामले के लिए लाइव सत्र की पेशकश की जाती है:
- पुनर्निर्धारण अनुरोध यथाशीघ्र किया जाना चाहिए;
- छूटे सत्र या देर से रद्दीकरण को प्रयुक्त समय या गैर-वापसी योग्य आरक्षित समय के रूप में माना जा सकता है;
- हम शेड्यूलिंग नोटिस या इनवॉइस में केस-विशिष्ट पुनर्निर्धारण नियम निर्धारित कर सकते हैं।

7. हमारे द्वारा रद्दीकरण या समाप्ति
यदि कोई मामला असुरक्षित, अनुपयुक्त, गैरकानूनी, अपमानजनक, या अन्यथा हमारी नीतियों के साथ असंगत प्रतीत होता है तो हम सेवाओं को अस्वीकार, निलंबित या समाप्त कर सकते हैं। यदि हम ठोस कार्य शुरू होने से पहले समाप्त कर देते हैं, तो हम अपने विवेक से पूर्ण या आंशिक धनवापसी या क्रेडिट जारी कर सकते हैं। यदि महत्वपूर्ण कार्य पहले ही शुरू हो चुका है, तो हम किए गए या उपलब्ध कराए गए कार्य के लिए शुल्क बरकरार रख सकते हैं।

8. चार्जबैक और भुगतान विवाद
अपने बैंक या कार्ड जारीकर्ता के साथ किसी शुल्क पर विवाद करने से पहले, support@fastdisputeresolution.com पर हमसे संपर्क करें। चार्जबैक दाखिल करने से हमारी शर्तों के तहत आपके दायित्व स्वचालित रूप से रद्द नहीं होते हैं। जब चार्जबैक की समीक्षा चल रही हो तो हम केस एक्सेस को निलंबित करने का अधिकार सुरक्षित रखते हैं और उन चार्जबैक का विरोध करने का अधिकार सुरक्षित रखते हैं जिन्हें हम अनुचित मानते हैं।

9. धनवापसी विधि
स्वीकृत रिफंड, यदि कोई हो, आम तौर पर मूल भुगतान विधि में वापस कर दिया जाता है जब तक कि अन्यथा कानून द्वारा आवश्यक न हो या लिखित में सहमति न हो।

10. समय
मामले और भुगतान विधि के आधार पर रिफंड समीक्षा का समय अलग-अलग होता है। यदि धनवापसी स्वीकृत हो जाती है, तो प्रसंस्करण समय भुगतान प्रोसेसर और आपके बैंक पर भी निर्भर करता है।

11. संपर्क
समर्थन: support@fastdisputeresolution.com`,
    "disclaimer": `यह सुविधा के लिए प्रदान किया गया अनुवादित संस्करण है। किसी भी विसंगति की स्थिति में, अंग्रेज़ी संस्करण प्रभावी होगा।

FAST DISPUTE RESOLUTION
कानूनी अस्वीकरण

अंतिम अद्यतन: 19 मई, 2026

Fast Dispute Resolution विवाद-समाधान सुविधा, मध्यस्थता-संबंधी सेवाएँ और संबंधित वर्कफ़्लो उपकरण प्रदान करता है। इस वेबसाइट पर और हमारी सेवाओं के माध्यम से जानकारी केवल सामान्य सूचनात्मक और सुविधा उद्देश्यों के लिए प्रदान की जाती है।

1. कानूनी सलाह नहीं
इस वेबसाइट पर या हमारी सेवाओं में कुछ भी कानूनी सलाह नहीं है, और यहां किसी भी चीज़ को उचित क्षेत्राधिकार में लाइसेंस प्राप्त योग्य वकील की सलाह के विकल्प के रूप में नहीं माना जाना चाहिए।

2. कोई वकील-ग्राहक संबंध नहीं
इस वेबसाइट या सेवाओं का आपका उपयोग वकील-ग्राहक संबंध या कानूनी प्रतिनिधित्व नहीं बनाता है जब तक कि एक अलग लिखित अनुबंध स्पष्ट रूप से ऐसा न कहे।

3. तटस्थ प्रक्रिया
जहां मध्यस्थता सेवाएं प्रदान की जाती हैं, मध्यस्थ का उद्देश्य किसी भी पक्ष के वकील के बजाय एक तटस्थ सुविधाकर्ता के रूप में कार्य करना होता है।

4. कोई गारंटी नहीं
हम गारंटी नहीं देते:
- कि एक मामला सुलझ जाएगा,
- कि सभी पार्टियाँ भाग लेंगी,
- कि कोई भी प्रस्ताव स्वीकार किया जायेगा,
- कि कोई भी समझौता हर जगह लागू होगा,
- या कि कोई भी परिणाम आपकी आवश्यकताओं के लिए उपयुक्त होगा।

5. स्वतंत्र सलाह
किसी भी समझौते, अनुवाद, ड्राफ्ट या सारांश पर भरोसा करने से पहले कानूनी, कर, लेखांकन, वित्तीय या मानसिक-स्वास्थ्य पेशेवरों से परामर्श करना है या नहीं यह तय करने के लिए आप जिम्मेदार हैं।

6. आपात्कालीन या असुरक्षित स्थितियों के लिए नहीं
आपातकालीन, असुरक्षित या संकटपूर्ण स्थितियों के लिए अकेले इस वेबसाइट या सेवाओं पर भरोसा न करें, जिसमें हिंसा, जबरदस्ती, दुर्व्यवहार, पीछा करना, बच्चों को खतरे में डालना, तत्काल सुरक्षात्मक आदेश, या अदालती कार्रवाई की आवश्यकता वाली आसन्न समय सीमा शामिल है।

7. भविष्य की सेवाएँ
यदि हम बाद में मध्यस्थता या अन्य विवाद-समाधान सेवाओं जैसी अतिरिक्त सेवाएँ प्रदान करते हैं, तो उन सेवाओं का अलग से वर्णन किया जाएगा और वे अतिरिक्त शर्तों के अधीन हो सकती हैं।

8. संपर्क
समर्थन: support@fastdisputeresolution.com`,
    "cookies": `यह सुविधा के लिए प्रदान किया गया अनुवादित संस्करण है। किसी भी विसंगति की स्थिति में, अंग्रेज़ी संस्करण प्रभावी होगा।

FAST DISPUTE RESOLUTION
कुकी सूचना

अंतिम अद्यतन: 19 मई, 2026

हम अपनी वेबसाइट को संचालित करने, प्राथमिकताओं को याद रखने, प्रदर्शन में सुधार करने, साइट को सुरक्षित करने और यह समझने के लिए कुकीज़ और समान तकनीकों का उपयोग करते हैं कि आगंतुक हमारी सेवाओं का उपयोग कैसे करते हैं। कुछ कुकीज़ अत्यंत आवश्यक हैं; अन्य का उपयोग विश्लेषण या इसी तरह के उद्देश्यों के लिए किया जा सकता है।

जहां कानून द्वारा आवश्यक होगा, हम गैर-आवश्यक कुकीज़ का उपयोग करने से पहले सहमति का अनुरोध करेंगे। आप अपनी ब्राउज़र सेटिंग्स के माध्यम से भी कुकीज़ प्रबंधित कर सकते हैं, हालांकि कुछ कुकीज़ को अक्षम करने से साइट की कार्यक्षमता प्रभावित हो सकती है।

हम व्यक्तिगत जानकारी का उपयोग कैसे करते हैं, इसके बारे में अधिक जानकारी के लिए कृपया हमारी गोपनीयता नीति देखें।`,
  },
}
