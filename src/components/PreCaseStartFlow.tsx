"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, Loader2, RotateCcw, ShieldCheck } from "lucide-react"
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
    email?: string | null
    phone?: string | null
    smsConsent?: boolean | null
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
    placeholder: string
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
    email: string
    phone: string
    smsConsent: string
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
    fee: string
    nextTitle: string
    next: string[]
    continueLink: string
  }
}

const fallbackCopy: FlowCopy = {
  saved: "Progress saved",
  loading: "Saving...",
  error: "Please complete this step to continue.",
  back: "Back",
  continue: "Continue",
  save: "Save progress",
  progress: "Step",
  optional: "optional",
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
    title: "What state or jurisdiction applies?",
    helper: "Use the place where the family matter should be handled.",
    placeholder: "California",
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
    title: "Where should we save your progress?",
    helper: "We will use this to help you continue later. No case is created yet.",
    firstName: "First name",
    email: "Email",
    phone: "Phone",
    smsConsent: "Text me reminders about this saved progress.",
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
    fee: "Activation fee: [amount shown before payment]",
    nextTitle: "What happens next",
    next: [
      "Your progress is saved.",
      "You will see the activation fee before any payment.",
      "The next step opens the secure setup when you are ready.",
    ],
    continueLink: "Continue link",
  },
}

