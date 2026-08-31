/**
 * PLATAFORMA DE INCIDENCIA POLÍTICA - REGIÓN ANDINA (PLANEA 2025-2030)
 * Prevención de Violencias, Género y Embarazo Infantil
 * Organismos: ORAS-CONHU, UNFPA LACRO, OPS/OMS, UNICEF
 * Países: Bolivia 🇧🇴, Chile 🇨🇱, Colombia 🇨🇴, Ecuador 🇪🇨, Perú 🇵🇪, Venezuela 🇻🇪 y Marco Regional 🌍
 * Idiomas: Español (ES 🇪🇸), English (EN 🇺🇸), Runasimi (QU 🇵🇪)
 * Temas: Oscuro 🌙 / Claro ☀️
 */

// --- 1. ESTADO GLOBAL ---
let currentCountry = localStorage.getItem('planea_country') || 'peru';
let currentLang = localStorage.getItem('planea_lang') || 'es';
let currentTheme = localStorage.getItem('planea_theme') || 'dark';

// --- 2. BASE DE DATOS MAESTRA DE PAÍSES Y MARCO REGIONAL ---
const countryDatabase = {
  "peru": {
    "name": "Perú",
    "flag": "🇵🇪",
    "flagSvg": "<svg class=\"w-5 h-3.5 rounded inline-block object-cover flex-shrink-0 align-middle\" viewBox=\"0 0 640 480\"><defs><clipPath id=\"pe-hdr-clip\"><path d=\"M280 180 H360 V260 C360 290 320 310 320 310 C320 310 280 290 280 260 Z\"/></clipPath></defs><path fill=\"#D91023\" d=\"M0 0h213.3v480H0z\"/><path fill=\"#ffffff\" d=\"M213.3 0h213.4v480H213.3z\"/><path fill=\"#D91023\" d=\"M426.7 0H640v480H426.7z\"/><g><ellipse cx=\"320\" cy=\"172\" rx=\"18\" ry=\"8\" fill=\"none\" stroke=\"#15803D\" stroke-width=\"4\"/><circle cx=\"320\" cy=\"172\" r=\"3\" fill=\"#DC2626\"/><path d=\"M272 195 C255 240 260 280 285 315\" fill=\"none\" stroke=\"#15803D\" stroke-width=\"5\" stroke-linecap=\"round\"/><path d=\"M368 195 C385 240 380 280 355 315\" fill=\"none\" stroke=\"#16A34A\" stroke-width=\"5\" stroke-linecap=\"round\"/><path d=\"M310 312 L320 324 L330 312 Z\" fill=\"#D91023\"/><circle cx=\"320\" cy=\"314\" r=\"3\" fill=\"#FFFFFF\"/><g clip-path=\"url(#pe-hdr-clip)\"><rect x=\"280\" y=\"180\" width=\"40\" height=\"50\" fill=\"#38BDF8\"/><ellipse cx=\"300\" cy=\"210\" rx=\"7\" ry=\"5\" fill=\"#D97706\"/><circle cx=\"305\" cy=\"202\" r=\"3\" fill=\"#D97706\"/><line x1=\"296\" y1=\"214\" x2=\"296\" y2=\"223\" stroke=\"#D97706\" stroke-width=\"2\"/><line x1=\"304\" y1=\"214\" x2=\"304\" y2=\"223\" stroke=\"#D97706\" stroke-width=\"2\"/><polygon points=\"305,200 308,196 306,200\" fill=\"#B45309\"/><rect x=\"320\" y=\"180\" width=\"40\" height=\"50\" fill=\"#FFFFFF\"/><line x1=\"340\" y1=\"212\" x2=\"340\" y2=\"224\" stroke=\"#78350F\" stroke-width=\"2.5\"/><circle cx=\"340\" cy=\"204\" r=\"9\" fill=\"#15803D\"/><circle cx=\"335\" cy=\"200\" r=\"6\" fill=\"#16A34A\"/><circle cx=\"345\" cy=\"200\" r=\"6\" fill=\"#22C55E\"/><rect x=\"280\" y=\"230\" width=\"80\" height=\"80\" fill=\"#DC2626\"/><path d=\"M300 245 C305 240 335 245 340 260 C335 270 315 265 310 268 Z\" fill=\"#F59E0B\"/><ellipse cx=\"308\" cy=\"265\" rx=\"5\" ry=\"7\" fill=\"#FBBF24\"/><circle cx=\"300\" cy=\"272\" r=\"3\" fill=\"#FEF08A\" stroke=\"#D97706\" stroke-width=\"0.8\"/><circle cx=\"307\" cy=\"274\" r=\"3\" fill=\"#FEF08A\" stroke=\"#D97706\" stroke-width=\"0.8\"/><circle cx=\"315\" cy=\"273\" r=\"3\" fill=\"#FEF08A\" stroke=\"#D97706\" stroke-width=\"0.8\"/><circle cx=\"304\" cy=\"279\" r=\"3\" fill=\"#FEF08A\" stroke=\"#D97706\" stroke-width=\"0.8\"/><circle cx=\"312\" cy=\"280\" r=\"3\" fill=\"#FEF08A\" stroke=\"#D97706\" stroke-width=\"0.8\"/><circle cx=\"320\" cy=\"281\" r=\"2.5\" fill=\"#FEF08A\" stroke=\"#D97706\" stroke-width=\"0.8\"/><line x1=\"320\" y1=\"180\" x2=\"320\" y2=\"230\" stroke=\"#FBBF24\" stroke-width=\"2\"/><line x1=\"280\" y1=\"230\" x2=\"360\" y2=\"230\" stroke=\"#FBBF24\" stroke-width=\"2\"/></g><path d=\"M280 180 H360 V260 C360 290 320 310 320 310 C320 310 280 290 280 260 Z\" fill=\"none\" stroke=\"#D97706\" stroke-width=\"4\"/><path d=\"M282 182 H358 V258 C358 286 320 306 320 306 C320 306 282 286 282 258 Z\" fill=\"none\" stroke=\"#FEF08A\" stroke-width=\"1.5\"/></g></svg>",
    "badge": "Hackatón Creativa Regional • PLANEA 2025-2030 🇵🇪",
    "siteTitle": "Plataforma de Incidencia Política: Prevención de Violencias y Embarazo Infantil",
    "siteTitleEn": "Policy Advocacy Platform: Child Pregnancy & Violence Prevention in Peru",
    "siteTitleQu": "Suyu Kamachiy Qhawana: Wawa Chichuy wan Maqanakuy Hark'ay Peru Suyupi",
    "endorsed": [
      "MINSA Perú",
      "ORAS-CONHU",
      "UNFPA Perú",
      "OPS/OMS"
    ],
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Prevención de Violencias y Embarazo Infantil en el Perú</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Child Pregnancy & Violence Prevention in Peru</span>",
    "heroTitleQu": "Mana Ruraypa Qullqi Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Wawa Chichuy wan Maqanakuy Hark'ay Peru Suyupi</span>",
    "heroDesc": "Documento ejecutivo de política pública para <strong>Congresistas, Ministros, MEF y Gobernadores Regionales</strong>. Integra la evidencia oficial del Plan Andino para fundamentar la asignación presupuestal y alcanzar la meta de <strong>Cero Tolerancia en menores de 15 años</strong>.",
    "heroDescEn": "Executive public policy brief for <strong>Members of Congress, Ministers, Ministry of Economy (MEF), and Regional Governors</strong>. Integrates official Andean Plan evidence to support budget allocation and achieve <strong>Zero Tolerance in girls under 15</strong>.",
    "heroDescQu": "Congreso, Ministrokuna, MEF wan Gobernadores nisqapaq qillqa. Plan Andino yachaykunawan <strong>15 watamanta uray sipaskunapi cero tolerancia</strong> hunt'anapaq.",
    "metrics": [
      {
        "val": "15 Años",
        "lbl": "Cero Tolerancia Legal (Art. 173 CP)",
        "lblEn": "Legal Zero Tolerance (Art. 173)",
        "lblQu": "Cero Tolerancia (Art. 173 Código)"
      },
      {
        "val": "S/ 1,200M",
        "lbl": "Pérdida Anual por Inacción (0.45% PBI)",
        "lblEn": "Annual Cost of Inaction (0.45% GDP)",
        "lblQu": "Sapa Wata Chinkachiy (0.45% PBI)"
      },
      {
        "val": "S/ 7.00",
        "lbl": "Retorno por cada Sol en ESI y Postas",
        "lblEn": "ROI per 1.00 Sol in ESI & Clinics",
        "lblQu": "Sapa 1.00 Solmanta S/ 7.00 Kutichiy"
      },
      {
        "val": "35%",
        "lbl": "Postas I-3/I-4 Acreditadas en Perú",
        "lblEn": "Accredited I-3/I-4 Clinics in Peru",
        "lblQu": "Acreditado Postakuna I-3 wan I-4"
      }
    ],
    "cards": {
      "c1": {
        "tag": "EMERGENCIA DE SALUD PÚBLICA",
        "title": "Embarazo Infantil (<15 años) e Indemnidad Sexual",
        "desc": "Todo embarazo en niñas menores de 15 años deriva legal y médicamente de abuso sexual (Art. 173 Código Penal). Eleva quintuplicadamente la mortalidad materna y perpetúa la deserción escolar en el 80% de los casos."
      },
      "c2": {
        "tag": "BRECHAS DE EQUIDAD TERRITORIAL",
        "title": "Violencia de Género y Disparidades Geográficas",
        "desc": "Las adolescentes rurales, andinas y amazónicas enfrentan un riesgo hasta tres veces superior de gestación no planificada por la ausencia de servicios de protección descentralizados."
      },
      "c3": {
        "tag": "DÉFICIT DE INFRAESTRUCTURA",
        "title": "Capacidad Operativa de Consultorios MINSA",
        "desc": "Solo 35 de cada 100 establecimientos de primer nivel (I-3 y I-4) poseen consultorios amigables acreditados bajo la Norma NTS N° 130 con personal capacitado y consejería confidencial."
      }
    },
    "roi": {
      "roi1": {
        "title": "Costo de la Inacción Fiscal: S/ 1,200 Millones/año",
        "desc": "Postergar la prevención le genera al Estado un costo superior a <strong>S/ 1,200 millones al año</strong> (0.45% del PBI) por atenciones médicas de urgencia, menor recaudación tributaria y gasto judicial."
      },
      "roi2": {
        "title": "Retorno Social de Inversión (ROI): S/ 7.00 por cada Sol",
        "desc": "Por cada S/ 1.00 Sol presupuestado en Educación Sexual Integral (ESI) y en Servicios Amigables del MINSA (Programa Presupuestal 0002), el Estado peruano ahorra S/ 7.00 en atención médica de emergencia y subsidios."
      }
    },
    "laws": {
      "l1": {
        "tag": "LEY NACIONAL",
        "title": "Ley N° 30364",
        "desc": "Garantiza partidas presupuestales obligatorias para la prevención y atención de la violencia hacia las mujeres y el grupo familiar."
      },
      "l2": {
        "tag": "PROTECCIÓN DE LA NIÑEZ",
        "title": "Código de los Niños y Adolescentes",
        "desc": "Protege el derecho inalienable a la salud, educación y defensa frente a cualquier forma de violencia sexual o embarazo infantil."
      },
      "l3": {
        "tag": "COMPROMISO REGIONAL",
        "title": "Plan Andino (PLANEA 2025-2030)",
        "desc": "Compromiso de Estado suscrito ante el ORAS-CONHU, UNFPA y OPS para reducir a cero la maternidad infantil al 2030."
      }
    },
    "explorerTitle": "6. Explorador Informativo de Indicadores Regionales del Perú",
    "explorerSubtitle": "Diagnóstico territorializado de tasas de fecundidad, acreditación de postas y costo de inacción.",
    "regions": {
      "Loreto": {
        "label": "Loreto (Amazonía)",
        "fertility": "85.4 por 1,000",
        "fertilityVal": 85.4,
        "fertilityPct": 85,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Extremo",
        "coverage": "28% Postas I-3/I-4 Acreditadas",
        "coverageVal": 28,
        "coverageGap": 72,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Crítica (72%)",
        "inactionCost": "S/ 140 Millones/año",
        "inactionVal": 140,
        "inactionScale": 75,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> S/ 140 M/año (0.48% PBI Regional)",
        "priority": "Reducción de brechas en Amazonía rural, atención de violencia sexual en comunidades nativas con enfoque intercultural y transporte para emergencias obstétricas."
      },
      "Huancavelica": {
        "label": "Huancavelica (Sierra Central)",
        "fertility": "68.2 por 1,000",
        "fertilityVal": 68.2,
        "fertilityPct": 68,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Muy Alto",
        "coverage": "31% Postas I-3/I-4 Acreditadas",
        "coverageVal": 31,
        "coverageGap": 69,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Severa (69%)",
        "inactionCost": "S/ 85 Millones/año",
        "inactionVal": 85,
        "inactionScale": 55,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> S/ 85 M/año (0.52% PBI Regional)",
        "priority": "Atención bilingüe en Quechua en postas rurales, prevención de violencia intrafamiliar y albergues temporales para adolescentes en riesgo."
      },
      "Cajamarca": {
        "label": "Cajamarca (Sierra Norte)",
        "fertility": "64.5 por 1,000",
        "fertilityVal": 64.5,
        "fertilityPct": 64,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Muy Alto",
        "coverage": "34% Postas I-3/I-4 Acreditadas",
        "coverageVal": 34,
        "coverageGap": 66,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Alta (66%)",
        "inactionCost": "S/ 115 Millones/año",
        "inactionVal": 115,
        "inactionScale": 65,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> S/ 115 M/año (0.41% PBI Regional)",
        "priority": "Despliegue de brigadas itinerantes de salud sexual, fortalecimiento de comisarías rurales y acceso a métodos anticonceptivos modernos."
      },
      "Piura": {
        "label": "Piura (Costa Norte)",
        "fertility": "58.1 por 1,000",
        "fertilityVal": 58.1,
        "fertilityPct": 58,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-amber-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Alto",
        "coverage": "39% Postas I-3/I-4 Acreditadas",
        "coverageVal": 39,
        "coverageGap": 61,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Moderada (61%)",
        "inactionCost": "S/ 160 Millones/año",
        "inactionVal": 160,
        "inactionScale": 80,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> S/ 160 M/año (0.39% PBI Regional)",
        "priority": "Implementación efectiva de ESI en escuelas secundarias públicas y refuerzo de consultorios diferenciados en zonas periurbanas."
      },
      "Cusco": {
        "label": "Cusco (Sierra Sur)",
        "fertility": "52.8 por 1,000",
        "fertilityVal": 52.8,
        "fertilityPct": 53,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-amber-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Alto",
        "coverage": "42% Postas I-3/I-4 Acreditadas",
        "coverageVal": 42,
        "coverageGap": 58,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Moderada (58%)",
        "inactionCost": "S/ 120 Millones/año",
        "inactionVal": 120,
        "inactionScale": 68,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> S/ 120 M/año (0.35% PBI Regional)",
        "priority": "Articulación comunitaria con rondas campesinas y defensorías comunitarias; consejería reproductiva intercultural en centros de salud."
      },
      "Lima": {
        "label": "Lima Metropolitana y Callao",
        "fertility": "41.2 por 1,000",
        "fertilityVal": 41.2,
        "fertilityPct": 41,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-yellow-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Moderado",
        "coverage": "48% Postas I-3/I-4 Acreditadas",
        "coverageVal": 48,
        "coverageGap": 52,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Urbana (52%)",
        "inactionCost": "S/ 420 Millones/año",
        "inactionVal": 420,
        "inactionScale": 100,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> S/ 420 M/año (Mayor volumen nacional)",
        "priority": "Atención intensiva en distritos periurbanos de Lima Norte, Este y Sur; prevención de violencia digital, acoso escolar y fortalecimiento de salud mental adolescente."
      }
    },
    "manifestoTitle": "7. Manifiesto Legislativo y Agenda de Política Pública para el Perú (5 Puntos)",
    "cardsEn": {
      "c1": {
        "tag": "CRITICAL URGENCY",
        "title": "Pregnancy in Girls Under 15: Sexual Violence",
        "desc": "100% of pregnancies in children under 15 are statutory rape. Inaction perpetuates cycles of impunity and structural vulnerability."
      },
      "c2": {
        "tag": "SOCIAL IMPACT",
        "title": "Early Fertility and Compounded Opportunity Loss",
        "desc": "Early motherhood severely cuts lifetime earnings and truncates educational progression across generations."
      },
      "c3": {
        "tag": "HEALTH BARRIER",
        "title": "Gaps in Modern Contraceptive Delivery and LARCs",
        "desc": "Inconsistent availability of Long-Acting Reversible Contraceptives (implants, IUDs) in primary care clinics."
      }
    },
    "roiEn": {
      "roi1": {
        "title": "Loss Due to Inaction",
        "desc": "Aggregate lifetime economic burden in public health, school dropout, and forfeited labor income."
      },
      "roi2": {
        "title": "Return on Investment (ROI)",
        "desc": "For every $1 invested in adolescent pregnancy prevention, between $4.80 and $11.00 is returned."
      }
    },
    "lawsEn": {
      "l1": {
        "tag": "BINDING",
        "title": "Andean Plan PLANEA 2025-2030 Mandate",
        "desc": "Zero Tolerance commitments and fertility rate reduction targets by 2030."
      },
      "l2": {
        "tag": "CONSTITUTIONAL",
        "title": "Guarantee of Rights and Comprehensive Health",
        "desc": "Universal access to contraceptives and sexual violence response without discrimination."
      },
      "l3": {
        "tag": "FISCAL",
        "title": "Ring-Fenced Budget Allocation",
        "desc": "Protected and tagged resources for youth-friendly clinics and community prevention."
      }
    },
    "explorerTitleEn": "6. Territorial Indicators Explorer of Peru",
    "explorerSubtitleEn": "Territorialized diagnosis of fertility rates, clinic accreditation, and cost of inaction.",
    "manifestoTitleEn": "7. Legislative Manifesto and Public Policy Agenda for Perú (5 Points)",
    "manifestoItemsEn": [
      "1. Ring-fenced budget allocation in the Annual Budget Law for child and adolescent pregnancy prevention.",
      "2. Binding intersectoral Zero Tolerance protocol in girls under 15 and immediate response to sexual violence.",
      "3. Universal and barrier-free access to Long-Acting Reversible Contraceptives (LARCs) across all primary healthcare clinics.",
      "4. Mandatory implementation of Comprehensive Sexuality Education (CSE) with intercultural and gender-sensitive approaches.",
      "5. Accountability and oversight mechanism led by the National Ombudsperson Office and civil society organizations."
    ],
    "manifestoItems": [
      "1. Partida presupuestal específica en la Ley de Presupuesto Público para el Programa 0002 MINSA.",
      "2. Protocolos de Cero Tolerancia y atención inmediata en el MIMP y comisarías.",
      "3. Implementación efectiva de Educación Sexual Integral (ESI) en el currículo escolar.",
      "4. Enfoque intercultural y bilingüe para la atención de adolescentes andinas y amazónicas.",
      "5. Mecanismo de seguimiento interinstitucional liderado por la Defensoría del Pueblo."
    ],
    "sources": [
      {
        "id": "REF-PLANEA-2025",
        "tag": "ORAS-CONHU / MINSA",
        "year": "2024",
        "title": "Plan Andino (PLANEA 2025-2030)",
        "desc": "Plan Nacional de Prevención del Embarazo en Adolescentes y Matriz Multisectorial de Metas de los países de la Región Andina (Perú, Bolivia, Ecuador, Colombia, Venezuela y Chile)."
      },
      {
        "id": "REF-INEI-ENDES",
        "tag": "INEI PERÚ",
        "year": "2023",
        "title": "Encuesta ENDES 2022-2023",
        "desc": "Encuesta Demográfica y de Salud Familiar del Instituto Nacional de Estadística e Informática (INEI). Fuente primaria de las tasas de fecundidad por departamento y brechas de atención."
      },
      {
        "id": "REF-UNFPA-MILENA",
        "tag": "UNFPA PERÚ",
        "year": "2021",
        "title": "Metodología Actuarial MILENA",
        "desc": "Estudio sobre las consecuencias socioeconómicas del embarazo en la adolescencia en el Perú. Sustenta la pérdida del 0.45% del PBI (S/ 1,200 Millones/año) y el ROI de S/ 7:1."
      },
      {
        "id": "REF-NTS-130-MINSA",
        "tag": "MINSA PERÚ",
        "year": "R.M. N° 650-2017",
        "title": "NTS N° 130-MINSA/DGIESP",
        "desc": "Norma Técnica de Salud para la Atención Integral de Salud de Adolescentes en el Perú. Define los criterios de acreditación obligatoria para consultorios amigables del I-3 y I-4."
      },
      {
        "id": "REF-DP-INF-2023",
        "tag": "DEFENSORÍA DEL PUEBLO",
        "year": "Informe N° 004-2023",
        "title": "Supervisión a Centros CEM y Postas",
        "desc": "Reporte de supervisión constitucional a la atención de víctimas de violencia sexual en zonas rurales y andinas, evaluando la brecha de intérpretes y procuración judicial."
      },
      {
        "id": "REF-COD-PENAL-173",
        "tag": "PODER JUDICIAL / CONGRESO",
        "year": "D.L. 635 / Ley 30364",
        "title": "Código Penal del Perú (Art. 173)",
        "desc": "Marco sustantivo del Código Penal (Art. 173 indemnidad sexual en <15 años) y la Ley 30364 para prevenir y erradicar la violencia contra las mujeres y los integrantes del grupo familiar."
      }
    ],
    "heroDescAy": "Asamblea, Ministerionaka, MEF wan Gobiernos Regionales ukanakatak qillqa. Plan Andino yatiyawimpi <strong>15 marat jisk'anakan cero tolerancia</strong> phuqhañataki.",
    "heroDescGn": "Tetã Aty, Ministros, MEF ha Tetãvore Sambyhyhárape g̃uarã marandu. Plan Andino yatiyawireheve <strong>15 ary guýpe cero tolerancia</strong> ohupyty hag̃ua.",
    "heroDescArn": "Congreso, Ministros, MEF ka Regional Longko mew kisu kimün dungu. Plan Andino mew <strong>15 tripantu pichikeche kuñiwtual</strong>.",
    "heroDescQvi": "Congreso, Ministrokuna, MEF wan Gobernadores nisqapaq killka. Plan Andino yachaykunawan <strong>15 watamanta uray sipaskunapi cero tolerancia</strong> paktachinkapak.",
    "heroDescGuc": "Puka süpüla Congress, Ministros, MEF je Gobernadores. Plan Andino atijawaa süpüla <strong>15 juyamüin cero tolerancia</strong>.",
    "heroDescWra": "Goberno, Ministros, MEF iboma sanuka aribo. Plan Andino nomewitu <strong>15 wata sanuka cero tolerancia</strong>.",
    "heroDescPmn": "Teposankon, Ministros, MEF murekon mai. Plan Andino <strong>15 wata murekon cero tolerancia</strong>.",
    "heroDescPbb": "Congreso, Ministros, MEF nxusxi ku'j we'sx. Plan Andino <strong>15 vxite' cero tolerancia</strong>.",
    "heroDescEmp": "Congreso, Ministros, MEF wẽra warrade. Plan Andino <strong>15 warrarãde cero tolerancia</strong>.",
    "heroDescAsh": "Congreso, Ministros, MEF eentsite pankotsi. Plan Andino <strong>15 osarentsi cero tolerancia</strong>.",
    "heroDescAgr": "Congreso, Ministros, MEF datsajum apu. Plan Andino <strong>15 mijan datsajum cero tolerancia</strong>.",
    "heroDescJiv": "Congreso, Ministros, MEF natsa uunt. Plan Andino <strong>15 uchin cero tolerancia</strong>.",
    "heroDescRap": "Puka haka tere no te Congreso, Ministros, MEF 'e Gobernadores. Plan Andino 'ite mo te poki 'āpī o raro i te <strong>15 matahiti cero tolerancia</strong>.",
    "siteTitleAy": "Suyu Kamachi Qhawawi: Imillanaka Usuriptawi wan Nuwasiña Jark'aqaña Perú Suyuna",
    "siteTitleArn": "Ngülamtun Politica Dungu: Pichikeche Domo Nieal Koñin Kuñiwtun Perú Mew",
    "siteTitleRap": "Vānaŋa Haka Oho: Pāruru i te Poki 'Āpī mai te Paki 'e te Hapu'a i Perú",
    "manifestoTitleQu": "7. Kamachiy Qillqa wan Política Pública Agenda Perú Suyupaq (5 Puntos)",
    "manifestoItemsQu": [
      "1. Ley de Presupuesto Anual nisqapi wawa chichuy hark'anapaq qullqi t'aqayta takyachiy.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia kamachiy wan maqanakuyta utqaylla hark'ay.",
      "3. LARC unaypaq hampiyninkunata sapa postapi mana qullqillawan qoy.",
      "4. Educación Sexual Integral (ESI) yachachiyta intercultural wan runasimipi hunt'achiy.",
      "5. Defensoría del Pueblo wan ayllukunawan kuska qillqata qhaway wan hunt'achiy."
    ],
    "cardsQu": {
      "c1": {
        "tag": "ANCHA HATUN LLAKI",
        "title": "15 Watamanta Uray Sipaskunapi Chichuy: Maqanakuy",
        "desc": "15 watamanta uray wawakunapi chichuyqa violación qallariyniyuqmi. Mana allichasqaqa llakitam mirachin."
      },
      "c2": {
        "tag": "AYLLUPI CHINKAY",
        "title": "Wawa Kaspa Chichuy wan Yachay Chinkachiy",
        "desc": "Wawallaraq wawayuq kayqa yachaykunata qulluchin wan kawsay qullqita anchata pisiyachin."
      },
      "c3": {
        "tag": "HAMPI WASI PISIY",
        "title": "LARC wan Moderno Hampikuna Mana Aypay",
        "desc": "Postakunapi wan ayllu hampiwesikunapi implante wan DIU mana aypanchu."
      }
    },
    "roiQu": {
      "roi1": {
        "title": "Mana Ruraypa Chinkachiynin",
        "desc": "Hampi wasi gastokuna, yachay saqiy wan qullqi mana chaskisqakuna."
      },
      "roi2": {
        "title": "Qullqi Kutimuynin (ROI)",
        "desc": "Sapa $1 churamusqamanta, $4.80 - $11.00 kutimun ayllupaq wan suyupaq."
      }
    },
    "lawsQu": {
      "l1": {
        "tag": "KAMACHIY",
        "title": "Plan Andino PLANEA 2025-2030 Kamachiy",
        "desc": "Cero Tolerancia wan fecundidad pisiyachiy 2030 watapaq."
      },
      "l2": {
        "tag": "HATUN KAMACHIY",
        "title": "Derechos wan Allin Kawsay Amachay",
        "desc": "Tukuy runapaq LARC hampikuna wan maqanakuy hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHIY",
        "title": "Qullqi T'aqay Takyachiy",
        "desc": "Ayllu postakunapaq qullqi waqaychasqa."
      }
    },
    "manifestoTitleAy": "7. Suyu Kamachi Qillqa wan Políticas Públicas Perú Suyutaki (5 Puntos)",
    "manifestoItemsAy": [
      "1. Ley de Presupuesto Anual ukan sapürunjama qullqi t'aqawi imillanaka usuriptawi jark'aqañataki.",
      "2. 15 marat jisk'anakan Cero Tolerancia protocolos wan jank'aki qullayawi comisaríanakana.",
      "3. LARC unay qullañanaka taqi qullañ utanakana inaki churaña.",
      "4. Educación Sexual Integral (ESI) yatichawi intercultural wan aymar aruna phuqhaña.",
      "5. Defensoría del Pueblo yanapirinakampi qhawawi wan amachawi luraña."
    ],
    "cardsAy": {
      "c1": {
        "tag": "SINTIPUNI AXSARAWI",
        "title": "15 Marat Jisk'anakan Usuriptawi: Nuwasiña",
        "desc": "15 marat jisk'anakan usuriptawipax nuwasiñat jutiriwa. Jan askichatax jach'a llakiwa."
      },
      "c2": {
        "tag": "JAQI CHHAQAWI",
        "title": "Nayra Usuriptawi wan Yatichawi Chhaqawi",
        "desc": "Imillanaka usuriptawipax yatichawi qulluchiwa wan jakawi qullqi pisiyaptayi."
      },
      "c3": {
        "tag": "QULLAÑA UTAN PISI",
        "title": "LARC wan Moderno Qullanaka Jan Aypawi",
        "desc": "Qullañ utanakana implante wan DIU qullanakax janiw aypkiti."
      }
    },
    "roiAy": {
      "roi1": {
        "title": "Jan Lurawina Chhaqawipa",
        "desc": "Qullañ uta gastonaka, yatichawi jaytawi wan qullqi jan jikxatatanaka."
      },
      "roi2": {
        "title": "Qullqi Kutt'awi (ROI)",
        "desc": "Sapa $1 churatanakampi, $4.80 - $11.00 kutt'ani suyunakataki."
      }
    },
    "lawsAy": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan usuriptawi jisk'aptayaña 2030 marataki."
      },
      "l2": {
        "tag": "JACH'A KAMACHI",
        "title": "Derechos wan Qullañ Amachawi",
        "desc": "Taqinitak LARC qullanaka wan nuwasiña jark'aqaña."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'aqawi Imxatata",
        "desc": "Qullañ utanakataki qullqi amachatapuni."
      }
    },
    "manifestoTitleGn": "7. Tetã Rerekua Kuatia ha Políticas Públicas Perú-pe g̃uarã (5 Puntos)",
    "manifestoItemsGn": [
      "1. Viru mohenda Ley de Presupuesto Anual-pe mitãkuña usuriptawi jark'aqa hag̃ua.",
      "2. Cero Tolerancia protocols 15 ary guýpe ha ñangareko pya'e violencia sexual rehe.",
      "3. LARC pohã ñeme'ẽ opavave tasyo ha puesto de salud rupive.",
      "4. Educación Sexual Integral (ESI) mbo'epy hekopete guaraníme ha castellánope.",
      "5. Defensoría del Pueblo ha tetãygua aty ñemongeta ha jehechajey."
    ],
    "cardsGn": {
      "c1": {
        "tag": "KYHYJE GUASU",
        "title": "Mitãkuña 15 Ary Guýpe Usuriptawi: Ñerairõ",
        "desc": "100% mitãkuña 15 ary guýpe hyeguáva oñembotavy rupi. Tekotevẽ ñangareko pya'e."
      },
      "c2": {
        "tag": "TEKO KAÑY",
        "title": "Mitãkuña Memby ha Tekoasy",
        "desc": "Mitãkuña memby ogueru tekoasy ha ombopaha mbo'epy heñóva."
      },
      "c3": {
        "tag": "TASYÓPE KAÑY",
        "title": "LARC ha Anticonceptivos Pokã",
        "desc": "Tasyo michĩvape ndaipóri implante ha DIU mitãkuñáme g̃uarã."
      }
    },
    "roiGn": {
      "roi1": {
        "title": "Viru Kañy",
        "desc": "Tasyo gasto, mbo'epy jejayei ha viru ndohupytýiva."
      },
      "roi2": {
        "title": "Viru Jehevy (ROI)",
        "desc": "Peteĩ $1 emoĩvape g̃uarã, $4.80 - $11.00 ojevy tetãme."
      }
    },
    "lawsGn": {
      "l1": {
        "tag": "TEKO ME'Ẽ",
        "title": "Plan Andino PLANEA 2025-2030 Teko",
        "desc": "Cero Tolerancia ha fecundidad guejy 2030 arype."
      },
      "l2": {
        "tag": "TETÃ ME'Ẽ",
        "title": "Derécho ha Tesãi Ñangareko",
        "desc": "LARC pohã opavavépe ha ñerairõ jark'a."
      },
      "l3": {
        "tag": "VIRU ME'Ẽ",
        "title": "Viru Mohenda Ñangareko",
        "desc": "Tasyo michĩvape viru oñemohendáva."
      }
    },
    "manifestoTitleArn": "7. Ngülamtun Politica Dungu Agenda Perú Mew (5 Puntos)",
    "manifestoItemsArn": [
      "1. Kisu Presupuesto Ley de Presupuesto Anual mew wechekeche koñin kuñiwtual.",
      "2. Cero Tolerancia protocolos 15 tripantu pichikeche kuñiwtual kom posta mew.",
      "3. LARC kuñiwtun lawen kom pu centro de salud mew nieal.",
      "4. Educación Sexual Integral (ESI) küme kimün kom chillkatuwe mapudungun mew.",
      "5. Defensoría del Pueblo ka lof che mew kisu kuñiwtun dungu."
    ],
    "cardsArn": {
      "c1": {
        "tag": "AÑKEN DUNGU",
        "title": "15 Tripantu Pichikeche Koñin: Weda Dungu",
        "desc": "Kom 15 tripantu pichikeche koñin niey weda dungu mew. Kuñiwtual tañi mongen."
      },
      "c2": {
        "tag": "MAPU MEW KAÑY",
        "title": "Wechekeche Koñin ka Kimün Ngelay",
        "desc": "Wechekeche koñin niey mew fey kimün ngelay ka kulliñ pisiyachi."
      },
      "c3": {
        "tag": "LAWENTUWE PISI",
        "title": "LARC ka Küme Lawen Ngelay",
        "desc": "Posta mew implante ka DIU ngelay wechekeche domo mew."
      }
    },
    "roiArn": {
      "roi1": {
        "title": "Kisu Femnon Mew Kulliñ",
        "desc": "Lawentuwe gasto, chillkatuwe ngelay ka kulliñ kañy."
      },
      "roi2": {
        "title": "Kulliñ Wiñol (ROI)",
        "desc": "Fill $1 kulliñ mew, $4.80 - $11.00 wiñoy mapu mew."
      }
    },
    "lawsArn": {
      "l1": {
        "tag": "NGÜLAM",
        "title": "Plan Andino PLANEA 2025-2030 Ngülam",
        "desc": "Cero Tolerancia ka wechekeche koñin ngelay 2030 tripantu mew."
      },
      "l2": {
        "tag": "FÜTRA NGÜLAM",
        "title": "Derechos ka Küme Mongen",
        "desc": "Kom che mew LARC lawen ka weda dungu kuñiwtun."
      },
      "l3": {
        "tag": "KULLIÑ NGÜLAM",
        "title": "Kulliñ Kuñiwtun",
        "desc": "Posta mew kulliñ kuñiwtual."
      }
    },
    "manifestoTitleQvi": "7. Llaktapa Kamachi Killka Agenda Perú Llaktapi (5 Puntos)",
    "manifestoItemsQvi": [
      "1. Ley de Presupuesto ukupi wawa chichuy hark'ankapak qullqi t'akayta sinyachina.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia protocolos wan utka yanapana.",
      "3. LARC unaypa hampikunata tukuy hampiwasi ukupi llukshichina.",
      "4. Educación Sexual Integral (ESI) yachana wasikunapi kichwapi paktachina.",
      "5. Defensoría del Pueblo wan llaktakunawan kuska killkata rikuriy."
    ],
    "cardsQvi": {
      "c1": {
        "tag": "YAPA JATUN LLAKI",
        "title": "15 Watamanta Uray Wawa Chichuy: Llaki",
        "desc": "15 watamanta uray wawakunapi chichuyqa llakiyuqmi. Mana allichaspaqa llakitami mirachin."
      },
      "c2": {
        "tag": "LLAKTA PISI",
        "title": "Wawa Chichuy wan Yachay Chinkay",
        "desc": "Wawa chichuyka yachayta pishiyachin wan kawsayta llakichin."
      },
      "c3": {
        "tag": "HAMPIWASI PISI",
        "title": "LARC wan Hampikuna Mana Tiyay",
        "desc": "Hampiwasi ukupi implante wan DIU mana aypanchu."
      }
    },
    "roiQvi": {
      "roi1": {
        "title": "Mana Ruraypa Chinkaynin",
        "desc": "Hampiwasi gastokuna, yachay sakiy wan kawsay qullqi pisi."
      },
      "roi2": {
        "title": "Qullqi Kutiy (ROI)",
        "desc": "Sapa $1 churashkamanta, $4.80 - $11.00 kutin llaktapaq."
      }
    },
    "lawsQvi": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan wawa chichuy pisi 2030 watapak."
      },
      "l2": {
        "tag": "JATUN KAMACHI",
        "title": "Derechos wan Alli Kawsay",
        "desc": "Tukuykunapak LARC hampikuna wan llaki hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'akay",
        "desc": "Hampiwasi ukupi qullqi charina."
      }
    },
    "manifestoTitleGuc": "7. Apalirawaa Politica Agenda Perú (5 Puntos)",
    "manifestoItemsGuc": [
      "1. Walawaa presupuestal süpüla jintüi asitnushii katataaka Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos süpüla 15 juyamüin jintüin je anaa.",
      "3. LARC anticonceptivos tü taashii süpüla mmapa'a.",
      "4. Educación Sexual Integral (ESI) wayuunaikiru'u ekirajaapülee.",
      "5. Defensoría del Pueblo je wayuu akaliojiraa."
    ],
    "cardsGuc": {
      "c1": {
        "tag": "MÜLIAA MÜSIA",
        "title": "15 Juyamüin Jintüi Asitnushii: Müliaa",
        "desc": "15 juyamüin jintüin asitnushii katataaka. Cho'ujaasü akaliojiraa süpüla anaa."
      },
      "c2": {
        "tag": "MMAPA'A PISI",
        "title": "Jintüi Katataaka je Ekirajaapülee Chinkay",
        "desc": "Jintüi asitnushii ekirajaapülee chinkachi."
      },
      "c3": {
        "tag": "ANAA AYATAWAA",
        "title": "LARC je Anticonceptivos Pokã",
        "desc": "Posta je centro de salud nojotshi implante süpüla jintüi."
      }
    },
    "roiGuc": {
      "roi1": {
        "title": "Walawaa Chinkay",
        "desc": "Centro de salud gasto, ekirajaapülee chinkay."
      },
      "roi2": {
        "title": "Walawaa Anaa (ROI)",
        "desc": "Süpüla $1 walawaa, $4.80 - $11.00 anaa mmapa'a."
      }
    },
    "lawsGuc": {
      "l1": {
        "tag": "PÜTCHI",
        "title": "Plan Andino PLANEA 2025-2030 Pütchi",
        "desc": "Cero Tolerancia je jintüi asitnushii katataaka 2030."
      },
      "l2": {
        "tag": "ANAA PÜTCHI",
        "title": "Derechos je Anaa",
        "desc": "Mmapa'a LARC anticonceptivos je müliaa jark'a."
      },
      "l3": {
        "tag": "WALAWA PÜTCHI",
        "title": "Walawaa Presupuesto",
        "desc": "Posta walawaa anaa."
      }
    },
    "manifestoTitleWra": "7. Obonoba Politica Agenda Perú (5 Puntos)",
    "manifestoItemsWra": [
      "1. Presupuesto aribo iboma asidaja obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata sanuka iboma.",
      "3. LARC anticonceptivos kokotune hanoko.",
      "4. Educación Sexual Integral (ESI) warao aribo eskuela.",
      "5. Defensoría aribo nomewitu sanuka."
    ],
    "cardsWra": {
      "c1": {
        "tag": "OBONOBA SANUKA",
        "title": "15 Wata Sanuka Iboma Asidaja: Obonoba",
        "desc": "15 wata sanuka iboma asidaja obonoba nomewitu."
      },
      "c2": {
        "tag": "ARIBO SANUKA",
        "title": "Iboma Asidaja eskuela obonoba",
        "desc": "Iboma asidaja eskuela chinkachi."
      },
      "c3": {
        "tag": "HANOKO PISI",
        "title": "LARC Anticonceptivos Hanoko",
        "desc": "Hanoko sanuka implante nojotshi."
      }
    },
    "roiWra": {
      "roi1": {
        "title": "Obonoba Aribo Chinkay",
        "desc": "Hanoko gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Aribo Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa hanoko."
      }
    },
    "lawsWra": {
      "l1": {
        "tag": "ARIBO",
        "title": "Plan Andino PLANEA 2025-2030 Aribo",
        "desc": "Cero Tolerancia iboma asidaja 2030."
      },
      "l2": {
        "tag": "NOMIEWITU",
        "title": "Derechos je Hanoko",
        "desc": "LARC anticonceptivos hanoko kokotune."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Hanoko",
        "desc": "Hanoko sanuka aribo."
      }
    },
    "manifestoTitlePmn": "7. Politica Mai Agenda Perú (5 Puntos)",
    "manifestoItemsPmn": [
      "1. Presupuesto mai murekon pimanse obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata murekon mai.",
      "3. LARC anticonceptivos kokotune pata'pï iwe.",
      "4. Educación Sexual Integral (ESI) pemón mai eskuela.",
      "5. Defensoría mai nomewitu murekon."
    ],
    "cardsPmn": {
      "c1": {
        "tag": "PATA'PÏ MAI",
        "title": "15 Wata Murekon Pimanse: Pata'pï",
        "desc": "15 wata murekon pimanse pata'pï mai."
      },
      "c2": {
        "tag": "MAI PITI",
        "title": "Murekon Pimanse eskuela mai",
        "desc": "Murekon pimanse eskuela chinkachi."
      },
      "c3": {
        "tag": "IWE PISI",
        "title": "LARC Anticonceptivos Iwe",
        "desc": "Pata'pï iwe implante nojotshi."
      }
    },
    "roiPmn": {
      "roi1": {
        "title": "Mai Piti Chinkay",
        "desc": "Pata'pï iwe gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Mai Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa iwe."
      }
    },
    "lawsPmn": {
      "l1": {
        "tag": "MAI",
        "title": "Plan Andino PLANEA 2025-2030 Mai",
        "desc": "Cero Tolerancia murekon pimanse 2030."
      },
      "l2": {
        "tag": "PATA'PÏ",
        "title": "Derechos je Iwe",
        "desc": "LARC anticonceptivos pata'pï iwe."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Iwe",
        "desc": "Pata'pï iwe mai."
      }
    },
    "manifestoTitlePbb": "7. Yu'çeçx Politica Agenda Perú (5 Puntos)",
    "manifestoItemsPbb": [
      "1. Presupuesto nxusxi ku'j we'sx thegnikha's Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 vxite' ku'j we'sx.",
      "3. LARC yu'çeçx taashii ta'çxhab.",
      "4. Educación Sexual Integral (ESI) nasa yuwete ekirajaapülee.",
      "5. Defensoría del Pueblo thegnikha's."
    ],
    "cardsPbb": {
      "c1": {
        "tag": "KU'J WE'SX",
        "title": "15 Vxite' Ku'j Thegnikha's: Ku'j",
        "desc": "15 vxite' ku'j we'sx thegnikha's."
      },
      "c2": {
        "tag": "ÇXHAB PISI",
        "title": "Ku'j Thegnikha's eskuela çxhab",
        "desc": "Ku'j we'sx eskuela chinkachi."
      },
      "c3": {
        "tag": "YAÇK PISI",
        "title": "LARC Yu'çeçx Yaçk",
        "desc": "Yaçk taashii implante nojotshi."
      }
    },
    "roiPbb": {
      "roi1": {
        "title": "Ku'j We'sx Chinkay",
        "desc": "Yaçk gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Ku'j Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa çxhab."
      }
    },
    "lawsPbb": {
      "l1": {
        "tag": "YU'ÇEÇX",
        "title": "Plan Andino PLANEA 2025-2030 Yu'çeçx",
        "desc": "Cero Tolerancia ku'j we'sx 2030."
      },
      "l2": {
        "tag": "ÇXHAB",
        "title": "Derechos je Yaçk",
        "desc": "LARC yu'çeçx taashii ta'çxhab."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Çxhab",
        "desc": "Çxhab yaçk yu'çeçx."
      }
    },
    "manifestoTitleEmp": "7. Bedéa Politica Agenda Perú (5 Puntos)",
    "manifestoItemsEmp": [
      "1. Presupuesto druade wẽra warrade Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 warrarãde wẽra.",
      "3. LARC anticonceptivos druade droma.",
      "4. Educación Sexual Integral (ESI) emberá bedéade eskuela.",
      "5. Defensoría del Pueblo druade bia."
    ],
    "cardsEmp": {
      "c1": {
        "tag": "KHARRA DRUADE",
        "title": "15 Warrarãde Wẽra: Kharra",
        "desc": "15 warrarãde wẽra kharra druade."
      },
      "c2": {
        "tag": "DRUA PISI",
        "title": "Wẽra Warrarã eskuela drua",
        "desc": "Wẽra warrarã eskuela chinkachi."
      },
      "c3": {
        "tag": "DROMA PISI",
        "title": "LARC Anticonceptivos Droma",
        "desc": "Droma implante nojotshi."
      }
    },
    "roiEmp": {
      "roi1": {
        "title": "Drua Bedéa Chinkay",
        "desc": "Droma gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Drua Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa drua."
      }
    },
    "lawsEmp": {
      "l1": {
        "tag": "BEDÉA",
        "title": "Plan Andino PLANEA 2025-2030 Bedéa",
        "desc": "Cero Tolerancia wẽra warrade 2030."
      },
      "l2": {
        "tag": "DRUA",
        "title": "Derechos je Droma",
        "desc": "LARC anticonceptivos druade droma."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Drua",
        "desc": "Druade droma bedéa."
      }
    },
    "manifestoTitleAsh": "7. Kametsari Politica Agenda Perú (5 Puntos)",
    "manifestoItemsAsh": [
      "1. Presupuesto pankotsi eentsite kametsari Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 osarentsi eentsite.",
      "3. LARC anticonceptivos pankotsi maaroni.",
      "4. Educación Sexual Integral (ESI) asháninka ñañantsi eskuela.",
      "5. Defensoría del Pueblo eentsite kametsa."
    ],
    "cardsAsh": {
      "c1": {
        "tag": "KAMETSARIÑA",
        "title": "15 Osarentsi Eentsite: Kametsa",
        "desc": "15 osarentsi eentsite kametsariña."
      },
      "c2": {
        "tag": "PANKOTSI PISI",
        "title": "Eentsite eskuela pankotsi",
        "desc": "Eentsite eskuela chinkachi."
      },
      "c3": {
        "tag": "PANKOTSI PISI",
        "title": "LARC Anticonceptivos Pankotsi",
        "desc": "Pankotsi implante nojotshi."
      }
    },
    "roiAsh": {
      "roi1": {
        "title": "Pankotsi Kametsa Chinkay",
        "desc": "Pankotsi gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Pankotsi Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa pankotsi."
      }
    },
    "lawsAsh": {
      "l1": {
        "tag": "ÑAÑANTSI",
        "title": "Plan Andino PLANEA 2025-2030 Ñañantsi",
        "desc": "Cero Tolerancia eentsite 2030."
      },
      "l2": {
        "tag": "PANKOTSI",
        "title": "Derechos je Pankotsi",
        "desc": "LARC anticonceptivos pankotsi maaroni."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Pankotsi",
        "desc": "Pankotsi eentsite ñañantsi."
      }
    },
    "manifestoTitleAgr": "7. Datsajum Politica Agenda Perú (5 Puntos)",
    "manifestoItemsAgr": [
      "1. Presupuesto apu datsajum pegker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 mijan datsajum.",
      "3. LARC anticonceptivos pegker jea.",
      "4. Educación Sexual Integral (ESI) awajún chicham eskuela.",
      "5. Defensoría del Pueblo datsajum pegker."
    ],
    "cardsAgr": {
      "c1": {
        "tag": "PEGKERCHAU",
        "title": "15 Mijan Datsajum: Pegkerchau",
        "desc": "15 mijan datsajum pegkerchau."
      },
      "c2": {
        "tag": "JEA PISI",
        "title": "Datsajum eskuela jea",
        "desc": "Datsajum eskuela chinkachi."
      },
      "c3": {
        "tag": "JEA PISI",
        "title": "LARC Anticonceptivos Jea",
        "desc": "Jea implante nojotshi."
      }
    },
    "roiAgr": {
      "roi1": {
        "title": "Datsajum Pegker Chinkay",
        "desc": "Jea gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Datsajum Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa jea."
      }
    },
    "lawsAgr": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia datsajum 2030."
      },
      "l2": {
        "tag": "JEA",
        "title": "Derechos je Jea",
        "desc": "LARC anticonceptivos pegker jea."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Jea",
        "desc": "Jea datsajum chicham."
      }
    },
    "manifestoTitleJiv": "7. Natsa Politica Agenda Perú (5 Puntos)",
    "manifestoItemsJiv": [
      "1. Presupuesto uunt natsa penker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 uchin natsa.",
      "3. LARC anticonceptivos penker tsuwatai.",
      "4. Educación Sexual Integral (ESI) shuar chicham eskuela.",
      "5. Defensoría del Pueblo natsa penker."
    ],
    "cardsJiv": {
      "c1": {
        "tag": "PENKERCHAU",
        "title": "15 Uchin Natsa: Penkerchau",
        "desc": "15 uchin natsa penkerchau."
      },
      "c2": {
        "tag": "TSUWATAI PISI",
        "title": "Natsa eskuela tsuwatai",
        "desc": "Natsa eskuela chinkachi."
      },
      "c3": {
        "tag": "TSUWATAI PISI",
        "title": "LARC Anticonceptivos Tsuwatai",
        "desc": "Tsuwatai implante nojotshi."
      }
    },
    "roiJiv": {
      "roi1": {
        "title": "Natsa Penker Chinkay",
        "desc": "Tsuwatai gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Natsa Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa tsuwatai."
      }
    },
    "lawsJiv": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia natsa 2030."
      },
      "l2": {
        "tag": "TSUWATAI",
        "title": "Derechos je Tsuwatai",
        "desc": "LARC anticonceptivos penker tsuwatai."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Tsuwatai",
        "desc": "Tsuwatai natsa chicham."
      }
    },
    "manifestoTitleRap": "7. Vānaŋa Haka Oho Agenda mo Perú (5 Puntos)",
    "manifestoItemsRap": [
      "1. Moni haka tere no te poki 'āpī hapu'a kore i roto i te Ley de Presupuesto Anual.",
      "2. Cero Tolerancia protocolos mo te poki o raro i te 15 matahiti.",
      "3. LARC anticonceptivos pāruru mo te kāiŋa.",
      "4. Educación Sexual Integral (ESI) 'ite i roto i te ha'api'ira'a vananga Rapa Nui.",
      "5. Defensoría de la Niñez pāruru mo te poki kāiŋa."
    ],
    "cardsRap": {
      "c1": {
        "tag": "RARI NUI",
        "title": "15 Matahiti Poki Hapu'a: Rari",
        "desc": "15 matahiti poki hapu'a kore rari nui."
      },
      "c2": {
        "tag": "KĀIŊA PISI",
        "title": "Poki Hapu'a ha'api'ira'a kāiŋa",
        "desc": "Poki hapu'a ha'api'ira'a chinkachi."
      },
      "c3": {
        "tag": "HARE PISI",
        "title": "LARC Anticonceptivos Hare",
        "desc": "Hare implante nojotshi."
      }
    },
    "roiRap": {
      "roi1": {
        "title": "Kāiŋa Moni Kore",
        "desc": "Hare gasto, ha'api'ira'a kore."
      },
      "roi2": {
        "title": "Moni Haka Oho (ROI)",
        "desc": "Mo te $1, $4.80 - $11.00 moni hoki mai."
      }
    },
    "lawsRap": {
      "l1": {
        "tag": "VĀNAŊA",
        "title": "Plan Andino PLANEA 2025-2030 Vānaŋa",
        "desc": "Cero Tolerancia poki hapu'a kore 2030."
      },
      "l2": {
        "tag": "KĀIŊA",
        "title": "Derechos je Hare",
        "desc": "LARC anticonceptivos pāruru mo te kāiŋa."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Kāiŋa",
        "desc": "Kāiŋa hare vānaŋa."
      }
    }
  },
  "bolivia": {
    "name": "Bolivia",
    "flag": "🇧🇴",
    "flagSvg": "<svg class=\"w-5 h-3.5 rounded inline-block object-cover flex-shrink-0 align-middle\" viewBox=\"0 0 640 480\"><defs><clipPath id=\"bo-hdr-clip\"><ellipse cx=\"320\" cy=\"240\" rx=\"46\" ry=\"58\"/></clipPath></defs><path fill=\"#D52B1E\" d=\"M0 0h640v160H0z\"/><path fill=\"#FCD116\" d=\"M0 160h640v160H0z\"/><path fill=\"#007934\" d=\"M0 320h640v160H0z\"/><g><line x1=\"235\" y1=\"165\" x2=\"405\" y2=\"315\" stroke=\"#475569\" stroke-width=\"4\"/><line x1=\"405\" y1=\"165\" x2=\"235\" y2=\"315\" stroke=\"#475569\" stroke-width=\"4\"/><line x1=\"230\" y1=\"240\" x2=\"410\" y2=\"240\" stroke=\"#718096\" stroke-width=\"3\"/><path d=\"M230 180 C215 210 215 260 230 290 L260 290 C245 260 245 210 260 180 Z\" fill=\"#D52B1E\"/><path d=\"M225 215 C215 240 215 265 225 290 L245 290 C235 265 235 240 245 215 Z\" fill=\"#FCD116\"/><path d=\"M220 245 C215 265 215 280 220 290 L235 290 C230 280 230 265 235 245 Z\" fill=\"#007934\"/><path d=\"M410 180 C425 210 425 260 410 290 L380 290 C395 260 395 210 380 180 Z\" fill=\"#D52B1E\"/><path d=\"M415 215 C425 240 425 265 415 290 L395 290 C405 265 405 240 395 215 Z\" fill=\"#FCD116\"/><path d=\"M420 245 C425 265 425 280 420 290 L405 290 C410 280 410 265 405 245 Z\" fill=\"#007934\"/><path d=\"M265 190 Q252 240 268 280\" stroke=\"#15803D\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M375 190 Q388 240 372 280\" stroke=\"#16A34A\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M320 182 C285 155 250 152 230 162 C248 180 285 186 312 192 Z\" fill=\"#292524\"/><path d=\"M320 182 C355 155 390 152 410 162 C392 180 355 186 328 192 Z\" fill=\"#292524\"/><ellipse cx=\"320\" cy=\"172\" rx=\"7\" ry=\"9\" fill=\"#44403C\"/><polygon points=\"324,168 333,172 324,175\" fill=\"#F59E0B\"/><circle cx=\"320\" cy=\"180\" r=\"4\" fill=\"#FFFFFF\"/><ellipse cx=\"320\" cy=\"190\" rx=\"5\" ry=\"4\" fill=\"#DC2626\"/><g clip-path=\"url(#bo-hdr-clip)\"><rect x=\"250\" y=\"170\" width=\"140\" height=\"140\" fill=\"#1E3A8A\"/><ellipse cx=\"320\" cy=\"240\" rx=\"36\" ry=\"46\" fill=\"#60A5FA\"/><circle cx=\"308\" cy=\"214\" r=\"8\" fill=\"#FBBF24\"/><polygon points=\"280,265 320,208 360,265\" fill=\"#B45309\"/><polygon points=\"325,265 348,228 365,265\" fill=\"#92400E\"/><polygon points=\"320,208 312,220 320,223 328,220\" fill=\"#FFFFFF\"/><rect x=\"330\" y=\"250\" width=\"8\" height=\"8\" fill=\"#FFFFFF\"/><polygon points=\"330,250 334,244 338,250\" fill=\"#DC2626\"/><rect x=\"280\" y=\"258\" width=\"80\" height=\"30\" fill=\"#22C55E\"/><ellipse cx=\"306\" cy=\"268\" rx=\"4\" ry=\"3\" fill=\"#FFFFFF\"/><circle cx=\"309\" cy=\"264\" r=\"2\" fill=\"#FFFFFF\"/><line x1=\"304\" y1=\"270\" x2=\"304\" y2=\"275\" stroke=\"#FFFFFF\" stroke-width=\"1\"/><line x1=\"308\" y1=\"270\" x2=\"308\" y2=\"275\" stroke=\"#FFFFFF\" stroke-width=\"1\"/><line x1=\"336\" y1=\"258\" x2=\"336\" y2=\"274\" stroke=\"#78350F\" stroke-width=\"1.5\"/><circle cx=\"336\" cy=\"258\" r=\"4\" fill=\"#15803D\"/><circle cx=\"328\" cy=\"270\" r=\"3\" fill=\"#FBBF24\"/><circle cx=\"320\" cy=\"282\" r=\"2\" fill=\"#FBBF24\"/><circle cx=\"305\" cy=\"280\" r=\"2\" fill=\"#FBBF24\"/><circle cx=\"335\" cy=\"280\" r=\"2\" fill=\"#FBBF24\"/><circle cx=\"292\" cy=\"272\" r=\"2\" fill=\"#FBBF24\"/><circle cx=\"348\" cy=\"272\" r=\"2\" fill=\"#FBBF24\"/></g><ellipse cx=\"320\" cy=\"240\" rx=\"46\" ry=\"58\" stroke=\"#D97706\" stroke-width=\"4.5\" fill=\"none\"/><ellipse cx=\"320\" cy=\"240\" rx=\"43\" ry=\"55\" stroke=\"#FDE68A\" stroke-width=\"1.5\" fill=\"none\"/><ellipse cx=\"320\" cy=\"240\" rx=\"36\" ry=\"46\" stroke=\"#D97706\" stroke-width=\"2\" fill=\"none\"/></g></svg>",
    "badge": "Estrategia AIDA • PLANEA 2025-2030 🇧🇴",
    "siteTitle": "Plataforma de Incidencia Política: Prevención del Embarazo Adolescente en Bolivia",
    "siteTitleEn": "Policy Advocacy Platform: Adolescent Pregnancy Prevention in Bolivia",
    "siteTitleQu": "Suyu Kamachiy Qhawana: Wawa Chichuy Hark'ay Bolivia Suyupi",
    "endorsed": [
      "Min. Salud y Deportes",
      "ORAS-CONHU",
      "UNFPA Bolivia",
      "OPS/OMS"
    ],
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand-accent to-yellow-400'>Prevención del Embarazo Adolescente en Bolivia</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand-accent to-yellow-400'>Adolescent Pregnancy Prevention in Bolivia</span>",
    "heroTitleQu": "Mana Ruraypa Qullqi Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand-accent to-yellow-400'>Wawa Chichuy Hark'ay Bolivia Suyupi</span>",
    "heroDesc": "Evidencia actuarial para la <strong>Asamblea Legislativa Plurinacional, Ministerio de Economía y Gobiernos Autónomos Departamentales</strong> sobre la implementación de la Estrategia AIDA y el costo de inacción.",
    "heroDescEn": "Actuarial evidence for the <strong>Plurinational Legislative Assembly, Ministry of Economy, and Departmental Autonomous Governments</strong> on AIDA Strategy execution and the cost of inaction.",
    "heroDescQu": "Asamblea Legislativa Plurinacional, Ministerio de Economía wan Gobiernos Departamentales nisqapaq qillqa <strong>AIDA estrategiamanta</strong> wan mana ruraypa chinkachiyninmanta.",
    "metrics": [
      {
        "val": "48 / 1,000",
        "lbl": "Tasa Fecundidad 15-19 (EDSA 2023)",
        "lblEn": "Fertility Rate 15-19 (EDSA 2023)",
        "lblQu": "Sipaskunapa Chichuynin (EDSA 2023)"
      },
      {
        "val": "USD 373M",
        "lbl": "Costo Inacción Anual (0.91% PIB)",
        "lblEn": "Annual Inaction Cost (0.91% GDP)",
        "lblQu": "Sapa Wata Chinkachiy (0.91% PIB)"
      },
      {
        "val": "247 Centros",
        "lbl": "Servicios AIDA Certificados en Bolivia",
        "lblEn": "Certified AIDA Youth Centers",
        "lblQu": "AIDA Certificado Hampina Wasikuna"
      },
      {
        "val": "109 / 1,000",
        "lbl": "Fecundidad en Área Rural (1.87x Urbana)",
        "lblEn": "Rural Fertility (1.87x Urban)",
        "lblQu": "Puna / Campopi Fecundidad (1.87x)"
      }
    ],
    "cards": {
      "c1": {
        "tag": "DISPARIDAD RURAL E INDÍGENA",
        "title": "Brecha Territorial Rural (109 vs 58 por 1,000)",
        "desc": "La fecundidad adolescente rural en Bolivia es 1.87 veces mayor que la urbana. En Pando (32.4%) y Beni (23.9%) se concentran las mayores proporciones de adolescentes alguna vez embarazadas."
      },
      "c2": {
        "tag": "DÉFICIT DE MÉTODOS MODERNOS",
        "title": "Cobertura Crítica de LARCs (0.92%)",
        "desc": "El acceso a implantes subdérmicos de larga duración en adolescentes es de solo 0.92%. El SUS (Ley 1152) debe garantizar abastecimiento ininterrumpido en el primer nivel."
      },
      "c3": {
        "tag": "BRECHA SALARIAL Y PRODUCTIVA",
        "title": "Pérdida de 28.1% en Ingresos Laborales",
        "desc": "Las mujeres que fueron madres en la adolescencia ganan 28.1% menos a lo largo de su vida. El 86.7% se queda estancada en educación básica o secundaria sin acceso a educación superior."
      }
    },
    "roi": {
      "roi1": {
        "title": "Costo Socioeconómico de la Inacción: USD 373.3 Millones",
        "desc": "Representa el 0.91% del PIB de Bolivia (USD 373.3M anuales). El costo de oportunidad en ingresos laborales asciende a USD 322.3M y en educación a USD 153.7M."
      },
      "roi2": {
        "title": "Gasto en Salud y Renuncia Fiscal del Estado: USD 43.1M",
        "desc": "El Estado boliviano gasta USD 26.5M en atención asistencial obstétrica y deja de percibir USD 16.6M en impuestos (IVA y Renta) por menor inserción laboral."
      }
    },
    "laws": {
      "l1": {
        "tag": "ESTRATEGIA NACIONAL DE SALUD",
        "title": "Estrategia AIDA (Ley N° 1152 SUS)",
        "desc": "Atención Integral del Adolescente gratuita en el Sistema Único de Salud, con servicios diferenciados y confidenciales."
      },
      "l2": {
        "tag": "CÓDIGO DE PROTECCIÓN",
        "title": "Ley N° 548 (Código Niña, Niño y Adolescente)",
        "desc": "Establece el derecho inalienable a la salud, educación integral y desarrollo armónico de las niñas y adolescentes."
      },
      "l3": {
        "tag": "DESPENALIZACIÓN Y JUSTICIA",
        "title": "Sentencia Constitucional 206/2014 & Ley 348",
        "desc": "Elimina la autorización judicial previa para el aborto legal en casos de violación y sanciona toda forma de violencia de género."
      }
    },
    "explorerTitle": "6. Explorador Informativo de Indicadores por Departamentos de Bolivia",
    "explorerSubtitle": "Tasas de fecundidad, cobertura de servicios AIDA y costo de inacción territorial.",
    "regions": {
      "Pando": {
        "label": "Pando (Amazonía Norte)",
        "fertility": "32.4% Alguna vez embarazada",
        "fertilityVal": 32.4,
        "fertilityPct": 95,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Extremo",
        "coverage": "18% Cobertura AIDA",
        "coverageVal": 18,
        "coverageGap": 82,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Crítica (82%)",
        "inactionCost": "USD 22 Millones/año",
        "inactionVal": 22,
        "inactionScale": 60,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 22 M/año (Mayor tasa relativa nacional)",
        "priority": "Implementación urgente del Plan Subnacional de Prevención en Pando y despliegue de brigadas fluviales de salud sexual."
      },
      "Beni": {
        "label": "Beni (Llanos / Amazonía)",
        "fertility": "23.9% Alguna vez embarazada",
        "fertilityVal": 23.9,
        "fertilityPct": 80,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Extremo",
        "coverage": "22% Cobertura AIDA",
        "coverageVal": 22,
        "coverageGap": 78,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Severa (78%)",
        "inactionCost": "USD 35 Millones/año",
        "inactionVal": 35,
        "inactionScale": 70,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 35 M/año (Alta dispersión rural)",
        "priority": "Focalización en comunidades indígenas y rurales, prevención de uniones forzadas y suministro permanente de métodos LARC."
      },
      "Tarija": {
        "label": "Tarija (Sur)",
        "fertility": "18.4% Alguna vez embarazada",
        "fertilityVal": 18.4,
        "fertilityPct": 62,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Muy Alto",
        "coverage": "32% Cobertura AIDA",
        "coverageVal": 32,
        "coverageGap": 68,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Alta (68%)",
        "inactionCost": "USD 40 Millones/año",
        "inactionVal": 40,
        "inactionScale": 75,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 40 M/año (Tendencia al alza)",
        "priority": "Atención prioritaria ante el incremento histórico de embarazos y fortalecimiento de consejería en centros de salud de primer nivel."
      },
      "Potosi": {
        "label": "Potosí (Altiplano Sur)",
        "fertility": "17.9% Alguna vez embarazada",
        "fertilityVal": 17.9,
        "fertilityPct": 60,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Muy Alto",
        "coverage": "26% Cobertura AIDA",
        "coverageVal": 26,
        "coverageGap": 74,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Severa (74%)",
        "inactionCost": "USD 38 Millones/año",
        "inactionVal": 38,
        "inactionScale": 72,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 38 M/año (Zona rural andina)",
        "priority": "Educación sexual en Quechua, prevención de violencia intrafamiliar y reducción de barreras de acceso geográfico."
      },
      "SantaCruz": {
        "label": "Santa Cruz (Oriente)",
        "fertility": "16.9% Alguna vez embarazada",
        "fertilityVal": 16.9,
        "fertilityPct": 56,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-amber-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Alto",
        "coverage": "45% Cobertura AIDA",
        "coverageVal": 45,
        "coverageGap": 55,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Moderada (55%)",
        "inactionCost": "USD 120 Millones/año",
        "inactionVal": 120,
        "inactionScale": 100,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 120 M/año (Mayor volumen absoluto)",
        "priority": "Expansión de centros AIDA en distritos periurbanos de Santa Cruz de la Sierra y programas de retención escolar."
      },
      "LaPaz": {
        "label": "La Paz (Sede de Gobierno / Altiplano)",
        "fertility": "14.2% Alguna vez embarazada",
        "fertilityVal": 14.2,
        "fertilityPct": 48,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-yellow-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Moderado",
        "coverage": "49% Cobertura AIDA",
        "coverageVal": 49,
        "coverageGap": 51,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Urbana (51%)",
        "inactionCost": "USD 95 Millones/año",
        "inactionVal": 95,
        "inactionScale": 85,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 95 M/año (Focalización El Alto)",
        "priority": "Refuerzo del programa municipal de salud sexual en El Alto y fortalecimiento de la cátedra de EIS en escuelas públicas."
      }
    },
    "manifestoTitle": "7. Manifiesto Legislativo y Agenda de Política Pública para Bolivia (5 Puntos)",
    "cardsEn": {
      "c1": {
        "tag": "CRITICAL URGENCY",
        "title": "Pregnancy in Girls Under 15: Sexual Violence",
        "desc": "100% of pregnancies in children under 15 are statutory rape. Inaction perpetuates cycles of impunity and structural vulnerability."
      },
      "c2": {
        "tag": "SOCIAL IMPACT",
        "title": "Early Fertility and Compounded Opportunity Loss",
        "desc": "Early motherhood severely cuts lifetime earnings and truncates educational progression across generations."
      },
      "c3": {
        "tag": "HEALTH BARRIER",
        "title": "Gaps in Modern Contraceptive Delivery and LARCs",
        "desc": "Inconsistent availability of Long-Acting Reversible Contraceptives (implants, IUDs) in primary care clinics."
      }
    },
    "roiEn": {
      "roi1": {
        "title": "Loss Due to Inaction",
        "desc": "Aggregate lifetime economic burden in public health, school dropout, and forfeited labor income."
      },
      "roi2": {
        "title": "Return on Investment (ROI)",
        "desc": "For every $1 invested in adolescent pregnancy prevention, between $4.80 and $11.00 is returned."
      }
    },
    "lawsEn": {
      "l1": {
        "tag": "BINDING",
        "title": "Andean Plan PLANEA 2025-2030 Mandate",
        "desc": "Zero Tolerance commitments and fertility rate reduction targets by 2030."
      },
      "l2": {
        "tag": "CONSTITUTIONAL",
        "title": "Guarantee of Rights and Comprehensive Health",
        "desc": "Universal access to contraceptives and sexual violence response without discrimination."
      },
      "l3": {
        "tag": "FISCAL",
        "title": "Ring-Fenced Budget Allocation",
        "desc": "Protected and tagged resources for youth-friendly clinics and community prevention."
      }
    },
    "explorerTitleEn": "6. Territorial Indicators Explorer of Bolivia",
    "explorerSubtitleEn": "Territorialized diagnosis of fertility rates, clinic accreditation, and cost of inaction.",
    "manifestoTitleEn": "7. Legislative Manifesto and Public Policy Agenda for Bolivia (5 Points)",
    "manifestoItemsEn": [
      "1. Ring-fenced budget allocation in the Annual Budget Law for child and adolescent pregnancy prevention.",
      "2. Binding intersectoral Zero Tolerance protocol in girls under 15 and immediate response to sexual violence.",
      "3. Universal and barrier-free access to Long-Acting Reversible Contraceptives (LARCs) across all primary healthcare clinics.",
      "4. Mandatory implementation of Comprehensive Sexuality Education (CSE) with intercultural and gender-sensitive approaches.",
      "5. Accountability and oversight mechanism led by the National Ombudsperson Office and civil society organizations."
    ],
    "manifestoItems": [
      "1. Asignación presupuestaria garantizada para la Estrategia AIDA en el Presupuesto General del Estado.",
      "2. Expansión del acceso universal a métodos anticonceptivos modernos (LARCs) en el Sistema Único de Salud (SUS).",
      "3. Implementación obligatoria de Educación Integral de la Sexualidad (EIS) en lenguas originarias (Quechua, Aymara, Guaraní).",
      "4. Planes subnacionales intersectoriales en Gobiernos Autónomos Departamentales (prioridad Pando, Beni y Tarija).",
      "5. Cumplimiento estricto de la Sentencia Constitucional 206/2014 en servicios de salud para víctimas de violencia sexual."
    ],
    "sources": [
      {
        "id": "REF-PLANEA-2025",
        "tag": "ORAS-CONHU",
        "year": "2024",
        "title": "Plan Andino (PLANEA 2025-2030)",
        "desc": "Matriz multisectorial de metas andinas para la prevención del embarazo adolescente en los 6 países miembros."
      },
      {
        "id": "REF-MILENA-BO",
        "tag": "UNFPA BOLIVIA",
        "year": "2022",
        "title": "Estudio MILENA 1.0 Bolivia",
        "desc": "Consecuencias socioeconómicas del embarazo adolescente en Bolivia. Cuantifica la pérdida de USD 373.3M anuales (0.91% PIB)."
      },
      {
        "id": "REF-EDSA-2023",
        "tag": "INE BOLIVIA",
        "year": "2023",
        "title": "Encuesta de Demografía y Salud (EDSA)",
        "desc": "Fuente oficial de tasas de fecundidad por departamentos, brecha rural-urbana y cobertura de salud reproductiva."
      },
      {
        "id": "REF-AIDA-MSD",
        "tag": "MIN. SALUD Y DEPORTES",
        "year": "2024",
        "title": "Estrategia AIDA (2021-2025)",
        "desc": "Documento rector de la Atención Integral del Adolescente y certificación de 247 centros de salud amigables en Bolivia."
      },
      {
        "id": "REF-LEY-548-BO",
        "tag": "ASAMBLEA LEGISLATIVA",
        "year": "Ley N° 548",
        "title": "Código Niña, Niño y Adolescente",
        "desc": "Marco de protección integral de los derechos de la niñez y garantías de salud sexual y reproductiva."
      },
      {
        "id": "REF-SCP-206-2014",
        "tag": "TRIBUNAL CONSTITUCIONAL",
        "year": "SCP 206/2014",
        "title": "Sentencia Constitucional 206/2014 & Ley 348",
        "desc": "Despenalización del aborto legal sin autorización judicial en casos de violación y Ley Integral contra la Violencia hacia las Mujeres."
      }
    ],
    "heroDescAy": "Asamblea Legislativa Plurinacional, Ministerio de Economía wan Gobiernos Departamentales ukanakatak qillqa <strong>AIDA estrategiamanta</strong> wan jan lurawina chhaqawipata.",
    "heroDescGn": "Tetã Aty Amandaje, Ministerio de Economía ha Tetãvore Sambyhyhárape g̃uarã marandu <strong>AIDA estrategia</strong> ha viru kañy rehegua.",
    "heroDescArn": "Asamblea Plurinacional, Min. Economía ka Gobiernos Departamentales mew kisu kimün <strong>AIDA dungu</strong> mew ka kulliñ kuñiwtun.",
    "heroDescQvi": "Asamblea Legislativa, Min. Economía wan GADkuna nisqapaq killka <strong>AIDA yachaymanta</strong>.",
    "heroDescGuc": "Apalirawaa Asamblea, Min. Economía je Departamentos süpüla <strong>AIDA akaliojiraa</strong>.",
    "heroDescWra": "Goberno Asamblea, Min. Economía aribo <strong>AIDA aribo</strong> obonoba.",
    "heroDescPmn": "Asamblea, Min. Economía mai <strong>AIDA mai</strong> kure pe.",
    "heroDescPbb": "Asamblea, Min. Economía yu'çeçx <strong>AIDA thegnikha's</strong>.",
    "heroDescEmp": "Asamblea, Min. Economía bedéa <strong>AIDA druade</strong>.",
    "heroDescAsh": "Asamblea, Min. Economía ñañantsi <strong>AIDA kametsari</strong>.",
    "heroDescAgr": "Asamblea, Min. Economía chicham <strong>AIDA pegker pujustinme</strong>.",
    "heroDescJiv": "Asamblea, Min. Economía chicham <strong>AIDA penker pujustin</strong>.",
    "heroDescRap": "Puka haka tere no te Asamblea Plurinacional, Min. Economía 'e Gobiernos mo te <strong>AIDA 'ite</strong>.",
    "siteTitleAy": "Suyu Kamachi Qhawawi: Imillanaka Usuriptawi Jark'aqaña Bolivia Suyuna",
    "siteTitleGn": "Tetã Rerekua Qhawana: Mitãkuña Usuriptawi Jark'aqaña Bolivia-pe",
    "manifestoTitleQu": "7. Kamachiy Qillqa wan Política Pública Agenda Bolivia Suyupaq (5 Puntos)",
    "manifestoItemsQu": [
      "1. Ley de Presupuesto Anual nisqapi wawa chichuy hark'anapaq qullqi t'aqayta takyachiy.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia kamachiy wan maqanakuyta utqaylla hark'ay.",
      "3. LARC unaypaq hampiyninkunata sapa postapi mana qullqillawan qoy.",
      "4. Educación Sexual Integral (ESI) yachachiyta intercultural wan runasimipi hunt'achiy.",
      "5. Defensoría del Pueblo wan ayllukunawan kuska qillqata qhaway wan hunt'achiy."
    ],
    "cardsQu": {
      "c1": {
        "tag": "ANCHA HATUN LLAKI",
        "title": "15 Watamanta Uray Sipaskunapi Chichuy: Maqanakuy",
        "desc": "15 watamanta uray wawakunapi chichuyqa violación qallariyniyuqmi. Mana allichasqaqa llakitam mirachin."
      },
      "c2": {
        "tag": "AYLLUPI CHINKAY",
        "title": "Wawa Kaspa Chichuy wan Yachay Chinkachiy",
        "desc": "Wawallaraq wawayuq kayqa yachaykunata qulluchin wan kawsay qullqita anchata pisiyachin."
      },
      "c3": {
        "tag": "HAMPI WASI PISIY",
        "title": "LARC wan Moderno Hampikuna Mana Aypay",
        "desc": "Postakunapi wan ayllu hampiwesikunapi implante wan DIU mana aypanchu."
      }
    },
    "roiQu": {
      "roi1": {
        "title": "Mana Ruraypa Chinkachiynin",
        "desc": "Hampi wasi gastokuna, yachay saqiy wan qullqi mana chaskisqakuna."
      },
      "roi2": {
        "title": "Qullqi Kutimuynin (ROI)",
        "desc": "Sapa $1 churamusqamanta, $4.80 - $11.00 kutimun ayllupaq wan suyupaq."
      }
    },
    "lawsQu": {
      "l1": {
        "tag": "KAMACHIY",
        "title": "Plan Andino PLANEA 2025-2030 Kamachiy",
        "desc": "Cero Tolerancia wan fecundidad pisiyachiy 2030 watapaq."
      },
      "l2": {
        "tag": "HATUN KAMACHIY",
        "title": "Derechos wan Allin Kawsay Amachay",
        "desc": "Tukuy runapaq LARC hampikuna wan maqanakuy hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHIY",
        "title": "Qullqi T'aqay Takyachiy",
        "desc": "Ayllu postakunapaq qullqi waqaychasqa."
      }
    },
    "manifestoTitleAy": "7. Suyu Kamachi Qillqa wan Políticas Públicas Bolivia Suyutaki (5 Puntos)",
    "manifestoItemsAy": [
      "1. Ley de Presupuesto Anual ukan sapürunjama qullqi t'aqawi imillanaka usuriptawi jark'aqañataki.",
      "2. 15 marat jisk'anakan Cero Tolerancia protocolos wan jank'aki qullayawi comisaríanakana.",
      "3. LARC unay qullañanaka taqi qullañ utanakana inaki churaña.",
      "4. Educación Sexual Integral (ESI) yatichawi intercultural wan aymar aruna phuqhaña.",
      "5. Defensoría del Pueblo yanapirinakampi qhawawi wan amachawi luraña."
    ],
    "cardsAy": {
      "c1": {
        "tag": "SINTIPUNI AXSARAWI",
        "title": "15 Marat Jisk'anakan Usuriptawi: Nuwasiña",
        "desc": "15 marat jisk'anakan usuriptawipax nuwasiñat jutiriwa. Jan askichatax jach'a llakiwa."
      },
      "c2": {
        "tag": "JAQI CHHAQAWI",
        "title": "Nayra Usuriptawi wan Yatichawi Chhaqawi",
        "desc": "Imillanaka usuriptawipax yatichawi qulluchiwa wan jakawi qullqi pisiyaptayi."
      },
      "c3": {
        "tag": "QULLAÑA UTAN PISI",
        "title": "LARC wan Moderno Qullanaka Jan Aypawi",
        "desc": "Qullañ utanakana implante wan DIU qullanakax janiw aypkiti."
      }
    },
    "roiAy": {
      "roi1": {
        "title": "Jan Lurawina Chhaqawipa",
        "desc": "Qullañ uta gastonaka, yatichawi jaytawi wan qullqi jan jikxatatanaka."
      },
      "roi2": {
        "title": "Qullqi Kutt'awi (ROI)",
        "desc": "Sapa $1 churatanakampi, $4.80 - $11.00 kutt'ani suyunakataki."
      }
    },
    "lawsAy": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan usuriptawi jisk'aptayaña 2030 marataki."
      },
      "l2": {
        "tag": "JACH'A KAMACHI",
        "title": "Derechos wan Qullañ Amachawi",
        "desc": "Taqinitak LARC qullanaka wan nuwasiña jark'aqaña."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'aqawi Imxatata",
        "desc": "Qullañ utanakataki qullqi amachatapuni."
      }
    },
    "manifestoTitleGn": "7. Tetã Rerekua Kuatia ha Políticas Públicas Bolivia-pe g̃uarã (5 Puntos)",
    "manifestoItemsGn": [
      "1. Viru mohenda Ley de Presupuesto Anual-pe mitãkuña usuriptawi jark'aqa hag̃ua.",
      "2. Cero Tolerancia protocols 15 ary guýpe ha ñangareko pya'e violencia sexual rehe.",
      "3. LARC pohã ñeme'ẽ opavave tasyo ha puesto de salud rupive.",
      "4. Educación Sexual Integral (ESI) mbo'epy hekopete guaraníme ha castellánope.",
      "5. Defensoría del Pueblo ha tetãygua aty ñemongeta ha jehechajey."
    ],
    "cardsGn": {
      "c1": {
        "tag": "KYHYJE GUASU",
        "title": "Mitãkuña 15 Ary Guýpe Usuriptawi: Ñerairõ",
        "desc": "100% mitãkuña 15 ary guýpe hyeguáva oñembotavy rupi. Tekotevẽ ñangareko pya'e."
      },
      "c2": {
        "tag": "TEKO KAÑY",
        "title": "Mitãkuña Memby ha Tekoasy",
        "desc": "Mitãkuña memby ogueru tekoasy ha ombopaha mbo'epy heñóva."
      },
      "c3": {
        "tag": "TASYÓPE KAÑY",
        "title": "LARC ha Anticonceptivos Pokã",
        "desc": "Tasyo michĩvape ndaipóri implante ha DIU mitãkuñáme g̃uarã."
      }
    },
    "roiGn": {
      "roi1": {
        "title": "Viru Kañy",
        "desc": "Tasyo gasto, mbo'epy jejayei ha viru ndohupytýiva."
      },
      "roi2": {
        "title": "Viru Jehevy (ROI)",
        "desc": "Peteĩ $1 emoĩvape g̃uarã, $4.80 - $11.00 ojevy tetãme."
      }
    },
    "lawsGn": {
      "l1": {
        "tag": "TEKO ME'Ẽ",
        "title": "Plan Andino PLANEA 2025-2030 Teko",
        "desc": "Cero Tolerancia ha fecundidad guejy 2030 arype."
      },
      "l2": {
        "tag": "TETÃ ME'Ẽ",
        "title": "Derécho ha Tesãi Ñangareko",
        "desc": "LARC pohã opavavépe ha ñerairõ jark'a."
      },
      "l3": {
        "tag": "VIRU ME'Ẽ",
        "title": "Viru Mohenda Ñangareko",
        "desc": "Tasyo michĩvape viru oñemohendáva."
      }
    },
    "manifestoTitleArn": "7. Ngülamtun Politica Dungu Agenda Bolivia Mew (5 Puntos)",
    "manifestoItemsArn": [
      "1. Kisu Presupuesto Ley de Presupuesto Anual mew wechekeche koñin kuñiwtual.",
      "2. Cero Tolerancia protocolos 15 tripantu pichikeche kuñiwtual kom posta mew.",
      "3. LARC kuñiwtun lawen kom pu centro de salud mew nieal.",
      "4. Educación Sexual Integral (ESI) küme kimün kom chillkatuwe mapudungun mew.",
      "5. Defensoría del Pueblo ka lof che mew kisu kuñiwtun dungu."
    ],
    "cardsArn": {
      "c1": {
        "tag": "AÑKEN DUNGU",
        "title": "15 Tripantu Pichikeche Koñin: Weda Dungu",
        "desc": "Kom 15 tripantu pichikeche koñin niey weda dungu mew. Kuñiwtual tañi mongen."
      },
      "c2": {
        "tag": "MAPU MEW KAÑY",
        "title": "Wechekeche Koñin ka Kimün Ngelay",
        "desc": "Wechekeche koñin niey mew fey kimün ngelay ka kulliñ pisiyachi."
      },
      "c3": {
        "tag": "LAWENTUWE PISI",
        "title": "LARC ka Küme Lawen Ngelay",
        "desc": "Posta mew implante ka DIU ngelay wechekeche domo mew."
      }
    },
    "roiArn": {
      "roi1": {
        "title": "Kisu Femnon Mew Kulliñ",
        "desc": "Lawentuwe gasto, chillkatuwe ngelay ka kulliñ kañy."
      },
      "roi2": {
        "title": "Kulliñ Wiñol (ROI)",
        "desc": "Fill $1 kulliñ mew, $4.80 - $11.00 wiñoy mapu mew."
      }
    },
    "lawsArn": {
      "l1": {
        "tag": "NGÜLAM",
        "title": "Plan Andino PLANEA 2025-2030 Ngülam",
        "desc": "Cero Tolerancia ka wechekeche koñin ngelay 2030 tripantu mew."
      },
      "l2": {
        "tag": "FÜTRA NGÜLAM",
        "title": "Derechos ka Küme Mongen",
        "desc": "Kom che mew LARC lawen ka weda dungu kuñiwtun."
      },
      "l3": {
        "tag": "KULLIÑ NGÜLAM",
        "title": "Kulliñ Kuñiwtun",
        "desc": "Posta mew kulliñ kuñiwtual."
      }
    },
    "manifestoTitleQvi": "7. Llaktapa Kamachi Killka Agenda Bolivia Llaktapi (5 Puntos)",
    "manifestoItemsQvi": [
      "1. Ley de Presupuesto ukupi wawa chichuy hark'ankapak qullqi t'akayta sinyachina.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia protocolos wan utka yanapana.",
      "3. LARC unaypa hampikunata tukuy hampiwasi ukupi llukshichina.",
      "4. Educación Sexual Integral (ESI) yachana wasikunapi kichwapi paktachina.",
      "5. Defensoría del Pueblo wan llaktakunawan kuska killkata rikuriy."
    ],
    "cardsQvi": {
      "c1": {
        "tag": "YAPA JATUN LLAKI",
        "title": "15 Watamanta Uray Wawa Chichuy: Llaki",
        "desc": "15 watamanta uray wawakunapi chichuyqa llakiyuqmi. Mana allichaspaqa llakitami mirachin."
      },
      "c2": {
        "tag": "LLAKTA PISI",
        "title": "Wawa Chichuy wan Yachay Chinkay",
        "desc": "Wawa chichuyka yachayta pishiyachin wan kawsayta llakichin."
      },
      "c3": {
        "tag": "HAMPIWASI PISI",
        "title": "LARC wan Hampikuna Mana Tiyay",
        "desc": "Hampiwasi ukupi implante wan DIU mana aypanchu."
      }
    },
    "roiQvi": {
      "roi1": {
        "title": "Mana Ruraypa Chinkaynin",
        "desc": "Hampiwasi gastokuna, yachay sakiy wan kawsay qullqi pisi."
      },
      "roi2": {
        "title": "Qullqi Kutiy (ROI)",
        "desc": "Sapa $1 churashkamanta, $4.80 - $11.00 kutin llaktapaq."
      }
    },
    "lawsQvi": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan wawa chichuy pisi 2030 watapak."
      },
      "l2": {
        "tag": "JATUN KAMACHI",
        "title": "Derechos wan Alli Kawsay",
        "desc": "Tukuykunapak LARC hampikuna wan llaki hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'akay",
        "desc": "Hampiwasi ukupi qullqi charina."
      }
    },
    "manifestoTitleGuc": "7. Apalirawaa Politica Agenda Bolivia (5 Puntos)",
    "manifestoItemsGuc": [
      "1. Walawaa presupuestal süpüla jintüi asitnushii katataaka Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos süpüla 15 juyamüin jintüin je anaa.",
      "3. LARC anticonceptivos tü taashii süpüla mmapa'a.",
      "4. Educación Sexual Integral (ESI) wayuunaikiru'u ekirajaapülee.",
      "5. Defensoría del Pueblo je wayuu akaliojiraa."
    ],
    "cardsGuc": {
      "c1": {
        "tag": "MÜLIAA MÜSIA",
        "title": "15 Juyamüin Jintüi Asitnushii: Müliaa",
        "desc": "15 juyamüin jintüin asitnushii katataaka. Cho'ujaasü akaliojiraa süpüla anaa."
      },
      "c2": {
        "tag": "MMAPA'A PISI",
        "title": "Jintüi Katataaka je Ekirajaapülee Chinkay",
        "desc": "Jintüi asitnushii ekirajaapülee chinkachi."
      },
      "c3": {
        "tag": "ANAA AYATAWAA",
        "title": "LARC je Anticonceptivos Pokã",
        "desc": "Posta je centro de salud nojotshi implante süpüla jintüi."
      }
    },
    "roiGuc": {
      "roi1": {
        "title": "Walawaa Chinkay",
        "desc": "Centro de salud gasto, ekirajaapülee chinkay."
      },
      "roi2": {
        "title": "Walawaa Anaa (ROI)",
        "desc": "Süpüla $1 walawaa, $4.80 - $11.00 anaa mmapa'a."
      }
    },
    "lawsGuc": {
      "l1": {
        "tag": "PÜTCHI",
        "title": "Plan Andino PLANEA 2025-2030 Pütchi",
        "desc": "Cero Tolerancia je jintüi asitnushii katataaka 2030."
      },
      "l2": {
        "tag": "ANAA PÜTCHI",
        "title": "Derechos je Anaa",
        "desc": "Mmapa'a LARC anticonceptivos je müliaa jark'a."
      },
      "l3": {
        "tag": "WALAWA PÜTCHI",
        "title": "Walawaa Presupuesto",
        "desc": "Posta walawaa anaa."
      }
    },
    "manifestoTitleWra": "7. Obonoba Politica Agenda Bolivia (5 Puntos)",
    "manifestoItemsWra": [
      "1. Presupuesto aribo iboma asidaja obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata sanuka iboma.",
      "3. LARC anticonceptivos kokotune hanoko.",
      "4. Educación Sexual Integral (ESI) warao aribo eskuela.",
      "5. Defensoría aribo nomewitu sanuka."
    ],
    "cardsWra": {
      "c1": {
        "tag": "OBONOBA SANUKA",
        "title": "15 Wata Sanuka Iboma Asidaja: Obonoba",
        "desc": "15 wata sanuka iboma asidaja obonoba nomewitu."
      },
      "c2": {
        "tag": "ARIBO SANUKA",
        "title": "Iboma Asidaja eskuela obonoba",
        "desc": "Iboma asidaja eskuela chinkachi."
      },
      "c3": {
        "tag": "HANOKO PISI",
        "title": "LARC Anticonceptivos Hanoko",
        "desc": "Hanoko sanuka implante nojotshi."
      }
    },
    "roiWra": {
      "roi1": {
        "title": "Obonoba Aribo Chinkay",
        "desc": "Hanoko gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Aribo Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa hanoko."
      }
    },
    "lawsWra": {
      "l1": {
        "tag": "ARIBO",
        "title": "Plan Andino PLANEA 2025-2030 Aribo",
        "desc": "Cero Tolerancia iboma asidaja 2030."
      },
      "l2": {
        "tag": "NOMIEWITU",
        "title": "Derechos je Hanoko",
        "desc": "LARC anticonceptivos hanoko kokotune."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Hanoko",
        "desc": "Hanoko sanuka aribo."
      }
    },
    "manifestoTitlePmn": "7. Politica Mai Agenda Bolivia (5 Puntos)",
    "manifestoItemsPmn": [
      "1. Presupuesto mai murekon pimanse obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata murekon mai.",
      "3. LARC anticonceptivos kokotune pata'pï iwe.",
      "4. Educación Sexual Integral (ESI) pemón mai eskuela.",
      "5. Defensoría mai nomewitu murekon."
    ],
    "cardsPmn": {
      "c1": {
        "tag": "PATA'PÏ MAI",
        "title": "15 Wata Murekon Pimanse: Pata'pï",
        "desc": "15 wata murekon pimanse pata'pï mai."
      },
      "c2": {
        "tag": "MAI PITI",
        "title": "Murekon Pimanse eskuela mai",
        "desc": "Murekon pimanse eskuela chinkachi."
      },
      "c3": {
        "tag": "IWE PISI",
        "title": "LARC Anticonceptivos Iwe",
        "desc": "Pata'pï iwe implante nojotshi."
      }
    },
    "roiPmn": {
      "roi1": {
        "title": "Mai Piti Chinkay",
        "desc": "Pata'pï iwe gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Mai Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa iwe."
      }
    },
    "lawsPmn": {
      "l1": {
        "tag": "MAI",
        "title": "Plan Andino PLANEA 2025-2030 Mai",
        "desc": "Cero Tolerancia murekon pimanse 2030."
      },
      "l2": {
        "tag": "PATA'PÏ",
        "title": "Derechos je Iwe",
        "desc": "LARC anticonceptivos pata'pï iwe."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Iwe",
        "desc": "Pata'pï iwe mai."
      }
    },
    "manifestoTitlePbb": "7. Yu'çeçx Politica Agenda Bolivia (5 Puntos)",
    "manifestoItemsPbb": [
      "1. Presupuesto nxusxi ku'j we'sx thegnikha's Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 vxite' ku'j we'sx.",
      "3. LARC yu'çeçx taashii ta'çxhab.",
      "4. Educación Sexual Integral (ESI) nasa yuwete ekirajaapülee.",
      "5. Defensoría del Pueblo thegnikha's."
    ],
    "cardsPbb": {
      "c1": {
        "tag": "KU'J WE'SX",
        "title": "15 Vxite' Ku'j Thegnikha's: Ku'j",
        "desc": "15 vxite' ku'j we'sx thegnikha's."
      },
      "c2": {
        "tag": "ÇXHAB PISI",
        "title": "Ku'j Thegnikha's eskuela çxhab",
        "desc": "Ku'j we'sx eskuela chinkachi."
      },
      "c3": {
        "tag": "YAÇK PISI",
        "title": "LARC Yu'çeçx Yaçk",
        "desc": "Yaçk taashii implante nojotshi."
      }
    },
    "roiPbb": {
      "roi1": {
        "title": "Ku'j We'sx Chinkay",
        "desc": "Yaçk gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Ku'j Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa çxhab."
      }
    },
    "lawsPbb": {
      "l1": {
        "tag": "YU'ÇEÇX",
        "title": "Plan Andino PLANEA 2025-2030 Yu'çeçx",
        "desc": "Cero Tolerancia ku'j we'sx 2030."
      },
      "l2": {
        "tag": "ÇXHAB",
        "title": "Derechos je Yaçk",
        "desc": "LARC yu'çeçx taashii ta'çxhab."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Çxhab",
        "desc": "Çxhab yaçk yu'çeçx."
      }
    },
    "manifestoTitleEmp": "7. Bedéa Politica Agenda Bolivia (5 Puntos)",
    "manifestoItemsEmp": [
      "1. Presupuesto druade wẽra warrade Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 warrarãde wẽra.",
      "3. LARC anticonceptivos druade droma.",
      "4. Educación Sexual Integral (ESI) emberá bedéade eskuela.",
      "5. Defensoría del Pueblo druade bia."
    ],
    "cardsEmp": {
      "c1": {
        "tag": "KHARRA DRUADE",
        "title": "15 Warrarãde Wẽra: Kharra",
        "desc": "15 warrarãde wẽra kharra druade."
      },
      "c2": {
        "tag": "DRUA PISI",
        "title": "Wẽra Warrarã eskuela drua",
        "desc": "Wẽra warrarã eskuela chinkachi."
      },
      "c3": {
        "tag": "DROMA PISI",
        "title": "LARC Anticonceptivos Droma",
        "desc": "Droma implante nojotshi."
      }
    },
    "roiEmp": {
      "roi1": {
        "title": "Drua Bedéa Chinkay",
        "desc": "Droma gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Drua Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa drua."
      }
    },
    "lawsEmp": {
      "l1": {
        "tag": "BEDÉA",
        "title": "Plan Andino PLANEA 2025-2030 Bedéa",
        "desc": "Cero Tolerancia wẽra warrade 2030."
      },
      "l2": {
        "tag": "DRUA",
        "title": "Derechos je Droma",
        "desc": "LARC anticonceptivos druade droma."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Drua",
        "desc": "Druade droma bedéa."
      }
    },
    "manifestoTitleAsh": "7. Kametsari Politica Agenda Bolivia (5 Puntos)",
    "manifestoItemsAsh": [
      "1. Presupuesto pankotsi eentsite kametsari Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 osarentsi eentsite.",
      "3. LARC anticonceptivos pankotsi maaroni.",
      "4. Educación Sexual Integral (ESI) asháninka ñañantsi eskuela.",
      "5. Defensoría del Pueblo eentsite kametsa."
    ],
    "cardsAsh": {
      "c1": {
        "tag": "KAMETSARIÑA",
        "title": "15 Osarentsi Eentsite: Kametsa",
        "desc": "15 osarentsi eentsite kametsariña."
      },
      "c2": {
        "tag": "PANKOTSI PISI",
        "title": "Eentsite eskuela pankotsi",
        "desc": "Eentsite eskuela chinkachi."
      },
      "c3": {
        "tag": "PANKOTSI PISI",
        "title": "LARC Anticonceptivos Pankotsi",
        "desc": "Pankotsi implante nojotshi."
      }
    },
    "roiAsh": {
      "roi1": {
        "title": "Pankotsi Kametsa Chinkay",
        "desc": "Pankotsi gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Pankotsi Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa pankotsi."
      }
    },
    "lawsAsh": {
      "l1": {
        "tag": "ÑAÑANTSI",
        "title": "Plan Andino PLANEA 2025-2030 Ñañantsi",
        "desc": "Cero Tolerancia eentsite 2030."
      },
      "l2": {
        "tag": "PANKOTSI",
        "title": "Derechos je Pankotsi",
        "desc": "LARC anticonceptivos pankotsi maaroni."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Pankotsi",
        "desc": "Pankotsi eentsite ñañantsi."
      }
    },
    "manifestoTitleAgr": "7. Datsajum Politica Agenda Bolivia (5 Puntos)",
    "manifestoItemsAgr": [
      "1. Presupuesto apu datsajum pegker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 mijan datsajum.",
      "3. LARC anticonceptivos pegker jea.",
      "4. Educación Sexual Integral (ESI) awajún chicham eskuela.",
      "5. Defensoría del Pueblo datsajum pegker."
    ],
    "cardsAgr": {
      "c1": {
        "tag": "PEGKERCHAU",
        "title": "15 Mijan Datsajum: Pegkerchau",
        "desc": "15 mijan datsajum pegkerchau."
      },
      "c2": {
        "tag": "JEA PISI",
        "title": "Datsajum eskuela jea",
        "desc": "Datsajum eskuela chinkachi."
      },
      "c3": {
        "tag": "JEA PISI",
        "title": "LARC Anticonceptivos Jea",
        "desc": "Jea implante nojotshi."
      }
    },
    "roiAgr": {
      "roi1": {
        "title": "Datsajum Pegker Chinkay",
        "desc": "Jea gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Datsajum Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa jea."
      }
    },
    "lawsAgr": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia datsajum 2030."
      },
      "l2": {
        "tag": "JEA",
        "title": "Derechos je Jea",
        "desc": "LARC anticonceptivos pegker jea."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Jea",
        "desc": "Jea datsajum chicham."
      }
    },
    "manifestoTitleJiv": "7. Natsa Politica Agenda Bolivia (5 Puntos)",
    "manifestoItemsJiv": [
      "1. Presupuesto uunt natsa penker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 uchin natsa.",
      "3. LARC anticonceptivos penker tsuwatai.",
      "4. Educación Sexual Integral (ESI) shuar chicham eskuela.",
      "5. Defensoría del Pueblo natsa penker."
    ],
    "cardsJiv": {
      "c1": {
        "tag": "PENKERCHAU",
        "title": "15 Uchin Natsa: Penkerchau",
        "desc": "15 uchin natsa penkerchau."
      },
      "c2": {
        "tag": "TSUWATAI PISI",
        "title": "Natsa eskuela tsuwatai",
        "desc": "Natsa eskuela chinkachi."
      },
      "c3": {
        "tag": "TSUWATAI PISI",
        "title": "LARC Anticonceptivos Tsuwatai",
        "desc": "Tsuwatai implante nojotshi."
      }
    },
    "roiJiv": {
      "roi1": {
        "title": "Natsa Penker Chinkay",
        "desc": "Tsuwatai gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Natsa Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa tsuwatai."
      }
    },
    "lawsJiv": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia natsa 2030."
      },
      "l2": {
        "tag": "TSUWATAI",
        "title": "Derechos je Tsuwatai",
        "desc": "LARC anticonceptivos penker tsuwatai."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Tsuwatai",
        "desc": "Tsuwatai natsa chicham."
      }
    },
    "manifestoTitleRap": "7. Vānaŋa Haka Oho Agenda mo Bolivia (5 Puntos)",
    "manifestoItemsRap": [
      "1. Moni haka tere no te poki 'āpī hapu'a kore i roto i te Ley de Presupuesto Anual.",
      "2. Cero Tolerancia protocolos mo te poki o raro i te 15 matahiti.",
      "3. LARC anticonceptivos pāruru mo te kāiŋa.",
      "4. Educación Sexual Integral (ESI) 'ite i roto i te ha'api'ira'a vananga Rapa Nui.",
      "5. Defensoría de la Niñez pāruru mo te poki kāiŋa."
    ],
    "cardsRap": {
      "c1": {
        "tag": "RARI NUI",
        "title": "15 Matahiti Poki Hapu'a: Rari",
        "desc": "15 matahiti poki hapu'a kore rari nui."
      },
      "c2": {
        "tag": "KĀIŊA PISI",
        "title": "Poki Hapu'a ha'api'ira'a kāiŋa",
        "desc": "Poki hapu'a ha'api'ira'a chinkachi."
      },
      "c3": {
        "tag": "HARE PISI",
        "title": "LARC Anticonceptivos Hare",
        "desc": "Hare implante nojotshi."
      }
    },
    "roiRap": {
      "roi1": {
        "title": "Kāiŋa Moni Kore",
        "desc": "Hare gasto, ha'api'ira'a kore."
      },
      "roi2": {
        "title": "Moni Haka Oho (ROI)",
        "desc": "Mo te $1, $4.80 - $11.00 moni hoki mai."
      }
    },
    "lawsRap": {
      "l1": {
        "tag": "VĀNAŊA",
        "title": "Plan Andino PLANEA 2025-2030 Vānaŋa",
        "desc": "Cero Tolerancia poki hapu'a kore 2030."
      },
      "l2": {
        "tag": "KĀIŊA",
        "title": "Derechos je Hare",
        "desc": "LARC anticonceptivos pāruru mo te kāiŋa."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Kāiŋa",
        "desc": "Kāiŋa hare vānaŋa."
      }
    }
  },
  "chile": {
    "name": "Chile",
    "flag": "🇨🇱",
    "flagSvg": "<svg class=\"w-5 h-3.5 rounded inline-block object-cover flex-shrink-0 align-middle\" viewBox=\"0 0 640 480\"><path fill=\"#ffffff\" d=\"M213.3 0h426.7v240H213.3z\"/><path fill=\"#D52B1E\" d=\"M0 240h640v240H0z\"/><path fill=\"#0039A6\" d=\"M0 0h213.3v240H0z\"/><polygon fill=\"#ffffff\" points=\"106.7,68 119.5,107.5 161,107.5 127.5,131.8 140.3,171.3 106.7,147 73.1,171.3 85.9,131.8 52.3,107.5 93.8,107.5\"/></svg>",
    "badge": "Sistema de Garantías • PLANEA 2025-2030 🇨🇱",
    "siteTitle": "Plataforma de Incidencia Política: Prevención del Embarazo Adolescente en Chile",
    "siteTitleEn": "Policy Advocacy Platform: Adolescent Pregnancy Prevention in Chile",
    "siteTitleQu": "Suyu Kamachiy Qhawana: Wawa Chichuy Hark'ay Chile Suyupi",
    "endorsed": [
      "MINSAL Chile",
      "ORAS-CONHU",
      "UNFPA Chile",
      "OPS/OMS"
    ],
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand-teal to-red-400'>Consolidación del Sistema de Garantías de la Niñez en Chile</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand-teal to-red-400'>Childhood Safeguard Systems in Chile</span>",
    "heroTitleQu": "Mana Ruraypa Qullqi Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand-teal to-red-400'>Wawa Amachay Sistema Chile Suyupi</span>",
    "heroDesc": "Evidencia técnica para el <strong>Congreso Nacional, Ministerio de Salud (MINSAL) y Gobiernos Regionales</strong> sobre la reducción histórica del 61.6% en fecundidad y la erradicación de disparidades territoriales.",
    "heroDescEn": "Technical policy brief for the <strong>National Congress, Ministry of Health (MINSAL), and Regional Governments</strong> on sustaining the historic 61.6% drop in fertility and eradicating territorial disparities.",
    "heroDescQu": "Congreso Nacional, MINSAL wan Gobiernos Regionales nisqapaq qillqa <strong>61.6% fecundidad pisiyachiymanta</strong> wan suyukunapi chikan kaykuna allichaymanta.",
    "metrics": [
      {
        "val": "20.1 / 1,000",
        "lbl": "Tasa Fecundidad 15-19 (Consolidado 2026)",
        "lblEn": "Adolescent Fertility Rate (2026)",
        "lblQu": "Sipaskunapa Chichuynin (2026)"
      },
      {
        "val": "-61.6%",
        "lbl": "Reducción Histórica TEFA (2015-2022)",
        "lblEn": "Historical TEFA Reduction",
        "lblQu": "Chichuy Pisiyachisqa (2015-2022)"
      },
      {
        "val": "0.47 / 1,000",
        "lbl": "Fecundidad en Menores de 15 Años",
        "lblEn": "Early Fertility under age 15",
        "lblQu": "15 Watamanta Uray Chichuy Tupa"
      },
      {
        "val": "18 Años",
        "lbl": "Prohibición Matrimonio Infantil (Ley 21.515)",
        "lblEn": "Total Ban on Child Marriage",
        "lblQu": "18 Wata Kamachiy Sawakuy Hark'ay"
      }
    ],
    "cards": {
      "c1": {
        "tag": "TRANSICIÓN Y EQUIDAD TERRITORIAL",
        "title": "Avance Nacional y Focos de Riesgo en el Norte y Aysén",
        "desc": "A pesar de la reducción del 61.6%, persisten tasas elevadas en la Macrozona Norte (Tarapacá, Antofagasta, Atacama) y en la región de Aysén, así como en comunas de alta vulnerabilidad."
      },
      "c2": {
        "tag": "AUTONOMÍA PROGRESIVA",
        "title": "Confidencialidad Médica (Circulares A15/10 y A15/11)",
        "desc": "El marco normativo autoriza a los centros de salud a entregar anticoncepción y atención a adolescentes sin requerir la presencia obligatoria de un adulto responsable."
      },
      "c3": {
        "tag": "RETENCIÓN ESCOLAR",
        "title": "Programa 'Para que Estudie Contigo'",
        "desc": "Garantiza salas cuna, apoyo económico y acompañamiento a madres adolescentes estudiantes para prevenir la deserción escolar y asegurar su ingreso a la educación técnica y superior."
      }
    },
    "roi": {
      "roi1": {
        "title": "Liderazgo en Gasto en Salud Per Cápita y Menor RMM",
        "desc": "El mayor gasto en salud per cápita de Chile en el Área Andina se traduce en la Razón de Mortalidad Materna más baja de la subregión: 19.2 defunciones por 100,000 NV."
      },
      "roi2": {
        "title": "Retorno del Sistema de Garantías (Ley N° 21.430)",
        "desc": "Invertir en prevención preconcepcional y detección temprana de violencias disminuye el costo asistencial en el sistema público y audita el exceso de cesáreas (50% actual)."
      }
    },
    "laws": {
      "l1": {
        "tag": "REGULACIÓN DE LA FERTILIDAD",
        "title": "Ley N° 20.418 & Ley N° 20.584",
        "desc": "Garantiza información, orientación y prestaciones de salud sexual con derecho a consentimiento informado y autonomía progresiva."
      },
      "l2": {
        "tag": "DESPENALIZACIÓN 3 CAUSALES",
        "title": "Ley N° 21.030",
        "desc": "Regula la interrupción voluntaria del embarazo en causales de riesgo vital, inviabilidad fetal y violación sexual."
      },
      "l3": {
        "tag": "SISTEMA DE GARANTÍAS",
        "title": "Ley N° 21.430 & Ley N° 21.515",
        "desc": "Crea el Sistema Nacional de Garantías de la Niñez y prohíbe de forma absoluta el matrimonio antes de los 18 años."
      }
    },
    "explorerTitle": "6. Explorador Informativo de Indicadores por Regiones de Chile",
    "explorerSubtitle": "Diagnóstico territorial de tasas de fecundidad y acceso a salud reproductiva.",
    "regions": {
      "Tarapaca": {
        "label": "Tarapacá (Norte Grande)",
        "fertility": "28.4 por 1,000",
        "fertilityVal": 28.4,
        "fertilityPct": 58,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Alto Subnacional",
        "coverage": "58% Espacios Amigables",
        "coverageVal": 58,
        "coverageGap": 42,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Moderada (42%)",
        "inactionCost": "USD 18 Millones/año",
        "inactionVal": 18,
        "inactionScale": 65,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 18 M/año (Zona fronteriza norte)",
        "priority": "Atención a población migrante en frontera, fortalecimiento de espacios amigables en Iquique y Alto Hospicio."
      },
      "Antofagasta": {
        "label": "Antofagasta (Norte)",
        "fertility": "25.1 por 1,000",
        "fertilityVal": 25.1,
        "fertilityPct": 52,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-amber-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Moderado-Alto",
        "coverage": "62% Espacios Amigables",
        "coverageVal": 62,
        "coverageGap": 38,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha (38%)",
        "inactionCost": "USD 24 Millones/año",
        "inactionVal": 24,
        "inactionScale": 70,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 24 M/año (Impacto minero y migratorio)",
        "priority": "Prevención en zonas urbanas vulnerables y refuerzo de retención escolar en liceos técnicos."
      },
      "Atacama": {
        "label": "Atacama (Norte Chico)",
        "fertility": "24.2 por 1,000",
        "fertilityVal": 24.2,
        "fertilityPct": 50,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-amber-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Moderado-Alto",
        "coverage": "55% Espacios Amigables",
        "coverageVal": 55,
        "coverageGap": 45,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha (45%)",
        "inactionCost": "USD 12 Millones/año",
        "inactionVal": 12,
        "inactionScale": 50,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 12 M/año (Comunas dispersas)",
        "priority": "Cobertura de anticoncepción LARC en consultorios de atención primaria de Copiapó y Vallenar."
      },
      "Coquimbo": {
        "label": "Coquimbo (Valles Transversales)",
        "fertility": "22.5 por 1,000",
        "fertilityVal": 22.5,
        "fertilityPct": 46,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-yellow-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Moderado",
        "coverage": "64% Espacios Amigables",
        "coverageVal": 64,
        "coverageGap": 36,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha (36%)",
        "inactionCost": "USD 28 Millones/año",
        "inactionVal": 28,
        "inactionScale": 75,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 28 M/año (Población rural de valles)",
        "priority": "Educación sexual comunitaria en zonas rurales y valles interiores de la región."
      },
      "Aysen": {
        "label": "Aysén (Patagonia / Extremo Sur)",
        "fertility": "23.8 por 1,000",
        "fertilityVal": 23.8,
        "fertilityPct": 49,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-amber-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Moderado-Alto",
        "coverage": "48% Espacios Amigables",
        "coverageVal": 48,
        "coverageGap": 52,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha de Aislamiento (52%)",
        "inactionCost": "USD 8 Millones/año",
        "inactionVal": 8,
        "inactionScale": 40,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 8 M/año (Aislamiento geográfico)",
        "priority": "Superación del aislamiento geográfico mediante telemedicina reproductiva y rondas médicas rurales periódicas."
      },
      "Metropolitana": {
        "label": "Región Metropolitana de Santiago",
        "fertility": "16.2 por 1,000",
        "fertilityVal": 16.2,
        "fertilityPct": 33,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-emerald-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Bajo (Brecha por Comunas)",
        "coverage": "74% Espacios Amigables",
        "coverageVal": 74,
        "coverageGap": 26,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Comunal (26%)",
        "inactionCost": "USD 85 Millones/año",
        "inactionVal": 85,
        "inactionScale": 100,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 85 M/año (Mayor volumen absoluto)",
        "priority": "Focalización en comunas periféricas con mayores índices de pobreza multidimensional y deserción escolar."
      }
    },
    "manifestoTitle": "7. Manifiesto Legislativo y Agenda de Política Pública para Chile (5 Puntos)",
    "cardsEn": {
      "c1": {
        "tag": "CRITICAL URGENCY",
        "title": "Pregnancy in Girls Under 15: Sexual Violence",
        "desc": "100% of pregnancies in children under 15 are statutory rape. Inaction perpetuates cycles of impunity and structural vulnerability."
      },
      "c2": {
        "tag": "SOCIAL IMPACT",
        "title": "Early Fertility and Compounded Opportunity Loss",
        "desc": "Early motherhood severely cuts lifetime earnings and truncates educational progression across generations."
      },
      "c3": {
        "tag": "HEALTH BARRIER",
        "title": "Gaps in Modern Contraceptive Delivery and LARCs",
        "desc": "Inconsistent availability of Long-Acting Reversible Contraceptives (implants, IUDs) in primary care clinics."
      }
    },
    "roiEn": {
      "roi1": {
        "title": "Loss Due to Inaction",
        "desc": "Aggregate lifetime economic burden in public health, school dropout, and forfeited labor income."
      },
      "roi2": {
        "title": "Return on Investment (ROI)",
        "desc": "For every $1 invested in adolescent pregnancy prevention, between $4.80 and $11.00 is returned."
      }
    },
    "lawsEn": {
      "l1": {
        "tag": "BINDING",
        "title": "Andean Plan PLANEA 2025-2030 Mandate",
        "desc": "Zero Tolerance commitments and fertility rate reduction targets by 2030."
      },
      "l2": {
        "tag": "CONSTITUTIONAL",
        "title": "Guarantee of Rights and Comprehensive Health",
        "desc": "Universal access to contraceptives and sexual violence response without discrimination."
      },
      "l3": {
        "tag": "FISCAL",
        "title": "Ring-Fenced Budget Allocation",
        "desc": "Protected and tagged resources for youth-friendly clinics and community prevention."
      }
    },
    "explorerTitleEn": "6. Territorial Indicators Explorer of Chile",
    "explorerSubtitleEn": "Territorialized diagnosis of fertility rates, clinic accreditation, and cost of inaction.",
    "manifestoTitleEn": "7. Legislative Manifesto and Public Policy Agenda for Chile (5 Points)",
    "manifestoItemsEn": [
      "1. Ring-fenced budget allocation in the Annual Budget Law for child and adolescent pregnancy prevention.",
      "2. Binding intersectoral Zero Tolerance protocol in girls under 15 and immediate response to sexual violence.",
      "3. Universal and barrier-free access to Long-Acting Reversible Contraceptives (LARCs) across all primary healthcare clinics.",
      "4. Mandatory implementation of Comprehensive Sexuality Education (CSE) with intercultural and gender-sensitive approaches.",
      "5. Accountability and oversight mechanism led by the National Ombudsperson Office and civil society organizations."
    ],
    "manifestoItems": [
      "1. Fortalecimiento del presupuesto del Programa Nacional de Salud Integral de Adolescentes y Jóvenes en el MINSAL.",
      "2. Capacitación continua y fiscalización para la aplicación efectiva de la Ley 21.030 (IVE 3 causales) sin objeciones indebidas.",
      "3. Expansión territorial del programa de retención escolar 'Para que Estudie Contigo' en comunas de alta vulnerabilidad.",
      "4. Auditoría y reducción de tasas de cesáreas obstétricas en adolescentes hacia estándares OPS/OMS.",
      "5. Focalización de recursos en regiones de la Macrozona Norte (Tarapacá, Antofagasta) y Región de Aysén."
    ],
    "sources": [
      {
        "id": "REF-PLANEA-2025",
        "tag": "ORAS-CONHU",
        "year": "2024",
        "title": "Plan Andino (PLANEA 2025-2030)",
        "desc": "Matriz multisectorial de metas andinas para la prevención del embarazo adolescente en los 6 países miembros."
      },
      {
        "id": "REF-MINSAL-2026",
        "tag": "MINSAL CHILE",
        "year": "2026",
        "title": "Indicadores de Salud Materna y Adolescente",
        "desc": "Reporte epidemiológico de TEFA (20.1/1k) y reducción histórica del 61.6% en fecundidad de 15 a 19 años."
      },
      {
        "id": "REF-LEY-21430",
        "tag": "CONGRESO NACIONAL",
        "year": "Ley N° 21.430",
        "title": "Ley de Garantías de Derechos de la Niñez",
        "desc": "Marco integral para la protección de la niñez, creando el Sistema Nacional de Garantías de Derechos."
      },
      {
        "id": "REF-LEY-21030",
        "tag": "CONGRESO NACIONAL",
        "year": "Ley N° 21.030",
        "title": "Ley de Despenalización de IVE en 3 Causales",
        "desc": "Regulación de la interrupción voluntaria del embarazo en causales de riesgo vital, inviabilidad y violación sexual."
      },
      {
        "id": "REF-LEY-20418",
        "tag": "MINSAL",
        "year": "Ley N° 20.418",
        "title": "Ley de Regulación de la Fertilidad",
        "desc": "Fija normas sobre información, orientación y prestaciones de salud sexual y reproductiva."
      },
      {
        "id": "REF-CIRCULARES-MINSAL",
        "tag": "MINSAL CHILE",
        "year": "Circulares A15/10 y 11",
        "title": "Normas de Atención a Adolescentes",
        "desc": "Autorización para la entrega confidencial de métodos anticonceptivos sin acompañamiento de adulto responsable."
      }
    ],
    "heroDescAy": "Congreso Nacional, MINSAL wan Gobiernos Regionales ukanakatak qillqa <strong>61.6% usuriptawi jisk'aptayata</strong> wan suyunakan askichaña.",
    "heroDescGn": "Congreso Nacional, MINSAL ha Gobiernos Regionales-pe g̃uarã marandu <strong>61.6% fecundidad guejy rehegua</strong> ha tekojoja tetãvorekuérape.",
    "heroDescArn": "Congreso Nacional, MINSAL ka Gobiernos Regionales mew kisu kimün dungu <strong>61.6% wechekeche koñin ngelaymew</strong> ka kom mapu mew küme mongen nieal.",
    "heroDescQvi": "Congreso Nacional, MINSAL wan Gobiernos Regionales nisqapaq killka <strong>61.6% fecundidad pisi miraymanta</strong> wan llaktakunapi alli kawsaymanta.",
    "heroDescGuc": "Apalirawaa Congreso Nacional, MINSAL je Gobiernos Regionales süpüla <strong>61.6% jintüi asitnushii katataaka</strong> je mmapa'a anaa.",
    "heroDescWra": "Goberno Nacional, MINSAL aribo <strong>61.6% iboma asidaja</strong> kokotune oria monika.",
    "heroDescPmn": "Congreso Nacional, MINSAL mai <strong>61.6% murekon pimanse</strong> kure pe aponkoro.",
    "heroDescPbb": "Congreso Nacional, MINSAL yu'çeçx <strong>61.6% ku'j we'sx thegnikha's</strong> çxhabte.",
    "heroDescEmp": "Congreso Nacional, MINSAL bedéa <strong>61.6% wẽra warrade</strong> bia druade.",
    "heroDescAsh": "Congreso Nacional, MINSAL ñañantsi <strong>61.6% eentsite kametsari</strong> ashi maaroni.",
    "heroDescAgr": "Congreso Nacional, MINSAL chicham <strong>61.6% datsajum pegker pujustinme</strong>.",
    "heroDescJiv": "Congreso Nacional, MINSAL chicham <strong>61.6% natsa penker pujustin</strong>.",
    "heroDescRap": "Puka haka tere no te <strong>Congreso Nacional, MINSAL 'e Gobiernos Regionales</strong> mo te 61.6% poki hapu'a kore 'e te pāruru i te kāiŋa.",
    "siteTitleAy": "Suyu Kamachi Qhawawi: Imillanaka Usuriptawi Jark'aqaña Chile Suyuna",
    "siteTitleArn": "Ngülamtun Politica Dungu: Wechekeche Nieal Koñin Kuñiwtun Chile Mew",
    "siteTitleRap": "Vānaŋa Haka Oho: Pāruru i te Poki 'Āpī mai te Hapu'a i Chile",
    "manifestoTitleQu": "7. Kamachiy Qillqa wan Política Pública Agenda Chile Suyupaq (5 Puntos)",
    "manifestoItemsQu": [
      "1. Ley de Presupuesto Anual nisqapi wawa chichuy hark'anapaq qullqi t'aqayta takyachiy.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia kamachiy wan maqanakuyta utqaylla hark'ay.",
      "3. LARC unaypaq hampiyninkunata sapa postapi mana qullqillawan qoy.",
      "4. Educación Sexual Integral (ESI) yachachiyta intercultural wan runasimipi hunt'achiy.",
      "5. Defensoría del Pueblo wan ayllukunawan kuska qillqata qhaway wan hunt'achiy."
    ],
    "cardsQu": {
      "c1": {
        "tag": "ANCHA HATUN LLAKI",
        "title": "15 Watamanta Uray Sipaskunapi Chichuy: Maqanakuy",
        "desc": "15 watamanta uray wawakunapi chichuyqa violación qallariyniyuqmi. Mana allichasqaqa llakitam mirachin."
      },
      "c2": {
        "tag": "AYLLUPI CHINKAY",
        "title": "Wawa Kaspa Chichuy wan Yachay Chinkachiy",
        "desc": "Wawallaraq wawayuq kayqa yachaykunata qulluchin wan kawsay qullqita anchata pisiyachin."
      },
      "c3": {
        "tag": "HAMPI WASI PISIY",
        "title": "LARC wan Moderno Hampikuna Mana Aypay",
        "desc": "Postakunapi wan ayllu hampiwesikunapi implante wan DIU mana aypanchu."
      }
    },
    "roiQu": {
      "roi1": {
        "title": "Mana Ruraypa Chinkachiynin",
        "desc": "Hampi wasi gastokuna, yachay saqiy wan qullqi mana chaskisqakuna."
      },
      "roi2": {
        "title": "Qullqi Kutimuynin (ROI)",
        "desc": "Sapa $1 churamusqamanta, $4.80 - $11.00 kutimun ayllupaq wan suyupaq."
      }
    },
    "lawsQu": {
      "l1": {
        "tag": "KAMACHIY",
        "title": "Plan Andino PLANEA 2025-2030 Kamachiy",
        "desc": "Cero Tolerancia wan fecundidad pisiyachiy 2030 watapaq."
      },
      "l2": {
        "tag": "HATUN KAMACHIY",
        "title": "Derechos wan Allin Kawsay Amachay",
        "desc": "Tukuy runapaq LARC hampikuna wan maqanakuy hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHIY",
        "title": "Qullqi T'aqay Takyachiy",
        "desc": "Ayllu postakunapaq qullqi waqaychasqa."
      }
    },
    "manifestoTitleAy": "7. Suyu Kamachi Qillqa wan Políticas Públicas Chile Suyutaki (5 Puntos)",
    "manifestoItemsAy": [
      "1. Ley de Presupuesto Anual ukan sapürunjama qullqi t'aqawi imillanaka usuriptawi jark'aqañataki.",
      "2. 15 marat jisk'anakan Cero Tolerancia protocolos wan jank'aki qullayawi comisaríanakana.",
      "3. LARC unay qullañanaka taqi qullañ utanakana inaki churaña.",
      "4. Educación Sexual Integral (ESI) yatichawi intercultural wan aymar aruna phuqhaña.",
      "5. Defensoría del Pueblo yanapirinakampi qhawawi wan amachawi luraña."
    ],
    "cardsAy": {
      "c1": {
        "tag": "SINTIPUNI AXSARAWI",
        "title": "15 Marat Jisk'anakan Usuriptawi: Nuwasiña",
        "desc": "15 marat jisk'anakan usuriptawipax nuwasiñat jutiriwa. Jan askichatax jach'a llakiwa."
      },
      "c2": {
        "tag": "JAQI CHHAQAWI",
        "title": "Nayra Usuriptawi wan Yatichawi Chhaqawi",
        "desc": "Imillanaka usuriptawipax yatichawi qulluchiwa wan jakawi qullqi pisiyaptayi."
      },
      "c3": {
        "tag": "QULLAÑA UTAN PISI",
        "title": "LARC wan Moderno Qullanaka Jan Aypawi",
        "desc": "Qullañ utanakana implante wan DIU qullanakax janiw aypkiti."
      }
    },
    "roiAy": {
      "roi1": {
        "title": "Jan Lurawina Chhaqawipa",
        "desc": "Qullañ uta gastonaka, yatichawi jaytawi wan qullqi jan jikxatatanaka."
      },
      "roi2": {
        "title": "Qullqi Kutt'awi (ROI)",
        "desc": "Sapa $1 churatanakampi, $4.80 - $11.00 kutt'ani suyunakataki."
      }
    },
    "lawsAy": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan usuriptawi jisk'aptayaña 2030 marataki."
      },
      "l2": {
        "tag": "JACH'A KAMACHI",
        "title": "Derechos wan Qullañ Amachawi",
        "desc": "Taqinitak LARC qullanaka wan nuwasiña jark'aqaña."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'aqawi Imxatata",
        "desc": "Qullañ utanakataki qullqi amachatapuni."
      }
    },
    "manifestoTitleGn": "7. Tetã Rerekua Kuatia ha Políticas Públicas Chile-pe g̃uarã (5 Puntos)",
    "manifestoItemsGn": [
      "1. Viru mohenda Ley de Presupuesto Anual-pe mitãkuña usuriptawi jark'aqa hag̃ua.",
      "2. Cero Tolerancia protocols 15 ary guýpe ha ñangareko pya'e violencia sexual rehe.",
      "3. LARC pohã ñeme'ẽ opavave tasyo ha puesto de salud rupive.",
      "4. Educación Sexual Integral (ESI) mbo'epy hekopete guaraníme ha castellánope.",
      "5. Defensoría del Pueblo ha tetãygua aty ñemongeta ha jehechajey."
    ],
    "cardsGn": {
      "c1": {
        "tag": "KYHYJE GUASU",
        "title": "Mitãkuña 15 Ary Guýpe Usuriptawi: Ñerairõ",
        "desc": "100% mitãkuña 15 ary guýpe hyeguáva oñembotavy rupi. Tekotevẽ ñangareko pya'e."
      },
      "c2": {
        "tag": "TEKO KAÑY",
        "title": "Mitãkuña Memby ha Tekoasy",
        "desc": "Mitãkuña memby ogueru tekoasy ha ombopaha mbo'epy heñóva."
      },
      "c3": {
        "tag": "TASYÓPE KAÑY",
        "title": "LARC ha Anticonceptivos Pokã",
        "desc": "Tasyo michĩvape ndaipóri implante ha DIU mitãkuñáme g̃uarã."
      }
    },
    "roiGn": {
      "roi1": {
        "title": "Viru Kañy",
        "desc": "Tasyo gasto, mbo'epy jejayei ha viru ndohupytýiva."
      },
      "roi2": {
        "title": "Viru Jehevy (ROI)",
        "desc": "Peteĩ $1 emoĩvape g̃uarã, $4.80 - $11.00 ojevy tetãme."
      }
    },
    "lawsGn": {
      "l1": {
        "tag": "TEKO ME'Ẽ",
        "title": "Plan Andino PLANEA 2025-2030 Teko",
        "desc": "Cero Tolerancia ha fecundidad guejy 2030 arype."
      },
      "l2": {
        "tag": "TETÃ ME'Ẽ",
        "title": "Derécho ha Tesãi Ñangareko",
        "desc": "LARC pohã opavavépe ha ñerairõ jark'a."
      },
      "l3": {
        "tag": "VIRU ME'Ẽ",
        "title": "Viru Mohenda Ñangareko",
        "desc": "Tasyo michĩvape viru oñemohendáva."
      }
    },
    "manifestoTitleArn": "7. Ngülamtun Politica Dungu Agenda Chile Mew (5 Puntos)",
    "manifestoItemsArn": [
      "1. Kisu Presupuesto Ley de Presupuesto Anual mew wechekeche koñin kuñiwtual.",
      "2. Cero Tolerancia protocolos 15 tripantu pichikeche kuñiwtual kom posta mew.",
      "3. LARC kuñiwtun lawen kom pu centro de salud mew nieal.",
      "4. Educación Sexual Integral (ESI) küme kimün kom chillkatuwe mapudungun mew.",
      "5. Defensoría del Pueblo ka lof che mew kisu kuñiwtun dungu."
    ],
    "cardsArn": {
      "c1": {
        "tag": "AÑKEN DUNGU",
        "title": "15 Tripantu Pichikeche Koñin: Weda Dungu",
        "desc": "Kom 15 tripantu pichikeche koñin niey weda dungu mew. Kuñiwtual tañi mongen."
      },
      "c2": {
        "tag": "MAPU MEW KAÑY",
        "title": "Wechekeche Koñin ka Kimün Ngelay",
        "desc": "Wechekeche koñin niey mew fey kimün ngelay ka kulliñ pisiyachi."
      },
      "c3": {
        "tag": "LAWENTUWE PISI",
        "title": "LARC ka Küme Lawen Ngelay",
        "desc": "Posta mew implante ka DIU ngelay wechekeche domo mew."
      }
    },
    "roiArn": {
      "roi1": {
        "title": "Kisu Femnon Mew Kulliñ",
        "desc": "Lawentuwe gasto, chillkatuwe ngelay ka kulliñ kañy."
      },
      "roi2": {
        "title": "Kulliñ Wiñol (ROI)",
        "desc": "Fill $1 kulliñ mew, $4.80 - $11.00 wiñoy mapu mew."
      }
    },
    "lawsArn": {
      "l1": {
        "tag": "NGÜLAM",
        "title": "Plan Andino PLANEA 2025-2030 Ngülam",
        "desc": "Cero Tolerancia ka wechekeche koñin ngelay 2030 tripantu mew."
      },
      "l2": {
        "tag": "FÜTRA NGÜLAM",
        "title": "Derechos ka Küme Mongen",
        "desc": "Kom che mew LARC lawen ka weda dungu kuñiwtun."
      },
      "l3": {
        "tag": "KULLIÑ NGÜLAM",
        "title": "Kulliñ Kuñiwtun",
        "desc": "Posta mew kulliñ kuñiwtual."
      }
    },
    "manifestoTitleQvi": "7. Llaktapa Kamachi Killka Agenda Chile Llaktapi (5 Puntos)",
    "manifestoItemsQvi": [
      "1. Ley de Presupuesto ukupi wawa chichuy hark'ankapak qullqi t'akayta sinyachina.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia protocolos wan utka yanapana.",
      "3. LARC unaypa hampikunata tukuy hampiwasi ukupi llukshichina.",
      "4. Educación Sexual Integral (ESI) yachana wasikunapi kichwapi paktachina.",
      "5. Defensoría del Pueblo wan llaktakunawan kuska killkata rikuriy."
    ],
    "cardsQvi": {
      "c1": {
        "tag": "YAPA JATUN LLAKI",
        "title": "15 Watamanta Uray Wawa Chichuy: Llaki",
        "desc": "15 watamanta uray wawakunapi chichuyqa llakiyuqmi. Mana allichaspaqa llakitami mirachin."
      },
      "c2": {
        "tag": "LLAKTA PISI",
        "title": "Wawa Chichuy wan Yachay Chinkay",
        "desc": "Wawa chichuyka yachayta pishiyachin wan kawsayta llakichin."
      },
      "c3": {
        "tag": "HAMPIWASI PISI",
        "title": "LARC wan Hampikuna Mana Tiyay",
        "desc": "Hampiwasi ukupi implante wan DIU mana aypanchu."
      }
    },
    "roiQvi": {
      "roi1": {
        "title": "Mana Ruraypa Chinkaynin",
        "desc": "Hampiwasi gastokuna, yachay sakiy wan kawsay qullqi pisi."
      },
      "roi2": {
        "title": "Qullqi Kutiy (ROI)",
        "desc": "Sapa $1 churashkamanta, $4.80 - $11.00 kutin llaktapaq."
      }
    },
    "lawsQvi": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan wawa chichuy pisi 2030 watapak."
      },
      "l2": {
        "tag": "JATUN KAMACHI",
        "title": "Derechos wan Alli Kawsay",
        "desc": "Tukuykunapak LARC hampikuna wan llaki hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'akay",
        "desc": "Hampiwasi ukupi qullqi charina."
      }
    },
    "manifestoTitleGuc": "7. Apalirawaa Politica Agenda Chile (5 Puntos)",
    "manifestoItemsGuc": [
      "1. Walawaa presupuestal süpüla jintüi asitnushii katataaka Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos süpüla 15 juyamüin jintüin je anaa.",
      "3. LARC anticonceptivos tü taashii süpüla mmapa'a.",
      "4. Educación Sexual Integral (ESI) wayuunaikiru'u ekirajaapülee.",
      "5. Defensoría del Pueblo je wayuu akaliojiraa."
    ],
    "cardsGuc": {
      "c1": {
        "tag": "MÜLIAA MÜSIA",
        "title": "15 Juyamüin Jintüi Asitnushii: Müliaa",
        "desc": "15 juyamüin jintüin asitnushii katataaka. Cho'ujaasü akaliojiraa süpüla anaa."
      },
      "c2": {
        "tag": "MMAPA'A PISI",
        "title": "Jintüi Katataaka je Ekirajaapülee Chinkay",
        "desc": "Jintüi asitnushii ekirajaapülee chinkachi."
      },
      "c3": {
        "tag": "ANAA AYATAWAA",
        "title": "LARC je Anticonceptivos Pokã",
        "desc": "Posta je centro de salud nojotshi implante süpüla jintüi."
      }
    },
    "roiGuc": {
      "roi1": {
        "title": "Walawaa Chinkay",
        "desc": "Centro de salud gasto, ekirajaapülee chinkay."
      },
      "roi2": {
        "title": "Walawaa Anaa (ROI)",
        "desc": "Süpüla $1 walawaa, $4.80 - $11.00 anaa mmapa'a."
      }
    },
    "lawsGuc": {
      "l1": {
        "tag": "PÜTCHI",
        "title": "Plan Andino PLANEA 2025-2030 Pütchi",
        "desc": "Cero Tolerancia je jintüi asitnushii katataaka 2030."
      },
      "l2": {
        "tag": "ANAA PÜTCHI",
        "title": "Derechos je Anaa",
        "desc": "Mmapa'a LARC anticonceptivos je müliaa jark'a."
      },
      "l3": {
        "tag": "WALAWA PÜTCHI",
        "title": "Walawaa Presupuesto",
        "desc": "Posta walawaa anaa."
      }
    },
    "manifestoTitleWra": "7. Obonoba Politica Agenda Chile (5 Puntos)",
    "manifestoItemsWra": [
      "1. Presupuesto aribo iboma asidaja obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata sanuka iboma.",
      "3. LARC anticonceptivos kokotune hanoko.",
      "4. Educación Sexual Integral (ESI) warao aribo eskuela.",
      "5. Defensoría aribo nomewitu sanuka."
    ],
    "cardsWra": {
      "c1": {
        "tag": "OBONOBA SANUKA",
        "title": "15 Wata Sanuka Iboma Asidaja: Obonoba",
        "desc": "15 wata sanuka iboma asidaja obonoba nomewitu."
      },
      "c2": {
        "tag": "ARIBO SANUKA",
        "title": "Iboma Asidaja eskuela obonoba",
        "desc": "Iboma asidaja eskuela chinkachi."
      },
      "c3": {
        "tag": "HANOKO PISI",
        "title": "LARC Anticonceptivos Hanoko",
        "desc": "Hanoko sanuka implante nojotshi."
      }
    },
    "roiWra": {
      "roi1": {
        "title": "Obonoba Aribo Chinkay",
        "desc": "Hanoko gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Aribo Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa hanoko."
      }
    },
    "lawsWra": {
      "l1": {
        "tag": "ARIBO",
        "title": "Plan Andino PLANEA 2025-2030 Aribo",
        "desc": "Cero Tolerancia iboma asidaja 2030."
      },
      "l2": {
        "tag": "NOMIEWITU",
        "title": "Derechos je Hanoko",
        "desc": "LARC anticonceptivos hanoko kokotune."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Hanoko",
        "desc": "Hanoko sanuka aribo."
      }
    },
    "manifestoTitlePmn": "7. Politica Mai Agenda Chile (5 Puntos)",
    "manifestoItemsPmn": [
      "1. Presupuesto mai murekon pimanse obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata murekon mai.",
      "3. LARC anticonceptivos kokotune pata'pï iwe.",
      "4. Educación Sexual Integral (ESI) pemón mai eskuela.",
      "5. Defensoría mai nomewitu murekon."
    ],
    "cardsPmn": {
      "c1": {
        "tag": "PATA'PÏ MAI",
        "title": "15 Wata Murekon Pimanse: Pata'pï",
        "desc": "15 wata murekon pimanse pata'pï mai."
      },
      "c2": {
        "tag": "MAI PITI",
        "title": "Murekon Pimanse eskuela mai",
        "desc": "Murekon pimanse eskuela chinkachi."
      },
      "c3": {
        "tag": "IWE PISI",
        "title": "LARC Anticonceptivos Iwe",
        "desc": "Pata'pï iwe implante nojotshi."
      }
    },
    "roiPmn": {
      "roi1": {
        "title": "Mai Piti Chinkay",
        "desc": "Pata'pï iwe gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Mai Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa iwe."
      }
    },
    "lawsPmn": {
      "l1": {
        "tag": "MAI",
        "title": "Plan Andino PLANEA 2025-2030 Mai",
        "desc": "Cero Tolerancia murekon pimanse 2030."
      },
      "l2": {
        "tag": "PATA'PÏ",
        "title": "Derechos je Iwe",
        "desc": "LARC anticonceptivos pata'pï iwe."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Iwe",
        "desc": "Pata'pï iwe mai."
      }
    },
    "manifestoTitlePbb": "7. Yu'çeçx Politica Agenda Chile (5 Puntos)",
    "manifestoItemsPbb": [
      "1. Presupuesto nxusxi ku'j we'sx thegnikha's Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 vxite' ku'j we'sx.",
      "3. LARC yu'çeçx taashii ta'çxhab.",
      "4. Educación Sexual Integral (ESI) nasa yuwete ekirajaapülee.",
      "5. Defensoría del Pueblo thegnikha's."
    ],
    "cardsPbb": {
      "c1": {
        "tag": "KU'J WE'SX",
        "title": "15 Vxite' Ku'j Thegnikha's: Ku'j",
        "desc": "15 vxite' ku'j we'sx thegnikha's."
      },
      "c2": {
        "tag": "ÇXHAB PISI",
        "title": "Ku'j Thegnikha's eskuela çxhab",
        "desc": "Ku'j we'sx eskuela chinkachi."
      },
      "c3": {
        "tag": "YAÇK PISI",
        "title": "LARC Yu'çeçx Yaçk",
        "desc": "Yaçk taashii implante nojotshi."
      }
    },
    "roiPbb": {
      "roi1": {
        "title": "Ku'j We'sx Chinkay",
        "desc": "Yaçk gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Ku'j Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa çxhab."
      }
    },
    "lawsPbb": {
      "l1": {
        "tag": "YU'ÇEÇX",
        "title": "Plan Andino PLANEA 2025-2030 Yu'çeçx",
        "desc": "Cero Tolerancia ku'j we'sx 2030."
      },
      "l2": {
        "tag": "ÇXHAB",
        "title": "Derechos je Yaçk",
        "desc": "LARC yu'çeçx taashii ta'çxhab."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Çxhab",
        "desc": "Çxhab yaçk yu'çeçx."
      }
    },
    "manifestoTitleEmp": "7. Bedéa Politica Agenda Chile (5 Puntos)",
    "manifestoItemsEmp": [
      "1. Presupuesto druade wẽra warrade Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 warrarãde wẽra.",
      "3. LARC anticonceptivos druade droma.",
      "4. Educación Sexual Integral (ESI) emberá bedéade eskuela.",
      "5. Defensoría del Pueblo druade bia."
    ],
    "cardsEmp": {
      "c1": {
        "tag": "KHARRA DRUADE",
        "title": "15 Warrarãde Wẽra: Kharra",
        "desc": "15 warrarãde wẽra kharra druade."
      },
      "c2": {
        "tag": "DRUA PISI",
        "title": "Wẽra Warrarã eskuela drua",
        "desc": "Wẽra warrarã eskuela chinkachi."
      },
      "c3": {
        "tag": "DROMA PISI",
        "title": "LARC Anticonceptivos Droma",
        "desc": "Droma implante nojotshi."
      }
    },
    "roiEmp": {
      "roi1": {
        "title": "Drua Bedéa Chinkay",
        "desc": "Droma gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Drua Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa drua."
      }
    },
    "lawsEmp": {
      "l1": {
        "tag": "BEDÉA",
        "title": "Plan Andino PLANEA 2025-2030 Bedéa",
        "desc": "Cero Tolerancia wẽra warrade 2030."
      },
      "l2": {
        "tag": "DRUA",
        "title": "Derechos je Droma",
        "desc": "LARC anticonceptivos druade droma."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Drua",
        "desc": "Druade droma bedéa."
      }
    },
    "manifestoTitleAsh": "7. Kametsari Politica Agenda Chile (5 Puntos)",
    "manifestoItemsAsh": [
      "1. Presupuesto pankotsi eentsite kametsari Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 osarentsi eentsite.",
      "3. LARC anticonceptivos pankotsi maaroni.",
      "4. Educación Sexual Integral (ESI) asháninka ñañantsi eskuela.",
      "5. Defensoría del Pueblo eentsite kametsa."
    ],
    "cardsAsh": {
      "c1": {
        "tag": "KAMETSARIÑA",
        "title": "15 Osarentsi Eentsite: Kametsa",
        "desc": "15 osarentsi eentsite kametsariña."
      },
      "c2": {
        "tag": "PANKOTSI PISI",
        "title": "Eentsite eskuela pankotsi",
        "desc": "Eentsite eskuela chinkachi."
      },
      "c3": {
        "tag": "PANKOTSI PISI",
        "title": "LARC Anticonceptivos Pankotsi",
        "desc": "Pankotsi implante nojotshi."
      }
    },
    "roiAsh": {
      "roi1": {
        "title": "Pankotsi Kametsa Chinkay",
        "desc": "Pankotsi gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Pankotsi Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa pankotsi."
      }
    },
    "lawsAsh": {
      "l1": {
        "tag": "ÑAÑANTSI",
        "title": "Plan Andino PLANEA 2025-2030 Ñañantsi",
        "desc": "Cero Tolerancia eentsite 2030."
      },
      "l2": {
        "tag": "PANKOTSI",
        "title": "Derechos je Pankotsi",
        "desc": "LARC anticonceptivos pankotsi maaroni."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Pankotsi",
        "desc": "Pankotsi eentsite ñañantsi."
      }
    },
    "manifestoTitleAgr": "7. Datsajum Politica Agenda Chile (5 Puntos)",
    "manifestoItemsAgr": [
      "1. Presupuesto apu datsajum pegker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 mijan datsajum.",
      "3. LARC anticonceptivos pegker jea.",
      "4. Educación Sexual Integral (ESI) awajún chicham eskuela.",
      "5. Defensoría del Pueblo datsajum pegker."
    ],
    "cardsAgr": {
      "c1": {
        "tag": "PEGKERCHAU",
        "title": "15 Mijan Datsajum: Pegkerchau",
        "desc": "15 mijan datsajum pegkerchau."
      },
      "c2": {
        "tag": "JEA PISI",
        "title": "Datsajum eskuela jea",
        "desc": "Datsajum eskuela chinkachi."
      },
      "c3": {
        "tag": "JEA PISI",
        "title": "LARC Anticonceptivos Jea",
        "desc": "Jea implante nojotshi."
      }
    },
    "roiAgr": {
      "roi1": {
        "title": "Datsajum Pegker Chinkay",
        "desc": "Jea gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Datsajum Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa jea."
      }
    },
    "lawsAgr": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia datsajum 2030."
      },
      "l2": {
        "tag": "JEA",
        "title": "Derechos je Jea",
        "desc": "LARC anticonceptivos pegker jea."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Jea",
        "desc": "Jea datsajum chicham."
      }
    },
    "manifestoTitleJiv": "7. Natsa Politica Agenda Chile (5 Puntos)",
    "manifestoItemsJiv": [
      "1. Presupuesto uunt natsa penker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 uchin natsa.",
      "3. LARC anticonceptivos penker tsuwatai.",
      "4. Educación Sexual Integral (ESI) shuar chicham eskuela.",
      "5. Defensoría del Pueblo natsa penker."
    ],
    "cardsJiv": {
      "c1": {
        "tag": "PENKERCHAU",
        "title": "15 Uchin Natsa: Penkerchau",
        "desc": "15 uchin natsa penkerchau."
      },
      "c2": {
        "tag": "TSUWATAI PISI",
        "title": "Natsa eskuela tsuwatai",
        "desc": "Natsa eskuela chinkachi."
      },
      "c3": {
        "tag": "TSUWATAI PISI",
        "title": "LARC Anticonceptivos Tsuwatai",
        "desc": "Tsuwatai implante nojotshi."
      }
    },
    "roiJiv": {
      "roi1": {
        "title": "Natsa Penker Chinkay",
        "desc": "Tsuwatai gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Natsa Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa tsuwatai."
      }
    },
    "lawsJiv": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia natsa 2030."
      },
      "l2": {
        "tag": "TSUWATAI",
        "title": "Derechos je Tsuwatai",
        "desc": "LARC anticonceptivos penker tsuwatai."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Tsuwatai",
        "desc": "Tsuwatai natsa chicham."
      }
    },
    "manifestoTitleRap": "7. Vānaŋa Haka Oho Agenda mo Chile (5 Puntos)",
    "manifestoItemsRap": [
      "1. Moni haka tere no te poki 'āpī hapu'a kore i roto i te Ley de Presupuesto Anual.",
      "2. Cero Tolerancia protocolos mo te poki o raro i te 15 matahiti.",
      "3. LARC anticonceptivos pāruru mo te kāiŋa.",
      "4. Educación Sexual Integral (ESI) 'ite i roto i te ha'api'ira'a vananga Rapa Nui.",
      "5. Defensoría de la Niñez pāruru mo te poki kāiŋa."
    ],
    "cardsRap": {
      "c1": {
        "tag": "RARI NUI",
        "title": "15 Matahiti Poki Hapu'a: Rari",
        "desc": "15 matahiti poki hapu'a kore rari nui."
      },
      "c2": {
        "tag": "KĀIŊA PISI",
        "title": "Poki Hapu'a ha'api'ira'a kāiŋa",
        "desc": "Poki hapu'a ha'api'ira'a chinkachi."
      },
      "c3": {
        "tag": "HARE PISI",
        "title": "LARC Anticonceptivos Hare",
        "desc": "Hare implante nojotshi."
      }
    },
    "roiRap": {
      "roi1": {
        "title": "Kāiŋa Moni Kore",
        "desc": "Hare gasto, ha'api'ira'a kore."
      },
      "roi2": {
        "title": "Moni Haka Oho (ROI)",
        "desc": "Mo te $1, $4.80 - $11.00 moni hoki mai."
      }
    },
    "lawsRap": {
      "l1": {
        "tag": "VĀNAŊA",
        "title": "Plan Andino PLANEA 2025-2030 Vānaŋa",
        "desc": "Cero Tolerancia poki hapu'a kore 2030."
      },
      "l2": {
        "tag": "KĀIŊA",
        "title": "Derechos je Hare",
        "desc": "LARC anticonceptivos pāruru mo te kāiŋa."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Kāiŋa",
        "desc": "Kāiŋa hare vānaŋa."
      }
    }
  },
  "colombia": {
    "name": "Colombia",
    "flag": "🇨🇴",
    "flagSvg": "<svg class=\"w-5 h-3.5 rounded inline-block object-cover flex-shrink-0 align-middle\" viewBox=\"0 0 640 480\"><path fill=\"#FCD116\" d=\"M0 0h640v240H0z\"/><path fill=\"#003893\" d=\"M0 240h640v120H0z\"/><path fill=\"#CE1126\" d=\"M0 360h640v120H0z\"/></svg>",
    "badge": "Resolución 309/2025 • PLANEA 2025-2030 🇨🇴",
    "siteTitle": "Plataforma de Incidencia Política: Prevención del Embarazo Adolescente en Colombia",
    "siteTitleEn": "Policy Advocacy Platform: Adolescent Pregnancy Prevention in Colombia",
    "siteTitleQu": "Suyu Kamachiy Qhawana: Wawa Chichuy Hark'ay Colombia Suyupi",
    "endorsed": [
      "Min. Salud y Prot. Social",
      "ORAS-CONHU",
      "UNFPA Colombia",
      "OPS/OMS"
    ],
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500'>Prevención del Embarazo Adolescente en Colombia</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500'>Adolescent Pregnancy Prevention in Colombia</span>",
    "heroTitleQu": "Mana Ruraypa Qullqi Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500'>Wawa Chichuy Hark'ay Colombia Suyupi</span>",
    "heroDesc": "Evidencia actuarial para el <strong>Congreso de la República, Ministerio de Hacienda y Entidades Territoriales</strong> sobre la Ruta Materno Perinatal y el costo de inacción.",
    "heroDescEn": "Actuarial evidence for the <strong>Congress of the Republic, Ministry of Finance, and Territorial Entities</strong> on Maternal Perinatal Pathways and the cost of inaction.",
    "heroDescQu": "Congreso de la República, Ministerio de Hacienda wan Departamentos nisqapaq qillqa <strong>Ruta Materno Perinatal</strong> wan mana ruraypa chinkachiyninmanta.",
    "metrics": [
      {
        "val": "55.8 / 1,000",
        "lbl": "Tasa Fecundidad 15-19 (Consolidado 2026)",
        "lblEn": "Adolescent Fertility Rate (2026)",
        "lblQu": "Sipaskunapa Chichuynin (2026)"
      },
      {
        "val": "USD 2,549M",
        "lbl": "Costo Inacción Anual (0.58% PIB)",
        "lblEn": "Annual Inaction Cost (0.58% GDP)",
        "lblQu": "Sapa Wata Chinkachiy (0.58% PIB)"
      },
      {
        "val": "59%",
        "lbl": "Madres Adolescentes en Uniones Tempranas",
        "lblEn": "Adolescent Mothers in Early Unions",
        "lblQu": "Madres Sipaskuna Sawasqa"
      },
      {
        "val": "Semana 24",
        "lbl": "Despenalización IVE (Sentencia CC 2022)",
        "lblEn": "Decriminalization of Abortion (W24)",
        "lblQu": "IVE Despenalización (Semana 24)"
      }
    ],
    "cards": {
      "c1": {
        "tag": "UNIONES TEMPRANAS Y REZAGO",
        "title": "59% en Unión Libre y Pérdida Educativa de USD 754.8M",
        "desc": "El 59% de las madres adolescentes en Colombia convive en unión temprana. El rezago y abandono escolar genera pérdidas de USD 754.8M anuales para el país."
      },
      "c2": {
        "tag": "ZONAS DE CONFLICTO Y MIGRANTES",
        "title": "Alta Vulnerabilidad en Zonas PDET y Migrantes",
        "desc": "Las adolescentes en territorios afectados por el conflicto armado y la población migrante venezolana registran una caída del 36% en atención preconcepcional."
      },
      "c3": {
        "tag": "BRECHA SALARIAL DEL 23%",
        "title": "Pérdida de USD 1,241 Millones en Ingresos de Mujeres",
        "desc": "Las mujeres que fueron madres en la adolescencia ganan un 23% menos que las madres adultas, lo que se traduce en una pérdida de USD 1,241M anuales en salarios."
      }
    },
    "roi": {
      "roi1": {
        "title": "Costo Socioeconómico de la Inacción: USD 2,549.2 Millones",
        "desc": "Representa el 0.58% del PIB colombiano (USD 2,549M anuales). Impacto en ingresos laborales (USD 1,241M), costo educativo (USD 754.8M) e inactividad laboral (USD 488.7M)."
      },
      "roi2": {
        "title": "Impacto Fiscal para el Estado Colombiano: USD 60.5 Millones",
        "desc": "El Estado deja de recaudar USD 60.5M en impuestos (IVA e Impuesto sobre la Renta) debido a la menor inserción y remuneración laboral de las madres tempranas."
      }
    },
    "laws": {
      "l1": {
        "tag": "RUTA MATERNO PERINATAL",
        "title": "Resolución N° 3280 de 2018",
        "desc": "Establece los lineamientos técnicos y operativos obligatorios para la atención preconcepcional, parto y puerperio en Colombia."
      },
      "l2": {
        "tag": "DERECHO A LA INFORMACIÓN",
        "title": "Resolución N° 309 de 2025",
        "desc": "Garantiza el derecho a la información en salud sexual de adolescentes y notificación obligatoria inmediata ante sospecha de violencia sexual."
      },
      "l3": {
        "tag": "DESPENALIZACIÓN Y EDUCACIÓN",
        "title": "Sentencias Corte Constitucional (2016 y 2022)",
        "desc": "Despenaliza la IVE hasta la semana 24 de gestación e institucionaliza la educación sexual como cátedra obligatoria en colegios."
      }
    },
    "explorerTitle": "6. Explorador Informativo de Indicadores por Departamentos de Colombia",
    "explorerSubtitle": "Diagnóstico territorial de tasas de fecundidad y acceso a salud reproductiva.",
    "regions": {
      "LaGuajira": {
        "label": "La Guajira (Caribe / Indígena)",
        "fertility": "78.2 por 1,000",
        "fertilityVal": 78.2,
        "fertilityPct": 78,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Extremo",
        "coverage": "24% Cobertura Ruta 3280",
        "coverageVal": 24,
        "coverageGap": 76,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Crítica (76%)",
        "inactionCost": "USD 120 Millones/año",
        "inactionVal": 120,
        "inactionScale": 75,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 120 M/año (Población Wayúu y migrante)",
        "priority": "Atención intercultural en salud sexual en comunidades Wayúu y abastecimiento de métodos LARC en rancherías."
      },
      "Choco": {
        "label": "Chocó (Pacífico / Afro e Indígena)",
        "fertility": "74.5 por 1,000",
        "fertilityVal": 74.5,
        "fertilityPct": 75,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Extremo",
        "coverage": "21% Cobertura Ruta 3280",
        "coverageVal": 21,
        "coverageGap": 79,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Severa (79%)",
        "inactionCost": "USD 95 Millones/año",
        "inactionVal": 95,
        "inactionScale": 70,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 95 M/año (Aislamiento y conflicto)",
        "priority": "Superación de barreras de transporte fluvial para emergencias obstétricas y protección contra violencias en zonas de conflicto."
      },
      "Cesar": {
        "label": "Cesar (Caribe)",
        "fertility": "68.1 por 1,000",
        "fertilityVal": 68.1,
        "fertilityPct": 68,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Muy Alto",
        "coverage": "32% Cobertura Ruta 3280",
        "coverageVal": 32,
        "coverageGap": 68,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Alta (68%)",
        "inactionCost": "USD 140 Millones/año",
        "inactionVal": 140,
        "inactionScale": 80,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 140 M/año (Municipios PDET)",
        "priority": "Focalización en municipios PDET y ampliación de servicios amigables en centros de salud rurales."
      },
      "Magdalena": {
        "label": "Magdalena (Caribe)",
        "fertility": "65.3 por 1,000",
        "fertilityVal": 65.3,
        "fertilityPct": 65,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Muy Alto",
        "coverage": "36% Cobertura Ruta 3280",
        "coverageVal": 36,
        "coverageGap": 64,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Alta (64%)",
        "inactionCost": "USD 160 Millones/año",
        "inactionVal": 160,
        "inactionScale": 82,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 160 M/año (Alta tasa de uniones)",
        "priority": "Prevención comunitaria de uniones tempranas y programas de retención escolar en colegios públicos."
      },
      "Antioquia": {
        "label": "Antioquia (Andina)",
        "fertility": "49.8 por 1,000",
        "fertilityVal": 49.8,
        "fertilityPct": 50,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-amber-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Moderado-Alto",
        "coverage": "54% Cobertura Ruta 3280",
        "coverageVal": 54,
        "coverageGap": 46,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Subregional (46%)",
        "inactionCost": "USD 380 Millones/año",
        "inactionVal": 380,
        "inactionScale": 95,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 380 M/año (Bajo Cauca y Urabá)",
        "priority": "Focalización en subregiones de Urabá y Bajo Cauca; fortalecimiento de la cátedra de educación sexual en Medellín."
      },
      "Bogota": {
        "label": "Bogotá D.C. (Distrito Capital)",
        "fertility": "36.4 por 1,000",
        "fertilityVal": 36.4,
        "fertilityPct": 36,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-yellow-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Moderado",
        "coverage": "68% Cobertura Ruta 3280",
        "coverageVal": 68,
        "coverageGap": 32,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Urbana (32%)",
        "inactionCost": "USD 520 Millones/año",
        "inactionVal": 520,
        "inactionScale": 100,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 520 M/año (Mayor volumen nacional)",
        "priority": "Atención intensiva en localidades de Ciudad Bolívar, Bosa y Usme; prevención de violencia digital y acceso expedito a IVE."
      }
    },
    "manifestoTitle": "7. Manifiesto Legislativo y Agenda de Política Pública para Colombia (5 Puntos)",
    "cardsEn": {
      "c1": {
        "tag": "CRITICAL URGENCY",
        "title": "Pregnancy in Girls Under 15: Sexual Violence",
        "desc": "100% of pregnancies in children under 15 are statutory rape. Inaction perpetuates cycles of impunity and structural vulnerability."
      },
      "c2": {
        "tag": "SOCIAL IMPACT",
        "title": "Early Fertility and Compounded Opportunity Loss",
        "desc": "Early motherhood severely cuts lifetime earnings and truncates educational progression across generations."
      },
      "c3": {
        "tag": "HEALTH BARRIER",
        "title": "Gaps in Modern Contraceptive Delivery and LARCs",
        "desc": "Inconsistent availability of Long-Acting Reversible Contraceptives (implants, IUDs) in primary care clinics."
      }
    },
    "roiEn": {
      "roi1": {
        "title": "Loss Due to Inaction",
        "desc": "Aggregate lifetime economic burden in public health, school dropout, and forfeited labor income."
      },
      "roi2": {
        "title": "Return on Investment (ROI)",
        "desc": "For every $1 invested in adolescent pregnancy prevention, between $4.80 and $11.00 is returned."
      }
    },
    "lawsEn": {
      "l1": {
        "tag": "BINDING",
        "title": "Andean Plan PLANEA 2025-2030 Mandate",
        "desc": "Zero Tolerance commitments and fertility rate reduction targets by 2030."
      },
      "l2": {
        "tag": "CONSTITUTIONAL",
        "title": "Guarantee of Rights and Comprehensive Health",
        "desc": "Universal access to contraceptives and sexual violence response without discrimination."
      },
      "l3": {
        "tag": "FISCAL",
        "title": "Ring-Fenced Budget Allocation",
        "desc": "Protected and tagged resources for youth-friendly clinics and community prevention."
      }
    },
    "explorerTitleEn": "6. Territorial Indicators Explorer of Colombia",
    "explorerSubtitleEn": "Territorialized diagnosis of fertility rates, clinic accreditation, and cost of inaction.",
    "manifestoTitleEn": "7. Legislative Manifesto and Public Policy Agenda for Colombia (5 Points)",
    "manifestoItemsEn": [
      "1. Ring-fenced budget allocation in the Annual Budget Law for child and adolescent pregnancy prevention.",
      "2. Binding intersectoral Zero Tolerance protocol in girls under 15 and immediate response to sexual violence.",
      "3. Universal and barrier-free access to Long-Acting Reversible Contraceptives (LARCs) across all primary healthcare clinics.",
      "4. Mandatory implementation of Comprehensive Sexuality Education (CSE) with intercultural and gender-sensitive approaches.",
      "5. Accountability and oversight mechanism led by the National Ombudsperson Office and civil society organizations."
    ],
    "manifestoItems": [
      "1. Financiamiento prioritario en el Presupuesto General de la Nación para el Plan PAREMM y Ruta 3280.",
      "2. Implementación integral de la Resolución 309 de 2025 en todas las EPS e IPS públicas y privadas del país.",
      "3. Garantía de acceso efectivo y sin barreras a la Interrupción Voluntaria del Embarazo (IVE) y métodos LARC.",
      "4. Fortalecimiento de la cátedra obligatoria de educación sexual en colegios públicos y rurales.",
      "5. Atención focalizada con enfoque diferencial en municipios PDET, comunidades étnicas y población migrante."
    ],
    "sources": [
      {
        "id": "REF-PLANEA-2025",
        "tag": "ORAS-CONHU",
        "year": "2024",
        "title": "Plan Andino (PLANEA 2025-2030)",
        "desc": "Matriz multisectorial de metas andinas para la prevención del embarazo adolescente en los 6 países miembros."
      },
      {
        "id": "REF-MILENA-CO",
        "tag": "UNFPA COLOMBIA",
        "year": "2020",
        "title": "Estudio MILENA Colombia",
        "desc": "Consecuencias socioeconómicas del embarazo adolescente en Colombia. Pérdida estimada en USD 2,549M anuales (0.58% PIB)."
      },
      {
        "id": "REF-RES-309-2025",
        "tag": "MINSALUD COLOMBIA",
        "year": "Res. 309 de 2025",
        "title": "Lineamientos de Información y Decisión en Salud",
        "desc": "Derecho de adolescentes a la información y notificación obligatoria inmediata ante sospecha de violencia sexual."
      },
      {
        "id": "REF-RES-3280",
        "tag": "MINSALUD",
        "year": "Res. 3280 de 2018",
        "title": "Ruta Integral de Atención Materno Perinatal",
        "desc": "Lineamientos de obligatorio cumplimiento para la atención preconcepcional, de gestación y parto en Colombia."
      },
      {
        "id": "REF-SENTENCIA-IVE",
        "tag": "CORTE CONSTITUCIONAL",
        "year": "Sentencia C-055/2022",
        "title": "Despenalización del Aborto hasta Semana 24",
        "desc": "Reconocimiento constitucional de la autonomía reproductiva de las mujeres y personas gestantes en Colombia."
      },
      {
        "id": "REF-SALUD-MATERNA",
        "tag": "UNFPA / OPS",
        "year": "Reporte 2026",
        "title": "Informe de Salud Materna y Adolescente",
        "desc": "Reporte consolidado de TEFA (55.8/1k) y razón de mortalidad materna en adolescentes en el Área Andina."
      }
    ],
    "heroDescAy": "Congreso de la República, Ministerio de Hacienda wan Departamentos ukanakatak qillqa <strong>Ruta Materno Perinatal</strong> wan jan lurawina chhaqawipata.",
    "heroDescGn": "Congreso de la República, Min. Hacienda ha Tetãvorekuérape g̃uarã marandu <strong>Ruta Materno Perinatal</strong> ha viru kañy rehegua.",
    "heroDescArn": "Congreso, Min. Hacienda ka Mapu Longko mew kisu kimün <strong>Ruta Materno Perinatal</strong> mew.",
    "heroDescQvi": "Congreso, Min. Hacienda wan Llaktakuna nisqapaq killka <strong>Ruta Materno Perinatal</strong> yachaymanta.",
    "heroDescGuc": "Apalirawaa Congress, Min. Hacienda je Mmapa'a süpüla <strong>Ruta Materno Perinatal</strong> je walawaa anaa.",
    "heroDescWra": "Congreso, Min. Hacienda aribo <strong>Ruta Materno Perinatal</strong> obonoba.",
    "heroDescPmn": "Congreso, Min. Hacienda mai <strong>Ruta Materno Perinatal</strong> kure pe.",
    "heroDescPbb": "Congreso, Min. Hacienda yu'çeçx <strong>Ruta Materno Perinatal</strong> ku'j we'sx.",
    "heroDescEmp": "Congreso, Min. Hacienda bedéa <strong>Ruta Materno Perinatal</strong> wẽra warrade.",
    "heroDescAsh": "Congreso, Min. Hacienda ñañantsi <strong>Ruta Materno Perinatal</strong> eentsite.",
    "heroDescAgr": "Congreso, Min. Hacienda chicham <strong>Ruta Materno Perinatal</strong> datsajum.",
    "heroDescJiv": "Congreso, Min. Hacienda chicham <strong>Ruta Materno Perinatal</strong> natsa.",
    "heroDescRap": "Puka haka tere no te Congreso, Min. Hacienda 'e Kāiŋa mo te <strong>Ruta Materno Perinatal</strong>.",
    "siteTitleGuc": "Apalirawaa Politica: Jintüi Asitnushii Katataaka Colombia",
    "siteTitlePbb": "Yu'çeçx Politica: Ku'j We'sx Thegnikha's Colombia",
    "siteTitleEmp": "Bedéa Politica: Wẽra Warrade Colombia",
    "manifestoTitleQu": "7. Kamachiy Qillqa wan Política Pública Agenda Colombia Suyupaq (5 Puntos)",
    "manifestoItemsQu": [
      "1. Ley de Presupuesto Anual nisqapi wawa chichuy hark'anapaq qullqi t'aqayta takyachiy.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia kamachiy wan maqanakuyta utqaylla hark'ay.",
      "3. LARC unaypaq hampiyninkunata sapa postapi mana qullqillawan qoy.",
      "4. Educación Sexual Integral (ESI) yachachiyta intercultural wan runasimipi hunt'achiy.",
      "5. Defensoría del Pueblo wan ayllukunawan kuska qillqata qhaway wan hunt'achiy."
    ],
    "cardsQu": {
      "c1": {
        "tag": "ANCHA HATUN LLAKI",
        "title": "15 Watamanta Uray Sipaskunapi Chichuy: Maqanakuy",
        "desc": "15 watamanta uray wawakunapi chichuyqa violación qallariyniyuqmi. Mana allichasqaqa llakitam mirachin."
      },
      "c2": {
        "tag": "AYLLUPI CHINKAY",
        "title": "Wawa Kaspa Chichuy wan Yachay Chinkachiy",
        "desc": "Wawallaraq wawayuq kayqa yachaykunata qulluchin wan kawsay qullqita anchata pisiyachin."
      },
      "c3": {
        "tag": "HAMPI WASI PISIY",
        "title": "LARC wan Moderno Hampikuna Mana Aypay",
        "desc": "Postakunapi wan ayllu hampiwesikunapi implante wan DIU mana aypanchu."
      }
    },
    "roiQu": {
      "roi1": {
        "title": "Mana Ruraypa Chinkachiynin",
        "desc": "Hampi wasi gastokuna, yachay saqiy wan qullqi mana chaskisqakuna."
      },
      "roi2": {
        "title": "Qullqi Kutimuynin (ROI)",
        "desc": "Sapa $1 churamusqamanta, $4.80 - $11.00 kutimun ayllupaq wan suyupaq."
      }
    },
    "lawsQu": {
      "l1": {
        "tag": "KAMACHIY",
        "title": "Plan Andino PLANEA 2025-2030 Kamachiy",
        "desc": "Cero Tolerancia wan fecundidad pisiyachiy 2030 watapaq."
      },
      "l2": {
        "tag": "HATUN KAMACHIY",
        "title": "Derechos wan Allin Kawsay Amachay",
        "desc": "Tukuy runapaq LARC hampikuna wan maqanakuy hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHIY",
        "title": "Qullqi T'aqay Takyachiy",
        "desc": "Ayllu postakunapaq qullqi waqaychasqa."
      }
    },
    "manifestoTitleAy": "7. Suyu Kamachi Qillqa wan Políticas Públicas Colombia Suyutaki (5 Puntos)",
    "manifestoItemsAy": [
      "1. Ley de Presupuesto Anual ukan sapürunjama qullqi t'aqawi imillanaka usuriptawi jark'aqañataki.",
      "2. 15 marat jisk'anakan Cero Tolerancia protocolos wan jank'aki qullayawi comisaríanakana.",
      "3. LARC unay qullañanaka taqi qullañ utanakana inaki churaña.",
      "4. Educación Sexual Integral (ESI) yatichawi intercultural wan aymar aruna phuqhaña.",
      "5. Defensoría del Pueblo yanapirinakampi qhawawi wan amachawi luraña."
    ],
    "cardsAy": {
      "c1": {
        "tag": "SINTIPUNI AXSARAWI",
        "title": "15 Marat Jisk'anakan Usuriptawi: Nuwasiña",
        "desc": "15 marat jisk'anakan usuriptawipax nuwasiñat jutiriwa. Jan askichatax jach'a llakiwa."
      },
      "c2": {
        "tag": "JAQI CHHAQAWI",
        "title": "Nayra Usuriptawi wan Yatichawi Chhaqawi",
        "desc": "Imillanaka usuriptawipax yatichawi qulluchiwa wan jakawi qullqi pisiyaptayi."
      },
      "c3": {
        "tag": "QULLAÑA UTAN PISI",
        "title": "LARC wan Moderno Qullanaka Jan Aypawi",
        "desc": "Qullañ utanakana implante wan DIU qullanakax janiw aypkiti."
      }
    },
    "roiAy": {
      "roi1": {
        "title": "Jan Lurawina Chhaqawipa",
        "desc": "Qullañ uta gastonaka, yatichawi jaytawi wan qullqi jan jikxatatanaka."
      },
      "roi2": {
        "title": "Qullqi Kutt'awi (ROI)",
        "desc": "Sapa $1 churatanakampi, $4.80 - $11.00 kutt'ani suyunakataki."
      }
    },
    "lawsAy": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan usuriptawi jisk'aptayaña 2030 marataki."
      },
      "l2": {
        "tag": "JACH'A KAMACHI",
        "title": "Derechos wan Qullañ Amachawi",
        "desc": "Taqinitak LARC qullanaka wan nuwasiña jark'aqaña."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'aqawi Imxatata",
        "desc": "Qullañ utanakataki qullqi amachatapuni."
      }
    },
    "manifestoTitleGn": "7. Tetã Rerekua Kuatia ha Políticas Públicas Colombia-pe g̃uarã (5 Puntos)",
    "manifestoItemsGn": [
      "1. Viru mohenda Ley de Presupuesto Anual-pe mitãkuña usuriptawi jark'aqa hag̃ua.",
      "2. Cero Tolerancia protocols 15 ary guýpe ha ñangareko pya'e violencia sexual rehe.",
      "3. LARC pohã ñeme'ẽ opavave tasyo ha puesto de salud rupive.",
      "4. Educación Sexual Integral (ESI) mbo'epy hekopete guaraníme ha castellánope.",
      "5. Defensoría del Pueblo ha tetãygua aty ñemongeta ha jehechajey."
    ],
    "cardsGn": {
      "c1": {
        "tag": "KYHYJE GUASU",
        "title": "Mitãkuña 15 Ary Guýpe Usuriptawi: Ñerairõ",
        "desc": "100% mitãkuña 15 ary guýpe hyeguáva oñembotavy rupi. Tekotevẽ ñangareko pya'e."
      },
      "c2": {
        "tag": "TEKO KAÑY",
        "title": "Mitãkuña Memby ha Tekoasy",
        "desc": "Mitãkuña memby ogueru tekoasy ha ombopaha mbo'epy heñóva."
      },
      "c3": {
        "tag": "TASYÓPE KAÑY",
        "title": "LARC ha Anticonceptivos Pokã",
        "desc": "Tasyo michĩvape ndaipóri implante ha DIU mitãkuñáme g̃uarã."
      }
    },
    "roiGn": {
      "roi1": {
        "title": "Viru Kañy",
        "desc": "Tasyo gasto, mbo'epy jejayei ha viru ndohupytýiva."
      },
      "roi2": {
        "title": "Viru Jehevy (ROI)",
        "desc": "Peteĩ $1 emoĩvape g̃uarã, $4.80 - $11.00 ojevy tetãme."
      }
    },
    "lawsGn": {
      "l1": {
        "tag": "TEKO ME'Ẽ",
        "title": "Plan Andino PLANEA 2025-2030 Teko",
        "desc": "Cero Tolerancia ha fecundidad guejy 2030 arype."
      },
      "l2": {
        "tag": "TETÃ ME'Ẽ",
        "title": "Derécho ha Tesãi Ñangareko",
        "desc": "LARC pohã opavavépe ha ñerairõ jark'a."
      },
      "l3": {
        "tag": "VIRU ME'Ẽ",
        "title": "Viru Mohenda Ñangareko",
        "desc": "Tasyo michĩvape viru oñemohendáva."
      }
    },
    "manifestoTitleArn": "7. Ngülamtun Politica Dungu Agenda Colombia Mew (5 Puntos)",
    "manifestoItemsArn": [
      "1. Kisu Presupuesto Ley de Presupuesto Anual mew wechekeche koñin kuñiwtual.",
      "2. Cero Tolerancia protocolos 15 tripantu pichikeche kuñiwtual kom posta mew.",
      "3. LARC kuñiwtun lawen kom pu centro de salud mew nieal.",
      "4. Educación Sexual Integral (ESI) küme kimün kom chillkatuwe mapudungun mew.",
      "5. Defensoría del Pueblo ka lof che mew kisu kuñiwtun dungu."
    ],
    "cardsArn": {
      "c1": {
        "tag": "AÑKEN DUNGU",
        "title": "15 Tripantu Pichikeche Koñin: Weda Dungu",
        "desc": "Kom 15 tripantu pichikeche koñin niey weda dungu mew. Kuñiwtual tañi mongen."
      },
      "c2": {
        "tag": "MAPU MEW KAÑY",
        "title": "Wechekeche Koñin ka Kimün Ngelay",
        "desc": "Wechekeche koñin niey mew fey kimün ngelay ka kulliñ pisiyachi."
      },
      "c3": {
        "tag": "LAWENTUWE PISI",
        "title": "LARC ka Küme Lawen Ngelay",
        "desc": "Posta mew implante ka DIU ngelay wechekeche domo mew."
      }
    },
    "roiArn": {
      "roi1": {
        "title": "Kisu Femnon Mew Kulliñ",
        "desc": "Lawentuwe gasto, chillkatuwe ngelay ka kulliñ kañy."
      },
      "roi2": {
        "title": "Kulliñ Wiñol (ROI)",
        "desc": "Fill $1 kulliñ mew, $4.80 - $11.00 wiñoy mapu mew."
      }
    },
    "lawsArn": {
      "l1": {
        "tag": "NGÜLAM",
        "title": "Plan Andino PLANEA 2025-2030 Ngülam",
        "desc": "Cero Tolerancia ka wechekeche koñin ngelay 2030 tripantu mew."
      },
      "l2": {
        "tag": "FÜTRA NGÜLAM",
        "title": "Derechos ka Küme Mongen",
        "desc": "Kom che mew LARC lawen ka weda dungu kuñiwtun."
      },
      "l3": {
        "tag": "KULLIÑ NGÜLAM",
        "title": "Kulliñ Kuñiwtun",
        "desc": "Posta mew kulliñ kuñiwtual."
      }
    },
    "manifestoTitleQvi": "7. Llaktapa Kamachi Killka Agenda Colombia Llaktapi (5 Puntos)",
    "manifestoItemsQvi": [
      "1. Ley de Presupuesto ukupi wawa chichuy hark'ankapak qullqi t'akayta sinyachina.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia protocolos wan utka yanapana.",
      "3. LARC unaypa hampikunata tukuy hampiwasi ukupi llukshichina.",
      "4. Educación Sexual Integral (ESI) yachana wasikunapi kichwapi paktachina.",
      "5. Defensoría del Pueblo wan llaktakunawan kuska killkata rikuriy."
    ],
    "cardsQvi": {
      "c1": {
        "tag": "YAPA JATUN LLAKI",
        "title": "15 Watamanta Uray Wawa Chichuy: Llaki",
        "desc": "15 watamanta uray wawakunapi chichuyqa llakiyuqmi. Mana allichaspaqa llakitami mirachin."
      },
      "c2": {
        "tag": "LLAKTA PISI",
        "title": "Wawa Chichuy wan Yachay Chinkay",
        "desc": "Wawa chichuyka yachayta pishiyachin wan kawsayta llakichin."
      },
      "c3": {
        "tag": "HAMPIWASI PISI",
        "title": "LARC wan Hampikuna Mana Tiyay",
        "desc": "Hampiwasi ukupi implante wan DIU mana aypanchu."
      }
    },
    "roiQvi": {
      "roi1": {
        "title": "Mana Ruraypa Chinkaynin",
        "desc": "Hampiwasi gastokuna, yachay sakiy wan kawsay qullqi pisi."
      },
      "roi2": {
        "title": "Qullqi Kutiy (ROI)",
        "desc": "Sapa $1 churashkamanta, $4.80 - $11.00 kutin llaktapaq."
      }
    },
    "lawsQvi": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan wawa chichuy pisi 2030 watapak."
      },
      "l2": {
        "tag": "JATUN KAMACHI",
        "title": "Derechos wan Alli Kawsay",
        "desc": "Tukuykunapak LARC hampikuna wan llaki hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'akay",
        "desc": "Hampiwasi ukupi qullqi charina."
      }
    },
    "manifestoTitleGuc": "7. Apalirawaa Politica Agenda Colombia (5 Puntos)",
    "manifestoItemsGuc": [
      "1. Walawaa presupuestal süpüla jintüi asitnushii katataaka Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos süpüla 15 juyamüin jintüin je anaa.",
      "3. LARC anticonceptivos tü taashii süpüla mmapa'a.",
      "4. Educación Sexual Integral (ESI) wayuunaikiru'u ekirajaapülee.",
      "5. Defensoría del Pueblo je wayuu akaliojiraa."
    ],
    "cardsGuc": {
      "c1": {
        "tag": "MÜLIAA MÜSIA",
        "title": "15 Juyamüin Jintüi Asitnushii: Müliaa",
        "desc": "15 juyamüin jintüin asitnushii katataaka. Cho'ujaasü akaliojiraa süpüla anaa."
      },
      "c2": {
        "tag": "MMAPA'A PISI",
        "title": "Jintüi Katataaka je Ekirajaapülee Chinkay",
        "desc": "Jintüi asitnushii ekirajaapülee chinkachi."
      },
      "c3": {
        "tag": "ANAA AYATAWAA",
        "title": "LARC je Anticonceptivos Pokã",
        "desc": "Posta je centro de salud nojotshi implante süpüla jintüi."
      }
    },
    "roiGuc": {
      "roi1": {
        "title": "Walawaa Chinkay",
        "desc": "Centro de salud gasto, ekirajaapülee chinkay."
      },
      "roi2": {
        "title": "Walawaa Anaa (ROI)",
        "desc": "Süpüla $1 walawaa, $4.80 - $11.00 anaa mmapa'a."
      }
    },
    "lawsGuc": {
      "l1": {
        "tag": "PÜTCHI",
        "title": "Plan Andino PLANEA 2025-2030 Pütchi",
        "desc": "Cero Tolerancia je jintüi asitnushii katataaka 2030."
      },
      "l2": {
        "tag": "ANAA PÜTCHI",
        "title": "Derechos je Anaa",
        "desc": "Mmapa'a LARC anticonceptivos je müliaa jark'a."
      },
      "l3": {
        "tag": "WALAWA PÜTCHI",
        "title": "Walawaa Presupuesto",
        "desc": "Posta walawaa anaa."
      }
    },
    "manifestoTitleWra": "7. Obonoba Politica Agenda Colombia (5 Puntos)",
    "manifestoItemsWra": [
      "1. Presupuesto aribo iboma asidaja obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata sanuka iboma.",
      "3. LARC anticonceptivos kokotune hanoko.",
      "4. Educación Sexual Integral (ESI) warao aribo eskuela.",
      "5. Defensoría aribo nomewitu sanuka."
    ],
    "cardsWra": {
      "c1": {
        "tag": "OBONOBA SANUKA",
        "title": "15 Wata Sanuka Iboma Asidaja: Obonoba",
        "desc": "15 wata sanuka iboma asidaja obonoba nomewitu."
      },
      "c2": {
        "tag": "ARIBO SANUKA",
        "title": "Iboma Asidaja eskuela obonoba",
        "desc": "Iboma asidaja eskuela chinkachi."
      },
      "c3": {
        "tag": "HANOKO PISI",
        "title": "LARC Anticonceptivos Hanoko",
        "desc": "Hanoko sanuka implante nojotshi."
      }
    },
    "roiWra": {
      "roi1": {
        "title": "Obonoba Aribo Chinkay",
        "desc": "Hanoko gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Aribo Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa hanoko."
      }
    },
    "lawsWra": {
      "l1": {
        "tag": "ARIBO",
        "title": "Plan Andino PLANEA 2025-2030 Aribo",
        "desc": "Cero Tolerancia iboma asidaja 2030."
      },
      "l2": {
        "tag": "NOMIEWITU",
        "title": "Derechos je Hanoko",
        "desc": "LARC anticonceptivos hanoko kokotune."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Hanoko",
        "desc": "Hanoko sanuka aribo."
      }
    },
    "manifestoTitlePmn": "7. Politica Mai Agenda Colombia (5 Puntos)",
    "manifestoItemsPmn": [
      "1. Presupuesto mai murekon pimanse obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata murekon mai.",
      "3. LARC anticonceptivos kokotune pata'pï iwe.",
      "4. Educación Sexual Integral (ESI) pemón mai eskuela.",
      "5. Defensoría mai nomewitu murekon."
    ],
    "cardsPmn": {
      "c1": {
        "tag": "PATA'PÏ MAI",
        "title": "15 Wata Murekon Pimanse: Pata'pï",
        "desc": "15 wata murekon pimanse pata'pï mai."
      },
      "c2": {
        "tag": "MAI PITI",
        "title": "Murekon Pimanse eskuela mai",
        "desc": "Murekon pimanse eskuela chinkachi."
      },
      "c3": {
        "tag": "IWE PISI",
        "title": "LARC Anticonceptivos Iwe",
        "desc": "Pata'pï iwe implante nojotshi."
      }
    },
    "roiPmn": {
      "roi1": {
        "title": "Mai Piti Chinkay",
        "desc": "Pata'pï iwe gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Mai Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa iwe."
      }
    },
    "lawsPmn": {
      "l1": {
        "tag": "MAI",
        "title": "Plan Andino PLANEA 2025-2030 Mai",
        "desc": "Cero Tolerancia murekon pimanse 2030."
      },
      "l2": {
        "tag": "PATA'PÏ",
        "title": "Derechos je Iwe",
        "desc": "LARC anticonceptivos pata'pï iwe."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Iwe",
        "desc": "Pata'pï iwe mai."
      }
    },
    "manifestoTitlePbb": "7. Yu'çeçx Politica Agenda Colombia (5 Puntos)",
    "manifestoItemsPbb": [
      "1. Presupuesto nxusxi ku'j we'sx thegnikha's Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 vxite' ku'j we'sx.",
      "3. LARC yu'çeçx taashii ta'çxhab.",
      "4. Educación Sexual Integral (ESI) nasa yuwete ekirajaapülee.",
      "5. Defensoría del Pueblo thegnikha's."
    ],
    "cardsPbb": {
      "c1": {
        "tag": "KU'J WE'SX",
        "title": "15 Vxite' Ku'j Thegnikha's: Ku'j",
        "desc": "15 vxite' ku'j we'sx thegnikha's."
      },
      "c2": {
        "tag": "ÇXHAB PISI",
        "title": "Ku'j Thegnikha's eskuela çxhab",
        "desc": "Ku'j we'sx eskuela chinkachi."
      },
      "c3": {
        "tag": "YAÇK PISI",
        "title": "LARC Yu'çeçx Yaçk",
        "desc": "Yaçk taashii implante nojotshi."
      }
    },
    "roiPbb": {
      "roi1": {
        "title": "Ku'j We'sx Chinkay",
        "desc": "Yaçk gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Ku'j Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa çxhab."
      }
    },
    "lawsPbb": {
      "l1": {
        "tag": "YU'ÇEÇX",
        "title": "Plan Andino PLANEA 2025-2030 Yu'çeçx",
        "desc": "Cero Tolerancia ku'j we'sx 2030."
      },
      "l2": {
        "tag": "ÇXHAB",
        "title": "Derechos je Yaçk",
        "desc": "LARC yu'çeçx taashii ta'çxhab."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Çxhab",
        "desc": "Çxhab yaçk yu'çeçx."
      }
    },
    "manifestoTitleEmp": "7. Bedéa Politica Agenda Colombia (5 Puntos)",
    "manifestoItemsEmp": [
      "1. Presupuesto druade wẽra warrade Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 warrarãde wẽra.",
      "3. LARC anticonceptivos druade droma.",
      "4. Educación Sexual Integral (ESI) emberá bedéade eskuela.",
      "5. Defensoría del Pueblo druade bia."
    ],
    "cardsEmp": {
      "c1": {
        "tag": "KHARRA DRUADE",
        "title": "15 Warrarãde Wẽra: Kharra",
        "desc": "15 warrarãde wẽra kharra druade."
      },
      "c2": {
        "tag": "DRUA PISI",
        "title": "Wẽra Warrarã eskuela drua",
        "desc": "Wẽra warrarã eskuela chinkachi."
      },
      "c3": {
        "tag": "DROMA PISI",
        "title": "LARC Anticonceptivos Droma",
        "desc": "Droma implante nojotshi."
      }
    },
    "roiEmp": {
      "roi1": {
        "title": "Drua Bedéa Chinkay",
        "desc": "Droma gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Drua Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa drua."
      }
    },
    "lawsEmp": {
      "l1": {
        "tag": "BEDÉA",
        "title": "Plan Andino PLANEA 2025-2030 Bedéa",
        "desc": "Cero Tolerancia wẽra warrade 2030."
      },
      "l2": {
        "tag": "DRUA",
        "title": "Derechos je Droma",
        "desc": "LARC anticonceptivos druade droma."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Drua",
        "desc": "Druade droma bedéa."
      }
    },
    "manifestoTitleAsh": "7. Kametsari Politica Agenda Colombia (5 Puntos)",
    "manifestoItemsAsh": [
      "1. Presupuesto pankotsi eentsite kametsari Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 osarentsi eentsite.",
      "3. LARC anticonceptivos pankotsi maaroni.",
      "4. Educación Sexual Integral (ESI) asháninka ñañantsi eskuela.",
      "5. Defensoría del Pueblo eentsite kametsa."
    ],
    "cardsAsh": {
      "c1": {
        "tag": "KAMETSARIÑA",
        "title": "15 Osarentsi Eentsite: Kametsa",
        "desc": "15 osarentsi eentsite kametsariña."
      },
      "c2": {
        "tag": "PANKOTSI PISI",
        "title": "Eentsite eskuela pankotsi",
        "desc": "Eentsite eskuela chinkachi."
      },
      "c3": {
        "tag": "PANKOTSI PISI",
        "title": "LARC Anticonceptivos Pankotsi",
        "desc": "Pankotsi implante nojotshi."
      }
    },
    "roiAsh": {
      "roi1": {
        "title": "Pankotsi Kametsa Chinkay",
        "desc": "Pankotsi gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Pankotsi Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa pankotsi."
      }
    },
    "lawsAsh": {
      "l1": {
        "tag": "ÑAÑANTSI",
        "title": "Plan Andino PLANEA 2025-2030 Ñañantsi",
        "desc": "Cero Tolerancia eentsite 2030."
      },
      "l2": {
        "tag": "PANKOTSI",
        "title": "Derechos je Pankotsi",
        "desc": "LARC anticonceptivos pankotsi maaroni."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Pankotsi",
        "desc": "Pankotsi eentsite ñañantsi."
      }
    },
    "manifestoTitleAgr": "7. Datsajum Politica Agenda Colombia (5 Puntos)",
    "manifestoItemsAgr": [
      "1. Presupuesto apu datsajum pegker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 mijan datsajum.",
      "3. LARC anticonceptivos pegker jea.",
      "4. Educación Sexual Integral (ESI) awajún chicham eskuela.",
      "5. Defensoría del Pueblo datsajum pegker."
    ],
    "cardsAgr": {
      "c1": {
        "tag": "PEGKERCHAU",
        "title": "15 Mijan Datsajum: Pegkerchau",
        "desc": "15 mijan datsajum pegkerchau."
      },
      "c2": {
        "tag": "JEA PISI",
        "title": "Datsajum eskuela jea",
        "desc": "Datsajum eskuela chinkachi."
      },
      "c3": {
        "tag": "JEA PISI",
        "title": "LARC Anticonceptivos Jea",
        "desc": "Jea implante nojotshi."
      }
    },
    "roiAgr": {
      "roi1": {
        "title": "Datsajum Pegker Chinkay",
        "desc": "Jea gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Datsajum Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa jea."
      }
    },
    "lawsAgr": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia datsajum 2030."
      },
      "l2": {
        "tag": "JEA",
        "title": "Derechos je Jea",
        "desc": "LARC anticonceptivos pegker jea."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Jea",
        "desc": "Jea datsajum chicham."
      }
    },
    "manifestoTitleJiv": "7. Natsa Politica Agenda Colombia (5 Puntos)",
    "manifestoItemsJiv": [
      "1. Presupuesto uunt natsa penker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 uchin natsa.",
      "3. LARC anticonceptivos penker tsuwatai.",
      "4. Educación Sexual Integral (ESI) shuar chicham eskuela.",
      "5. Defensoría del Pueblo natsa penker."
    ],
    "cardsJiv": {
      "c1": {
        "tag": "PENKERCHAU",
        "title": "15 Uchin Natsa: Penkerchau",
        "desc": "15 uchin natsa penkerchau."
      },
      "c2": {
        "tag": "TSUWATAI PISI",
        "title": "Natsa eskuela tsuwatai",
        "desc": "Natsa eskuela chinkachi."
      },
      "c3": {
        "tag": "TSUWATAI PISI",
        "title": "LARC Anticonceptivos Tsuwatai",
        "desc": "Tsuwatai implante nojotshi."
      }
    },
    "roiJiv": {
      "roi1": {
        "title": "Natsa Penker Chinkay",
        "desc": "Tsuwatai gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Natsa Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa tsuwatai."
      }
    },
    "lawsJiv": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia natsa 2030."
      },
      "l2": {
        "tag": "TSUWATAI",
        "title": "Derechos je Tsuwatai",
        "desc": "LARC anticonceptivos penker tsuwatai."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Tsuwatai",
        "desc": "Tsuwatai natsa chicham."
      }
    },
    "manifestoTitleRap": "7. Vānaŋa Haka Oho Agenda mo Colombia (5 Puntos)",
    "manifestoItemsRap": [
      "1. Moni haka tere no te poki 'āpī hapu'a kore i roto i te Ley de Presupuesto Anual.",
      "2. Cero Tolerancia protocolos mo te poki o raro i te 15 matahiti.",
      "3. LARC anticonceptivos pāruru mo te kāiŋa.",
      "4. Educación Sexual Integral (ESI) 'ite i roto i te ha'api'ira'a vananga Rapa Nui.",
      "5. Defensoría de la Niñez pāruru mo te poki kāiŋa."
    ],
    "cardsRap": {
      "c1": {
        "tag": "RARI NUI",
        "title": "15 Matahiti Poki Hapu'a: Rari",
        "desc": "15 matahiti poki hapu'a kore rari nui."
      },
      "c2": {
        "tag": "KĀIŊA PISI",
        "title": "Poki Hapu'a ha'api'ira'a kāiŋa",
        "desc": "Poki hapu'a ha'api'ira'a chinkachi."
      },
      "c3": {
        "tag": "HARE PISI",
        "title": "LARC Anticonceptivos Hare",
        "desc": "Hare implante nojotshi."
      }
    },
    "roiRap": {
      "roi1": {
        "title": "Kāiŋa Moni Kore",
        "desc": "Hare gasto, ha'api'ira'a kore."
      },
      "roi2": {
        "title": "Moni Haka Oho (ROI)",
        "desc": "Mo te $1, $4.80 - $11.00 moni hoki mai."
      }
    },
    "lawsRap": {
      "l1": {
        "tag": "VĀNAŊA",
        "title": "Plan Andino PLANEA 2025-2030 Vānaŋa",
        "desc": "Cero Tolerancia poki hapu'a kore 2030."
      },
      "l2": {
        "tag": "KĀIŊA",
        "title": "Derechos je Hare",
        "desc": "LARC anticonceptivos pāruru mo te kāiŋa."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Kāiŋa",
        "desc": "Kāiŋa hare vānaŋa."
      }
    }
  },
  "ecuador": {
    "name": "Ecuador",
    "flag": "🇪🇨",
    "flagSvg": "<svg class=\"w-5 h-3.5 rounded inline-block object-cover flex-shrink-0 align-middle\" viewBox=\"0 0 640 480\"><defs><clipPath id=\"ec-hdr-clip\"><ellipse cx=\"320\" cy=\"242\" rx=\"54\" ry=\"68\"/></clipPath></defs><path fill=\"#FFD100\" d=\"M0 0h640v240H0z\"/><path fill=\"#0072CE\" d=\"M0 240h640v120H0z\"/><path fill=\"#ED1C24\" d=\"M0 360h640v120H0z\"/><g><line x1=\"220\" y1=\"140\" x2=\"420\" y2=\"340\" stroke=\"#718096\" stroke-width=\"4\"/><line x1=\"420\" y1=\"140\" x2=\"220\" y2=\"340\" stroke=\"#718096\" stroke-width=\"4\"/><polygon points=\"214,134 226,140 220,146\" fill=\"#CBD5E1\"/><polygon points=\"426,134 420,146 414,140\" fill=\"#CBD5E1\"/><path d=\"M235 170 C220 200 210 260 225 290 L265 290 C250 250 250 200 260 170 Z\" fill=\"#FFD100\"/><path d=\"M225 210 C215 240 210 270 220 295 L245 295 C235 270 235 240 245 210 Z\" fill=\"#0072CE\"/><path d=\"M218 245 C212 265 210 285 218 300 L232 300 C226 285 226 265 232 245 Z\" fill=\"#ED1C24\"/><path d=\"M405 170 C420 200 430 260 415 290 L375 290 C390 250 390 200 380 170 Z\" fill=\"#FFD100\"/><path d=\"M415 210 C425 240 430 270 420 295 L395 295 C405 270 405 240 395 210 Z\" fill=\"#0072CE\"/><path d=\"M422 245 C428 265 430 285 422 300 L408 300 C414 285 414 265 408 245 Z\" fill=\"#ED1C24\"/><path d=\"M260 200 Q250 240 265 285\" stroke=\"#15803D\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M380 200 Q390 240 375 285\" stroke=\"#16A34A\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M320 175 C270 145 230 140 205 155 C225 175 270 182 310 188 Z\" fill=\"#292524\"/><path d=\"M320 175 C370 145 410 140 435 155 C415 175 370 182 330 188 Z\" fill=\"#292524\"/><path d=\"M210 155 Q260 160 305 180 Q250 175 210 155 Z\" fill=\"#78716C\"/><path d=\"M430 155 Q380 160 335 180 Q390 175 430 155 Z\" fill=\"#78716C\"/><path d=\"M312 178 Q320 170 328 178 Q320 183 312 178 Z\" fill=\"#FFFFFF\"/><ellipse cx=\"320\" cy=\"164\" rx=\"8\" ry=\"11\" fill=\"#44403C\"/><polygon points=\"325,160 335,164 325,168\" fill=\"#F59E0B\"/><circle cx=\"323\" cy=\"162\" r=\"1.5\" fill=\"#FFFFFF\"/><g clip-path=\"url(#ec-hdr-clip)\"><rect x=\"250\" y=\"160\" width=\"140\" height=\"170\" fill=\"#60A5FA\"/><path d=\"M260 212 Q320 195 380 212\" stroke=\"#E2E8F0\" stroke-width=\"8\" fill=\"none\"/><circle cx=\"320\" cy=\"204\" r=\"11\" fill=\"#FBBF24\"/><path d=\"M320 189 L320 193 M320 215 L320 219 M305 204 L309 204 M331 204 L335 204 M309 193 L312 196 M328 212 L331 215 M309 215 L312 212 M328 196 L331 193\" stroke=\"#F59E0B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><path d=\"M260 270 Q290 250 320 222 Q350 250 380 270 Z\" fill=\"#166534\"/><polygon points=\"320,222 304,242 312,240 320,246 328,240 336,242\" fill=\"#FFFFFF\"/><path d=\"M304 242 L312 240 L320 246 L328 240 L336 242 L345 255 L295 255 Z\" fill=\"#CBD5E1\" opacity=\"0.6\"/><rect x=\"260\" y=\"265\" width=\"120\" height=\"50\" fill=\"#22C55E\"/><path d=\"M320 250 Q315 270 305 315 L335 315 Q325 270 320 250 Z\" fill=\"#2563EB\"/><rect x=\"312\" y=\"278\" width=\"16\" height=\"5\" rx=\"1.5\" fill=\"#DC2626\"/><rect x=\"317\" y=\"273\" width=\"6\" height=\"5\" fill=\"#FEF08A\"/><line x1=\"320\" y1=\"270\" x2=\"320\" y2=\"273\" stroke=\"#1E293B\" stroke-width=\"2\"/></g><ellipse cx=\"320\" cy=\"242\" rx=\"54\" ry=\"68\" stroke=\"#D97706\" stroke-width=\"5\" fill=\"none\"/><ellipse cx=\"320\" cy=\"242\" rx=\"51\" ry=\"65\" stroke=\"#FDE68A\" stroke-width=\"1.5\" fill=\"none\"/><rect x=\"282\" y=\"306\" width=\"76\" height=\"14\" rx=\"3\" fill=\"#78350F\"/><line x1=\"294\" y1=\"306\" x2=\"294\" y2=\"320\" stroke=\"#FBBF24\" stroke-width=\"2\"/><line x1=\"320\" y1=\"306\" x2=\"320\" y2=\"320\" stroke=\"#FBBF24\" stroke-width=\"2\"/><line x1=\"346\" y1=\"306\" x2=\"346\" y2=\"320\" stroke=\"#FBBF24\" stroke-width=\"2\"/><path d=\"M312 320 L320 334 L328 320 Z\" fill=\"#991B1B\"/></g></svg>",
    "badge": "Política PIPENA • PLANEA 2025-2030 🇪🇨",
    "siteTitle": "Plataforma de Incidencia Política: Prevención del Embarazo en Niñas y Adolescentes en Ecuador",
    "siteTitleEn": "Policy Advocacy Platform: Child & Adolescent Pregnancy Prevention in Ecuador",
    "siteTitleQu": "Suyu Kamachiy Qhawana: Wawa Chichuy Hark'ay Ecuador Suyupi",
    "endorsed": [
      "Min. Salud Pública",
      "ORAS-CONHU",
      "UNFPA Ecuador",
      "OPS/OMS"
    ],
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500'>Prevención del Embarazo en Niñas y Adolescentes en Ecuador</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500'>Pregnancy Prevention in Girls & Teens in Ecuador</span>",
    "heroTitleQu": "Mana Ruraypa Qullqi Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500'>Wawa Chichuy Hark'ay Ecuador Suyupi</span>",
    "heroDesc": "Evidencia actuarial para la <strong>Asamblea Nacional, MEF y Gobiernos Autónomos Descentralizados (GAD)</strong> sobre la ejecución de la PIPENA y servicios SAIAA.",
    "heroDescEn": "Actuarial evidence for the <strong>National Assembly, Ministry of Economy (MEF), and Local Governments (GAD)</strong> on PIPENA policy execution and SAIAA clinics.",
    "heroDescQu": "Asamblea Nacional, MEF wan GADkuna nisqapaq qillqa <strong>PIPENA yachaymanta</strong> wan SAIAA wasikunapaq.",
    "metrics": [
      {
        "val": "39.55 / 1,000",
        "lbl": "Tasa Fecundidad 15-19 (2024)",
        "lblEn": "Adolescent Fertility Rate (2024)",
        "lblQu": "Sipaskunapa Chichuynin (2024)"
      },
      {
        "val": "USD 221.6M",
        "lbl": "Costo Inacción Anual (0.26% PIB)",
        "lblEn": "Annual Inaction Cost (0.26% GDP)",
        "lblQu": "Sapa Wata Chinkachiy (0.26% PIB)"
      },
      {
        "val": "85.64 / 1,000",
        "lbl": "Fecundidad Crítica en Amazonía (Napo)",
        "lblEn": "Amazon Peak Fertility (Napo)",
        "lblQu": "Amazonia Fecundidad (Napo)"
      },
      {
        "val": "USD 76.9M",
        "lbl": "Gasto Directo en Salud Asistencial",
        "lblEn": "Direct Healthcare Spending",
        "lblQu": "Hampina Wasikunapa Gastón"
      }
    ],
    "cards": {
      "c1": {
        "tag": "AMAZONÍA EN EMERGENCIA",
        "title": "Napo (85.6) y Morona Santiago (72.6 por 1,000)",
        "desc": "Las provincias amazónicas de Ecuador duplican la tasa nacional debido a barreras geográficas, dispersión de postas y naturalización cultural de uniones tempranas."
      },
      "c2": {
        "tag": "EMBARAZO INFANTIL ES VIOLACIÓN",
        "title": "COIP Art. 171: 100% de Embarazos <14 son Violación",
        "desc": "El Código Orgánico Integral Penal tipifica todo embarazo en menores de 14 años como violación. En Morona Santiago la tasa en niñas menores de 14 años alcanza 5.85 por cada 1,000."
      },
      "c3": {
        "tag": "SERVICIOS AMIGABLES SAIAA",
        "title": "Acreditación de Servicios de Salud y Clubes",
        "desc": "Universalizar los Servicios de Atención Integral y Amigable para Adolescentes (SAIAA) en centros del Ministerio de Salud Pública con dotación asegurada de implantes LARC."
      }
    },
    "roi": {
      "roi1": {
        "title": "Costo Socioeconómico de la Inacción: USD 221.6 Millones",
        "desc": "Equivale al 0.26% del PIB de Ecuador (USD 221.6M al año). Pérdida salarial para las mujeres (USD 131.9M), desempleo (USD 54.8M) y rezago escolar (USD 27.8M)."
      },
      "roi2": {
        "title": "Gasto en Salud y Desbalance Fiscal: USD 86.4 Millones",
        "desc": "El Ministerio de Salud Pública destina USD 76.9M a la atención obstétrica de urgencia y el Estado deja de recaudar USD 9.5M en IVA y Renta por menor inserción formal."
      }
    },
    "laws": {
      "l1": {
        "tag": "POLÍTICA INTERSECTORIAL",
        "title": "Política PIPENA 2018-2025",
        "desc": "Articula a los Ministerios de Salud, Educación, Inclusión Económica (MIES) y Derechos Humanos para prevenir el embarazo temprano."
      },
      "l2": {
        "tag": "DERECHO A LA EDUCACIÓN",
        "title": "Ley Orgánica de Educación Intercultural (LOEI)",
        "desc": "Prohíbe sancionar, suspender o excluir a estudiantes en estado de embarazo o maternidad, garantizando su permanencia escolar."
      },
      "l3": {
        "tag": "PROTECCIÓN Y JUSTICIA",
        "title": "Ley Orgánica Violencia Mujeres & Ley IVE 2022",
        "desc": "Reconoce el embarazo temprano como violencia y regula el acceso a la interrupción voluntaria del embarazo en casos de violación."
      }
    },
    "explorerTitle": "6. Explorador Informativo de Indicadores por Provincias de Ecuador",
    "explorerSubtitle": "Diagnóstico territorial de tasas de fecundidad, cobertura SAIAA y costo de inacción.",
    "regions": {
      "Napo": {
        "label": "Napo (Amazonía)",
        "fertility": "85.64 por 1,000",
        "fertilityVal": 85.6,
        "fertilityPct": 86,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Extremo",
        "coverage": "20% Servicios SAIAA",
        "coverageVal": 20,
        "coverageGap": 80,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Crítica (80%)",
        "inactionCost": "USD 18 Millones/año",
        "inactionVal": 18,
        "inactionScale": 65,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 18 M/año (Tasa más alta nacional)",
        "priority": "Plan de emergencia en comunidades Kichwa, brigadas fluviales de salud sexual y provisión de implantes subdérmicos."
      },
      "MoronaSantiago": {
        "label": "Morona Santiago (Amazonía Sur)",
        "fertility": "72.65 por 1,000",
        "fertilityVal": 72.6,
        "fertilityPct": 73,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Extremo",
        "coverage": "24% Servicios SAIAA",
        "coverageVal": 24,
        "coverageGap": 76,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Severa (76%)",
        "inactionCost": "USD 16 Millones/año",
        "inactionVal": 16,
        "inactionScale": 60,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 16 M/año (Tasa <14 años: 5.85/1k)",
        "priority": "Intervención prioritaria ante la tasa más elevada de embarazo infantil (<14 años) con enfoque intercultural Shuar y Achuar."
      },
      "Pastaza": {
        "label": "Pastaza (Amazonía Central)",
        "fertility": "67.81 por 1,000",
        "fertilityVal": 67.8,
        "fertilityPct": 68,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Muy Alto",
        "coverage": "28% Servicios SAIAA",
        "coverageVal": 28,
        "coverageGap": 72,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Alta (72%)",
        "inactionCost": "USD 14 Millones/año",
        "inactionVal": 14,
        "inactionScale": 55,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 14 M/año (Pueblos indígenas)",
        "priority": "Articulación con parteras comunitarias y facilitadores interculturales de salud reproductiva."
      },
      "Esmeraldas": {
        "label": "Esmeraldas (Costa Norte)",
        "fertility": "61.41 por 1,000",
        "fertilityVal": 61.4,
        "fertilityPct": 61,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Muy Alto",
        "coverage": "32% Servicios SAIAA",
        "coverageVal": 32,
        "coverageGap": 68,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Alta (68%)",
        "inactionCost": "USD 26 Millones/año",
        "inactionVal": 26,
        "inactionScale": 75,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 26 M/año (Alta vulnerabilidad costera)",
        "priority": "Protección contra violencia sexual en contextos de inseguridad territorial y expansión de clubes de adolescentes."
      },
      "Orellana": {
        "label": "Orellana (Amazonía Norte)",
        "fertility": "58.90 por 1,000",
        "fertilityVal": 58.9,
        "fertilityPct": 59,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-amber-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Alto",
        "coverage": "30% Servicios SAIAA",
        "coverageVal": 30,
        "coverageGap": 70,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Alta (70%)",
        "inactionCost": "USD 15 Millones/año",
        "inactionVal": 15,
        "inactionScale": 58,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 15 M/año (Zona petrolera/rural)",
        "priority": "Capacitación a profesionales de atención primaria y acceso confidencial a anticoncepción oral y de emergencia."
      },
      "Guayas": {
        "label": "Guayas (Costa / Guayaquil)",
        "fertility": "42.10 por 1,000",
        "fertilityVal": 42.1,
        "fertilityPct": 42,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-yellow-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Moderado",
        "coverage": "52% Servicios SAIAA",
        "coverageVal": 52,
        "coverageGap": 48,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Urbana (48%)",
        "inactionCost": "USD 85 Millones/año",
        "inactionVal": 85,
        "inactionScale": 100,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> USD 85 M/año (Mayor volumen absoluto)",
        "priority": "Atención intensiva en distritos urbano-marginales de Guayaquil, prevención de embarazos subsecuentes y soporte escolar."
      }
    },
    "manifestoTitle": "7. Manifiesto Legislativo y Agenda de Política Pública para Ecuador (5 Puntos)",
    "cardsEn": {
      "c1": {
        "tag": "CRITICAL URGENCY",
        "title": "Pregnancy in Girls Under 15: Sexual Violence",
        "desc": "100% of pregnancies in children under 15 are statutory rape. Inaction perpetuates cycles of impunity and structural vulnerability."
      },
      "c2": {
        "tag": "SOCIAL IMPACT",
        "title": "Early Fertility and Compounded Opportunity Loss",
        "desc": "Early motherhood severely cuts lifetime earnings and truncates educational progression across generations."
      },
      "c3": {
        "tag": "HEALTH BARRIER",
        "title": "Gaps in Modern Contraceptive Delivery and LARCs",
        "desc": "Inconsistent availability of Long-Acting Reversible Contraceptives (implants, IUDs) in primary care clinics."
      }
    },
    "roiEn": {
      "roi1": {
        "title": "Loss Due to Inaction",
        "desc": "Aggregate lifetime economic burden in public health, school dropout, and forfeited labor income."
      },
      "roi2": {
        "title": "Return on Investment (ROI)",
        "desc": "For every $1 invested in adolescent pregnancy prevention, between $4.80 and $11.00 is returned."
      }
    },
    "lawsEn": {
      "l1": {
        "tag": "BINDING",
        "title": "Andean Plan PLANEA 2025-2030 Mandate",
        "desc": "Zero Tolerance commitments and fertility rate reduction targets by 2030."
      },
      "l2": {
        "tag": "CONSTITUTIONAL",
        "title": "Guarantee of Rights and Comprehensive Health",
        "desc": "Universal access to contraceptives and sexual violence response without discrimination."
      },
      "l3": {
        "tag": "FISCAL",
        "title": "Ring-Fenced Budget Allocation",
        "desc": "Protected and tagged resources for youth-friendly clinics and community prevention."
      }
    },
    "explorerTitleEn": "6. Territorial Indicators Explorer of Ecuador",
    "explorerSubtitleEn": "Territorialized diagnosis of fertility rates, clinic accreditation, and cost of inaction.",
    "manifestoTitleEn": "7. Legislative Manifesto and Public Policy Agenda for Ecuador (5 Points)",
    "manifestoItemsEn": [
      "1. Ring-fenced budget allocation in the Annual Budget Law for child and adolescent pregnancy prevention.",
      "2. Binding intersectoral Zero Tolerance protocol in girls under 15 and immediate response to sexual violence.",
      "3. Universal and barrier-free access to Long-Acting Reversible Contraceptives (LARCs) across all primary healthcare clinics.",
      "4. Mandatory implementation of Comprehensive Sexuality Education (CSE) with intercultural and gender-sensitive approaches.",
      "5. Accountability and oversight mechanism led by the National Ombudsperson Office and civil society organizations."
    ],
    "manifestoItems": [
      "1. Asignación de recursos etiquetados en el Presupuesto General del Estado para la continuidad de la PIPENA.",
      "2. Universalización de Servicios Amigables SAIAA y entrega de implantes subdérmicos en la Red Pública Integral de Salud.",
      "3. Plan de Choque Intercultural en las 6 provincias amazónicas (Napo, Morona Santiago, Pastaza, Orellana, Sucumbíos, Zamora).",
      "4. Aplicación efectiva de la sentencia de la Corte Constitucional sobre Educación Sexual Integral (ESI) en colegios.",
      "5. Cumplimiento de la Ley de Aborto por Violación en postas y hospitales sin barreras administrativas ni estigmas."
    ],
    "sources": [
      {
        "id": "REF-PLANEA-2025",
        "tag": "ORAS-CONHU",
        "year": "2024",
        "title": "Plan Andino (PLANEA 2025-2030)",
        "desc": "Matriz multisectorial de metas andinas para la prevención del embarazo adolescente en los 6 países miembros."
      },
      {
        "id": "REF-MILENA-EC",
        "tag": "UNFPA ECUADOR",
        "year": "2020",
        "title": "Estudio MILENA Ecuador",
        "desc": "Consecuencias socioeconómicas del embarazo adolescente en Ecuador. Pérdida estimada en USD 221.6M anuales (0.26% PIB)."
      },
      {
        "id": "REF-PIPENA-MSP",
        "tag": "MIN. SALUD PÚBLICA",
        "year": "2018-2025",
        "title": "Política Intersectorial PIPENA",
        "desc": "Política intersectorial para la prevención del embarazo en niñas y adolescentes en Ecuador."
      },
      {
        "id": "REF-COIP-EC",
        "tag": "ASAMBLEA NACIONAL",
        "year": "COIP Art. 171",
        "title": "Código Orgánico Integral Penal",
        "desc": "Tipificación de la violación sexual en menores de 14 años y régimen sancionatorio de delitos contra la integridad sexual."
      },
      {
        "id": "REF-LOEI-EC",
        "tag": "MINISTERIO DE EDUCACIÓN",
        "year": "LOEI",
        "title": "Ley Orgánica de Educación Intercultural",
        "desc": "Garantía de permanencia escolar y no discriminación para estudiantes en condición de embarazo o maternidad."
      },
      {
        "id": "REF-SENTENCIA-CC-EC",
        "tag": "CORTE CONSTITUCIONAL",
        "year": "Sentencia 003-18-PJO",
        "title": "Prevalencia del Derecho a la ESI",
        "desc": "Sentencia que consagra que el derecho de niñas y adolescentes a la ESI prevalece sobre la oposición de padres o tutores."
      }
    ],
    "heroDescAy": "Asamblea Nacional, MEF wan GAD ukanakatak qillqa <strong>PIPENA kamachita</strong> wan SAIAA qullañ utanaka.",
    "heroDescGn": "Asamblea Nacional, MEF ha GAD-pe g̃uarã marandu <strong>PIPENA ha SAIAA</strong> rehegua.",
    "heroDescArn": "Asamblea Nacional, MEF ka GAD mew kisu kimün <strong>PIPENA ka SAIAA</strong> mew.",
    "heroDescQvi": "Asamblea Nacional, MEF wan GADkuna nisqapaq killka <strong>PIPENA yachaymanta</strong> wan SAIAA hampikunapaq.",
    "heroDescGuc": "Asamblea Nacional, MEF je GAD süpüla <strong>PIPENA je SAIAA</strong> akaliojiraa.",
    "heroDescWra": "Asamblea Nacional, MEF aribo <strong>PIPENA je SAIAA</strong> obonoba.",
    "heroDescPmn": "Asamblea Nacional, MEF mai <strong>PIPENA je SAIAA</strong> kure pe.",
    "heroDescPbb": "Asamblea Nacional, MEF yu'çeçx <strong>PIPENA je SAIAA</strong> thegnikha's.",
    "heroDescEmp": "Asamblea Nacional, MEF bedéa <strong>PIPENA je SAIAA</strong> druade.",
    "heroDescAsh": "Asamblea Nacional, MEF ñañantsi <strong>PIPENA je SAIAA</strong> kametsari.",
    "heroDescAgr": "Asamblea Nacional, MEF chicham <strong>PIPENA je SAIAA</strong> pegker pujustinme.",
    "heroDescJiv": "Asamblea Nacional, MEF chicham <strong>PIPENA je SAIAA</strong> penker pujustin.",
    "heroDescRap": "Puka haka tere no te Asamblea Nacional, MEF 'e GAD mo te <strong>PIPENA 'e SAIAA</strong>.",
    "siteTitleQvi": "Llaktapa Politica Rikuna: Wawa Chichuy Hark'ay Ecuador Llaktapi",
    "siteTitleJiv": "Politica Chicham: Natsa Tsuwamunam Ecuador",
    "manifestoTitleQu": "7. Kamachiy Qillqa wan Política Pública Agenda Ecuador Suyupaq (5 Puntos)",
    "manifestoItemsQu": [
      "1. Ley de Presupuesto Anual nisqapi wawa chichuy hark'anapaq qullqi t'aqayta takyachiy.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia kamachiy wan maqanakuyta utqaylla hark'ay.",
      "3. LARC unaypaq hampiyninkunata sapa postapi mana qullqillawan qoy.",
      "4. Educación Sexual Integral (ESI) yachachiyta intercultural wan runasimipi hunt'achiy.",
      "5. Defensoría del Pueblo wan ayllukunawan kuska qillqata qhaway wan hunt'achiy."
    ],
    "cardsQu": {
      "c1": {
        "tag": "ANCHA HATUN LLAKI",
        "title": "15 Watamanta Uray Sipaskunapi Chichuy: Maqanakuy",
        "desc": "15 watamanta uray wawakunapi chichuyqa violación qallariyniyuqmi. Mana allichasqaqa llakitam mirachin."
      },
      "c2": {
        "tag": "AYLLUPI CHINKAY",
        "title": "Wawa Kaspa Chichuy wan Yachay Chinkachiy",
        "desc": "Wawallaraq wawayuq kayqa yachaykunata qulluchin wan kawsay qullqita anchata pisiyachin."
      },
      "c3": {
        "tag": "HAMPI WASI PISIY",
        "title": "LARC wan Moderno Hampikuna Mana Aypay",
        "desc": "Postakunapi wan ayllu hampiwesikunapi implante wan DIU mana aypanchu."
      }
    },
    "roiQu": {
      "roi1": {
        "title": "Mana Ruraypa Chinkachiynin",
        "desc": "Hampi wasi gastokuna, yachay saqiy wan qullqi mana chaskisqakuna."
      },
      "roi2": {
        "title": "Qullqi Kutimuynin (ROI)",
        "desc": "Sapa $1 churamusqamanta, $4.80 - $11.00 kutimun ayllupaq wan suyupaq."
      }
    },
    "lawsQu": {
      "l1": {
        "tag": "KAMACHIY",
        "title": "Plan Andino PLANEA 2025-2030 Kamachiy",
        "desc": "Cero Tolerancia wan fecundidad pisiyachiy 2030 watapaq."
      },
      "l2": {
        "tag": "HATUN KAMACHIY",
        "title": "Derechos wan Allin Kawsay Amachay",
        "desc": "Tukuy runapaq LARC hampikuna wan maqanakuy hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHIY",
        "title": "Qullqi T'aqay Takyachiy",
        "desc": "Ayllu postakunapaq qullqi waqaychasqa."
      }
    },
    "manifestoTitleAy": "7. Suyu Kamachi Qillqa wan Políticas Públicas Ecuador Suyutaki (5 Puntos)",
    "manifestoItemsAy": [
      "1. Ley de Presupuesto Anual ukan sapürunjama qullqi t'aqawi imillanaka usuriptawi jark'aqañataki.",
      "2. 15 marat jisk'anakan Cero Tolerancia protocolos wan jank'aki qullayawi comisaríanakana.",
      "3. LARC unay qullañanaka taqi qullañ utanakana inaki churaña.",
      "4. Educación Sexual Integral (ESI) yatichawi intercultural wan aymar aruna phuqhaña.",
      "5. Defensoría del Pueblo yanapirinakampi qhawawi wan amachawi luraña."
    ],
    "cardsAy": {
      "c1": {
        "tag": "SINTIPUNI AXSARAWI",
        "title": "15 Marat Jisk'anakan Usuriptawi: Nuwasiña",
        "desc": "15 marat jisk'anakan usuriptawipax nuwasiñat jutiriwa. Jan askichatax jach'a llakiwa."
      },
      "c2": {
        "tag": "JAQI CHHAQAWI",
        "title": "Nayra Usuriptawi wan Yatichawi Chhaqawi",
        "desc": "Imillanaka usuriptawipax yatichawi qulluchiwa wan jakawi qullqi pisiyaptayi."
      },
      "c3": {
        "tag": "QULLAÑA UTAN PISI",
        "title": "LARC wan Moderno Qullanaka Jan Aypawi",
        "desc": "Qullañ utanakana implante wan DIU qullanakax janiw aypkiti."
      }
    },
    "roiAy": {
      "roi1": {
        "title": "Jan Lurawina Chhaqawipa",
        "desc": "Qullañ uta gastonaka, yatichawi jaytawi wan qullqi jan jikxatatanaka."
      },
      "roi2": {
        "title": "Qullqi Kutt'awi (ROI)",
        "desc": "Sapa $1 churatanakampi, $4.80 - $11.00 kutt'ani suyunakataki."
      }
    },
    "lawsAy": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan usuriptawi jisk'aptayaña 2030 marataki."
      },
      "l2": {
        "tag": "JACH'A KAMACHI",
        "title": "Derechos wan Qullañ Amachawi",
        "desc": "Taqinitak LARC qullanaka wan nuwasiña jark'aqaña."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'aqawi Imxatata",
        "desc": "Qullañ utanakataki qullqi amachatapuni."
      }
    },
    "manifestoTitleGn": "7. Tetã Rerekua Kuatia ha Políticas Públicas Ecuador-pe g̃uarã (5 Puntos)",
    "manifestoItemsGn": [
      "1. Viru mohenda Ley de Presupuesto Anual-pe mitãkuña usuriptawi jark'aqa hag̃ua.",
      "2. Cero Tolerancia protocols 15 ary guýpe ha ñangareko pya'e violencia sexual rehe.",
      "3. LARC pohã ñeme'ẽ opavave tasyo ha puesto de salud rupive.",
      "4. Educación Sexual Integral (ESI) mbo'epy hekopete guaraníme ha castellánope.",
      "5. Defensoría del Pueblo ha tetãygua aty ñemongeta ha jehechajey."
    ],
    "cardsGn": {
      "c1": {
        "tag": "KYHYJE GUASU",
        "title": "Mitãkuña 15 Ary Guýpe Usuriptawi: Ñerairõ",
        "desc": "100% mitãkuña 15 ary guýpe hyeguáva oñembotavy rupi. Tekotevẽ ñangareko pya'e."
      },
      "c2": {
        "tag": "TEKO KAÑY",
        "title": "Mitãkuña Memby ha Tekoasy",
        "desc": "Mitãkuña memby ogueru tekoasy ha ombopaha mbo'epy heñóva."
      },
      "c3": {
        "tag": "TASYÓPE KAÑY",
        "title": "LARC ha Anticonceptivos Pokã",
        "desc": "Tasyo michĩvape ndaipóri implante ha DIU mitãkuñáme g̃uarã."
      }
    },
    "roiGn": {
      "roi1": {
        "title": "Viru Kañy",
        "desc": "Tasyo gasto, mbo'epy jejayei ha viru ndohupytýiva."
      },
      "roi2": {
        "title": "Viru Jehevy (ROI)",
        "desc": "Peteĩ $1 emoĩvape g̃uarã, $4.80 - $11.00 ojevy tetãme."
      }
    },
    "lawsGn": {
      "l1": {
        "tag": "TEKO ME'Ẽ",
        "title": "Plan Andino PLANEA 2025-2030 Teko",
        "desc": "Cero Tolerancia ha fecundidad guejy 2030 arype."
      },
      "l2": {
        "tag": "TETÃ ME'Ẽ",
        "title": "Derécho ha Tesãi Ñangareko",
        "desc": "LARC pohã opavavépe ha ñerairõ jark'a."
      },
      "l3": {
        "tag": "VIRU ME'Ẽ",
        "title": "Viru Mohenda Ñangareko",
        "desc": "Tasyo michĩvape viru oñemohendáva."
      }
    },
    "manifestoTitleArn": "7. Ngülamtun Politica Dungu Agenda Ecuador Mew (5 Puntos)",
    "manifestoItemsArn": [
      "1. Kisu Presupuesto Ley de Presupuesto Anual mew wechekeche koñin kuñiwtual.",
      "2. Cero Tolerancia protocolos 15 tripantu pichikeche kuñiwtual kom posta mew.",
      "3. LARC kuñiwtun lawen kom pu centro de salud mew nieal.",
      "4. Educación Sexual Integral (ESI) küme kimün kom chillkatuwe mapudungun mew.",
      "5. Defensoría del Pueblo ka lof che mew kisu kuñiwtun dungu."
    ],
    "cardsArn": {
      "c1": {
        "tag": "AÑKEN DUNGU",
        "title": "15 Tripantu Pichikeche Koñin: Weda Dungu",
        "desc": "Kom 15 tripantu pichikeche koñin niey weda dungu mew. Kuñiwtual tañi mongen."
      },
      "c2": {
        "tag": "MAPU MEW KAÑY",
        "title": "Wechekeche Koñin ka Kimün Ngelay",
        "desc": "Wechekeche koñin niey mew fey kimün ngelay ka kulliñ pisiyachi."
      },
      "c3": {
        "tag": "LAWENTUWE PISI",
        "title": "LARC ka Küme Lawen Ngelay",
        "desc": "Posta mew implante ka DIU ngelay wechekeche domo mew."
      }
    },
    "roiArn": {
      "roi1": {
        "title": "Kisu Femnon Mew Kulliñ",
        "desc": "Lawentuwe gasto, chillkatuwe ngelay ka kulliñ kañy."
      },
      "roi2": {
        "title": "Kulliñ Wiñol (ROI)",
        "desc": "Fill $1 kulliñ mew, $4.80 - $11.00 wiñoy mapu mew."
      }
    },
    "lawsArn": {
      "l1": {
        "tag": "NGÜLAM",
        "title": "Plan Andino PLANEA 2025-2030 Ngülam",
        "desc": "Cero Tolerancia ka wechekeche koñin ngelay 2030 tripantu mew."
      },
      "l2": {
        "tag": "FÜTRA NGÜLAM",
        "title": "Derechos ka Küme Mongen",
        "desc": "Kom che mew LARC lawen ka weda dungu kuñiwtun."
      },
      "l3": {
        "tag": "KULLIÑ NGÜLAM",
        "title": "Kulliñ Kuñiwtun",
        "desc": "Posta mew kulliñ kuñiwtual."
      }
    },
    "manifestoTitleQvi": "7. Llaktapa Kamachi Killka Agenda Ecuador Llaktapi (5 Puntos)",
    "manifestoItemsQvi": [
      "1. Ley de Presupuesto ukupi wawa chichuy hark'ankapak qullqi t'akayta sinyachina.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia protocolos wan utka yanapana.",
      "3. LARC unaypa hampikunata tukuy hampiwasi ukupi llukshichina.",
      "4. Educación Sexual Integral (ESI) yachana wasikunapi kichwapi paktachina.",
      "5. Defensoría del Pueblo wan llaktakunawan kuska killkata rikuriy."
    ],
    "cardsQvi": {
      "c1": {
        "tag": "YAPA JATUN LLAKI",
        "title": "15 Watamanta Uray Wawa Chichuy: Llaki",
        "desc": "15 watamanta uray wawakunapi chichuyqa llakiyuqmi. Mana allichaspaqa llakitami mirachin."
      },
      "c2": {
        "tag": "LLAKTA PISI",
        "title": "Wawa Chichuy wan Yachay Chinkay",
        "desc": "Wawa chichuyka yachayta pishiyachin wan kawsayta llakichin."
      },
      "c3": {
        "tag": "HAMPIWASI PISI",
        "title": "LARC wan Hampikuna Mana Tiyay",
        "desc": "Hampiwasi ukupi implante wan DIU mana aypanchu."
      }
    },
    "roiQvi": {
      "roi1": {
        "title": "Mana Ruraypa Chinkaynin",
        "desc": "Hampiwasi gastokuna, yachay sakiy wan kawsay qullqi pisi."
      },
      "roi2": {
        "title": "Qullqi Kutiy (ROI)",
        "desc": "Sapa $1 churashkamanta, $4.80 - $11.00 kutin llaktapaq."
      }
    },
    "lawsQvi": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan wawa chichuy pisi 2030 watapak."
      },
      "l2": {
        "tag": "JATUN KAMACHI",
        "title": "Derechos wan Alli Kawsay",
        "desc": "Tukuykunapak LARC hampikuna wan llaki hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'akay",
        "desc": "Hampiwasi ukupi qullqi charina."
      }
    },
    "manifestoTitleGuc": "7. Apalirawaa Politica Agenda Ecuador (5 Puntos)",
    "manifestoItemsGuc": [
      "1. Walawaa presupuestal süpüla jintüi asitnushii katataaka Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos süpüla 15 juyamüin jintüin je anaa.",
      "3. LARC anticonceptivos tü taashii süpüla mmapa'a.",
      "4. Educación Sexual Integral (ESI) wayuunaikiru'u ekirajaapülee.",
      "5. Defensoría del Pueblo je wayuu akaliojiraa."
    ],
    "cardsGuc": {
      "c1": {
        "tag": "MÜLIAA MÜSIA",
        "title": "15 Juyamüin Jintüi Asitnushii: Müliaa",
        "desc": "15 juyamüin jintüin asitnushii katataaka. Cho'ujaasü akaliojiraa süpüla anaa."
      },
      "c2": {
        "tag": "MMAPA'A PISI",
        "title": "Jintüi Katataaka je Ekirajaapülee Chinkay",
        "desc": "Jintüi asitnushii ekirajaapülee chinkachi."
      },
      "c3": {
        "tag": "ANAA AYATAWAA",
        "title": "LARC je Anticonceptivos Pokã",
        "desc": "Posta je centro de salud nojotshi implante süpüla jintüi."
      }
    },
    "roiGuc": {
      "roi1": {
        "title": "Walawaa Chinkay",
        "desc": "Centro de salud gasto, ekirajaapülee chinkay."
      },
      "roi2": {
        "title": "Walawaa Anaa (ROI)",
        "desc": "Süpüla $1 walawaa, $4.80 - $11.00 anaa mmapa'a."
      }
    },
    "lawsGuc": {
      "l1": {
        "tag": "PÜTCHI",
        "title": "Plan Andino PLANEA 2025-2030 Pütchi",
        "desc": "Cero Tolerancia je jintüi asitnushii katataaka 2030."
      },
      "l2": {
        "tag": "ANAA PÜTCHI",
        "title": "Derechos je Anaa",
        "desc": "Mmapa'a LARC anticonceptivos je müliaa jark'a."
      },
      "l3": {
        "tag": "WALAWA PÜTCHI",
        "title": "Walawaa Presupuesto",
        "desc": "Posta walawaa anaa."
      }
    },
    "manifestoTitleWra": "7. Obonoba Politica Agenda Ecuador (5 Puntos)",
    "manifestoItemsWra": [
      "1. Presupuesto aribo iboma asidaja obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata sanuka iboma.",
      "3. LARC anticonceptivos kokotune hanoko.",
      "4. Educación Sexual Integral (ESI) warao aribo eskuela.",
      "5. Defensoría aribo nomewitu sanuka."
    ],
    "cardsWra": {
      "c1": {
        "tag": "OBONOBA SANUKA",
        "title": "15 Wata Sanuka Iboma Asidaja: Obonoba",
        "desc": "15 wata sanuka iboma asidaja obonoba nomewitu."
      },
      "c2": {
        "tag": "ARIBO SANUKA",
        "title": "Iboma Asidaja eskuela obonoba",
        "desc": "Iboma asidaja eskuela chinkachi."
      },
      "c3": {
        "tag": "HANOKO PISI",
        "title": "LARC Anticonceptivos Hanoko",
        "desc": "Hanoko sanuka implante nojotshi."
      }
    },
    "roiWra": {
      "roi1": {
        "title": "Obonoba Aribo Chinkay",
        "desc": "Hanoko gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Aribo Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa hanoko."
      }
    },
    "lawsWra": {
      "l1": {
        "tag": "ARIBO",
        "title": "Plan Andino PLANEA 2025-2030 Aribo",
        "desc": "Cero Tolerancia iboma asidaja 2030."
      },
      "l2": {
        "tag": "NOMIEWITU",
        "title": "Derechos je Hanoko",
        "desc": "LARC anticonceptivos hanoko kokotune."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Hanoko",
        "desc": "Hanoko sanuka aribo."
      }
    },
    "manifestoTitlePmn": "7. Politica Mai Agenda Ecuador (5 Puntos)",
    "manifestoItemsPmn": [
      "1. Presupuesto mai murekon pimanse obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata murekon mai.",
      "3. LARC anticonceptivos kokotune pata'pï iwe.",
      "4. Educación Sexual Integral (ESI) pemón mai eskuela.",
      "5. Defensoría mai nomewitu murekon."
    ],
    "cardsPmn": {
      "c1": {
        "tag": "PATA'PÏ MAI",
        "title": "15 Wata Murekon Pimanse: Pata'pï",
        "desc": "15 wata murekon pimanse pata'pï mai."
      },
      "c2": {
        "tag": "MAI PITI",
        "title": "Murekon Pimanse eskuela mai",
        "desc": "Murekon pimanse eskuela chinkachi."
      },
      "c3": {
        "tag": "IWE PISI",
        "title": "LARC Anticonceptivos Iwe",
        "desc": "Pata'pï iwe implante nojotshi."
      }
    },
    "roiPmn": {
      "roi1": {
        "title": "Mai Piti Chinkay",
        "desc": "Pata'pï iwe gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Mai Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa iwe."
      }
    },
    "lawsPmn": {
      "l1": {
        "tag": "MAI",
        "title": "Plan Andino PLANEA 2025-2030 Mai",
        "desc": "Cero Tolerancia murekon pimanse 2030."
      },
      "l2": {
        "tag": "PATA'PÏ",
        "title": "Derechos je Iwe",
        "desc": "LARC anticonceptivos pata'pï iwe."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Iwe",
        "desc": "Pata'pï iwe mai."
      }
    },
    "manifestoTitlePbb": "7. Yu'çeçx Politica Agenda Ecuador (5 Puntos)",
    "manifestoItemsPbb": [
      "1. Presupuesto nxusxi ku'j we'sx thegnikha's Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 vxite' ku'j we'sx.",
      "3. LARC yu'çeçx taashii ta'çxhab.",
      "4. Educación Sexual Integral (ESI) nasa yuwete ekirajaapülee.",
      "5. Defensoría del Pueblo thegnikha's."
    ],
    "cardsPbb": {
      "c1": {
        "tag": "KU'J WE'SX",
        "title": "15 Vxite' Ku'j Thegnikha's: Ku'j",
        "desc": "15 vxite' ku'j we'sx thegnikha's."
      },
      "c2": {
        "tag": "ÇXHAB PISI",
        "title": "Ku'j Thegnikha's eskuela çxhab",
        "desc": "Ku'j we'sx eskuela chinkachi."
      },
      "c3": {
        "tag": "YAÇK PISI",
        "title": "LARC Yu'çeçx Yaçk",
        "desc": "Yaçk taashii implante nojotshi."
      }
    },
    "roiPbb": {
      "roi1": {
        "title": "Ku'j We'sx Chinkay",
        "desc": "Yaçk gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Ku'j Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa çxhab."
      }
    },
    "lawsPbb": {
      "l1": {
        "tag": "YU'ÇEÇX",
        "title": "Plan Andino PLANEA 2025-2030 Yu'çeçx",
        "desc": "Cero Tolerancia ku'j we'sx 2030."
      },
      "l2": {
        "tag": "ÇXHAB",
        "title": "Derechos je Yaçk",
        "desc": "LARC yu'çeçx taashii ta'çxhab."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Çxhab",
        "desc": "Çxhab yaçk yu'çeçx."
      }
    },
    "manifestoTitleEmp": "7. Bedéa Politica Agenda Ecuador (5 Puntos)",
    "manifestoItemsEmp": [
      "1. Presupuesto druade wẽra warrade Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 warrarãde wẽra.",
      "3. LARC anticonceptivos druade droma.",
      "4. Educación Sexual Integral (ESI) emberá bedéade eskuela.",
      "5. Defensoría del Pueblo druade bia."
    ],
    "cardsEmp": {
      "c1": {
        "tag": "KHARRA DRUADE",
        "title": "15 Warrarãde Wẽra: Kharra",
        "desc": "15 warrarãde wẽra kharra druade."
      },
      "c2": {
        "tag": "DRUA PISI",
        "title": "Wẽra Warrarã eskuela drua",
        "desc": "Wẽra warrarã eskuela chinkachi."
      },
      "c3": {
        "tag": "DROMA PISI",
        "title": "LARC Anticonceptivos Droma",
        "desc": "Droma implante nojotshi."
      }
    },
    "roiEmp": {
      "roi1": {
        "title": "Drua Bedéa Chinkay",
        "desc": "Droma gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Drua Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa drua."
      }
    },
    "lawsEmp": {
      "l1": {
        "tag": "BEDÉA",
        "title": "Plan Andino PLANEA 2025-2030 Bedéa",
        "desc": "Cero Tolerancia wẽra warrade 2030."
      },
      "l2": {
        "tag": "DRUA",
        "title": "Derechos je Droma",
        "desc": "LARC anticonceptivos druade droma."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Drua",
        "desc": "Druade droma bedéa."
      }
    },
    "manifestoTitleAsh": "7. Kametsari Politica Agenda Ecuador (5 Puntos)",
    "manifestoItemsAsh": [
      "1. Presupuesto pankotsi eentsite kametsari Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 osarentsi eentsite.",
      "3. LARC anticonceptivos pankotsi maaroni.",
      "4. Educación Sexual Integral (ESI) asháninka ñañantsi eskuela.",
      "5. Defensoría del Pueblo eentsite kametsa."
    ],
    "cardsAsh": {
      "c1": {
        "tag": "KAMETSARIÑA",
        "title": "15 Osarentsi Eentsite: Kametsa",
        "desc": "15 osarentsi eentsite kametsariña."
      },
      "c2": {
        "tag": "PANKOTSI PISI",
        "title": "Eentsite eskuela pankotsi",
        "desc": "Eentsite eskuela chinkachi."
      },
      "c3": {
        "tag": "PANKOTSI PISI",
        "title": "LARC Anticonceptivos Pankotsi",
        "desc": "Pankotsi implante nojotshi."
      }
    },
    "roiAsh": {
      "roi1": {
        "title": "Pankotsi Kametsa Chinkay",
        "desc": "Pankotsi gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Pankotsi Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa pankotsi."
      }
    },
    "lawsAsh": {
      "l1": {
        "tag": "ÑAÑANTSI",
        "title": "Plan Andino PLANEA 2025-2030 Ñañantsi",
        "desc": "Cero Tolerancia eentsite 2030."
      },
      "l2": {
        "tag": "PANKOTSI",
        "title": "Derechos je Pankotsi",
        "desc": "LARC anticonceptivos pankotsi maaroni."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Pankotsi",
        "desc": "Pankotsi eentsite ñañantsi."
      }
    },
    "manifestoTitleAgr": "7. Datsajum Politica Agenda Ecuador (5 Puntos)",
    "manifestoItemsAgr": [
      "1. Presupuesto apu datsajum pegker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 mijan datsajum.",
      "3. LARC anticonceptivos pegker jea.",
      "4. Educación Sexual Integral (ESI) awajún chicham eskuela.",
      "5. Defensoría del Pueblo datsajum pegker."
    ],
    "cardsAgr": {
      "c1": {
        "tag": "PEGKERCHAU",
        "title": "15 Mijan Datsajum: Pegkerchau",
        "desc": "15 mijan datsajum pegkerchau."
      },
      "c2": {
        "tag": "JEA PISI",
        "title": "Datsajum eskuela jea",
        "desc": "Datsajum eskuela chinkachi."
      },
      "c3": {
        "tag": "JEA PISI",
        "title": "LARC Anticonceptivos Jea",
        "desc": "Jea implante nojotshi."
      }
    },
    "roiAgr": {
      "roi1": {
        "title": "Datsajum Pegker Chinkay",
        "desc": "Jea gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Datsajum Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa jea."
      }
    },
    "lawsAgr": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia datsajum 2030."
      },
      "l2": {
        "tag": "JEA",
        "title": "Derechos je Jea",
        "desc": "LARC anticonceptivos pegker jea."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Jea",
        "desc": "Jea datsajum chicham."
      }
    },
    "manifestoTitleJiv": "7. Natsa Politica Agenda Ecuador (5 Puntos)",
    "manifestoItemsJiv": [
      "1. Presupuesto uunt natsa penker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 uchin natsa.",
      "3. LARC anticonceptivos penker tsuwatai.",
      "4. Educación Sexual Integral (ESI) shuar chicham eskuela.",
      "5. Defensoría del Pueblo natsa penker."
    ],
    "cardsJiv": {
      "c1": {
        "tag": "PENKERCHAU",
        "title": "15 Uchin Natsa: Penkerchau",
        "desc": "15 uchin natsa penkerchau."
      },
      "c2": {
        "tag": "TSUWATAI PISI",
        "title": "Natsa eskuela tsuwatai",
        "desc": "Natsa eskuela chinkachi."
      },
      "c3": {
        "tag": "TSUWATAI PISI",
        "title": "LARC Anticonceptivos Tsuwatai",
        "desc": "Tsuwatai implante nojotshi."
      }
    },
    "roiJiv": {
      "roi1": {
        "title": "Natsa Penker Chinkay",
        "desc": "Tsuwatai gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Natsa Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa tsuwatai."
      }
    },
    "lawsJiv": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia natsa 2030."
      },
      "l2": {
        "tag": "TSUWATAI",
        "title": "Derechos je Tsuwatai",
        "desc": "LARC anticonceptivos penker tsuwatai."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Tsuwatai",
        "desc": "Tsuwatai natsa chicham."
      }
    },
    "manifestoTitleRap": "7. Vānaŋa Haka Oho Agenda mo Ecuador (5 Puntos)",
    "manifestoItemsRap": [
      "1. Moni haka tere no te poki 'āpī hapu'a kore i roto i te Ley de Presupuesto Anual.",
      "2. Cero Tolerancia protocolos mo te poki o raro i te 15 matahiti.",
      "3. LARC anticonceptivos pāruru mo te kāiŋa.",
      "4. Educación Sexual Integral (ESI) 'ite i roto i te ha'api'ira'a vananga Rapa Nui.",
      "5. Defensoría de la Niñez pāruru mo te poki kāiŋa."
    ],
    "cardsRap": {
      "c1": {
        "tag": "RARI NUI",
        "title": "15 Matahiti Poki Hapu'a: Rari",
        "desc": "15 matahiti poki hapu'a kore rari nui."
      },
      "c2": {
        "tag": "KĀIŊA PISI",
        "title": "Poki Hapu'a ha'api'ira'a kāiŋa",
        "desc": "Poki hapu'a ha'api'ira'a chinkachi."
      },
      "c3": {
        "tag": "HARE PISI",
        "title": "LARC Anticonceptivos Hare",
        "desc": "Hare implante nojotshi."
      }
    },
    "roiRap": {
      "roi1": {
        "title": "Kāiŋa Moni Kore",
        "desc": "Hare gasto, ha'api'ira'a kore."
      },
      "roi2": {
        "title": "Moni Haka Oho (ROI)",
        "desc": "Mo te $1, $4.80 - $11.00 moni hoki mai."
      }
    },
    "lawsRap": {
      "l1": {
        "tag": "VĀNAŊA",
        "title": "Plan Andino PLANEA 2025-2030 Vānaŋa",
        "desc": "Cero Tolerancia poki hapu'a kore 2030."
      },
      "l2": {
        "tag": "KĀIŊA",
        "title": "Derechos je Hare",
        "desc": "LARC anticonceptivos pāruru mo te kāiŋa."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Kāiŋa",
        "desc": "Kāiŋa hare vānaŋa."
      }
    }
  },
  "venezuela": {
    "name": "Venezuela",
    "flag": "🇻🇪",
    "flagSvg": "<svg class=\"w-5 h-3.5 rounded inline-block object-cover flex-shrink-0 align-middle\" viewBox=\"0 0 640 480\"><path fill=\"#FFCC00\" d=\"M0 0h640v160H0z\"/><path fill=\"#00247D\" d=\"M0 160h640v160H0z\"/><path fill=\"#CF142B\" d=\"M0 320h640v160H0z\"/><g><polygon fill=\"#ffffff\" points=\"245.4,237.7 248.3,245.6 256.8,246.0 250.2,251.2 252.4,259.4 245.4,254.7 238.3,259.4 240.6,251.2 234.0,246.0 242.4,245.6\"/><polygon fill=\"#ffffff\" points=\"262.1,219.1 265.1,227.0 273.6,227.3 266.9,232.6 269.2,240.8 262.1,236.1 255.1,240.8 257.4,232.6 250.7,227.3 259.2,227.0\"/><polygon fill=\"#ffffff\" points=\"283.4,205.8 286.4,213.7 294.8,214.1 288.2,219.3 290.4,227.5 283.4,222.8 276.3,227.5 278.6,219.3 272.0,214.1 280.4,213.7\"/><polygon fill=\"#ffffff\" points=\"307.5,198.9 310.4,206.8 318.9,207.2 312.3,212.4 314.5,220.6 307.5,215.9 300.4,220.6 302.7,212.4 296.1,207.2 304.5,206.8\"/><polygon fill=\"#ffffff\" points=\"332.5,198.9 335.5,206.8 343.9,207.2 337.3,212.4 339.6,220.6 332.5,215.9 325.5,220.6 327.7,212.4 321.1,207.2 329.6,206.8\"/><polygon fill=\"#ffffff\" points=\"356.6,205.8 359.6,213.7 368.0,214.1 361.4,219.3 363.7,227.5 356.6,222.8 349.6,227.5 351.8,219.3 345.2,214.1 353.6,213.7\"/><polygon fill=\"#ffffff\" points=\"377.9,219.1 380.8,227.0 389.3,227.3 382.6,232.6 384.9,240.8 377.9,236.1 370.8,240.8 373.1,232.6 366.4,227.3 374.9,227.0\"/><polygon fill=\"#ffffff\" points=\"394.6,237.7 397.6,245.6 406.0,246.0 399.4,251.2 401.7,259.4 394.6,254.7 387.6,259.4 389.8,251.2 383.2,246.0 391.7,245.6\"/></g></svg>",
    "badge": "Plan PRETA • PLANEA 2025-2030 🇻🇪",
    "siteTitle": "Plataforma de Incidencia Política: Prevención del Embarazo Adolescente en Venezuela",
    "siteTitleEn": "Policy Advocacy Platform: Adolescent Pregnancy Prevention in Venezuela",
    "siteTitleQu": "Suyu Kamachiy Qhawana: Wawa Chichuy Hark'ay Venezuela Suyupi",
    "endorsed": [
      "Min. Poder Popular Salud",
      "ORAS-CONHU",
      "UNFPA Venezuela",
      "OPS/OMS"
    ],
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500'>Prevención del Embarazo Adolescente en Venezuela</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500'>Adolescent Pregnancy Prevention in Venezuela</span>",
    "heroTitleQu": "Mana Ruraypa Qullqi Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500'>Wawa Chichuy Hark'ay Venezuela Suyupi</span>",
    "heroDesc": "Evidencia técnica para los <strong>Poderes Públicos, MPPS, MinMujer y Gobernaciones</strong> sobre la ejecución del Plan PRETA y la provisión de anticoncepción AIPEO.",
    "heroDescEn": "Technical policy brief for <strong>Public Authorities, Ministry of Health (MPPS), Ministry of Women, and State Governments</strong> on Plan PRETA execution and AIPEO contraception.",
    "heroDescQu": "Poderes Públicos, MPPS, MinMujer wan Gobernaciones nisqapaq qillqa <strong>Plan PRETA ruraymanta</strong> wan AIPEO hampiyninmanta.",
    "metrics": [
      {
        "val": "81.7 / 1,000",
        "lbl": "Tasa Fecundidad 15-19 (Consolidado 2026)",
        "lblEn": "Adolescent Fertility Rate (2026)",
        "lblQu": "Sipaskunapa Chichuynin (2026)"
      },
      {
        "val": "4.81 / 1,000",
        "lbl": "Fecundidad en <15 Años (La más alta)",
        "lblEn": "Early Fertility under age 15",
        "lblQu": "15 Watamanta Uray Chichuy Tupa"
      },
      {
        "val": "125.4",
        "lbl": "Razón Mortalidad Materna (por 100k NV)",
        "lblEn": "Maternal Mortality Ratio",
        "lblQu": "Mortalidad Materna Tupa"
      },
      {
        "val": "112 / 1,000",
        "lbl": "Fecundidad en Áreas Rurales e Indígenas",
        "lblEn": "Rural/Indigenous Fertility",
        "lblQu": "Campopi wan Indígena Chichuy Tupa"
      }
    ],
    "cards": {
      "c1": {
        "tag": "EMERGENCIA SUBREGIONAL",
        "title": "Tasa de Fecundidad más Elevada del Área Andina (81.7)",
        "desc": "Venezuela se sitúa en los primeros lugares de fecundidad adolescente de América Latina. La tasa en niñas menores de 15 años alcanza 4.81 por 1,000, duplicando el promedio mundial."
      },
      "c2": {
        "tag": "ESTRATEGIA AIPEO Y LARCS",
        "title": "Anticoncepción Inmediata Posparto (AIPEO)",
        "desc": "La dotación de implantes subdérmicos posparto demostró reducir hasta en 40% los embarazos subsecuentes no planificados en maternidades públicas."
      },
      "c3": {
        "tag": "ESTADOS INDÍGENAS Y FRONTERIZOS",
        "title": "Vulnerabilidad Crítica en Apure, Delta y Amazonas",
        "desc": "Apure, Delta Amacuro y Amazonas concentran las mayores brechas de atención en salud sexual, uniones forzadas y desnutrición materna."
      }
    },
    "roi": {
      "roi1": {
        "title": "Costo de Inacción y Pérdida del Bono Demográfico",
        "desc": "El embarazo adolescente en Venezuela es el principal vector de deserción escolar temprana en mujeres jóvenes, reduciendo drásticamente su inserción en el mercado productivo formal."
      },
      "roi2": {
        "title": "Urgencia de Inversión en Salud Materna y LARCs",
        "desc": "La correlación entre bajo gasto per cápita en salud y una RMM de 125.4 por 100,000 NV exige priorizar la compra y distribución pública gratuita de anticonceptivos modernos."
      }
    },
    "laws": {
      "l1": {
        "tag": "PROTECCIÓN INTEGRAL",
        "title": "LOPNNA (Artículos 41 al 44)",
        "desc": "Consagra el derecho de niños y adolescentes a la salud integral, educación sexual adaptada y servicios confidenciales."
      },
      "l2": {
        "tag": "RESOLUCIÓN MINISTERIAL",
        "title": "Resolución N° 0004 de 2021 (Gaceta 42.063)",
        "desc": "Regula la incorporación obligatoria de la Educación Integral de la Sexualidad (EIS) en el subsistema de Educación Básica."
      },
      "l3": {
        "tag": "PLAN NACIONAL INTERSECTORIAL",
        "title": "Plan PRETA & Norma Oficial SSR",
        "desc": "Plan Nacional para la Prevención del Embarazo a Temprana Edad y protocolo de atención clínica sin requerir permiso parental desde los 14 años."
      }
    },
    "explorerTitle": "6. Explorador Informativo de Indicadores por Estados de Venezuela",
    "explorerSubtitle": "Diagnóstico territorial de tasas de fecundidad y acceso a salud reproductiva.",
    "regions": {
      "Apure": {
        "label": "Apure (Llanos / Frontera)",
        "fertility": "114.2 por 1,000",
        "fertilityVal": 114.2,
        "fertilityPct": 98,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Extremo",
        "coverage": "15% Servicios Diferenciados",
        "coverageVal": 15,
        "coverageGap": 85,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Crítica (85%)",
        "inactionCost": "Impacto Severo",
        "inactionVal": 120,
        "inactionScale": 95,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Tasa más elevada nacional",
        "priority": "Despliegue de brigadas de salud sexual en municipios fronterizos y suministro masivo de implantes LARC."
      },
      "DeltaAmacuro": {
        "label": "Delta Amacuro (Comunidades Warao)",
        "fertility": "108.5 por 1,000",
        "fertilityVal": 108.5,
        "fertilityPct": 94,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Extremo",
        "coverage": "12% Servicios Diferenciados",
        "coverageVal": 12,
        "coverageGap": 88,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Extrema (88%)",
        "inactionCost": "Impacto Severo",
        "inactionVal": 110,
        "inactionScale": 90,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Comunidades fluviales Warao",
        "priority": "Atención intercultural en lengua Warao, reducción de la mortalidad materna y transporte fluvial de emergencia."
      },
      "Amazonas": {
        "label": "Amazonas (Pueblos Indígenas)",
        "fertility": "102.1 por 1,000",
        "fertilityVal": 102.1,
        "fertilityPct": 90,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Extremo",
        "coverage": "16% Servicios Diferenciados",
        "coverageVal": 16,
        "coverageGap": 84,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Crítica (84%)",
        "inactionCost": "Impacto Severo",
        "inactionVal": 100,
        "inactionScale": 85,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Alta dispersión territorial",
        "priority": "Programas de salud sexual comunitaria adaptados a los pueblos Yanomami, Piaroa y Yekuana."
      },
      "Portuguesa": {
        "label": "Portuguesa (Llanos Occidentales)",
        "fertility": "94.6 por 1,000",
        "fertilityVal": 94.6,
        "fertilityPct": 82,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Muy Alto",
        "coverage": "24% Servicios Diferenciados",
        "coverageVal": 24,
        "coverageGap": 76,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Alta (76%)",
        "inactionCost": "Impacto Alto",
        "inactionVal": 90,
        "inactionScale": 78,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Zona agropecuaria",
        "priority": "Fortalecimiento de la consulta diferenciada para adolescentes en ambulatorios urbanos y rurales."
      },
      "Barinas": {
        "label": "Barinas (Llanos)",
        "fertility": "91.3 por 1,000",
        "fertilityVal": 91.3,
        "fertilityPct": 79,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Muy Alto",
        "coverage": "26% Servicios Diferenciados",
        "coverageVal": 26,
        "coverageGap": 74,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Alta (74%)",
        "inactionCost": "Impacto Alto",
        "inactionVal": 85,
        "inactionScale": 75,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Zonas rurales dispersas",
        "priority": "Capacitación a promotores comunitarios en prevención de violencia de género y uniones tempranas."
      },
      "DistritoCapital": {
        "label": "Distrito Capital (Caracas)",
        "fertility": "62.4 por 1,000",
        "fertilityVal": 62.4,
        "fertilityPct": 54,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-amber-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Riesgo Alto",
        "coverage": "48% Servicios Diferenciados",
        "coverageVal": 48,
        "coverageGap": 52,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Urbana (52%)",
        "inactionCost": "Mayor Volumen",
        "inactionVal": 150,
        "inactionScale": 100,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Concentración urbana Caracas",
        "priority": "Atención intensiva en parroquias populares de Caracas (Petare, Sucre, Catia) y provisión expedita de AIPEO en maternidades."
      }
    },
    "manifestoTitle": "7. Manifiesto Legislativo y Agenda de Política Pública para Venezuela (5 Puntos)",
    "cardsEn": {
      "c1": {
        "tag": "CRITICAL URGENCY",
        "title": "Pregnancy in Girls Under 15: Sexual Violence",
        "desc": "100% of pregnancies in children under 15 are statutory rape. Inaction perpetuates cycles of impunity and structural vulnerability."
      },
      "c2": {
        "tag": "SOCIAL IMPACT",
        "title": "Early Fertility and Compounded Opportunity Loss",
        "desc": "Early motherhood severely cuts lifetime earnings and truncates educational progression across generations."
      },
      "c3": {
        "tag": "HEALTH BARRIER",
        "title": "Gaps in Modern Contraceptive Delivery and LARCs",
        "desc": "Inconsistent availability of Long-Acting Reversible Contraceptives (implants, IUDs) in primary care clinics."
      }
    },
    "roiEn": {
      "roi1": {
        "title": "Loss Due to Inaction",
        "desc": "Aggregate lifetime economic burden in public health, school dropout, and forfeited labor income."
      },
      "roi2": {
        "title": "Return on Investment (ROI)",
        "desc": "For every $1 invested in adolescent pregnancy prevention, between $4.80 and $11.00 is returned."
      }
    },
    "lawsEn": {
      "l1": {
        "tag": "BINDING",
        "title": "Andean Plan PLANEA 2025-2030 Mandate",
        "desc": "Zero Tolerance commitments and fertility rate reduction targets by 2030."
      },
      "l2": {
        "tag": "CONSTITUTIONAL",
        "title": "Guarantee of Rights and Comprehensive Health",
        "desc": "Universal access to contraceptives and sexual violence response without discrimination."
      },
      "l3": {
        "tag": "FISCAL",
        "title": "Ring-Fenced Budget Allocation",
        "desc": "Protected and tagged resources for youth-friendly clinics and community prevention."
      }
    },
    "explorerTitleEn": "6. Territorial Indicators Explorer of Venezuela",
    "explorerSubtitleEn": "Territorialized diagnosis of fertility rates, clinic accreditation, and cost of inaction.",
    "manifestoTitleEn": "7. Legislative Manifesto and Public Policy Agenda for Venezuela (5 Points)",
    "manifestoItemsEn": [
      "1. Ring-fenced budget allocation in the Annual Budget Law for child and adolescent pregnancy prevention.",
      "2. Binding intersectoral Zero Tolerance protocol in girls under 15 and immediate response to sexual violence.",
      "3. Universal and barrier-free access to Long-Acting Reversible Contraceptives (LARCs) across all primary healthcare clinics.",
      "4. Mandatory implementation of Comprehensive Sexuality Education (CSE) with intercultural and gender-sensitive approaches.",
      "5. Accountability and oversight mechanism led by the National Ombudsperson Office and civil society organizations."
    ],
    "manifestoItems": [
      "1. Abastecimiento sostenido y distribución gratuita de implantes subdérmicos (LARCs) en la red ambulatoria y hospitalaria.",
      "2. Reactivación plena y financiamiento del Comité Técnico Intersectorial del Plan PRETA.",
      "3. Implementación universal de la Resolución 0004 de Educación Integral de la Sexualidad en todas las escuelas.",
      "4. Despliegue de brigadas de salud sexual con pertinencia cultural en Apure, Delta Amacuro y Amazonas.",
      "5. Fortalecimiento de la estrategia AIPEO (Anticoncepción Inmediata Posparto) en maternidades públicas."
    ],
    "sources": [
      {
        "id": "REF-PLANEA-2025",
        "tag": "ORAS-CONHU",
        "year": "2024",
        "title": "Plan Andino (PLANEA 2025-2030)",
        "desc": "Matriz multisectorial de metas andinas para la prevención del embarazo adolescente en los 6 países miembros."
      },
      {
        "id": "REF-OPS-MATERNA-2026",
        "tag": "OPS / OMS / UNFPA",
        "year": "2026",
        "title": "Informe de Salud Materna y Adolescente",
        "desc": "Reporte de indicadores de fecundidad (81.7/1k) y razón de mortalidad materna (125.4) en Venezuela."
      },
      {
        "id": "REF-LOPNNA-VE",
        "tag": "ASAMBLEA NACIONAL",
        "year": "LOPNNA",
        "title": "Ley Orgánica para la Protección de NNA",
        "desc": "Garantías de salud integral y derecho a la información en salud sexual y reproductiva de niños y adolescentes."
      },
      {
        "id": "REF-PLAN-PRETA",
        "tag": "MINMUJER / MPPS",
        "year": "Plan PRETA",
        "title": "Plan Nacional de Prevención del Embarazo",
        "desc": "Marco intersectorial para la prevención y reducción del embarazo a temprana edad y en la adolescencia."
      },
      {
        "id": "REF-RES-0004-EIS",
        "tag": "MIN. EDUCACIÓN",
        "year": "Gaceta N° 42.063",
        "title": "Resolución 0004 de Educación Sexual Integral",
        "desc": "Incorporación sistemática y obligatoria de la EIS en todo el subsistema de educación básica en Venezuela."
      },
      {
        "id": "REF-NORMA-SSR-VE",
        "tag": "MPPS VENEZUELA",
        "year": "Decreto N° 364",
        "title": "Norma Oficial de Salud Sexual y Reproductiva",
        "desc": "Protocolo clínico para la atención médica confidencial de adolescentes desde los 14 años sin permiso parental."
      }
    ],
    "heroDescAy": "Poderes Públicos, MPPS, MinMujer wan Gobernaciones ukanakatak qillqa <strong>Plan PRETA lurawita</strong> wan AIPEO qullayawi.",
    "heroDescGn": "Poderes Públicos, MPPS, MinMujer ha Gobernaciones-pe g̃uarã marandu <strong>Plan PRETA ha AIPEO</strong> rehegua.",
    "heroDescArn": "Poderes Públicos, MPPS, MinMujer ka Gobernaciones mew kisu kimün <strong>Plan PRETA ka AIPEO</strong> mew.",
    "heroDescQvi": "Poderes Públicos, MPPS, MinMujer wan Gobernaciones nisqapaq killka <strong>Plan PRETA yachaymanta</strong> wan AIPEO.",
    "heroDescGuc": "Poderes Públicos, MPPS, MinMujer je Gobernaciones süpüla <strong>Plan PRETA je AIPEO</strong> anticoncepción.",
    "heroDescWra": "Poderes Públicos, MPPS, MinMujer aribo <strong>Plan PRETA je AIPEO</strong> obonoba.",
    "heroDescPmn": "Poderes Públicos, MPPS, MinMujer mai <strong>Plan PRETA je AIPEO</strong> kure pe.",
    "heroDescPbb": "Poderes Públicos, MPPS, MinMujer yu'çeçx <strong>Plan PRETA je AIPEO</strong>.",
    "heroDescEmp": "Poderes Públicos, MPPS, MinMujer bedéa <strong>Plan PRETA je AIPEO</strong>.",
    "heroDescAsh": "Poderes Públicos, MPPS, MinMujer ñañantsi <strong>Plan PRETA je AIPEO</strong>.",
    "heroDescAgr": "Poderes Públicos, MPPS, MinMujer chicham <strong>Plan PRETA je AIPEO</strong>.",
    "heroDescJiv": "Poderes Públicos, MPPS, MinMujer chicham <strong>Plan PRETA je AIPEO</strong>.",
    "heroDescRap": "Puka haka tere no te Poderes Públicos, MPPS, MinMujer 'e Gobernaciones mo te <strong>Plan PRETA 'e AIPEO</strong>.",
    "siteTitleGuc": "Apalirawaa Politica: Jintüi Asitnushii Katataaka Venezuela",
    "siteTitleWra": "Goberno Politica: Iboma Asidaja Venezuela",
    "siteTitlePmn": "Politica Mai: Murekon Pimanse Venezuela",
    "manifestoTitleQu": "7. Kamachiy Qillqa wan Política Pública Agenda Venezuela Suyupaq (5 Puntos)",
    "manifestoItemsQu": [
      "1. Ley de Presupuesto Anual nisqapi wawa chichuy hark'anapaq qullqi t'aqayta takyachiy.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia kamachiy wan maqanakuyta utqaylla hark'ay.",
      "3. LARC unaypaq hampiyninkunata sapa postapi mana qullqillawan qoy.",
      "4. Educación Sexual Integral (ESI) yachachiyta intercultural wan runasimipi hunt'achiy.",
      "5. Defensoría del Pueblo wan ayllukunawan kuska qillqata qhaway wan hunt'achiy."
    ],
    "cardsQu": {
      "c1": {
        "tag": "ANCHA HATUN LLAKI",
        "title": "15 Watamanta Uray Sipaskunapi Chichuy: Maqanakuy",
        "desc": "15 watamanta uray wawakunapi chichuyqa violación qallariyniyuqmi. Mana allichasqaqa llakitam mirachin."
      },
      "c2": {
        "tag": "AYLLUPI CHINKAY",
        "title": "Wawa Kaspa Chichuy wan Yachay Chinkachiy",
        "desc": "Wawallaraq wawayuq kayqa yachaykunata qulluchin wan kawsay qullqita anchata pisiyachin."
      },
      "c3": {
        "tag": "HAMPI WASI PISIY",
        "title": "LARC wan Moderno Hampikuna Mana Aypay",
        "desc": "Postakunapi wan ayllu hampiwesikunapi implante wan DIU mana aypanchu."
      }
    },
    "roiQu": {
      "roi1": {
        "title": "Mana Ruraypa Chinkachiynin",
        "desc": "Hampi wasi gastokuna, yachay saqiy wan qullqi mana chaskisqakuna."
      },
      "roi2": {
        "title": "Qullqi Kutimuynin (ROI)",
        "desc": "Sapa $1 churamusqamanta, $4.80 - $11.00 kutimun ayllupaq wan suyupaq."
      }
    },
    "lawsQu": {
      "l1": {
        "tag": "KAMACHIY",
        "title": "Plan Andino PLANEA 2025-2030 Kamachiy",
        "desc": "Cero Tolerancia wan fecundidad pisiyachiy 2030 watapaq."
      },
      "l2": {
        "tag": "HATUN KAMACHIY",
        "title": "Derechos wan Allin Kawsay Amachay",
        "desc": "Tukuy runapaq LARC hampikuna wan maqanakuy hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHIY",
        "title": "Qullqi T'aqay Takyachiy",
        "desc": "Ayllu postakunapaq qullqi waqaychasqa."
      }
    },
    "manifestoTitleAy": "7. Suyu Kamachi Qillqa wan Políticas Públicas Venezuela Suyutaki (5 Puntos)",
    "manifestoItemsAy": [
      "1. Ley de Presupuesto Anual ukan sapürunjama qullqi t'aqawi imillanaka usuriptawi jark'aqañataki.",
      "2. 15 marat jisk'anakan Cero Tolerancia protocolos wan jank'aki qullayawi comisaríanakana.",
      "3. LARC unay qullañanaka taqi qullañ utanakana inaki churaña.",
      "4. Educación Sexual Integral (ESI) yatichawi intercultural wan aymar aruna phuqhaña.",
      "5. Defensoría del Pueblo yanapirinakampi qhawawi wan amachawi luraña."
    ],
    "cardsAy": {
      "c1": {
        "tag": "SINTIPUNI AXSARAWI",
        "title": "15 Marat Jisk'anakan Usuriptawi: Nuwasiña",
        "desc": "15 marat jisk'anakan usuriptawipax nuwasiñat jutiriwa. Jan askichatax jach'a llakiwa."
      },
      "c2": {
        "tag": "JAQI CHHAQAWI",
        "title": "Nayra Usuriptawi wan Yatichawi Chhaqawi",
        "desc": "Imillanaka usuriptawipax yatichawi qulluchiwa wan jakawi qullqi pisiyaptayi."
      },
      "c3": {
        "tag": "QULLAÑA UTAN PISI",
        "title": "LARC wan Moderno Qullanaka Jan Aypawi",
        "desc": "Qullañ utanakana implante wan DIU qullanakax janiw aypkiti."
      }
    },
    "roiAy": {
      "roi1": {
        "title": "Jan Lurawina Chhaqawipa",
        "desc": "Qullañ uta gastonaka, yatichawi jaytawi wan qullqi jan jikxatatanaka."
      },
      "roi2": {
        "title": "Qullqi Kutt'awi (ROI)",
        "desc": "Sapa $1 churatanakampi, $4.80 - $11.00 kutt'ani suyunakataki."
      }
    },
    "lawsAy": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan usuriptawi jisk'aptayaña 2030 marataki."
      },
      "l2": {
        "tag": "JACH'A KAMACHI",
        "title": "Derechos wan Qullañ Amachawi",
        "desc": "Taqinitak LARC qullanaka wan nuwasiña jark'aqaña."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'aqawi Imxatata",
        "desc": "Qullañ utanakataki qullqi amachatapuni."
      }
    },
    "manifestoTitleGn": "7. Tetã Rerekua Kuatia ha Políticas Públicas Venezuela-pe g̃uarã (5 Puntos)",
    "manifestoItemsGn": [
      "1. Viru mohenda Ley de Presupuesto Anual-pe mitãkuña usuriptawi jark'aqa hag̃ua.",
      "2. Cero Tolerancia protocols 15 ary guýpe ha ñangareko pya'e violencia sexual rehe.",
      "3. LARC pohã ñeme'ẽ opavave tasyo ha puesto de salud rupive.",
      "4. Educación Sexual Integral (ESI) mbo'epy hekopete guaraníme ha castellánope.",
      "5. Defensoría del Pueblo ha tetãygua aty ñemongeta ha jehechajey."
    ],
    "cardsGn": {
      "c1": {
        "tag": "KYHYJE GUASU",
        "title": "Mitãkuña 15 Ary Guýpe Usuriptawi: Ñerairõ",
        "desc": "100% mitãkuña 15 ary guýpe hyeguáva oñembotavy rupi. Tekotevẽ ñangareko pya'e."
      },
      "c2": {
        "tag": "TEKO KAÑY",
        "title": "Mitãkuña Memby ha Tekoasy",
        "desc": "Mitãkuña memby ogueru tekoasy ha ombopaha mbo'epy heñóva."
      },
      "c3": {
        "tag": "TASYÓPE KAÑY",
        "title": "LARC ha Anticonceptivos Pokã",
        "desc": "Tasyo michĩvape ndaipóri implante ha DIU mitãkuñáme g̃uarã."
      }
    },
    "roiGn": {
      "roi1": {
        "title": "Viru Kañy",
        "desc": "Tasyo gasto, mbo'epy jejayei ha viru ndohupytýiva."
      },
      "roi2": {
        "title": "Viru Jehevy (ROI)",
        "desc": "Peteĩ $1 emoĩvape g̃uarã, $4.80 - $11.00 ojevy tetãme."
      }
    },
    "lawsGn": {
      "l1": {
        "tag": "TEKO ME'Ẽ",
        "title": "Plan Andino PLANEA 2025-2030 Teko",
        "desc": "Cero Tolerancia ha fecundidad guejy 2030 arype."
      },
      "l2": {
        "tag": "TETÃ ME'Ẽ",
        "title": "Derécho ha Tesãi Ñangareko",
        "desc": "LARC pohã opavavépe ha ñerairõ jark'a."
      },
      "l3": {
        "tag": "VIRU ME'Ẽ",
        "title": "Viru Mohenda Ñangareko",
        "desc": "Tasyo michĩvape viru oñemohendáva."
      }
    },
    "manifestoTitleArn": "7. Ngülamtun Politica Dungu Agenda Venezuela Mew (5 Puntos)",
    "manifestoItemsArn": [
      "1. Kisu Presupuesto Ley de Presupuesto Anual mew wechekeche koñin kuñiwtual.",
      "2. Cero Tolerancia protocolos 15 tripantu pichikeche kuñiwtual kom posta mew.",
      "3. LARC kuñiwtun lawen kom pu centro de salud mew nieal.",
      "4. Educación Sexual Integral (ESI) küme kimün kom chillkatuwe mapudungun mew.",
      "5. Defensoría del Pueblo ka lof che mew kisu kuñiwtun dungu."
    ],
    "cardsArn": {
      "c1": {
        "tag": "AÑKEN DUNGU",
        "title": "15 Tripantu Pichikeche Koñin: Weda Dungu",
        "desc": "Kom 15 tripantu pichikeche koñin niey weda dungu mew. Kuñiwtual tañi mongen."
      },
      "c2": {
        "tag": "MAPU MEW KAÑY",
        "title": "Wechekeche Koñin ka Kimün Ngelay",
        "desc": "Wechekeche koñin niey mew fey kimün ngelay ka kulliñ pisiyachi."
      },
      "c3": {
        "tag": "LAWENTUWE PISI",
        "title": "LARC ka Küme Lawen Ngelay",
        "desc": "Posta mew implante ka DIU ngelay wechekeche domo mew."
      }
    },
    "roiArn": {
      "roi1": {
        "title": "Kisu Femnon Mew Kulliñ",
        "desc": "Lawentuwe gasto, chillkatuwe ngelay ka kulliñ kañy."
      },
      "roi2": {
        "title": "Kulliñ Wiñol (ROI)",
        "desc": "Fill $1 kulliñ mew, $4.80 - $11.00 wiñoy mapu mew."
      }
    },
    "lawsArn": {
      "l1": {
        "tag": "NGÜLAM",
        "title": "Plan Andino PLANEA 2025-2030 Ngülam",
        "desc": "Cero Tolerancia ka wechekeche koñin ngelay 2030 tripantu mew."
      },
      "l2": {
        "tag": "FÜTRA NGÜLAM",
        "title": "Derechos ka Küme Mongen",
        "desc": "Kom che mew LARC lawen ka weda dungu kuñiwtun."
      },
      "l3": {
        "tag": "KULLIÑ NGÜLAM",
        "title": "Kulliñ Kuñiwtun",
        "desc": "Posta mew kulliñ kuñiwtual."
      }
    },
    "manifestoTitleQvi": "7. Llaktapa Kamachi Killka Agenda Venezuela Llaktapi (5 Puntos)",
    "manifestoItemsQvi": [
      "1. Ley de Presupuesto ukupi wawa chichuy hark'ankapak qullqi t'akayta sinyachina.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia protocolos wan utka yanapana.",
      "3. LARC unaypa hampikunata tukuy hampiwasi ukupi llukshichina.",
      "4. Educación Sexual Integral (ESI) yachana wasikunapi kichwapi paktachina.",
      "5. Defensoría del Pueblo wan llaktakunawan kuska killkata rikuriy."
    ],
    "cardsQvi": {
      "c1": {
        "tag": "YAPA JATUN LLAKI",
        "title": "15 Watamanta Uray Wawa Chichuy: Llaki",
        "desc": "15 watamanta uray wawakunapi chichuyqa llakiyuqmi. Mana allichaspaqa llakitami mirachin."
      },
      "c2": {
        "tag": "LLAKTA PISI",
        "title": "Wawa Chichuy wan Yachay Chinkay",
        "desc": "Wawa chichuyka yachayta pishiyachin wan kawsayta llakichin."
      },
      "c3": {
        "tag": "HAMPIWASI PISI",
        "title": "LARC wan Hampikuna Mana Tiyay",
        "desc": "Hampiwasi ukupi implante wan DIU mana aypanchu."
      }
    },
    "roiQvi": {
      "roi1": {
        "title": "Mana Ruraypa Chinkaynin",
        "desc": "Hampiwasi gastokuna, yachay sakiy wan kawsay qullqi pisi."
      },
      "roi2": {
        "title": "Qullqi Kutiy (ROI)",
        "desc": "Sapa $1 churashkamanta, $4.80 - $11.00 kutin llaktapaq."
      }
    },
    "lawsQvi": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan wawa chichuy pisi 2030 watapak."
      },
      "l2": {
        "tag": "JATUN KAMACHI",
        "title": "Derechos wan Alli Kawsay",
        "desc": "Tukuykunapak LARC hampikuna wan llaki hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'akay",
        "desc": "Hampiwasi ukupi qullqi charina."
      }
    },
    "manifestoTitleGuc": "7. Apalirawaa Politica Agenda Venezuela (5 Puntos)",
    "manifestoItemsGuc": [
      "1. Walawaa presupuestal süpüla jintüi asitnushii katataaka Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos süpüla 15 juyamüin jintüin je anaa.",
      "3. LARC anticonceptivos tü taashii süpüla mmapa'a.",
      "4. Educación Sexual Integral (ESI) wayuunaikiru'u ekirajaapülee.",
      "5. Defensoría del Pueblo je wayuu akaliojiraa."
    ],
    "cardsGuc": {
      "c1": {
        "tag": "MÜLIAA MÜSIA",
        "title": "15 Juyamüin Jintüi Asitnushii: Müliaa",
        "desc": "15 juyamüin jintüin asitnushii katataaka. Cho'ujaasü akaliojiraa süpüla anaa."
      },
      "c2": {
        "tag": "MMAPA'A PISI",
        "title": "Jintüi Katataaka je Ekirajaapülee Chinkay",
        "desc": "Jintüi asitnushii ekirajaapülee chinkachi."
      },
      "c3": {
        "tag": "ANAA AYATAWAA",
        "title": "LARC je Anticonceptivos Pokã",
        "desc": "Posta je centro de salud nojotshi implante süpüla jintüi."
      }
    },
    "roiGuc": {
      "roi1": {
        "title": "Walawaa Chinkay",
        "desc": "Centro de salud gasto, ekirajaapülee chinkay."
      },
      "roi2": {
        "title": "Walawaa Anaa (ROI)",
        "desc": "Süpüla $1 walawaa, $4.80 - $11.00 anaa mmapa'a."
      }
    },
    "lawsGuc": {
      "l1": {
        "tag": "PÜTCHI",
        "title": "Plan Andino PLANEA 2025-2030 Pütchi",
        "desc": "Cero Tolerancia je jintüi asitnushii katataaka 2030."
      },
      "l2": {
        "tag": "ANAA PÜTCHI",
        "title": "Derechos je Anaa",
        "desc": "Mmapa'a LARC anticonceptivos je müliaa jark'a."
      },
      "l3": {
        "tag": "WALAWA PÜTCHI",
        "title": "Walawaa Presupuesto",
        "desc": "Posta walawaa anaa."
      }
    },
    "manifestoTitleWra": "7. Obonoba Politica Agenda Venezuela (5 Puntos)",
    "manifestoItemsWra": [
      "1. Presupuesto aribo iboma asidaja obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata sanuka iboma.",
      "3. LARC anticonceptivos kokotune hanoko.",
      "4. Educación Sexual Integral (ESI) warao aribo eskuela.",
      "5. Defensoría aribo nomewitu sanuka."
    ],
    "cardsWra": {
      "c1": {
        "tag": "OBONOBA SANUKA",
        "title": "15 Wata Sanuka Iboma Asidaja: Obonoba",
        "desc": "15 wata sanuka iboma asidaja obonoba nomewitu."
      },
      "c2": {
        "tag": "ARIBO SANUKA",
        "title": "Iboma Asidaja eskuela obonoba",
        "desc": "Iboma asidaja eskuela chinkachi."
      },
      "c3": {
        "tag": "HANOKO PISI",
        "title": "LARC Anticonceptivos Hanoko",
        "desc": "Hanoko sanuka implante nojotshi."
      }
    },
    "roiWra": {
      "roi1": {
        "title": "Obonoba Aribo Chinkay",
        "desc": "Hanoko gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Aribo Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa hanoko."
      }
    },
    "lawsWra": {
      "l1": {
        "tag": "ARIBO",
        "title": "Plan Andino PLANEA 2025-2030 Aribo",
        "desc": "Cero Tolerancia iboma asidaja 2030."
      },
      "l2": {
        "tag": "NOMIEWITU",
        "title": "Derechos je Hanoko",
        "desc": "LARC anticonceptivos hanoko kokotune."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Hanoko",
        "desc": "Hanoko sanuka aribo."
      }
    },
    "manifestoTitlePmn": "7. Politica Mai Agenda Venezuela (5 Puntos)",
    "manifestoItemsPmn": [
      "1. Presupuesto mai murekon pimanse obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata murekon mai.",
      "3. LARC anticonceptivos kokotune pata'pï iwe.",
      "4. Educación Sexual Integral (ESI) pemón mai eskuela.",
      "5. Defensoría mai nomewitu murekon."
    ],
    "cardsPmn": {
      "c1": {
        "tag": "PATA'PÏ MAI",
        "title": "15 Wata Murekon Pimanse: Pata'pï",
        "desc": "15 wata murekon pimanse pata'pï mai."
      },
      "c2": {
        "tag": "MAI PITI",
        "title": "Murekon Pimanse eskuela mai",
        "desc": "Murekon pimanse eskuela chinkachi."
      },
      "c3": {
        "tag": "IWE PISI",
        "title": "LARC Anticonceptivos Iwe",
        "desc": "Pata'pï iwe implante nojotshi."
      }
    },
    "roiPmn": {
      "roi1": {
        "title": "Mai Piti Chinkay",
        "desc": "Pata'pï iwe gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Mai Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa iwe."
      }
    },
    "lawsPmn": {
      "l1": {
        "tag": "MAI",
        "title": "Plan Andino PLANEA 2025-2030 Mai",
        "desc": "Cero Tolerancia murekon pimanse 2030."
      },
      "l2": {
        "tag": "PATA'PÏ",
        "title": "Derechos je Iwe",
        "desc": "LARC anticonceptivos pata'pï iwe."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Iwe",
        "desc": "Pata'pï iwe mai."
      }
    },
    "manifestoTitlePbb": "7. Yu'çeçx Politica Agenda Venezuela (5 Puntos)",
    "manifestoItemsPbb": [
      "1. Presupuesto nxusxi ku'j we'sx thegnikha's Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 vxite' ku'j we'sx.",
      "3. LARC yu'çeçx taashii ta'çxhab.",
      "4. Educación Sexual Integral (ESI) nasa yuwete ekirajaapülee.",
      "5. Defensoría del Pueblo thegnikha's."
    ],
    "cardsPbb": {
      "c1": {
        "tag": "KU'J WE'SX",
        "title": "15 Vxite' Ku'j Thegnikha's: Ku'j",
        "desc": "15 vxite' ku'j we'sx thegnikha's."
      },
      "c2": {
        "tag": "ÇXHAB PISI",
        "title": "Ku'j Thegnikha's eskuela çxhab",
        "desc": "Ku'j we'sx eskuela chinkachi."
      },
      "c3": {
        "tag": "YAÇK PISI",
        "title": "LARC Yu'çeçx Yaçk",
        "desc": "Yaçk taashii implante nojotshi."
      }
    },
    "roiPbb": {
      "roi1": {
        "title": "Ku'j We'sx Chinkay",
        "desc": "Yaçk gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Ku'j Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa çxhab."
      }
    },
    "lawsPbb": {
      "l1": {
        "tag": "YU'ÇEÇX",
        "title": "Plan Andino PLANEA 2025-2030 Yu'çeçx",
        "desc": "Cero Tolerancia ku'j we'sx 2030."
      },
      "l2": {
        "tag": "ÇXHAB",
        "title": "Derechos je Yaçk",
        "desc": "LARC yu'çeçx taashii ta'çxhab."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Çxhab",
        "desc": "Çxhab yaçk yu'çeçx."
      }
    },
    "manifestoTitleEmp": "7. Bedéa Politica Agenda Venezuela (5 Puntos)",
    "manifestoItemsEmp": [
      "1. Presupuesto druade wẽra warrade Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 warrarãde wẽra.",
      "3. LARC anticonceptivos druade droma.",
      "4. Educación Sexual Integral (ESI) emberá bedéade eskuela.",
      "5. Defensoría del Pueblo druade bia."
    ],
    "cardsEmp": {
      "c1": {
        "tag": "KHARRA DRUADE",
        "title": "15 Warrarãde Wẽra: Kharra",
        "desc": "15 warrarãde wẽra kharra druade."
      },
      "c2": {
        "tag": "DRUA PISI",
        "title": "Wẽra Warrarã eskuela drua",
        "desc": "Wẽra warrarã eskuela chinkachi."
      },
      "c3": {
        "tag": "DROMA PISI",
        "title": "LARC Anticonceptivos Droma",
        "desc": "Droma implante nojotshi."
      }
    },
    "roiEmp": {
      "roi1": {
        "title": "Drua Bedéa Chinkay",
        "desc": "Droma gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Drua Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa drua."
      }
    },
    "lawsEmp": {
      "l1": {
        "tag": "BEDÉA",
        "title": "Plan Andino PLANEA 2025-2030 Bedéa",
        "desc": "Cero Tolerancia wẽra warrade 2030."
      },
      "l2": {
        "tag": "DRUA",
        "title": "Derechos je Droma",
        "desc": "LARC anticonceptivos druade droma."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Drua",
        "desc": "Druade droma bedéa."
      }
    },
    "manifestoTitleAsh": "7. Kametsari Politica Agenda Venezuela (5 Puntos)",
    "manifestoItemsAsh": [
      "1. Presupuesto pankotsi eentsite kametsari Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 osarentsi eentsite.",
      "3. LARC anticonceptivos pankotsi maaroni.",
      "4. Educación Sexual Integral (ESI) asháninka ñañantsi eskuela.",
      "5. Defensoría del Pueblo eentsite kametsa."
    ],
    "cardsAsh": {
      "c1": {
        "tag": "KAMETSARIÑA",
        "title": "15 Osarentsi Eentsite: Kametsa",
        "desc": "15 osarentsi eentsite kametsariña."
      },
      "c2": {
        "tag": "PANKOTSI PISI",
        "title": "Eentsite eskuela pankotsi",
        "desc": "Eentsite eskuela chinkachi."
      },
      "c3": {
        "tag": "PANKOTSI PISI",
        "title": "LARC Anticonceptivos Pankotsi",
        "desc": "Pankotsi implante nojotshi."
      }
    },
    "roiAsh": {
      "roi1": {
        "title": "Pankotsi Kametsa Chinkay",
        "desc": "Pankotsi gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Pankotsi Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa pankotsi."
      }
    },
    "lawsAsh": {
      "l1": {
        "tag": "ÑAÑANTSI",
        "title": "Plan Andino PLANEA 2025-2030 Ñañantsi",
        "desc": "Cero Tolerancia eentsite 2030."
      },
      "l2": {
        "tag": "PANKOTSI",
        "title": "Derechos je Pankotsi",
        "desc": "LARC anticonceptivos pankotsi maaroni."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Pankotsi",
        "desc": "Pankotsi eentsite ñañantsi."
      }
    },
    "manifestoTitleAgr": "7. Datsajum Politica Agenda Venezuela (5 Puntos)",
    "manifestoItemsAgr": [
      "1. Presupuesto apu datsajum pegker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 mijan datsajum.",
      "3. LARC anticonceptivos pegker jea.",
      "4. Educación Sexual Integral (ESI) awajún chicham eskuela.",
      "5. Defensoría del Pueblo datsajum pegker."
    ],
    "cardsAgr": {
      "c1": {
        "tag": "PEGKERCHAU",
        "title": "15 Mijan Datsajum: Pegkerchau",
        "desc": "15 mijan datsajum pegkerchau."
      },
      "c2": {
        "tag": "JEA PISI",
        "title": "Datsajum eskuela jea",
        "desc": "Datsajum eskuela chinkachi."
      },
      "c3": {
        "tag": "JEA PISI",
        "title": "LARC Anticonceptivos Jea",
        "desc": "Jea implante nojotshi."
      }
    },
    "roiAgr": {
      "roi1": {
        "title": "Datsajum Pegker Chinkay",
        "desc": "Jea gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Datsajum Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa jea."
      }
    },
    "lawsAgr": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia datsajum 2030."
      },
      "l2": {
        "tag": "JEA",
        "title": "Derechos je Jea",
        "desc": "LARC anticonceptivos pegker jea."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Jea",
        "desc": "Jea datsajum chicham."
      }
    },
    "manifestoTitleJiv": "7. Natsa Politica Agenda Venezuela (5 Puntos)",
    "manifestoItemsJiv": [
      "1. Presupuesto uunt natsa penker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 uchin natsa.",
      "3. LARC anticonceptivos penker tsuwatai.",
      "4. Educación Sexual Integral (ESI) shuar chicham eskuela.",
      "5. Defensoría del Pueblo natsa penker."
    ],
    "cardsJiv": {
      "c1": {
        "tag": "PENKERCHAU",
        "title": "15 Uchin Natsa: Penkerchau",
        "desc": "15 uchin natsa penkerchau."
      },
      "c2": {
        "tag": "TSUWATAI PISI",
        "title": "Natsa eskuela tsuwatai",
        "desc": "Natsa eskuela chinkachi."
      },
      "c3": {
        "tag": "TSUWATAI PISI",
        "title": "LARC Anticonceptivos Tsuwatai",
        "desc": "Tsuwatai implante nojotshi."
      }
    },
    "roiJiv": {
      "roi1": {
        "title": "Natsa Penker Chinkay",
        "desc": "Tsuwatai gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Natsa Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa tsuwatai."
      }
    },
    "lawsJiv": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia natsa 2030."
      },
      "l2": {
        "tag": "TSUWATAI",
        "title": "Derechos je Tsuwatai",
        "desc": "LARC anticonceptivos penker tsuwatai."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Tsuwatai",
        "desc": "Tsuwatai natsa chicham."
      }
    },
    "manifestoTitleRap": "7. Vānaŋa Haka Oho Agenda mo Venezuela (5 Puntos)",
    "manifestoItemsRap": [
      "1. Moni haka tere no te poki 'āpī hapu'a kore i roto i te Ley de Presupuesto Anual.",
      "2. Cero Tolerancia protocolos mo te poki o raro i te 15 matahiti.",
      "3. LARC anticonceptivos pāruru mo te kāiŋa.",
      "4. Educación Sexual Integral (ESI) 'ite i roto i te ha'api'ira'a vananga Rapa Nui.",
      "5. Defensoría de la Niñez pāruru mo te poki kāiŋa."
    ],
    "cardsRap": {
      "c1": {
        "tag": "RARI NUI",
        "title": "15 Matahiti Poki Hapu'a: Rari",
        "desc": "15 matahiti poki hapu'a kore rari nui."
      },
      "c2": {
        "tag": "KĀIŊA PISI",
        "title": "Poki Hapu'a ha'api'ira'a kāiŋa",
        "desc": "Poki hapu'a ha'api'ira'a chinkachi."
      },
      "c3": {
        "tag": "HARE PISI",
        "title": "LARC Anticonceptivos Hare",
        "desc": "Hare implante nojotshi."
      }
    },
    "roiRap": {
      "roi1": {
        "title": "Kāiŋa Moni Kore",
        "desc": "Hare gasto, ha'api'ira'a kore."
      },
      "roi2": {
        "title": "Moni Haka Oho (ROI)",
        "desc": "Mo te $1, $4.80 - $11.00 moni hoki mai."
      }
    },
    "lawsRap": {
      "l1": {
        "tag": "VĀNAŊA",
        "title": "Plan Andino PLANEA 2025-2030 Vānaŋa",
        "desc": "Cero Tolerancia poki hapu'a kore 2030."
      },
      "l2": {
        "tag": "KĀIŊA",
        "title": "Derechos je Hare",
        "desc": "LARC anticonceptivos pāruru mo te kāiŋa."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Kāiŋa",
        "desc": "Kāiŋa hare vānaŋa."
      }
    }
  },
  "regional": {
    "name": "Región Andina",
    "flag": "🌍",
    "flagSvg": "<span class=\"text-base align-middle\">🌍</span>",
    "badge": "ORAS-CONHU • PLANEA 2025-2030 🌍",
    "siteTitle": "Plataforma Regional de Incidencia Política: Plan Andino PLANEA 2025-2030",
    "siteTitleEn": "Regional Policy Advocacy Platform: Andean Plan PLANEA 2025-2030",
    "siteTitleQu": "Suyu Kamachiy Qhawana: Plan Andino PLANEA 2025-2030",
    "endorsed": [
      "ORAS-CONHU",
      "UNFPA LACRO",
      "OPS/OMS",
      "UNICEF"
    ],
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-teal to-brand-accent'>Plan Andino PLANEA 2025-2030 (6 Países)</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-teal to-brand-accent'>Andean Plan PLANEA 2025-2030 (6 Countries)</span>",
    "heroTitleQu": "Mana Ruraypa Qullqi Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-teal to-brand-accent'>Plan Andino PLANEA 2025-2030 (Suqta Suyukunapaq)</span>",
    "heroDesc": "Marco comparativo multisectorial de <strong>Bolivia, Chile, Colombia, Ecuador, Perú y Venezuela</strong> ante el Organismo Andino de Salud (ORAS-CONHU), UNFPA y OPS/OMS.",
    "heroDescEn": "Multisectoral comparative framework for <strong>Bolivia, Chile, Colombia, Ecuador, Peru, and Venezuela</strong> under ORAS-CONHU, UNFPA, and PAHO/WHO.",
    "heroDescQu": "Suqta Andes suyukunapaq comparativo qillqa <strong>Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela</strong> ORAS-CONHU, UNFPA wan OPS nisqawan.",
    "metrics": [
      {
        "val": "6 Países",
        "lbl": "Compromiso Subregional Andino",
        "lblEn": "Andean Subregional Commitment",
        "lblQu": "Suqta Andes Suyukuna"
      },
      {
        "val": "USD 13.5B",
        "lbl": "Pérdida Agregada LAC (Estudios MILENA)",
        "lblEn": "Aggregated Loss in LAC (MILENA)",
        "lblQu": "Sapa Wata Chinkachiy LACpi"
      },
      {
        "val": "Cero",
        "lbl": "Meta Fecundidad en <15 Años al 2030",
        "lblEn": "Target in <15 Years by 2030",
        "lblQu": "15 Watamanta Uray Cero Meta"
      },
      {
        "val": "USD 7:1",
        "lbl": "Retorno Social de Inversión Promedio",
        "lblEn": "Average Social ROI (7:1)",
        "lblQu": "Sapa Dólar Dólar 7:1 Kutichiy"
      }
    ],
    "cards": {
      "c1": {
        "tag": "COMPROMISO POLÍTICO ANDINO",
        "title": "Meta Subregional de Cero Tolerancia al 2030",
        "desc": "Los 6 Ministros de Salud del Área Andina suscribieron la resolución REMSAA para erradicar el embarazo infantil en menores de 15 años y acelerar la reducción de la fecundidad adolescente."
      },
      "c2": {
        "tag": "EVIDENCIA ACTUARIAL MILENA",
        "title": "Pérdida Agregada de USD 13,538 Millones en LAC",
        "desc": "El estudio consolidado del UNFPA en 15 países demuestra que la inacción cuesta el 1% del PIB regional promedio, recayendo el 88.2% del impacto en ingresos y educación de las mujeres."
      },
      "c3": {
        "tag": "ESTÁNDARES GLOBALES DE SALUD",
        "title": "Guías AA-HA! de la OMS, OPS y UNICEF",
        "desc": "Aceleración de la Acción Mundial en favor de la Salud de los Adolescentes: paquete de intervenciones basadas en evidencia para políticas públicas, servicios amigables y ESI."
      }
    },
    "roi": {
      "roi1": {
        "title": "Pérdida Económica Agregada en América Latina: USD 13.5 Mil Millones",
        "desc": "El 88.2% del impacto recae directamente sobre las mujeres en pérdidas educativas (USD 2.8B), menor participación laboral e ingresos reducidos a lo largo de su vida productiva."
      },
      "roi2": {
        "title": "Retorno Social de Inversión Regional Comprobado (7:1)",
        "desc": "Cada dólar invertido en prevención, anticoncepción moderna (LARC) y Educación Integral de la Sexualidad (EIS) ahorra 7 dólares en costos asistenciales hospitalarios y programas de subsistencia."
      }
    },
    "laws": {
      "l1": {
        "tag": "RESOLUCIÓN MINISTERIAL",
        "title": "Resolución REMSAA XLI 569",
        "desc": "Aprobación formal del Plan Andino de Prevención y Reducción del Embarazo en la Adolescencia 2025-2030 por los 6 países miembros."
      },
      "l2": {
        "tag": "CONSENSO REGIONAL",
        "title": "Consenso de Montevideo sobre Población",
        "desc": "Marco intergubernamental de América Latina y el Caribe para la garantía plena de los derechos sexuales y reproductivos de la juventud."
      },
      "l3": {
        "tag": "ESTÁNDAR INTERNACIONAL",
        "title": "Guías AA-HA! (OPS / OMS / UNFPA / UNICEF)",
        "desc": "Estándares globales para la atención integral y diferenciada de adolescentes en sistemas de salud pública."
      }
    },
    "explorerTitle": "6. Comparador de Indicadores de Fecundidad y Salud por Países Andinos",
    "explorerSubtitle": "Matriz comparativa de tasas de fecundidad, cobertura de salud y compromiso normativo.",
    "regions": {
      "Venezuela": {
        "label": "Venezuela",
        "fertility": "81.7 por 1,000",
        "fertilityVal": 81.7,
        "fertilityPct": 82,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Mayor Tasa Subregional",
        "coverage": "32% Cobertura Estimada",
        "coverageVal": 32,
        "coverageGap": 68,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Crítica (68%)",
        "inactionCost": "Alto Impacto",
        "inactionVal": 150,
        "inactionScale": 95,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> TEFA <15 años: 4.81/1k",
        "priority": "Abastecimiento masivo de métodos LARC y reactivación del Comité Intersectorial del Plan PRETA."
      },
      "Bolivia": {
        "label": "Bolivia",
        "fertility": "48.0 por 1,000",
        "fertilityVal": 48,
        "fertilityPct": 48,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Alta Disparidad Rural (109/1k)",
        "coverage": "42% Cobertura AIDA",
        "coverageVal": 42,
        "coverageGap": 58,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Rural (58%)",
        "inactionCost": "USD 373.3 Millones/año",
        "inactionVal": 373,
        "inactionScale": 75,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> 0.91% del PIB Nacional",
        "priority": "Asignación presupuestaria garantizada para AIDA y EIS en lenguas originarias (Quechua, Aymara, Guaraní)."
      },
      "Ecuador": {
        "label": "Ecuador",
        "fertility": "39.55 por 1,000",
        "fertilityVal": 39.5,
        "fertilityPct": 40,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-rose-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Amazonía Crítica (Napo 85.6/1k)",
        "coverage": "46% Cobertura SAIAA",
        "coverageVal": 46,
        "coverageGap": 54,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Amazónica (54%)",
        "inactionCost": "USD 221.6 Millones/año",
        "inactionVal": 221,
        "inactionScale": 65,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> 0.26% del PIB Nacional",
        "priority": "Financiamiento de la PIPENA y universalización de servicios amigables SAIAA con enfoque intercultural."
      },
      "Colombia": {
        "label": "Colombia",
        "fertility": "55.8 por 1,000",
        "fertilityVal": 55.8,
        "fertilityPct": 56,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-amber-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> 59% en Uniones Tempranas",
        "coverage": "52% Cobertura Ruta 3280",
        "coverageVal": 52,
        "coverageGap": 48,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Moderada (48%)",
        "inactionCost": "USD 2,549 Millones/año",
        "inactionVal": 2549,
        "inactionScale": 100,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> 0.58% del PIB Nacional",
        "priority": "Implementación de la Resolución 309 de 2025 y fortalecimiento del Plan PAREMM en municipios PDET."
      },
      "Peru": {
        "label": "Perú",
        "fertility": "55.3 por 1,000",
        "fertilityVal": 55.3,
        "fertilityPct": 55,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-amber-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Brecha Selva (Loreto 85.4/1k)",
        "coverage": "35% Postas I-3/I-4",
        "coverageVal": 35,
        "coverageGap": 65,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha de Acreditación (65%)",
        "inactionCost": "S/ 1,200 Millones/año",
        "inactionVal": 1200,
        "inactionScale": 85,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> 0.45% del PBI Nacional",
        "priority": "Partida presupuestal para el Programa 0002 MINSA y acreditación de consultorios amigables NTS N° 130."
      },
      "Chile": {
        "label": "Chile",
        "fertility": "20.1 por 1,000",
        "fertilityVal": 20.1,
        "fertilityPct": 20,
        "fertilityRisk": "<i class=\"fa-solid fa-circle text-emerald-500 text-[8px] mr-1\" aria-hidden=\"true\"></i> Reducción Histórica (-61.6%)",
        "coverage": "72% Espacios Amigables",
        "coverageVal": 72,
        "coverageGap": 28,
        "coverageStatus": "<i class=\"fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> Brecha Macrozona Norte (28%)",
        "inactionCost": "Menor Impacto Relativo",
        "inactionVal": 85,
        "inactionScale": 40,
        "inactionTag": "<i class=\"fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1\" aria-hidden=\"true\"></i> RMM más baja (19.2/100k)",
        "priority": "Consolidación del Sistema de Garantías de la Niñez (Ley 21.430) y retención escolar 'Para que Estudie Contigo'."
      }
    },
    "manifestoTitle": "7. Manifiesto y Agenda Andina de Política Pública Regional (5 Puntos)",
    "cardsEn": {
      "c1": {
        "tag": "CRITICAL URGENCY",
        "title": "Pregnancy in Girls Under 15: Sexual Violence",
        "desc": "100% of pregnancies in children under 15 are statutory rape. Inaction perpetuates cycles of impunity and structural vulnerability."
      },
      "c2": {
        "tag": "SOCIAL IMPACT",
        "title": "Early Fertility and Compounded Opportunity Loss",
        "desc": "Early motherhood severely cuts lifetime earnings and truncates educational progression across generations."
      },
      "c3": {
        "tag": "HEALTH BARRIER",
        "title": "Gaps in Modern Contraceptive Delivery and LARCs",
        "desc": "Inconsistent availability of Long-Acting Reversible Contraceptives (implants, IUDs) in primary care clinics."
      }
    },
    "roiEn": {
      "roi1": {
        "title": "Loss Due to Inaction",
        "desc": "Aggregate lifetime economic burden in public health, school dropout, and forfeited labor income."
      },
      "roi2": {
        "title": "Return on Investment (ROI)",
        "desc": "For every $1 invested in adolescent pregnancy prevention, between $4.80 and $11.00 is returned."
      }
    },
    "lawsEn": {
      "l1": {
        "tag": "BINDING",
        "title": "Andean Plan PLANEA 2025-2030 Mandate",
        "desc": "Zero Tolerance commitments and fertility rate reduction targets by 2030."
      },
      "l2": {
        "tag": "CONSTITUTIONAL",
        "title": "Guarantee of Rights and Comprehensive Health",
        "desc": "Universal access to contraceptives and sexual violence response without discrimination."
      },
      "l3": {
        "tag": "FISCAL",
        "title": "Ring-Fenced Budget Allocation",
        "desc": "Protected and tagged resources for youth-friendly clinics and community prevention."
      }
    },
    "explorerTitleEn": "6. Andean Regional Indicators Explorer (6 Countries)",
    "explorerSubtitleEn": "Comparative overview of fertility rates, clinic accreditation, and cost of inaction across the Andean region.",
    "manifestoTitleEn": "7. Legislative Manifesto and Public Policy Agenda for Región Andina (5 Points)",
    "manifestoItemsEn": [
      "1. Ring-fenced budget allocation in the Annual Budget Law for child and adolescent pregnancy prevention.",
      "2. Binding intersectoral Zero Tolerance protocol in girls under 15 and immediate response to sexual violence.",
      "3. Universal and barrier-free access to Long-Acting Reversible Contraceptives (LARCs) across all primary healthcare clinics.",
      "4. Mandatory implementation of Comprehensive Sexuality Education (CSE) with intercultural and gender-sensitive approaches.",
      "5. Accountability and oversight mechanism led by the National Ombudsperson Office and civil society organizations."
    ],
    "manifestoItems": [
      "1. Asignación de líneas presupuestarias protegidas y etiquetadas para la salud adolescente en los 6 países miembros.",
      "2. Aseguramiento regional de insumos y métodos anticonceptivos modernos (LARCs) mediante fondos rotatorios OPS/UNFPA.",
      "3. Armonización de marcos legales para tipificar y perseguir el embarazo infantil <15 años como violencia sexual.",
      "4. Implementación universal de Educación Integral de la Sexualidad (EIS) adaptada a lenguas indígenas andinas y amazónicas.",
      "5. Sistema de Monitoreo y Rendición de Cuentas Subregional liderado por el ORAS-CONHU."
    ],
    "sources": [
      {
        "id": "REF-PLANEA-2025",
        "tag": "ORAS-CONHU",
        "year": "2024",
        "title": "Plan Andino (PLANEA 2025-2030)",
        "desc": "Matriz multisectorial de metas andinas aprobada por los Ministerios de Salud de los 6 países miembros."
      },
      {
        "id": "REF-MILENA-LAC",
        "tag": "UNFPA LACRO",
        "year": "2021",
        "title": "Sistematización de Evidencias MILENA (15 Países)",
        "desc": "Consecuencias socioeconómicas del embarazo adolescente en América Latina y el Caribe (Pérdida de USD 13,538M anuales)."
      },
      {
        "id": "REF-AAHA-OPS",
        "tag": "OPS / OMS / UNICEF",
        "year": "2023",
        "title": "Guía Global AA-HA! para la Salud Adolescente",
        "desc": "Aceleración de la Acción Mundial en favor de la Salud de los Adolescentes: intervenciones clínicas y políticas basadas en evidencia."
      },
      {
        "id": "REF-INEQUIDADES",
        "tag": "OPS / UNFPA",
        "year": "2023",
        "title": "Compendio para Combatir Inequidades en Salud",
        "desc": "Estrategias de equidad territorial, enfoque intercultural y derechos en salud sexual y reproductiva en la Región Andina."
      },
      {
        "id": "REF-MATERNA-2026",
        "tag": "ORAS-CONHU / OPS",
        "year": "2026",
        "title": "Indicadores de Salud Materna en Países Andinos",
        "desc": "Tablero comparativo de cobertura prenatal, razón de mortalidad materna y fecundidad adolescente en los 6 países."
      },
      {
        "id": "REF-REMSAA-569",
        "tag": "REMSAA",
        "year": "Resolución XLI 569",
        "title": "Resolución Ministerial REMSAA XLI 569",
        "desc": "Resolución vinculante de los Ministros de Salud del Área Andina para la ejecución del Plan Andino 2025-2030."
      }
    ],
    "heroDescAy": "Suxta Andes suyunakatak comparativo qillqa <strong>Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela</strong> ORAS-CONHU, UNFPA wan OPS yatiyawimpi.",
    "heroDescGn": "Suqta Andes tetãnguérape g̃uarã marandu <strong>Bolivia, Chile, Colombia, Ecuador, Perú ha Venezuela</strong> ORAS-CONHU, UNFPA ha OPS ndive.",
    "heroDescArn": "Kom Andes mapu mew kisu kimün dungu <strong>Bolivia, Chile, Colombia, Ecuador, Perú ka Venezuela</strong> ORAS-CONHU, UNFPA ka OPS mew.",
    "heroDescQvi": "Sukta Andes llaktakunapaq killka <strong>Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela</strong> ORAS-CONHU, UNFPA wan OPS yachaywan.",
    "heroDescGuc": "Apalirawaa Andes mmapa'a <strong>Bolivia, Chile, Colombia, Ecuador, Perú je Venezuela</strong> süpüla ORAS-CONHU, UNFPA je OPS.",
    "heroDescWra": "Andes aribo kokotune <strong>Bolivia, Chile, Colombia, Ecuador, Perú je Venezuela</strong> ORAS-CONHU, UNFPA je OPS.",
    "heroDescPmn": "Andes mai kokotune <strong>Bolivia, Chile, Colombia, Ecuador, Perú je Venezuela</strong> ORAS-CONHU, UNFPA je OPS.",
    "heroDescPbb": "Andes yu'çeçx <strong>Bolivia, Chile, Colombia, Ecuador, Perú je Venezuela</strong> ORAS-CONHU, UNFPA je OPS.",
    "heroDescEmp": "Andes bedéa <strong>Bolivia, Chile, Colombia, Ecuador, Perú je Venezuela</strong> ORAS-CONHU, UNFPA je OPS.",
    "heroDescAsh": "Andes ñañantsi <strong>Bolivia, Chile, Colombia, Ecuador, Perú je Venezuela</strong> ORAS-CONHU, UNFPA je OPS.",
    "heroDescAgr": "Andes chicham <strong>Bolivia, Chile, Colombia, Ecuador, Perú je Venezuela</strong> ORAS-CONHU, UNFPA je OPS.",
    "heroDescJiv": "Andes chicham <strong>Bolivia, Chile, Colombia, Ecuador, Perú je Venezuela</strong> ORAS-CONHU, UNFPA je OPS.",
    "heroDescRap": "Puka haka tere mo te <strong>Bolivia, Chile, Colombia, Ecuador, Perú 'e Venezuela</strong> ki te ORAS-CONHU, UNFPA 'e OPS/OMS.",
    "siteTitleAy": "Suyu Kamachi Qhawawi: Plan Andino PLANEA 2025-2030",
    "manifestoTitleQu": "7. Kamachiy Qillqa wan Política Pública Agenda Región Andina Suyupaq (5 Puntos)",
    "manifestoItemsQu": [
      "1. Ley de Presupuesto Anual nisqapi wawa chichuy hark'anapaq qullqi t'aqayta takyachiy.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia kamachiy wan maqanakuyta utqaylla hark'ay.",
      "3. LARC unaypaq hampiyninkunata sapa postapi mana qullqillawan qoy.",
      "4. Educación Sexual Integral (ESI) yachachiyta intercultural wan runasimipi hunt'achiy.",
      "5. Defensoría del Pueblo wan ayllukunawan kuska qillqata qhaway wan hunt'achiy."
    ],
    "cardsQu": {
      "c1": {
        "tag": "ANCHA HATUN LLAKI",
        "title": "15 Watamanta Uray Sipaskunapi Chichuy: Maqanakuy",
        "desc": "15 watamanta uray wawakunapi chichuyqa violación qallariyniyuqmi. Mana allichasqaqa llakitam mirachin."
      },
      "c2": {
        "tag": "AYLLUPI CHINKAY",
        "title": "Wawa Kaspa Chichuy wan Yachay Chinkachiy",
        "desc": "Wawallaraq wawayuq kayqa yachaykunata qulluchin wan kawsay qullqita anchata pisiyachin."
      },
      "c3": {
        "tag": "HAMPI WASI PISIY",
        "title": "LARC wan Moderno Hampikuna Mana Aypay",
        "desc": "Postakunapi wan ayllu hampiwesikunapi implante wan DIU mana aypanchu."
      }
    },
    "roiQu": {
      "roi1": {
        "title": "Mana Ruraypa Chinkachiynin",
        "desc": "Hampi wasi gastokuna, yachay saqiy wan qullqi mana chaskisqakuna."
      },
      "roi2": {
        "title": "Qullqi Kutimuynin (ROI)",
        "desc": "Sapa $1 churamusqamanta, $4.80 - $11.00 kutimun ayllupaq wan suyupaq."
      }
    },
    "lawsQu": {
      "l1": {
        "tag": "KAMACHIY",
        "title": "Plan Andino PLANEA 2025-2030 Kamachiy",
        "desc": "Cero Tolerancia wan fecundidad pisiyachiy 2030 watapaq."
      },
      "l2": {
        "tag": "HATUN KAMACHIY",
        "title": "Derechos wan Allin Kawsay Amachay",
        "desc": "Tukuy runapaq LARC hampikuna wan maqanakuy hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHIY",
        "title": "Qullqi T'aqay Takyachiy",
        "desc": "Ayllu postakunapaq qullqi waqaychasqa."
      }
    },
    "manifestoTitleAy": "7. Suyu Kamachi Qillqa wan Políticas Públicas Región Andina Suyutaki (5 Puntos)",
    "manifestoItemsAy": [
      "1. Ley de Presupuesto Anual ukan sapürunjama qullqi t'aqawi imillanaka usuriptawi jark'aqañataki.",
      "2. 15 marat jisk'anakan Cero Tolerancia protocolos wan jank'aki qullayawi comisaríanakana.",
      "3. LARC unay qullañanaka taqi qullañ utanakana inaki churaña.",
      "4. Educación Sexual Integral (ESI) yatichawi intercultural wan aymar aruna phuqhaña.",
      "5. Defensoría del Pueblo yanapirinakampi qhawawi wan amachawi luraña."
    ],
    "cardsAy": {
      "c1": {
        "tag": "SINTIPUNI AXSARAWI",
        "title": "15 Marat Jisk'anakan Usuriptawi: Nuwasiña",
        "desc": "15 marat jisk'anakan usuriptawipax nuwasiñat jutiriwa. Jan askichatax jach'a llakiwa."
      },
      "c2": {
        "tag": "JAQI CHHAQAWI",
        "title": "Nayra Usuriptawi wan Yatichawi Chhaqawi",
        "desc": "Imillanaka usuriptawipax yatichawi qulluchiwa wan jakawi qullqi pisiyaptayi."
      },
      "c3": {
        "tag": "QULLAÑA UTAN PISI",
        "title": "LARC wan Moderno Qullanaka Jan Aypawi",
        "desc": "Qullañ utanakana implante wan DIU qullanakax janiw aypkiti."
      }
    },
    "roiAy": {
      "roi1": {
        "title": "Jan Lurawina Chhaqawipa",
        "desc": "Qullañ uta gastonaka, yatichawi jaytawi wan qullqi jan jikxatatanaka."
      },
      "roi2": {
        "title": "Qullqi Kutt'awi (ROI)",
        "desc": "Sapa $1 churatanakampi, $4.80 - $11.00 kutt'ani suyunakataki."
      }
    },
    "lawsAy": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan usuriptawi jisk'aptayaña 2030 marataki."
      },
      "l2": {
        "tag": "JACH'A KAMACHI",
        "title": "Derechos wan Qullañ Amachawi",
        "desc": "Taqinitak LARC qullanaka wan nuwasiña jark'aqaña."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'aqawi Imxatata",
        "desc": "Qullañ utanakataki qullqi amachatapuni."
      }
    },
    "manifestoTitleGn": "7. Tetã Rerekua Kuatia ha Políticas Públicas Región Andina-pe g̃uarã (5 Puntos)",
    "manifestoItemsGn": [
      "1. Viru mohenda Ley de Presupuesto Anual-pe mitãkuña usuriptawi jark'aqa hag̃ua.",
      "2. Cero Tolerancia protocols 15 ary guýpe ha ñangareko pya'e violencia sexual rehe.",
      "3. LARC pohã ñeme'ẽ opavave tasyo ha puesto de salud rupive.",
      "4. Educación Sexual Integral (ESI) mbo'epy hekopete guaraníme ha castellánope.",
      "5. Defensoría del Pueblo ha tetãygua aty ñemongeta ha jehechajey."
    ],
    "cardsGn": {
      "c1": {
        "tag": "KYHYJE GUASU",
        "title": "Mitãkuña 15 Ary Guýpe Usuriptawi: Ñerairõ",
        "desc": "100% mitãkuña 15 ary guýpe hyeguáva oñembotavy rupi. Tekotevẽ ñangareko pya'e."
      },
      "c2": {
        "tag": "TEKO KAÑY",
        "title": "Mitãkuña Memby ha Tekoasy",
        "desc": "Mitãkuña memby ogueru tekoasy ha ombopaha mbo'epy heñóva."
      },
      "c3": {
        "tag": "TASYÓPE KAÑY",
        "title": "LARC ha Anticonceptivos Pokã",
        "desc": "Tasyo michĩvape ndaipóri implante ha DIU mitãkuñáme g̃uarã."
      }
    },
    "roiGn": {
      "roi1": {
        "title": "Viru Kañy",
        "desc": "Tasyo gasto, mbo'epy jejayei ha viru ndohupytýiva."
      },
      "roi2": {
        "title": "Viru Jehevy (ROI)",
        "desc": "Peteĩ $1 emoĩvape g̃uarã, $4.80 - $11.00 ojevy tetãme."
      }
    },
    "lawsGn": {
      "l1": {
        "tag": "TEKO ME'Ẽ",
        "title": "Plan Andino PLANEA 2025-2030 Teko",
        "desc": "Cero Tolerancia ha fecundidad guejy 2030 arype."
      },
      "l2": {
        "tag": "TETÃ ME'Ẽ",
        "title": "Derécho ha Tesãi Ñangareko",
        "desc": "LARC pohã opavavépe ha ñerairõ jark'a."
      },
      "l3": {
        "tag": "VIRU ME'Ẽ",
        "title": "Viru Mohenda Ñangareko",
        "desc": "Tasyo michĩvape viru oñemohendáva."
      }
    },
    "manifestoTitleArn": "7. Ngülamtun Politica Dungu Agenda Región Andina Mew (5 Puntos)",
    "manifestoItemsArn": [
      "1. Kisu Presupuesto Ley de Presupuesto Anual mew wechekeche koñin kuñiwtual.",
      "2. Cero Tolerancia protocolos 15 tripantu pichikeche kuñiwtual kom posta mew.",
      "3. LARC kuñiwtun lawen kom pu centro de salud mew nieal.",
      "4. Educación Sexual Integral (ESI) küme kimün kom chillkatuwe mapudungun mew.",
      "5. Defensoría del Pueblo ka lof che mew kisu kuñiwtun dungu."
    ],
    "cardsArn": {
      "c1": {
        "tag": "AÑKEN DUNGU",
        "title": "15 Tripantu Pichikeche Koñin: Weda Dungu",
        "desc": "Kom 15 tripantu pichikeche koñin niey weda dungu mew. Kuñiwtual tañi mongen."
      },
      "c2": {
        "tag": "MAPU MEW KAÑY",
        "title": "Wechekeche Koñin ka Kimün Ngelay",
        "desc": "Wechekeche koñin niey mew fey kimün ngelay ka kulliñ pisiyachi."
      },
      "c3": {
        "tag": "LAWENTUWE PISI",
        "title": "LARC ka Küme Lawen Ngelay",
        "desc": "Posta mew implante ka DIU ngelay wechekeche domo mew."
      }
    },
    "roiArn": {
      "roi1": {
        "title": "Kisu Femnon Mew Kulliñ",
        "desc": "Lawentuwe gasto, chillkatuwe ngelay ka kulliñ kañy."
      },
      "roi2": {
        "title": "Kulliñ Wiñol (ROI)",
        "desc": "Fill $1 kulliñ mew, $4.80 - $11.00 wiñoy mapu mew."
      }
    },
    "lawsArn": {
      "l1": {
        "tag": "NGÜLAM",
        "title": "Plan Andino PLANEA 2025-2030 Ngülam",
        "desc": "Cero Tolerancia ka wechekeche koñin ngelay 2030 tripantu mew."
      },
      "l2": {
        "tag": "FÜTRA NGÜLAM",
        "title": "Derechos ka Küme Mongen",
        "desc": "Kom che mew LARC lawen ka weda dungu kuñiwtun."
      },
      "l3": {
        "tag": "KULLIÑ NGÜLAM",
        "title": "Kulliñ Kuñiwtun",
        "desc": "Posta mew kulliñ kuñiwtual."
      }
    },
    "manifestoTitleQvi": "7. Llaktapa Kamachi Killka Agenda Región Andina Llaktapi (5 Puntos)",
    "manifestoItemsQvi": [
      "1. Ley de Presupuesto ukupi wawa chichuy hark'ankapak qullqi t'akayta sinyachina.",
      "2. 15 watamanta uray sipaskunapi Cero Tolerancia protocolos wan utka yanapana.",
      "3. LARC unaypa hampikunata tukuy hampiwasi ukupi llukshichina.",
      "4. Educación Sexual Integral (ESI) yachana wasikunapi kichwapi paktachina.",
      "5. Defensoría del Pueblo wan llaktakunawan kuska killkata rikuriy."
    ],
    "cardsQvi": {
      "c1": {
        "tag": "YAPA JATUN LLAKI",
        "title": "15 Watamanta Uray Wawa Chichuy: Llaki",
        "desc": "15 watamanta uray wawakunapi chichuyqa llakiyuqmi. Mana allichaspaqa llakitami mirachin."
      },
      "c2": {
        "tag": "LLAKTA PISI",
        "title": "Wawa Chichuy wan Yachay Chinkay",
        "desc": "Wawa chichuyka yachayta pishiyachin wan kawsayta llakichin."
      },
      "c3": {
        "tag": "HAMPIWASI PISI",
        "title": "LARC wan Hampikuna Mana Tiyay",
        "desc": "Hampiwasi ukupi implante wan DIU mana aypanchu."
      }
    },
    "roiQvi": {
      "roi1": {
        "title": "Mana Ruraypa Chinkaynin",
        "desc": "Hampiwasi gastokuna, yachay sakiy wan kawsay qullqi pisi."
      },
      "roi2": {
        "title": "Qullqi Kutiy (ROI)",
        "desc": "Sapa $1 churashkamanta, $4.80 - $11.00 kutin llaktapaq."
      }
    },
    "lawsQvi": {
      "l1": {
        "tag": "KAMACHI",
        "title": "Plan Andino PLANEA 2025-2030 Kamachi",
        "desc": "Cero Tolerancia wan wawa chichuy pisi 2030 watapak."
      },
      "l2": {
        "tag": "JATUN KAMACHI",
        "title": "Derechos wan Alli Kawsay",
        "desc": "Tukuykunapak LARC hampikuna wan llaki hark'ay."
      },
      "l3": {
        "tag": "QULLQI KAMACHI",
        "title": "Qullqi T'akay",
        "desc": "Hampiwasi ukupi qullqi charina."
      }
    },
    "manifestoTitleGuc": "7. Apalirawaa Politica Agenda Región Andina (5 Puntos)",
    "manifestoItemsGuc": [
      "1. Walawaa presupuestal süpüla jintüi asitnushii katataaka Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos süpüla 15 juyamüin jintüin je anaa.",
      "3. LARC anticonceptivos tü taashii süpüla mmapa'a.",
      "4. Educación Sexual Integral (ESI) wayuunaikiru'u ekirajaapülee.",
      "5. Defensoría del Pueblo je wayuu akaliojiraa."
    ],
    "cardsGuc": {
      "c1": {
        "tag": "MÜLIAA MÜSIA",
        "title": "15 Juyamüin Jintüi Asitnushii: Müliaa",
        "desc": "15 juyamüin jintüin asitnushii katataaka. Cho'ujaasü akaliojiraa süpüla anaa."
      },
      "c2": {
        "tag": "MMAPA'A PISI",
        "title": "Jintüi Katataaka je Ekirajaapülee Chinkay",
        "desc": "Jintüi asitnushii ekirajaapülee chinkachi."
      },
      "c3": {
        "tag": "ANAA AYATAWAA",
        "title": "LARC je Anticonceptivos Pokã",
        "desc": "Posta je centro de salud nojotshi implante süpüla jintüi."
      }
    },
    "roiGuc": {
      "roi1": {
        "title": "Walawaa Chinkay",
        "desc": "Centro de salud gasto, ekirajaapülee chinkay."
      },
      "roi2": {
        "title": "Walawaa Anaa (ROI)",
        "desc": "Süpüla $1 walawaa, $4.80 - $11.00 anaa mmapa'a."
      }
    },
    "lawsGuc": {
      "l1": {
        "tag": "PÜTCHI",
        "title": "Plan Andino PLANEA 2025-2030 Pütchi",
        "desc": "Cero Tolerancia je jintüi asitnushii katataaka 2030."
      },
      "l2": {
        "tag": "ANAA PÜTCHI",
        "title": "Derechos je Anaa",
        "desc": "Mmapa'a LARC anticonceptivos je müliaa jark'a."
      },
      "l3": {
        "tag": "WALAWA PÜTCHI",
        "title": "Walawaa Presupuesto",
        "desc": "Posta walawaa anaa."
      }
    },
    "manifestoTitleWra": "7. Obonoba Politica Agenda Región Andina (5 Puntos)",
    "manifestoItemsWra": [
      "1. Presupuesto aribo iboma asidaja obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata sanuka iboma.",
      "3. LARC anticonceptivos kokotune hanoko.",
      "4. Educación Sexual Integral (ESI) warao aribo eskuela.",
      "5. Defensoría aribo nomewitu sanuka."
    ],
    "cardsWra": {
      "c1": {
        "tag": "OBONOBA SANUKA",
        "title": "15 Wata Sanuka Iboma Asidaja: Obonoba",
        "desc": "15 wata sanuka iboma asidaja obonoba nomewitu."
      },
      "c2": {
        "tag": "ARIBO SANUKA",
        "title": "Iboma Asidaja eskuela obonoba",
        "desc": "Iboma asidaja eskuela chinkachi."
      },
      "c3": {
        "tag": "HANOKO PISI",
        "title": "LARC Anticonceptivos Hanoko",
        "desc": "Hanoko sanuka implante nojotshi."
      }
    },
    "roiWra": {
      "roi1": {
        "title": "Obonoba Aribo Chinkay",
        "desc": "Hanoko gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Aribo Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa hanoko."
      }
    },
    "lawsWra": {
      "l1": {
        "tag": "ARIBO",
        "title": "Plan Andino PLANEA 2025-2030 Aribo",
        "desc": "Cero Tolerancia iboma asidaja 2030."
      },
      "l2": {
        "tag": "NOMIEWITU",
        "title": "Derechos je Hanoko",
        "desc": "LARC anticonceptivos hanoko kokotune."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Hanoko",
        "desc": "Hanoko sanuka aribo."
      }
    },
    "manifestoTitlePmn": "7. Politica Mai Agenda Región Andina (5 Puntos)",
    "manifestoItemsPmn": [
      "1. Presupuesto mai murekon pimanse obonoba Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 wata murekon mai.",
      "3. LARC anticonceptivos kokotune pata'pï iwe.",
      "4. Educación Sexual Integral (ESI) pemón mai eskuela.",
      "5. Defensoría mai nomewitu murekon."
    ],
    "cardsPmn": {
      "c1": {
        "tag": "PATA'PÏ MAI",
        "title": "15 Wata Murekon Pimanse: Pata'pï",
        "desc": "15 wata murekon pimanse pata'pï mai."
      },
      "c2": {
        "tag": "MAI PITI",
        "title": "Murekon Pimanse eskuela mai",
        "desc": "Murekon pimanse eskuela chinkachi."
      },
      "c3": {
        "tag": "IWE PISI",
        "title": "LARC Anticonceptivos Iwe",
        "desc": "Pata'pï iwe implante nojotshi."
      }
    },
    "roiPmn": {
      "roi1": {
        "title": "Mai Piti Chinkay",
        "desc": "Pata'pï iwe gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Mai Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa iwe."
      }
    },
    "lawsPmn": {
      "l1": {
        "tag": "MAI",
        "title": "Plan Andino PLANEA 2025-2030 Mai",
        "desc": "Cero Tolerancia murekon pimanse 2030."
      },
      "l2": {
        "tag": "PATA'PÏ",
        "title": "Derechos je Iwe",
        "desc": "LARC anticonceptivos pata'pï iwe."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Iwe",
        "desc": "Pata'pï iwe mai."
      }
    },
    "manifestoTitlePbb": "7. Yu'çeçx Politica Agenda Región Andina (5 Puntos)",
    "manifestoItemsPbb": [
      "1. Presupuesto nxusxi ku'j we'sx thegnikha's Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 vxite' ku'j we'sx.",
      "3. LARC yu'çeçx taashii ta'çxhab.",
      "4. Educación Sexual Integral (ESI) nasa yuwete ekirajaapülee.",
      "5. Defensoría del Pueblo thegnikha's."
    ],
    "cardsPbb": {
      "c1": {
        "tag": "KU'J WE'SX",
        "title": "15 Vxite' Ku'j Thegnikha's: Ku'j",
        "desc": "15 vxite' ku'j we'sx thegnikha's."
      },
      "c2": {
        "tag": "ÇXHAB PISI",
        "title": "Ku'j Thegnikha's eskuela çxhab",
        "desc": "Ku'j we'sx eskuela chinkachi."
      },
      "c3": {
        "tag": "YAÇK PISI",
        "title": "LARC Yu'çeçx Yaçk",
        "desc": "Yaçk taashii implante nojotshi."
      }
    },
    "roiPbb": {
      "roi1": {
        "title": "Ku'j We'sx Chinkay",
        "desc": "Yaçk gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Ku'j Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa çxhab."
      }
    },
    "lawsPbb": {
      "l1": {
        "tag": "YU'ÇEÇX",
        "title": "Plan Andino PLANEA 2025-2030 Yu'çeçx",
        "desc": "Cero Tolerancia ku'j we'sx 2030."
      },
      "l2": {
        "tag": "ÇXHAB",
        "title": "Derechos je Yaçk",
        "desc": "LARC yu'çeçx taashii ta'çxhab."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Çxhab",
        "desc": "Çxhab yaçk yu'çeçx."
      }
    },
    "manifestoTitleEmp": "7. Bedéa Politica Agenda Región Andina (5 Puntos)",
    "manifestoItemsEmp": [
      "1. Presupuesto druade wẽra warrade Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 warrarãde wẽra.",
      "3. LARC anticonceptivos druade droma.",
      "4. Educación Sexual Integral (ESI) emberá bedéade eskuela.",
      "5. Defensoría del Pueblo druade bia."
    ],
    "cardsEmp": {
      "c1": {
        "tag": "KHARRA DRUADE",
        "title": "15 Warrarãde Wẽra: Kharra",
        "desc": "15 warrarãde wẽra kharra druade."
      },
      "c2": {
        "tag": "DRUA PISI",
        "title": "Wẽra Warrarã eskuela drua",
        "desc": "Wẽra warrarã eskuela chinkachi."
      },
      "c3": {
        "tag": "DROMA PISI",
        "title": "LARC Anticonceptivos Droma",
        "desc": "Droma implante nojotshi."
      }
    },
    "roiEmp": {
      "roi1": {
        "title": "Drua Bedéa Chinkay",
        "desc": "Droma gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Drua Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa drua."
      }
    },
    "lawsEmp": {
      "l1": {
        "tag": "BEDÉA",
        "title": "Plan Andino PLANEA 2025-2030 Bedéa",
        "desc": "Cero Tolerancia wẽra warrade 2030."
      },
      "l2": {
        "tag": "DRUA",
        "title": "Derechos je Droma",
        "desc": "LARC anticonceptivos druade droma."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Drua",
        "desc": "Druade droma bedéa."
      }
    },
    "manifestoTitleAsh": "7. Kametsari Politica Agenda Región Andina (5 Puntos)",
    "manifestoItemsAsh": [
      "1. Presupuesto pankotsi eentsite kametsari Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 osarentsi eentsite.",
      "3. LARC anticonceptivos pankotsi maaroni.",
      "4. Educación Sexual Integral (ESI) asháninka ñañantsi eskuela.",
      "5. Defensoría del Pueblo eentsite kametsa."
    ],
    "cardsAsh": {
      "c1": {
        "tag": "KAMETSARIÑA",
        "title": "15 Osarentsi Eentsite: Kametsa",
        "desc": "15 osarentsi eentsite kametsariña."
      },
      "c2": {
        "tag": "PANKOTSI PISI",
        "title": "Eentsite eskuela pankotsi",
        "desc": "Eentsite eskuela chinkachi."
      },
      "c3": {
        "tag": "PANKOTSI PISI",
        "title": "LARC Anticonceptivos Pankotsi",
        "desc": "Pankotsi implante nojotshi."
      }
    },
    "roiAsh": {
      "roi1": {
        "title": "Pankotsi Kametsa Chinkay",
        "desc": "Pankotsi gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Pankotsi Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa pankotsi."
      }
    },
    "lawsAsh": {
      "l1": {
        "tag": "ÑAÑANTSI",
        "title": "Plan Andino PLANEA 2025-2030 Ñañantsi",
        "desc": "Cero Tolerancia eentsite 2030."
      },
      "l2": {
        "tag": "PANKOTSI",
        "title": "Derechos je Pankotsi",
        "desc": "LARC anticonceptivos pankotsi maaroni."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Pankotsi",
        "desc": "Pankotsi eentsite ñañantsi."
      }
    },
    "manifestoTitleAgr": "7. Datsajum Politica Agenda Región Andina (5 Puntos)",
    "manifestoItemsAgr": [
      "1. Presupuesto apu datsajum pegker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 mijan datsajum.",
      "3. LARC anticonceptivos pegker jea.",
      "4. Educación Sexual Integral (ESI) awajún chicham eskuela.",
      "5. Defensoría del Pueblo datsajum pegker."
    ],
    "cardsAgr": {
      "c1": {
        "tag": "PEGKERCHAU",
        "title": "15 Mijan Datsajum: Pegkerchau",
        "desc": "15 mijan datsajum pegkerchau."
      },
      "c2": {
        "tag": "JEA PISI",
        "title": "Datsajum eskuela jea",
        "desc": "Datsajum eskuela chinkachi."
      },
      "c3": {
        "tag": "JEA PISI",
        "title": "LARC Anticonceptivos Jea",
        "desc": "Jea implante nojotshi."
      }
    },
    "roiAgr": {
      "roi1": {
        "title": "Datsajum Pegker Chinkay",
        "desc": "Jea gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Datsajum Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa jea."
      }
    },
    "lawsAgr": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia datsajum 2030."
      },
      "l2": {
        "tag": "JEA",
        "title": "Derechos je Jea",
        "desc": "LARC anticonceptivos pegker jea."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Jea",
        "desc": "Jea datsajum chicham."
      }
    },
    "manifestoTitleJiv": "7. Natsa Politica Agenda Región Andina (5 Puntos)",
    "manifestoItemsJiv": [
      "1. Presupuesto uunt natsa penker Ley de Presupuesto.",
      "2. Cero Tolerancia protocolos 15 uchin natsa.",
      "3. LARC anticonceptivos penker tsuwatai.",
      "4. Educación Sexual Integral (ESI) shuar chicham eskuela.",
      "5. Defensoría del Pueblo natsa penker."
    ],
    "cardsJiv": {
      "c1": {
        "tag": "PENKERCHAU",
        "title": "15 Uchin Natsa: Penkerchau",
        "desc": "15 uchin natsa penkerchau."
      },
      "c2": {
        "tag": "TSUWATAI PISI",
        "title": "Natsa eskuela tsuwatai",
        "desc": "Natsa eskuela chinkachi."
      },
      "c3": {
        "tag": "TSUWATAI PISI",
        "title": "LARC Anticonceptivos Tsuwatai",
        "desc": "Tsuwatai implante nojotshi."
      }
    },
    "roiJiv": {
      "roi1": {
        "title": "Natsa Penker Chinkay",
        "desc": "Tsuwatai gasto, eskuela chinkay."
      },
      "roi2": {
        "title": "Natsa Anaa (ROI)",
        "desc": "Süpüla $1, $4.80 - $11.00 anaa tsuwatai."
      }
    },
    "lawsJiv": {
      "l1": {
        "tag": "CHICHAM",
        "title": "Plan Andino PLANEA 2025-2030 Chicham",
        "desc": "Cero Tolerancia natsa 2030."
      },
      "l2": {
        "tag": "TSUWATAI",
        "title": "Derechos je Tsuwatai",
        "desc": "LARC anticonceptivos penker tsuwatai."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Tsuwatai",
        "desc": "Tsuwatai natsa chicham."
      }
    },
    "manifestoTitleRap": "7. Vānaŋa Haka Oho Agenda mo Región Andina (5 Puntos)",
    "manifestoItemsRap": [
      "1. Moni haka tere no te poki 'āpī hapu'a kore i roto i te Ley de Presupuesto Anual.",
      "2. Cero Tolerancia protocolos mo te poki o raro i te 15 matahiti.",
      "3. LARC anticonceptivos pāruru mo te kāiŋa.",
      "4. Educación Sexual Integral (ESI) 'ite i roto i te ha'api'ira'a vananga Rapa Nui.",
      "5. Defensoría de la Niñez pāruru mo te poki kāiŋa."
    ],
    "cardsRap": {
      "c1": {
        "tag": "RARI NUI",
        "title": "15 Matahiti Poki Hapu'a: Rari",
        "desc": "15 matahiti poki hapu'a kore rari nui."
      },
      "c2": {
        "tag": "KĀIŊA PISI",
        "title": "Poki Hapu'a ha'api'ira'a kāiŋa",
        "desc": "Poki hapu'a ha'api'ira'a chinkachi."
      },
      "c3": {
        "tag": "HARE PISI",
        "title": "LARC Anticonceptivos Hare",
        "desc": "Hare implante nojotshi."
      }
    },
    "roiRap": {
      "roi1": {
        "title": "Kāiŋa Moni Kore",
        "desc": "Hare gasto, ha'api'ira'a kore."
      },
      "roi2": {
        "title": "Moni Haka Oho (ROI)",
        "desc": "Mo te $1, $4.80 - $11.00 moni hoki mai."
      }
    },
    "lawsRap": {
      "l1": {
        "tag": "VĀNAŊA",
        "title": "Plan Andino PLANEA 2025-2030 Vānaŋa",
        "desc": "Cero Tolerancia poki hapu'a kore 2030."
      },
      "l2": {
        "tag": "KĀIŊA",
        "title": "Derechos je Hare",
        "desc": "LARC anticonceptivos pāruru mo te kāiŋa."
      },
      "l3": {
        "tag": "PRESUPUESTO",
        "title": "Presupuesto Kāiŋa",
        "desc": "Kāiŋa hare vānaŋa."
      }
    }
  }
};
// --- 2.5 CATÁLOGO GLOBAL DE LENGUAS DE LA REGIÓN ANDINA ---
const allLanguagesCatalog = {
  en: { code: 'en', name: 'English', countryKeys: [] },
  es: { code: 'es', name: 'Español', countryKeys: [] },
  agr: { code: 'agr', name: 'Awajún', countryKeys: ['peru'] },
  arn: { code: 'arn', name: 'Mapudungun', countryKeys: ['chile', 'regional'] },
  ash: { code: 'ash', name: 'Asháninka', countryKeys: ['peru'] },
  ay: { code: 'ay', name: 'Aymar aru', countryKeys: ['bolivia', 'peru', 'chile', 'regional'] },
  emp: { code: 'emp', name: 'Emberá', countryKeys: ['colombia'] },
  gn: { code: 'gn', name: "Avañe'ẽ", countryKeys: ['bolivia', 'regional'] },
  guc: { code: 'guc', name: 'Wayuunaiki', countryKeys: ['colombia', 'venezuela', 'regional'] },
  jiv: { code: 'jiv', name: 'Shuar Chicham', countryKeys: ['ecuador'] },
  pbb: { code: 'pbb', name: 'Nasa Yuwe', countryKeys: ['colombia'] },
  pmn: { code: 'pmn', name: 'Pemón', countryKeys: ['venezuela'] },
  qu: { code: 'qu', name: 'Runasimi', countryKeys: ['peru', 'bolivia', 'regional'] },
  qvi: { code: 'qvi', name: 'Kichwa', countryKeys: ['ecuador', 'regional'] },
  rap: { code: 'rap', name: 'Rapa Nui', countryKeys: ['chile'] },
  wra: { code: 'wra', name: 'Warao', countryKeys: ['venezuela'] }
};

// --- 3. DICCIONARIO MULTILINGÜE DE ACCESIBILIDAD (i18n) ---
const i18n = {
  "es": {
    "langName": "Español",
    "skipLink": "Saltar al contenido principal",
    "endorsedBy": "Con el aval de:",
    "countryBarLbl": "Selecciona la Versión de País / Región Andina:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Modo Claro",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Modo Oscuro",
    "optgroupOther": "── Otras Lenguas Andinas ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino de Prevención y Reducción del Embarazo en Adolescentes",
    "planeaCardDesc": "Matriz multisectorial de metas andinas aprobada por los Ministerios de Salud de Bolivia, Chile, Colombia, Ecuador, Perú y Venezuela. Establece el compromiso de <strong>Cero Tolerancia en menores de 15 años</strong> y metas de reducción de la fecundidad al 2030.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> Ver Metas del Marco Matriz PLANEA (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. MARCO REGIONAL (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "COOPERACIÓN INTERNACIONAL",
    "regionalCardTitle": "Evidencia Actuarial y Estándares Globales AA-HA!",
    "regionalCardDesc": "Consolidado de los 15 estudios MILENA del UNFPA (pérdida agregada de <strong>USD 13,538 Millones</strong> en América Latina), Guía Global de Acción Acelerada (AA-HA!) y herramientas para atención de víctimas de violencia sexual.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Ver Evidencia y Estándares Regionales",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Ver Indicadores Territoriales",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Ver Manifiesto Legislativo",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Ejecutiva",
    "heroCardTitle": "Incidencia Política Andina",
    "heroCardBadge": "¡HAZ CLIC AQUÍ!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Haz clic aquí para abrir el Compendio de Evidencia Científica para el Congreso y el MEF",
    "s1Title": "1. Diagnóstico Técnico y Evidencia Científica",
    "s1Subtitle": "Evidencia clínica, social e infraestructura sobre la problemática (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Por qué se afirma esto? Ver Evidencia Profunda",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Por qué ocurre esto? Ver Análisis Causal",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Por qué existe este déficit? Ver Evaluación Oficial",
    "s2Title": "2. Análisis de Costo-Beneficio y Retorno de Inversión (ROI)",
    "s2Subtitle": "Argumentario económico y fiscal para Comisiones de Presupuesto y Ministerios de Hacienda / MEF.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> IMPACTO FISCAL NEGATIVO",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> Ver Desglose de Pérdida del PIB",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> EFICIENCIA DEL GASTO PÚBLICO",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Ver Desglose Actuarial del Ahorro por Unidad Invertida",
    "scTitle": "3. Gráficas Informativas de Impacto y Disparidades",
    "scSubtitle": "Indicadores visuales cuantitativos derivados de encuestas demográficas y la Matriz PLANEA 2025-2030.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Fecundidad Adolescente Territorial (por 1,000)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Cobertura de Servicios Amigables",
    "chart2Sub": "Primer Nivel de Atención",
    "g2Lbl1": "Establecimientos Acreditados",
    "g2Lbl2": "Déficit por Falta de Presupuesto",
    "chart2Note": "*La brecha presupuestal impide la acreditación de consultorios amigables con atención confidencial en zonas rurales.",
    "sfcTitle": "4. Mitos vs. Evidencia Científica Oficial (Fact-Checking para el Debate)",
    "sfcSubtitle": "Argumentos respaldados por los Ministerios de Salud, UNFPA y el Código Penal para responder cuestionamientos frecuentes.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> MITO COMÚN DE DEBATE",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> EVIDENCIA CIENTÍFICA OFICIAL",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"La educación preventiva en colegios adelanta el inicio sexual.\"",
    "fc1MythDesc": "Argumento frecuente usado para oponerse a programas de consejería e información en salud reproductiva.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Evidencia Demostrada:",
    "fc1EvDesc": "Estudios científicos señalan que la consejería oportuna y la Educación Integral de la Sexualidad (EIS) <strong>retrasan el inicio de la vida sexual hasta en 1.5 años</strong> y reducen las ITS y embarazos no planificados.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Presupuestar en salud adolescente es un gasto sin retorno.\"",
    "fc2MythDesc": "Cuestionamiento habitual en comisiones de presupuesto que consideran la prevención como un costo perdido.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Evidencia Demostrada:",
    "fc2EvDesc": "Metodologías actuariales MILENA confirman un <strong>Retorno de Inversión (ROI) de 7:1 por cada unidad monetaria invertida</strong> en prevención, ahorrando gasto directo en urgencias obstétricas.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"El embarazo en niñas menores de 15 años es solo un asunto privado o familiar.\"",
    "fc3MythDesc": "Postura que invisibiliza el abuso y trata la maternidad infantil como un hecho biológico natural.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Evidencia Demostrada:",
    "fc3EvDesc": "Los marcos penales andinos establecen presunción legal absoluta de violencia sexual. Todo embarazo en una menor de 15 años es delito de violación y exige persecución penal y protección integral obligatoria.",
    "s3Title": "5. Marco Legal y Compromisos Internacionales",
    "s3Subtitle": "Fundamentos normativos vigentes que respaldan las decisiones de política pública.",
    "s4Title": "6. Explorador Informativo de Indicadores Territoriales",
    "s4Subtitle": "Diagnóstico territorializado de tasas de fecundidad, acreditación de postas y costo de inacción.",
    "expLblRegion": "Seleccionar Territorio:",
    "expFertilityLbl": "Fecundidad Adolescente:",
    "expCoverageLbl": "Cobertura de Servicios Amigables:",
    "expInactionLbl": "Costo Estimado de Inacción:",
    "expPriorityLbl": "Prioridad Estratégica de Política Pública:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Fuente de datos:</strong> PLANEA 2025-2030, Ministerios de Salud, Institutos de Estadística, CEPAL, UNFPA y OPS/OMS.",
    "coverageUnit": "Cobertura",
    "yearUnit": "/ año",
    "s5Title": "7. Manifiesto Legislativo y Agenda de Política Pública (5 Puntos)",
    "s5Subtitle": "Prioridades legislativas sustentadas con evidencia del Cerebro de Datos. Haz clic en 'Ver Sustento Técnico'.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Ver Sustento Técnico",
    "s8Title": "8. Respaldos Oficiales y Referencias Bibliográficas (Fuentes Originales)",
    "s8Subtitle": "Compendio documental, normativo y técnico de las fuentes primarias que respaldan los datos de la plataforma.",
    "fTitle": "Incidencia Política • PLANEA 2025-2030",
    "fText": "Observatorio de Incidencia Política sobre la Temática T2 del PLANEA 2025-2030. Desarrollado con la Guía de Marca Oficial de la Hackatón Creativa Regional y el aval institucional de ORAS-CONHU, Ministerios de Salud, UNFPA y OPS/OMS.",
    "fCol2Title": "Marcos Éticos y Legales",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Cumplimiento estricto de salvaguardas de NNA en la Región Andina.",
    "fLawFramework": "• Marcos normativos de protección a la niñez y convenios internacionales.",
    "fCol3Title": "Entidades Avaladoras",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Entendido / Cerrar",
    "deepModalTitlePrefix": "Sustento Técnico del Cerebro de Datos • ",
    "legDemandLabel": "Demanda Legislativa",
    "deepSecEvidenceTitle": "Marco de Evidencia y Fuentes Estadísticas",
    "deepSecGovTitle": "Sustento Oficial y Normativa Técnica",
    "deepSecGovDesc": "Alineado con los estándares del Plan Andino (PLANEA 2025-2030), acuerdos vinculantes de la REMSAA y directivas de salud integral.",
    "deepSecEconTitle": "Análisis Económico y Fiscal (UNFPA / Ministerio de Hacienda)",
    "deepSecRoiTitle": "Retorno Social y Costo de Inacción",
    "deepSecRoiDesc": "La evidencia actuarial demuestra que cada unidad monetaria presupuestada en prevención genera un ahorro social de 7:1 en el gasto asistencial público.",
    "deepSecDemandTitle": "Demanda de Incidencia Política:",
    "deepSecRoadmapTitle": "Ruta de Acción Parlamentaria y Ministerial:",
    "deepSecRoadmapDesc": "Requiere asignación explícita en la Ley de Presupuesto Público y articulación intersectorial con los gobiernos territoriales.",
    "sciModalTitle": "Compendio de Evidencia Científica para el Congreso y el MEF",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Evidencia Sanitaria y Obstétrica (MINSA / OPS / OMS)",
    "sciSec1Desc": "Estudios epidemiológicos demuestran que las niñas menores de 15 años que gestan presentan <strong>5 veces mayor riesgo de muerte materna</strong> y 3 veces mayor riesgo de partos prematuros con bajo peso al nacer. Toda gestación en este grupo etario deriva de abuso sexual de acuerdo al Código Penal.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Evidencia de Impacto Fiscal y Metodología MILENA (UNFPA)",
    "sciSec2Desc": "La inacción estatal le cuesta a las economías andinas entre el 0.25% y el 1.0% de su PBI anual. El 40% de esta pérdida responde al menor nivel educativo alcanzado por las madres adolescentes, reduciendo su inserción en el mercado formal e impactando la recaudación tributaria.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Retorno Social de Inversión (ROI 7:1)",
    "sciSec3Desc": "Por cada unidad monetaria presupuestada en Educación Integral de la Sexualidad (EIS) y en Servicios Amigables del primer nivel, el Estado ahorra 7 unidades en atención médica de urgencia y subsidios.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Cumplimiento de Leyes de Protección a la Niñez",
    "sciSec4Desc": "El Estado tiene la obligación constitucional de asignar partidas descentralizadas para Centros de Emergencia y postas de primer nivel para garantizar la protección inmediata de víctimas de violencias basadas en género.",
    "sciCloseBtn": "Cerrar Compendio Científico",
    "sumModalTitle": "Ficha Técnica Ejecutiva para Decisores Políticos",
    "sumHeaderBadge": "RESUMEN EJECUTIVO PARA COMISIONES DEL CONGRESO Y EL MEF",
    "sumGrid1Lbl": "Meta Estratégica 2030:",
    "sumGrid1Val": "Cero gestaciones en niñas menores de 15 años al 2030 (Plan Andino PLANEA).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7.00 ahorrados por cada unidad invertida en prevención y servicios amigables.",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "Pérdida económica de hasta el 1.0% del PIB nacional anualmente.",
    "sumGrid4Lbl": "Respaldo Legal y Normativo:",
    "sumGrid4Val": "Código Penal, Código de la Niñez y Tratados Internacionales de Derechos Humanos.",
    "sumDemandsTitle": "Demandas Clave de Política Pública:",
    "sumCloseBtn": "Entendido / Cerrar Ficha",
    "countryModalTitle": "Selecciona la Versión de País / Región Andina",
    "countryModalDesc": "Plataforma de Incidencia Política • PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Ver Versión <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Cerrar",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Meta Estratégica Subregional al 2030",
    "planeaSec1Desc": "Reducción acelerada de la Tasa Específica de Fecundidad Adolescente (TEFA) en los 6 países miembros y <strong>meta absoluta de Cero Embarazos en menores de 15 años al 2030</strong> bajo el principio de Cero Tolerancia a la Violencia Sexual Infantil.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Acuerdo ministerial vinculante de los Ministerios de Salud de Bolivia, Chile, Colombia, Ecuador, Perú y Venezuela para etiquetar partidas presupuestales protegidas y monitoreo semestral de metas.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Siete Líneas Estratégicas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Gobernanza e intersectorialidad en salud, educación y protección.",
      "<strong>LP2:</strong> Educación Integral de la Sexualidad (EIS) adaptada a lenguas originarias.",
      "<strong>LP3:</strong> Servicios de salud diferenciados, confidenciales y amigables.",
      "<strong>LP4:</strong> Prevención y persecución efectiva de la violencia de género y abuso sexual.",
      "<strong>LP5:</strong> Participación protagónica y liderazgo de juventudes andinas.",
      "<strong>LP6:</strong> Gestión del conocimiento, datos abiertos y sistemas de información vital.",
      "<strong>LP7:</strong> Sostenibilidad financiera y asignación fiscal prioritaria (Calificación 5/5)."
    ],
    "planeaCloseBtn": "Entendido / Cerrar Marco PLANEA",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. Evidencia Actuarial Consolidada MILENA (15 Países)",
    "regionalSec1Desc": "El estudio del UNFPA en América Latina y el Caribe cuantifica una pérdida económica agregada de <strong>USD 13,538 Millones</strong> anuales (1% del PIB regional). El 88.2% recae directamente sobre los ingresos y educación de las mujeres.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Aceleración de la Acción Mundial en favor de la Salud de los Adolescentes: intervenciones clínicas, consejería confidencial sin requerir acompañamiento adulto, y métodos anticonceptivos reversibles de larga duración (LARC).",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta de Evaluación Rápida en Violencia Sexual (OPS)",
    "regionalSec3Desc": "Protocolos de profilaxis post-exposición (PEP), anticoncepción de emergencia (AOE), y soporte psicosocial inmediato en el primer nivel de atención para niñas y adolescentes sobrevivientes.",
    "regionalCloseBtn": "Entendido / Cerrar Marco Regional"
  },
  "en": {
    "langName": "English",
    "skipLink": "Skip to main content",
    "endorsedBy": "Endorsed by:",
    "countryBarLbl": "Select Country / Andean Region Version:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Light Mode",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Dark Mode",
    "optgroupOther": "── Other Andean Languages ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. PLANEA 2025-2030 MATRIX FRAMEWORK",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andean Plan for Adolescent Pregnancy Prevention & Reduction",
    "planeaCardDesc": "Multisectoral matrix of Andean goals approved by the Ministries of Health of Bolivia, Chile, Colombia, Ecuador, Peru, and Venezuela. Establishes the commitment to <strong>Zero Tolerance in girls under 15</strong> and fertility reduction goals by 2030.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> View PLANEA Matrix Goals (6 Countries)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL FRAMEWORK (ORAS, UNFPA, PAHO, UNICEF)",
    "regionalTag": "INTERNATIONAL COOPERATION",
    "regionalCardTitle": "Actuarial Evidence and Global Standards AA-HA!",
    "regionalCardDesc": "Consolidation of the 15 UNFPA MILENA studies (aggregate loss of <strong>USD 13,538 Million</strong> in Latin America), Global Guidance for Accelerated Action (AA-HA!), and rapid response protocols for sexual violence survivors.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> View Regional Evidence & Standards",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> View Territorial Indicators",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> View Legislative Manifesto",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Executive Policy Brief",
    "heroCardTitle": "Andean Policy Advocacy",
    "heroCardBadge": "CLICK HERE!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Click here to open the Scientific Evidence Compendium for Congress & Finance",
    "s1Title": "1. Technical Diagnosis and Scientific Evidence",
    "s1Subtitle": "Clinical, social, and infrastructure evidence on national and regional challenges (PLANEA / PAHO / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> Why is this stated? View Deep Evidence",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> Why does this occur? View Causal Analysis",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> Why does this deficit exist? View Official Evaluation",
    "s2Title": "2. Cost-Benefit Analysis and Return on Investment (ROI)",
    "s2Subtitle": "Economic and fiscal arguments for Budget Committees and Ministries of Economy and Finance.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> NEGATIVE FISCAL IMPACT",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> View GDP Loss Breakdown",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> PUBLIC SPENDING EFFICIENCY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> View Actuarial Savings Breakdown per Unit Invested",
    "scTitle": "3. Quantitative Impact Charts and Territorial Disparities",
    "scSubtitle": "Quantitative visual indicators derived from demographic health surveys and the PLANEA 2025-2030 Matrix.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Territorial Adolescent Fertility (per 1,000)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Youth-Friendly Clinic Coverage",
    "chart2Sub": "Primary Care Level",
    "g2Lbl1": "Accredited Health Facilities",
    "g2Lbl2": "Deficit Due to Budget Shortage",
    "chart2Note": "*The budget gap prevents the accreditation of confidential youth-friendly health clinics in rural territories.",
    "sfcTitle": "4. Myths vs. Official Scientific Evidence (Debate Fact-Checking)",
    "sfcSubtitle": "Arguments backed by Ministries of Health, UNFPA, and Penal Codes to address frequent debate questions.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> COMMON DEBATE MYTH",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> OFFICIAL SCIENTIFIC EVIDENCE",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Preventive education in schools advances sexual initiation.\"",
    "fc1MythDesc": "Frequent argument used to oppose counseling and comprehensive reproductive health information in schools.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Proven Scientific Evidence:",
    "fc1EvDesc": "Scientific studies demonstrate that timely counseling and Comprehensive Sexuality Education (CSE) <strong>delay the onset of sexual activity by up to 1.5 years</strong> and reduce STIs and unintended pregnancies.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Budgeting for adolescent health is spending with no economic return.\"",
    "fc2MythDesc": "Habitual skepticism in budget committees that mistakenly classifies prevention as an unrecoverable loss.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Proven Scientific Evidence:",
    "fc2EvDesc": "MILENA actuarial methodologies confirm a <strong>7:1 Return on Investment (ROI) for every monetary unit invested</strong> in prevention, directly cutting emergency obstetric costs.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Pregnancy in girls under 15 is merely a private family affair.\"",
    "fc3MythDesc": "Misconception that invisibilizes abuse and treats child pregnancy as an ordinary private or biological event.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Proven Scientific Evidence:",
    "fc3EvDesc": "Andean penal codes establish an absolute legal presumption of sexual violence. Every pregnancy in a child under 15 constitutes statutory rape and mandates full state protection and criminal prosecution.",
    "s3Title": "5. Legal Framework and International Commitments",
    "s3Subtitle": "Current legal foundations supporting public policy decisions and budget allocations.",
    "s4Title": "6. Territorial Indicators Explorer",
    "s4Subtitle": "Territorialized diagnosis of fertility rates, clinic accreditation, and cost of inaction.",
    "expLblRegion": "Select Territory:",
    "expFertilityLbl": "Adolescent Fertility:",
    "expCoverageLbl": "Youth-Friendly Clinic Coverage:",
    "expInactionLbl": "Estimated Cost of Inaction:",
    "expPriorityLbl": "Strategic Public Policy Priority:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Data source:</strong> PLANEA 2025-2030, Ministries of Health, National Statistical Institutes, ECLAC, UNFPA, and PAHO/WHO.",
    "coverageUnit": "Coverage",
    "yearUnit": "/ year",
    "s5Title": "7. Legislative Manifesto and Policy Agenda (5 Points)",
    "s5Subtitle": "Legislative priorities supported by Data Brain evidence. Click 'View Technical Support'.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> View Technical Support",
    "s8Title": "8. Official Endorsements and Bibliographic References (Original Sources)",
    "s8Subtitle": "Documentary, normative, and technical compendium of primary sources supporting platform data.",
    "fTitle": "Policy Advocacy • PLANEA 2025-2030",
    "fText": "Policy Advocacy Platform on Topic T2 of PLANEA 2025-2030. Developed under the Official Regional Creative Hackathon Brand Guide with endorsement from ORAS-CONHU, Ministries of Health, UNFPA, and PAHO/WHO.",
    "fCol2Title": "Ethical & Legal Frameworks",
    "fLic": "• Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Strict compliance with Child & Adolescent Safeguarding in the Andean Region.",
    "fLawFramework": "• Child protection legal frameworks and international human rights treaties.",
    "fCol3Title": "Endorsing Entities",
    "fCopyRights": "© 2026 Regional Andean Plan Platform (PLANEA 2025-2030). Policy Advocacy Document.",
    "modalCloseText": "Understood / Close",
    "deepModalTitlePrefix": "Data Brain Technical Support • ",
    "legDemandLabel": "Legislative Demand",
    "deepSecEvidenceTitle": "Evidence Framework & Statistical Sources",
    "deepSecGovTitle": "Official Endorsement & Technical Regulations",
    "deepSecGovDesc": "Aligned with the standards of the Andean Plan (PLANEA 2025-2030), binding REMSAA agreements, and comprehensive health directives.",
    "deepSecEconTitle": "Economic & Fiscal Analysis (UNFPA / Ministry of Finance)",
    "deepSecRoiTitle": "Social Return on Investment & Cost of Inaction",
    "deepSecRoiDesc": "Actuarial evidence demonstrates that every monetary unit budgeted for prevention generates a direct social savings of 7:1 in public healthcare expenditure.",
    "deepSecDemandTitle": "Policy Advocacy Demand:",
    "deepSecRoadmapTitle": "Parliamentary & Ministerial Action Roadmap:",
    "deepSecRoadmapDesc": "Requires explicit budgetary allocation in the Public Budget Law and cross-sector coordination with subnational governments.",
    "sciModalTitle": "Scientific Evidence Compendium for Congress and Ministry of Finance",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Health & Obstetric Evidence (Ministries of Health / PAHO / WHO)",
    "sciSec1Desc": "Epidemiological studies show girls under 15 who become pregnant face <strong>5 times higher maternal mortality risk</strong> and 3 times higher premature birth risk. All pregnancies in this group legally derive from sexual abuse.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Fiscal Impact & MILENA Actuarial Methodology (UNFPA)",
    "sciSec2Desc": "State inaction costs Andean economies between 0.25% and 1.0% of annual GDP. 40% of this loss stems from lower educational attainment, reducing formal labor participation and tax revenues.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Return on Investment (7:1 ROI)",
    "sciSec3Desc": "For every currency unit budgeted in Comprehensive Sexuality Education (CSE) and Youth-Friendly primary clinics, the State saves 7 units in emergency medical care and subsidies.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Compliance with Child Protection & Anti-Violence Laws",
    "sciSec4Desc": "The State has a constitutional obligation to allocate decentralized budget lines for Emergency Centers and primary clinics to protect gender-based violence victims.",
    "sciCloseBtn": "Close Scientific Compendium",
    "sumModalTitle": "Executive Technical Policy Brief",
    "sumHeaderBadge": "EXECUTIVE BRIEF FOR PARLIAMENTARY COMMITTEES & MINISTRY OF FINANCE",
    "sumGrid1Lbl": "Strategic Goal 2030:",
    "sumGrid1Val": "Zero pregnancies in girls under 15 by 2030 (Andean Plan PLANEA).",
    "sumGrid2Lbl": "Social Return on Investment (ROI):",
    "sumGrid2Val": "7.00 saved for every unit invested in prevention and youth-friendly clinics.",
    "sumGrid3Lbl": "Cost of Inaction:",
    "sumGrid3Val": "Economic loss of up to 1.0% of National GDP annually.",
    "sumGrid4Lbl": "Legal & Normative Framework:",
    "sumGrid4Val": "Penal Code, Child Protection Code, and International Human Rights Treaties.",
    "sumDemandsTitle": "Key Public Policy Demands:",
    "sumCloseBtn": "Understood / Close Brief",
    "countryModalTitle": "Select Country or Andean Regional Framework",
    "countryModalDesc": "Policy Advocacy Platform • PLANEA 2025-2030",
    "cmFertPrefix": "Fertility: ",
    "cmBtnText": "View Version <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Close",
    "planeaModalTitle": "A. PLANEA 2025-2030 Matrix Framework (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Strategic Goal to 2030",
    "planeaSec1Desc": "Accelerated reduction of the Adolescent Specific Fertility Rate in all 6 member countries and <strong>absolute goal of Zero Pregnancies in girls under 15 by 2030</strong> under the Zero Tolerance principle.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA Resolution XLI 569",
    "planeaSec2Desc": "Binding ministerial agreement of the Health Ministries of Bolivia, Chile, Colombia, Ecuador, Peru, and Venezuela to protect budget allocations and conduct biannual monitoring.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Seven Priority Strategic Lines",
    "planeaLp": [
      "<strong>LP1:</strong> Governance and cross-sector coordination in health, education, and protection.",
      "<strong>LP2:</strong> Comprehensive Sexuality Education (CSE) adapted to indigenous languages.",
      "<strong>LP3:</strong> Differentiated, confidential, and youth-friendly health services.",
      "<strong>LP4:</strong> Effective prevention and prosecution of gender-based violence and sexual abuse.",
      "<strong>LP5:</strong> Protagonistic participation and leadership of Andean youth.",
      "<strong>LP6:</strong> Knowledge management, open data, and vital information systems.",
      "<strong>LP7:</strong> Financial sustainability and priority fiscal allocation (5/5 Rating)."
    ],
    "planeaCloseBtn": "Understood / Close PLANEA Framework",
    "regionalModalTitle": "B. Regional Framework (ORAS-CONHU, UNFPA, PAHO/WHO, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. Consolidated Actuarial Evidence MILENA (15 Countries)",
    "regionalSec1Desc": "UNFPA study in Latin America and the Caribbean quantifies an aggregate economic loss of <strong>USD 13,538 Million</strong> annually (1% of regional GDP). 88.2% falls directly on women's income and education.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Global AA-HA! Guidance (PAHO / WHO)",
    "regionalSec2Desc": "Accelerated Action for the Health of Adolescents: clinical interventions, confidential counseling without adult accompaniment, and long-acting reversible contraceptives (LARCs).",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Rapid Assessment Tool for Sexual Violence (PAHO)",
    "regionalSec3Desc": "Post-exposure prophylaxis (PEP), emergency contraception (EC), and immediate psychosocial support protocols in primary care for survivors.",
    "regionalCloseBtn": "Understood / Close Regional Framework"
  },
  "qu": {
    "langName": "Runasimi",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Huk Andes Simikuna ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Allinmi / Wichq'ay",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Yachay Qillqata Wichq'ay",
    "sumModalTitle": "Kamachiqkunapaq Ficha Técnica Ejecutiva",
    "sumHeaderBadge": "CONGRESO COMISIONES WAN MINISTERIO DE ECONOMÍAPAQ RESUMEN",
    "sumGrid1Lbl": "Hatun Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Social Retorno (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Mana Ruraypa Chinkachiynin:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Kamachiy Respaldo:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Hatun Politica Mañakuykuna:",
    "sumCloseBtn": "Allinmi / Ficha Wichq'ay",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Versión Qhaway <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Wichq'ay",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Allinmi / PLANEA Wichq'ay",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Allinmi / Suyu Marco Wichq'ay"
  },
  "gn": {
    "langName": "Avañe'ẽ",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Ambue Andes Ñe'ẽnguéra ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Aikumby / Mboty",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Mboty Compendio",
    "sumModalTitle": "Mburuvichakuérape g̃uarã Kuatia",
    "sumHeaderBadge": "CONGRESO HA HACIENDA-PE G̃UARÃ",
    "sumGrid1Lbl": "Meta Guasu 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Viru Jehevy (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Viru Kañy:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Teko Ñangareko:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Tembiapo Guasu:",
    "sumCloseBtn": "Aikumby / Mboty",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Hecha Versión <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Mboty",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Aikumby / PLANEA Mboty",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Aikumby / Suyu Marco Mboty"
  },
  "arn": {
    "langName": "Mapudungun",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Kake Andes Dungu ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Kimeltun / Nütramtun",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Nütramtun Compendio",
    "sumModalTitle": "Ngülamtun Chillka Longko Mew",
    "sumHeaderBadge": "CONGRESO KA HACIENDA MEW",
    "sumGrid1Lbl": "Fütra Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Kulliñ Wiñol (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Kulliñ Kañy:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Ngülam Kuñiwtun:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Fütra Dungu Politica:",
    "sumCloseBtn": "Kimeltun / Nütramtun",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Pen Versión <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Nütramtun",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Kimeltun / PLANEA Nütramtun",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Kimeltun / Suyu Marco Nütramtun"
  },
  "qvi": {
    "langName": "Kichwa",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Shuk Andes Shimikuna ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Allimi / Wichkana",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Wichkana Compendio",
    "sumModalTitle": "Pushakkunapak Ficha Técnica",
    "sumHeaderBadge": "ASAMBLEA WAN HACIENDAPAK RESUMEN",
    "sumGrid1Lbl": "Jatun Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Qullqi Kutiy (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Qullqi Chinkay:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Kamachi Rikuriy:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Jatun Mañaykuna:",
    "sumCloseBtn": "Allimi / Wichkana",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Versión Rikuna <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Wichkana",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Allimi / PLANEA Wichkana",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Allimi / Suyu Marco Wichkana"
  },
  "guc": {
    "langName": "Wayuunaiki",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Wane Andes Anüiki ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Ayaawateesü / Akaliojiraa",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Akaliojiraa Compendio",
    "sumModalTitle": "Apalirawaa Ficha Técnica",
    "sumHeaderBadge": "CONGRESO JE HACIENDA",
    "sumGrid1Lbl": "Katsüin Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Walawaa Anaa (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Walawaa Chinkay:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Pütchi Anaa:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Pütchi Apalirawaa:",
    "sumCloseBtn": "Ayaawateesü / Akaliojiraa",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Eirakaa Versión <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Akaliojiraa",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Ayaawateesü / PLANEA Akaliojiraa",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Ayaawateesü / Suyu Marco Akaliojiraa"
  },
  "wra": {
    "langName": "Warao",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Raisa Andes Aribo ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Yakera / Taera",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Taera Compendio",
    "sumModalTitle": "Obonoba Ficha Técnica",
    "sumHeaderBadge": "ASAMBLEA JE HACIENDA",
    "sumGrid1Lbl": "Obonoba Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Aribo Anaa (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Aribo Chinkay:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Aribo Nomewitu:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Aribo Politica:",
    "sumCloseBtn": "Yakera / Taera",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Diai Versión <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Taera",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Yakera / PLANEA Taera",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Yakera / Suyu Marco Taera"
  },
  "pmn": {
    "langName": "Pemón",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Emí Andes Mai ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Kure pe / Asenne",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Asenne Compendio",
    "sumModalTitle": "Mai Ficha Técnica",
    "sumHeaderBadge": "ASAMBLEA JE HACIENDA",
    "sumGrid1Lbl": "Mai Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Mai Anaa (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Mai Chinkay:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Mai Pata'pï:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Mai Politica:",
    "sumCloseBtn": "Kure pe / Asenne",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Enene Versión <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Asenne",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Kure pe / PLANEA Asenne",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Kure pe / Suyu Marco Asenne"
  },
  "pbb": {
    "langName": "Nasa Yuwe",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Nasa Andes Yuwe ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Bia / Thegsa",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Thegsa Compendio",
    "sumModalTitle": "Thegnikha's Ficha Técnica",
    "sumHeaderBadge": "CONGRESO JE HACIENDA",
    "sumGrid1Lbl": "Thegsa Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Ku'j Anaa (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Ku'j Chinkay:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Yu'çeçx Çxhab:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Yu'çeçx Politica:",
    "sumCloseBtn": "Bia / Thegsa",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Thele Versión <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Thegsa",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Bia / PLANEA Thegsa",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Bia / Suyu Marco Thegsa"
  },
  "emp": {
    "langName": "Emberá",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Dji Andes Bedéa ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Bia / Kĩrĩbada",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Kĩrĩbada Compendio",
    "sumModalTitle": "Bedéa Ficha Técnica",
    "sumHeaderBadge": "CONGRESO JE HACIENDA",
    "sumGrid1Lbl": "Droma Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Drua Anaa (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Drua Chinkay:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Bedéa Drua:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Bedéa Politica:",
    "sumCloseBtn": "Bia / Kĩrĩbada",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Akʉza Versión <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Kĩrĩbada",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Bia / PLANEA Kĩrĩbada",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Bia / Suyu Marco Kĩrĩbada"
  },
  "ash": {
    "langName": "Asháninka",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Pitsita Andes Ñañantsi ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Kametsa / Asitanake",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Asitanake Compendio",
    "sumModalTitle": "Kametsari Ficha Técnica",
    "sumHeaderBadge": "CONGRESO JE HACIENDA",
    "sumGrid1Lbl": "Kametsa Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Pankotsi Anaa (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Pankotsi Chinkay:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Ñañantsi Pankotsi:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Ñañantsi Politica:",
    "sumCloseBtn": "Kametsa / Asitanake",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Amenakotero Versión <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Asitanake",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Kametsa / PLANEA Asitanake",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Kametsa / Suyu Marco Asitanake"
  },
  "agr": {
    "langName": "Awajún",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Tikich Andes Chicham ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Pegkerai / Ijiakbau",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Ijiakbau Compendio",
    "sumModalTitle": "Pegker Ficha Técnica",
    "sumHeaderBadge": "CONGRESO JE HACIENDA",
    "sumGrid1Lbl": "Pegker Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Jea Anaa (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Jea Chinkay:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Chicham Jea:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Chicham Politica:",
    "sumCloseBtn": "Pegkerai / Ijiakbau",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Diistai Versión <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Ijiakbau",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Pegkerai / PLANEA Ijiakbau",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Pegkerai / Suyu Marco Ijiakbau"
  },
  "jiv": {
    "langName": "Shuar Chicham",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Chikich Andes Chicham ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Penkeraiti / Enkemamu",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Enkemamu Compendio",
    "sumModalTitle": "Penker Ficha Técnica",
    "sumHeaderBadge": "ASAMBLEA JE HACIENDA",
    "sumGrid1Lbl": "Penker Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Tsuwatai Anaa (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Tsuwatai Chinkay:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Chicham Tsuwatai:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Chicham Politica:",
    "sumCloseBtn": "Penkeraiti / Enkemamu",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Iistin Versión <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Enkemamu",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Penkeraiti / PLANEA Enkemamu",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Penkeraiti / Suyu Marco Enkemamu"
  },
  "rap": {
    "langName": "Rapa Nui",
    "skipLink": "Hatun willakuykunaman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Rahi Andes Vānaŋa ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Sipaskunapa Chichuynin Hark'ay wan Pisi Mirachiy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela suyukunapa Min. Salud arinishqan. <strong>15 watamanta urapi wawakuna mana chichukunankupaq</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Qhaway (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPAKUY",
    "regionalCardTitle": "Actuarial Cheqaq Yachay wan AA-HA! Kamachiykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinapi), Guía Global AA-HA! wan maqasqa warmikunata hampiynin.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Cheqaq Yachaykuna Qhaway",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Tupukunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiq Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡KAYPI ÑIT'IY!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Kaypi ñit'iy Congreso wan MEFpaq Yachay Qillqata kichanapaq",
    "s1Title": "1. Hampi Yachay wan Cheqaq Taripaykuna",
    "s1Subtitle": "Clínica, social wan infraestructura yachaykuna (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay rimakun? Cheqaqta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kay pasan? Causal Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq pisiy kachkan? Oficial chaninchayta Qhaway",
    "s2Title": "2. Qullqi Mirachiy wan Chaninchay (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíapaq qullqi justificativo.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> HATUN QULLQI CHINKACHIY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiy Desglose Qhaway",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI WAQAYCHAY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Solmanta Ahorro Qhaway",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Simi Kamachikuna wan Huñunakuykuna",
    "s3Subtitle": "Suyu kamachiypi allin sayasqa leykuna.",
    "s4Title": "6. Suyu Suyupi Indicadores Qhawana",
    "s4Subtitle": "Sapa suyupi fecundidad tupa, postakuna wan qullqi chinkachiy taripay.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Allin Postakuna Cobertura:",
    "expInactionLbl": "Mana Ruraypa Chinkachiynin:",
    "expPriorityLbl": "Suyu Politica Ñawpaq Rurana:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "s5Title": "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yachaykunawan respaldado.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",
    "s8Title": "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    "s8Subtitle": "Andes suyukunapa wan organismos internacionales nisqapa cheqaq qillqankuna.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temapaq Politica Incidencia Observatorio. Hackatón Creativa Regional wan ORAS-CONHU, UNFPA, OPS/OMS respaldo.",
    "fCol2Title": "Kamachikuna wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapaq Institucionkuna",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Māori / Haka Oho",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapay • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Cheqaq Yachaykuna wan Yupaykuna",
    "deepSecGovTitle": "Kamachiy Respaldo wan Hampi Directivakuna",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA arinishqa wan qhali directivakunawan tupan.",
    "deepSecEconTitle": "Qullqi wan PBI Chaninchay (UNFPA / MEF)",
    "deepSecRoiTitle": "Social Qullqi Mirachiy wan Chinkachiy",
    "deepSecRoiDesc": "Yachaykuna qawachin sapa qullqi churamusqa 7 kutita Estado qullqi waqaychayta apamun.",
    "deepSecDemandTitle": "Suyu Politica Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan Ruray:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churanata mañan hinallataq suyukunawan huñunakuyta.",
    "sciModalTitle": "Congreso wan MEFpaq Yachay Qillqa Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Haka Oho Compendio",
    "sumModalTitle": "Puka Haka Oho Ficha Técnica",
    "sumHeaderBadge": "CONGRESO KA HACIENDA",
    "sumGrid1Lbl": "Matahiti Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Moni Haka Oho (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Moni Kore:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Vānaŋa Kāiŋa:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Vānaŋa Politica:",
    "sumCloseBtn": "Māori / Haka Oho",
    "countryModalTitle": "Andes Suyuta Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "U'i Versión <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Haka Oho",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Māori / PLANEA Haka Oho",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Māori / Suyu Marco Haka Oho"
  },
  "ay": {
    "langName": "Aymar aru",
    "skipLink": "Nayrïri willayaru saraña",
    "endorsedBy": "Yanapirinaka:",
    "countryBarLbl": "Andes Suyuta Akllay:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Qhana Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Ch'amak Modo",
    "optgroupOther": "── Yaqha Andes Arunaka ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Imillanakana Usuriptawi Jark'aqaña",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud aruskipawipa. <strong>15 marat jisk'a imillanaka jani usuriptañapataki</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metanaka Uñjaña (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. MARCO REGIONAL (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPT'AWI",
    "regionalCardTitle": "Actuarial Chiqpach Yatiwi wan AA-HA! Kamachinaka",
    "regionalCardDesc": "UNFPA 15 MILENA yatiyawinaka (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinana), Guía Global AA-HA! wan usuchjata warminaka qullaña.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Suyu Chiqpach Yatiwi Uñjaña",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart text-slate-950 mr-1.5' aria-hidden='true'></i> Suyu Indicadores Uñjaña",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll text-white mr-1.5' aria-hidden='true'></i> Kamachi Qillqa Uñjaña",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Irpiri Ficha Técnica",
    "heroCardTitle": "Andes Politica Incidencia",
    "heroCardBadge": "¡AKANA LLIK'IÑA!",
    "heroCardDesc": "<i class='fa-solid fa-hand-pointer text-brand-accent animate-pulse mr-1.5' aria-hidden='true'></i> Akana llik'iña Asamblea wan Ministerio Qullañ Yatiwi jist'arañataki",
    "s1Title": "1. Qullañ Yatiwi wan Yatichawi Uñt'ayawi",
    "s1Subtitle": "Klinika, social wan uñstayawi yatichawi (PLANEA / OPS / UNFPA).",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Kunatsa akax sasi? Chiqpach Yatiwi Uñjaña",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Kunatsa akax pusi? Causal Yatiwi Uñjaña",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Kunatsa pisisi? Oficial Chaninchawi Uñjaña",
    "s2Title": "2. Qullqi Mirayawi wan Chaninchawi (ROI)",
    "s2Subtitle": "Presupuesto Comisión wan Ministerio de Economíatak qullqi yatiyawi.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> JACH'A QULLQI CHHAQAWI",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chhaqawi Desglose Uñjaña",
    "roi2Badge": "<i class='fa-solid fa-piggy-bank' aria-hidden='true'></i> ESTADO QULLQI JARK'AQAWI",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Sapa Qullqit Ahorro Uñjaña",
    "scTitle": "3. Grafico Qhawaykuna wan Suyu Chikan Kaykuna",
    "scSubtitle": "Encuestas demográficas wan PLANEA 2025-2030 matriz nisqamanta.",
    "chart1Title": "<i class='fa-solid fa-chart-column text-brand-accent' aria-hidden='true'></i> Suyu Fecundidad Adolescente (1,000 sipasmanta)",
    "chart1Sub": "PLANEA 2025-2030",
    "chart2Title": "<i class='fa-solid fa-chart-pie text-brand-teal' aria-hidden='true'></i> Allin Hampi Wasi Cobertura",
    "chart2Sub": "Primer Nivel Postakuna",
    "g2Lbl1": "Acreditado Hampi Wasikuna",
    "g2Lbl2": "Presupuesto Pisiyrayku Mana Acreditado",
    "chart2Note": "*Presupuesto pisiyrayku chakra campopi mana sapan confidencial postakuna kanchu.",
    "sfcTitle": "4. Llulla Rimaykuna vs Cheqaq Ciencia (Fact-Checking)",
    "sfcSubtitle": "Ministerio de Salud, UNFPA wan Código Penal nisqamanta kutichiykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> RUNAPA LLULLA RIMAYNIN",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> CHEQAQ CIENCIA YACHAY",
    "fc1MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Colegiopi yachachiyqa waynakunata temprano puñuchin.\"",
    "fc1MythDesc": "Seksualidad yachachiyta hark'anankupaq sapa kuti llullakunku.",
    "fc1EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc1EvDesc": "Estudiokuna qawachin EIS yachachiyqa <strong>1.5 watatawan unanchata qallariychin</strong>, unqoykunata wan mana munasqa chichuyta hark'an.",
    "fc2MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"Wayna-sipaskunapa qhali kayninpi qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Presupuesto comisionpi mana qullqi kutimuqta qhawanku.",
    "fc2EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc2EvDesc": "MILENA yachaykuna <strong>7:1 Retorno de Inversión (ROI) nisqata qawachin</strong>, emergencia qullqita ahorraspa.",
    "fc3MythTitle": "<i class='fa-solid fa-circle-xmark text-brand-crimson' aria-hidden='true'></i> \"15 watamanta urapi wawa chichuyqa ayllupa asuntosllanmi.\"",
    "fc3MythDesc": "Violacionta pakayta munanku.",
    "fc3EvTitle": "<i class='fa-solid fa-circle-check text-brand-teal' aria-hidden='true'></i> Cheqaq Yachay Tarisqa:",
    "fc3EvDesc": "Código Penal nisqapi lliw 15 watamanta uray chichuyqa violacion delitom, justiciawan amachayta mañakun.",
    "s3Title": "5. Kamachinaka wan Suyu Huñunakuy",
    "s3Subtitle": "Suyu kamachinaka allin sayt'ata.",
    "s4Title": "6. Suyu Suyunakana Indicadores Uñjaña",
    "s4Subtitle": "Fecundidad, centros de salud amigables wan qullqi chhaqawi yatxatawi.",
    "expLblRegion": "Suyuta Akllay:",
    "expFertilityLbl": "Imillanakana Fecundidad:",
    "expCoverageLbl": "Qullañ Utanaka Cobertura:",
    "expInactionLbl": "Jan Lurawina Chhaqawi:",
    "expPriorityLbl": "Suyu Politica Nayrïri Lurawi:",
    "expDisclaimer": "<i class='fa-solid fa-circle-info text-brand-teal mr-1.5' aria-hidden='true'></i> <strong>Pukyu willakuy:</strong> PLANEA 2025-2030, Ministerios de Salud, INEI/DANE/INE, CEPAL, UNFPA wan OPS/OMS.",
    "coverageUnit": "Uñjaña",
    "yearUnit": "/ mara",
    "s5Title": "7. Kamachi Mayiwi wan Suyu Politica Agenda (5 Puntos)",
    "s5Subtitle": "Cerebro de Datos yatiyawimpi yanapt'ata.",
    "pBtnText": "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Uñjaña",
    "s8Title": "8. Chiqpach Qillqanaka wan Pukyunaka (Fuentes Originales)",
    "s8Subtitle": "Andes suyunakana wan organismos internacionales qillqanakapa.",
    "fTitle": "Andes Politica Incidencia • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 T2 temata Incidencia Politica Observatorio.",
    "fCol2Title": "Kamachinaka wan Ética",
    "fLic": "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    "fSafeguard": "• Andes suyukunapi wawakunata amachay kamachikuna hunt'asqa.",
    "fLawFramework": "• Niñez amachay normakuna wan tratados internacionales.",
    "fCol3Title": "Yanapirinaka",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030).",
    "modalCloseText": "Yatxattwa / Jist'antaña",
    "deepModalTitlePrefix": "Cerebro de Datos Yanapa • ",
    "legDemandLabel": "Kamachi Mayiwi",
    "deepSecEvidenceTitle": "Qullañ Chiqpach Yatiwi wan Yupaykuna",
    "deepSecGovTitle": "Aru Kamachi wan Qullañ Directivanaka",
    "deepSecGovDesc": "Plan Andino (PLANEA 2025-2030), REMSAA aruskipawi wan qullañ directivanakampi t'uqusta.",
    "deepSecEconTitle": "Qullqi wan PBI Yatxatawi (UNFPA / Min. Economía)",
    "deepSecRoiTitle": "Social Qullqi Mirayawi wan Chhaqawi",
    "deepSecRoiDesc": "Yatiyawi uñacht'ayi sapa qullqi uchatax 7 kuti Estado qullqi jark'aqañawa.",
    "deepSecDemandTitle": "Suyu Politica Mayiwi:",
    "deepSecRoadmapTitle": "Asamblea wan Ministerio Thaki Lurawi:",
    "deepSecRoadmapDesc": "Ley de Presupuesto ukan qullqi churañ munaratawa, suyunakampi mayacht'asispa.",
    "sciModalTitle": "Asamblea wan Min. Economíatak Yatiwi Qillqa",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampi wan Obstetricia Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray wawakuna chichukuspa <strong>5 kuti aswan wañuy peligropi kanku</strong> wan 3 kuti prematuro wachay. Lliw chichuy violacionmanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. MILENA Fiscal Metodología (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% wan 1.0% PBI sapa wata chinkachin. 40% chinkachiyqa yachay wasita saqesqankuraykum.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Retorno de Inversión (ROI 7:1)",
    "sciSec3Desc": "Sapa 1.00 sol EISpi churamusqa 7.00 solta hampi emergencia gastospi ahorran.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Niñez Amachay Leykuna Hunt'ay",
    "sciSec4Desc": "Estadom decentralizado qullqita postakunaman churanan wawakunata violenciamanta amachanapaq.",
    "sciCloseBtn": "Qillqa Jist'antaña",
    "sumModalTitle": "Kamachiqkunataki Ficha Técnica",
    "sumHeaderBadge": "ASAMBLEA WAN MINISTERIO DE ECONOMÍATAKI RESUMEN",
    "sumGrid1Lbl": "Jach'a Meta 2030:",
    "sumGrid1Val": "15 watamanta urapi Cero Chichuy 2030 watakama (PLANEA).",
    "sumGrid2Lbl": "Qullqi Kutt'awi (ROI):",
    "sumGrid2Val": "7.00 ahorrasqa sapa 1.00 sol churamusqamanta.",
    "sumGrid3Lbl": "Jan Lurawina Chhaqawi:",
    "sumGrid3Val": "1.0% PBI sapa wata chinkasqa.",
    "sumGrid4Lbl": "Kamachi Amachawi:",
    "sumGrid4Val": "Código Penal, Código de la Niñez wan Tratados Internacionales.",
    "sumDemandsTitle": "Suyu Politica Mayiwinaka:",
    "sumCloseBtn": "Yatxattwa / Ficha Jist'antaña",
    "countryModalTitle": "Andes Suyu Akllay (PLANEA 2025-2030)",
    "countryModalDesc": "Politica Incidencia Plataforma • PLANEA 2025-2030",
    "cmFertPrefix": "Usuriptawi: ",
    "cmBtnText": "Versión Uñjaña <i class='fa-solid fa-arrow-right'></i>",
    "countryCloseBtn": "Jist'antaña",
    "planeaModalTitle": "A. Marco Matriz PLANEA 2025-2030 (ORAS-CONHU)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Subregional Meta 2030",
    "planeaSec1Desc": "6 suyukunapi TEFA pisi mirachiy wan <strong>15 watamanta urapi Cero Chichuy</strong> Cero Tolerancia kamachiywan.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. Resolución REMSAA XLI 569",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqa qullqi etiquetanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Líneas Prioritarias",
    "planeaLp": [
      "<strong>LP1:</strong> Kamachiy huñunakuy qhali kaypi, yachaypi wan amachakuypi.",
      "<strong>LP2:</strong> Llapa Yachay Seksualidad (EIS) sapa simiman churasqa.",
      "<strong>LP3:</strong> Wayna-sipaskunapaq sapan, pakapi allin hampi wasikuna.",
      "<strong>LP4:</strong> Warmikunata wan wawakunata maqayta cheqaq hark'ay wan huchachay.",
      "<strong>LP5:</strong> Andes wayna-sipaskunapa umalliq kaynin wan rimaynin.",
      "<strong>LP6:</strong> Yachay waqaychay, kichasqa willakuykuna wan qhali willaykuna.",
      "<strong>LP7:</strong> Qullqi allin takyachiy wan ñawpaqman churana qullqi (5/5)."
    ],
    "planeaCloseBtn": "Yatxattwa / PLANEA Jist'antaña",
    "regionalModalTitle": "B. Marco Regional (ORAS-CONHU, UNFPA, OPS/OMS, UNICEF)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA Actuarial Yachay (15 Países)",
    "regionalSec1Desc": "UNFPA yachay <strong>USD 13,538 Millones</strong> sapa wata chinkasqata qawachin (1% PBI regional). 88.2% warmikunapa qullqinpi urman.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wayna-sipaskunapaq consejería confidencial sapan riy, LARC anticonceptivos unaypaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta Rápida Violencia Sexualpi (OPS)",
    "regionalSec3Desc": "PEP profilaxis, AOE emergencia anticonceptivo wan psicosocial yanapay primer nivel postakunapi.",
    "regionalCloseBtn": "Yatxattwa / Suyu Marco Jist'antaña"
  }
};

// --- 4. CONTROLADOR DE CAMBIO DE PAÍS (MULTI-COUNTRY LOGIC) ---
function switchCountry(countryKey) {
  if (!countryDatabase[countryKey]) countryKey = 'peru';
  currentCountry = countryKey;
  localStorage.setItem('planea_country', currentCountry);

  // Update header button flag and country name
  const data = countryDatabase[currentCountry];
  setElemHTML('current-country-flag', data.flagSvg || data.flag);
  setElemText('current-country-name', data.name);

  // Populate dynamic elements
  applyCountryData();
  populateLanguageDropdown();
  populateTerritorialDropdown();
  updateRegionalExplorer();
  populateLanguageDropdown();
  applyLanguage();
}

function applyCountryData() {
  const data = countryDatabase[currentCountry];
  if (!data) return;

  const code = currentLang || 'es';
  const langKey = code.charAt(0).toUpperCase() + code.slice(1); // 'En', 'Qu', 'Ay', etc.

  // Header & Hero Badges & Titles
  setElemText('site-badge', data.badge);
  
  // Resolve Site Title across all 16 languages
  let sTitle = data.siteTitle;
  if (code !== 'es') {
    if (data['siteTitle' + langKey]) sTitle = data['siteTitle' + langKey];
    else if (code === 'en' && data.siteTitleEn) sTitle = data.siteTitleEn;
    else if (code === 'qu' && data.siteTitleQu) sTitle = data.siteTitleQu;
    else if (data.siteTitleEn) sTitle = data.siteTitleEn; // Default non-Spanish to English
  }
  setElemText('site-title', sTitle);

  setElemText('hero-badge', `${data.badge} • ORAS-CONHU / UNFPA`);
  
  // Resolve Hero Title across all 16 languages
  let hTitle = data.heroTitle;
  if (code !== 'es') {
    if (data['heroTitle' + langKey]) hTitle = data['heroTitle' + langKey];
    else if (code === 'en' && data.heroTitleEn) hTitle = data.heroTitleEn;
    else if (code === 'qu' && data.heroTitleQu) hTitle = data.heroTitleQu;
    else if (data.heroTitleEn) hTitle = data.heroTitleEn;
  }
  setElemHTML('hero-title', hTitle);

  // Resolve Hero Description across all 16 languages
  let hDesc = data.heroDesc;
  if (code !== 'es') {
    if (data['heroDesc' + langKey]) {
      hDesc = data['heroDesc' + langKey];
    } else if (code === 'en' && data.heroDescEn) {
      hDesc = data.heroDescEn;
    } else if (code === 'qu' && data.heroDescQu) {
      hDesc = data.heroDescQu;
    } else if (data['heroDesc' + langKey]) {
      hDesc = data['heroDesc' + langKey];
    } else if (data.heroDescEn) {
      hDesc = data.heroDescEn; // Guaranteed translated fallback
    }
  }
  setElemHTML('hero-desc', hDesc);

  // Endorsed Badges in Header
  if (data.endorsed && data.endorsed.length >= 4) {
    setElemText('endorsed-badge-1', data.endorsed[0]);
    setElemText('endorsed-badge-2', data.endorsed[1]);
    setElemText('endorsed-badge-3', data.endorsed[2]);
    setElemText('endorsed-badge-4', data.endorsed[3]);
  }

  // Metrics Bar in Hero
  data.metrics.forEach((m, idx) => {
    const num = idx + 1;
    setElemText(`m${num}-val`, m.val);
    let lbl = m.lbl;
    if (code !== 'es' && m['lbl' + langKey]) lbl = m['lbl' + langKey];
    else if (code === 'en' && m.lblEn) lbl = m.lblEn;
    else if (code === 'qu' && m.lblQu) lbl = m.lblQu;
    else if (code !== 'es' && m.lblEn) lbl = m.lblEn;
    setElemText(`m${num}-lbl`, lbl);
  });

  // Section 1 Diagnosis Cards
  const cards = (code !== 'es' && data['cards' + langKey]) ? data['cards' + langKey] : ((code === 'en' && data.cardsEn) ? data.cardsEn : ((code === 'qu' && data.cardsQu) ? data.cardsQu : (code !== 'es' && data.cardsEn ? data.cardsEn : data.cards)));
  if (cards) {
    ['c1', 'c2', 'c3'].forEach(k => {
      const c = cards[k];
      if (c) {
        setElemText(`${k}-tag`, c.tag);
        setElemText(`${k}-title`, c.title);
        setElemText(`${k}-desc`, c.desc);
      }
    });
  }

  // Section 2 ROI & Cost of Inaction
  const roi = (code !== 'es' && data['roi' + langKey]) ? data['roi' + langKey] : ((code === 'en' && data.roiEn) ? data.roiEn : ((code === 'qu' && data.roiQu) ? data.roiQu : (code !== 'es' && data.roiEn ? data.roiEn : data.roi)));
  if (roi) {
    if (roi.roi1) {
      setElemText('roi1-title', roi.roi1.title);
      setElemHTML('roi1-desc', roi.roi1.desc);
    }
    if (roi.roi2) {
      setElemText('roi2-title', roi.roi2.title);
      setElemHTML('roi2-desc', roi.roi2.desc);
    }
  }

  // Section 5 Legal Framework
  const laws = (code !== 'es' && data['laws' + langKey]) ? data['laws' + langKey] : ((code === 'en' && data.lawsEn) ? data.lawsEn : ((code === 'qu' && data.lawsQu) ? data.lawsQu : (code !== 'es' && data.lawsEn ? data.lawsEn : data.laws)));
  if (laws) {
    ['l1', 'l2', 'l3'].forEach(k => {
      const l = laws[k];
      if (l) {
        setElemText(`${k}-tag`, l.tag);
        setElemText(`${k}-title`, l.title);
        setElemText(`${k}-desc`, l.desc);
      }
    });
  }

  // Section 6 Titles
  const expTitle = (code !== 'es' && data['explorerTitle' + langKey]) ? data['explorerTitle' + langKey] : ((code === 'en' && data.explorerTitleEn) ? data.explorerTitleEn : ((code === 'qu' && data.explorerTitleQu) ? data.explorerTitleQu : (code !== 'es' && data.explorerTitleEn ? data.explorerTitleEn : data.explorerTitle)));
  const expSub = (code !== 'es' && data['explorerSubtitle' + langKey]) ? data['explorerSubtitle' + langKey] : ((code === 'en' && data.explorerSubtitleEn) ? data.explorerSubtitleEn : ((code === 'qu' && data.explorerSubtitleQu) ? data.explorerSubtitleQu : (code !== 'es' && data.explorerSubtitleEn ? data.explorerSubtitleEn : data.explorerSubtitle)));
  setElemText('s4-title', expTitle);
  setElemText('s4-subtitle', expSub);

  // Section 7 Manifesto
  const manTitle = (code !== 'es' && data['manifestoTitle' + langKey]) ? data['manifestoTitle' + langKey] : ((code === 'en' && data.manifestoTitleEn) ? data.manifestoTitleEn : ((code === 'qu' && data.manifestoTitleQu) ? data.manifestoTitleQu : (code !== 'es' && data.manifestoTitleEn ? data.manifestoTitleEn : data.manifestoTitle)));
  const manItems = (code !== 'es' && data['manifestoItems' + langKey]) ? data['manifestoItems' + langKey] : ((code === 'en' && data.manifestoItemsEn) ? data.manifestoItemsEn : ((code === 'qu' && data.manifestoItemsQu) ? data.manifestoItemsQu : (code !== 'es' && data.manifestoItemsEn ? data.manifestoItemsEn : data.manifestoItems)));
  setElemText('s5-title', manTitle);
  if (manItems) {
    manItems.forEach((item, idx) => {
      setElemText(`m-item-${idx + 1}`, item);
    });
  }

  // Section 8 Sources Cards (Keep original institutional titles per user instructions)
  if (data.sources && data.sources.length >= 6) {
    data.sources.forEach((src, idx) => {
      const num = idx + 1;
      setElemText(`src${num}-title`, src.title);
      setElemText(`src${num}-desc`, src.desc);
    });
  }
}

function populateTerritorialDropdown() {
  const data = countryDatabase[currentCountry];
  const select = document.getElementById('exp-region');
  if (!select || !data || !data.regions) return;

  select.innerHTML = '';
  Object.keys(data.regions).forEach(key => {
    const reg = data.regions[key];
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = reg.label;
    select.appendChild(opt);
  });
}

// --- 5. LOGIC FOR REGIONAL / TERRITORIAL EXPLORER ---

const explorerLocalization = {
  "es": {
    "riskExtreme": "Riesgo Extremo",
    "riskHigh": "Riesgo Alto",
    "riskModerate": "Riesgo Moderado",
    "riskLow": "Riesgo Bajo",
    "gapCritical": "Brecha Crítica ({gap}%)",
    "gapModerate": "Brecha Moderada ({gap}%)",
    "gapLow": "Brecha Leve ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "por 1,000 nacimientos",
    "accreditedUnit": "Postas y Centros Acreditados",
    "coverageUnit": "Cobertura",
    "yearUnit": "/ año",
    "yearShort": "año",
    "millionYear": "Millones/año",
    "gdpText": "PBI Regional",
    "subnationalHigh": "Mayor tasa relativa subnacional"
  },
  "en": {
    "riskExtreme": "Extreme Risk",
    "riskHigh": "High Risk",
    "riskModerate": "Moderate Risk",
    "riskLow": "Low Risk",
    "gapCritical": "Critical Gap ({gap}%)",
    "gapModerate": "Moderate Gap ({gap}%)",
    "gapLow": "Low Gap ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "per 1,000 live births",
    "accreditedUnit": "Accredited Health Centers",
    "coverageUnit": "Coverage",
    "yearUnit": "/ year",
    "yearShort": "yr",
    "millionYear": "Million/year",
    "gdpText": "Regional GDP",
    "subnationalHigh": "Highest subnational rate"
  },
  "qu": {
    "riskExtreme": "Ancha Hatun Llaki",
    "riskHigh": "Hatun Llaki",
    "riskModerate": "Chawpi Llaki",
    "riskLow": "Pisi Llaki",
    "gapCritical": "Hatun Chinkasqa ({gap}%)",
    "gapModerate": "Chawpi Chinkasqa ({gap}%)",
    "gapLow": "Pisi Chinkasqa ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "sapa 1,000 paqariymanta",
    "accreditedUnit": "Allichasqa Hampiwasi",
    "coverageUnit": "Qhawapayana",
    "yearUnit": "/ wata",
    "yearShort": "wata",
    "millionYear": "Millones/wata",
    "gdpText": "Suyu PBI",
    "subnationalHigh": "Aswan hatun tasa"
  },
  "ay": {
    "riskExtreme": "Sintipuni Axsarawi",
    "riskHigh": "Jach'a Axsarawi",
    "riskModerate": "Taypi Axsarawi",
    "riskLow": "Jisk'a Axsarawi",
    "gapCritical": "Jach'a Chhaqawi ({gap}%)",
    "gapModerate": "Taypi Chhaqawi ({gap}%)",
    "gapLow": "Jisk'a Chhaqawi ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "sapa 1,000 yuriyata",
    "accreditedUnit": "Askichata Qullañ Utanaka",
    "coverageUnit": "Qullayawi",
    "yearUnit": "/ mara",
    "yearShort": "mara",
    "millionYear": "Millones/mara",
    "gdpText": "Suyu PBI",
    "subnationalHigh": "Jach'a tasa suyunakana"
  },
  "gn": {
    "riskExtreme": "Kyhyje Guasu",
    "riskHigh": "Kyhyje",
    "riskModerate": "Mbyte Kyhyje",
    "riskLow": "Michĩ Kyhyje",
    "gapCritical": "Kañy Guasu ({gap}%)",
    "gapModerate": "Mbyte Kañy ({gap}%)",
    "gapLow": "Michĩ Kañy ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "peteĩteĩ 1,000 heñóva",
    "accreditedUnit": "Tembipuru Apyra'ỹ",
    "coverageUnit": "Mba'apo",
    "yearUnit": "/ ary",
    "yearShort": "ary",
    "millionYear": "Millones/ary",
    "gdpText": "Tetãvore PBI",
    "subnationalHigh": "Tasa guasu tetãvorepe"
  },
  "arn": {
    "riskExtreme": "Añken Dungu",
    "riskHigh": "Dungu Mew",
    "riskModerate": "Chawün Dungu",
    "riskLow": "Pichi Dungu",
    "gapCritical": "Futake Dungu ({gap}%)",
    "gapModerate": "Chawün Dungu ({gap}%)",
    "gapLow": "Pichi Dungu ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "fill 1,000 choyün mew",
    "accreditedUnit": "Küme Lawentuwe",
    "coverageUnit": "Mongen",
    "yearUnit": "/ tripantu",
    "yearShort": "tripantu",
    "millionYear": "Millones/tripantu",
    "gdpText": "Mapu PBI",
    "subnationalHigh": "Doy fütra tasa"
  },
  "qvi": {
    "riskExtreme": "Yapa Jatun Llaki",
    "riskHigh": "Jatun Llaki",
    "riskModerate": "Chawpi Llaki",
    "riskLow": "Pisi Llaki",
    "gapCritical": "Jatun Pisi ({gap}%)",
    "gapModerate": "Chawpi Pisi ({gap}%)",
    "gapLow": "Pisi ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "sapa 1,000 wawakunamanta",
    "accreditedUnit": "Alli Hampiwasi",
    "coverageUnit": "Kawsay",
    "yearUnit": "/ wata",
    "yearShort": "wata",
    "millionYear": "Millones/wata",
    "gdpText": "Llaktapa PBI",
    "subnationalHigh": "Aswan jatun tasa"
  },
  "guc": {
    "riskExtreme": "Müliaa Müsia",
    "riskHigh": "Müliaa",
    "riskModerate": "Müliaa Asit",
    "riskLow": "Müliaa Pütchi",
    "gapCritical": "Müliaa Wane ({gap}%)",
    "gapModerate": "Müliaa Asit ({gap}%)",
    "gapLow": "Wane ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "süpüla 1,000 jemeyaa",
    "accreditedUnit": "Anaa Ayatawaa",
    "coverageUnit": "Akaliojiraa",
    "yearUnit": "/ juya",
    "yearShort": "juya",
    "millionYear": "Millones/juya",
    "gdpText": "Mmapa'a PBI",
    "subnationalHigh": "Müliaa jintüi"
  },
  "wra": {
    "riskExtreme": "Obonoba Sanuka",
    "riskHigh": "Obonoba",
    "riskModerate": "Sanuka Aribo",
    "riskLow": "Sanuka",
    "gapCritical": "Obonoba Asidaja ({gap}%)",
    "gapModerate": "Sanuka ({gap}%)",
    "gapLow": "Sanuka ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "1,000 iboma monika",
    "accreditedUnit": "Obonoba Hanoko",
    "coverageUnit": "Aribo",
    "yearUnit": "/ wata",
    "yearShort": "wata",
    "millionYear": "Millones/wata",
    "gdpText": "Goberno PBI",
    "subnationalHigh": "Iboma asidaja"
  },
  "pmn": {
    "riskExtreme": "Pata'pï Mai",
    "riskHigh": "Pata'pï",
    "riskModerate": "Mai Asit",
    "riskLow": "Mai Piti",
    "gapCritical": "Mai Pimanse ({gap}%)",
    "gapModerate": "Mai ({gap}%)",
    "gapLow": "Piti ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "1,000 murekon",
    "accreditedUnit": "Pata'pï Iwe",
    "coverageUnit": "Mai",
    "yearUnit": "/ wata",
    "yearShort": "wata",
    "millionYear": "Millones/wata",
    "gdpText": "Mai PBI",
    "subnationalHigh": "Murekon tasa"
  },
  "pbb": {
    "riskExtreme": "Ku'j We'sx",
    "riskHigh": "Khun Eena",
    "riskModerate": "Pu'çxhi",
    "riskLow": "Ku'j",
    "gapCritical": "Thegnikha's ({gap}%)",
    "gapModerate": "Pu'çxhi ({gap}%)",
    "gapLow": "Ku'j ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "1,000 ku'j çxhab",
    "accreditedUnit": "Yu'çeçx Yaçk",
    "coverageUnit": "Thegnikha",
    "yearUnit": "/ eena",
    "yearShort": "eena",
    "millionYear": "Millones/eena",
    "gdpText": "Çxhab PBI",
    "subnationalHigh": "Ku'j we'sx tasa"
  },
  "emp": {
    "riskExtreme": "Kharra Druade",
    "riskHigh": "Bia Drua",
    "riskModerate": "Druade",
    "riskLow": "Bedéa",
    "gapCritical": "Wẽra Warrade ({gap}%)",
    "gapModerate": "Druade ({gap}%)",
    "gapLow": "Bedéa ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "1,000 wẽra warrarã",
    "accreditedUnit": "Bia Druade Droma",
    "coverageUnit": "Drua",
    "yearUnit": "/ warrade",
    "yearShort": "warrade",
    "millionYear": "Millones/warrade",
    "gdpText": "Drua PBI",
    "subnationalHigh": "Wẽra tasa"
  },
  "ash": {
    "riskExtreme": "Kametsariña",
    "riskHigh": "Kametsari",
    "riskModerate": "Kametsari",
    "riskLow": "Kametsa",
    "gapCritical": "Eentsite ({gap}%)",
    "gapModerate": "Kametsari ({gap}%)",
    "gapLow": "Kametsa ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "1,000 eentsite",
    "accreditedUnit": "Kametsari Pankotsi",
    "coverageUnit": "Pankotsi",
    "yearUnit": "/ osarentsi",
    "yearShort": "osarentsi",
    "millionYear": "Millones/osarentsi",
    "gdpText": "Asháninka PBI",
    "subnationalHigh": "Eentsite tasa"
  },
  "agr": {
    "riskExtreme": "Pegkerchau",
    "riskHigh": "Datsajum",
    "riskModerate": "Pegker",
    "riskLow": "Atsu",
    "gapCritical": "Datsajum ({gap}%)",
    "gapModerate": "Pegker ({gap}%)",
    "gapLow": "Atsu ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "1,000 datsajum",
    "accreditedUnit": "Pegker Jea",
    "coverageUnit": "Jea",
    "yearUnit": "/ mijan",
    "yearShort": "mijan",
    "millionYear": "Millones/mijan",
    "gdpText": "Awajún PBI",
    "subnationalHigh": "Datsajum tasa"
  },
  "jiv": {
    "riskExtreme": "Penkerchau",
    "riskHigh": "Natsa",
    "riskModerate": "Penker",
    "riskLow": "Atsa",
    "gapCritical": "Natsa ({gap}%)",
    "gapModerate": "Penker ({gap}%)",
    "gapLow": "Atsa ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "1,000 natsa uchin",
    "accreditedUnit": "Penker Tsuwatai",
    "coverageUnit": "Tsuwatai",
    "yearUnit": "/ uchin",
    "yearShort": "uchin",
    "millionYear": "Millones/uchin",
    "gdpText": "Shuar PBI",
    "subnationalHigh": "Natsa tasa"
  },
  "rap": {
    "riskExtreme": "Rari Nui",
    "riskHigh": "Rari",
    "riskModerate": "Rari Piti",
    "riskLow": "Rari 'Iti",
    "gapCritical": "Kāiŋa Kore ({gap}%)",
    "gapModerate": "Kāiŋa Piti ({gap}%)",
    "gapLow": "Piti ({gap}%)",
    "unit1000": "/ 1,000",
    "birthsUnit": "mo te 1,000 hānau",
    "accreditedUnit": "Hare Rapa Nui Pāruru",
    "coverageUnit": "Pāruru",
    "yearUnit": "/ matahiti",
    "yearShort": "matahiti",
    "millionYear": "Millones/matahiti",
    "gdpText": "Kāiŋa PBI",
    "subnationalHigh": "Rari matahiti"
  }
};

function updateRegionalExplorer() {
  const data = countryDatabase[currentCountry];
  if (!data || !data.regions) return;
  const code = currentLang || 'es';
  const dict = i18n[code] || i18n['es'];
  const expDict = explorerLocalization[code] || explorerLocalization['es'];

  const select = document.getElementById('exp-region');
  const selectedKey = select?.value || Object.keys(data.regions)[0];
  const info = data.regions[selectedKey] || Object.values(data.regions)[0];
  if (!info) return;

  const fVal = info.fertilityVal;
  const cVal = info.coverageVal;
  const cGap = info.coverageGap || (100 - cVal);
  const iVal = info.inactionVal;

  // 1. Resolve Localized Risk Badge
  let riskText = expDict.riskLow;
  let riskColor = 'text-emerald-500';

  if (fVal >= 70) {
    riskText = expDict.riskExtreme;
    riskColor = 'text-rose-500';
  } else if (fVal >= 50) {
    riskText = expDict.riskHigh;
    riskColor = 'text-rose-500';
  } else if (fVal >= 30) {
    riskText = expDict.riskModerate;
    riskColor = 'text-amber-500';
  }

  setElemHTML('out-fertility-risk', `<i class="fa-solid fa-circle ${riskColor} text-[8px] mr-1" aria-hidden="true"></i> ${riskText}`);

  // 2. Resolve Localized Gap Badge
  let gapTemplate = expDict.gapLow || 'Brecha Leve ({gap}%)';
  let gapColor = 'text-emerald-500';
  if (cGap >= 65) {
    gapTemplate = expDict.gapCritical || 'Brecha Crítica ({gap}%)';
    gapColor = 'text-amber-500';
  } else if (cGap >= 35) {
    gapTemplate = expDict.gapModerate || 'Brecha Moderada ({gap}%)';
    gapColor = 'text-amber-500';
  }
  const gapText = gapTemplate.replace('{gap}', cGap);
  setElemHTML('out-coverage-status', `<i class="fa-solid fa-triangle-exclamation ${gapColor} text-[9px] mr-1" aria-hidden="true"></i> ${gapText}`);

  // 3. Resolve Localized Inaction Tag
  let currSymbol = 'USD';
  if (currentCountry === 'peru') currSymbol = 'S/';
  
  let inactionDetailTag = `${currSymbol} ${iVal} M/${expDict.yearShort}`;
  if (info.inactionTag && info.inactionTag.includes('PBI')) {
    const matchPct = info.inactionTag.match(/([0-9.]+%s*PBI[^)]*)/i);
    if (matchPct) {
      inactionDetailTag += ` (${matchPct[1].replace(/PBI[a-zA-Zs]*/i, expDict.gdpText)})`;
    } else {
      inactionDetailTag += ` (${expDict.gdpText})`;
    }
  } else if (currentCountry !== 'peru') {
    inactionDetailTag += ` (${expDict.subnationalHigh})`;
  }
  setElemHTML('out-inaction-tag', `<i class="fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1" aria-hidden="true"></i> ${inactionDetailTag}`);

  // 4. Sub-labels Under Progress Bars
  const isPercent = String(info.fertility).includes('%');
  const fertilitySubTxt = isPercent ? `${fVal}% ${expDict.birthsUnit}` : `${fVal} ${expDict.birthsUnit}`;
  const coverageSubTxt = `${cVal}% ${expDict.accreditedUnit}`;
  const inactionSubTxt = `${currSymbol} ${iVal} ${expDict.millionYear}`;

  setElemText('out-fertility', fertilitySubTxt);
  setElemText('out-coverage', coverageSubTxt);
  setElemText('out-inaction', inactionSubTxt);

  // 5. Big Numbers Display
  const unit1000 = isPercent ? '%' : expDict.unit1000;
  const covUnit = expDict.coverageUnit;
  const yrUnit = expDict.yearUnit;

  setElemHTML('out-fertility-num', `${fVal} <span class="text-xs font-normal text-slate-400">${unit1000}</span>`);
  setElemHTML('out-coverage-num', `${cVal}% <span class="text-xs font-normal text-slate-400">${covUnit}</span>`);
  setElemHTML('out-inaction-num', `${currSymbol} ${iVal}M <span class="text-xs font-normal text-slate-400">${yrUnit}</span>`);

  // 6. Priority Text
  const langKey = code.charAt(0).toUpperCase() + code.slice(1);
  let pText = info['priority' + langKey] || (code === 'en' && info.priorityEn ? info.priorityEn : (code === 'qu' && info.priorityQu ? info.priorityQu : (code !== 'es' && info.priorityEn ? info.priorityEn : info.priority)));
  setElemText('out-priority', pText);

  // 7. Progress Bars
  const barFertility = document.getElementById('out-fertility-bar');
  if (barFertility) barFertility.style.width = `${Math.min(100, info.fertilityPct || fVal)}%`;

  const barCoverageOk = document.getElementById('out-coverage-bar-ok');
  if (barCoverageOk) barCoverageOk.style.width = `${cVal}%`;

  const barCoverageGap = document.getElementById('out-coverage-bar-gap');
  if (barCoverageGap) barCoverageGap.style.width = `${cGap}%`;

  const barInaction = document.getElementById('out-inaction-bar');
  if (barInaction) barInaction.style.width = `${info.inactionScale || 75}%`;
}



// --- 6. MODAL HANDLERS ---
function openCountrySelectorModal() {
  const modal = document.getElementById('country-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.display = 'flex';
  }
}

function closeCountrySelectorModal() {
  const modal = document.getElementById('country-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.style.display = 'none';
  }
}

function openPlaneaModal() {
  const modal = document.getElementById('planea-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.display = 'flex';
  }
}

function closePlaneaModal() {
  const modal = document.getElementById('planea-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.style.display = 'none';
  }
}

function openRegionalFrameworkModal() {
  const modal = document.getElementById('regional-framework-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.display = 'flex';
  }
}

function closeRegionalFrameworkModal() {
  const modal = document.getElementById('regional-framework-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.style.display = 'none';
  }
}



function openDeepEvidenceModal(key) {
  const modal = document.getElementById('deep-modal');
  const titleElem = document.getElementById('modal-title');
  const bodyElem = document.getElementById('modal-body');
  const code = currentLang || 'es';
  const dict = i18n[code] || i18n['es'];
  const langKey = code.charAt(0).toUpperCase() + code.slice(1);
  const data = countryDatabase[currentCountry] || countryDatabase['peru'];

  let title = "Sustento Técnico y Normativo";
  let content = "";

  const secEvTitle = dict.deepSecEvidenceTitle || "Marco de Evidencia y Fuentes Estadísticas";
  const secGovTitle = dict.deepSecGovTitle || "Sustento Oficial y Normativa Técnica";
  const secGovDesc = dict.deepSecGovDesc || "Alineado con los estándares del Plan Andino (PLANEA 2025-2030), acuerdos vinculantes de la REMSAA y directivas de salud integral.";
  const secEconTitle = dict.deepSecEconTitle || "Análisis Económico y Fiscal (UNFPA / Ministerio de Hacienda)";
  const secRoiTitle = dict.deepSecRoiTitle || "Retorno Social y Costo de Inacción";
  const secRoiDesc = dict.deepSecRoiDesc || "La evidencia actuarial demuestra que cada unidad monetaria presupuestada en prevención genera un ahorro social de 7:1 en el gasto asistencial público.";
  const secDemandTitle = dict.deepSecDemandTitle || "Demanda de Incidencia Política:";
  const secRoadmapTitle = dict.deepSecRoadmapTitle || "Ruta de Acción Parlamentaria y Ministerial:";
  const secRoadmapDesc = dict.deepSecRoadmapDesc || "Requiere asignación explícita en la Ley de Presupuesto Público y articulación intersectorial con los gobiernos territoriales.";

  if (key.startsWith('c')) {
    const cards = (data['cards' + langKey] || (code === 'en' && data.cardsEn ? data.cardsEn : (code === 'qu' && data.cardsQu ? data.cardsQu : (code !== 'es' && data.cardsEn ? data.cardsEn : data.cards))));
    const card = (cards && cards[key]) ? cards[key] : { title: "Diagnóstico", desc: "Información" };
    title = `${dict.deepModalTitlePrefix || 'Sustento Técnico • '}${card.title}`;
    content = `<div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
      <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800">
        <h5 class="text-brand-teal font-bold text-sm mb-1 flex items-center gap-1.5"><i class="fa-solid fa-chart-pie text-brand-teal"></i> ${secEvTitle}</h5>
        <p>${card.desc}</p>
      </div>
      <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800">
        <h5 class="text-brand-purple font-bold text-sm mb-1 flex items-center gap-1.5"><i class="fa-solid fa-scale-balanced text-brand-purple"></i> ${secGovTitle}</h5>
        <p>${secGovDesc}</p>
      </div>
    </div>`;
  } else if (key.startsWith('roi')) {
    const rois = (data['roi' + langKey] || (code === 'en' && data.roiEn ? data.roiEn : (code === 'qu' && data.roiQu ? data.roiQu : (code !== 'es' && data.roiEn ? data.roiEn : data.roi))));
    const roiItem = (rois && rois[key]) ? rois[key] : { title: "Análisis Fiscal", desc: "Información" };
    title = `${dict.deepModalTitlePrefix || 'Sustento Técnico • '}${roiItem.title}`;
    content = `<div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
      <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800">
        <h5 class="text-brand-accent font-bold text-sm mb-1 flex items-center gap-1.5"><i class="fa-solid fa-coins text-brand-accent"></i> ${secEconTitle}</h5>
        <p>${roiItem.desc}</p>
      </div>
      <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800">
        <h5 class="text-emerald-400 font-bold text-sm mb-1 flex items-center gap-1.5"><i class="fa-solid fa-chart-line text-emerald-400"></i> ${secRoiTitle}</h5>
        <p>${secRoiDesc}</p>
      </div>
    </div>`;
  } else if (key.startsWith('p')) {
    const idx = parseInt(key.replace('p', '')) - 1;
    const manItems = (data['manifestoItems' + langKey] || (code === 'en' && data.manifestoItemsEn ? data.manifestoItemsEn : (code === 'qu' && data.manifestoItemsQu ? data.manifestoItemsQu : (code !== 'es' && data.manifestoItemsEn ? data.manifestoItemsEn : data.manifestoItems))));
    const item = (manItems && manItems[idx]) ? manItems[idx] : "Prioridad Legislativa";
    title = `${data.name} - ${dict.legDemandLabel || 'Demanda Legislativa'} #${idx + 1}`;
    content = `<div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
      <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800">
        <h5 class="text-brand-purple font-bold text-sm mb-1 flex items-center gap-1.5"><i class="fa-solid fa-bullhorn text-brand-purple"></i> ${secDemandTitle}</h5>
        <p class="font-semibold text-slate-200">${item}</p>
      </div>
      <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800">
        <h5 class="text-amber-400 font-bold text-sm mb-1 flex items-center gap-1.5"><i class="fa-solid fa-landmark text-amber-400"></i> ${secRoadmapTitle}</h5>
        <p>${secRoadmapDesc}</p>
      </div>
    </div>`;
  }

  if (titleElem) titleElem.textContent = title;
  if (bodyElem) bodyElem.innerHTML = content;

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.display = 'flex';
  }
}



function closeDeepEvidenceModal() {
  const modal = document.getElementById('deep-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.style.display = 'none';
  }
}

function openScientificEvidenceModal() {
  const modal = document.getElementById('sci-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.display = 'flex';
  }
}

function closeScientificEvidenceModal() {
  const modal = document.getElementById('sci-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.style.display = 'none';
  }
}


const summarySheetLocalization = {
  "es": {
    "headerTitle": "{country} - Prevención de Violencias y Embarazo Infantil (PLANEA 2025-2030)",
    "grid1": "Cero gestaciones en menores de 15 años al 2030 ({country} / PLANEA).",
    "grid2": "Retorno estimado de 7:1 en inversión preventiva en {country}.",
    "grid3": "{loss} de pérdida económica anual por inacción."
  },
  "en": {
    "headerTitle": "{country} - Violence & Adolescent Pregnancy Prevention (PLANEA 2025-2030)",
    "grid1": "Zero pregnancies in girls under 15 by 2030 ({country} / PLANEA).",
    "grid2": "Estimated 7:1 social return on preventive investment in {country}.",
    "grid3": "{loss} annual economic loss due to inaction."
  },
  "qu": {
    "headerTitle": "{country} - Wawa Chichuy wan Maqanakuy Hark'ay (PLANEA 2025-2030)",
    "grid1": "15 watamanta urapi mana chichuy 2030 watapaq ({country} / PLANEA).",
    "grid2": "7:1 qullqi kutiy chanin {country} suyupi.",
    "grid3": "{loss} sapa wata qullqi chinkachiy."
  },
  "ay": {
    "headerTitle": "{country} - Imillanaka Usuriptawi wan Nuwasiña Jark'aqaña (PLANEA 2025-2030)",
    "grid1": "15 marat jisk'anakan usuriptawi jark'aqaña 2030 marataki ({country} / PLANEA).",
    "grid2": "7:1 qullqi kutt'awi {country} suyuna.",
    "grid3": "{loss} sapa mara qullqi chhaqawi."
  },
  "gn": {
    "headerTitle": "{country} - Mitãkuña Usuriptawi Jark'a (PLANEA 2025-2030)",
    "grid1": "Cero mitãkuña 15 ary guýpe hyeguáva 2030-pe ({country} / PLANEA).",
    "grid2": "7:1 viru jehevy {country}-pe.",
    "grid3": "{loss} sapa ary viru kañy."
  },
  "arn": {
    "headerTitle": "{country} - Wechekeche Koñin Kuñiwtun (PLANEA 2025-2030)",
    "grid1": "15 tripantu pichikeche koñin ngelay 2030 tripantu mew ({country} / PLANEA).",
    "grid2": "7:1 kulliñ wiñol {country} mew.",
    "grid3": "{loss} fill tripantu kulliñ kañy."
  },
  "qvi": {
    "headerTitle": "{country} - Wawa Chichuy Hark'ay (PLANEA 2025-2030)",
    "grid1": "15 watamanta urapi wawa chichuy pisi 2030 watapak ({country} / PLANEA).",
    "grid2": "7:1 qullqi kutiy {country} llaktapi.",
    "grid3": "{loss} sapa wata qullqi chinkay."
  },
  "guc": {
    "headerTitle": "{country} - Jintüi Asitnushii Katataaka (PLANEA 2025-2030)",
    "grid1": "Cero jintüi 15 juyamüin asitnushii 2030 ({country} / PLANEA).",
    "grid2": "7:1 walawaa anaa {country}.",
    "grid3": "{loss} sapa juya walawaa chinkay."
  },
  "wra": {
    "headerTitle": "{country} - Iboma Asidaja Obonoba (PLANEA 2025-2030)",
    "grid1": "15 wata sanuka iboma asidaja obonoba 2030 ({country} / PLANEA).",
    "grid2": "7:1 aribo anaa {country}.",
    "grid3": "{loss} sapa wata aribo chinkay."
  },
  "pmn": {
    "headerTitle": "{country} - Murekon Pimanse Mai (PLANEA 2025-2030)",
    "grid1": "15 wata murekon pimanse obonoba 2030 ({country} / PLANEA).",
    "grid2": "7:1 mai anaa {country}.",
    "grid3": "{loss} sapa wata mai chinkay."
  },
  "pbb": {
    "headerTitle": "{country} - Ku'j We'sx Thegnikha's (PLANEA 2025-2030)",
    "grid1": "15 vxite' ku'j we'sx thegnikha's 2030 ({country} / PLANEA).",
    "grid2": "7:1 ku'j anaa {country}.",
    "grid3": "{loss} sapa eena ku'j chinkay."
  },
  "emp": {
    "headerTitle": "{country} - Wẽra Warrade Drua (PLANEA 2025-2030)",
    "grid1": "15 warrarãde wẽra kharra 2030 ({country} / PLANEA).",
    "grid2": "7:1 drua anaa {country}.",
    "grid3": "{loss} sapa warrade drua chinkay."
  },
  "ash": {
    "headerTitle": "{country} - Eentsite Kametsari (PLANEA 2025-2030)",
    "grid1": "15 osarentsi eentsite kametsa 2030 ({country} / PLANEA).",
    "grid2": "7:1 pankotsi anaa {country}.",
    "grid3": "{loss} sapa osarentsi pankotsi chinkay."
  },
  "agr": {
    "headerTitle": "{country} - Datsajum Pegker (PLANEA 2025-2030)",
    "grid1": "15 mijan datsajum pegker 2030 ({country} / PLANEA).",
    "grid2": "7:1 jea anaa {country}.",
    "grid3": "{loss} sapa mijan jea chinkay."
  },
  "jiv": {
    "headerTitle": "{country} - Natsa Penker (PLANEA 2025-2030)",
    "grid1": "15 uchin natsa penker 2030 ({country} / PLANEA).",
    "grid2": "7:1 tsuwatai anaa {country}.",
    "grid3": "{loss} sapa uchin tsuwatai chinkay."
  },
  "rap": {
    "headerTitle": "{country} - Poki Hapu'a Kore (PLANEA 2025-2030)",
    "grid1": "15 matahiti poki hapu'a kore 2030 ({country} / PLANEA).",
    "grid2": "7:1 moni haka oho {country}.",
    "grid3": "{loss} sapa matahiti moni kore."
  }
};


function openExecutiveSummarySheetModal() {
  const modal = document.getElementById('summary-modal');
  const data = countryDatabase[currentCountry] || countryDatabase['peru'];
  const code = currentLang || 'es';
  const dict = i18n[code] || i18n['es'];
  const langKey = code.charAt(0).toUpperCase() + code.slice(1);
  const sDict = summarySheetLocalization[code] || summarySheetLocalization['es'];

  const cName = data.name;
  const lossMetric = (data.metrics && data.metrics[1] && data.metrics[1].val) ? data.metrics[1].val : 'Alto Impacto';

  // Localized title & 4 key grid cells
  setElemText('sum-modal-title', dict.sumModalTitle || 'Ficha Técnica Ejecutiva para Decisores Políticos');
  setElemText('sum-header-badge', dict.sumHeaderBadge || 'RESUMEN EJECUTIVO PARA COMISIONES DEL CONGRESO Y EL MEF');
  setElemText('sum-header-title', (sDict.headerTitle || '{country}').replace('{country}', cName));
  
  setElemText('sum-grid-1-lbl', dict.sumGrid1Lbl || 'Meta Estratégica 2030:');
  setElemText('sum-grid-1-val', (sDict.grid1 || '').replace('{country}', cName));
  
  setElemText('sum-grid-2-lbl', dict.sumGrid2Lbl || 'Retorno Social (ROI):');
  setElemText('sum-grid-2-val', (sDict.grid2 || '').replace('{country}', cName));
  
  setElemText('sum-grid-3-lbl', dict.sumGrid3Lbl || 'Costo de Inacción:');
  setElemText('sum-grid-3-val', (sDict.grid3 || '').replace('{loss}', lossMetric));

  setElemText('sum-grid-4-lbl', dict.sumGrid4Lbl || 'Respaldo Legal y Normativo:');
  const lawsObj = (data['laws' + langKey] || (code === 'en' && data.lawsEn ? data.lawsEn : (code === 'qu' && data.lawsQu ? data.lawsQu : (code !== 'es' && data.lawsEn ? data.lawsEn : data.laws))));
  const l1Title = lawsObj?.l1?.title || 'Marco Normativo';
  const l2Title = lawsObj?.l2?.title || '';
  setElemText('sum-grid-4-val', l2Title ? `${l1Title}, ${l2Title}` : l1Title);

  // Localized 3 key demands from manifesto
  setElemText('sum-demands-title', dict.sumDemandsTitle || 'Demandas Clave de Política Pública:');
  const manItems = (data['manifestoItems' + langKey] || (code === 'en' && data.manifestoItemsEn ? data.manifestoItemsEn : (code === 'qu' && data.manifestoItemsQu ? data.manifestoItemsQu : (code !== 'es' && data.manifestoItemsEn ? data.manifestoItemsEn : data.manifestoItems))));
  if (manItems && manItems.length >= 3) {
    setElemText('sum-dem-1', manItems[0]);
    setElemText('sum-dem-2', manItems[1]);
    setElemText('sum-dem-3', manItems[2]);
  }

  setElemText('sum-close-btn', dict.sumCloseBtn || 'Entendido / Cerrar Ficha');

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.display = 'flex';
  }
}




function closeExecutiveSummarySheetModal() {
  const modal = document.getElementById('summary-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.style.display = 'none';
  }
}

// --- 7. SISTEMA DE TEMAS (LIGHT / DARK THEME) ---
function initTheme() {
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
  updateThemeButtonText();
}

function toggleTheme() {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.remove('light-theme');
    currentTheme = 'dark';
  } else {
    document.body.classList.add('light-theme');
    currentTheme = 'light';
  }
  localStorage.setItem('planea_theme', currentTheme);
  updateThemeButtonText();
}

function updateThemeButtonText() {
  const dict = i18n[currentLang] || i18n['es'];
  const btnTheme = document.getElementById('btn-theme-toggle');
  if (btnTheme) {
    btnTheme.innerHTML = currentTheme === 'light' ? dict.themeDarkBtn : dict.themeLightBtn;
  }
}


// --- 8. SISTEMA DE IDIOMAS Y ACCESIBILIDAD MULTILINGÜE (i18n) ---

function populateLanguageDropdown() {
  const select = document.getElementById('lang-select');
  const customMenu = document.getElementById('lang-custom-menu');
  const langNameElem = document.getElementById('current-lang-name');

  const country = currentCountry || 'peru';
  const dict = i18n[currentLang] || i18n['es'];

  // Update button label to current language's native autonym
  const currentLangObj = allLanguagesCatalog[currentLang] || allLanguagesCatalog['es'];
  if (langNameElem) {
    langNameElem.textContent = currentLangObj.name;
  }

  // 1° English (1°) + 2° Español (2°)
  const fixedPrimary = [
    allLanguagesCatalog.en,
    allLanguagesCatalog.es
  ];

  // 3° Languages of the selected country (arranged alphabetically by native autonym name)
  const countryLangs = Object.values(allLanguagesCatalog)
    .filter(l => l.code !== 'en' && l.code !== 'es' && l.countryKeys.includes(country))
    .sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));

  // 4° Other languages from all the other Andean countries (arranged alphabetically by native autonym name)
  const otherLangs = Object.values(allLanguagesCatalog)
    .filter(l => l.code !== 'en' && l.code !== 'es' && !l.countryKeys.includes(country))
    .sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));

  // 1. Populate native <select> for test & fallback compatibility
  if (select) {
    select.innerHTML = '';
    fixedPrimary.forEach(lang => {
      const opt = document.createElement('option');
      opt.value = lang.code;
      opt.textContent = lang.name;
      if (lang.code === currentLang) opt.selected = true;
      select.appendChild(opt);
    });

    const countryName = countryDatabase[country]?.name || 'País';
    if (countryLangs.length > 0) {
      const groupCountry = document.createElement('optgroup');
      const groupLabel = (typeof dict.optgroupCountry === 'function') 
        ? dict.optgroupCountry(countryName)
        : (currentLang === 'en' ? `── Languages of ${countryName} ──` : `── Lenguas de ${countryName} ──`);
      groupCountry.label = groupLabel;
      countryLangs.forEach(lang => {
        const opt = document.createElement('option');
        opt.value = lang.code;
        opt.textContent = lang.name;
        if (lang.code === currentLang) opt.selected = true;
        groupCountry.appendChild(opt);
      });
      select.appendChild(groupCountry);
    }

    if (otherLangs.length > 0) {
      const groupOther = document.createElement('optgroup');
      groupOther.label = dict.optgroupOther || (currentLang === 'en' ? '── Other Andean Languages ──' : '── Otras Lenguas Andinas ──');
      otherLangs.forEach(lang => {
        const opt = document.createElement('option');
        opt.value = lang.code;
        opt.textContent = lang.name;
        if (lang.code === currentLang) opt.selected = true;
        groupOther.appendChild(opt);
      });
      select.appendChild(groupOther);
    }

    if (select.value !== currentLang) {
      select.value = currentLang;
    }
  }

  // 2. Populate Fluid Custom Glassmorphism Menu
  if (customMenu) {
    customMenu.innerHTML = '';
    const countryName = countryDatabase[country]?.name || 'País';

    // 1° & 2° Primary Languages
    const primaryContainer = document.createElement('div');
    primaryContainer.className = 'space-y-1 mb-1';
    fixedPrimary.forEach(lang => {
      primaryContainer.appendChild(createLangMenuItem(lang));
    });
    customMenu.appendChild(primaryContainer);

    // 3° Country Languages Group
    if (countryLangs.length > 0) {
      const groupHeader = document.createElement('div');
      groupHeader.className = 'px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-brand-teal bg-brand-teal/10 rounded-lg border border-brand-teal/20 my-1.5 flex items-center justify-between';
      const labelText = (typeof dict.optgroupCountry === 'function')
        ? dict.optgroupCountry(countryName)
        : (currentLang === 'en' ? `── Languages of ${countryName} ──` : `── Lenguas de ${countryName} ──`);
      groupHeader.textContent = labelText;
      customMenu.appendChild(groupHeader);

      const countryContainer = document.createElement('div');
      countryContainer.className = 'space-y-1 mb-1';
      countryLangs.forEach(lang => {
        countryContainer.appendChild(createLangMenuItem(lang));
      });
      customMenu.appendChild(countryContainer);
    }

    // 4° Other Andean Languages Group
    if (otherLangs.length > 0) {
      const otherHeader = document.createElement('div');
      otherHeader.className = 'px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-purple-400 bg-purple-500/10 rounded-lg border border-purple-500/20 my-1.5 flex items-center justify-between';
      otherHeader.textContent = dict.optgroupOther || (currentLang === 'en' ? '── Other Andean Languages ──' : '── Otras Lenguas Andinas ──');
      customMenu.appendChild(otherHeader);

      const otherContainer = document.createElement('div');
      otherContainer.className = 'space-y-1';
      otherLangs.forEach(lang => {
        otherContainer.appendChild(createLangMenuItem(lang));
      });
      customMenu.appendChild(otherContainer);
    }
  }
}

function createLangMenuItem(lang) {
  const isSelected = lang.code === currentLang;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.setAttribute('role', 'option');
  btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
  btn.className = `w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer group ${
    isSelected 
      ? 'bg-brand-teal/20 text-brand-teal font-extrabold border border-brand-teal/30 shadow-sm' 
      : 'text-slate-200 hover:text-white hover:bg-slate-800/90 hover:translate-x-1'
  }`;

  btn.innerHTML = `
    <span class="flex items-center gap-2">
      <span class="w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-brand-teal animate-pulse' : 'bg-slate-600 group-hover:bg-brand-teal'}"></span>
      ${lang.name}
    </span>
    ${isSelected ? '<i class="fa-solid fa-check text-brand-teal text-xs"></i>' : ''}
  `;

  btn.onclick = (e) => {
    if (e) e.stopPropagation();
    changeLanguage(lang.code);
    closeLanguageDropdown();
  };

  return btn;
}

function toggleLanguageDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('lang-custom-menu');
  if (!menu) return;

  const isHidden = menu.classList.contains('hidden');
  if (isHidden) {
    openLanguageDropdown();
  } else {
    closeLanguageDropdown();
  }
}

function openLanguageDropdown() {
  const menu = document.getElementById('lang-custom-menu');
  const btn = document.getElementById('btn-lang-dropdown');
  const chevron = document.getElementById('lang-chevron');
  if (!menu) return;

  menu.classList.remove('hidden');
  if (btn) btn.setAttribute('aria-expanded', 'true');
  if (chevron) chevron.classList.add('rotate-180');

  // Trigger fluid physics unfold animation
  if (typeof requestAnimationFrame === 'function') {
    requestAnimationFrame(() => {
      menu.classList.remove('opacity-0', 'scale-95', '-translate-y-2');
      menu.classList.add('opacity-100', 'scale-100', 'translate-y-0');
    });
  } else {
    menu.classList.remove('opacity-0', 'scale-95', '-translate-y-2');
    menu.classList.add('opacity-100', 'scale-100', 'translate-y-0');
  }
}

function closeLanguageDropdown() {
  const menu = document.getElementById('lang-custom-menu');
  const btn = document.getElementById('btn-lang-dropdown');
  const chevron = document.getElementById('lang-chevron');
  if (!menu || menu.classList.contains('hidden')) return;

  if (btn) btn.setAttribute('aria-expanded', 'false');
  if (chevron) chevron.classList.remove('rotate-180');

  menu.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
  menu.classList.add('opacity-0', 'scale-95', '-translate-y-2');

  setTimeout(() => {
    menu.classList.add('hidden');
  }, 180);
}

// Global outside-click listener for smooth closing
if (typeof document !== 'undefined' && document.addEventListener) {
  document.addEventListener('click', (e) => {
    const container = document.getElementById('lang-dropdown-container');
    if (container && !container.contains(e.target)) {
      closeLanguageDropdown();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLanguageDropdown();
    }
  });
}


function changeLanguage(langCode) {
  if (!allLanguagesCatalog[langCode]) langCode = 'es';
  currentLang = langCode;
  localStorage.setItem('planea_lang', currentLang);

  const select = document.getElementById('lang-select');
  if (select && select.value !== currentLang) select.value = currentLang;

  applyLanguage();
  applyCountryData();
  updateRegionalExplorer();
}

function applyLanguage() {
  const dict = i18n[currentLang] || i18n['es'];
  const country = currentCountry || 'peru';
  const data = countryDatabase[country] || countryDatabase['peru'];
  const langSuffix = currentLang === 'en' ? 'En' : (currentLang === 'qu' ? 'Qu' : '');

  // 1. Accessibility Skip Link
  setElemText('skip-to-main', dict.skipLink || "Saltar al contenido principal");

  // 2. Header & Navigation
  updateThemeButtonText();
  setElemText('endorsed-label', dict.endorsedBy);
  populateLanguageDropdown();
  
  // 3. Top 2 Framework Cards (PLANEA Matrix & Regional Framework)
  setElemHTML('planea-badge-txt', dict.planeaBadge || '<i class="fa-solid fa-earth-americas animate-spin-slow"></i> A. MARCO MATRIZ PLANEA 2025-2030');
  setElemText('planea-tag', dict.planeaTag || 'ORAS-CONHU');
  setElemText('planea-card-title', dict.planeaCardTitle || 'Plan Andino de Prevención y Reducción del Embarazo en Adolescentes');
  setElemHTML('planea-card-desc', dict.planeaCardDesc || 'Matriz multisectorial de metas andinas...');
  setElemHTML('btn-planea-framework', dict.btnPlaneaFramework || '<i class="fa-solid fa-book-open"></i> Ver Metas del Marco Matriz PLANEA (6 Países)');

  setElemHTML('regional-badge-txt', dict.regionalBadge || '<i class="fa-solid fa-hands-holding-child"></i> B. MARCO REGIONAL (ORAS, UNFPA, OPS, UNICEF)');
  setElemText('regional-tag', dict.regionalTag || 'COOPERACIÓN INTERNACIONAL');
  setElemText('regional-card-title', dict.regionalCardTitle || 'Evidencia Actuarial y Estándares Globales AA-HA!');
  setElemHTML('regional-card-desc', dict.regionalCardDesc || 'Consolidado de los 15 estudios MILENA del UNFPA...');
  setElemHTML('btn-regional-framework', dict.btnRegionalFramework || '<i class="fa-solid fa-chart-line"></i> Ver Evidencia y Estándares Regionales');

  // 4. Hero Banner Action Buttons and Cards
  setElemHTML('btn-hero-sim', dict.btnHeroSim);
  setElemHTML('btn-hero-manifesto', dict.btnHeroManifesto);
  setElemHTML('btn-hero-summary', dict.btnHeroSummary);
  setElemText('hero-card-title', dict.heroCardTitle);
  setElemText('hero-card-badge', dict.heroCardBadge);
  setElemHTML('hero-card-desc', dict.heroCardDesc);

  // 5. Section 1: Diagnosis
  setElemText('s1-title', dict.s1Title);
  setElemText('s1-subtitle', dict.s1Subtitle);
  setElemHTML('c1-btn', dict.c1Btn || '<i class="fa-solid fa-magnifying-glass"></i> Ver Evidencia Profunda');
  setElemHTML('c2-btn', dict.c2Btn || '<i class="fa-solid fa-magnifying-glass"></i> Ver Análisis Causal');
  setElemHTML('c3-btn', dict.c3Btn || '<i class="fa-solid fa-magnifying-glass"></i> Ver Evaluación Oficial');

  // 6. Section 2: ROI
  setElemText('s2-title', dict.s2Title);
  setElemText('s2-subtitle', dict.s2Subtitle);
  setElemHTML('roi1-badge', dict.roi1Badge || '<i class="fa-solid fa-triangle-exclamation"></i> IMPACTO FISCAL NEGATIVO');
  setElemHTML('roi1-btn', dict.roi1Btn || '<i class="fa-solid fa-chart-column mr-1"></i> Ver Desglose de Pérdida del PIB');
  setElemHTML('roi2-badge', dict.roi2Badge || '<i class="fa-solid fa-piggy-bank"></i> EFICIENCIA DEL GASTO PÚBLICO');
  setElemHTML('roi2-btn', dict.roi2Btn || '<i class="fa-solid fa-calculator mr-1"></i> Ver Desglose Actuarial del Ahorro');

  // 7. Section 3: Charts
  setElemText('sc-title', dict.scTitle);
  setElemText('sc-subtitle', dict.scSubtitle);
  setElemHTML('chart1-title', dict.chart1Title);
  setElemText('chart1-sub', dict.chart1Sub || 'PLANEA 2025-2030');
  setElemHTML('chart2-title', dict.chart2Title);
  setElemText('chart2-sub', dict.chart2Sub || 'Nivel I-3 / I-4');
  setElemText('g2-lbl-1', dict.g2Lbl1 || 'Establecimientos Acreditados');
  setElemText('g2-lbl-2', dict.g2Lbl2 || 'Déficit por Falta de Presupuesto');
  setElemText('chart2-note', dict.chart2Note || '*La brecha presupuestal impide consultorios amigables.');

  // 8. Section 4: Fact-Checking / Mitos vs Evidencias
  setElemText('sfc-title', dict.sfcTitle);
  setElemText('sfc-subtitle', dict.sfcSubtitle);
  setElemHTML('fc-badge-myth-1', dict.fcBadgeMyth || '<i class="fa-solid fa-circle-xmark"></i> MITO COMÚN');
  setElemHTML('fc-badge-myth-2', dict.fcBadgeMyth || '<i class="fa-solid fa-circle-xmark"></i> MITO COMÚN');
  setElemHTML('fc-badge-myth-3', dict.fcBadgeMyth || '<i class="fa-solid fa-circle-xmark"></i> MITO COMÚN');
  setElemHTML('fc-badge-ev-1', dict.fcBadgeEv || '<i class="fa-solid fa-circle-check"></i> EVIDENCIA CIENTÍFICA');
  setElemHTML('fc-badge-ev-2', dict.fcBadgeEv || '<i class="fa-solid fa-circle-check"></i> EVIDENCIA CIENTÍFICA');
  setElemHTML('fc-badge-ev-3', dict.fcBadgeEv || '<i class="fa-solid fa-circle-check"></i> EVIDENCIA CIENTÍFICA');
  setElemHTML('fc1-myth-title', dict.fc1MythTitle);
  setElemText('fc1-myth-desc', dict.fc1MythDesc);
  setElemHTML('fc1-ev-title', dict.fc1EvTitle);
  setElemHTML('fc1-ev-desc', dict.fc1EvDesc);
  setElemHTML('fc2-myth-title', dict.fc2MythTitle);
  setElemText('fc2-myth-desc', dict.fc2MythDesc);
  setElemHTML('fc2-ev-title', dict.fc2EvTitle);
  setElemHTML('fc2-ev-desc', dict.fc2EvDesc);
  setElemHTML('fc3-myth-title', dict.fc3MythTitle);
  setElemText('fc3-myth-desc', dict.fc3MythDesc);
  setElemHTML('fc3-ev-title', dict.fc3EvTitle);
  setElemHTML('fc3-ev-desc', dict.fc3EvDesc);

  // 9. Section 5: Legal Framework
  setElemText('s3-title', dict.s3Title);
  setElemText('s3-subtitle', dict.s3Subtitle);

  // 10. Section 6: Territorial Explorer Labels & Disclaimers
  setElemText('s4-title', dict.s4Title);
  setElemText('s4-subtitle', dict.s4Subtitle);
  setElemText('exp-lbl-region', dict.expLblRegion);
  setElemText('exp-fertility-lbl', dict.expFertilityLbl);
  setElemText('exp-coverage-lbl', dict.expCoverageLbl);
  setElemText('exp-inaction-lbl', dict.expInactionLbl);
  setElemText('exp-priority-lbl', dict.expPriorityLbl);
  setElemHTML('exp-disclaimer', dict.expDisclaimer);

  // 11. Section 7: Manifesto Buttons
  setElemText('s5-title', dict.s5Title);
  setElemText('s5-subtitle', dict.s5Subtitle);
  for (let i = 1; i <= 5; i++) {
    setElemHTML(`p${i}-btn`, dict.pBtnText);
  }

  // 12. Section 8: Sources (Keep content per user request, update title/subtitle)
  setElemText('s8-title', dict.s8Title);
  setElemText('s8-subtitle', dict.s8Subtitle);

  // 13. Footer
  setElemText('f-title', `${dict.fTitle} • ${data.name} ${data.flag}`);
  setElemText('f-text', dict.fText);
  setElemText('f-col2-title', dict.fCol2Title);
  setElemText('f-lic', dict.fLic);
  setElemText('f-safeguard', dict.fSafeguard);
  setElemText('f-law-framework', dict.fLawFramework);
  setElemText('f-col3-title', dict.fCol3Title);
  setElemText('f-copy-rights', `© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). ${data.name}.`);

  // 14. Static Modals (Scientific, Executive Summary, PLANEA, Regional, Country)
  setElemText('sci-modal-title', dict.sciModalTitle);
  setElemHTML('sci-sec1-title', dict.sciSec1Title);
  setElemHTML('sci-sec1-desc', dict.sciSec1Desc);
  setElemHTML('sci-sec2-title', dict.sciSec2Title);
  setElemHTML('sci-sec2-desc', dict.sciSec2Desc);
  setElemHTML('sci-sec3-title', dict.sciSec3Title);
  setElemHTML('sci-sec3-desc', dict.sciSec3Desc);
  setElemHTML('sci-sec4-title', dict.sciSec4Title);
  setElemHTML('sci-sec4-desc', dict.sciSec4Desc);
  setElemText('sci-close-btn', dict.sciCloseBtn || dict.modalCloseText);

  setElemText('sum-modal-title', dict.sumModalTitle);
  setElemText('sum-header-badge', dict.sumHeaderBadge);
  setElemHTML('sum-grid-1-lbl', dict.sumGrid1Lbl);
  setElemHTML('sum-grid-2-lbl', dict.sumGrid2Lbl);
  setElemHTML('sum-grid-3-lbl', dict.sumGrid3Lbl);
  setElemHTML('sum-grid-4-lbl', dict.sumGrid4Lbl);
  setElemHTML('sum-demands-title', dict.sumDemandsTitle);
  setElemText('sum-close-btn', dict.sumCloseBtn || dict.modalCloseText);

  // Modal 4 Country Selector
  setElemText('country-modal-title', dict.countryModalTitle);
  setElemText('country-modal-desc', dict.countryModalDesc);
  setElemText('country-close-btn', dict.countryCloseBtn || dict.modalCloseText);
  ['pe', 'bo', 'cl', 'co', 'ec', 've'].forEach(cKey => {
    setElemHTML(`cm-${cKey}-btn`, dict.cmBtnText || 'Ver Versión');
    const cData = countryDatabase[cKey === 'pe' ? 'peru' : (cKey === 'bo' ? 'bolivia' : (cKey === 'cl' ? 'chile' : (cKey === 'co' ? 'colombia' : (cKey === 'ec' ? 'ecuador' : 'venezuela'))))];
    if (cData) {
      const cDesc = (langSuffix && cData['roi' + langSuffix]?.roi1?.desc) ? cData['roi' + langSuffix].roi1.title : cData.metrics[1]?.lbl;
      if (langSuffix === 'En') {
        if (cKey === 'pe') setElemText('cm-pe-desc', 'Inaction Cost: S/ 1,200M (0.45% GDP). Zero tolerance in <15 years.');
        if (cKey === 'bo') setElemText('cm-bo-desc', 'Inaction Cost: USD 373.3M (0.91% GDP). Rural gap 109/1k vs urban 58/1k.');
        if (cKey === 'cl') setElemText('cm-cl-desc', 'Historic 61.6% reduction. Child Protection System (Law 21.430).');
        if (cKey === 'co') setElemText('cm-co-desc', 'Inaction Cost: USD 2,549M (0.58% GDP). 59% of mothers in early union.');
        if (cKey === 'ec') setElemText('cm-ec-desc', 'Inaction Cost: USD 221.6M (0.26% GDP). Amazonia emergency (Napo 85.6/1k).');
        if (cKey === 've') setElemText('cm-ve-desc', 'Highest fertility (81.7/1k) and <15 years (4.81/1k). LARC and AIPEO priority.');
      } else {
        if (cKey === 'pe') setElemText('cm-pe-desc', 'Costo de Inacción: S/ 1,200M (0.45% PBI). Cero tolerancia en <15 años.');
        if (cKey === 'bo') setElemText('cm-bo-desc', 'Costo Inacción: USD 373.3M (0.91% PIB). Brecha rural 109/1k vs urbana 58/1k.');
        if (cKey === 'cl') setElemText('cm-cl-desc', 'Reducción histórica del 61.6%. Sistema de Garantías de la Niñez (Ley 21.430).');
        if (cKey === 'co') setElemText('cm-co-desc', 'Costo Inacción: USD 2,549M (0.58% PIB). 59% de madres en unión temprana.');
        if (cKey === 'ec') setElemText('cm-ec-desc', 'Costo Inacción: USD 221.6M (0.26% PIB). Amazonía en emergencia (Napo 85.6/1k).');
        if (cKey === 've') setElemText('cm-ve-desc', 'Fecundidad más alta (81.7/1k) y <15 años (4.81/1k). Prioridad LARC y AIPEO.');
      }
    }
  });

  // Modal 5 PLANEA Matrix
  setElemText('planea-modal-title', dict.planeaModalTitle);
  setElemHTML('planea-sec1-title', dict.planeaSec1Title);
  setElemHTML('planea-sec1-desc', dict.planeaSec1Desc);
  setElemHTML('planea-sec2-title', dict.planeaSec2Title);
  setElemHTML('planea-sec2-desc', dict.planeaSec2Desc);
  setElemHTML('planea-sec3-title', dict.planeaSec3Title);
  if (dict.planeaLp && dict.planeaLp.length >= 7) {
    for (let i = 1; i <= 7; i++) {
      setElemHTML(`planea-lp${i}`, dict.planeaLp[i - 1]);
    }
  }
  setElemText('planea-close-btn', dict.planeaCloseBtn || dict.modalCloseText);

  // Modal 6 Regional Framework
  setElemText('regional-framework-modal-title', dict.regionalModalTitle);
  setElemHTML('regional-sec1-title', dict.regionalSec1Title);
  setElemHTML('regional-sec1-desc', dict.regionalSec1Desc);
  setElemHTML('regional-sec2-title', dict.regionalSec2Title);
  setElemHTML('regional-sec2-desc', dict.regionalSec2Desc);
  setElemHTML('regional-sec3-title', dict.regionalSec3Title);
  setElemHTML('regional-sec3-desc', dict.regionalSec3Desc);
  setElemText('regional-close-btn', dict.regionalCloseBtn || dict.modalCloseText);

  ['modal-close-btn', 'sci-close-btn', 'sum-close-btn'].forEach(id => {
    setElemText(id, dict.modalCloseText);
  });
}

// Helper DOM functions
function setElemText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setElemHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

// Global scope window attachments
window.switchCountry = switchCountry;
window.openCountrySelectorModal = openCountrySelectorModal;
window.closeCountrySelectorModal = closeCountrySelectorModal;
window.openPlaneaModal = openPlaneaModal;
window.closePlaneaModal = closePlaneaModal;
window.openRegionalFrameworkModal = openRegionalFrameworkModal;
window.closeRegionalFrameworkModal = closeRegionalFrameworkModal;
window.openDeepEvidenceModal = openDeepEvidenceModal;
window.closeDeepEvidenceModal = closeDeepEvidenceModal;
window.openScientificEvidenceModal = openScientificEvidenceModal;
window.closeScientificEvidenceModal = closeScientificEvidenceModal;
window.openExecutiveSummarySheetModal = openExecutiveSummarySheetModal;
window.closeExecutiveSummarySheetModal = closeExecutiveSummarySheetModal;
window.changeLanguage = changeLanguage;
window.populateLanguageDropdown = populateLanguageDropdown;
window.toggleLanguageDropdown = toggleLanguageDropdown;
window.toggleTheme = toggleTheme;
window.updateRegionalExplorer = updateRegionalExplorer;

// --- 9. EVENT LISTENERS AND SMART SCROLL HEADER ---
function bindAllInteractiveEvents() {
  // Backdrop overlay click handlers to close modals easily
  ['deep-modal', 'sci-modal', 'summary-modal', 'country-modal', 'planea-modal', 'regional-framework-modal'].forEach(function(modalId) {
    const modalElem = document.getElementById(modalId);
    if (modalElem) {
      modalElem.addEventListener('click', function(e) {
        if (e.target === modalElem) {
          if (modalId === 'deep-modal') closeDeepEvidenceModal();
          if (modalId === 'sci-modal') closeScientificEvidenceModal();
          if (modalId === 'summary-modal') closeExecutiveSummarySheetModal();
          if (modalId === 'country-modal') closeCountrySelectorModal();
          if (modalId === 'planea-modal') closePlaneaModal();
          if (modalId === 'regional-framework-modal') closeRegionalFrameworkModal();
        }
      });
    }
  });

  // Section 7 Priority Buttons (ONLY buttons trigger modal)
  for (let i = 1; i <= 5; i++) {
    const btn = document.getElementById(`p${i}-btn`);
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        openDeepEvidenceModal(`p${i}`);
      });
    }
  }
}

// Smart Retracting Scroll Header
let lastScrollY = window.scrollY || 0;
let isHeaderTicking = false;
let scrollUpStartTime = null;
let headerIdleTimer = null;
let isMouseOverHeader = false;

function resetHeaderIdleTimer() {
  if (headerIdleTimer) {
    clearTimeout(headerIdleTimer);
    headerIdleTimer = null;
  }
  const header = document.querySelector('header');
  if (!header) return;

  if (window.scrollY > 20 && !isMouseOverHeader) {
    headerIdleTimer = setTimeout(function() {
      if (window.scrollY > 20 && !isMouseOverHeader) {
        header.classList.remove('header-visible');
        header.classList.add('header-hidden');
      }
    }, 1500);
  }
}

function handleSmartScrollHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const currentScrollY = window.scrollY || 0;
  const scrollDiff = currentScrollY - lastScrollY;
  const now = performance.now();

  if (currentScrollY <= 15) {
    header.classList.remove('header-hidden');
    header.classList.add('header-visible');
    scrollUpStartTime = null;
    if (headerIdleTimer) clearTimeout(headerIdleTimer);
    lastScrollY = currentScrollY;
    return;
  }

  if (scrollDiff > 4) {
    header.classList.remove('header-visible');
    header.classList.add('header-hidden');
    scrollUpStartTime = null;
    if (headerIdleTimer) clearTimeout(headerIdleTimer);
  } else if (scrollDiff < -4) {
    if (!scrollUpStartTime) {
      scrollUpStartTime = now;
    }
    const elapsedUpTime = (now - scrollUpStartTime) / 1000;
    if (elapsedUpTime >= 0.3) {
      header.classList.remove('header-hidden');
      header.classList.add('header-visible');
    }
    resetHeaderIdleTimer();
  }

  lastScrollY = currentScrollY;
}

function initSmartScrollHeader() {
  const header = document.querySelector('header');
  if (header) {
    header.addEventListener('mouseenter', function() {
      isMouseOverHeader = true;
      if (headerIdleTimer) {
        clearTimeout(headerIdleTimer);
        headerIdleTimer = null;
      }
    });
    header.addEventListener('mouseleave', function() {
      isMouseOverHeader = false;
      resetHeaderIdleTimer();
    });
  }

  window.addEventListener('scroll', function() {
    if (!isHeaderTicking) {
      window.requestAnimationFrame(function() {
        handleSmartScrollHeader();
        isHeaderTicking = false;
      });
      isHeaderTicking = true;
    }
  }, { passive: true });
}

// Initial Execution
function initApp() {
  // Ensure background modals start completely hidden
  closeDeepEvidenceModal();
  closeScientificEvidenceModal();
  closeExecutiveSummarySheetModal();
  closePlaneaModal();
  closeRegionalFrameworkModal();

  initTheme();
  switchCountry(currentCountry);
  bindAllInteractiveEvents();
  initSmartScrollHeader();

  // Open Pop-up Console for Country Selection on page entry / reload
  openCountrySelectorModal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
