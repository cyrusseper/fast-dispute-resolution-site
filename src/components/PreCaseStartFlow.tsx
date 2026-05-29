"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, Clipboard, Loader2, Search, ShieldCheck } from "lucide-react"
import { BRAND_NAME, languages, type LanguageCode } from "@/lib/i18n"

type IssueType =
  | "custody_parenting"
  | "divorce_separation"
  | "custody_and_separation"
  | "child_support"
  | "spousal_support"
  | "property_debt"
  | "other_family"
type Posture = "mostly_agree" | "need_help" | "not_sure"
type OnlineParticipation = "yes" | "maybe" | "no"
type PaymentResponsibility = "self" | "split_equal" | "other_party"
type RecommendedPath = "guided_agreement_builder" | "guided_online_mediation"

type DraftResponse = {
  draft?: {
    chosenLanguage?: LanguageCode
    issueType?: IssueType | null
    jurisdiction?: string | null
    mostlyAgree?: Posture | null
    otherPartyOnline?: OnlineParticipation | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    paymentResponsibility?: PaymentResponsibility | null
    recommendedPath?: RecommendedPath | null
    lastCompletedStep?: number | null
  }
  resumeToken?: string
  continueUrl?: string | null
  error?: string
}

type FlowCopy = {
  saved: string
  loading: string
  error: string
  back: string
  continue: string
  save: string
  progress: string
  optional: string
  planningBadge: string
  language: {
    title: string
    helper: string
  }
  issue: {
    title: string
    helper: string
    options: Record<IssueType, string>
  }
  jurisdiction: {
    title: string
    helper: string
    searchPlaceholder: string
    selectedLabel: string
    noResults: string
  }
  mostlyAgree: {
    title: string
    options: Record<Posture, string>
  }
  otherPartyOnline: {
    title: string
    options: Record<OnlineParticipation, string>
  }
  contact: {
    title: string
    helper: string
    firstName: string
    middleName: string
    lastName: string
    email: string
    phone: string
    reassurance: string
  }
  payment: {
    title: string
    helper: string
    options: Record<PaymentResponsibility, string>
  }
  recommended: {
    title: string
    builder: string
    mediation: string
    pricing: string
    nextTitle: string
    next: string[]
    done: string
    edit: string
    copyContinueLink: string
    copied: string
    testerNote: string
  }
}

const usStates = [
  ["US-AL", "Alabama"],
  ["US-AK", "Alaska"],
  ["US-AZ", "Arizona"],
  ["US-AR", "Arkansas"],
  ["US-CA", "California"],
  ["US-CO", "Colorado"],
  ["US-CT", "Connecticut"],
  ["US-DE", "Delaware"],
  ["US-FL", "Florida"],
  ["US-GA", "Georgia"],
  ["US-HI", "Hawaii"],
  ["US-ID", "Idaho"],
  ["US-IL", "Illinois"],
  ["US-IN", "Indiana"],
  ["US-IA", "Iowa"],
  ["US-KS", "Kansas"],
  ["US-KY", "Kentucky"],
  ["US-LA", "Louisiana"],
  ["US-ME", "Maine"],
  ["US-MD", "Maryland"],
  ["US-MA", "Massachusetts"],
  ["US-MI", "Michigan"],
  ["US-MN", "Minnesota"],
  ["US-MS", "Mississippi"],
  ["US-MO", "Missouri"],
  ["US-MT", "Montana"],
  ["US-NE", "Nebraska"],
  ["US-NV", "Nevada"],
  ["US-NH", "New Hampshire"],
  ["US-NJ", "New Jersey"],
  ["US-NM", "New Mexico"],
  ["US-NY", "New York"],
  ["US-NC", "North Carolina"],
  ["US-ND", "North Dakota"],
  ["US-OH", "Ohio"],
  ["US-OK", "Oklahoma"],
  ["US-OR", "Oregon"],
  ["US-PA", "Pennsylvania"],
  ["US-RI", "Rhode Island"],
  ["US-SC", "South Carolina"],
  ["US-SD", "South Dakota"],
  ["US-TN", "Tennessee"],
  ["US-TX", "Texas"],
  ["US-UT", "Utah"],
  ["US-VT", "Vermont"],
  ["US-VA", "Virginia"],
  ["US-WA", "Washington"],
  ["US-WV", "West Virginia"],
  ["US-WI", "Wisconsin"],
  ["US-WY", "Wyoming"],
] as const

type UsStateCode = (typeof usStates)[number][0]

const stateByCode = new Map<string, string>(usStates)

const normalizeJurisdiction = (value: string | null | undefined) => {
  if (!value) return ""
  const trimmed = value.trim()
  if (stateByCode.has(trimmed)) return trimmed
  const upper = trimmed.toUpperCase()
  if (stateByCode.has(`US-${upper}`)) return `US-${upper}`
  const match = usStates.find(([, name]) => name.toLowerCase() === trimmed.toLowerCase())
  return match?.[0] || ""
}

const getStateName = (code: string) => stateByCode.get(code) || ""

const fallbackCopy: FlowCopy = {
  saved: "Saved",
  loading: "Saving...",
  error: "Please complete this step to continue.",
  back: "Back",
  continue: "Continue",
  save: "Save progress",
  progress: "Step",
  optional: "optional",
  planningBadge: "Planning stage",
  language: {
    title: "What language would you like to use?",
    helper: "The rest of this setup will switch right away.",
  },
  issue: {
    title: "What do you need help with?",
    helper: "Choose the closest match.",
    options: {
      custody_parenting: "Child custody / parenting plan",
      divorce_separation: "Divorce / separation",
      custody_and_separation: "Both custody and separation",
      child_support: "Child support",
      spousal_support: "Spousal support",
      property_debt: "Property / debt",
      other_family: "Other family matter",
    },
  },
  jurisdiction: {
    title: "Which U.S. state applies?",
    helper: "Choose the state where this family matter should be handled.",
    searchPlaceholder: "Search states",
    selectedLabel: "Selected state",
    noResults: "No matching states",
  },
  mostlyAgree: {
    title: "Do you already mostly agree on the outcome?",
    options: {
      mostly_agree: "Yes, mostly",
      need_help: "No, we need help reaching agreement",
      not_sure: "Not sure yet",
    },
  },
  otherPartyOnline: {
    title: "Is the other person likely to participate online?",
    options: {
      yes: "Yes",
      maybe: "Maybe",
      no: "No",
    },
  },
  contact: {
    title: "Save your progress",
    helper: "Enter your name and email so we can bring you back to this step later.",
    firstName: "First name",
    middleName: "Middle name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    reassurance: "Your progress is saved securely. We use your email to help you continue later.",
  },
  payment: {
    title: "Who should pay the remaining balance?",
    helper: "This only records responsibility. No payment is collected here.",
    options: {
      self: "I will pay the remaining balance",
      split_equal: "Split the remaining balance equally",
      other_party: "I want the other party to pay the remaining balance",
    },
  },
  recommended: {
    title: "Recommended path",
    builder: "Guided Agreement Builder",
    mediation: "Guided Online Mediation",
    pricing: "Exact pricing will be shown before payment.",
    nextTitle: "What happens next",
    next: [
      "Your answers are saved.",
      "You can return with your continue link.",
      "Secure setup and payment will come later.",
    ],
    done: "Done for now",
    edit: "Edit answers",
    copyContinueLink: "Copy continue link",
    copied: "Copied",
    testerNote: "For testing only. The link is not shown on the page.",
  },
}