const translatedCopy: Partial<Record<LanguageCode, FlowCopy>> = {
  en: fallbackCopy,
  es: {
    ...fallbackCopy,
    saved: "Progreso guardado",
    loading: "Guardando...",
    error: "Completa este paso para continuar.",
    back: "Atrás",
    continue: "Continuar",
    save: "Guardar progreso",
    progress: "Paso",
    optional: "opcional",
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
    jurisdiction: { title: "¿Qué estado o jurisdicción aplica?", helper: "Usa el lugar donde debe manejarse el asunto familiar.", placeholder: "California" },
    mostlyAgree: {
      title: "¿Ya están mayormente de acuerdo con el resultado?",
      options: { mostly_agree: "Sí, en su mayoría", need_help: "No, necesitamos ayuda para llegar a un acuerdo", not_sure: "No estoy seguro todavía" },
    },
    otherPartyOnline: { title: "¿Es probable que la otra persona participe en línea?", options: { yes: "Sí", maybe: "Tal vez", no: "No" } },
    contact: {
      title: "¿Dónde debemos guardar tu progreso?",
      helper: "Usaremos esto para ayudarte a continuar después. Todavía no se crea ningún caso.",
      firstName: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      smsConsent: "Envíenme recordatorios por texto sobre este progreso guardado.",
    },
    payment: {
      title: "¿Quién debe pagar el saldo restante?",
      helper: "Esto solo registra la responsabilidad. Aquí no se cobra ningún pago.",
      options: { self: "Yo pagaré el saldo restante", split_equal: "Dividir el saldo restante por igual", other_party: "Quiero que la otra parte pague el saldo restante" },
    },
    recommended: {
      title: "Ruta recomendada",
      builder: "Constructor guiado de acuerdos",
      mediation: "Mediación guiada en línea",
      fee: "Tarifa de activación: [monto mostrado antes del pago]",
      nextTitle: "Qué pasa después",
      next: ["Tu progreso está guardado.", "Verás la tarifa de activación antes de cualquier pago.", "El siguiente paso abre la configuración segura cuando estés listo."],
      continueLink: "Enlace para continuar",
    },
  },
  pt: {
    ...fallbackCopy,
    saved: "Progresso salvo",
    loading: "Salvando...",
    error: "Conclua esta etapa para continuar.",
    back: "Voltar",
    continue: "Continuar",
    save: "Salvar progresso",
    progress: "Etapa",
    optional: "opcional",
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
    jurisdiction: { title: "Qual estado ou jurisdição se aplica?", helper: "Use o local onde o assunto familiar deve ser tratado.", placeholder: "Califórnia" },
    mostlyAgree: { title: "Vocês já concordam em grande parte com o resultado?", options: { mostly_agree: "Sim, em grande parte", need_help: "Não, precisamos de ajuda para chegar a um acordo", not_sure: "Ainda não tenho certeza" } },
    otherPartyOnline: { title: "A outra pessoa provavelmente participará online?", options: { yes: "Sim", maybe: "Talvez", no: "Não" } },
    contact: { ...fallbackCopy.contact, title: "Onde devemos salvar seu progresso?", helper: "Usaremos isso para ajudar você a continuar depois. Nenhum caso é criado ainda.", firstName: "Nome", email: "E-mail", phone: "Telefone", smsConsent: "Envie lembretes por SMS sobre este progresso salvo." },
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
      fee: "Taxa de ativação: [valor mostrado antes do pagamento]",
      nextTitle: "O que acontece a seguir",
      next: ["Seu progresso está salvo.", "Você verá a taxa de ativação antes de qualquer pagamento.", "A próxima etapa abre a configuração segura quando estiver pronto."],
      continueLink: "Link para continuar",
    },
  },
  fr: {
    ...fallbackCopy,
    saved: "Progression enregistrée",
    loading: "Enregistrement...",
    error: "Complétez cette étape pour continuer.",
    back: "Retour",
    continue: "Continuer",
    save: "Enregistrer",
    progress: "Étape",
    optional: "facultatif",
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
    jurisdiction: { title: "Quel État ou quelle juridiction s’applique ?", helper: "Indiquez le lieu où la question familiale doit être traitée.", placeholder: "Californie" },
    mostlyAgree: { title: "Êtes-vous déjà principalement d’accord sur le résultat ?", options: { mostly_agree: "Oui, principalement", need_help: "Non, nous avons besoin d’aide pour trouver un accord", not_sure: "Pas encore sûr" } },
    otherPartyOnline: { title: "L’autre personne est-elle susceptible de participer en ligne ?", options: { yes: "Oui", maybe: "Peut-être", no: "Non" } },
    contact: { ...fallbackCopy.contact, title: "Où devons-nous enregistrer votre progression ?", helper: "Nous l’utiliserons pour vous aider à reprendre plus tard. Aucun dossier n’est encore créé.", firstName: "Prénom", email: "E-mail", phone: "Téléphone", smsConsent: "Envoyez-moi des rappels par SMS sur cette progression." },
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
      fee: "Frais d’activation : [montant affiché avant paiement]",
      nextTitle: "Ce qui se passe ensuite",
      next: ["Votre progression est enregistrée.", "Vous verrez les frais d’activation avant tout paiement.", "L’étape suivante ouvre la configuration sécurisée lorsque vous êtes prêt."],
      continueLink: "Lien de reprise",
    },
  },
  ar: {
    ...fallbackCopy,
    saved: "تم حفظ التقدم",
    loading: "جار الحفظ...",
    error: "يرجى إكمال هذه الخطوة للمتابعة.",
    back: "رجوع",
    continue: "متابعة",
    save: "حفظ التقدم",
    progress: "الخطوة",
    optional: "اختياري",
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
    jurisdiction: { title: "ما الولاية أو الاختصاص القضائي المعني؟", helper: "استخدم المكان الذي يجب التعامل فيه مع المسألة الأسرية.", placeholder: "كاليفورنيا" },
    mostlyAgree: { title: "هل أنتم متفقون غالبًا على النتيجة؟", options: { mostly_agree: "نعم، غالبًا", need_help: "لا، نحتاج مساعدة للوصول إلى اتفاق", not_sure: "لست متأكدًا بعد" } },
    otherPartyOnline: { title: "هل من المحتمل أن يشارك الشخص الآخر عبر الإنترنت؟", options: { yes: "نعم", maybe: "ربما", no: "لا" } },
    contact: { ...fallbackCopy.contact, title: "أين يجب أن نحفظ تقدمك؟", helper: "سنستخدم هذا لمساعدتك على المتابعة لاحقًا. لم يتم إنشاء قضية بعد.", firstName: "الاسم الأول", email: "البريد الإلكتروني", phone: "الهاتف", smsConsent: "أرسلوا لي تذكيرات نصية حول هذا التقدم المحفوظ." },
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
      fee: "رسوم التفعيل: [يظهر المبلغ قبل الدفع]",
      nextTitle: "ماذا يحدث بعد ذلك",
      next: ["تم حفظ تقدمك.", "سترى رسوم التفعيل قبل أي دفع.", "تفتح الخطوة التالية الإعداد الآمن عندما تكون جاهزًا."],
      continueLink: "رابط المتابعة",
    },
  },
  fa: {
    ...fallbackCopy,
    saved: "پیشرفت ذخیره شد",
    loading: "در حال ذخیره...",
    error: "برای ادامه این مرحله را کامل کنید.",
    back: "بازگشت",
    continue: "ادامه",
    save: "ذخیره پیشرفت",
    progress: "مرحله",
    optional: "اختیاری",
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
    jurisdiction: { title: "کدام ایالت یا حوزه قضایی اعمال می‌شود؟", helper: "محلی را وارد کنید که موضوع خانوادگی باید در آن رسیدگی شود.", placeholder: "کالیفرنیا" },
    mostlyAgree: { title: "آیا درباره نتیجه تا حد زیادی توافق دارید؟", options: { mostly_agree: "بله، تا حد زیادی", need_help: "نه، برای رسیدن به توافق کمک لازم داریم", not_sure: "هنوز مطمئن نیستم" } },
    otherPartyOnline: { title: "آیا احتمال دارد طرف مقابل آنلاین شرکت کند؟", options: { yes: "بله", maybe: "شاید", no: "نه" } },
    contact: { ...fallbackCopy.contact, title: "پیشرفت شما را کجا ذخیره کنیم؟", helper: "از این برای ادامه دادن در آینده استفاده می‌کنیم. هنوز پرونده‌ای ایجاد نشده است.", firstName: "نام", email: "ایمیل", phone: "تلفن", smsConsent: "برای این پیشرفت ذخیره‌شده پیامک یادآوری بفرستید." },
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
      fee: "هزینه فعال‌سازی: [مبلغ پیش از پرداخت نمایش داده می‌شود]",
      nextTitle: "بعد چه می‌شود",
      next: ["پیشرفت شما ذخیره شده است.", "پیش از هر پرداخت، هزینه فعال‌سازی را خواهید دید.", "مرحله بعدی هر زمان آماده باشید تنظیمات امن را باز می‌کند."],
      continueLink: "پیوند ادامه",
    },
  },
  ru: {
    ...fallbackCopy,
    saved: "Прогресс сохранен",
    loading: "Сохранение...",
    error: "Заполните этот шаг, чтобы продолжить.",
    back: "Назад",
    continue: "Продолжить",
    save: "Сохранить",
    progress: "Шаг",
    optional: "необязательно",
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
    jurisdiction: { title: "Какой штат или юрисдикция применяется?", helper: "Укажите место, где должен рассматриваться семейный вопрос.", placeholder: "Калифорния" },
    mostlyAgree: { title: "Вы уже в основном согласны с результатом?", options: { mostly_agree: "Да, в основном", need_help: "Нет, нам нужна помощь, чтобы договориться", not_sure: "Пока не уверен(а)" } },
    otherPartyOnline: { title: "Вероятно ли, что другой человек будет участвовать онлайн?", options: { yes: "Да", maybe: "Возможно", no: "Нет" } },
    contact: { ...fallbackCopy.contact, title: "Где сохранить ваш прогресс?", helper: "Мы используем это, чтобы помочь вам продолжить позже. Дело еще не создано.", firstName: "Имя", email: "Эл. почта", phone: "Телефон", smsConsent: "Отправляйте мне SMS-напоминания об этом сохраненном прогрессе." },
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
      fee: "Активационный сбор: [сумма будет показана до оплаты]",
      nextTitle: "Что дальше",
      next: ["Ваш прогресс сохранен.", "Вы увидите активационный сбор до любой оплаты.", "Следующий шаг откроет безопасную настройку, когда вы будете готовы."],
      continueLink: "Ссылка для продолжения",
    },
  },
  zh: {
    ...fallbackCopy,
    saved: "进度已保存",
    loading: "正在保存...",
    error: "请完成此步骤以继续。",
    back: "返回",
    continue: "继续",
    save: "保存进度",
    progress: "步骤",
    optional: "可选",
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
    jurisdiction: { title: "适用哪个州或司法管辖区？", helper: "请输入应处理该家庭事项的地点。", placeholder: "加利福尼亚" },
    mostlyAgree: { title: "你们是否已经基本同意结果？", options: { mostly_agree: "是的，基本同意", need_help: "没有，我们需要帮助达成协议", not_sure: "还不确定" } },
    otherPartyOnline: { title: "对方是否可能在线参与？", options: { yes: "是", maybe: "可能", no: "否" } },
    contact: { ...fallbackCopy.contact, title: "我们应在哪里保存您的进度？", helper: "我们会用它帮助您以后继续。现在还不会创建案件。", firstName: "名字", email: "电子邮件", phone: "电话", smsConsent: "通过短信提醒我这个已保存的进度。" },
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
      fee: "启动费：[付款前显示金额]",
      nextTitle: "接下来会发生什么",
      next: ["您的进度已保存。", "付款前您会看到启动费。", "准备好后，下一步会打开安全设置。"],
      continueLink: "继续链接",
    },
  },
  hi: {
    ...fallbackCopy,
    saved: "प्रगति सहेजी गई",
    loading: "सहेजा जा रहा है...",
    error: "जारी रखने के लिए यह चरण पूरा करें.",
    back: "वापस",
    continue: "जारी रखें",
    save: "प्रगति सहेजें",
    progress: "चरण",
    optional: "वैकल्पिक",
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
    jurisdiction: { title: "कौन सा राज्य या न्यायक्षेत्र लागू होता है?", helper: "वह स्थान लिखें जहाँ पारिवारिक मामला संभाला जाना चाहिए.", placeholder: "कैलिफोर्निया" },
    mostlyAgree: { title: "क्या आप परिणाम पर अधिकतर सहमत हैं?", options: { mostly_agree: "हाँ, अधिकतर", need_help: "नहीं, हमें समझौते तक पहुँचने में मदद चाहिए", not_sure: "अभी निश्चित नहीं" } },
    otherPartyOnline: { title: "क्या दूसरा व्यक्ति ऑनलाइन भाग लेने की संभावना रखता है?", options: { yes: "हाँ", maybe: "शायद", no: "नहीं" } },
    contact: { ...fallbackCopy.contact, title: "हम आपकी प्रगति कहाँ सहेजें?", helper: "हम इसका उपयोग आपको बाद में जारी रखने में मदद करने के लिए करेंगे. अभी कोई मामला नहीं बनाया गया है.", firstName: "पहला नाम", email: "ईमेल", phone: "फोन", smsConsent: "इस सहेजी गई प्रगति के बारे में मुझे SMS याद दिलाएँ." },
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
      fee: "सक्रियण शुल्क: [भुगतान से पहले राशि दिखाई जाएगी]",
      nextTitle: "आगे क्या होगा",
      next: ["आपकी प्रगति सहेजी गई है.", "किसी भी भुगतान से पहले आपको सक्रियण शुल्क दिखेगा.", "तैयार होने पर अगला चरण सुरक्षित सेटअप खोलेगा."],
      continueLink: "जारी रखने का लिंक",
    },
  },
}

