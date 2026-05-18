export const BRAND_NAME = "Fast Dispute Resolution"
export const ARTEMIS_CTA_URL = "https://artemischat.com/rooms/fast-dispute-resolutions-10d5/service-request"
export const CONTACT_EMAIL = "support@fastdisputeresolution.com"

export const languages = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "fa", label: "فارسی", dir: "rtl" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr" },
  { code: "hi", label: "हिन्दी", dir: "ltr" },
] as const

export type LanguageCode = (typeof languages)[number]["code"]

export type Advantage = {
  title: string
  body: string
}

export type Step = {
  title: string
  body: string
}

export type SiteCopy = {
  nav: {
    advantages: string
    services: string
    process: string
    pricing: string
    start: string
    language: string
  }
  hero: {
    eyebrow: string
    headline: string
    subheadline: string
    cta: string
    secondary: string
    trustA: string
    trustB: string
    trustC: string
    previewTitle: string
    previewStatus: string
    previewStepA: string
    previewStepB: string
    previewStepC: string
  }
  multilingual?: {
    title: string
    body: string[]
  }
  advantages: {
    eyebrow: string
    title: string
    intro: string
    items: Advantage[]
  }
  services: {
    eyebrow: string
    title: string
    intro: string
    items: string[]
  }
  whoItsFor?: {
    title: string
    items: string[]
  }
  process: {
    eyebrow: string
    title: string
    intro: string
    steps: Step[]
  }
  pricing: {
    eyebrow: string
    title: string
    body: string
    note: string
    checklist?: string[]
    keyLine?: string
  }
  trust?: {
    title: string
    body: string
    items: string[]
  }
  credibility?: {
    title: string
    body: string
  }
  finalCta: {
    headline: string
    body: string
    cta: string
  }
  footer: {
    contact: string
    privacy: string
    terms: string
    rights: string
  }
}