const translatedCopy: Partial<Record<LanguageCode, FlowCopy>> = {
  en: fallbackCopy,
  es: {
    ...fallbackCopy,
    saved: "Guardado",
    loading: "Guardando...",
    error: "Completa este paso para continuar.",
    back: "Atrás",
    continue: "Continuar",
    save: "Guardar progreso",
    progress: "Paso",
    optional: "opcional",
    planningBadge: "Etapa de planificación",
    language: { title: "¿Qué idioma quieres usar?", helper: "El resto de esta configuración cambiará de inmediato." },
    issue: {
      title: "¿Con qué necesitas ayuda?",
      helper: "Elige la opción más cercana.",
      options: {
        custody_parenting: "Custodia de hijos / plan de crianza",
        divorce_separation: "Divorcio / separación",
        custody_and_separation: "Custodia y separación",
        child_support: "Manutención de hijos",
        spousal_support: "Manutención conyugal",
        property_debt: "Bienes / deudas",
        other_family: "Otro asunto familiar",
      },
    },
    jurisdiction: {
      title: "¿Qué estado de EE. UU. aplica?",
      helper: "Elige el estado donde debe manejarse este asunto familiar.",
      searchPlaceholder: "Buscar estados",
      selectedLabel: "Estado seleccionado",
      noResults: "No hay estados coincidentes",
    },
    mostlyAgree: {
      title: "¿Ya están mayormente de acuerdo con el resultado?",
      options: {
        mostly_agree: "Sí, en su mayoría",
        need_help: "No, necesitamos ayuda para llegar a un acuerdo",
        not_sure: "No estoy seguro todavía",
      },
    },
    otherPartyOnline: { title: "¿Es probable que la otra persona participe en línea?", options: { yes: "Sí", maybe: "Tal vez", no: "No" } },
    contact: {
      title: "Guarda tu progreso",
      helper: "Ingresa tu nombre y correo para que podamos traerte de vuelta a este paso más tarde.",
      firstName: "Nombre",
      middleName: "Segundo nombre",
      lastName: "Apellido",
      email: "Correo electrónico",
      phone: "Teléfono",
      reassurance: "Tu progreso se guarda de forma segura. Usamos tu correo para ayudarte a continuar después.",
    },
    payment: {
      title: "¿Quién debe pagar el saldo restante?",
      helper: "Esto solo registra la responsabilidad. Aquí no se cobra ningún pago.",
      options: {
        self: "Yo pagaré el saldo restante",
        split_equal: "Dividir el saldo restante por igual",
        other_party: "Quiero que la otra parte pague el saldo restante",
      },
    },
    recommended: {
      title: "Ruta recomendada",
      builder: "Constructor guiado de acuerdos",
      mediation: "Mediación guiada en línea",
      pricing: "El precio exacto se mostrará antes del pago.",
      nextTitle: "Qué pasa después",
      next: ["Tus respuestas están guardadas.", "Puedes volver con tu enlace para continuar.", "La configuración segura y el pago vendrán después."],
      done: "Terminar por ahora",
      edit: "Editar respuestas",
      copyContinueLink: "Copiar enlace para continuar",
      copied: "Copiado",
      testerNote: "Solo para pruebas. El enlace no se muestra en la página.",
    },
  },
  pt: {
    ...fallbackCopy,
    saved: "Salvo",
    loading: "Salvando...",
    error: "Conclua esta etapa para continuar.",
    back: "Voltar",
    continue: "Continuar",
    save: "Salvar progresso",
    progress: "Etapa",
    optional: "opcional",
    planningBadge: "Etapa de planejamento",
    language: { title: "Que idioma você gostaria de usar?", helper: "O restante desta configuração mudará imediatamente." },
    issue: {
      title: "Com o que você precisa de ajuda?",
      helper: "Escolha a opção mais próxima.",
      options: {
        custody_parenting: "Guarda dos filhos / plano parental",
        divorce_separation: "Divórcio / separação",
        custody_and_separation: "Guarda e separação",
        child_support: "Pensão alimentícia para filhos",
        spousal_support: "Pensão entre cônjuges",
        property_debt: "Bens / dívidas",
        other_family: "Outro assunto familiar",
      },
    },
    jurisdiction: {
      title: "Qual estado dos EUA se aplica?",
      helper: "Escolha o estado onde este assunto familiar deve ser tratado.",
      searchPlaceholder: "Buscar estados",
      selectedLabel: "Estado selecionado",
      noResults: "Nenhum estado encontrado",
    },
    mostlyAgree: {
      title: "Vocês já concordam em grande parte com o resultado?",
      options: {
        mostly_agree: "Sim, em grande parte",
        need_help: "Não, precisamos de ajuda para chegar a um acordo",
        not_sure: "Ainda não tenho certeza",
      },
    },
    otherPartyOnline: { title: "A outra pessoa provavelmente participará online?", options: { yes: "Sim", maybe: "Talvez", no: "Não" } },
    contact: {
      title: "Salve seu progresso",
      helper: "Informe seu nome e e-mail para que possamos trazer você de volta a esta etapa depois.",
      firstName: "Nome",
      middleName: "Nome do meio",
      lastName: "Sobrenome",
      email: "E-mail",
      phone: "Telefone",
      reassurance: "Seu progresso é salvo com segurança. Usamos seu e-mail para ajudar você a continuar depois.",
    },
    payment: {
      title: "Quem deve pagar o saldo restante?",
      helper: "Isso apenas registra a responsabilidade. Nenhum pagamento é cobrado aqui.",
      options: {
        self: "Eu pagarei o saldo restante",
        split_equal: "Dividir o saldo restante igualmente",
        other_party: "Quero que a outra parte pague o saldo restante",
      },
    },
    recommended: {
      title: "Caminho recomendado",
      builder: "Construtor guiado de acordo",
      mediation: "Mediação online guiada",
      pricing: "O preço exato será mostrado antes do pagamento.",
      nextTitle: "O que acontece a seguir",
      next: ["Suas respostas estão salvas.", "Você pode voltar com seu link de continuação.", "A configuração segura e o pagamento virão depois."],
      done: "Concluir por agora",
      edit: "Editar respostas",
      copyContinueLink: "Copiar link de continuação",
      copied: "Copiado",
      testerNote: "Somente para teste. O link não é exibido na página.",
    },
  },
  fr: {
    ...fallbackCopy,
    saved: "Enregistré",
    loading: "Enregistrement...",
    error: "Complétez cette étape pour continuer.",
    back: "Retour",
    continue: "Continuer",
    save: "Enregistrer",
    progress: "Étape",
    optional: "facultatif",
    planningBadge: "Étape de planification",
    language: { title: "Quelle langue souhaitez-vous utiliser ?", helper: "Le reste de cette configuration changera immédiatement." },
    issue: {
      title: "De quoi avez-vous besoin ?",
      helper: "Choisissez l’option la plus proche.",
      options: {
        custody_parenting: "Garde d’enfant / plan parental",
        divorce_separation: "Divorce / séparation",
        custody_and_separation: "Garde et séparation",
        child_support: "Pension alimentaire pour enfant",
        spousal_support: "Pension alimentaire entre époux",
        property_debt: "Biens / dettes",
        other_family: "Autre question familiale",
      },
    },
    jurisdiction: {
      title: "Quel État américain s’applique ?",
      helper: "Choisissez l’État où cette question familiale doit être traitée.",
      searchPlaceholder: "Rechercher un État",
      selectedLabel: "État sélectionné",
      noResults: "Aucun État correspondant",
    },
    mostlyAgree: {
      title: "Êtes-vous déjà principalement d’accord sur le résultat ?",
      options: {
        mostly_agree: "Oui, principalement",
        need_help: "Non, nous avons besoin d’aide pour trouver un accord",
        not_sure: "Pas encore sûr",
      },
    },
    otherPartyOnline: { title: "L’autre personne est-elle susceptible de participer en ligne ?", options: { yes: "Oui", maybe: "Peut-être", no: "Non" } },
    contact: {
      title: "Enregistrer votre progression",
      helper: "Indiquez votre nom et votre e-mail afin que nous puissions vous ramener à cette étape plus tard.",
      firstName: "Prénom",
      middleName: "Deuxième prénom",
      lastName: "Nom de famille",
      email: "E-mail",
      phone: "Téléphone",
      reassurance: "Votre progression est enregistrée en sécurité. Nous utilisons votre e-mail pour vous aider à reprendre plus tard.",
    },
    payment: {
      title: "Qui devrait payer le solde restant ?",
      helper: "Cela indique seulement la responsabilité. Aucun paiement n’est perçu ici.",
      options: {
        self: "Je paierai le solde restant",
        split_equal: "Partager le solde restant à parts égales",
        other_party: "Je souhaite que l’autre partie paie le solde restant",
      },
    },
    recommended: {
      title: "Parcours recommandé",
      builder: "Créateur d’accord guidé",
      mediation: "Médiation en ligne guidée",
      pricing: "Le prix exact sera indiqué avant le paiement.",
      nextTitle: "Ce qui se passe ensuite",
      next: ["Vos réponses sont enregistrées.", "Vous pouvez revenir avec votre lien de reprise.", "La configuration sécurisée et le paiement viendront plus tard."],
      done: "Terminer pour l’instant",
      edit: "Modifier les réponses",
      copyContinueLink: "Copier le lien de reprise",
      copied: "Copié",
      testerNote: "Réservé aux tests. Le lien n’est pas affiché sur la page.",
    },
  },
  ar: {
    ...fallbackCopy,
    saved: "محفوظ",
    loading: "جار الحفظ...",
    error: "يرجى إكمال هذه الخطوة للمتابعة.",
    back: "رجوع",
    continue: "متابعة",
    save: "حفظ التقدم",
    progress: "الخطوة",
    optional: "اختياري",
    planningBadge: "مرحلة التخطيط",
    language: { title: "ما اللغة التي ترغب في استخدامها؟", helper: "سيتغير باقي هذا الإعداد فورًا." },
    issue: {
      title: "بماذا تحتاج إلى مساعدة؟",
      helper: "اختر الخيار الأقرب.",
      options: {
        custody_parenting: "حضانة الأطفال / خطة الأبوة",
        divorce_separation: "طلاق / انفصال",
        custody_and_separation: "الحضانة والانفصال معًا",
        child_support: "نفقة الطفل",
        spousal_support: "نفقة الزوج/الزوجة",
        property_debt: "الممتلكات / الديون",
        other_family: "مسألة أسرية أخرى",
      },
    },
    jurisdiction: {
      title: "أي ولاية أمريكية تنطبق؟",
      helper: "اختر الولاية التي يجب التعامل فيها مع هذه المسألة الأسرية.",
      searchPlaceholder: "ابحث عن ولاية",
      selectedLabel: "الولاية المختارة",
      noResults: "لا توجد ولايات مطابقة",
    },
    mostlyAgree: {
      title: "هل أنتم متفقون غالبًا على النتيجة؟",
      options: {
        mostly_agree: "نعم، غالبًا",
        need_help: "لا، نحتاج مساعدة للوصول إلى اتفاق",
        not_sure: "لست متأكدًا بعد",
      },
    },
    otherPartyOnline: { title: "هل من المحتمل أن يشارك الشخص الآخر عبر الإنترنت؟", options: { yes: "نعم", maybe: "ربما", no: "لا" } },
    contact: {
      title: "احفظ تقدمك",
      helper: "أدخل اسمك وبريدك الإلكتروني حتى نعيدك إلى هذه الخطوة لاحقًا.",
      firstName: "الاسم الأول",
      middleName: "الاسم الأوسط",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      reassurance: "يتم حفظ تقدمك بأمان. نستخدم بريدك الإلكتروني لمساعدتك على المتابعة لاحقًا.",
    },
    payment: {
      title: "من يجب أن يدفع الرصيد المتبقي؟",
      helper: "هذا يسجل المسؤولية فقط. لا يتم تحصيل أي دفعة هنا.",
      options: {
        self: "سأدفع الرصيد المتبقي",
        split_equal: "تقسيم الرصيد المتبقي بالتساوي",
        other_party: "أريد أن يدفع الطرف الآخر الرصيد المتبقي",
      },
    },
    recommended: {
      title: "المسار الموصى به",
      builder: "منشئ اتفاق موجه",
      mediation: "وساطة موجهة عبر الإنترنت",
      pricing: "سيظهر السعر الدقيق قبل الدفع.",
      nextTitle: "ماذا يحدث بعد ذلك",
      next: ["تم حفظ إجاباتك.", "يمكنك العودة باستخدام رابط المتابعة.", "سيأتي الإعداد الآمن والدفع لاحقًا."],
      done: "انتهيت الآن",
      edit: "تعديل الإجابات",
      copyContinueLink: "نسخ رابط المتابعة",
      copied: "تم النسخ",
      testerNote: "للاختبار فقط. لا يظهر الرابط على الصفحة.",
    },
  },
  fa: {
    ...fallbackCopy,
    saved: "ذخیره شد",
    loading: "در حال ذخیره...",
    error: "برای ادامه این مرحله را کامل کنید.",
    back: "بازگشت",
    continue: "ادامه",
    save: "ذخیره پیشرفت",
    progress: "مرحله",
    optional: "اختیاری",
    planningBadge: "مرحله برنامه‌ریزی",
    language: { title: "می‌خواهید از چه زبانی استفاده کنید؟", helper: "بقیه این فرایند فوراً به همان زبان تغییر می‌کند." },
    issue: {
      title: "برای چه موضوعی کمک می‌خواهید؟",
      helper: "نزدیک‌ترین گزینه را انتخاب کنید.",
      options: {
        custody_parenting: "حضانت فرزند / برنامه والدگری",
        divorce_separation: "طلاق / جدایی",
        custody_and_separation: "هم حضانت و هم جدایی",
        child_support: "نفقه فرزند",
        spousal_support: "حمایت مالی همسر",
        property_debt: "اموال / بدهی",
        other_family: "موضوع خانوادگی دیگر",
      },
    },
    jurisdiction: {
      title: "کدام ایالت آمریکا اعمال می‌شود؟",
      helper: "ایالتی را انتخاب کنید که این موضوع خانوادگی باید در آن رسیدگی شود.",
      searchPlaceholder: "جستجوی ایالت‌ها",
      selectedLabel: "ایالت انتخاب‌شده",
      noResults: "ایالت مطابقی پیدا نشد",
    },
    mostlyAgree: {
      title: "آیا درباره نتیجه تا حد زیادی توافق دارید؟",
      options: {
        mostly_agree: "بله، تا حد زیادی",
        need_help: "نه، برای رسیدن به توافق کمک لازم داریم",
        not_sure: "هنوز مطمئن نیستم",
      },
    },
    otherPartyOnline: { title: "آیا احتمال دارد طرف مقابل آنلاین شرکت کند؟", options: { yes: "بله", maybe: "شاید", no: "نه" } },
    contact: {
      title: "پیشرفت خود را ذخیره کنید",
      helper: "نام و ایمیل خود را وارد کنید تا بعداً شما را به همین مرحله برگردانیم.",
      firstName: "نام",
      middleName: "نام میانی",
      lastName: "نام خانوادگی",
      email: "ایمیل",
      phone: "تلفن",
      reassurance: "پیشرفت شما به‌صورت امن ذخیره می‌شود. از ایمیل شما برای ادامه دادن در آینده استفاده می‌کنیم.",
    },
    payment: {
      title: "چه کسی باید باقی‌مانده مبلغ را پرداخت کند؟",
      helper: "اینجا فقط مسئولیت پرداخت ثبت می‌شود. پرداختی دریافت نمی‌شود.",
      options: {
        self: "من باقی‌مانده مبلغ را پرداخت می‌کنم",
        split_equal: "باقی‌مانده مبلغ به طور مساوی تقسیم شود",
        other_party: "می‌خواهم طرف مقابل باقی‌مانده مبلغ را پرداخت کند",
      },
    },
    recommended: {
      title: "مسیر پیشنهادی",
      builder: "سازنده توافق راهنمایی‌شده",
      mediation: "میانجی‌گری آنلاین راهنمایی‌شده",
      pricing: "قیمت دقیق پیش از پرداخت نمایش داده می‌شود.",
      nextTitle: "بعد چه می‌شود",
      next: ["پاسخ‌های شما ذخیره شده است.", "می‌توانید با پیوند ادامه برگردید.", "تنظیم امن و پرداخت بعداً انجام می‌شود."],
      done: "فعلاً تمام",
      edit: "ویرایش پاسخ‌ها",
      copyContinueLink: "کپی پیوند ادامه",
      copied: "کپی شد",
      testerNote: "فقط برای آزمایش. پیوند در صفحه نمایش داده نمی‌شود.",
    },
  },
  ru: {
    ...fallbackCopy,
    saved: "Сохранено",
    loading: "Сохранение...",
    error: "Заполните этот шаг, чтобы продолжить.",
    back: "Назад",
    continue: "Продолжить",
    save: "Сохранить",
    progress: "Шаг",
    optional: "необязательно",
    planningBadge: "Этап планирования",
    language: { title: "Какой язык вы хотите использовать?", helper: "Остальная часть настройки сразу переключится." },
    issue: {
      title: "С чем вам нужна помощь?",
      helper: "Выберите ближайший вариант.",
      options: {
        custody_parenting: "Опека над ребенком / родительский план",
        divorce_separation: "Развод / раздельное проживание",
        custody_and_separation: "Опека и раздельное проживание",
        child_support: "Алименты на ребенка",
        spousal_support: "Супружеская поддержка",
        property_debt: "Имущество / долги",
        other_family: "Другой семейный вопрос",
      },
    },
    jurisdiction: {
      title: "Какой штат США применяется?",
      helper: "Выберите штат, где должен рассматриваться этот семейный вопрос.",
      searchPlaceholder: "Поиск штатов",
      selectedLabel: "Выбранный штат",
      noResults: "Нет подходящих штатов",
    },
    mostlyAgree: {
      title: "Вы уже в основном согласны с результатом?",
      options: {
        mostly_agree: "Да, в основном",
        need_help: "Нет, нам нужна помощь, чтобы договориться",
        not_sure: "Пока не уверен(а)",
      },
    },
    otherPartyOnline: { title: "Вероятно ли, что другой человек будет участвовать онлайн?", options: { yes: "Да", maybe: "Возможно", no: "Нет" } },
    contact: {
      title: "Сохраните прогресс",
      helper: "Введите имя и электронную почту, чтобы мы могли вернуть вас к этому шагу позже.",
      firstName: "Имя",
      middleName: "Отчество",
      lastName: "Фамилия",
      email: "Эл. почта",
      phone: "Телефон",
      reassurance: "Ваш прогресс сохраняется безопасно. Мы используем вашу почту, чтобы помочь вам продолжить позже.",
    },
    payment: {
      title: "Кто должен оплатить оставшийся баланс?",
      helper: "Это только фиксирует ответственность. Оплата здесь не взимается.",
      options: {
        self: "Я оплачу оставшийся баланс",
        split_equal: "Разделить оставшийся баланс поровну",
        other_party: "Я хочу, чтобы другая сторона оплатила оставшийся баланс",
      },
    },
    recommended: {
      title: "Рекомендуемый путь",
      builder: "Пошаговый конструктор соглашения",
      mediation: "Пошаговая онлайн-медиация",
      pricing: "Точная цена будет показана перед оплатой.",
      nextTitle: "Что дальше",
      next: ["Ваши ответы сохранены.", "Вы можете вернуться по ссылке продолжения.", "Безопасная настройка и оплата будут позже."],
      done: "Готово на сейчас",
      edit: "Изменить ответы",
      copyContinueLink: "Скопировать ссылку продолжения",
      copied: "Скопировано",
      testerNote: "Только для тестирования. Ссылка не отображается на странице.",
    },
  },
  zh: {
    ...fallbackCopy,
    saved: "已保存",
    loading: "正在保存...",
    error: "请完成此步骤以继续。",
    back: "返回",
    continue: "继续",
    save: "保存进度",
    progress: "步骤",
    optional: "可选",
    planningBadge: "规划阶段",
    language: { title: "您想使用哪种语言？", helper: "接下来的设置会立即切换。" },
    issue: {
      title: "您需要哪方面的帮助？",
      helper: "请选择最接近的选项。",
      options: {
        custody_parenting: "子女监护 / 育儿计划",
        divorce_separation: "离婚 / 分居",
        custody_and_separation: "监护和分居",
        child_support: "子女抚养费",
        spousal_support: "配偶赡养费",
        property_debt: "财产 / 债务",
        other_family: "其他家庭事项",
      },
    },
    jurisdiction: {
      title: "适用哪个美国州？",
      helper: "请选择应处理该家庭事项的州。",
      searchPlaceholder: "搜索州",
      selectedLabel: "已选州",
      noResults: "没有匹配的州",
    },
    mostlyAgree: {
      title: "你们是否已经基本同意结果？",
      options: {
        mostly_agree: "是的，基本同意",
        need_help: "没有，我们需要帮助达成协议",
        not_sure: "还不确定",
      },
    },
    otherPartyOnline: { title: "对方是否可能在线参与？", options: { yes: "是", maybe: "可能", no: "否" } },
    contact: {
      title: "保存您的进度",
      helper: "请输入姓名和电子邮件，以便我们稍后带您回到这一步。",
      firstName: "名字",
      middleName: "中间名",
      lastName: "姓氏",
      email: "电子邮件",
      phone: "电话",
      reassurance: "您的进度会被安全保存。我们使用您的电子邮件帮助您稍后继续。",
    },
    payment: {
      title: "谁应支付剩余余额？",
      helper: "这里只记录责任。不收取付款。",
      options: {
        self: "我将支付剩余余额",
        split_equal: "平均分摊剩余余额",
        other_party: "我希望对方支付剩余余额",
      },
    },
    recommended: {
      title: "推荐路径",
      builder: "引导式协议生成器",
      mediation: "引导式在线调解",
      pricing: "确切价格会在付款前显示。",
      nextTitle: "接下来会发生什么",
      next: ["您的答案已保存。", "您可以用继续链接返回。", "安全设置和付款将在稍后进行。"],
      done: "暂时完成",
      edit: "编辑答案",
      copyContinueLink: "复制继续链接",
      copied: "已复制",
      testerNote: "仅用于测试。链接不会显示在页面上。",
    },
  },
  hi: {
    ...fallbackCopy,
    saved: "सहेजा गया",
    loading: "सहेजा जा रहा है...",
    error: "जारी रखने के लिए यह चरण पूरा करें.",
    back: "वापस",
    continue: "जारी रखें",
    save: "प्रगति सहेजें",
    progress: "चरण",
    optional: "वैकल्पिक",
    planningBadge: "योजना चरण",
    language: { title: "आप कौन सी भाषा उपयोग करना चाहेंगे?", helper: "बाकी सेटअप तुरंत बदल जाएगा." },
    issue: {
      title: "आपको किस बात में मदद चाहिए?",
      helper: "सबसे निकट विकल्प चुनें.",
      options: {
        custody_parenting: "बाल अभिरक्षा / पेरेंटिंग योजना",
        divorce_separation: "तलाक / अलगाव",
        custody_and_separation: "अभिरक्षा और अलगाव दोनों",
        child_support: "बाल सहायता",
        spousal_support: "जीवनसाथी सहायता",
        property_debt: "संपत्ति / ऋण",
        other_family: "अन्य पारिवारिक मामला",
      },
    },
    jurisdiction: {
      title: "कौन सा अमेरिकी राज्य लागू होता है?",
      helper: "वह राज्य चुनें जहाँ यह पारिवारिक मामला संभाला जाना चाहिए.",
      searchPlaceholder: "राज्य खोजें",
      selectedLabel: "चुना गया राज्य",
      noResults: "कोई मेल खाता राज्य नहीं",
    },
    mostlyAgree: {
      title: "क्या आप परिणाम पर अधिकतर सहमत हैं?",
      options: {
        mostly_agree: "हाँ, अधिकतर",
        need_help: "नहीं, हमें समझौते तक पहुँचने में मदद चाहिए",
        not_sure: "अभी निश्चित नहीं",
      },
    },
    otherPartyOnline: { title: "क्या दूसरा व्यक्ति ऑनलाइन भाग लेने की संभावना रखता है?", options: { yes: "हाँ", maybe: "शायद", no: "नहीं" } },
    contact: {
      title: "अपनी प्रगति सहेजें",
      helper: "अपना नाम और ईमेल दर्ज करें ताकि हम आपको बाद में इसी चरण पर वापस ला सकें.",
      firstName: "पहला नाम",
      middleName: "मध्य नाम",
      lastName: "अंतिम नाम",
      email: "ईमेल",
      phone: "फोन",
      reassurance: "आपकी प्रगति सुरक्षित रूप से सहेजी जाती है. हम आपके ईमेल का उपयोग आपको बाद में जारी रखने में मदद करने के लिए करते हैं.",
    },
    payment: {
      title: "बाकी राशि कौन चुकाएगा?",
      helper: "यह केवल जिम्मेदारी दर्ज करता है. यहाँ कोई भुगतान नहीं लिया जाता.",
      options: {
        self: "मैं बाकी राशि चुकाऊँगा/चुकाऊँगी",
        split_equal: "बाकी राशि बराबर बाँटें",
        other_party: "मैं चाहता/चाहती हूँ कि दूसरा पक्ष बाकी राशि चुकाए",
      },
    },
    recommended: {
      title: "अनुशंसित रास्ता",
      builder: "मार्गदर्शित समझौता निर्माता",
      mediation: "मार्गदर्शित ऑनलाइन मध्यस्थता",
      pricing: "सटीक कीमत भुगतान से पहले दिखाई जाएगी.",
      nextTitle: "आगे क्या होगा",
      next: ["आपके उत्तर सहेजे गए हैं.", "आप अपने जारी रखने वाले लिंक से वापस आ सकते हैं.", "सुरक्षित सेटअप और भुगतान बाद में आएंगे."],
      done: "अभी के लिए पूरा",
      edit: "उत्तर संपादित करें",
      copyContinueLink: "जारी रखने का लिंक कॉपी करें",
      copied: "कॉपी हुआ",
      testerNote: "केवल परीक्षण के लिए. लिंक पृष्ठ पर नहीं दिखाया जाता.",
    },
  },
}