const stepCount = 8
const rtlLanguages = new Set<LanguageCode>(["ar", "fa"])

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(value.trim())

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
  const [mostlyAgree, setMostlyAgree] = useState<Posture | "">("")
  const [otherPartyOnline, setOtherPartyOnline] = useState<OnlineParticipation | "">("")
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [smsConsent, setSmsConsent] = useState(false)
  const [paymentResponsibility, setPaymentResponsibility] = useState<PaymentResponsibility | "">("")
  const [resumeToken, setResumeToken] = useState("")
  const [continueUrl, setContinueUrl] = useState("")
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "loading" | "error">("idle")
  const [error, setError] = useState("")

  const copy = translatedCopy[language] || fallbackCopy
  const dir = rtlLanguages.has(language) ? "rtl" : "ltr"
  const recommendedPath = useMemo(() => recommendPath(mostlyAgree, otherPartyOnline), [mostlyAgree, otherPartyOnline])

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
        setResumeToken(payload.resumeToken || token)
        setContinueUrl(payload.continueUrl || "")
        setLanguage(payload.draft.chosenLanguage || "en")
        setIssueType(payload.draft.issueType || "")
        setJurisdiction(payload.draft.jurisdiction || "")
        setMostlyAgree(payload.draft.mostlyAgree || "")
        setOtherPartyOnline(payload.draft.otherPartyOnline || "")
        setFirstName(payload.draft.firstName || "")
        setEmail(payload.draft.email || "")
        setPhone(payload.draft.phone || "")
        setSmsConsent(Boolean(payload.draft.smsConsent))
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
    email,
    phone,
    smsConsent,
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
    if (activeStep === 2) return jurisdiction.trim().length >= 2
    if (activeStep === 3) return Boolean(mostlyAgree)
    if (activeStep === 4) return Boolean(otherPartyOnline)
    if (activeStep === 5) return firstName.trim().length >= 1 && isEmail(email)
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
      if (activeStep < 5 && !resumeToken) {
        setStatus("idle")
        setError("")
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : copy.error)
      setStatus("error")
    }
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
                {status === "saved" ? copy.saved : copy.contact.helper.split(".")[1]?.trim() || "Progress can be saved"}
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
                    {languages.map((item) =>
                      optionButton(item.code, language === item.code, item.label, setLanguage),
                    )}
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
                  <input
                    value={jurisdiction}
                    onChange={(event) => setJurisdiction(event.target.value)}
                    placeholder={copy.jurisdiction.placeholder}
                    className="mt-7 h-14 w-full rounded-lg border border-slate-200 px-4 text-lg font-semibold outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
                  />
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
                    <label className="grid gap-2 text-sm font-semibold text-slate-700">
                      {copy.contact.firstName}
                      <input
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        className="h-12 rounded-lg border border-slate-200 px-4 text-base outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
                      />
                    </label>
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
                        onChange={(event) => setPhone(event.target.value)}
                        type="tel"
                        className="h-12 rounded-lg border border-slate-200 px-4 text-base outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
                      />
                    </label>
                    <label className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                      <input
                        checked={smsConsent}
                        onChange={(event) => setSmsConsent(event.target.checked)}
                        type="checkbox"
                        className="mt-1 size-4"
                      />
                      <span>{copy.contact.smsConsent}</span>
                    </label>
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
                    <p className="mt-3 text-sm font-semibold text-brand-800">{copy.recommended.fee}</p>
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
                    <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{copy.recommended.continueLink}</p>
                      <p className="mt-2 break-all text-sm font-semibold text-slate-700">{continueUrl}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {error ? <p className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
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

                {activeStep < stepCount - 1 ? (
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
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveStep(0)}
                    className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 text-sm font-bold text-white shadow-soft transition hover:bg-brand-700"
                  >
                    <RotateCcw className="size-4" aria-hidden="true" />
                    {copy.back}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