export const copy: Record<LanguageCode, SiteCopy> = {
  en: {
    nav: {
      advantages: "Advantages",
      services: "Services",
      process: "How it works",
      pricing: "Pricing",
      start: "Start Your Case Now",
      language: "Language",
    },
    hero: {
      eyebrow: "Online family mediation",
      headline: "Resolve Divorce & Family Disputes — Without Court, Lawyers, or Stress",
      subheadline:
        "Start immediately. No appointments. Each party can communicate in their own language — clearly and without misunderstandings.",
      cta: "Start Your Case in Minutes",
      secondary: "No appointments required • Work at your own pace",
      trustA: "Private online process",
      trustB: "Neutral mediator support",
      trustC: "Multilingual communication",
      previewTitle: "Case flow",
      previewStatus: "Ready to begin",
      previewStepA: "Start your case",
      previewStepB: "The other party is invited automatically",
      previewStepC: "Answer guided questions",
    },
    multilingual: {
      title: "Communicate Clearly — In Your Own Language",
      body: [
        "When it comes to legal matters, every word matters.",
        "A single misunderstanding can change meaning, create conflict, or delay resolution.",
        "With Fast Dispute Resolution, each party can communicate in their own language — ensuring that both the mediator and the other party fully understand what is being said.",
        "No translators. No confusion. Just clarity.",
      ],
    },
    advantages: {
      eyebrow: "Why it works",
      title: "A calmer, smarter way to resolve disputes",
      intro: "Designed to reduce pressure and help both sides make progress.",
      items: [
        { title: "Start Immediately", body: "No scheduling. Begin your case right now." },
        { title: "Work at Your Own Pace", body: "Respond when it works for you — no pressure, no fixed sessions." },
        { title: "No Confrontation Required", body: "No need to sit face-to-face. Handle everything calmly online." },
        { title: "Faster Resolution", body: "Resolve disputes in days or weeks — not months." },
        { title: "Neutral Mediator", body: "A professional mediator is actively guiding the process to ensure fair and structured outcomes." },
        { title: "Private & Confidential", body: "Your information stays secure and protected." },
      ],
    },
    services: {
      eyebrow: "What we help resolve",
      title: "Family disputes that need clear agreements",
      intro: "Start with the areas that apply to your case. The online flow helps collect the information needed to move forward.",
      items: [
        "Divorce and separation agreements",
        "Child custody and parenting plans",
        "Child support arrangements",
        "Spousal support / alimony",
        "Property and debt division",
        "Financial settlement agreements",
        "General family dispute resolution",
      ],
    },
    whoItsFor: {
      title: "Who this is for",
      items: [
        "Couples going through separation or divorce",
        "Parents working through custody or support",
        "Individuals seeking a faster, private resolution",
        "Situations where communication is difficult",
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "Four simple steps",
      intro: "The process starts online and keeps moving without unnecessary appointments.",
      steps: [
        { title: "Start your case online", body: "Open the secure intake and tell us what needs to be resolved." },
        { title: "The other party is invited automatically", body: "We handle the invitation — no coordination required." },
        { title: "Answer guided questions", body: "Each person answers clear questions at their own pace." },
        { title: "Resolve your dispute", body: "A professional mediator is actively guiding the process to ensure fair and structured outcomes." },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing — without surprises",
      body: "Most cases range between $900 – $2,500, depending on complexity.",
      note: "You will always see your pricing before any payment.",
      checklist: [
        "The full case cost",
        "Your exact share",
        "Before making any payment",
      ],
      keyLine: "This often costs less than what many attorneys require just to get started.",
    },
    trust: {
      title: "Designed for real situations",
      body:
        "We understand that disputes can be emotional, stressful, and sometimes uncomfortable.",
      items: [
        "reduce tension",
        "avoid unnecessary conflict",
        "help both sides move forward calmly",
      ],
    },
    credibility: {
      title: "Guided by a neutral mediator",
      body:
        "A professional mediator is actively guiding the process to ensure fair and structured outcomes.",
    },
    finalCta: {
      headline: "Start Your Case Now — It Only Takes a Few Minutes",
      body: "No appointments • No pressure • Work at your own pace",
      cta: "Start Your Case",
    },
    footer: {
      contact: "",
      privacy: "Privacy",
      terms: "Terms",
      rights: "",
    },
  },
  es: {
    nav: {
      advantages: "Ventajas",
      services: "Servicios",
      process: "Cómo funciona",
      pricing: "Precios",
      start: "Inicia tu caso ahora",
      language: "Idioma",
    },
    hero: {
      eyebrow: "Mediación familiar en línea",
      headline: "Resuelve disputas de divorcio y familia — sin tribunales, abogados ni estrés",
      subheadline:
        "Comienza de inmediato. Sin citas. Cada parte puede comunicarse en su propio idioma, con claridad y sin malentendidos.",
      cta: "Inicia tu caso en minutos",
      secondary: "Sin citas obligatorias • Avanza a tu propio ritmo",
      trustA: "Proceso privado en línea",
      trustB: "Apoyo de mediador neutral",
      trustC: "Comunicación multilingüe",
      previewTitle: "Flujo del caso",
      previewStatus: "Listo para comenzar",
      previewStepA: "Inicia tu caso",
      previewStepB: "La otra parte es invitada automáticamente",
      previewStepC: "Responde preguntas guiadas",
    },
    multilingual: {
      title: "Comunícate con claridad — en tu propio idioma",
      body: [
        "Cuando se trata de asuntos legales, cada palabra importa.",
        "Un solo malentendido puede cambiar el significado, crear conflicto o retrasar la resolución.",
        "Con Fast Dispute Resolution, cada parte puede comunicarse en su propio idioma, asegurando que tanto el mediador como la otra parte entiendan plenamente lo que se está diciendo.",
        "Sin traductores. Sin confusión. Solo claridad.",
      ],
    },
    advantages: {
      eyebrow: "Por qué funciona",
      title: "Una forma más tranquila e inteligente de resolver disputas",
      intro: "Diseñado para reducir la presión y ayudar a ambas partes a avanzar.",
      items: [
        { title: "Comienza de inmediato", body: "Sin programación. Inicia tu caso ahora mismo." },
        { title: "Avanza a tu propio ritmo", body: "Responde cuando te convenga, sin presión ni sesiones fijas." },
        { title: "Sin confrontación", body: "No necesitas sentarte cara a cara. Gestiona todo con calma en línea." },
        { title: "Resolución más rápida", body: "Resuelve disputas en días o semanas, no en meses." },
        { title: "Mediador neutral", body: "Un mediador profesional está guiando activamente el proceso para asegurar resultados justos y estructurados." },
        { title: "Privado y confidencial", body: "Tu información se mantiene segura y protegida." },
      ],
    },
    services: {
      eyebrow: "Qué ayudamos a resolver",
      title: "Disputas familiares que necesitan acuerdos claros",
      intro: "Comienza con las áreas que aplican a tu caso. El flujo en línea ayuda a recopilar la información necesaria para avanzar.",
      items: [
        "Acuerdos de divorcio y separación",
        "Custodia de menores y planes de crianza",
        "Arreglos de manutención infantil",
        "Manutención conyugal / pensión alimenticia",
        "División de bienes y deudas",
        "Acuerdos financieros",
        "Resolución general de disputas familiares",
      ],
    },
    whoItsFor: {
      title: "Para quién es esto",
      items: [
        "Parejas en proceso de separación o divorcio",
        "Padres que están resolviendo custodia o manutención",
        "Personas que buscan una resolución más rápida y privada",
        "Situaciones en las que la comunicación es difícil",
      ],
    },
    process: {
      eyebrow: "Cómo funciona",
      title: "Cuatro pasos simples",
      intro: "El proceso comienza en línea y sigue avanzando sin citas innecesarias.",
      steps: [
        { title: "Inicia tu caso en línea", body: "Abre el formulario seguro y cuéntanos qué necesita resolverse." },
        { title: "La otra parte es invitada automáticamente", body: "Nosotros gestionamos la invitación — no se requiere coordinación." },
        { title: "Responde preguntas guiadas", body: "Cada persona responde preguntas claras a su propio ritmo." },
        { title: "Resuelve tu disputa", body: "Un mediador profesional está guiando activamente el proceso para asegurar resultados justos y estructurados." },
      ],
    },
    pricing: {
      eyebrow: "Precios",
      title: "Precios transparentes — sin sorpresas",
      body: "La mayoría de los casos oscila entre $900 y $2,500, según la complejidad.",
      note: "Siempre verás tus costos antes de cualquier pago.",
      checklist: ["El costo total del caso", "Tu parte exacta", "Antes de realizar cualquier pago"],
      keyLine: "Esto suele costar menos de lo que muchos abogados cobran solo para comenzar.",
    },
    trust: {
      title: "Diseñado para situaciones reales",
      body: "Entendemos que las disputas pueden ser emocionales, estresantes y, a veces, incómodas.",
      items: ["reducir la tensión", "evitar conflictos innecesarios", "ayudar a ambas partes a avanzar con calma"],
    },
    credibility: {
      title: "Guiado por un mediador neutral",
      body: "Un mediador profesional está guiando activamente el proceso para asegurar resultados justos y estructurados.",
    },
    finalCta: {
      headline: "Inicia tu caso ahora — solo toma unos minutos",
      body: "Sin citas • Sin presión • Avanza a tu propio ritmo",
      cta: "Inicia tu caso",
    },
    footer: {
      contact: "",
      privacy: "Privacidad",
      terms: "Términos",
      rights: "",
    },
  },
  pt: {
    nav: {
      advantages: "Vantagens",
      services: "Serviços",
      process: "Como funciona",
      pricing: "Preços",
      start: "Comece seu caso agora",
      language: "Idioma",
    },
    hero: {
      eyebrow: "Mediação familiar online",
      headline: "Resolva disputas de divórcio e família — sem tribunal, advogados ou estresse",
      subheadline:
        "Comece imediatamente. Sem agendamentos. Cada parte pode se comunicar em seu próprio idioma, com clareza e sem mal-entendidos.",
      cta: "Comece seu caso em minutos",
      secondary: "Sem agendamentos obrigatórios • Avance no seu ritmo",
      trustA: "Processo privado online",
      trustB: "Apoio de mediador neutro",
      trustC: "Comunicação multilíngue",
      previewTitle: "Fluxo do caso",
      previewStatus: "Pronto para começar",
      previewStepA: "Comece seu caso",
      previewStepB: "A outra parte é convidada automaticamente",
      previewStepC: "Responda perguntas guiadas",
    },
    multilingual: {
      title: "Comunique-se com clareza — no seu próprio idioma",
      body: [
        "Quando se trata de assuntos legais, cada palavra importa.",
        "Um único mal-entendido pode mudar o significado, gerar conflito ou atrasar a resolução.",
        "Com a Fast Dispute Resolution, cada parte pode se comunicar em seu próprio idioma, garantindo que tanto o mediador quanto a outra parte entendam plenamente o que está sendo dito.",
        "Sem tradutores. Sem confusão. Apenas clareza.",
      ],
    },
    advantages: {
      eyebrow: "Por que funciona",
      title: "Uma forma mais calma e inteligente de resolver disputas",
      intro: "Criado para reduzir a pressão e ajudar ambas as partes a avançar.",
      items: [
        { title: "Comece imediatamente", body: "Sem agendamento. Inicie seu caso agora." },
        { title: "Avance no seu ritmo", body: "Responda quando for melhor para você, sem pressão e sem sessões fixas." },
        { title: "Sem confronto", body: "Não é preciso sentar frente a frente. Resolva tudo com calma online." },
        { title: "Resolução mais rápida", body: "Resolva disputas em dias ou semanas, não em meses." },
        { title: "Mediador neutro", body: "Um mediador profissional está conduzindo ativamente o processo para garantir resultados justos e estruturados." },
        { title: "Privado e confidencial", body: "Suas informações permanecem seguras e protegidas." },
      ],
    },
    services: {
      eyebrow: "O que ajudamos a resolver",
      title: "Disputas familiares que precisam de acordos claros",
      intro: "Comece pelas áreas que se aplicam ao seu caso. O fluxo online ajuda a reunir as informações necessárias para avançar.",
      items: [
        "Acordos de divórcio e separação",
        "Guarda de filhos e planos parentais",
        "Arranjos de pensão alimentícia infantil",
        "Pensão conjugal / alimentos",
        "Divisão de bens e dívidas",
        "Acordos financeiros",
        "Resolução geral de disputas familiares",
      ],
    },
    whoItsFor: {
      title: "Para quem isto é",
      items: [
        "Casais em processo de separação ou divórcio",
        "Pais resolvendo guarda ou pensão",
        "Pessoas que buscam uma solução mais rápida e privada",
        "Situações em que a comunicação é difícil",
      ],
    },
    process: {
      eyebrow: "Como funciona",
      title: "Quatro passos simples",
      intro: "O processo começa online e continua sem agendamentos desnecessários.",
      steps: [
        { title: "Comece seu caso online", body: "Abra o formulário seguro e diga o que precisa ser resolvido." },
        { title: "A outra parte é convidada automaticamente", body: "Nós cuidamos do convite — nenhuma coordenação necessária." },
        { title: "Responda perguntas guiadas", body: "Cada pessoa responde perguntas claras no próprio ritmo." },
        { title: "Resolva sua disputa", body: "Um mediador profissional está conduzindo ativamente o processo para garantir resultados justos e estruturados." },
      ],
    },
    pricing: {
      eyebrow: "Preços",
      title: "Preços transparentes — sem surpresas",
      body: "A maioria dos casos varia entre US$ 900 e US$ 2.500, dependendo da complexidade.",
      note: "Você sempre verá seus custos antes de qualquer pagamento.",
      checklist: ["O custo total do caso", "Sua parte exata", "Antes de realizar qualquer pagamento"],
      keyLine: "Isso geralmente custa menos do que muitos advogados cobram apenas para começar.",
    },
    trust: {
      title: "Feito para situações reais",
      body: "Entendemos que disputas podem ser emocionais, estressantes e, às vezes, desconfortáveis.",
      items: ["reduzir a tensão", "evitar conflitos desnecessários", "ajudar ambos os lados a avançar com calma"],
    },
    credibility: {
      title: "Orientado por um mediador neutro",
      body: "Um mediador profissional está conduzindo ativamente o processo para garantir resultados justos e estruturados.",
    },
    finalCta: {
      headline: "Comece seu caso agora — leva apenas alguns minutos",
      body: "Sem agendamentos • Sem pressão • Avance no seu ritmo",
      cta: "Comece seu caso",
    },
    footer: {
      contact: "",
      privacy: "Privacidade",
      terms: "Termos",
      rights: "",
    },
  },
  fr: {
    nav: {
      advantages: "Avantages",
      services: "Services",
      process: "Fonctionnement",
      pricing: "Tarifs",
      start: "Commencer maintenant",
      language: "Langue",
    },
    hero: {
      eyebrow: "Médiation familiale en ligne",
      headline: "Résolvez les conflits de divorce et familiaux — sans tribunal, avocats ni stress",
      subheadline:
        "Commencez immédiatement. Sans rendez-vous. Chaque partie peut communiquer dans sa propre langue, avec clarté et sans malentendus.",
      cta: "Commencez votre dossier en quelques minutes",
      secondary: "Aucun rendez-vous requis • Avancez à votre rythme",
      trustA: "Processus privé en ligne",
      trustB: "Soutien d’un médiateur neutre",
      trustC: "Communication multilingue",
      previewTitle: "Parcours du dossier",
      previewStatus: "Prêt à commencer",
      previewStepA: "Commencer le dossier",
      previewStepB: "L’autre partie est invitée automatiquement",
      previewStepC: "Répondre aux questions guidées",
    },
    multilingual: {
      title: "Communiquez clairement — dans votre propre langue",
      body: [
        "Dans les questions juridiques, chaque mot compte.",
        "Un seul malentendu peut changer le sens, créer un conflit ou retarder la résolution.",
        "Avec Fast Dispute Resolution, chaque partie peut communiquer dans sa propre langue, afin que le médiateur comme l’autre partie comprennent pleinement ce qui est dit.",
        "Pas de traducteurs. Pas de confusion. Juste de la clarté.",
      ],
    },
    advantages: {
      eyebrow: "Pourquoi cela fonctionne",
      title: "Une manière plus calme et plus intelligente de résoudre les conflits",
      intro: "Conçu pour réduire la pression et aider les deux parties à avancer.",
      items: [
        { title: "Commencer immédiatement", body: "Aucune planification. Commencez votre dossier dès maintenant." },
        { title: "Avancer à votre rythme", body: "Répondez quand cela vous convient, sans pression ni sessions fixes." },
        { title: "Sans confrontation", body: "Pas besoin de vous asseoir face à face. Gérez tout calmement en ligne." },
        { title: "Résolution plus rapide", body: "Résolvez les conflits en jours ou en semaines, pas en mois." },
        { title: "Médiateur neutre", body: "Un médiateur professionnel guide activement le processus pour garantir des résultats équitables et structurés." },
        { title: "Privé et confidentiel", body: "Vos informations restent sécurisées et protégées." },
      ],
    },
    services: {
      eyebrow: "Ce que nous aidons à résoudre",
      title: "Conflits familiaux qui nécessitent des accords clairs",
      intro: "Commencez par les domaines qui concernent votre dossier. Le parcours en ligne aide à recueillir les informations nécessaires pour avancer.",
      items: [
        "Accords de divorce et de séparation",
        "Garde d’enfants et plans parentaux",
        "Arrangements de pension alimentaire pour enfants",
        "Pension alimentaire / soutien conjugal",
        "Division des biens et des dettes",
        "Accords financiers",
        "Résolution générale des conflits familiaux",
      ],
    },
    whoItsFor: {
      title: "Pour qui est-ce",
      items: [
        "Couples en cours de séparation ou de divorce",
        "Parents qui gèrent des questions de garde ou de pension",
        "Personnes recherchant une résolution plus rapide et privée",
        "Situations où la communication est difficile",
      ],
    },
    process: {
      eyebrow: "Fonctionnement",
      title: "Quatre étapes simples",
      intro: "Le processus commence en ligne et progresse sans rendez-vous inutiles.",
      steps: [
        { title: "Commencez votre dossier en ligne", body: "Ouvrez le formulaire sécurisé et indiquez ce qui doit être résolu." },
        { title: "L’autre partie est invitée automatiquement", body: "Nous nous chargeons de l’invitation — aucune coordination requise." },
        { title: "Répondez aux questions guidées", body: "Chaque personne répond à des questions claires à son rythme." },
        { title: "Résolvez votre conflit", body: "Un médiateur professionnel guide activement le processus pour garantir des résultats équitables et structurés." },
      ],
    },
    pricing: {
      eyebrow: "Tarifs",
      title: "Tarification transparente — sans surprise",
      body: "La plupart des dossiers se situent entre 900 $ et 2 500 $, selon la complexité.",
      note: "Vous verrez toujours vos coûts avant tout paiement.",
      checklist: ["Le coût total du dossier", "Votre part exacte", "Avant d’effectuer un paiement"],
      keyLine: "Cela coûte souvent moins que ce que de nombreux avocats demandent simplement pour commencer.",
    },
    trust: {
      title: "Conçu pour des situations réelles",
      body: "Nous savons que les conflits peuvent être émotionnels, stressants et parfois inconfortables.",
      items: ["réduire la tension", "éviter les conflits inutiles", "aider les deux parties à avancer calmement"],
    },
    credibility: {
      title: "Guidé par un médiateur neutre",
      body: "Un médiateur professionnel guide activement le processus pour garantir des résultats équitables et structurés.",
    },
    finalCta: {
      headline: "Commencez votre dossier maintenant — cela ne prend que quelques minutes",
      body: "Pas de rendez-vous • Pas de pression • Avancez à votre rythme",
      cta: "Commencer votre dossier",
    },
    footer: {
      contact: "",
      privacy: "Confidentialité",
      terms: "Conditions",
      rights: "",
    },
  },
  ar: {
    nav: {
      advantages: "المزايا",
      services: "الخدمات",
      process: "كيف يعمل",
      pricing: "الأسعار",
      start: "ابدأ قضيتك الآن",
      language: "اللغة",
    },
    hero: {
      eyebrow: "وساطة أسرية عبر الإنترنت",
      headline: "حل نزاعات الطلاق والأسرة — من دون محكمة أو محامين أو ضغط",
      subheadline:
        "ابدأ فورًا. بدون مواعيد. يمكن لكل طرف التواصل بلغته الخاصة بوضوح ومن دون سوء فهم.",
      cta: "ابدأ قضيتك خلال دقائق",
      secondary: "لا حاجة إلى مواعيد • تقدّم بالوتيرة التي تناسبك",
      trustA: "عملية خاصة عبر الإنترنت",
      trustB: "دعم وسيط محايد",
      trustC: "تواصل متعدد اللغات",
      previewTitle: "مسار القضية",
      previewStatus: "جاهز للبدء",
      previewStepA: "ابدأ قضيتك",
      previewStepB: "تتم دعوة الطرف الآخر تلقائيًا",
      previewStepC: "أجب عن الأسئلة الموجهة",
    },
    multilingual: {
      title: "تواصل بوضوح — بلغتك الخاصة",
      body: [
        "في الأمور القانونية، كل كلمة مهمة.",
        "سوء فهم واحد قد يغيّر المعنى أو يخلق نزاعًا أو يؤخر الحل.",
        "مع Fast Dispute Resolution، يمكن لكل طرف التواصل بلغته الخاصة، بما يضمن أن يفهم كلٌّ من الوسيط والطرف الآخر ما يُقال بشكل كامل.",
        "لا مترجمين. لا ارتباك. فقط وضوح.",
      ],
    },
    advantages: {
      eyebrow: "لماذا ينجح",
      title: "طريقة أهدأ وأذكى لحل النزاعات",
      intro: "مُصمم لتقليل الضغط ومساعدة الطرفين على التقدم.",
      items: [
        { title: "ابدأ فورًا", body: "لا حاجة إلى جدولة. ابدأ قضيتك الآن." },
        { title: "اعمل وفق وتيرتك", body: "أجب عندما يناسبك، بلا ضغط ولا جلسات ثابتة." },
        { title: "لا حاجة للمواجهة", body: "لا حاجة للجلوس وجهًا لوجه. تعامل مع كل شيء بهدوء عبر الإنترنت." },
        { title: "حل أسرع", body: "حل النزاعات خلال أيام أو أسابيع، لا أشهر." },
        { title: "وسيط محايد", body: "يقود وسيط مهني العملية بشكل نشط لضمان نتائج عادلة ومنظمة." },
        { title: "خاص وسري", body: "تبقى معلوماتك آمنة ومحمية." },
      ],
    },
    services: {
      eyebrow: "ما نساعد في حله",
      title: "نزاعات أسرية تحتاج إلى اتفاقات واضحة",
      intro: "ابدأ بالمجالات التي تنطبق على قضيتك. يساعد المسار الإلكتروني في جمع المعلومات اللازمة للتقدم.",
      items: [
        "اتفاقات الطلاق والانفصال",
        "حضانة الأطفال وخطط التربية",
        "ترتيبات نفقة الأطفال",
        "الدعم الزوجي / النفقة",
        "تقسيم الممتلكات والديون",
        "اتفاقات التسوية المالية",
        "حل النزاعات الأسرية العامة",
      ],
    },
    whoItsFor: {
      title: "لمن هذه الخدمة",
      items: [
        "الأزواج الذين يمرّون بالانفصال أو الطلاق",
        "الآباء والأمهات الذين يعملون على قضايا الحضانة أو النفقة",
        "الأفراد الذين يبحثون عن حل أسرع وأكثر خصوصية",
        "الحالات التي يكون فيها التواصل صعبًا",
      ],
    },
    process: {
      eyebrow: "كيف يعمل",
      title: "أربع خطوات بسيطة",
      intro: "تبدأ العملية عبر الإنترنت وتستمر دون مواعيد غير ضرورية.",
      steps: [
        { title: "ابدأ قضيتك عبر الإنترنت", body: "افتح النموذج الآمن وأخبرنا بما يحتاج إلى حل." },
        { title: "تتم دعوة الطرف الآخر تلقائيًا", body: "نحن نتولى الدعوة — لا حاجة لأي تنسيق." },
        { title: "أجب عن الأسئلة الموجهة", body: "يجيب كل شخص عن أسئلة واضحة وفق وتيرته." },
        { title: "حل نزاعك", body: "يقود وسيط مهني العملية بشكل نشط لضمان نتائج عادلة ومنظمة." },
      ],
    },
    pricing: {
      eyebrow: "الأسعار",
      title: "أسعار شفافة — من دون مفاجآت",
      body: "تتراوح معظم القضايا بين 900 و2,500 دولار، حسب التعقيد.",
      note: "سترى دائمًا التكاليف قبل أي دفعة.",
      checklist: ["التكلفة الكاملة للقضية", "حصتك الدقيقة", "قبل إجراء أي دفعة"],
      keyLine: "غالبًا ما تكون هذه التكلفة أقل مما يطلبه كثير من المحامين لمجرد البدء.",
    },
    trust: {
      title: "مصمم لظروف واقعية",
      body: "نحن ندرك أن النزاعات قد تكون عاطفية ومجهدة وأحيانًا غير مريحة.",
      items: ["تقليل التوتر", "تجنب النزاعات غير الضرورية", "مساعدة الطرفين على التقدم بهدوء"],
    },
    credibility: {
      title: "بإشراف وسيط محايد",
      body: "يقود وسيط مهني العملية بشكل نشط لضمان نتائج عادلة ومنظمة.",
    },
    finalCta: {
      headline: "ابدأ قضيتك الآن — لن يستغرق الأمر سوى بضع دقائق",
      body: "بلا مواعيد • بلا ضغط • تقدّم بالوتيرة التي تناسبك",
      cta: "ابدأ قضيتك",
    },
    footer: {
      contact: "",
      privacy: "الخصوصية",
      terms: "الشروط",
      rights: "",
    },
  },
  fa: {
    nav: {
      advantages: "مزایا",
      services: "خدمات",
      process: "روند کار",
      pricing: "هزینه‌ها",
      start: "پرونده را شروع کنید",
      language: "زبان",
    },
    hero: {
      eyebrow: "میانجی‌گری خانوادگی آنلاین",
      headline: "اختلافات طلاق و خانوادگی را حل کنید — بدون دادگاه، وکیل یا فشار",
      subheadline:
        "فوراً شروع کنید. بدون نوبت. هر طرف می‌تواند به زبان خودش شفاف و بدون سوءتفاهم ارتباط برقرار کند.",
      cta: "پرونده را در چند دقیقه شروع کنید",
      secondary: "بدون نیاز به نوبت • با سرعت خودتان پیش بروید",
      trustA: "فرآیند خصوصی آنلاین",
      trustB: "پشتیبانی میانجی بی‌طرف",
      trustC: "ارتباط چندزبانه",
      previewTitle: "مسیر پرونده",
      previewStatus: "آماده شروع",
      previewStepA: "پرونده را شروع کنید",
      previewStepB: "طرف مقابل به‌صورت خودکار دعوت می‌شود",
      previewStepC: "به پرسش‌های راهنما پاسخ دهید",
    },
    multilingual: {
      title: "شفاف ارتباط بگیرید — به زبان خودتان",
      body: [
        "در مسائل حقوقی، هر واژه اهمیت دارد.",
        "یک سوءتفاهم می‌تواند معنا را تغییر دهد، تنش ایجاد کند یا حل اختلاف را به تأخیر بیندازد.",
        "با Fast Dispute Resolution، هر طرف می‌تواند به زبان خودش ارتباط برقرار کند تا هم میانجی و هم طرف مقابل دقیقاً متوجه منظور شوند.",
        "بدون مترجم. بدون ابهام. فقط شفافیت.",
      ],
    },
    advantages: {
      eyebrow: "چرا مؤثر است",
      title: "راهی آرام‌تر و هوشمندانه‌تر برای حل اختلاف",
      intro: "برای کاهش فشار و کمک به پیشروی هر دو طرف طراحی شده است.",
      items: [
        { title: "شروع فوری", body: "بدون زمان‌بندی. همین حالا پرونده را شروع کنید." },
        { title: "با سرعت خودتان پیش بروید", body: "هر زمان برایتان مناسب است پاسخ دهید، بدون فشار و جلسه ثابت." },
        { title: "بدون نیاز به رویارویی", body: "نیازی به نشستن روبه‌رو نیست. همه‌چیز را آرام و آنلاین پیش ببرید." },
        { title: "حل سریع‌تر", body: "اختلاف‌ها را در چند روز یا چند هفته حل کنید، نه چند ماه." },
        { title: "میانجی بی‌طرف", body: "یک میانجی حرفه‌ای به‌صورت فعال روند را هدایت می‌کند تا نتایج منصفانه و ساختارمند تضمین شود." },
        { title: "خصوصی و محرمانه", body: "اطلاعات شما امن و محافظت‌شده باقی می‌ماند." },
      ],
    },
    services: {
      eyebrow: "در چه مواردی کمک می‌کنیم",
      title: "اختلاف‌های خانوادگی که به توافق روشن نیاز دارند",
      intro: "از بخش‌هایی شروع کنید که به پرونده شما مربوط است. روند آنلاین اطلاعات لازم را برای پیشرفت جمع‌آوری می‌کند.",
      items: [
        "توافق‌های طلاق و جدایی",
        "حضانت فرزند و برنامه والدگری",
        "ترتیبات حمایت مالی از فرزند",
        "حمایت همسر / نفقه",
        "تقسیم اموال و بدهی‌ها",
        "توافق‌های مالی",
        "حل عمومی اختلاف‌های خانوادگی",
      ],
    },
    whoItsFor: {
      title: "این برای چه کسانی است",
      items: [
        "زوج‌هایی که در حال جدایی یا طلاق هستند",
        "والدینی که در حال رسیدگی به حضانت یا حمایت مالی هستند",
        "افرادی که به دنبال راه‌حل سریع‌تر و خصوصی‌تر هستند",
        "موقعیت‌هایی که ارتباط در آن دشوار است",
      ],
    },
    process: {
      eyebrow: "روند کار",
      title: "چهار مرحله ساده",
      intro: "روند به‌صورت آنلاین آغاز می‌شود و بدون وقت‌های غیرضروری ادامه پیدا می‌کند.",
      steps: [
        { title: "پرونده را آنلاین شروع کنید", body: "فرم امن را باز کنید و بگویید چه موضوعی باید حل شود." },
        { title: "طرف مقابل به‌صورت خودکار دعوت می‌شود", body: "ما دعوت را انجام می‌دهیم — نیازی به هماهنگی نیست." },
        { title: "به پرسش‌های راهنما پاسخ دهید", body: "هر فرد با سرعت خود به پرسش‌های روشن پاسخ می‌دهد." },
        { title: "اختلاف را حل کنید", body: "یک میانجی حرفه‌ای به‌صورت فعال روند را هدایت می‌کند تا نتایج منصفانه و ساختارمند تضمین شود." },
      ],
    },
    pricing: {
      eyebrow: "هزینه‌ها",
      title: "قیمت‌گذاری شفاف — بدون غافلگیری",
      body: "بیشتر پرونده‌ها بسته به پیچیدگی بین ۹۰۰ تا ۲۵۰۰ دلار هستند.",
      note: "همیشه قبل از هر پرداختی هزینه‌ها را می‌بینید.",
      checklist: ["هزینه کامل پرونده", "سهم دقیق شما", "پیش از انجام هر پرداخت"],
      keyLine: "این معمولاً کمتر از مبلغی است که بسیاری از وکلا فقط برای شروع دریافت می‌کنند.",
    },
    trust: {
      title: "برای شرایط واقعی طراحی شده",
      body: "می‌دانیم اختلاف‌ها می‌توانند احساسی، پراسترس و گاهی ناراحت‌کننده باشند.",
      items: ["کاهش تنش", "پرهیز از تعارض‌های غیرضروری", "کمک به پیشروی آرام هر دو طرف"],
    },
    credibility: {
      title: "با راهنمایی میانجی بی‌طرف",
      body: "یک میانجی حرفه‌ای به‌صورت فعال روند را هدایت می‌کند تا نتایج منصفانه و ساختارمند تضمین شود.",
    },
    finalCta: {
      headline: "همین حالا پرونده‌تان را شروع کنید — فقط چند دقیقه زمان می‌برد",
      body: "بدون نوبت • بدون فشار • با سرعت خودتان پیش بروید",
      cta: "شروع پرونده",
    },
    footer: {
      contact: "",
      privacy: "حریم خصوصی",
      terms: "شرایط",
      rights: "",
    },
  },
  ru: {
    nav: {
      advantages: "Преимущества",
      services: "Услуги",
      process: "Как это работает",
      pricing: "Стоимость",
      start: "Начать дело",
      language: "Язык",
    },
    hero: {
      eyebrow: "Онлайн семейная медиация",
      headline: "Решайте развод и семейные споры — без суда, юристов и стресса",
      subheadline:
        "Начинайте сразу. Без записи. Каждая сторона может общаться на своем языке — ясно и без недопонимания.",
      cta: "Начать дело за несколько минут",
      secondary: "Без записи • В удобном для вас темпе",
      trustA: "Закрытый онлайн-процесс",
      trustB: "Поддержка нейтрального медиатора",
      trustC: "Многоязычное общение",
      previewTitle: "Ход дела",
      previewStatus: "Готово к началу",
      previewStepA: "Начать дело",
      previewStepB: "Другая сторона приглашается автоматически",
      previewStepC: "Ответить на вопросы",
    },
    multilingual: {
      title: "Общайтесь ясно — на своем языке",
      body: [
        "В юридических вопросах важно каждое слово.",
        "Одно недопонимание может исказить смысл, вызвать конфликт или задержать решение.",
        "С Fast Dispute Resolution каждая сторона может общаться на своем языке, чтобы и медиатор, и другая сторона точно понимали сказанное.",
        "Без переводчиков. Без путаницы. Только ясность.",
      ],
    },
    advantages: {
      eyebrow: "Почему это работает",
      title: "Более спокойный и разумный способ решать споры",
      intro: "Создано, чтобы снизить давление и помочь обеим сторонам двигаться вперед.",
      items: [
        { title: "Начните сразу", body: "Без расписания. Начните дело прямо сейчас." },
        { title: "В своем темпе", body: "Отвечайте, когда удобно вам, без давления и фиксированных сессий." },
        { title: "Без конфронтации", body: "Не нужно встречаться лицом к лицу. Решайте все спокойно онлайн." },
        { title: "Быстрее к решению", body: "Решайте споры за дни или недели, а не месяцы." },
        { title: "Нейтральный медиатор", body: "Профессиональный медиатор активно ведет процесс, чтобы обеспечить справедливые и структурированные результаты." },
        { title: "Частно и конфиденциально", body: "Ваша информация остается в безопасности и под защитой." },
      ],
    },
    services: {
      eyebrow: "С чем мы помогаем",
      title: "Семейные споры, где нужны четкие соглашения",
      intro: "Начните с тем, которые относятся к вашему делу. Онлайн-процесс помогает собрать нужную информацию для продвижения вперед.",
      items: [
        "Соглашения о разводе и раздельном проживании",
        "Опека над детьми и планы воспитания",
        "Договоренности о содержании детей",
        "Супружеская поддержка / алименты",
        "Раздел имущества и долгов",
        "Финансовые соглашения",
        "Общее разрешение семейных споров",
      ],
    },
    whoItsFor: {
      title: "Для кого это",
      items: [
        "Пары, проходящие через раздельное проживание или развод",
        "Родители, решающие вопросы опеки или содержания детей",
        "Люди, которым нужно более быстрое и частное решение",
        "Ситуации, когда общение затруднено",
      ],
    },
    process: {
      eyebrow: "Как это работает",
      title: "Четыре простых шага",
      intro: "Процесс начинается онлайн и продолжается без лишних встреч.",
      steps: [
        { title: "Начните дело онлайн", body: "Откройте защищенную форму и укажите, что нужно решить." },
        { title: "Другая сторона приглашается автоматически", body: "Мы сами отправляем приглашение — координация не требуется." },
        { title: "Ответьте на вопросы", body: "Каждый отвечает на понятные вопросы в своем темпе." },
        { title: "Разрешите спор", body: "Профессиональный медиатор активно ведет процесс, чтобы обеспечить справедливые и структурированные результаты." },
      ],
    },
    pricing: {
      eyebrow: "Стоимость",
      title: "Прозрачная стоимость — без сюрпризов",
      body: "Большинство дел стоит от 900 до 2 500 долларов в зависимости от сложности.",
      note: "Вы всегда увидите стоимость до любой оплаты.",
      checklist: ["Полная стоимость дела", "Ваша точная доля", "До внесения любого платежа"],
      keyLine: "Это часто дешевле, чем то, что многие юристы берут только за начало работы.",
    },
    trust: {
      title: "Создано для реальных ситуаций",
      body: "Мы понимаем, что споры могут быть эмоциональными, стрессовыми и иногда неудобными.",
      items: ["снизить напряжение", "избежать лишних конфликтов", "помочь обеим сторонам спокойно двигаться вперед"],
    },
    credibility: {
      title: "Под руководством нейтрального медиатора",
      body: "Профессиональный медиатор активно ведет процесс, чтобы обеспечить справедливые и структурированные результаты.",
    },
    finalCta: {
      headline: "Начните дело сейчас — это займет всего несколько минут",
      body: "Без записи • Без давления • В удобном для вас темпе",
      cta: "Начать дело",
    },
    footer: {
      contact: "",
      privacy: "Конфиденциальность",
      terms: "Условия",
      rights: "",
    },
  },
  zh: {
    nav: {
      advantages: "优势",
      services: "服务",
      process: "流程",
      pricing: "价格",
      start: "立即开始案件",
      language: "语言",
    },
    hero: {
      eyebrow: "在线家庭调解",
      headline: "解决离婚与家庭争议——无需上庭、律师或额外压力",
      subheadline:
        "立即开始，无需预约。双方都可以使用自己的语言清晰沟通，避免误解。",
      cta: "几分钟内开始您的案件",
      secondary: "无需预约 • 按照您的节奏推进",
      trustA: "私密在线流程",
      trustB: "中立调解员支持",
      trustC: "多语言沟通",
      previewTitle: "案件流程",
      previewStatus: "准备开始",
      previewStepA: "开始案件",
      previewStepB: "另一方会被自动邀请",
      previewStepC: "回答引导问题",
    },
    multilingual: {
      title: "清晰沟通——使用您的母语",
      body: [
        "在法律事务中，每一个词都很重要。",
        "一次误解就可能改变含义、引发冲突或延迟解决。",
        "通过 Fast Dispute Resolution，双方都可以使用自己的语言沟通，确保调解员和对方都能准确理解所表达的内容。",
        "无需翻译。没有混乱。只有清晰。",
      ],
    },
    advantages: {
      eyebrow: "为什么有效",
      title: "更平和、更明智的争议解决方式",
      intro: "旨在降低压力，帮助双方持续推进。",
      items: [
        { title: "立即开始", body: "无需排期，现在就能开始您的案件。" },
        { title: "按自己的节奏推进", body: "在您方便的时候回复，无压力、无固定会话。" },
        { title: "无需正面冲突", body: "不必面对面。在线也能平静处理全部流程。" },
        { title: "更快解决", body: "几天或几周内解决争议，而不是几个月。" },
        { title: "中立调解员", body: "专业调解员会主动持续引导整个流程，确保结果公平且结构清晰。" },
        { title: "私密且保密", body: "您的信息会被安全保护。" },
      ],
    },
    services: {
      eyebrow: "我们帮助解决",
      title: "需要明确协议的家庭争议",
      intro: "从适用于您案件的事项开始。在线流程可帮助收集推进所需信息。",
      items: [
        "离婚与分居协议",
        "子女监护与育儿计划",
        "子女抚养安排",
        "配偶支持 / 赡养费",
        "财产与债务分割",
        "财务和解协议",
        "一般家庭争议解决",
      ],
    },
    whoItsFor: {
      title: "适合哪些人",
      items: [
        "正在经历分居或离婚的伴侣",
        "正在处理监护或抚养支持问题的父母",
        "寻求更快且更私密解决方案的个人",
        "沟通存在困难的情况",
      ],
    },
    process: {
      eyebrow: "流程",
      title: "四个简单步骤",
      intro: "流程在线开始，并持续推进，无需不必要的预约。",
      steps: [
        { title: "在线开始案件", body: "打开安全表单，说明需要解决的问题。" },
        { title: "另一方会被自动邀请", body: "邀请由我们处理——您无需协调。" },
        { title: "回答引导问题", body: "每个人都可按自己的节奏回答清晰问题。" },
        { title: "解决争议", body: "专业调解员会主动持续引导整个流程，确保结果公平且结构清晰。" },
      ],
    },
    pricing: {
      eyebrow: "价格",
      title: "透明定价——没有意外",
      body: "大多数案件费用在 900 至 2,500 美元之间，取决于复杂程度。",
      note: "在任何付款前，您都会先看到费用。",
      checklist: ["案件总费用", "您的准确分摊", "在进行任何付款之前"],
      keyLine: "这通常低于许多律师仅开始办理就收取的费用。",
    },
    trust: {
      title: "为真实处境而设计",
      body: "我们理解争议往往伴随情绪、压力，有时还会令人不适。",
      items: ["缓解紧张", "避免不必要冲突", "帮助双方平静向前推进"],
    },
    credibility: {
      title: "由中立调解员引导",
      body: "专业调解员会主动持续引导整个流程，确保结果公平且结构清晰。",
    },
    finalCta: {
      headline: "立即开始您的案件——只需几分钟",
      body: "无需预约 • 无压力 • 按您的节奏推进",
      cta: "开始您的案件",
    },
    footer: {
      contact: "",
      privacy: "隐私",
      terms: "条款",
      rights: "",
    },
  },
  hi: {
    nav: {
      advantages: "लाभ",
      services: "सेवाएं",
      process: "कैसे काम करता है",
      pricing: "कीमत",
      start: "अपना केस शुरू करें",
      language: "भाषा",
    },
    hero: {
      eyebrow: "ऑनलाइन पारिवारिक मध्यस्थता",
      headline: "तलाक और पारिवारिक विवाद सुलझाएँ — बिना कोर्ट, वकील या तनाव",
      subheadline:
        "तुरंत शुरू करें। कोई अपॉइंटमेंट नहीं। हर पक्ष अपनी भाषा में साफ़ तौर पर बात कर सकता है, बिना गलतफहमी के।",
      cta: "कुछ ही मिनटों में केस शुरू करें",
      secondary: "कोई अपॉइंटमेंट नहीं • अपनी गति से आगे बढ़ें",
      trustA: "निजी ऑनलाइन प्रक्रिया",
      trustB: "निष्पक्ष मध्यस्थ सहायता",
      trustC: "बहुभाषी संवाद",
      previewTitle: "केस प्रवाह",
      previewStatus: "शुरू करने के लिए तैयार",
      previewStepA: "अपना केस शुरू करें",
      previewStepB: "दूसरे पक्ष को स्वचालित रूप से आमंत्रित किया जाता है",
      previewStepC: "मार्गदर्शित प्रश्नों के उत्तर दें",
    },
    multilingual: {
      title: "स्पष्ट संवाद करें — अपनी भाषा में",
      body: [
        "कानूनी मामलों में हर शब्द मायने रखता है।",
        "एक छोटी गलतफहमी भी अर्थ बदल सकती है, विवाद बढ़ा सकती है या समाधान में देरी कर सकती है।",
        "Fast Dispute Resolution के साथ, हर पक्ष अपनी भाषा में संवाद कर सकता है, जिससे मध्यस्थ और दूसरा पक्ष दोनों बात को पूरी तरह समझ सकें।",
        "न अनुवादक। न भ्रम। सिर्फ स्पष्टता।",
      ],
    },
    advantages: {
      eyebrow: "यह क्यों काम करता है",
      title: "विवाद सुलझाने का शांत और स्मार्ट तरीका",
      intro: "दबाव कम करने और दोनों पक्षों को आगे बढ़ाने के लिए बनाया गया है।",
      items: [
        { title: "तुरंत शुरू करें", body: "कोई शेड्यूलिंग नहीं। अभी अपना केस शुरू करें।" },
        { title: "अपनी गति से आगे बढ़ें", body: "जब आपके लिए सही हो तब जवाब दें — बिना दबाव, बिना तय सत्रों के।" },
        { title: "आमने-सामने टकराव की जरूरत नहीं", body: "सामने बैठना ज़रूरी नहीं। सब कुछ शांति से ऑनलाइन करें।" },
        { title: "तेज़ समाधान", body: "विवाद को महीनों नहीं, दिनों या हफ्तों में सुलझाएँ।" },
        { title: "निष्पक्ष मध्यस्थ", body: "एक पेशेवर मध्यस्थ निष्पक्ष और संरचित परिणाम सुनिश्चित करने के लिए प्रक्रिया का सक्रिय रूप से मार्गदर्शन कर रहा है।" },
        { title: "निजी और गोपनीय", body: "आपकी जानकारी सुरक्षित और संरक्षित रहती है।" },
      ],
    },
    services: {
      eyebrow: "हम किन मामलों में मदद करते हैं",
      title: "पारिवारिक विवाद जिन्हें स्पष्ट समझौतों की जरूरत है",
      intro: "अपने केस से जुड़े क्षेत्रों से शुरू करें। ऑनलाइन प्रवाह आगे बढ़ने के लिए आवश्यक जानकारी इकट्ठा करता है।",
      items: [
        "तलाक और अलगाव समझौते",
        "बच्चों की कस्टडी और पेरेंटिंग योजनाएँ",
        "चाइल्ड सपोर्ट व्यवस्थाएँ",
        "स्पाउस सपोर्ट / गुजारा भत्ता",
        "संपत्ति और ऋण का विभाजन",
        "वित्तीय सेटलमेंट समझौते",
        "सामान्य पारिवारिक विवाद समाधान",
      ],
    },
    whoItsFor: {
      title: "यह किनके लिए है",
      items: [
        "वे दंपत्ति जो अलगाव या तलाक की प्रक्रिया में हैं",
        "वे माता-पिता जो कस्टडी या सपोर्ट के मुद्दों पर काम कर रहे हैं",
        "वे व्यक्ति जो तेज़ और निजी समाधान चाहते हैं",
        "वे स्थितियाँ जहाँ संवाद कठिन है",
      ],
    },
    process: {
      eyebrow: "कैसे काम करता है",
      title: "चार सरल कदम",
      intro: "प्रक्रिया ऑनलाइन शुरू होती है और बिना अनावश्यक अपॉइंटमेंट के आगे बढ़ती है।",
      steps: [
        { title: "अपना केस ऑनलाइन शुरू करें", body: "सुरक्षित फॉर्म खोलें और बताएं कि क्या सुलझाना है।" },
        { title: "दूसरे पक्ष को स्वचालित रूप से आमंत्रित किया जाता है", body: "निमंत्रण हम संभालते हैं — आपको किसी समन्वय की ज़रूरत नहीं।" },
        { title: "मार्गदर्शित प्रश्नों के उत्तर दें", body: "हर व्यक्ति अपनी गति से स्पष्ट प्रश्नों के जवाब देता है।" },
        { title: "अपना विवाद सुलझाएँ", body: "एक पेशेवर मध्यस्थ निष्पक्ष और संरचित परिणाम सुनिश्चित करने के लिए प्रक्रिया का सक्रिय रूप से मार्गदर्शन कर रहा है।" },
      ],
    },
    pricing: {
      eyebrow: "कीमत",
      title: "पारदर्शी कीमत — बिना किसी छिपे आश्चर्य के",
      body: "अधिकांश केस जटिलता के आधार पर $900 से $2,500 के बीच होते हैं।",
      note: "किसी भी भुगतान से पहले आपको कीमत साफ़ दिखाई जाएगी।",
      checklist: ["केस की कुल लागत", "आपका सटीक हिस्सा", "किसी भी भुगतान से पहले"],
      keyLine: "यह अक्सर उतने से कम पड़ता है जितना कई वकील सिर्फ शुरुआत के लिए लेते हैं।",
    },
    trust: {
      title: "वास्तविक परिस्थितियों के लिए बनाया गया",
      body: "हम समझते हैं कि विवाद भावनात्मक, तनावपूर्ण और कभी-कभी असहज हो सकते हैं।",
      items: ["तनाव कम करना", "अनावश्यक टकराव से बचना", "दोनों पक्षों को शांत तरीके से आगे बढ़ाने में मदद करना"],
    },
    credibility: {
      title: "निष्पक्ष मध्यस्थ के मार्गदर्शन में",
      body: "एक पेशेवर मध्यस्थ निष्पक्ष और संरचित परिणाम सुनिश्चित करने के लिए प्रक्रिया का सक्रिय रूप से मार्गदर्शन कर रहा है।",
    },
    finalCta: {
      headline: "अभी अपना केस शुरू करें — इसमें सिर्फ कुछ मिनट लगते हैं",
      body: "कोई अपॉइंटमेंट नहीं • कोई दबाव नहीं • अपनी गति से आगे बढ़ें",
      cta: "अपना केस शुरू करें",
    },
    footer: {
      contact: "",
      privacy: "गोपनीयता",
      terms: "शर्तें",
      rights: "",
    },
  },
}

export function normalizeLanguage(value: string | null | undefined): LanguageCode {
  const normalized = value?.split("-")[0]?.toLowerCase()
  return languages.some((language) => language.code === normalized) ? (normalized as LanguageCode) : "en"
}

export function getDirection(language: LanguageCode) {
  return languages.find((item) => item.code === language)?.dir || "ltr"
}