const stepCount = 8
const rtlLanguages = new Set<LanguageCode>(["ar", "fa"])

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(value.trim())

const formatUSPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").replace(/^1(?=\d{10})/, "").slice(0, 10)
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

const normalizeUSPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").replace(/^1(?=\d{10})/, "").slice(0, 10)
  return digits.length === 10 ? `+1${digits}` : ""
}

const recommendPath = (mostlyAgree: Posture | "", otherPartyOnline: OnlineParticipation | ""): RecommendedPath => {
  if (mostlyAgree === "mostly_agree" && otherPartyOnline !== "no") return "guided_agreement_builder"
  return "guided_online_mediation"
}

export function PreCaseStartFlow() {
  const searchParams = useSearchParams()
  const [activeStep, setActiveStep] = useState(0)
  const [language, setLanguage] = useState<LanguageCode>("en")
  const [issueType, setIssueType] = useState<IssueType | "">("")
  const [jurisdiction, setJurisdiction] = useState("")
  const [stateSearch, setStateSearch] = useState("")
  const [mostlyAgree, setMostlyAgree] = useState<Posture | "">("")
  const [otherPartyOnline, setOtherPartyOnline] = useState<OnlineParticipation | "">("")
  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [paymentResponsibility, setPaymentResponsibility] = useState<PaymentResponsibility | "">("")
  const [resumeToken, setResumeToken] = useState("")
  const [continueUrl, setContinueUrl] = useState("")
  const [copied, setCopied] = useState(false)
  const [doneSaved, setDoneSaved] = useState(false)
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "loading" | "error">("idle")
  const [error, setError] = useState("")

  const copy = translatedCopy[language] || fallbackCopy
  const dir = rtlLanguages.has(language) ? "rtl" : "ltr"
  const recommendedPath = useMemo(() => recommendPath(mostlyAgree, otherPartyOnline), [mostlyAgree, otherPartyOnline])
  const filteredStates = useMemo(() => {
    const query = stateSearch.trim().toLowerCase()
    if (!query) return usStates
    return usStates.filter(([code, name]) => name.toLowerCase().includes(query) || code.toLowerCase().includes(query))
  }, [stateSearch])
  const selectedStateName = getStateName(jurisdiction)

  useEffect(() => {
    const token = searchParams.get("resume")
    if (!token) return

    let cancelled = false
    setStatus("loading")
    fetch(`/api/pre-case-drafts?resumeToken=${encodeURIComponent(token)}`, { cache: "no-store" })
      .then(async (response) => {
        const payload = (await response.json()) as DraftResponse
        if (!response.ok) throw new Error(payload.error || "Unable to load saved progress.")
        return payload
      })
      .then((payload) => {
        if (cancelled || !payload.draft) return
        const normalizedJurisdiction = normalizeJurisdiction(payload.draft.jurisdiction)
        setResumeToken(payload.resumeToken || token)
        setContinueUrl(payload.continueUrl || "")
        setLanguage(payload.draft.chosenLanguage || "en")
        setIssueType(payload.draft.issueType || "")
        setJurisdiction(normalizedJurisdiction)
        setStateSearch(normalizedJurisdiction ? getStateName(normalizedJurisdiction) : "")
        setMostlyAgree(payload.draft.mostlyAgree || "")
        setOtherPartyOnline(payload.draft.otherPartyOnline || "")
        setFirstName(payload.draft.firstName || "")
        setMiddleName(payload.draft.middleName || "")
        setLastName(payload.draft.lastName || "")
        setEmail(payload.draft.email || "")
        setPhone(formatUSPhone(payload.draft.phone || ""))
        setPaymentResponsibility(payload.draft.paymentResponsibility || "")
        setActiveStep(Math.min(stepCount - 1, Math.max(0, (payload.draft.lastCompletedStep || 0) + 1)))
        setStatus("saved")
      })
      .catch((caught) => {
        if (cancelled) return
        setError(caught instanceof Error ? caught.message : fallbackCopy.error)
        setStatus("error")
      })

    return () => {
      cancelled = true
    }
  }, [searchParams])

  const buildPayload = (lastCompletedStep: number) => ({
    chosenLanguage: language,
    issueType,
    jurisdiction,
    mostlyAgree,
    otherPartyOnline,
    firstName,
    middleName,
    lastName,
    email,
    phone: normalizeUSPhone(phone),
    paymentResponsibility,
    recommendedPath,
    lastCompletedStep,
    source: "fast-dispute-resolution",
  })

  const saveDraft = async (lastCompletedStep: number) => {
    setStatus("saving")
    setError("")

    const response = await fetch("/api/pre-case-drafts", {
      method: resumeToken ? "PATCH" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...buildPayload(lastCompletedStep),
        resumeToken: resumeToken || undefined,
      }),
    })
    const payload = (await response.json()) as DraftResponse
    if (!response.ok) {
      throw new Error(payload.error || copy.error)
    }

    setResumeToken(payload.resumeToken || resumeToken)
    setContinueUrl(payload.continueUrl || continueUrl)
    setStatus("saved")
  }

  const canContinue = () => {
    if (activeStep === 0) return Boolean(language)
    if (activeStep === 1) return Boolean(issueType)
    if (activeStep === 2) return Boolean(jurisdiction)
    if (activeStep === 3) return Boolean(mostlyAgree)
    if (activeStep === 4) return Boolean(otherPartyOnline)
    if (activeStep === 5) return firstName.trim().length >= 1 && lastName.trim().length >= 1 && isEmail(email)
    if (activeStep === 6) return Boolean(paymentResponsibility)
    return true
  }

  const goNext = async () => {
    if (!canContinue()) {
      setError(copy.error)
      setStatus("error")
      return
    }

    try {
      if (activeStep >= 5 || resumeToken) {
        await saveDraft(activeStep)
      }
      setActiveStep((current) => Math.min(stepCount - 1, current + 1))
      setDoneSaved(false)
      if (activeStep < 5 && !resumeToken) {
        setStatus("idle")
        setError("")
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : copy.error)
      setStatus("error")
    }
  }

  const completeForNow = async () => {
    try {
      await saveDraft(stepCount - 1)
      setDoneSaved(true)
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : copy.error)
      setStatus("error")
    }
  }

  const copyContinueLink = async () => {
    if (!continueUrl) return
    await navigator.clipboard.writeText(continueUrl)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const optionButton = <T extends string>(value: T, selected: boolean, label: string, onClick: (value: T) => void) => (
    <button
      type="button"
      onClick={() => {
        onClick(value)
        setError("")
        if (status === "error") setStatus("idle")
      }}
      className={`focus-ring flex w-full items-center justify-between rounded-lg border px-4 py-3 text-start text-base font-semibold transition ${
        selected
          ? "border-brand-600 bg-brand-50 text-brand-950"
          : "border-slate-200 bg-white text-slate-800 hover:border-brand-200 hover:bg-slate-50"
      }`}
    >
      <span>{label}</span>
      {selected ? <Check className="size-5 text-brand-600" aria-hidden="true" /> : null}
    </button>
  )

  return (
    <main dir={dir} className="min-h-screen bg-slate-50 text-slate-950">
      <section className="flex min-h-screen items-center py-8 sm:py-12">
        <div className="shell w-full">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="text-sm font-bold text-slate-900">{BRAND_NAME}</div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
                <ShieldCheck className="size-4 text-brand-600" aria-hidden="true" />
                {status === "saved" ? copy.saved : copy.planningBadge}
              </div>
            </div>

            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>
                  {copy.progress} {activeStep + 1} / {stepCount}
                </span>
                {status === "saving" || status === "loading" ? (
                  <span className="inline-flex items-center gap-1">
                    <Loader2 className="size-3 animate-spin" aria-hidden="true" />
                    {copy.loading}
                  </span>
                ) : status === "saved" ? (
                  <span>{copy.saved}</span>
                ) : null}
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-brand-600 transition-all"
                  style={{ width: `${((activeStep + 1) / stepCount) * 100}%` }}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-8">
              {activeStep === 0 ? (
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.language.title}</h1>
                  <p className="mt-3 text-base leading-7 text-slate-600">{copy.language.helper}</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {languages.map((item) => optionButton(item.code, language === item.code, item.label, setLanguage))}
                  </div>
                </div>
              ) : null}

              {activeStep === 1 ? (
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.issue.title}</h1>
                  <p className="mt-3 text-base leading-7 text-slate-600">{copy.issue.helper}</p>
                  <div className="mt-7 grid gap-3">
                    {(Object.keys(copy.issue.options) as IssueType[]).map((key) =>
                      optionButton(key, issueType === key, copy.issue.options[key], setIssueType),
                    )}
                  </div>
                </div>
              ) : null}

              {activeStep === 2 ? (
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.jurisdiction.title}</h1>
                  <p className="mt-3 text-base leading-7 text-slate-600">{copy.jurisdiction.helper}</p>
                  {selectedStateName ? (
                    <div className="mt-5 rounded-lg border border-brand-100 bg-brand-50 px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-brand-700">{copy.jurisdiction.selectedLabel}</p>
                      <p className="mt-1 text-base font-bold text-brand-950">{selectedStateName}</p>
                    </div>
                  ) : null}
                  <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
                    <span className="sr-only">{copy.jurisdiction.searchPlaceholder}</span>
                    <span className="relative">
                      <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                      <input
                        value={stateSearch}
                        onChange={(event) => setStateSearch(event.target.value)}
                        placeholder={copy.jurisdiction.searchPlaceholder}
                        className="h-12 w-full rounded-lg border border-slate-200 pl-10 pr-4 text-base outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
                      />
                    </span>
                  </label>
                  <div className="mt-4 max-h-72 overflow-auto rounded-lg border border-slate-200">
                    {filteredStates.length ? (
                      filteredStates.map(([code, name]) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => {
                            setJurisdiction(code satisfies UsStateCode)
                            setStateSearch(name)
                            setError("")
                          }}
                          className={`flex w-full items-center justify-between border-b border-slate-100 px-4 py-3 text-start text-sm font-semibold last:border-b-0 ${
                            jurisdiction === code ? "bg-brand-50 text-brand-950" : "bg-white text-slate-800 hover:bg-slate-50"
                          }`}
                        >
                          <span>{name}</span>
                          {jurisdiction === code ? <Check className="size-4 text-brand-600" aria-hidden="true" /> : null}
                        </button>
                      ))
                    ) : (
                      <p className="px-4 py-5 text-sm font-semibold text-slate-500">{copy.jurisdiction.noResults}</p>
                    )}
                  </div>
                </div>
              ) : null}

              {activeStep === 3 ? (
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.mostlyAgree.title}</h1>
                  <div className="mt-7 grid gap-3">
                    {(Object.keys(copy.mostlyAgree.options) as Posture[]).map((key) =>
                      optionButton(key, mostlyAgree === key, copy.mostlyAgree.options[key], setMostlyAgree),
                    )}
                  </div>
                </div>
              ) : null}

              {activeStep === 4 ? (
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.otherPartyOnline.title}</h1>
                  <div className="mt-7 grid gap-3">
                    {(Object.keys(copy.otherPartyOnline.options) as OnlineParticipation[]).map((key) =>
                      optionButton(key, otherPartyOnline === key, copy.otherPartyOnline.options[key], setOtherPartyOnline),
                    )}
                  </div>
                </div>
              ) : null}

              {activeStep === 5 ? (
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.contact.title}</h1>
                  <p className="mt-3 text-base leading-7 text-slate-600">{copy.contact.helper}</p>
                  <div className="mt-7 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <label className="grid gap-2 text-sm font-semibold text-slate-700">
                        {copy.contact.firstName}
                        <input
                          value={firstName}
                          onChange={(event) => setFirstName(event.target.value)}
                          className="h-12 rounded-lg border border-slate-200 px-4 text-base outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
                        />
                      </label>
                      <label className="grid gap-2 text-sm font-semibold text-slate-700">
                        {copy.contact.middleName} <span className="font-normal text-slate-500">({copy.optional})</span>
                        <input
                          value={middleName}
                          onChange={(event) => setMiddleName(event.target.value)}
                          className="h-12 rounded-lg border border-slate-200 px-4 text-base outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
                        />
                      </label>
                      <label className="grid gap-2 text-sm font-semibold text-slate-700">
                        {copy.contact.lastName}
                        <input
                          value={lastName}
                          onChange={(event) => setLastName(event.target.value)}
                          className="h-12 rounded-lg border border-slate-200 px-4 text-base outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
                        />
                      </label>
                    </div>
                    <label className="grid gap-2 text-sm font-semibold text-slate-700">
                      {copy.contact.email}
                      <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        className="h-12 rounded-lg border border-slate-200 px-4 text-base outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold text-slate-700">
                      {copy.contact.phone} <span className="font-normal text-slate-500">({copy.optional})</span>
                      <input
                        value={phone}
                        onChange={(event) => setPhone(formatUSPhone(event.target.value))}
                        type="tel"
                        inputMode="tel"
                        placeholder="(555) 123-4567"
                        className="h-12 rounded-lg border border-slate-200 px-4 text-base outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
                      />
                    </label>
                    <p className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-600">
                      {copy.contact.reassurance}
                    </p>
                  </div>
                </div>
              ) : null}

              {activeStep === 6 ? (
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.payment.title}</h1>
                  <p className="mt-3 text-base leading-7 text-slate-600">{copy.payment.helper}</p>
                  <div className="mt-7 grid gap-3">
                    {(Object.keys(copy.payment.options) as PaymentResponsibility[]).map((key) =>
                      optionButton(key, paymentResponsibility === key, copy.payment.options[key], setPaymentResponsibility),
                    )}
                  </div>
                </div>
              ) : null}

              {activeStep === 7 ? (
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.recommended.title}</h1>
                  <div className="mt-6 rounded-xl border border-brand-100 bg-brand-50 p-5">
                    <p className="text-2xl font-bold text-brand-950">
                      {recommendedPath === "guided_agreement_builder" ? copy.recommended.builder : copy.recommended.mediation}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-brand-800">{copy.recommended.pricing}</p>
                  </div>
                  <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h2 className="text-base font-bold text-slate-900">{copy.recommended.nextTitle}</h2>
                    <ul className="mt-3 space-y-2 text-sm font-medium leading-6 text-slate-700">
                      {copy.recommended.next.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {continueUrl ? (
                    <div className="mt-5 flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4">
                      <button
                        type="button"
                        onClick={copyContinueLink}
                        className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                      >
                        <Clipboard className="size-4" aria-hidden="true" />
                        {copied ? copy.recommended.copied : copy.recommended.copyContinueLink}
                      </button>
                      <p className="text-xs font-semibold leading-5 text-slate-500">{copy.recommended.testerNote}</p>
                    </div>
                  ) : null}
                  {doneSaved ? (
                    <p className="mt-5 rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">{copy.saved}</p>
                  ) : null}
                </div>
              ) : null}

              {error ? <p className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                {activeStep < stepCount - 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveStep((current) => Math.max(0, current - 1))
                        setError("")
                      }}
                      disabled={activeStep === 0 || status === "saving"}
                      className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ArrowLeft className="size-4" aria-hidden="true" />
                      {copy.back}
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={status === "saving" || status === "loading"}
                      className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 text-sm font-bold text-white shadow-soft transition hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70"
                    >
                      {status === "saving" ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
                      {activeStep === 5 ? copy.save : copy.continue}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveStep(0)
                        setError("")
                      }}
                      className="focus-ring inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 px-5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                    >
                      {copy.recommended.edit}
                    </button>
                    <button
                      type="button"
                      onClick={completeForNow}
                      disabled={status === "saving"}
                      className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 text-sm font-bold text-white shadow-soft transition hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70"
                    >
                      {status === "saving" ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
                      {copy.recommended.done}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
