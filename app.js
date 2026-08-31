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
    "siteTitle": "Plataforma de Incidencia Política: Prevención de Violencias y Embarazo Infantil en el Perú",
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
    "heroTitleQu": "Mana Ruraypa Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Wawa Chichuy wan Maqanakuy Hark'ay Peru Suyupi</span>",
    "heroDesc": "Documento ejecutivo de política pública para <strong>Congresistas, Ministros, MEF y Gobernadores Regionales</strong>. Integra la evidencia oficial del Plan Andino para fundamentar la asignación presupuestal y alcanzar la meta de <strong>Cero Tolerancia en menores de 15 años</strong>.",
    "heroDescEn": "Executive public policy brief for <strong>Members of Congress, Ministers, Ministry of Economy (MEF), and Regional Governors</strong>. Integrates official Andean Plan evidence to support budget allocation and achieve <strong>Zero Tolerance in girls under 15</strong>.",
    "heroDescQu": "Congreso, Ministrokuna, MEF wan Gobernadores nisqapaq qillqa. Plan Andino yachaykunawan <strong>15 watamanta uray sipaskunapi cero tolerancia</strong> hunt'anapaq.",
    "metrics": [
      {
        "val": "15 Años",
        "lbl": "Cero Tolerancia Legal (Art. 173 CP)",
        "lblEn": "Legal Zero Tolerance (Art. 173)",
        "lblQu": "Kamachiy Cero Tolerancia (Art. 173)",
        "valEn": "15 Years",
        "valQu": "15 Watakuna",
        "lblAy": "Kamachi Cero Tolerancia (Art. 173)",
        "valAy": "15 Maranaka",
        "lblGn": "Tekome'ẽ Cero Tolerancia (Art. 173)",
        "valGn": "15 Ary",
        "lblArn": "Nor Dungu Cero Tolerancia (Art. 173)",
        "valArn": "15 Tripantu",
        "lblQvi": "Kamachiy Cero Tolerancia (Art. 173)",
        "valQvi": "15 Watakuna",
        "lblGuc": "Akuwa'ipa Cero Tolerancia (Art. 173)",
        "valGuc": "15 Juyamüin",
        "lblWra": "Aribo Cero Tolerancia (Art. 173)",
        "valWra": "15 Wata",
        "lblPmn": "Mai Cero Tolerancia (Art. 173)",
        "valPmn": "15 Wata",
        "lblPbb": "Yu'çeçx Cero Tolerancia (Art. 173)",
        "valPbb": "15 Vxite'",
        "lblEmp": "Bedéa Cero Tolerancia (Art. 173)",
        "valEmp": "15 Warrarã",
        "lblAsh": "Sankenarentsi Cero Tolerancia (Art. 173)",
        "valAsh": "15 Osarentsi",
        "lblAgr": "Chicham Cero Tolerancia (Art. 173)",
        "valAgr": "15 Mijan",
        "lblJiv": "Chicham Cero Tolerancia (Art. 173)",
        "valJiv": "15 Uchin",
        "lblRap": "Ture Cero Tolerancia (Art. 173)",
        "valRap": "15 Matahiti"
      },
      {
        "val": "S/ 1,200M",
        "lbl": "Pérdida Anual por Inacción (0.45% PBI)",
        "lblEn": "Annual Cost of Inaction (0.45% GDP)",
        "lblQu": "Sapa Wata Qullqi Chinkachiy (0.45% PBI)",
        "lblAy": "Sapa Mara Qullqi Chhaqawi (0.45% PBI)",
        "lblGn": "Ary Viru Kañy Jeporu (0.45% PBI)",
        "lblArn": "Tripantu Kulliñ Ngelay (0.45% PBI)",
        "lblQvi": "Sapa Wata Kullki Chinkay (0.45% PBI)",
        "lblGuc": "Juyakai Walawaa Chinkay (0.45% PBI)",
        "lblWra": "Wata Aribo Chinkay (0.45% PBI)",
        "lblPmn": "Wata Mai Chinkay (0.45% PBI)",
        "lblPbb": "Vxite' Ku'j Nxusxi (0.45% PBI)",
        "lblEmp": "Warrarã Pharatade Chinkay (0.45% PBI)",
        "lblAsh": "Osarentsi Katsinkari Chinkay (0.45% PBI)",
        "lblAgr": "Mijan Kuik Chinkay (0.45% PBI)",
        "lblJiv": "Uchin Kuik Tsuwamunam (0.45% PBI)",
        "lblRap": "Matahiti Moni Kore (0.45% PBI)"
      },
      {
        "val": "S/ 7.00",
        "lbl": "Retorno por cada Sol en ESI y Postas",
        "lblEn": "ROI per 1.00 Sol in ESI & Clinics",
        "lblQu": "Sapa 1.00 Solmanta S/ 7.00 Kutichiy",
        "lblAy": "Sapa 1.00 Solat S/ 7.00 Kutt'awi",
        "lblGn": "1 Sol Jeporúre 7 Sol Kutiy",
        "lblArn": "1 Sol Kulliñmew 7 Sol Wiñotun",
        "lblQvi": "Sapa 1 Solmanta 7 Sol Kutina",
        "lblGuc": "1 Sol Walawaata 7 Sol Awana",
        "lblWra": "1 Sol Aribomew 7 Sol Yakeraja",
        "lblPmn": "1 Sol Maimew 7 Sol Pöke",
        "lblPbb": "1 Sol Ku'jmew 7 Sol Çxhaçxha",
        "lblEmp": "1 Sol Pharatademew 7 Sol Bia",
        "lblAsh": "1 Sol Katsinkarimew 7 Sol Kametsa",
        "lblAgr": "1 Sol Kuikmew 7 Sol Pegker",
        "lblJiv": "1 Sol Kuikmew 7 Sol Penker",
        "lblRap": "1 Sol Monimew 7 Sol Haka Oho"
      },
      {
        "val": "35%",
        "lbl": "Postas I-3/I-4 Acreditadas en Perú",
        "lblEn": "Accredited I-3/I-4 Youth Clinics",
        "lblQu": "Acreditado Hampina Wasikuna I-3 / I-4",
        "lblAy": "Acreditado Qullañ Utanaka I-3 / I-4",
        "lblGn": "Tesãi Renda Acreditada I-3 / I-4",
        "lblArn": "Lawentun Ruka Acreditada I-3 / I-4",
        "lblQvi": "Hampina Wasikuna Acreditada I-3 / I-4",
        "lblGuc": "Ayatawaa Wasikuna I-3 / I-4",
        "lblWra": "Hanoko Acreditada I-3 / I-4",
        "lblPmn": "Yen Acreditada I-3 / I-4",
        "lblPbb": "Yat Acreditada I-3 / I-4",
        "lblEmp": "Dega Acreditada I-3 / I-4",
        "lblAsh": "Pankotsi Acreditada I-3 / I-4",
        "lblAgr": "Jega Acreditada I-3 / I-4",
        "lblJiv": "Jea Acreditada I-3 / I-4",
        "lblRap": "Hare Acreditada I-3 / I-4"
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
        "priority": "Reducción de brechas en Amazonía rural, atención de violencia sexual en comunidades nativas con enfoque intercultural y transporte para emergencias obstétricas.",
        "priorityEn": "Closing rural Amazon healthcare gaps, intercultural response to child sexual abuse, and river transport for obstetric emergencies.",
        "priorityQu": "Amazonía rural suyupi postakunata allichay, runasimipi wan simikunapi abusota hark'ay wan mayupi yaku hampina antawakuna.",
        "priorityAy": "Amazonía rural suyunakana qullañ utanaka askichaña, abusora jark'aqaña wan jawirana qullañ barconaka.",
        "priorityGn": "Amazonía rural-pe tesãi renda ñemombarete, ñerairõ jark'aha ha y rembe'ýpe tesãi mba'yrumýi.",
        "priorityAsh": "Amazonía pankotsi kametsatantsi, eentsite jark'amu tura eni botsote emergencia.",
        "priorityAgr": "Amazonía jega pegker emamtaintin, datsajum jark'amu tura namak botete jega.",
        "priorityEmp": "Amazonía dega bia rurama, warrarã jark'amu tura do botete dega.",
        "priorityArn": "Amazonía mapu lawentun ruka küme mongen, weche domo ngülam ka lewfü lawentun.",
        "priorityQvi": "Amazonía llaktapi hampina wasikunata allichina, makayta harkana wan yaku hampina.",
        "priorityGuc": "Amazonía mmapa'a ayatawaa wasikuna anaa, jintüi jark'al je wuin ayatawaa.",
        "priorityWra": "Amazonía hanoko aribo, iboma jark'amu tura aribo mia.",
        "priorityPmn": "Amazonía yen mai, murekon jark'amu tura mai inpeke.",
        "priorityPbb": "Amazonía yat ku'j, ku'j we'sx jark'amu tura yu' yat.",
        "priorityJiv": "Amazonía jea penker, natsa jark'amu tura entsa jea.",
        "priorityRap": "Amazonía hare pāruru, poki 'āpī pāruru 'e vai hare."
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
        "priority": "Atención bilingüe en Quechua en postas rurales, prevención de violencia intrafamiliar y albergues temporales para adolescentes en riesgo.",
        "priorityEn": "Bilingual Quechua care in rural clinics, domestic violence prevention, and temporary shelters for adolescent survivors.",
        "priorityQu": "Runasimipi hampina wasikunapi ruray, ayllupi maqanakuyta hark'ay wan sipaskunapaq alberguekuna.",
        "priorityAy": "Aymar wan Runasimipi qullañ utanaka, nuwasiñat jark'aqaña wan imillanakataki samana utanaka.",
        "priorityGn": "Mbo'ehára ha tesãi renda ñe'ẽtépe, ogapy ñerairõ jark'aha ha mitãkuña rekoha.",
        "priorityAsh": "Pankotsi ñañantsi, tsimiri jark'amu tura eentsite samana pankotsi.",
        "priorityAgr": "Jega chicham pegker, asakbau jark'amu tura datsajum ayamtai jega.",
        "priorityEmp": "Dega bedéa bia, kũrakwa jark'amu tura warrarã samana dega.",
        "priorityArn": "Lawentun ruka mapudungun dungu, weche domo ngülam ka ruka.",
        "priorityQvi": "Hampina wasipi runasimipi, makayta harkana wan sipaskunapak wasikuna.",
        "priorityGuc": "Ayatawaa wasi wayuunaiki, jintüi anaa je wasi.",
        "priorityWra": "Hanoko aribo nomewitu, iboma jark'amu tura hanoko.",
        "priorityPmn": "Yen mai inpeke, murekon jark'amu tura yen.",
        "priorityPbb": "Yat yu'we çxhaçxha, ku'j we'sx jark'amu tura yat.",
        "priorityJiv": "Jea chicham penker, natsa jark'amu tura jea.",
        "priorityRap": "Hare 'ite parau mau, poki 'āpī pāruru 'e hare."
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
        "priority": "Despliegue de brigadas itinerantes de salud sexual, fortalecimiento de comisarías rurales y acceso a métodos anticonceptivos modernos.",
        "priorityEn": "Mobile sexual health teams, rural police station strengthening, and access to modern contraception.",
        "priorityQu": "Purikuk hampina qutukuna, chukllakunapi pulisiya kallpachay wan LARC hampikuna.",
        "priorityAy": "Sariri qullañ tamanaka, aynach suyunakana jark'aqaña wan LARC qullanaka.",
        "priorityGn": "Tesãi mba'apohára oguataséva, comisaría mbarete ha LARC pohãnguéra.",
        "priorityAsh": "Pankotsi amenantaji, comisaría katsinkari tura LARC sankenarentsi.",
        "priorityAgr": "Jega wegak pegker, comisaría kakarmachatairi tura LARC jega.",
        "priorityEmp": "Dega trema bia, policía druade tura LARC dega.",
        "priorityArn": "Lawentun ruka trekan, comisaría newen ka LARC lawen.",
        "priorityQvi": "Purik hampina wasikuna, comisaría sinchiyachina wan LARC hampikuna.",
        "priorityGuc": "Ayatawaa wasi wopü, policía anaa je LARC ayatawaa.",
        "priorityWra": "Hanoko mia, policía aribo tura LARC hanoko.",
        "priorityPmn": "Yen enpan, policía mai tura LARC yen.",
        "priorityPbb": "Yat theg, policía ku'j tura LARC yat.",
        "priorityJiv": "Jea weka, policía kakarman tura LARC jea.",
        "priorityRap": "Hare haha, policía pāruru 'e LARC hare."
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
    "heroDescGn": "Tetã Aty, Ministros, MEF ha Tetãvore Sambyhyhárape g̃uarã marandu. Plan Andino <strong>15 ary guýpe cero tolerancia</strong> ohupyty hag̃ua.",
    "heroDescArn": "Congreso, Ministros, MEF ka Regional Longko mew kisu kimün dungu. Plan Andino mew <strong>15 tripantu pichikeche kuñiwtual</strong>.",
    "heroDescQvi": "Congreso, Ministrokuna, MEF wan Gobernadores nisqapaq killka. Plan Andino yachaykunawan <strong>15 watamanta uray sipaskunapi cero tolerancia</strong> paktachinkapak.",
    "heroDescGuc": "Puka süpüla Congress, Ministros, MEF je Gobernadores. Plan Andino atijawaa süpüla <strong>15 juyamüin cero tolerancia</strong>.",
    "heroDescWra": "Goberno, Ministros, MEF iboma sanuka aribo. Plan Andino nomewitu <strong>15 wata sanuka cero tolerancia</strong>.",
    "heroDescPmn": "Teposankon, Ministros, MEF murekon mai. Plan Andino <strong>15 wata murekon cero tolerancia</strong>.",
    "heroDescPbb": "Congreso, Ministros, MEF nxusxi ku'j we'sx. Plan Andino <strong>15 vxite' cero tolerancia</strong>.",
    "heroDescEmp": "Congreso, Ministros, MEF wẽra warrade. Plan Andino <strong>15 warrarãde cero tolerancia</strong>.",
    "heroDescAsh": "Congreso, Ministros, MEF eentsite pankotsi. Plan Andino <strong>15 osarentsi cero tolerancia</strong>.",
    "heroDescAgr": "Congreso, Ministros, MEF datsajum apu. Plan Andino <strong>15 mijan datsajum cero tolerancia</strong> pegker pujustinme.",
    "heroDescJiv": "Congreso, Ministros, MEF natsa uunt. Plan Andino <strong>15 uchin cero tolerancia</strong>.",
    "heroDescRap": "Puka haka tere no te Congreso, Ministros, MEF 'e Gobernadores. Plan Andino 'ite mo te poki 'āpī o raro i te <strong>15 matahiti cero tolerancia</strong>.",
    "siteTitleAy": "Suyu Kamachi Qhawawi: Imillanaka Usuriptawi wan Nuwasiña Jark'aqaña Perú Suyuna",
    "siteTitleArn": "Ngülamtun Politica: Pichikeche Domo Koñin Kuñiwtun Perú Mew",
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
    },
    "heroTitleAy": "Jan Lurawina Chhaqawipa: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Imillanaka Usuriptawi wan Nuwasiña Jark'aqaña Perú Suyuna</span>",
    "siteTitleGn": "Tetã Rerekua: Mitãkuña Usuriptawi ha Ñerairõ Jark'a Perú-pe",
    "heroTitleGn": "Viru Kañy Jeporu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Mitãkuña Usuriptawi ha Ñerairõ Jark'a Perú-pe</span>",
    "heroTitleArn": "Kulliñ Kuñiwtun: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Pichikeche Domo Koñin Kuñiwtun Perú Mew</span>",
    "siteTitleQvi": "Llaktapa Politica Rikuna: Wawa Chichuy wan Makay Hark'ay Perú Llaktapi",
    "heroTitleQvi": "Mana Ruranapa Chinkay: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Wawa Chichuy wan Makay Hark'ay Perú Llaktapi</span>",
    "siteTitleGuc": "Apalirawaa Politica: Jintüi Asitnushii Katataaka je Walawaa Perú",
    "heroTitleGuc": "Walawaa Choo'u: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Jintüi Asitnushii Katataaka je Walawaa Perú</span>",
    "siteTitleWra": "Governo Politica: Iboma Asidaja tura Aribo Perú",
    "heroTitleWra": "Aribo Sanuka: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Iboma Asidaja tura Aribo Perú</span>",
    "siteTitlePmn": "Politica Mai: Murekon Pimanse tura Mai Perú",
    "heroTitlePmn": "Mai Murekon: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Murekon Pimanse tura Mai Perú</span>",
    "siteTitlePbb": "Yu'çeçx Politica: Ku'j We'sx Thegnikha's tura Ku'j Perú",
    "heroTitlePbb": "Ku'j We'sx Nxusxi: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ku'j We'sx Thegnikha's tura Ku'j Perú</span>",
    "siteTitleEmp": "Bedéa Politica: Wẽra Warrade Druade Perú",
    "heroTitleEmp": "Pharatade Druade: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Wẽra Warrade tura Drua Perú</span>",
    "siteTitleAsh": "Asháninka Incidencia: Tsimiri Koshitantsi tura Katsinkari Perú",
    "heroTitleAsh": "Katsinkari Eentsite: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Tsimiri Koshitantsi tura Katsinkari Perú</span>",
    "siteTitleAgr": "Awajún Incidencia Politica: Datsajum Jark'amu tura Pegker Pujustin Perú",
    "heroTitleAgr": "Kuik Chinkay Jark'amu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Datsajum Jark'amu tura Pegker Pujustin Perú</span>",
    "siteTitleJiv": "Politica Chicham: Natsa Tsuwamunam tura Kuik Perú",
    "heroTitleJiv": "Kuik Tsuwamunam: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Natsa Tsuwamunam tura Kuik Perú</span>",
    "heroTitleRap": "Te Moni o te Pāruru Kore: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Pāruru i te Poki 'Āpī mai te Paki 'e te Hapu'a i Perú</span>"
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
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Estrategia AIDA y Cierre de Brechas Rurales en Bolivia</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Strategy & Closing Rural Gaps in Bolivia</span>",
    "heroTitleQu": "Mana Ruraypa Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia wan Allichay Bolivia Suyupi</span>",
    "heroDesc": "Evidencia actuarial para la <strong>Asamblea Legislativa Plurinacional, Ministerio de Economía y Gobiernos Autónomos Departamentales</strong> sobre la implementación de la Estrategia AIDA y el costo de inacción.",
    "heroDescEn": "Actuarial evidence for the <strong>Plurinational Legislative Assembly, Ministry of Economy, and Departmental Autonomous Governments</strong> on AIDA Strategy execution and the cost of inaction.",
    "heroDescQu": "Asamblea Legislativa Plurinacional, Ministerio de Economía wan Gobiernos Departamentales nisqapaq qillqa <strong>AIDA estrategiamanta</strong> wan mana ruraypa chinkachiyninmanta.",
    "metrics": [
      {
        "val": "48 / 1,000",
        "lbl": "Tasa Fecundidad 15-19 (EDSA 2023)",
        "lblEn": "Legal Zero Tolerance (Art. 173)",
        "lblQu": "Kamachiy Cero Tolerancia (Art. 173)",
        "valEn": "15 Years",
        "valQu": "15 Watakuna",
        "lblAy": "Kamachi Cero Tolerancia (Art. 173)",
        "valAy": "15 Maranaka",
        "lblGn": "Tekome'ẽ Cero Tolerancia (Art. 173)",
        "valGn": "15 Ary",
        "lblArn": "Nor Dungu Cero Tolerancia (Art. 173)",
        "valArn": "15 Tripantu",
        "lblQvi": "Kamachiy Cero Tolerancia (Art. 173)",
        "valQvi": "15 Watakuna",
        "lblGuc": "Akuwa'ipa Cero Tolerancia (Art. 173)",
        "valGuc": "15 Juyamüin",
        "lblWra": "Aribo Cero Tolerancia (Art. 173)",
        "valWra": "15 Wata",
        "lblPmn": "Mai Cero Tolerancia (Art. 173)",
        "valPmn": "15 Wata",
        "lblPbb": "Yu'çeçx Cero Tolerancia (Art. 173)",
        "valPbb": "15 Vxite'",
        "lblEmp": "Bedéa Cero Tolerancia (Art. 173)",
        "valEmp": "15 Warrarã",
        "lblAsh": "Sankenarentsi Cero Tolerancia (Art. 173)",
        "valAsh": "15 Osarentsi",
        "lblAgr": "Chicham Cero Tolerancia (Art. 173)",
        "valAgr": "15 Mijan",
        "lblJiv": "Chicham Cero Tolerancia (Art. 173)",
        "valJiv": "15 Uchin",
        "lblRap": "Ture Cero Tolerancia (Art. 173)",
        "valRap": "15 Matahiti"
      },
      {
        "val": "USD 373M",
        "lbl": "Costo Inacción Anual (0.91% PIB)",
        "lblEn": "Annual Cost of Inaction (0.45% GDP)",
        "lblQu": "Sapa Wata Qullqi Chinkachiy (0.45% PBI)",
        "lblAy": "Sapa Mara Qullqi Chhaqawi (0.45% PBI)",
        "lblGn": "Ary Viru Kañy Jeporu (0.45% PBI)",
        "lblArn": "Tripantu Kulliñ Ngelay (0.45% PBI)",
        "lblQvi": "Sapa Wata Kullki Chinkay (0.45% PBI)",
        "lblGuc": "Juyakai Walawaa Chinkay (0.45% PBI)",
        "lblWra": "Wata Aribo Chinkay (0.45% PBI)",
        "lblPmn": "Wata Mai Chinkay (0.45% PBI)",
        "lblPbb": "Vxite' Ku'j Nxusxi (0.45% PBI)",
        "lblEmp": "Warrarã Pharatade Chinkay (0.45% PBI)",
        "lblAsh": "Osarentsi Katsinkari Chinkay (0.45% PBI)",
        "lblAgr": "Mijan Kuik Chinkay (0.45% PBI)",
        "lblJiv": "Uchin Kuik Tsuwamunam (0.45% PBI)",
        "lblRap": "Matahiti Moni Kore (0.45% PBI)"
      },
      {
        "val": "247 Centros",
        "lbl": "Servicios AIDA Certificados en Bolivia",
        "lblEn": "ROI per 1.00 Sol in ESI & Clinics",
        "lblQu": "Sapa 1.00 Solmanta S/ 7.00 Kutichiy",
        "lblAy": "Sapa 1.00 Solat S/ 7.00 Kutt'awi",
        "lblGn": "1 Sol Jeporúre 7 Sol Kutiy",
        "lblArn": "1 Sol Kulliñmew 7 Sol Wiñotun",
        "lblQvi": "Sapa 1 Solmanta 7 Sol Kutina",
        "lblGuc": "1 Sol Walawaata 7 Sol Awana",
        "lblWra": "1 Sol Aribomew 7 Sol Yakeraja",
        "lblPmn": "1 Sol Maimew 7 Sol Pöke",
        "lblPbb": "1 Sol Ku'jmew 7 Sol Çxhaçxha",
        "lblEmp": "1 Sol Pharatademew 7 Sol Bia",
        "lblAsh": "1 Sol Katsinkarimew 7 Sol Kametsa",
        "lblAgr": "1 Sol Kuikmew 7 Sol Pegker",
        "lblJiv": "1 Sol Kuikmew 7 Sol Penker",
        "lblRap": "1 Sol Monimew 7 Sol Haka Oho"
      },
      {
        "val": "109 / 1,000",
        "lbl": "Fecundidad en Área Rural (1.87x Urbana)",
        "lblEn": "Accredited I-3/I-4 Youth Clinics",
        "lblQu": "Acreditado Hampina Wasikuna I-3 / I-4",
        "lblAy": "Acreditado Qullañ Utanaka I-3 / I-4",
        "lblGn": "Tesãi Renda Acreditada I-3 / I-4",
        "lblArn": "Lawentun Ruka Acreditada I-3 / I-4",
        "lblQvi": "Hampina Wasikuna Acreditada I-3 / I-4",
        "lblGuc": "Ayatawaa Wasikuna I-3 / I-4",
        "lblWra": "Hanoko Acreditada I-3 / I-4",
        "lblPmn": "Yen Acreditada I-3 / I-4",
        "lblPbb": "Yat Acreditada I-3 / I-4",
        "lblEmp": "Dega Acreditada I-3 / I-4",
        "lblAsh": "Pankotsi Acreditada I-3 / I-4",
        "lblAgr": "Jega Acreditada I-3 / I-4",
        "lblJiv": "Jea Acreditada I-3 / I-4",
        "lblRap": "Hare Acreditada I-3 / I-4"
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
    "siteTitleGn": "Tetã Rerekua: Mitãkuña Usuriptawi Jark'a Bolivia-pe",
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
    },
    "heroTitleAy": "Jan Lurawina Chhaqawipa: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia wan Qullqi Churaña Bolivia Suyuna</span>",
    "heroTitleGn": "Viru Kañy Jeporu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia ha Tekojoja Bolivia-pe</span>",
    "siteTitleArn": "Ngülamtun Politica: Wechekeche Koñin Kuñiwtun Bolivia Mew",
    "heroTitleArn": "Kulliñ Kuñiwtun: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia ka Küme Mongen Bolivia Mew</span>",
    "siteTitleQvi": "Llaktapa Politica Rikuna: Wawa Chichuy Hark'ay Bolivia Llaktapi",
    "heroTitleQvi": "Mana Ruranapa Chinkay: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia wan Alli Kawsay Bolivia Llaktapi</span>",
    "siteTitleGuc": "Apalirawaa Politica: Jintüi Asitnushii Katataaka Bolivia",
    "heroTitleGuc": "Walawaa Choo'u: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia je Walawaa Bolivia</span>",
    "siteTitleWra": "Governo Politica: Iboma Asidaja Bolivia",
    "heroTitleWra": "Aribo Sanuka: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia tura Aribo Bolivia</span>",
    "siteTitlePmn": "Politica Mai: Murekon Pimanse Bolivia",
    "heroTitlePmn": "Mai Murekon: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia tura Mai Bolivia</span>",
    "siteTitlePbb": "Yu'çeçx Politica: Ku'j We'sx Thegnikha's Bolivia",
    "heroTitlePbb": "Ku'j We'sx Nxusxi: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia tura Ku'j Bolivia</span>",
    "siteTitleEmp": "Bedéa Politica: Wẽra Warrade Bolivia",
    "heroTitleEmp": "Pharatade Druade: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia tura Drua Bolivia</span>",
    "siteTitleAsh": "Asháninka Incidencia: Tsimiri Koshitantsi Bolivia",
    "heroTitleAsh": "Katsinkari Eentsite: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia tura Katsinkari Bolivia</span>",
    "siteTitleAgr": "Awajún Incidencia Politica: Datsajum Jark'amu Bolivia",
    "heroTitleAgr": "Kuik Chinkay Jark'amu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia tura Kuik Asenta Bolivia</span>",
    "siteTitleJiv": "Politica Chicham: Natsa Tsuwamunam Bolivia",
    "heroTitleJiv": "Kuik Tsuwamunam: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia tura Kuik Bolivia</span>",
    "siteTitleRap": "Vānaŋa Haka Oho: Pāruru i te Poki 'Āpī mai te Hapu'a i Bolivia",
    "heroTitleRap": "Te Moni o te Pāruru Kore: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>AIDA Estrategia 'e Moni Bolivia</span>"
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
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Sostenibilidad de la Reducción Histórica del 61.6% en Chile</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Sustaining the Historic 61.6% Reduction in Chile</span>",
    "heroTitleQu": "Mana Ruraypa Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Fecundidad Pisiyachiy Chile Suyupi</span>",
    "heroDesc": "Evidencia técnica para el <strong>Congreso Nacional, Ministerio de Salud (MINSAL) y Gobiernos Regionales</strong> sobre la reducción histórica del 61.6% en fecundidad y la erradicación de disparidades territoriales.",
    "heroDescEn": "Technical policy brief for the <strong>National Congress, Ministry of Health (MINSAL), and Regional Governments</strong> on sustaining the historic 61.6% drop in fertility and eradicating territorial disparities.",
    "heroDescQu": "Congreso Nacional, MINSAL wan Gobiernos Regionales nisqapaq qillqa <strong>61.6% fecundidad pisiyachiymanta</strong> wan suyukunapi chikan kaykuna allichaymanta.",
    "metrics": [
      {
        "val": "20.1 / 1,000",
        "lbl": "Tasa Fecundidad 15-19 (Consolidado 2026)",
        "lblEn": "Legal Zero Tolerance (Art. 173)",
        "lblQu": "Kamachiy Cero Tolerancia (Art. 173)",
        "valEn": "15 Years",
        "valQu": "15 Watakuna",
        "lblAy": "Kamachi Cero Tolerancia (Art. 173)",
        "valAy": "15 Maranaka",
        "lblGn": "Tekome'ẽ Cero Tolerancia (Art. 173)",
        "valGn": "15 Ary",
        "lblArn": "Nor Dungu Cero Tolerancia (Art. 173)",
        "valArn": "15 Tripantu",
        "lblQvi": "Kamachiy Cero Tolerancia (Art. 173)",
        "valQvi": "15 Watakuna",
        "lblGuc": "Akuwa'ipa Cero Tolerancia (Art. 173)",
        "valGuc": "15 Juyamüin",
        "lblWra": "Aribo Cero Tolerancia (Art. 173)",
        "valWra": "15 Wata",
        "lblPmn": "Mai Cero Tolerancia (Art. 173)",
        "valPmn": "15 Wata",
        "lblPbb": "Yu'çeçx Cero Tolerancia (Art. 173)",
        "valPbb": "15 Vxite'",
        "lblEmp": "Bedéa Cero Tolerancia (Art. 173)",
        "valEmp": "15 Warrarã",
        "lblAsh": "Sankenarentsi Cero Tolerancia (Art. 173)",
        "valAsh": "15 Osarentsi",
        "lblAgr": "Chicham Cero Tolerancia (Art. 173)",
        "valAgr": "15 Mijan",
        "lblJiv": "Chicham Cero Tolerancia (Art. 173)",
        "valJiv": "15 Uchin",
        "lblRap": "Ture Cero Tolerancia (Art. 173)",
        "valRap": "15 Matahiti"
      },
      {
        "val": "-61.6%",
        "lbl": "Reducción Histórica TEFA (2015-2022)",
        "lblEn": "Annual Cost of Inaction (0.45% GDP)",
        "lblQu": "Sapa Wata Qullqi Chinkachiy (0.45% PBI)",
        "lblAy": "Sapa Mara Qullqi Chhaqawi (0.45% PBI)",
        "lblGn": "Ary Viru Kañy Jeporu (0.45% PBI)",
        "lblArn": "Tripantu Kulliñ Ngelay (0.45% PBI)",
        "lblQvi": "Sapa Wata Kullki Chinkay (0.45% PBI)",
        "lblGuc": "Juyakai Walawaa Chinkay (0.45% PBI)",
        "lblWra": "Wata Aribo Chinkay (0.45% PBI)",
        "lblPmn": "Wata Mai Chinkay (0.45% PBI)",
        "lblPbb": "Vxite' Ku'j Nxusxi (0.45% PBI)",
        "lblEmp": "Warrarã Pharatade Chinkay (0.45% PBI)",
        "lblAsh": "Osarentsi Katsinkari Chinkay (0.45% PBI)",
        "lblAgr": "Mijan Kuik Chinkay (0.45% PBI)",
        "lblJiv": "Uchin Kuik Tsuwamunam (0.45% PBI)",
        "lblRap": "Matahiti Moni Kore (0.45% PBI)"
      },
      {
        "val": "0.47 / 1,000",
        "lbl": "Fecundidad en Menores de 15 Años",
        "lblEn": "ROI per 1.00 Sol in ESI & Clinics",
        "lblQu": "Sapa 1.00 Solmanta S/ 7.00 Kutichiy",
        "lblAy": "Sapa 1.00 Solat S/ 7.00 Kutt'awi",
        "lblGn": "1 Sol Jeporúre 7 Sol Kutiy",
        "lblArn": "1 Sol Kulliñmew 7 Sol Wiñotun",
        "lblQvi": "Sapa 1 Solmanta 7 Sol Kutina",
        "lblGuc": "1 Sol Walawaata 7 Sol Awana",
        "lblWra": "1 Sol Aribomew 7 Sol Yakeraja",
        "lblPmn": "1 Sol Maimew 7 Sol Pöke",
        "lblPbb": "1 Sol Ku'jmew 7 Sol Çxhaçxha",
        "lblEmp": "1 Sol Pharatademew 7 Sol Bia",
        "lblAsh": "1 Sol Katsinkarimew 7 Sol Kametsa",
        "lblAgr": "1 Sol Kuikmew 7 Sol Pegker",
        "lblJiv": "1 Sol Kuikmew 7 Sol Penker",
        "lblRap": "1 Sol Monimew 7 Sol Haka Oho"
      },
      {
        "val": "18 Años",
        "lbl": "Prohibición Matrimonio Infantil (Ley 21.515)",
        "lblEn": "Accredited I-3/I-4 Youth Clinics",
        "lblQu": "Acreditado Hampina Wasikuna I-3 / I-4",
        "lblAy": "Acreditado Qullañ Utanaka I-3 / I-4",
        "lblGn": "Tesãi Renda Acreditada I-3 / I-4",
        "lblArn": "Lawentun Ruka Acreditada I-3 / I-4",
        "lblQvi": "Hampina Wasikuna Acreditada I-3 / I-4",
        "lblGuc": "Ayatawaa Wasikuna I-3 / I-4",
        "lblWra": "Hanoko Acreditada I-3 / I-4",
        "lblPmn": "Yen Acreditada I-3 / I-4",
        "lblPbb": "Yat Acreditada I-3 / I-4",
        "lblEmp": "Dega Acreditada I-3 / I-4",
        "lblAsh": "Pankotsi Acreditada I-3 / I-4",
        "lblAgr": "Jega Acreditada I-3 / I-4",
        "lblJiv": "Jea Acreditada I-3 / I-4",
        "lblRap": "Hare Acreditada I-3 / I-4"
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
    "siteTitleArn": "Ngülamtun Politica: Wechekeche Koñin Kuñiwtun Chile Mew",
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
    },
    "heroTitleAy": "Jan Lurawina Chhaqawipa: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Usuriptawi Jisk'aptayata Chile Suyuna</span>",
    "siteTitleGn": "Tetã Rerekua: Mitãkuña Usuriptawi Jark'a Chile-pe",
    "heroTitleGn": "Viru Kañy Jeporu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Mitãkuña Guejy Chile-pe</span>",
    "heroTitleArn": "Kulliñ Kuñiwtun: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Wechekeche Koñin Ngelay Chile Mew</span>",
    "siteTitleQvi": "Llaktapa Politica Rikuna: Wawa Chichuy Hark'ay Chile Llaktapi",
    "heroTitleQvi": "Mana Ruranapa Chinkay: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Fecundidad Pisi Miray Chile Llaktapi</span>",
    "siteTitleGuc": "Apalirawaa Politica: Jintüi Asitnushii Katataaka Chile",
    "heroTitleGuc": "Walawaa Choo'u: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Jintüi Asitnushii Chile</span>",
    "siteTitleWra": "Governo Politica: Iboma Asidaja Chile",
    "heroTitleWra": "Aribo Sanuka: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Iboma Asidaja Chile</span>",
    "siteTitlePmn": "Politica Mai: Murekon Pimanse Chile",
    "heroTitlePmn": "Mai Murekon: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Murekon Pimanse Chile</span>",
    "siteTitlePbb": "Yu'çeçx Politica: Ku'j We'sx Thegnikha's Chile",
    "heroTitlePbb": "Ku'j We'sx Nxusxi: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Ku'j We'sx Thegnikha's Chile</span>",
    "siteTitleEmp": "Bedéa Politica: Wẽra Warrade Chile",
    "heroTitleEmp": "Pharatade Druade: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Wẽra Warrade Chile</span>",
    "siteTitleAsh": "Asháninka Incidencia: Tsimiri Koshitantsi Chile",
    "heroTitleAsh": "Katsinkari Eentsite: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Eentsite Kametsari Chile</span>",
    "siteTitleAgr": "Awajún Incidencia Politica: Datsajum Jark'amu Chile",
    "heroTitleAgr": "Kuik Chinkay Jark'amu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Datsajum Kuik Asenta Chile</span>",
    "siteTitleJiv": "Politica Chicham: Natsa Tsuwamunam Chile",
    "heroTitleJiv": "Kuik Tsuwamunam: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Natsa Penker Chile</span>",
    "heroTitleRap": "Te Moni o te Pāruru Kore: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>61.6% Poki Hapu'a Kore 'e Pāruru Chile</span>"
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
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal y Prevención de Uniones Tempranas en Colombia</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Maternal Perinatal Pathway & Early Union Prevention in Colombia</span>",
    "heroTitleQu": "Mana Ruraypa Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal wan Allichay Colombia Suyupi</span>",
    "heroDesc": "Evidencia actuarial para el <strong>Congreso de la República, Ministerio de Hacienda y Entidades Territoriales</strong> sobre la Ruta Materno Perinatal y el costo de inacción.",
    "heroDescEn": "Actuarial evidence for the <strong>Congress of the Republic, Ministry of Finance, and Territorial Entities</strong> on Maternal Perinatal Pathways and the cost of inaction.",
    "heroDescQu": "Congreso de la República, Ministerio de Hacienda wan Departamentos nisqapaq qillqa <strong>Ruta Materno Perinatal</strong> wan mana ruraypa chinkachiyninmanta.",
    "metrics": [
      {
        "val": "55.8 / 1,000",
        "lbl": "Tasa Fecundidad 15-19 (Consolidado 2026)",
        "lblEn": "Legal Zero Tolerance (Art. 173)",
        "lblQu": "Kamachiy Cero Tolerancia (Art. 173)",
        "valEn": "15 Years",
        "valQu": "15 Watakuna",
        "lblAy": "Kamachi Cero Tolerancia (Art. 173)",
        "valAy": "15 Maranaka",
        "lblGn": "Tekome'ẽ Cero Tolerancia (Art. 173)",
        "valGn": "15 Ary",
        "lblArn": "Nor Dungu Cero Tolerancia (Art. 173)",
        "valArn": "15 Tripantu",
        "lblQvi": "Kamachiy Cero Tolerancia (Art. 173)",
        "valQvi": "15 Watakuna",
        "lblGuc": "Akuwa'ipa Cero Tolerancia (Art. 173)",
        "valGuc": "15 Juyamüin",
        "lblWra": "Aribo Cero Tolerancia (Art. 173)",
        "valWra": "15 Wata",
        "lblPmn": "Mai Cero Tolerancia (Art. 173)",
        "valPmn": "15 Wata",
        "lblPbb": "Yu'çeçx Cero Tolerancia (Art. 173)",
        "valPbb": "15 Vxite'",
        "lblEmp": "Bedéa Cero Tolerancia (Art. 173)",
        "valEmp": "15 Warrarã",
        "lblAsh": "Sankenarentsi Cero Tolerancia (Art. 173)",
        "valAsh": "15 Osarentsi",
        "lblAgr": "Chicham Cero Tolerancia (Art. 173)",
        "valAgr": "15 Mijan",
        "lblJiv": "Chicham Cero Tolerancia (Art. 173)",
        "valJiv": "15 Uchin",
        "lblRap": "Ture Cero Tolerancia (Art. 173)",
        "valRap": "15 Matahiti"
      },
      {
        "val": "USD 2,549M",
        "lbl": "Costo Inacción Anual (0.58% PIB)",
        "lblEn": "Annual Cost of Inaction (0.45% GDP)",
        "lblQu": "Sapa Wata Qullqi Chinkachiy (0.45% PBI)",
        "lblAy": "Sapa Mara Qullqi Chhaqawi (0.45% PBI)",
        "lblGn": "Ary Viru Kañy Jeporu (0.45% PBI)",
        "lblArn": "Tripantu Kulliñ Ngelay (0.45% PBI)",
        "lblQvi": "Sapa Wata Kullki Chinkay (0.45% PBI)",
        "lblGuc": "Juyakai Walawaa Chinkay (0.45% PBI)",
        "lblWra": "Wata Aribo Chinkay (0.45% PBI)",
        "lblPmn": "Wata Mai Chinkay (0.45% PBI)",
        "lblPbb": "Vxite' Ku'j Nxusxi (0.45% PBI)",
        "lblEmp": "Warrarã Pharatade Chinkay (0.45% PBI)",
        "lblAsh": "Osarentsi Katsinkari Chinkay (0.45% PBI)",
        "lblAgr": "Mijan Kuik Chinkay (0.45% PBI)",
        "lblJiv": "Uchin Kuik Tsuwamunam (0.45% PBI)",
        "lblRap": "Matahiti Moni Kore (0.45% PBI)"
      },
      {
        "val": "59%",
        "lbl": "Madres Adolescentes en Uniones Tempranas",
        "lblEn": "ROI per 1.00 Sol in ESI & Clinics",
        "lblQu": "Sapa 1.00 Solmanta S/ 7.00 Kutichiy",
        "lblAy": "Sapa 1.00 Solat S/ 7.00 Kutt'awi",
        "lblGn": "1 Sol Jeporúre 7 Sol Kutiy",
        "lblArn": "1 Sol Kulliñmew 7 Sol Wiñotun",
        "lblQvi": "Sapa 1 Solmanta 7 Sol Kutina",
        "lblGuc": "1 Sol Walawaata 7 Sol Awana",
        "lblWra": "1 Sol Aribomew 7 Sol Yakeraja",
        "lblPmn": "1 Sol Maimew 7 Sol Pöke",
        "lblPbb": "1 Sol Ku'jmew 7 Sol Çxhaçxha",
        "lblEmp": "1 Sol Pharatademew 7 Sol Bia",
        "lblAsh": "1 Sol Katsinkarimew 7 Sol Kametsa",
        "lblAgr": "1 Sol Kuikmew 7 Sol Pegker",
        "lblJiv": "1 Sol Kuikmew 7 Sol Penker",
        "lblRap": "1 Sol Monimew 7 Sol Haka Oho"
      },
      {
        "val": "Semana 24",
        "lbl": "Despenalización IVE (Sentencia CC 2022)",
        "lblEn": "Accredited I-3/I-4 Youth Clinics",
        "lblQu": "Acreditado Hampina Wasikuna I-3 / I-4",
        "lblAy": "Acreditado Qullañ Utanaka I-3 / I-4",
        "lblGn": "Tesãi Renda Acreditada I-3 / I-4",
        "lblArn": "Lawentun Ruka Acreditada I-3 / I-4",
        "lblQvi": "Hampina Wasikuna Acreditada I-3 / I-4",
        "lblGuc": "Ayatawaa Wasikuna I-3 / I-4",
        "lblWra": "Hanoko Acreditada I-3 / I-4",
        "lblPmn": "Yen Acreditada I-3 / I-4",
        "lblPbb": "Yat Acreditada I-3 / I-4",
        "lblEmp": "Dega Acreditada I-3 / I-4",
        "lblAsh": "Pankotsi Acreditada I-3 / I-4",
        "lblAgr": "Jega Acreditada I-3 / I-4",
        "lblJiv": "Jea Acreditada I-3 / I-4",
        "lblRap": "Hare Acreditada I-3 / I-4"
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
    "heroDescAgr": "Congreso, Min. Hacienda chicham <strong>Ruta Materno Perinatal</strong> datsajum pegker pujustinme.",
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
    },
    "siteTitleAy": "Suyu Kamachi Qhawawi: Imillanaka Usuriptawi Jark'aqaña Colombia Suyuna",
    "heroTitleAy": "Jan Lurawina Chhaqawipa: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal wan Qullqi Churaña Colombia Suyuna</span>",
    "siteTitleGn": "Tetã Rerekua: Mitãkuña Usuriptawi Jark'a Colombia-pe",
    "heroTitleGn": "Viru Kañy Jeporu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal ha Tekojoja Colombia-pe</span>",
    "siteTitleArn": "Ngülamtun Politica: Wechekeche Koñin Kuñiwtun Colombia Mew",
    "heroTitleArn": "Kulliñ Kuñiwtun: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal ka Küme Mongen Colombia Mew</span>",
    "siteTitleQvi": "Llaktapa Politica Rikuna: Wawa Chichuy Hark'ay Colombia Llaktapi",
    "heroTitleQvi": "Mana Ruranapa Chinkay: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal wan Alli Kawsay Colombia Llaktapi</span>",
    "heroTitleGuc": "Walawaa Choo'u: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal je Walawaa Colombia</span>",
    "siteTitleWra": "Governo Politica: Iboma Asidaja Colombia",
    "heroTitleWra": "Aribo Sanuka: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal tura Aribo Colombia</span>",
    "siteTitlePmn": "Politica Mai: Murekon Pimanse Colombia",
    "heroTitlePmn": "Mai Murekon: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal tura Mai Colombia</span>",
    "heroTitlePbb": "Ku'j We'sx Nxusxi: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal tura Ku'j Colombia</span>",
    "heroTitleEmp": "Pharatade Druade: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal tura Drua Colombia</span>",
    "siteTitleAsh": "Asháninka Incidencia: Tsimiri Koshitantsi Colombia",
    "heroTitleAsh": "Katsinkari Eentsite: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal tura Katsinkari Colombia</span>",
    "siteTitleAgr": "Awajún Incidencia Politica: Datsajum Jark'amu Colombia",
    "heroTitleAgr": "Kuik Chinkay Jark'amu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal tura Kuik Asenta Colombia</span>",
    "siteTitleJiv": "Politica Chicham: Natsa Tsuwamunam Colombia",
    "heroTitleJiv": "Kuik Tsuwamunam: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal tura Kuik Colombia</span>",
    "siteTitleRap": "Vānaŋa Haka Oho: Pāruru i te Poki 'Āpī mai te Hapu'a i Colombia",
    "heroTitleRap": "Te Moni o te Pāruru Kore: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Ruta Materno Perinatal 'e Moni Colombia</span>"
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
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Política PIPENA y Prioridad en la Amazonía en Ecuador</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Policy & Amazonian Priority in Ecuador</span>",
    "heroTitleQu": "Mana Ruraypa Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica wan Amazonía Ecuador Suyupi</span>",
    "heroDesc": "Evidencia actuarial para la <strong>Asamblea Nacional, MEF y Gobiernos Autónomos Descentralizados (GAD)</strong> sobre la ejecución de la PIPENA y servicios SAIAA.",
    "heroDescEn": "Actuarial evidence for the <strong>National Assembly, Ministry of Economy (MEF), and Local Governments (GAD)</strong> on PIPENA policy execution and SAIAA clinics.",
    "heroDescQu": "Asamblea Nacional, MEF wan GADkuna nisqapaq qillqa <strong>PIPENA yachaymanta</strong> wan SAIAA wasikunapaq.",
    "metrics": [
      {
        "val": "39.55 / 1,000",
        "lbl": "Tasa Fecundidad 15-19 (2024)",
        "lblEn": "Legal Zero Tolerance (Art. 173)",
        "lblQu": "Kamachiy Cero Tolerancia (Art. 173)",
        "valEn": "15 Years",
        "valQu": "15 Watakuna",
        "lblAy": "Kamachi Cero Tolerancia (Art. 173)",
        "valAy": "15 Maranaka",
        "lblGn": "Tekome'ẽ Cero Tolerancia (Art. 173)",
        "valGn": "15 Ary",
        "lblArn": "Nor Dungu Cero Tolerancia (Art. 173)",
        "valArn": "15 Tripantu",
        "lblQvi": "Kamachiy Cero Tolerancia (Art. 173)",
        "valQvi": "15 Watakuna",
        "lblGuc": "Akuwa'ipa Cero Tolerancia (Art. 173)",
        "valGuc": "15 Juyamüin",
        "lblWra": "Aribo Cero Tolerancia (Art. 173)",
        "valWra": "15 Wata",
        "lblPmn": "Mai Cero Tolerancia (Art. 173)",
        "valPmn": "15 Wata",
        "lblPbb": "Yu'çeçx Cero Tolerancia (Art. 173)",
        "valPbb": "15 Vxite'",
        "lblEmp": "Bedéa Cero Tolerancia (Art. 173)",
        "valEmp": "15 Warrarã",
        "lblAsh": "Sankenarentsi Cero Tolerancia (Art. 173)",
        "valAsh": "15 Osarentsi",
        "lblAgr": "Chicham Cero Tolerancia (Art. 173)",
        "valAgr": "15 Mijan",
        "lblJiv": "Chicham Cero Tolerancia (Art. 173)",
        "valJiv": "15 Uchin",
        "lblRap": "Ture Cero Tolerancia (Art. 173)",
        "valRap": "15 Matahiti"
      },
      {
        "val": "USD 221.6M",
        "lbl": "Costo Inacción Anual (0.26% PIB)",
        "lblEn": "Annual Cost of Inaction (0.45% GDP)",
        "lblQu": "Sapa Wata Qullqi Chinkachiy (0.45% PBI)",
        "lblAy": "Sapa Mara Qullqi Chhaqawi (0.45% PBI)",
        "lblGn": "Ary Viru Kañy Jeporu (0.45% PBI)",
        "lblArn": "Tripantu Kulliñ Ngelay (0.45% PBI)",
        "lblQvi": "Sapa Wata Kullki Chinkay (0.45% PBI)",
        "lblGuc": "Juyakai Walawaa Chinkay (0.45% PBI)",
        "lblWra": "Wata Aribo Chinkay (0.45% PBI)",
        "lblPmn": "Wata Mai Chinkay (0.45% PBI)",
        "lblPbb": "Vxite' Ku'j Nxusxi (0.45% PBI)",
        "lblEmp": "Warrarã Pharatade Chinkay (0.45% PBI)",
        "lblAsh": "Osarentsi Katsinkari Chinkay (0.45% PBI)",
        "lblAgr": "Mijan Kuik Chinkay (0.45% PBI)",
        "lblJiv": "Uchin Kuik Tsuwamunam (0.45% PBI)",
        "lblRap": "Matahiti Moni Kore (0.45% PBI)"
      },
      {
        "val": "85.64 / 1,000",
        "lbl": "Fecundidad Crítica en Amazonía (Napo)",
        "lblEn": "ROI per 1.00 Sol in ESI & Clinics",
        "lblQu": "Sapa 1.00 Solmanta S/ 7.00 Kutichiy",
        "lblAy": "Sapa 1.00 Solat S/ 7.00 Kutt'awi",
        "lblGn": "1 Sol Jeporúre 7 Sol Kutiy",
        "lblArn": "1 Sol Kulliñmew 7 Sol Wiñotun",
        "lblQvi": "Sapa 1 Solmanta 7 Sol Kutina",
        "lblGuc": "1 Sol Walawaata 7 Sol Awana",
        "lblWra": "1 Sol Aribomew 7 Sol Yakeraja",
        "lblPmn": "1 Sol Maimew 7 Sol Pöke",
        "lblPbb": "1 Sol Ku'jmew 7 Sol Çxhaçxha",
        "lblEmp": "1 Sol Pharatademew 7 Sol Bia",
        "lblAsh": "1 Sol Katsinkarimew 7 Sol Kametsa",
        "lblAgr": "1 Sol Kuikmew 7 Sol Pegker",
        "lblJiv": "1 Sol Kuikmew 7 Sol Penker",
        "lblRap": "1 Sol Monimew 7 Sol Haka Oho"
      },
      {
        "val": "USD 76.9M",
        "lbl": "Gasto Directo en Salud Asistencial",
        "lblEn": "Accredited I-3/I-4 Youth Clinics",
        "lblQu": "Acreditado Hampina Wasikuna I-3 / I-4",
        "lblAy": "Acreditado Qullañ Utanaka I-3 / I-4",
        "lblGn": "Tesãi Renda Acreditada I-3 / I-4",
        "lblArn": "Lawentun Ruka Acreditada I-3 / I-4",
        "lblQvi": "Hampina Wasikuna Acreditada I-3 / I-4",
        "lblGuc": "Ayatawaa Wasikuna I-3 / I-4",
        "lblWra": "Hanoko Acreditada I-3 / I-4",
        "lblPmn": "Yen Acreditada I-3 / I-4",
        "lblPbb": "Yat Acreditada I-3 / I-4",
        "lblEmp": "Dega Acreditada I-3 / I-4",
        "lblAsh": "Pankotsi Acreditada I-3 / I-4",
        "lblAgr": "Jega Acreditada I-3 / I-4",
        "lblJiv": "Jea Acreditada I-3 / I-4",
        "lblRap": "Hare Acreditada I-3 / I-4"
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
    },
    "siteTitleAy": "Suyu Kamachi Qhawawi: Imillanaka Usuriptawi Jark'aqaña Ecuador Suyuna",
    "heroTitleAy": "Jan Lurawina Chhaqawipa: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Kamachita wan Qullqi Churaña Ecuador Suyuna</span>",
    "siteTitleGn": "Tetã Rerekua: Mitãkuña Usuriptawi Jark'a Ecuador-pe",
    "heroTitleGn": "Viru Kañy Jeporu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica ha Tekojoja Ecuador-pe</span>",
    "siteTitleArn": "Ngülamtun Politica: Wechekeche Koñin Kuñiwtun Ecuador Mew",
    "heroTitleArn": "Kulliñ Kuñiwtun: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica ka Küme Mongen Ecuador Mew</span>",
    "heroTitleQvi": "Mana Ruranapa Chinkay: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica wan Alli Kawsay Ecuador Llaktapi</span>",
    "siteTitleGuc": "Apalirawaa Politica: Jintüi Asitnushii Katataaka Ecuador",
    "heroTitleGuc": "Walawaa Choo'u: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica je Walawaa Ecuador</span>",
    "siteTitleWra": "Governo Politica: Iboma Asidaja Ecuador",
    "heroTitleWra": "Aribo Sanuka: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica tura Aribo Ecuador</span>",
    "siteTitlePmn": "Politica Mai: Murekon Pimanse Ecuador",
    "heroTitlePmn": "Mai Murekon: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica tura Mai Ecuador</span>",
    "siteTitlePbb": "Yu'çeçx Politica: Ku'j We'sx Thegnikha's Ecuador",
    "heroTitlePbb": "Ku'j We'sx Nxusxi: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica tura Ku'j Ecuador</span>",
    "siteTitleEmp": "Bedéa Politica: Wẽra Warrade Ecuador",
    "heroTitleEmp": "Pharatade Druade: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica tura Drua Ecuador</span>",
    "siteTitleAsh": "Asháninka Incidencia: Tsimiri Koshitantsi Ecuador",
    "heroTitleAsh": "Katsinkari Eentsite: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica tura Katsinkari Ecuador</span>",
    "siteTitleAgr": "Awajún Incidencia Politica: Datsajum Jark'amu Ecuador",
    "heroTitleAgr": "Kuik Chinkay Jark'amu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica tura Kuik Asenta Ecuador</span>",
    "heroTitleJiv": "Kuik Tsuwamunam: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica tura Kuik Ecuador</span>",
    "siteTitleRap": "Vānaŋa Haka Oho: Pāruru i te Poki 'Āpī mai te Hapu'a i Ecuador",
    "heroTitleRap": "Te Moni o te Pāruru Kore: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>PIPENA Politica 'e Moni Ecuador</span>"
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
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA y Acceso Universal a Métodos LARC en Venezuela</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA & Universal LARC Access in Venezuela</span>",
    "heroTitleQu": "Mana Ruraypa Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA wan LARC Hampi Venezuela Suyupi</span>",
    "heroDesc": "Evidencia técnica para los <strong>Poderes Públicos, MPPS, MinMujer y Gobernaciones</strong> sobre la ejecución del Plan PRETA y la provisión de anticoncepción AIPEO.",
    "heroDescEn": "Technical policy brief for <strong>Public Authorities, Ministry of Health (MPPS), Ministry of Women, and State Governments</strong> on Plan PRETA execution and AIPEO contraception.",
    "heroDescQu": "Poderes Públicos, MPPS, MinMujer wan Gobernaciones nisqapaq qillqa <strong>Plan PRETA ruraymanta</strong> wan AIPEO hampiyninmanta.",
    "metrics": [
      {
        "val": "81.7 / 1,000",
        "lbl": "Tasa Fecundidad 15-19 (Consolidado 2026)",
        "lblEn": "Legal Zero Tolerance (Art. 173)",
        "lblQu": "Kamachiy Cero Tolerancia (Art. 173)",
        "valEn": "15 Years",
        "valQu": "15 Watakuna",
        "lblAy": "Kamachi Cero Tolerancia (Art. 173)",
        "valAy": "15 Maranaka",
        "lblGn": "Tekome'ẽ Cero Tolerancia (Art. 173)",
        "valGn": "15 Ary",
        "lblArn": "Nor Dungu Cero Tolerancia (Art. 173)",
        "valArn": "15 Tripantu",
        "lblQvi": "Kamachiy Cero Tolerancia (Art. 173)",
        "valQvi": "15 Watakuna",
        "lblGuc": "Akuwa'ipa Cero Tolerancia (Art. 173)",
        "valGuc": "15 Juyamüin",
        "lblWra": "Aribo Cero Tolerancia (Art. 173)",
        "valWra": "15 Wata",
        "lblPmn": "Mai Cero Tolerancia (Art. 173)",
        "valPmn": "15 Wata",
        "lblPbb": "Yu'çeçx Cero Tolerancia (Art. 173)",
        "valPbb": "15 Vxite'",
        "lblEmp": "Bedéa Cero Tolerancia (Art. 173)",
        "valEmp": "15 Warrarã",
        "lblAsh": "Sankenarentsi Cero Tolerancia (Art. 173)",
        "valAsh": "15 Osarentsi",
        "lblAgr": "Chicham Cero Tolerancia (Art. 173)",
        "valAgr": "15 Mijan",
        "lblJiv": "Chicham Cero Tolerancia (Art. 173)",
        "valJiv": "15 Uchin",
        "lblRap": "Ture Cero Tolerancia (Art. 173)",
        "valRap": "15 Matahiti"
      },
      {
        "val": "4.81 / 1,000",
        "lbl": "Fecundidad en <15 Años (La más alta)",
        "lblEn": "Annual Cost of Inaction (0.45% GDP)",
        "lblQu": "Sapa Wata Qullqi Chinkachiy (0.45% PBI)",
        "lblAy": "Sapa Mara Qullqi Chhaqawi (0.45% PBI)",
        "lblGn": "Ary Viru Kañy Jeporu (0.45% PBI)",
        "lblArn": "Tripantu Kulliñ Ngelay (0.45% PBI)",
        "lblQvi": "Sapa Wata Kullki Chinkay (0.45% PBI)",
        "lblGuc": "Juyakai Walawaa Chinkay (0.45% PBI)",
        "lblWra": "Wata Aribo Chinkay (0.45% PBI)",
        "lblPmn": "Wata Mai Chinkay (0.45% PBI)",
        "lblPbb": "Vxite' Ku'j Nxusxi (0.45% PBI)",
        "lblEmp": "Warrarã Pharatade Chinkay (0.45% PBI)",
        "lblAsh": "Osarentsi Katsinkari Chinkay (0.45% PBI)",
        "lblAgr": "Mijan Kuik Chinkay (0.45% PBI)",
        "lblJiv": "Uchin Kuik Tsuwamunam (0.45% PBI)",
        "lblRap": "Matahiti Moni Kore (0.45% PBI)"
      },
      {
        "val": "125.4",
        "lbl": "Razón Mortalidad Materna (por 100k NV)",
        "lblEn": "ROI per 1.00 Sol in ESI & Clinics",
        "lblQu": "Sapa 1.00 Solmanta S/ 7.00 Kutichiy",
        "lblAy": "Sapa 1.00 Solat S/ 7.00 Kutt'awi",
        "lblGn": "1 Sol Jeporúre 7 Sol Kutiy",
        "lblArn": "1 Sol Kulliñmew 7 Sol Wiñotun",
        "lblQvi": "Sapa 1 Solmanta 7 Sol Kutina",
        "lblGuc": "1 Sol Walawaata 7 Sol Awana",
        "lblWra": "1 Sol Aribomew 7 Sol Yakeraja",
        "lblPmn": "1 Sol Maimew 7 Sol Pöke",
        "lblPbb": "1 Sol Ku'jmew 7 Sol Çxhaçxha",
        "lblEmp": "1 Sol Pharatademew 7 Sol Bia",
        "lblAsh": "1 Sol Katsinkarimew 7 Sol Kametsa",
        "lblAgr": "1 Sol Kuikmew 7 Sol Pegker",
        "lblJiv": "1 Sol Kuikmew 7 Sol Penker",
        "lblRap": "1 Sol Monimew 7 Sol Haka Oho"
      },
      {
        "val": "112 / 1,000",
        "lbl": "Fecundidad en Áreas Rurales e Indígenas",
        "lblEn": "Accredited I-3/I-4 Youth Clinics",
        "lblQu": "Acreditado Hampina Wasikuna I-3 / I-4",
        "lblAy": "Acreditado Qullañ Utanaka I-3 / I-4",
        "lblGn": "Tesãi Renda Acreditada I-3 / I-4",
        "lblArn": "Lawentun Ruka Acreditada I-3 / I-4",
        "lblQvi": "Hampina Wasikuna Acreditada I-3 / I-4",
        "lblGuc": "Ayatawaa Wasikuna I-3 / I-4",
        "lblWra": "Hanoko Acreditada I-3 / I-4",
        "lblPmn": "Yen Acreditada I-3 / I-4",
        "lblPbb": "Yat Acreditada I-3 / I-4",
        "lblEmp": "Dega Acreditada I-3 / I-4",
        "lblAsh": "Pankotsi Acreditada I-3 / I-4",
        "lblAgr": "Jega Acreditada I-3 / I-4",
        "lblJiv": "Jea Acreditada I-3 / I-4",
        "lblRap": "Hare Acreditada I-3 / I-4"
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
    "heroDescAgr": "Poderes Públicos, MPPS, MinMujer chicham <strong>Plan PRETA je AIPEO</strong> pegker pujustinme.",
    "heroDescJiv": "Poderes Públicos, MPPS, MinMujer chicham <strong>Plan PRETA je AIPEO</strong>.",
    "heroDescRap": "Puka haka tere no te Poderes Públicos, MPPS, MinMujer 'e Gobernaciones mo te <strong>Plan PRETA 'e AIPEO</strong>.",
    "siteTitleGuc": "Apalirawaa Politica: Jintüi Asitnushii Katataaka Venezuela",
    "siteTitleWra": "Governo Politica: Iboma Asidaja Venezuela",
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
    },
    "siteTitleAy": "Suyu Kamachi Qhawawi: Imillanaka Usuriptawi Jark'aqaña Venezuela Suyuna",
    "heroTitleAy": "Jan Lurawina Chhaqawipa: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA wan Qullqi Churaña Venezuela Suyuna</span>",
    "siteTitleGn": "Tetã Rerekua: Mitãkuña Usuriptawi Jark'a Venezuela-pe",
    "heroTitleGn": "Viru Kañy Jeporu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA ha Tekojoja Venezuela-pe</span>",
    "siteTitleArn": "Ngülamtun Politica: Wechekeche Koñin Kuñiwtun Venezuela Mew",
    "heroTitleArn": "Kulliñ Kuñiwtun: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA ka Küme Mongen Venezuela Mew</span>",
    "siteTitleQvi": "Llaktapa Politica Rikuna: Wawa Chichuy Hark'ay Venezuela Llaktapi",
    "heroTitleQvi": "Mana Ruranapa Chinkay: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA wan Alli Kawsay Venezuela Llaktapi</span>",
    "heroTitleGuc": "Walawaa Choo'u: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA je Walawaa Venezuela</span>",
    "heroTitleWra": "Aribo Sanuka: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA tura Aribo Venezuela</span>",
    "heroTitlePmn": "Mai Murekon: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA tura Mai Venezuela</span>",
    "siteTitlePbb": "Yu'çeçx Politica: Ku'j We'sx Thegnikha's Venezuela",
    "heroTitlePbb": "Ku'j We'sx Nxusxi: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA tura Ku'j Venezuela</span>",
    "siteTitleEmp": "Bedéa Politica: Wẽra Warrade Venezuela",
    "heroTitleEmp": "Pharatade Druade: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA tura Drua Venezuela</span>",
    "siteTitleAsh": "Asháninka Incidencia: Tsimiri Koshitantsi Venezuela",
    "heroTitleAsh": "Katsinkari Eentsite: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA tura Katsinkari Venezuela</span>",
    "siteTitleAgr": "Awajún Incidencia Politica: Datsajum Jark'amu Venezuela",
    "heroTitleAgr": "Kuik Chinkay Jark'amu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA tura Kuik Asenta Venezuela</span>",
    "siteTitleJiv": "Politica Chicham: Natsa Tsuwamunam Venezuela",
    "heroTitleJiv": "Kuik Tsuwamunam: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA tura Kuik Venezuela</span>",
    "siteTitleRap": "Vānaŋa Haka Oho: Pāruru i te Poki 'Āpī mai te Hapu'a i Venezuela",
    "heroTitleRap": "Te Moni o te Pāruru Kore: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan PRETA 'e Moni Venezuela</span>"
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
    "heroTitle": "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Países</span>",
    "heroTitleEn": "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Andean Plan PLANEA 2025-2030 • 6 Countries</span>",
    "heroTitleQu": "Mana Ruraypa Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • Suqta Suyukuna</span>",
    "heroDesc": "Marco comparativo multisectorial de <strong>Bolivia, Chile, Colombia, Ecuador, Perú y Venezuela</strong> ante el Organismo Andino de Salud (ORAS-CONHU), UNFPA y OPS/OMS.",
    "heroDescEn": "Multisectoral comparative framework for <strong>Bolivia, Chile, Colombia, Ecuador, Peru, and Venezuela</strong> under ORAS-CONHU, UNFPA, and PAHO/WHO.",
    "heroDescQu": "Suqta Andes suyukunapaq comparativo qillqa <strong>Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela</strong> ORAS-CONHU, UNFPA wan OPS nisqawan.",
    "metrics": [
      {
        "val": "6 Países",
        "lbl": "Compromiso Subregional Andino",
        "lblEn": "Legal Zero Tolerance (Art. 173)",
        "lblQu": "Kamachiy Cero Tolerancia (Art. 173)",
        "valEn": "15 Years",
        "valQu": "15 Watakuna",
        "lblAy": "Kamachi Cero Tolerancia (Art. 173)",
        "valAy": "15 Maranaka",
        "lblGn": "Tekome'ẽ Cero Tolerancia (Art. 173)",
        "valGn": "15 Ary",
        "lblArn": "Nor Dungu Cero Tolerancia (Art. 173)",
        "valArn": "15 Tripantu",
        "lblQvi": "Kamachiy Cero Tolerancia (Art. 173)",
        "valQvi": "15 Watakuna",
        "lblGuc": "Akuwa'ipa Cero Tolerancia (Art. 173)",
        "valGuc": "15 Juyamüin",
        "lblWra": "Aribo Cero Tolerancia (Art. 173)",
        "valWra": "15 Wata",
        "lblPmn": "Mai Cero Tolerancia (Art. 173)",
        "valPmn": "15 Wata",
        "lblPbb": "Yu'çeçx Cero Tolerancia (Art. 173)",
        "valPbb": "15 Vxite'",
        "lblEmp": "Bedéa Cero Tolerancia (Art. 173)",
        "valEmp": "15 Warrarã",
        "lblAsh": "Sankenarentsi Cero Tolerancia (Art. 173)",
        "valAsh": "15 Osarentsi",
        "lblAgr": "Chicham Cero Tolerancia (Art. 173)",
        "valAgr": "15 Mijan",
        "lblJiv": "Chicham Cero Tolerancia (Art. 173)",
        "valJiv": "15 Uchin",
        "lblRap": "Ture Cero Tolerancia (Art. 173)",
        "valRap": "15 Matahiti"
      },
      {
        "val": "USD 13.5B",
        "lbl": "Pérdida Agregada LAC (Estudios MILENA)",
        "lblEn": "Annual Cost of Inaction (0.45% GDP)",
        "lblQu": "Sapa Wata Qullqi Chinkachiy (0.45% PBI)",
        "lblAy": "Sapa Mara Qullqi Chhaqawi (0.45% PBI)",
        "lblGn": "Ary Viru Kañy Jeporu (0.45% PBI)",
        "lblArn": "Tripantu Kulliñ Ngelay (0.45% PBI)",
        "lblQvi": "Sapa Wata Kullki Chinkay (0.45% PBI)",
        "lblGuc": "Juyakai Walawaa Chinkay (0.45% PBI)",
        "lblWra": "Wata Aribo Chinkay (0.45% PBI)",
        "lblPmn": "Wata Mai Chinkay (0.45% PBI)",
        "lblPbb": "Vxite' Ku'j Nxusxi (0.45% PBI)",
        "lblEmp": "Warrarã Pharatade Chinkay (0.45% PBI)",
        "lblAsh": "Osarentsi Katsinkari Chinkay (0.45% PBI)",
        "lblAgr": "Mijan Kuik Chinkay (0.45% PBI)",
        "lblJiv": "Uchin Kuik Tsuwamunam (0.45% PBI)",
        "lblRap": "Matahiti Moni Kore (0.45% PBI)"
      },
      {
        "val": "Cero",
        "lbl": "Meta Fecundidad en <15 Años al 2030",
        "lblEn": "ROI per 1.00 Sol in ESI & Clinics",
        "lblQu": "Sapa 1.00 Solmanta S/ 7.00 Kutichiy",
        "lblAy": "Sapa 1.00 Solat S/ 7.00 Kutt'awi",
        "lblGn": "1 Sol Jeporúre 7 Sol Kutiy",
        "lblArn": "1 Sol Kulliñmew 7 Sol Wiñotun",
        "lblQvi": "Sapa 1 Solmanta 7 Sol Kutina",
        "lblGuc": "1 Sol Walawaata 7 Sol Awana",
        "lblWra": "1 Sol Aribomew 7 Sol Yakeraja",
        "lblPmn": "1 Sol Maimew 7 Sol Pöke",
        "lblPbb": "1 Sol Ku'jmew 7 Sol Çxhaçxha",
        "lblEmp": "1 Sol Pharatademew 7 Sol Bia",
        "lblAsh": "1 Sol Katsinkarimew 7 Sol Kametsa",
        "lblAgr": "1 Sol Kuikmew 7 Sol Pegker",
        "lblJiv": "1 Sol Kuikmew 7 Sol Penker",
        "lblRap": "1 Sol Monimew 7 Sol Haka Oho"
      },
      {
        "val": "USD 7:1",
        "lbl": "Retorno Social de Inversión Promedio",
        "lblEn": "Accredited I-3/I-4 Youth Clinics",
        "lblQu": "Acreditado Hampina Wasikuna I-3 / I-4",
        "lblAy": "Acreditado Qullañ Utanaka I-3 / I-4",
        "lblGn": "Tesãi Renda Acreditada I-3 / I-4",
        "lblArn": "Lawentun Ruka Acreditada I-3 / I-4",
        "lblQvi": "Hampina Wasikuna Acreditada I-3 / I-4",
        "lblGuc": "Ayatawaa Wasikuna I-3 / I-4",
        "lblWra": "Hanoko Acreditada I-3 / I-4",
        "lblPmn": "Yen Acreditada I-3 / I-4",
        "lblPbb": "Yat Acreditada I-3 / I-4",
        "lblEmp": "Dega Acreditada I-3 / I-4",
        "lblAsh": "Pankotsi Acreditada I-3 / I-4",
        "lblAgr": "Jega Acreditada I-3 / I-4",
        "lblJiv": "Jea Acreditada I-3 / I-4",
        "lblRap": "Hare Acreditada I-3 / I-4"
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
    },
    "heroTitleAy": "Jan Lurawina Chhaqawipa: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • Suxta Suyunaka</span>",
    "siteTitleGn": "Tetã Rerekua: Plan Andino PLANEA 2025-2030",
    "heroTitleGn": "Viru Kañy Jeporu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Tetãnguéra</span>",
    "siteTitleArn": "Ngülamtun Politica: Plan Andino PLANEA 2025-2030",
    "heroTitleArn": "Kulliñ Kuñiwtun: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Mapu</span>",
    "siteTitleQvi": "Llaktapa Politica Rikuna: Plan Andino PLANEA 2025-2030",
    "heroTitleQvi": "Mana Ruranapa Chinkay: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Llaktakuna</span>",
    "siteTitleGuc": "Apalirawaa Politica: Plan Andino PLANEA 2025-2030",
    "heroTitleGuc": "Walawaa Choo'u: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Mmapa'a</span>",
    "siteTitleWra": "Governo Politica: Plan Andino PLANEA 2025-2030",
    "heroTitleWra": "Aribo Sanuka: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Aribo</span>",
    "siteTitlePmn": "Politica Mai: Plan Andino PLANEA 2025-2030",
    "heroTitlePmn": "Mai Murekon: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Mai</span>",
    "siteTitlePbb": "Yu'çeçx Politica: Plan Andino PLANEA 2025-2030",
    "heroTitlePbb": "Ku'j We'sx Nxusxi: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Yu'çeçx</span>",
    "siteTitleEmp": "Bedéa Politica: Plan Andino PLANEA 2025-2030",
    "heroTitleEmp": "Pharatade Druade: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Bedéa</span>",
    "siteTitleAsh": "Asháninka Incidencia: Plan Andino PLANEA 2025-2030",
    "heroTitleAsh": "Katsinkari Eentsite: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Pankotsi</span>",
    "siteTitleAgr": "Awajún Incidencia Politica: Plan Andino PLANEA 2025-2030",
    "heroTitleAgr": "Kuik Chinkay Jark'amu: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Nugke</span>",
    "siteTitleJiv": "Politica Chicham: Plan Andino PLANEA 2025-2030",
    "heroTitleJiv": "Kuik Tsuwamunam: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Chicham</span>",
    "siteTitleRap": "Vānaŋa Haka Oho: Plan Andino PLANEA 2025-2030",
    "heroTitleRap": "Te Moni o te Pāruru Kore: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Plan Andino PLANEA 2025-2030 • 6 Kāiŋa</span>"
  }
};;;

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
    "countryBarLbl": "Territorio Andino:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Modo Claro",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Modo Oscuro",
    "optgroupOther": "── Otras Lenguas Andinas ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino de Prevención y Reducción del Embarazo en Adolescentes",
    "planeaCardDesc": "Matriz multisectorial de metas andinas aprobada por los Ministerios de Salud de <strong>Bolivia, Chile, Colombia, Ecuador, Perú y Venezuela</strong> con el mandato de <strong>Cero Embarazo en menores de 15 años</strong>.",
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
    "s1Subtitle": "Tres realidades críticas sustentadas en los informes oficiales del Plan Andino PLANEA 2025-2030 y el MINSA.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Por qué se afirma esto? Ver Evidencia Profunda",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Por qué se afirma esto? Ver Evidencia Profunda",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Por qué se afirma esto? Ver Evidencia Profunda",
    "s2Title": "2. Impacto Económico y Retorno de Inversión (ROI)",
    "s2Subtitle": "Evaluación del costo fiscal de la inacción frente a los beneficios de la inversión preventiva.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> IMPACTO FISCAL NEGATIVO",
    "roi1Btn": "<i class='fa-solid fa-chart-pie mr-1' aria-hidden='true'></i> Ver Desglose Metodológico MILENA",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> EFICIENCIA DEL GASTO PÚBLICO",
    "roi2Btn": "<i class='fa-solid fa-coins mr-1' aria-hidden='true'></i> Ver Cálculos de Rentabilidad Social",
    "scTitle": "3. Disparidades Territoriales y Capacidad Instalada",
    "scSubtitle": "Brechas críticas entre regiones priorizadas y cobertura de servicios especializados.",
    "chart1Title": "Fecundidad Adolescente por Regiones Críticas",
    "chart1Sub": "Tasa por 1,000 adolescentes (15-19 años) frente a la meta nacional PLANEA 2030",
    "chart2Title": "Brecha de Capacidad Resolutiva en Primer Nivel",
    "chart2Sub": "Establecimientos de Salud I-3 e I-4 con consultorios diferenciados y métodos LARC",
    "g2Lbl1": "Acreditados",
    "g2Lbl2": "Brecha Pendiente",
    "chart2Note": "*Datos consolidados de la Dirección de Salud Sexual y Reproductiva.",
    "sfcTitle": "4. Fact-Checking: Mitos vs. Evidencia Científica",
    "sfcSubtitle": "Respuestas rigurosas basadas en evidencia ante los argumentos más comunes en el debate presupuestal.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> MITO COMÚN DE DEBATE",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> EVIDENCIA CIENTÍFICA (PLANEA / OMS)",
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
    "s3Title": "5. Respaldo Jurídico y Normativo",
    "s3Subtitle": "Marco legal nacional e internacional que obliga al Estado a garantizar presupuesto para la prevención.",
    "s4Title": "6. Explorador Territorial y Brechas",
    "s4Subtitle": "Seleccione un territorio para evaluar su nivel de riesgo y costo de inacción.",
    "expLblRegion": "Territorio / Departamento:",
    "expFertilityLbl": "Fecundidad Adolescente:",
    "expCoverageLbl": "Cobertura de Postas:",
    "expInactionLbl": "Costo Anual de Inacción:",
    "expPriorityLbl": "Prioridad Presupuestal:",
    "expDisclaimer": "Fuente: Indicadores oficiales del Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Cobertura",
    "yearUnit": "/ año",
    "s5Title": "7. Manifiesto Legislativo de 5 Puntos",
    "s5Subtitle": "Demandas normativas concretas para la Comisión de Presupuesto del Congreso y Gobiernos Regionales.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Acción Legislativa Inmediata",
    "s8Title": "8. Fuentes Oficiales y Literatura de Respaldo",
    "s8Subtitle": "Consulte los documentos institucionales originales.",
    "fTitle": "Plataforma de Incidencia Política • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA 2025-2030.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Licencia de Uso Abierto Creative Commons BY-NC 4.0 para incidencia pública.",
    "fSafeguard": "Datos validados por comités técnicos del ORAS-CONHU y MINSA.",
    "fLawFramework": "Conforme a la Ley de Transparencia y Acceso a la Información.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Cerrar Ventana",
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
    "sciModalTitle": "Compendio de Evidencia Científica y Marco Legal",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Evidencia Sanitaria y Obstétrica (MINSA / OPS / OMS)",
    "sciSec1Desc": "Estudios epidemiológicos demuestran que las niñas menores de 15 años que gestan presentan <strong>5 veces mayor riesgo de muerte materna</strong> y 3 veces mayor riesgo de partos prematuros con bajo peso al nacer. Toda gestación en este grupo etario deriva de abuso sexual de acuerdo al Código Penal.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Evidencia de Impacto Fiscal y Metodología MILENA (UNFPA)",
    "sciSec2Desc": "La inacción estatal le cuesta a las economías andinas entre el 0.25% y el 1.0% de su PBI anual. El 40% de esta pérdida responde al menor nivel educativo alcanzado por las madres adolescentes, reduciendo su inserción en el mercado formal e impactando la recaudación tributaria.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Retorno Social de Inversión (ROI 7:1)",
    "sciSec3Desc": "Por cada unidad monetaria presupuestada en Educación Integral de la Sexualidad (EIS) y en Servicios Amigables del primer nivel, el Estado ahorra 7 unidades en atención médica de urgencia y subsidios.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Cumplimiento de Leyes de Protección a la Niñez",
    "sciSec4Desc": "El Estado tiene la obligación constitucional de asignar partidas descentralizadas para Centros de Emergencia y postas de primer nivel para garantizar la protección inmediata de víctimas de violencias basadas en género.",
    "sciCloseBtn": "Cerrar Compendio Científico",
    "sumModalTitle": "Ficha Técnica Ejecutiva para Decisores",
    "sumHeaderBadge": "RESUMEN EJECUTIVO PARA EL CONGRESO Y EL MEF",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "Cero gestaciones en niñas menores de 15 años al 2030 (Plan Andino PLANEA).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7.00 ahorrados por cada unidad invertida en prevención y servicios amigables.",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "Pérdida económica de hasta el 1.0% del PIB nacional anualmente.",
    "sumGrid4Lbl": "Respaldo Legal:",
    "sumGrid4Val": "Código Penal, Código de la Niñez y Tratados Internacionales de Derechos Humanos.",
    "sumDemandsTitle": "Demandas Clave de Política Pública:",
    "sumCloseBtn": "Entendido / Cerrar Ficha",
    "countryModalTitle": "Seleccione un País de la Región Andina",
    "countryModalDesc": "Explore los datos e indicadores del Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Ver Versión",
    "countryCloseBtn": "Cerrar Selector",
    "planeaModalTitle": "Marco Matriz PLANEA 2025-2030 (6 Países)",
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
    "planeaCloseBtn": "Cerrar Marco PLANEA",
    "regionalModalTitle": "Marco Regional: Evidencia Actuarial y Guías Globales",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. Evidencia Actuarial Consolidada MILENA (15 Países)",
    "regionalSec1Desc": "El estudio del UNFPA en América Latina y el Caribe cuantifica una pérdida económica agregada de <strong>USD 13,538 Millones</strong> anuales (1% del PIB regional). El 88.2% recae directamente sobre los ingresos y educación de las mujeres.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Guía Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Aceleración de la Acción Mundial en favor de la Salud de los Adolescentes: intervenciones clínicas, consejería confidencial sin requerir acompañamiento adulto, y métodos anticonceptivos reversibles de larga duración (LARC).",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta de Evaluación Rápida en Violencia Sexual (OPS)",
    "regionalSec3Desc": "Protocolos de profilaxis post-exposición (PEP), anticoncepción de emergencia (AOE), y soporte psicosocial inmediato en el primer nivel de atención para niñas y adolescentes sobrevivientes.",
    "regionalCloseBtn": "Cerrar Marco Regional",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "Español [EXTREMO]",
    "expHighRisk": "Español [ALTO]",
    "expModerateRisk": "Español [MEDIO]",
    "expCriticalGap": "Español [BRECHA CRÍTICA]",
    "expAccreditedUnits": "Postas Acreditadas",
    "expPerYear": "M/año",
    "expPerThousand": "por 1,000",
    "expRegionalGdp": "PBI Regional",
    "riskExtreme": "Riesgo Extremo",
    "riskVeryHigh": "Riesgo Muy Alto",
    "riskHigh": "Riesgo Alto",
    "riskModerate": "Riesgo Medio",
    "gapCritical": "Brecha Crítica",
    "gapSevere": "Brecha Severa",
    "gapHigh": "Brecha Alta",
    "gapModerate": "Brecha Media"
  },
  "en": {
    "langName": "English",
    "skipLink": "Skip to main content",
    "endorsedBy": "Endorsed by:",
    "countryBarLbl": "Andean Territory:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Light Mode",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Dark Mode",
    "optgroupOther": "── Other Andean Languages ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. PLANEA 2025-2030 MATRIX FRAMEWORK",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andean Plan for Adolescent Pregnancy Prevention & Reduction",
    "planeaCardDesc": "Multisectoral matrix of Andean targets endorsed by Ministries of Health of <strong>Bolivia, Chile, Colombia, Ecuador, Peru, and Venezuela</strong> mandating <strong>Zero Pregnancy under 15</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> View PLANEA Matrix Framework Targets (6 Countries)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL FRAMEWORK (ORAS, UNFPA, PAHO, UNICEF)",
    "regionalTag": "INTERNATIONAL COOPERATION",
    "regionalCardTitle": "Actuarial Evidence & Global AA-HA! Standards",
    "regionalCardDesc": "Consolidated 15 UNFPA MILENA studies (aggregate loss of <strong>USD 13,538 Million</strong> in Latin America), Global Accelerated Action (AA-HA!) Guide, and clinical support tools for sexual violence victims.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> View Regional Evidence & Standards",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> View Territorial Indicators",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> View Legislative Manifesto",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Executive Policy Brief",
    "heroCardTitle": "Andean Policy Advocacy",
    "heroCardBadge": "CLICK HERE!",
    "heroCardDesc": "Click here to open the Scientific Evidence Compendium for Congress and Ministry of Economy",
    "s1Title": "1. Technical Diagnosis & Scientific Evidence",
    "s1Subtitle": "Verified evidence under Andean Plan PLANEA 2025-2030.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> Why is this stated? View In-Depth Evidence",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> Why is this stated? View In-Depth Evidence",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> Why is this stated? View In-Depth Evidence",
    "s2Title": "2. Economic Impact & Return on Investment (ROI)",
    "s2Subtitle": "Verified evidence under Andean Plan PLANEA 2025-2030.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> NEGATIVE FISCAL IMPACT",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> View GDP Loss Breakdown",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> PUBLIC SPENDING EFFICIENCY",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> View Actuarial Savings Breakdown",
    "scTitle": "3. Territorial Disparities & Installed Capacity",
    "scSubtitle": "Verified evidence under Andean Plan PLANEA 2025-2030.",
    "chart1Title": "Adolescent Fertility by Critical Regions",
    "chart1Sub": "RATE PER 1,000 ADOLESCENTS (15-19 YEARS) VS. PLANEA 2030 TARGET",
    "chart2Title": "Primary Healthcare Capacity Gap",
    "chart2Sub": "HEALTH CENTERS I-3 AND I-4 WITH YOUTH CLINICS AND LARC METHODS",
    "g2Lbl1": "ACCREDITED",
    "g2Lbl2": "PENDING GAP",
    "chart2Note": "*Consolidated data from the Directorate of Sexual and Reproductive Health.",
    "sfcTitle": "4. Fact-Checking: Myths vs. Scientific Evidence",
    "sfcSubtitle": "Verified evidence under Andean Plan PLANEA 2025-2030.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> COMMON DEBATE MYTH",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> SCIENTIFIC EVIDENCE (PLANEA / WHO)",
    "fc1MythTitle": "\"Preventive education in schools encourages earlier sexual debut.\"",
    "fc1MythDesc": "Common misconception used to oppose reproductive health counseling and sexuality education in schools.",
    "fc1EvTitle": "Demonstrated Evidence:",
    "fc1EvDesc": "Scientific studies show timely counseling and Comprehensive Sexuality Education (CSE) delay sexual debut by up to 1.5 years and reduce STIs and unintended pregnancies.",
    "fc2MythTitle": "\"Budgeting for adolescent health is spending with no return.\"",
    "fc2MythDesc": "Frequent claim in budget committees that view prevention as a sunken financial loss.",
    "fc2EvTitle": "Demonstrated Evidence:",
    "fc2EvDesc": "UNFPA MILENA actuarial methodologies confirm a Return on Investment (ROI) of 7:1 for every monetary unit invested in prevention.",
    "fc3MythTitle": "\"Pregnancy in girls under 15 is only a private or family issue.\"",
    "fc3MythDesc": "Stance that invisibilizes child abuse and treats child pregnancy as a natural biological occurrence.",
    "fc3EvTitle": "Demonstrated Evidence:",
    "fc3EvDesc": "Andean criminal legal frameworks establish absolute statutory presumption of sexual violence. Every pregnancy under 15 is legally rape.",
    "s3Title": "5. Legal Framework & State Obligations",
    "s3Subtitle": "Verified evidence under Andean Plan PLANEA 2025-2030.",
    "s4Title": "6. Territorial Explorer & Subnational Gaps",
    "s4Subtitle": "Verified evidence under Andean Plan PLANEA 2025-2030.",
    "expLblRegion": "Territory / Department:",
    "expFertilityLbl": "Adolescent Fertility:",
    "expCoverageLbl": "Youth Clinic Coverage:",
    "expInactionLbl": "Annual Cost of Inaction:",
    "expPriorityLbl": "Budget Priority:",
    "expDisclaimer": "Source: Official indicators from Andean Plan PLANEA 2025-2030.",
    "coverageUnit": "Coverage",
    "yearUnit": "/ year",
    "s5Title": "7. Legislative Manifesto: 5 Key Demands",
    "s5Subtitle": "Verified evidence under Andean Plan PLANEA 2025-2030.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Immediate Legislative Action",
    "s8Title": "8. Official Sources & Literature",
    "s8Subtitle": "Verified evidence under Andean Plan PLANEA 2025-2030.",
    "fTitle": "Policy Advocacy Platform • PLANEA 2025-2030",
    "fText": "Technical tool developed under the Regional Creative Hackathon PLANEA 2025-2030.",
    "fCol2Title": "Accreditation & License",
    "fLic": "Open Use License Creative Commons BY-NC 4.0 for public policy advocacy.",
    "fSafeguard": "Data validated by technical committees of ORAS-CONHU and Ministries of Health.",
    "fLawFramework": "In compliance with Transparency and Access to Public Information Laws.",
    "fCol3Title": "Quick Navigation",
    "fCopyRights": "© 2026 Regional Andean Plan Platform (PLANEA 2025-2030). Policy Advocacy Document.",
    "modalCloseText": "Close Window",
    "deepModalTitlePrefix": "Data Brain Evidence Support • ",
    "legDemandLabel": "Legislative Demand",
    "deepSecEvidenceTitle": "Evidence Framework & Statistical Sources",
    "deepSecGovTitle": "Official Backing & Technical Regulations",
    "deepSecGovDesc": "Aligned with Andean Plan standards (PLANEA 2025-2030), binding REMSAA agreements, and comprehensive health directives.",
    "deepSecEconTitle": "Economic & Fiscal Analysis (UNFPA / Ministry of Economy)",
    "deepSecRoiTitle": "Social ROI & Cost of Inaction",
    "deepSecRoiDesc": "Actuarial evidence demonstrates that every monetary unit budgeted for prevention generates 7:1 social savings in public emergency care.",
    "deepSecDemandTitle": "Policy Advocacy Demand:",
    "deepSecRoadmapTitle": "Parliamentary & Ministerial Action Roadmap:",
    "deepSecRoadmapDesc": "Requires explicit budget earmarking in Public Budget Law and intersectoral coordination with territorial governments.",
    "sciModalTitle": "Compendium of Scientific Evidence & Legal Framework",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Clinical & Obstetric Evidence (WHO / PAHO)",
    "sciSec1Desc": "Epidemiological studies confirm that girls under 15 who give birth face a <strong>5 times higher risk of maternal death</strong> and 3 times higher risk of preterm low-birth-weight deliveries. All pregnancies in this group legally derive from sexual abuse.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Fiscal Impact & MILENA Methodology (UNFPA)",
    "sciSec2Desc": "State inaction costs Andean economies 0.25% to 1.0% of GDP annually. 40% of this loss stems from reduced schooling among teen mothers, hindering formal labor entry and reducing tax revenues.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Social Return on Investment (ROI 7:1)",
    "sciSec3Desc": "For every currency unit invested in Comprehensive Sexuality Education and friendly primary clinics, the state saves 7 units in emergency medical care and public subsidies.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Compliance with Child Protection Laws",
    "sciSec4Desc": "Constitutional obligation to allocate decentralized budget lines for Emergency Centers and primary clinics guaranteeing immediate protection for gender violence survivors.",
    "sciCloseBtn": "Close Scientific Compendium",
    "sumModalTitle": "Executive Policy Brief for Decision-Makers",
    "sumHeaderBadge": "EXECUTIVE SUMMARY FOR CONGRESS AND MINISTRIES",
    "sumGrid1Lbl": "2030 Target:",
    "sumGrid1Val": "Zero pregnancies in girls under 15 by 2030 (Andean Plan PLANEA).",
    "sumGrid2Lbl": "Social ROI:",
    "sumGrid2Val": "7.00 saved for every monetary unit invested in prevention and youth clinics.",
    "sumGrid3Lbl": "Cost of Inaction:",
    "sumGrid3Val": "Economic loss of up to 1.0% of national GDP annually.",
    "sumGrid4Lbl": "Legal Backing:",
    "sumGrid4Val": "Criminal Code, Child Protection Statutes, and International Human Rights Treaties.",
    "sumDemandsTitle": "Key Public Policy Demands:",
    "sumCloseBtn": "Acknowledge / Close Brief",
    "countryModalTitle": "Select an Andean Country",
    "countryModalDesc": "Explore data and indicators from the Andean Plan PLANEA 2025-2030",
    "cmFertPrefix": "Fertility: ",
    "cmBtnText": "View Version",
    "countryCloseBtn": "Close Selector",
    "planeaModalTitle": "PLANEA 2025-2030 Matrix Framework (6 Countries)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Strategic Subregional Target for 2030",
    "planeaSec1Desc": "Accelerated reduction of Adolescent Fertility Rate (ASFR) in 6 member countries and <strong>absolute target of Zero Pregnancy in girls under 15 by 2030</strong> under Zero Tolerance for Child Sexual Abuse.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA Resolution XLI 569",
    "planeaSec2Desc": "Binding ministerial agreement by Ministries of Health of Bolivia, Chile, Colombia, Ecuador, Peru, and Venezuela for protected budget lines and bi-annual target monitoring.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Seven Priority Strategic Lines",
    "planeaLp": [
      "<strong>LP1:</strong> Intersectoral governance in health, education, and child protection.",
      "<strong>LP2:</strong> Comprehensive Sexuality Education (CSE) adapted to indigenous languages.",
      "<strong>LP3:</strong> Youth-friendly, confidential, and specialized healthcare services.",
      "<strong>LP4:</strong> Effective prevention and prosecution of gender-based and sexual violence.",
      "<strong>LP5:</strong> Youth leadership and active civic engagement across the Andes.",
      "<strong>LP6:</strong> Knowledge management, open data, and vital statistics systems.",
      "<strong>LP7:</strong> Fiscal sustainability and priority budget earmarking (Rating 5/5)."
    ],
    "planeaCloseBtn": "Close PLANEA Framework",
    "regionalModalTitle": "Regional Framework: Actuarial Evidence & Global Guidelines",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. Consolidated MILENA Actuarial Evidence (15 Countries)",
    "regionalSec1Desc": "UNFPA Latin America study quantifies an aggregate economic loss of <strong>USD 13,538 Million</strong> annually (1% of regional GDP). 88.2% falls directly on women's income and educational attainment.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Global AA-HA! Guidance (PAHO / WHO)",
    "regionalSec2Desc": "Accelerated Action for the Health of Adolescents: clinical interventions, confidential counseling without mandatory adult accompaniment, and Long-Acting Reversible Contraception (LARC).",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Rapid Assessment Tool for Sexual Violence (PAHO)",
    "regionalSec3Desc": "Post-Exposure Prophylaxis (PEP) protocols, Emergency Contraception (EC), and immediate psychosocial support in primary healthcare centers for child survivors.",
    "regionalCloseBtn": "Close Regional Framework",
    "siteTitle": "Policy Advocacy Platform: Child Pregnancy & Violence Prevention",
    "expExtremeRisk": "EXTREME RISK",
    "expHighRisk": "HIGH RISK",
    "expModerateRisk": "MODERATE RISK",
    "expCriticalGap": "CRITICAL GAP",
    "expAccreditedUnits": "Accredited Clinics",
    "expPerYear": "M/year",
    "expPerThousand": "per 1,000",
    "expRegionalGdp": "Regional GDP",
    "riskExtreme": "Extreme Risk",
    "riskVeryHigh": "Very High Risk",
    "riskHigh": "High Risk",
    "riskModerate": "Moderate Risk",
    "gapCritical": "Critical Gap",
    "gapSevere": "Severe Gap",
    "gapHigh": "High Gap",
    "gapModerate": "Moderate Gap"
  },
  "qu": {
    "langName": "Runasimi",
    "skipLink": "Hatun kawsayman riy",
    "endorsedBy": "Yanapaqkuna:",
    "countryBarLbl": "Andes Suyu:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> K'anchaq Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Laqha Modo",
    "optgroupOther": "── Huk Andes Suyukunapa Siminkuna ──",
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
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Suyu Yachaykunata Qhaway",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Suyu Kamachiy Qillqata Qhaway",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Qhaway",
    "heroCardTitle": "Andes Suyu Kamachiy",
    "heroCardBadge": "KAYPI ÑIT'IY!",
    "heroCardDesc": "Kaypi ñit'iy Congreso wan MEFpaq Yachaykuna Compendiota kichanapaq",
    "s1Title": "1. Técnico Qhaway wan Yachaykuna",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 cheqaq yachaykuna.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kayta rimakun? Hatun Yachayta Qhaway",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kayta rimakun? Hatun Yachayta Qhaway",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutaq kayta rimakun? Hatun Yachayta Qhaway",
    "s2Title": "2. Qullqi Chinkachiy wan Kutiy (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 cheqaq yachaykuna.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> MANA ALLIN QULLQI CHINKAY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chinkachiyta Qhaway",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> ALLIN GASTO EFICIENCIA",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Qullqi Waqaychayta Qhaway",
    "scTitle": "3. Suyu Chikan Kaykuna wan Hampina Wasikuna",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 cheqaq yachaykuna.",
    "chart1Title": "3. Suyu Chikan Kaykuna wan Hampina Wasikuna • Runasimi",
    "chart1Sub": "PLANEA 2025-2030 • Runasimi",
    "chart2Title": "3. Suyu Chikan Kaykuna wan Hampina Wasikuna • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Runasimi",
    "g2Lbl1": "Runasimi [OK]",
    "g2Lbl2": "Runasimi [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Runasimi",
    "sfcTitle": "4. Cheqaq Yachay: Yanqa Rimaykuna vs. Yachay",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 cheqaq yachaykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Yanqa Rimaykuna vs. Yachay (Runasimi)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Técnico Qhaway wan Yachaykuna (PLANEA)",
    "fc1MythTitle": "\"Yachay wasipi yachachiyqa warmakunata ñawpachinmi.\"",
    "fc1MythDesc": "Yanqa rimay EIS yachachiyta hark'anapaq.",
    "fc1EvTitle": "Cheqaq Yachay:",
    "fc1EvDesc": "EIS yachachiyqa 1.5 watata unaykachin wan mana munasqa chichuykunata pisiyachin.",
    "fc2MythTitle": "\"Waynakunapaq qullqi churayqa chinkasqa qullqim.\"",
    "fc2MythDesc": "Qullqi rakikunapi yanqa rimaykuna.",
    "fc2EvTitle": "Cheqaq Yachay:",
    "fc2EvDesc": "MILENA yachaywan 1 qullqimanta 7 qullqi kutimun (ROI 7:1).",
    "fc3MythTitle": "\"15 watamanta urapi wiksanchakuyqa ayllullapaq asuntom.\"",
    "fc3MythDesc": "Maqanakuyta wan abusota pakanapaq yanqa rimay.",
    "fc3EvTitle": "Cheqaq Yachay:",
    "fc3EvDesc": "15 watamanta urapi tukuy chichuyqa Código Penalman hina violacionmi.",
    "s3Title": "5. Kamachiykuna wan Suyu Mañakuykuna",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 cheqaq yachaykuna.",
    "s4Title": "6. Suyu Qhawaq wan Chikan Kaykuna",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 cheqaq yachaykuna.",
    "expLblRegion": "Suyu / Departamento:",
    "expFertilityLbl": "Sipaskunapa Fecundidadnin:",
    "expCoverageLbl": "Hampina Wasikunapa Coberturan:",
    "expInactionLbl": "Sapa Wata Mana Ruraypa Coston:",
    "expPriorityLbl": "Suyu Qullqi Churay:",
    "expDisclaimer": "Pukyu: Plan Andino PLANEA 2025-2030 oficial indicadorkuna.",
    "coverageUnit": "Tukuykuna",
    "yearUnit": "/ wata",
    "s5Title": "7. Suyu Kamachiypaq 5 Hatun Mañakuykuna",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 cheqaq yachaykuna.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Utqay Kamachiy Rurana",
    "s8Title": "8. Qillqakuna wan Yachaykuna",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 cheqaq yachaykuna.",
    "fTitle": "Andes Suyu Kamachiy Qhawana • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 Hackatón nisqapi rurasqa herramienta técnica.",
    "fCol2Title": "Licencia wan Acreditación",
    "fLic": "Creative Commons BY-NC 4.0 kichasqa licencia.",
    "fSafeguard": "ORAS-CONHU wan MINSA comités técnicos nisqawan takyasqa.",
    "fLawFramework": "Transparencia Kamachiyman hina.",
    "fCol3Title": "Utqaylla Puriy",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Wichq'ay",
    "deepModalTitlePrefix": "Yachaykunapa Hatun Sustenton • ",
    "legDemandLabel": "Kamachiy Mañakuy",
    "deepSecEvidenceTitle": "Yachaykuna wan Estadísticas",
    "deepSecGovTitle": "Kamachiykuna wan REMSAA Nisqakuna",
    "deepSecGovDesc": "PLANEA 2025-2030 kamachiykunawan wan REMSAA arinikuykunawan allichasqa.",
    "deepSecEconTitle": "Qullqi Chinkachiy (UNFPA / MEF)",
    "deepSecRoiTitle": "Qullqi Kutiy (ROI 7:1) wan Mana Ruraypa Coston",
    "deepSecRoiDesc": "Sapa 1 qullqi churashqamanta 7 qullqi waqaychasqa kanqa.",
    "deepSecDemandTitle": "Suyu Kamachiy Mañakuy:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Rurana Ñan:",
    "deepSecRoadmapDesc": "Ley de Presupuesto nisqapi qullqi churayta mañakun.",
    "sciModalTitle": "Yachaykuna wan Kamachiykuna Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Hampina Yachay (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 watamanta uray sipaskuna wiksanchakuptin <strong>5 kutita wañuy riegson miran</strong>. Tukuy chayqa Código Penalman hina abusomanta hamun.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Qullqi Chinkachiy wan MILENA (UNFPA)",
    "sciSec2Desc": "Mana rurayqa 0.25% - 1.0% PBI sapa wata chinkachin.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Qullqi Kutiy (ROI 7:1)",
    "sciSec3Desc": "Sapa 1 qullqi churashqamanta 7 qullqi waqaychan.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Wawakunata Hark'aq Kamachiy",
    "sciSec4Desc": "Suyu kamachiqkuna qullqita churanan wawakunata maqanakuymanta hark'anapaq.",
    "sciCloseBtn": "Compendio Wichq'ay",
    "sumModalTitle": "Suyu Umalliqkunapaq Ficha Técnica",
    "sumHeaderBadge": "CONGRESO WAN MEF NISQAPAQ RESUMEN",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 watamanta uray sipaskunapi cero chichuy 2030 watapaq.",
    "sumGrid2Lbl": "Qullqi Kutiy (ROI):",
    "sumGrid2Val": "7.00 sapa 1 qullqi churaymanta waqaychasqa.",
    "sumGrid3Lbl": "Mana Ruraypa Coston:",
    "sumGrid3Val": "1.0% PIB sapa wata chinkachiynin.",
    "sumGrid4Lbl": "Kamachiykuna:",
    "sumGrid4Val": "Código Penal wan Derechos Humanos nisqakuna.",
    "sumDemandsTitle": "Hatun Mañakuykuna:",
    "sumCloseBtn": "Allinmi / Wichq'ay",
    "countryModalTitle": "Andes Suyuta Akllay",
    "countryModalDesc": "Plan Andino PLANEA 2025-2030 yachaykunata qhaway",
    "cmFertPrefix": "Chichuy tupa: ",
    "cmBtnText": "Qillqata Qhaway",
    "countryCloseBtn": "Akllana Wichq'ay",
    "planeaModalTitle": "PLANEA 2025-2030 Matriz Marco (6 Suyukuna)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. 2030 Watapaq Hatun Meta",
    "planeaSec1Desc": "Suqta Andes suyukunapi TEFA pisiyachiy wan <strong>15 watamanta uray sipaskunapi cero chichuy 2030 watapaq</strong> hunt'anapaq.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 Kamachiy",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud arinishqan qullqi churanapaq.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Qanchis Hatun Ñankuna",
    "planeaLp": [
      "<strong>LP1:</strong> Allin Kamachiy qhali kaypi, yachaypi wan hark'aypi.",
      "<strong>LP2:</strong> EIS yachay siminchikkunapi.",
      "<strong>LP3:</strong> Sipaskunapaq sumaq hampina wasikuna.",
      "<strong>LP4:</strong> Maqanakuy wan abusota hark'ay.",
      "<strong>LP5:</strong> Waynakunapa umalliq kaynin.",
      "<strong>LP6:</strong> Yachaykuna wan datokuna.",
      "<strong>LP7:</strong> Suyu qullqi churay (5/5)."
    ],
    "planeaCloseBtn": "PLANEA Wichq'ay",
    "regionalModalTitle": "Regional Marco: Actuarial Evidencia wan AA-HA! Yachaykuna",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. UNFPA MILENA Actuarial Yachay (15 Suyukuna)",
    "regionalSec1Desc": "UNFPA América Latinapi <strong>USD 13,538 Millones</strong> sapa wata qullqi chinkachiymanta yachan.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Global AA-HA! Guía (OPS / OMS)",
    "regionalSec2Desc": "Sipaskunapa qhali kayninta utqaylla allichanapaq wan LARC hampikunapaq.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Maqasqakunapaq Utqay Hampina (OPS)",
    "regionalSec3Desc": "PEP, AOE wan hampina wasikunapi yanapakuy sipaskunapaq.",
    "regionalCloseBtn": "Regional Marco Wichq'ay",
    "siteTitle": "Suyu Kamachiy Qhawana: Wawa Chichuy wan Maqanakuy Hark'ay",
    "expExtremeRisk": "LLUMPAQ RIESGO",
    "expHighRisk": "HATUN RIESGO",
    "expModerateRisk": "CHAWPI RIESGO",
    "expCriticalGap": "HATUN BRECHA",
    "expAccreditedUnits": "Acreditado Postakuna",
    "expPerYear": "M/wata",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Suyu PBI",
    "riskExtreme": "Llumpaq Riesgo",
    "riskVeryHigh": "Ancha Hatun Riesgo",
    "riskHigh": "Hatun Riesgo",
    "riskModerate": "Chawpi Riesgo",
    "gapCritical": "Hatun Brecha",
    "gapSevere": "Llumpaq Brecha",
    "gapHigh": "Hatun Brecha",
    "gapModerate": "Chawpi Brecha"
  },
  "ay": {
    "langName": "Aymar aru",
    "skipLink": "Nayrankiri kawsayaru saraña",
    "endorsedBy": "Yanapirinaka:",
    "countryBarLbl": "Andes Suyu:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Qhana Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Ch'mak Modo",
    "optgroupOther": "── Yaqha Andes Suyunaka ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Andes Suyu Imillanakana Usuriptawi Jark'aqaña",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud aruskipawipa. <strong>15 marat jisk'a imillanaka jani usuriptañapataki</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metanaka Uñjaña (6 Países)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "INTERNACIONAL YANAPT'AWI",
    "regionalCardTitle": "Actuarial Chiqpach Yatiwi wan AA-HA! Kamachinaka",
    "regionalCardDesc": "UNFPA 15 MILENA yatiyawinaka (pérdida agregada <strong>USD 13,538 Millones</strong> América Latinana), Guía Global AA-HA! wan usuchjata warminaka qullaña.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Suyu Chiqpach Yatiwi Uñjaña",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Suyu Yatiwinaka Uñjaña",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Suyu Kamachi Qillqa Uñjaña",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Uñjaña",
    "heroCardTitle": "Andes Suyu Kamachi",
    "heroCardBadge": "AKANA LLIMPHI!",
    "heroCardDesc": "Akana llimphi Asamblea wan MEF yatiyawi compendio jist'arañataki",
    "s1Title": "1. Técnico Yatxatawi wan Chiqpach Yatiwinaka",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 chiqpach yatiwinaka.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Kunatsa akaxa sasixa? Chiqpach Yatiwi Uñjaña",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Kunatsa akaxa sasixa? Chiqpach Yatiwi Uñjaña",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Kunatsa akaxa sasixa? Chiqpach Yatiwi Uñjaña",
    "s2Title": "2. Qullqi Chhaqawi wan Kutt'awi (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 chiqpach yatiwinaka.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> JAN WALT'AYIRI QULLQI CHHAQAWI",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Chhaqawi Uñjaña",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> QULLQI ASKI JEPORU",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Qullqi Imantawi Uñjaña",
    "scTitle": "3. Suyu Mayjt'awinaka wan Qullañ Utanaka",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 chiqpach yatiwinaka.",
    "chart1Title": "3. Suyu Mayjt'awinaka wan Qullañ Utanaka • Aymar aru",
    "chart1Sub": "PLANEA 2025-2030 • Aymar aru",
    "chart2Title": "3. Suyu Mayjt'awinaka wan Qullañ Utanaka • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Aymar aru",
    "g2Lbl1": "Aymar aru [OK]",
    "g2Lbl2": "Aymar aru [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Aymar aru",
    "sfcTitle": "4. Chiqpach Yatxatawi: Pantjasiwinaka vs. Yatiwi",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 chiqpach yatiwinaka.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Pantjasiwinaka vs. Yatiwi (Aymar aru)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Técnico Yatxatawi wan Chiqpach Yatiwinaka (PLANEA)",
    "fc1MythTitle": "\"Yatiqañ utana yatiyawiqa imillanakaru nayrt'ayiwa.\"",
    "fc1MythDesc": "Pantjasiwi EIS jark'aqañataki.",
    "fc1EvTitle": "Chiqpach Yatiwi:",
    "fc1EvDesc": "EIS yatiyawiqa 1.5 marata usuriptawinaka jisk'aptayi.",
    "fc2MythTitle": "\"Waynanakatak qullqi churañaxa chhaqasqawa.\"",
    "fc2MythDesc": "Pantjasiwi qullqi irpirinakataki.",
    "fc2EvTitle": "Chiqpach Yatiwi:",
    "fc2EvDesc": "MILENA yatiyawimpi 1 qullqit 7 qullqi kutt'ani (ROI 7:1).",
    "fc3MythTitle": "\"15 marat jisk'an usuriptawipaxa ayllutakikiwa.\"",
    "fc3MythDesc": "Abuso imantañataki pantjasiwi.",
    "fc3EvTitle": "Chiqpach Yatiwi:",
    "fc3EvDesc": "15 marat jisk'an usuriptawipaxa violación delitowa.",
    "s3Title": "5. Kamachinaka wan Suyu Mayiwinaka",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 chiqpach yatiwinaka.",
    "s4Title": "6. Suyu Uñjiri wan Mayjt'awinaka",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 chiqpach yatiwinaka.",
    "expLblRegion": "Suyu / Departamento:",
    "expFertilityLbl": "Imillanakana Usuriptawipa:",
    "expCoverageLbl": "Qullañ Utanakana Coberturapa:",
    "expInactionLbl": "Sapa Mara Jan Lurawina Costopa:",
    "expPriorityLbl": "Qullqi Churaña:",
    "expDisclaimer": "Pukyu: Plan Andino PLANEA 2025-2030 oficial indicadornaka.",
    "coverageUnit": "Taqpacha",
    "yearUnit": "/ mara",
    "s5Title": "7. Suyu Kamachitaki 5 Jach'a Mayiwinaka",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 chiqpach yatiwinaka.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Jank'a Kamachi Lurawi",
    "s8Title": "8. Yatiyawi Qillqanaka",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 chiqpach yatiwinaka.",
    "fTitle": "Andes Suyu Kamachi Qhawawi • PLANEA 2025-2030",
    "fText": "PLANEA 2025-2030 Hackatón ukan lurata yanapawi.",
    "fCol2Title": "Licencia wan Acreditación",
    "fLic": "Creative Commons BY-NC 4.0 jist'arata licencia.",
    "fSafeguard": "ORAS-CONHU wan MINSA técnicos comités ukanakampi takyachata.",
    "fLawFramework": "Transparencia Kamachirjama.",
    "fCol3Title": "Jank'aki Saraña",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Jist'antaña",
    "deepModalTitlePrefix": "Yatiyawi Sustento • ",
    "legDemandLabel": "Kamachi Mayiwi",
    "deepSecEvidenceTitle": "Chiqpach Yatiwi wan Estadísticanaka",
    "deepSecGovTitle": "Kamachinaka wan REMSAA Aruskipawi",
    "deepSecGovDesc": "PLANEA 2025-2030 kamachinakampi wan REMSAA aruskipawinakampi.",
    "deepSecEconTitle": "Qullqi Chhaqawi (UNFPA / MEF)",
    "deepSecRoiTitle": "Qullqi Kutt'awi (ROI 7:1) wan Jan Lurawina Costopa",
    "deepSecRoiDesc": "Sapa 1 qullqi uchatata 7 qullqi imantasi.",
    "deepSecDemandTitle": "Suyu Mayiwi:",
    "deepSecRoadmapTitle": "Asamblea wan Ministerio Lurawi:",
    "deepSecRoadmapDesc": "Ley de Presupuesto ukanxa qullqi churaña wakisiwa.",
    "sciModalTitle": "Chiqpach Yatiwi wan Kamachinaka Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Qullañ Yatiwi (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 marat jisk'anaka usuriptasaxa <strong>5 kuti jiwaña riesgoniwa</strong>. Código Penal ukarjamaxa abusotwa juti.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Qullqi Chhaqawi wan MILENA (UNFPA)",
    "sciSec2Desc": "Jan lurawixa 0.25% - 1.0% PBI sapa mara chhaqayi.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Qullqi Kutt'awi (ROI 7:1)",
    "sciSec3Desc": "Sapa 1 qullqi uchatata 7 qullqi imantasi.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Wawanaka Jark'aqañ Kamachi",
    "sciSec4Desc": "Suyu irpirinakaxa qullqi churañapawa wawanaka nuwasiñat jark'aqañataki.",
    "sciCloseBtn": "Compendio Jist'antaña",
    "sumModalTitle": "Irpirinakatak Ficha Técnica",
    "sumHeaderBadge": "ASAMBLEA WAN MEF UKANAKATAK YATIYAWI",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 marat jisk'anaka cero usuriptawi 2030 marataki.",
    "sumGrid2Lbl": "Qullqi Kutt'awi (ROI):",
    "sumGrid2Val": "7.00 sapa 1 qullqi uchatata imantata.",
    "sumGrid3Lbl": "Jan Lurawina Costopa:",
    "sumGrid3Val": "1.0% PIB sapa mara chhaqawipa.",
    "sumGrid4Lbl": "Kamachinaka:",
    "sumGrid4Val": "Código Penal wan Derechos Humanos ukanaka.",
    "sumDemandsTitle": "Jach'a Mayiwinaka:",
    "sumCloseBtn": "Waliikiskis / Jist'antaña",
    "countryModalTitle": "Andes Suyu Ajlliña",
    "countryModalDesc": "Plan Andino PLANEA 2025-2030 yatiyawinaka uñjaña",
    "cmFertPrefix": "Usuriptawi: ",
    "cmBtnText": "Uñjaña",
    "countryCloseBtn": "Jist'antaña",
    "planeaModalTitle": "PLANEA 2025-2030 Matriz Marco (6 Suyunaka)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. 2030 Marataki Jach'a Meta",
    "planeaSec1Desc": "Suxta Andes suyunakana TEFA jisk'aptayaña wan <strong>15 marat jisk'a imillanakana cero usuriptawi 2030 marataki</strong>.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 Kamachi",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud aruskipawipa qullqi churañataki.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Paqallqu Jach'a Thakhinaka",
    "planeaLp": [
      "<strong>LP1:</strong> K'umara jakaña, yatiqaña wan jark'aqaña.",
      "<strong>LP2:</strong> EIS yatiyawi arunakasanxa.",
      "<strong>LP3:</strong> Imillanaka waynanakataki suma qullañ utanaka.",
      "<strong>LP4:</strong> Nuwasiña wan abusora jark'aqaña.",
      "<strong>LP5:</strong> Waynanakana irpiri kankañapa.",
      "<strong>LP6:</strong> Yatiyawi wan datonaka.",
      "<strong>LP7:</strong> Suyu qullqi churaña (5/5)."
    ],
    "planeaCloseBtn": "PLANEA Jist'antaña",
    "regionalModalTitle": "Regional Marco: Actuarial Chiqpach Yatiwi wan AA-HA!",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. UNFPA MILENA Actuarial Yatiwi (15 Suyunaka)",
    "regionalSec1Desc": "UNFPA América Latinana <strong>USD 13,538 Millones</strong> sapa mara qullqi chhaqawit yatxati.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Global AA-HA! Yatichawi (OPS / OMS)",
    "regionalSec2Desc": "Imillanakana waynanakana qullayawipa jank'a askichañataki wan LARC qullanaka.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Usuchjatanakataki Jank'a Qullaña (OPS)",
    "regionalSec3Desc": "PEP, AOE wan qullañ utanakana yanapt'awi imillanakataki.",
    "regionalCloseBtn": "Regional Marco Jist'antaña",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "ANCHA RIESGO",
    "expHighRisk": "JACH'A RIESGO",
    "expModerateRisk": "TAYPI RIESGO",
    "expCriticalGap": "JACH'A BRECHA",
    "expAccreditedUnits": "Acreditado Qullañ Utanaka",
    "expPerYear": "M/mara",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Suyu PBI",
    "riskExtreme": "Ancha Riesgo",
    "riskVeryHigh": "Sint'i Jach'a Riesgo",
    "riskHigh": "Jach'a Riesgo",
    "riskModerate": "Taypi Riesgo",
    "gapCritical": "Jach'a Brecha",
    "gapSevere": "Ancha Brecha",
    "gapHigh": "Jach'a Brecha",
    "gapModerate": "Taypi Brecha"
  },
  "gn": {
    "langName": "Avañe'ẽ",
    "skipLink": "Saltar al contenido principal",
    "endorsedBy": "Con el aval de:",
    "countryBarLbl": "Territorio Andino:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Modo Claro",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Modo Oscuro",
    "optgroupOther": "── Otras Lenguas Andinas ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino Mitãkuña Usuriptawi Jark'aha ha Mboguejy",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú ha Venezuela Tesãi Motenondehakuéra omoañetevaekue. <strong>15 ary guýpe cero usuriptawi</strong> ohupyty hag̃ua.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Rembipota Recha (6 Tetãnguéra)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "TETÃ AMBUÉVA PYTYVÕ",
    "regionalCardTitle": "Actuarial Kuaapy ha AA-HA! Tekome'ẽ Guasu",
    "regionalCardDesc": "UNFPA 15 MILENA jehechakuaa (<strong>USD 13,538 Millones</strong> viru kañy América Latina-pe), Guía Global AA-HA! ha kuña ñerairõ jepytyvõ.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Kuaapy ha Tekome'ẽ Recha",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Tetãvore Rechaukaha Recha",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Tekome'ẽ Kuatia Guasu Recha",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Recha",
    "heroCardTitle": "Andes Tetã Rerekua",
    "heroCardBadge": "EIKOPYKE KO'ÁPE!",
    "heroCardDesc": "Eikopyke ko'ápe embojuruja hag̃ua Tembikuaaty Kuatia Congreso ha MEF-pe g̃uarã",
    "s1Title": "1. Tekokuaa ha Tembikuaaty Rechaukaha",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 marandukuéra.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Mba'érepa oñeñe'ẽ kóva? Tembikuaaty Guasu Recha",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Mba'érepa oñeñe'ẽ kóva? Tembikuaaty Guasu Recha",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Mba'érepa oñeñe'ẽ kóva? Tembikuaaty Guasu Recha",
    "s2Title": "2. Viru Kañy ha Jehechauka (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 marandukuéra.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> IMPACTO FISCAL NEGATIVO",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Kañy Recha",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> EFICIENCIA DEL GASTO PÚBLICO",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Viru Ñeñongatu Recha",
    "scTitle": "3. Tetãvore Joavy ha Tesãi Renda",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 marandukuéra.",
    "chart1Title": "3. Tetãvore Joavy ha Tesãi Renda • Avañe'ẽ",
    "chart1Sub": "PLANEA 2025-2030 • Avañe'ẽ",
    "chart2Title": "3. Tetãvore Joavy ha Tesãi Renda • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Avañe'ẽ",
    "g2Lbl1": "Avañe'ẽ [OK]",
    "g2Lbl2": "Avañe'ẽ [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Avañe'ẽ",
    "sfcTitle": "4. Añetegua: Japu vs. Tembikuaaty",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 marandukuéra.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Japu vs. Tembikuaaty (Avañe'ẽ)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Tekokuaa ha Tembikuaaty Rechaukaha (PLANEA)",
    "fc1MythTitle": "\"Mbo'ehaópe tekombo'e omotenonde tekove ñepyrũ.\"",
    "fc1MythDesc": "Japu oñemoĩva EIS rehe.",
    "fc1EvTitle": "Tembikuaaty Rechaukaha:",
    "fc1EvDesc": "EIS tekombo'e omboguejy 1.5 ary mitãkuña usuriptawi.",
    "fc2MythTitle": "\"Mitãrusu tesãime viru ñemoĩ ha'e viru kañy.\"",
    "fc2MythDesc": "Japu viru jeporúpe.",
    "fc2EvTitle": "Tembikuaaty Rechaukaha:",
    "fc2EvDesc": "MILENA ohechauka 1 viru oñemoĩvare 7 viru oñeñongatuha (ROI 7:1).",
    "fc3MythTitle": "\"15 ary guýpe hyeguasu ha'e ogaygua mba'énte.\"",
    "fc3MythDesc": "Japu omokañyséva abuso sexual.",
    "fc3EvTitle": "Tembikuaaty Rechaukaha:",
    "fc3EvDesc": "15 ary guýpe opavave hyeguasu ha'e delito de violación.",
    "s3Title": "5. Tekome'ẽ ha Tetã Rembiapoguasu",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 marandukuéra.",
    "s4Title": "6. Tetãvore Kundahára ha Joavykuéra",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 marandukuéra.",
    "expLblRegion": "Territorio / Departamento:",
    "expFertilityLbl": "Mitãkuña Usuriptawi:",
    "expCoverageLbl": "Tesãi Renda Cobertura:",
    "expInactionLbl": "Ary Viru Kañy Jeporu:",
    "expPriorityLbl": "Viru Ñemoĩ:",
    "expDisclaimer": "Fuente: Indicadores oficiales del Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Mo'ãha",
    "yearUnit": "/ ary",
    "s5Title": "7. Tekome'ẽ Kuatia: 5 Jerure Guasu",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 marandukuéra.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Pya'e Tekome'ẽ Tembiapo",
    "s8Title": "8. Kuatia Guasu ha Marandukuéra",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 marandukuéra.",
    "fTitle": "Plataforma de Incidencia Política • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA 2025-2030.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Licencia de Uso Abierto Creative Commons BY-NC 4.0 para incidencia pública.",
    "fSafeguard": "Datos validados por comités técnicos del ORAS-CONHU y MINSA.",
    "fLawFramework": "Conforme a la Ley de Transparencia y Acceso a la Información.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Cerrar Ventana",
    "deepModalTitlePrefix": "Tembikuaaty Sustento • ",
    "legDemandLabel": "Tekome'ẽ Jerure",
    "deepSecEvidenceTitle": "Tembikuaaty ha Estadísticakuéra",
    "deepSecGovTitle": "Tekome'ẽ ha REMSAA Kuatia",
    "deepSecGovDesc": "PLANEA 2025-2030 ha REMSAA acuerdokuéra omoañetevaekue.",
    "deepSecEconTitle": "Viru Kañy Jeporu (UNFPA / MEF)",
    "deepSecRoiTitle": "Viru Kutiy (ROI 7:1) ha Viru Kañy",
    "deepSecRoiDesc": "1 viru oñemoĩvape 7 viru oñeñongatu tesãi rendápe.",
    "deepSecDemandTitle": "Incidencia Polítyka Jerure:",
    "deepSecRoadmapTitle": "Congreso ha Ministerio Rape:",
    "deepSecRoadmapDesc": "Oikotevẽ viru Ley de Presupuesto Público-pe.",
    "sciModalTitle": "Tembikuaaty ha Tekome'ẽ Compendio",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Tesãi Kuaapy (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 ary guýpe mitãkuña hyeguasúva oreko <strong>5 jey omanóva riesgo</strong>. Código Penal he'i kóva ha'eha abuso sexual.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Viru Kañy ha MILENA (UNFPA)",
    "sciSec2Desc": "0.25% guive 1.0% peve PBI okañy ary pukukue.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Viru Kutiy (ROI 7:1)",
    "sciSec3Desc": "1 viru oñemoĩvape 7 viru oñeñongatu.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Mitãnguéra Ñangareko Tekome'ẽ",
    "sciSec4Desc": "Tetã omoĩva'erã viru centros de emergencia ha postas-pe mitãnguéra jeprotehe hag̃ua.",
    "sciCloseBtn": "Compendio Mboty",
    "sumModalTitle": "Mburuvichakuérape g̃uarã Ficha Técnica",
    "sumHeaderBadge": "CONGRESO HA MEF-PE G̃UARÃ MARANDU",
    "sumGrid1Lbl": "Rembipota 2030:",
    "sumGrid1Val": "15 ary guýpe cero usuriptawi 2030 arýpe.",
    "sumGrid2Lbl": "Viru Kutiy (ROI):",
    "sumGrid2Val": "7.00 oñeñongatu 1 viru oñemoĩvare.",
    "sumGrid3Lbl": "Viru Kañy Costo:",
    "sumGrid3Val": "1.0% PIB ary pukukue.",
    "sumGrid4Lbl": "Tekome'ẽ:",
    "sumGrid4Val": "Código Penal ha Derechos Humanos.",
    "sumDemandsTitle": "Jerure Guasukuéra:",
    "sumCloseBtn": "Oĩma / Mboty",
    "countryModalTitle": "Seleccione un País de la Región Andina",
    "countryModalDesc": "Explore los datos e indicadores del Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Ver Versión",
    "countryCloseBtn": "Cerrar Selector",
    "planeaModalTitle": "PLANEA 2025-2030 Matriz Marco (6 Tetãnguéra)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Rembipota Guasu 2030",
    "planeaSec1Desc": "6 tetãnguérape TEFA mboguejy ha <strong>15 ary guýpe cero usuriptawi 2030 arýpe</strong> ohupyty hag̃ua.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 Kuatia Guasu",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú ha Venezuela Tesãi Motenondehakuéra viru omoĩ hag̃ua.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. Pokõi Tape Guasu",
    "planeaLp": [
      "<strong>LP1:</strong> Sambyhy porã tesãi, tekombo'e ha jepytyvõme.",
      "<strong>LP2:</strong> EIS tekombo'e ñane ñe'ẽtépe.",
      "<strong>LP3:</strong> Mitãkuña ha mitãrusu tesãi renda.",
      "<strong>LP4:</strong> Ñerairõ ha jeporu vai jark'aha.",
      "<strong>LP5:</strong> Mitãrusukuéra moakãhára.",
      "<strong>LP6:</strong> Tembikuaaty ha marandukuéra.",
      "<strong>LP7:</strong> Viru jeporu guasu (5/5)."
    ],
    "planeaCloseBtn": "PLANEA Mboty",
    "regionalModalTitle": "Regional Marco: MILENA Kuaapy ha AA-HA!",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. UNFPA MILENA Tembikuaaty (15 Tetãnguéra)",
    "regionalSec1Desc": "UNFPA América Latina-pe ohecha <strong>USD 13,538 Millones</strong> viru kañy ary pukukue.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Global AA-HA! Tape (OPS / OMS)",
    "regionalSec2Desc": "Mitãkuña tesãi pytyvõ pya'e ha LARC pohãnguéra.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Ñerairõ Hasypeve Ñangareko (OPS)",
    "regionalSec3Desc": "PEP, AOE ha tesãi rendápe ñepytyvõ mitãkuñanguérape.",
    "regionalCloseBtn": "Regional Marco Mboty",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "TEKOPY'A GUARÃ GUASU",
    "expHighRisk": "RIESGO TUICHA",
    "expModerateRisk": "RIESGO MITÃ",
    "expCriticalGap": "BRECHA CRÍTICA",
    "expAccreditedUnits": "Tesãi Renda Acreditada",
    "expPerYear": "M/ary",
    "expPerThousand": "1,000-pe",
    "expRegionalGdp": "Tetãvore PBI",
    "riskExtreme": "Tekopy'a Guasu",
    "riskVeryHigh": "Riesgo Tuichaite",
    "riskHigh": "Riesgo Tuicha",
    "riskModerate": "Riesgo Mitã",
    "gapCritical": "Brecha Crítica",
    "gapSevere": "Brecha Vaí",
    "gapHigh": "Brecha Tuicha",
    "gapModerate": "Brecha Mitã"
  },
  "arn": {
    "langName": "Mapudungun",
    "skipLink": "Saltar al contenido principal",
    "endorsedBy": "Con el aval de:",
    "countryBarLbl": "Territorio Andino:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Modo Claro",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Modo Oscuro",
    "optgroupOther": "── Otras Lenguas Andinas ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino Pichikeche Domo Koñin Kuñiwtual",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú ka Venezuela Min. Salud dungu. <strong>15 tripantu pichikeche kuñiwtual</strong> cero koñin mew.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metas Pen (6 Mapu)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "KELLUWÜN",
    "regionalCardTitle": "MILENA ka AA-HA! Kimün Dungu",
    "regionalCardDesc": "UNFPA MILENA 15 kimün (<strong>USD 13,538 Millones</strong> kulliñ ngelay), Guía AA-HA! ka weche domo kuñiwtun.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Kimün Dungu Pen",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Mapu Kimün Pen",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Ngülamtun Kuatia Pen",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Pen",
    "heroCardTitle": "Andes Ngülamtun Politica",
    "heroCardBadge": "FAW PÜTÜMAY!",
    "heroCardDesc": "Faw pütümay Congreso ka MEF kimün nülal",
    "s1Title": "1. Kimeltun ka Kimün Dungu",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 rüpü kimün.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Chumngelu feypingi? Rüpü Kimün Pen",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Chumngelu feypingi? Rüpü Kimün Pen",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Chumngelu feypingi? Rüpü Kimün Pen",
    "s2Title": "2. Kulliñ Ngelay ka Wiñotun (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 rüpü kimün.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> IMPACTO FISCAL NEGATIVO",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Kulliñ Ngelay Pen",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> EFICIENCIA DEL GASTO PÚBLICO",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Kulliñ Wiñotun Pen",
    "scTitle": "3. Mapu Chadiñ ka Lawentun Ruka",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 rüpü kimün.",
    "chart1Title": "3. Mapu Chadiñ ka Lawentun Ruka • Mapudungun",
    "chart1Sub": "PLANEA 2025-2030 • Mapudungun",
    "chart2Title": "3. Mapu Chadiñ ka Lawentun Ruka • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Mapudungun",
    "g2Lbl1": "Mapudungun [OK]",
    "g2Lbl2": "Mapudungun [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Mapudungun",
    "sfcTitle": "4. Rüpü Kimün: Koyla vs. Kimeltun",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 rüpü kimün.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Koyla vs. Kimeltun (Mapudungun)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Kimeltun ka Kimün Dungu (PLANEA)",
    "fc1MythTitle": "\"Ruka kimün wechekeche emtiki.\"",
    "fc1MythDesc": "Koyla EIS jark'al.",
    "fc1EvTitle": "Rüpü Kimün:",
    "fc1EvDesc": "EIS 1.5 tripantu weche domo küme mongen.",
    "fc2MythTitle": "\"Wechekeche kulliñ ngelay.\"",
    "fc2MythDesc": "Koyla kulliñ dungu.",
    "fc2EvTitle": "Rüpü Kimün:",
    "fc2EvDesc": "MILENA 1 kulliñ 7 kulliñ wiñotun (ROI 7:1).",
    "fc3MythTitle": "\"15 tripantu pichikeche ruka mew.\"",
    "fc3MythDesc": "Koyla abuso ellkatual.",
    "fc3EvTitle": "Rüpü Kimün:",
    "fc3EvDesc": "15 tripantu pichikeche violación delito dungu.",
    "s3Title": "5. Nor Dungu ka Wallmapu Dungun",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 rüpü kimün.",
    "s4Title": "6. Mapu Kintun ka Chadiñ Dungu",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 rüpü kimün.",
    "expLblRegion": "Territorio / Departamento:",
    "expFertilityLbl": "Pichikeche Koñin Fecundidad:",
    "expCoverageLbl": "Lawentun Ruka Cobertura:",
    "expInactionLbl": "Tripantu Kulliñ Ngelay Costo:",
    "expPriorityLbl": "Kulliñ Prioridad:",
    "expDisclaimer": "Fuente: Indicadores oficiales del Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Küme",
    "yearUnit": "/ tripantu",
    "s5Title": "7. Ngülamtun Kuatia: 5 Futa Mangeltun",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 rüpü kimün.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Nor Dungu Wiño Rulan",
    "s8Title": "8. Ruka Kimün Dungu",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 rüpü kimün.",
    "fTitle": "Plataforma de Incidencia Política • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA 2025-2030.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Licencia de Uso Abierto Creative Commons BY-NC 4.0 para incidencia pública.",
    "fSafeguard": "Datos validados por comités técnicos del ORAS-CONHU y MINSA.",
    "fLawFramework": "Conforme a la Ley de Transparencia y Acceso a la Información.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Cerrar (Mapudungun)",
    "deepModalTitlePrefix": "Kimün Sustento • ",
    "legDemandLabel": "Nor Dungu Ngülam",
    "deepSecEvidenceTitle": "Rüpü Kimün ka Estadísticas",
    "deepSecGovTitle": "Nor Dungu ka REMSAA Ngülam",
    "deepSecGovDesc": "PLANEA 2025-2030 ka REMSAA dungu mew.",
    "deepSecEconTitle": "Kulliñ Ngelay (UNFPA / MEF)",
    "deepSecRoiTitle": "Kulliñ Wiñotun (ROI 7:1) ka Kulliñ Ngelay",
    "deepSecRoiDesc": "1 kulliñ mew 7 kulliñ wiñotun.",
    "deepSecDemandTitle": "Ngülamtun Politica:",
    "deepSecRoadmapTitle": "Congreso ka Ministerio Rüpü:",
    "deepSecRoadmapDesc": "Ley de Presupuesto mew kulliñ rulan.",
    "sciModalTitle": "Evidencia Científica & Marco Legal (Mapudungun)",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Evidencia Sanitaria (Mapudungun)",
    "sciSec1Desc": "15 años <strong>5x riesgo muerte materna</strong> (Mapudungun).",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Impacto Fiscal MILENA (Mapudungun)",
    "sciSec2Desc": "0.25% - 1.0% PBI (Mapudungun).",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. ROI 7:1 (Mapudungun)",
    "sciSec3Desc": "1 -> 7 ahorro social (Mapudungun).",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Protección Niñez (Mapudungun)",
    "sciSec4Desc": "Código Penal & Derechos Humanos (Mapudungun).",
    "sciCloseBtn": "Cerrar / Mapudungun",
    "sumModalTitle": "Ficha Técnica Ejecutiva (Mapudungun)",
    "sumHeaderBadge": "RESUMEN EJECUTIVO CONGRESO & MEF (Mapudungun)",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 años cero gestaciones 2030 (Mapudungun).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7:1 (Mapudungun).",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "1.0% PIB (Mapudungun).",
    "sumGrid4Lbl": "Respaldo Legal:",
    "sumGrid4Val": "Código Penal (Mapudungun).",
    "sumDemandsTitle": "Demandas Clave de Política Pública (Mapudungun):",
    "sumCloseBtn": "Cerrar / Mapudungun",
    "countryModalTitle": "Seleccione un País de la Región Andina",
    "countryModalDesc": "Explore los datos e indicadores del Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Ver Versión",
    "countryCloseBtn": "Cerrar Selector",
    "planeaModalTitle": "Marco Matriz PLANEA 2025-2030 (Mapudungun)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Meta 2030 (Mapudungun)",
    "planeaSec1Desc": "6 países TEFA • <strong>15 años cero tolerancia</strong> 2030 (Mapudungun).",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 (Mapudungun)",
    "planeaSec2Desc": "6 Ministerios de Salud acuerdo vinculante (Mapudungun).",
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
    "planeaCloseBtn": "Cerrar / Mapudungun",
    "regionalModalTitle": "Marco Regional (Mapudungun)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA 15 Países (Mapudungun)",
    "regionalSec1Desc": "UNFPA <strong>USD 13,538 Millones</strong> (Mapudungun).",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. AA-HA! OPS/OMS (Mapudungun)",
    "regionalSec2Desc": "LARC & EIS (Mapudungun).",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta de Evaluación Rápida en Violencia Sexual (OPS)",
    "regionalSec3Desc": "Protocolos de profilaxis post-exposición (PEP), anticoncepción de emergencia (AOE), y soporte psicosocial inmediato en el primer nivel de atención para niñas y adolescentes sobrevivientes.",
    "regionalCloseBtn": "Cerrar / Mapudungun",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "EXTREMO RIESGO",
    "expHighRisk": "ALTO RIESGO",
    "expModerateRisk": "MEDIO RIESGO",
    "expCriticalGap": "BRECHA CRÍTICA",
    "expAccreditedUnits": "Lawentun Ruka Acreditada",
    "expPerYear": "M/tripantu",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Mapu PBI",
    "riskExtreme": "Extremo Riesgo",
    "riskVeryHigh": "Altu Riesgo",
    "riskHigh": "Altu Riesgo",
    "riskModerate": "Riesgo",
    "gapCritical": "Brecha Crítica",
    "gapSevere": "Brecha Severa",
    "gapHigh": "Brecha Alta",
    "gapModerate": "Brecha Media"
  },
  "qvi": {
    "langName": "Kichwa",
    "skipLink": "Saltar al contenido principal",
    "endorsedBy": "Con el aval de:",
    "countryBarLbl": "Territorio Andino:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Modo Claro",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Modo Oscuro",
    "optgroupOther": "── Otras Lenguas Andinas ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino Wawa Chichuy Hark'aypa wan Pisi Miray",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú wan Venezuela Min. Salud nishkakuna. <strong>15 watamanta urapi wawakuna mana chichukunankapak</strong>.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metakuna Rikuna (6 Llaktakuna)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "YANAPAKKUNA",
    "regionalCardTitle": "MILENA wan AA-HA! Yachaykuna",
    "regionalCardDesc": "UNFPA 15 MILENA yachaykuna (<strong>USD 13,538 Millones</strong> kullki chinkay), Guía AA-HA! wan warmikunata hampinkapak.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Yachaykuna Rikuna",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Llakta Yachaykunata Rikuna",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Llakta Kamachiy Killkata Rikuna",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Rikuna",
    "heroCardTitle": "Andes Llakta Rikuna",
    "heroCardBadge": "KAYPI ÑITINA!",
    "heroCardDesc": "Kaypi ñitina Congreso wan MEF yachaykunata paskanapak",
    "s1Title": "1. Técnico Rikuna wan Yachaykuna",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 alli yachaykuna.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutak kayta rimanchik? Hatun Yachayta Rikuna",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutak kayta rimanchik? Hatun Yachayta Rikuna",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Imaraykutak kayta rimanchik? Hatun Yachayta Rikuna",
    "s2Title": "2. Kullki Chinkay wan Kutina (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 alli yachaykuna.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> IMPACTO FISCAL NEGATIVO",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Kullki Chinkay Rikuna",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> EFICIENCIA DEL GASTO PÚBLICO",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Kullki Wakaychay Rikuna",
    "scTitle": "3. Llakta Chikanyay wan Hampina Wasikuna",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 alli yachaykuna.",
    "chart1Title": "3. Llakta Chikanyay wan Hampina Wasikuna • Kichwa",
    "chart1Sub": "PLANEA 2025-2030 • Kichwa",
    "chart2Title": "3. Llakta Chikanyay wan Hampina Wasikuna • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Kichwa",
    "g2Lbl1": "Kichwa [OK]",
    "g2Lbl2": "Kichwa [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Kichwa",
    "sfcTitle": "4. Alli Yachay: Llulla vs. Yachay",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 alli yachaykuna.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Llulla vs. Yachay (Kichwa)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Técnico Rikuna wan Yachaykuna (PLANEA)",
    "fc1MythTitle": "\"Yachana wasipi yachayka warmakunata ñawpachinmi.\"",
    "fc1MythDesc": "Llulla EIS yachayta harkankapak.",
    "fc1EvTitle": "Alli Yachay:",
    "fc1EvDesc": "EIS yachayka 1.5 watata unaykachin wan mana munasqa chichuykunata pisiyachin.",
    "fc2MythTitle": "\"Waynakunapak kullki churayka chinkasqa kullkimi.\"",
    "fc2MythDesc": "Kullki rakinapi llullakuna.",
    "fc2EvTitle": "Alli Yachay:",
    "fc2EvDesc": "MILENA yachaywan 1 kullkimanta 7 kullki kutimun (ROI 7:1).",
    "fc3MythTitle": "\"15 watamanta urapi wiksanchakuyka ayllullapak asuntomi.\"",
    "fc3MythDesc": "Makayta wan abusota pakankapak llulla.",
    "fc3EvTitle": "Alli Yachay:",
    "fc3EvDesc": "15 watamanta urapi tukuy chichuyka Código Penalman hina violacionmi.",
    "s3Title": "5. Kamachiykuna wan Llaktapa Mañaykuna",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 alli yachaykuna.",
    "s4Title": "6. Llaktapa Rikuk wan Chikanyaykuna",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 alli yachaykuna.",
    "expLblRegion": "Territorio / Departamento:",
    "expFertilityLbl": "Sipaskunapa Fecundidad:",
    "expCoverageLbl": "Hampina Wasikunapa Cobertura:",
    "expInactionLbl": "Sapa Wata Kullki Chinkay Costo:",
    "expPriorityLbl": "Kullki Churana:",
    "expDisclaimer": "Fuente: Indicadores oficiales del Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Tukuykuna",
    "yearUnit": "/ wata",
    "s5Title": "7. Llaktapa Kamachiypak 5 Hatun Mañaykuna",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 alli yachaykuna.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Utkay Kamachiy Rurana",
    "s8Title": "8. Killkakuna wan Yachaykuna",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 alli yachaykuna.",
    "fTitle": "Plataforma de Incidencia Política • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA 2025-2030.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Licencia de Uso Abierto Creative Commons BY-NC 4.0 para incidencia pública.",
    "fSafeguard": "Datos validados por comités técnicos del ORAS-CONHU y MINSA.",
    "fLawFramework": "Conforme a la Ley de Transparencia y Acceso a la Información.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Cerrar (Kichwa)",
    "deepModalTitlePrefix": "Yachaykunapa Sustento • ",
    "legDemandLabel": "Kamachiy Mañay",
    "deepSecEvidenceTitle": "Alli Yachaykuna wan Estadísticas",
    "deepSecGovTitle": "Kamachiykuna wan REMSAA",
    "deepSecGovDesc": "PLANEA 2025-2030 wan REMSAA arinikuykuna.",
    "deepSecEconTitle": "Kullki Chinkay (UNFPA / MEF)",
    "deepSecRoiTitle": "Kullki Kutina (ROI 7:1) wan Kullki Chinkay",
    "deepSecRoiDesc": "1 kullkimanta 7 kullki kutimun.",
    "deepSecDemandTitle": "Llakta Mañay:",
    "deepSecRoadmapTitle": "Congreso wan Ministerio Ñan:",
    "deepSecRoadmapDesc": "Ley de Presupuesto kullki churana.",
    "sciModalTitle": "Evidencia Científica & Marco Legal (Kichwa)",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Evidencia Sanitaria (Kichwa)",
    "sciSec1Desc": "15 años <strong>5x riesgo muerte materna</strong> (Kichwa).",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Impacto Fiscal MILENA (Kichwa)",
    "sciSec2Desc": "0.25% - 1.0% PBI (Kichwa).",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. ROI 7:1 (Kichwa)",
    "sciSec3Desc": "1 -> 7 ahorro social (Kichwa).",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Protección Niñez (Kichwa)",
    "sciSec4Desc": "Código Penal & Derechos Humanos (Kichwa).",
    "sciCloseBtn": "Cerrar / Kichwa",
    "sumModalTitle": "Ficha Técnica Ejecutiva (Kichwa)",
    "sumHeaderBadge": "RESUMEN EJECUTIVO CONGRESO & MEF (Kichwa)",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 años cero gestaciones 2030 (Kichwa).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7:1 (Kichwa).",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "1.0% PIB (Kichwa).",
    "sumGrid4Lbl": "Respaldo Legal:",
    "sumGrid4Val": "Código Penal (Kichwa).",
    "sumDemandsTitle": "Demandas Clave de Política Pública (Kichwa):",
    "sumCloseBtn": "Cerrar / Kichwa",
    "countryModalTitle": "Seleccione un País de la Región Andina",
    "countryModalDesc": "Explore los datos e indicadores del Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Ver Versión",
    "countryCloseBtn": "Cerrar Selector",
    "planeaModalTitle": "Marco Matriz PLANEA 2025-2030 (Kichwa)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Meta 2030 (Kichwa)",
    "planeaSec1Desc": "6 países TEFA • <strong>15 años cero tolerancia</strong> 2030 (Kichwa).",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 (Kichwa)",
    "planeaSec2Desc": "6 Ministerios de Salud acuerdo vinculante (Kichwa).",
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
    "planeaCloseBtn": "Cerrar / Kichwa",
    "regionalModalTitle": "Marco Regional (Kichwa)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA 15 Países (Kichwa)",
    "regionalSec1Desc": "UNFPA <strong>USD 13,538 Millones</strong> (Kichwa).",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. AA-HA! OPS/OMS (Kichwa)",
    "regionalSec2Desc": "LARC & EIS (Kichwa).",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta de Evaluación Rápida en Violencia Sexual (OPS)",
    "regionalSec3Desc": "Protocolos de profilaxis post-exposición (PEP), anticoncepción de emergencia (AOE), y soporte psicosocial inmediato en el primer nivel de atención para niñas y adolescentes sobrevivientes.",
    "regionalCloseBtn": "Cerrar / Kichwa",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "EXTREMO RIESGO",
    "expHighRisk": "ALTO RIESGO",
    "expModerateRisk": "MEDIO RIESGO",
    "expCriticalGap": "BRECHA CRÍTICA",
    "expAccreditedUnits": "Hampina Wasikuna Acreditada",
    "expPerYear": "M/wata",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Llakta PBI",
    "riskExtreme": "Extremo Riesgo",
    "riskVeryHigh": "Hatun Riesgo",
    "riskHigh": "Hatun Riesgo",
    "riskModerate": "Chawpi Riesgo",
    "gapCritical": "Hatun Brecha",
    "gapSevere": "Llumpay Brecha",
    "gapHigh": "Hatun Brecha",
    "gapModerate": "Chawpi Brecha"
  },
  "guc": {
    "langName": "Wayuunaiki",
    "skipLink": "Saltar al contenido principal",
    "endorsedBy": "Con el aval de:",
    "countryBarLbl": "Territorio Andino:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Modo Claro",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Modo Oscuro",
    "optgroupOther": "── Otras Lenguas Andinas ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino Jintüi Asitnushii Katataaka je Anaa",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú je Venezuela Min. Salud pütchi. <strong>15 juyamüin cero tolerancia</strong> jintüi asitnushii katataaka.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metas Eiraja (6 Mmapa'a)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "AKAALIJÜIN",
    "regionalCardTitle": "MILENA je AA-HA! Atijawaa Pütchi",
    "regionalCardDesc": "UNFPA MILENA 15 atijawaa (<strong>USD 13,538 Millones</strong> walawaa chinkay), Guía AA-HA! je jintüi katataaka.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Atijawaa Eiraja",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Mmapa'a Atijawaa Eiraja",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Akuwa'ipa Karalo'uta Eiraja",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Eiraja",
    "heroCardTitle": "Andes Apalirawaa Politica",
    "heroCardBadge": "YAAPÜNA ACHUNTA!",
    "heroCardDesc": "Yaapüna achunta Congreso je MEF atijawaa jütalüin",
    "s1Title": "1. Atijawaa je Karalo'uta Sukua'ipa",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 atijawaa.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Jamüshi saashajaaka tü? Shiimüin Atijawaa Eiraja",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Jamüshi saashajaaka tü? Shiimüin Atijawaa Eiraja",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Jamüshi saashajaaka tü? Shiimüin Atijawaa Eiraja",
    "s2Title": "2. Walawaa Chinkay je Awana (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 atijawaa.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> IMPACTO FISCAL NEGATIVO",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Walawaa Chinkay Eiraja",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> EFICIENCIA DEL GASTO PÚBLICO",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Walawaa Awana Eiraja",
    "scTitle": "3. Mmapa'a Akanawaa je Ayatawaa",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 atijawaa.",
    "chart1Title": "3. Mmapa'a Akanawaa je Ayatawaa • Wayuunaiki",
    "chart1Sub": "PLANEA 2025-2030 • Wayuunaiki",
    "chart2Title": "3. Mmapa'a Akanawaa je Ayatawaa • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Wayuunaiki",
    "g2Lbl1": "Wayuunaiki [OK]",
    "g2Lbl2": "Wayuunaiki [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Wayuunaiki",
    "sfcTitle": "4. Shiimüin: Pütchi vs. Atijawaa",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 atijawaa.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Pütchi vs. Atijawaa (Wayuunaiki)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Atijawaa je Karalo'uta Sukua'ipa (PLANEA)",
    "fc1MythTitle": "\"Ekinaa wasi atijawaa jintüi emtiki.\"",
    "fc1MythDesc": "Pütchi EIS jark'al.",
    "fc1EvTitle": "Shiimüin Atijawaa:",
    "fc1EvDesc": "EIS 1.5 juyamüin jintüi asitnushii anaa.",
    "fc2MythTitle": "\"Jintüi walawaa chinkasqawa.\"",
    "fc2MythDesc": "Pütchi walawaa.",
    "fc2EvTitle": "Shiimüin Atijawaa:",
    "fc2EvDesc": "MILENA 1 walawaa 7 walawaa awana (ROI 7:1).",
    "fc3MythTitle": "\"15 juyamüin jintüi apushillapaq.\"",
    "fc3MythDesc": "Pütchi abusota pakanaji.",
    "fc3EvTitle": "Shiimüin Atijawaa:",
    "fc3EvDesc": "15 juyamüin jintüi violación delito akuwa'ipa.",
    "s3Title": "5. Akuwa'ipa je Mmapa'a Pütchi",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 atijawaa.",
    "s4Title": "6. Mmapa'a Eiraja je Akanawaa",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 atijawaa.",
    "expLblRegion": "Territorio / Departamento:",
    "expFertilityLbl": "Jintüi Fecundidad:",
    "expCoverageLbl": "Ayatawaa Cobertura:",
    "expInactionLbl": "Juyakai Walawaa Chinkay Costo:",
    "expPriorityLbl": "Walawaa Prioridad:",
    "expDisclaimer": "Fuente: Indicadores oficiales del Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Anaa",
    "yearUnit": "/ juyakai",
    "s5Title": "7. Ashajawaa: 5 Achuntaji",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 atijawaa.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Akuwa'ipa Ayatawaa",
    "s8Title": "8. Pütchi je Atijawaa",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 atijawaa.",
    "fTitle": "Plataforma de Incidencia Política • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA 2025-2030.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Licencia de Uso Abierto Creative Commons BY-NC 4.0 para incidencia pública.",
    "fSafeguard": "Datos validados por comités técnicos del ORAS-CONHU y MINSA.",
    "fLawFramework": "Conforme a la Ley de Transparencia y Acceso a la Información.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Cerrar (Wayuunaiki)",
    "deepModalTitlePrefix": "Atijawaa Sustento • ",
    "legDemandLabel": "Akuwa'ipa Achuntaa",
    "deepSecEvidenceTitle": "Shiimüin Atijawaa je Estadísticas",
    "deepSecGovTitle": "Akuwa'ipa je REMSAA",
    "deepSecGovDesc": "PLANEA 2025-2030 je REMSAA pütchi.",
    "deepSecEconTitle": "Walawaa Chinkay (UNFPA / MEF)",
    "deepSecRoiTitle": "Walawaa Awana (ROI 7:1) je Walawaa Chinkay",
    "deepSecRoiDesc": "1 walawaata 7 walawaa awana.",
    "deepSecDemandTitle": "Apalirawaa Achuntaa:",
    "deepSecRoadmapTitle": "Congreso je Ministerio Wopü:",
    "deepSecRoadmapDesc": "Ley de Presupuesto walawaa churañ.",
    "sciModalTitle": "Evidencia Científica & Marco Legal (Wayuunaiki)",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Evidencia Sanitaria (Wayuunaiki)",
    "sciSec1Desc": "15 años <strong>5x riesgo muerte materna</strong> (Wayuunaiki).",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Impacto Fiscal MILENA (Wayuunaiki)",
    "sciSec2Desc": "0.25% - 1.0% PBI (Wayuunaiki).",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. ROI 7:1 (Wayuunaiki)",
    "sciSec3Desc": "1 -> 7 ahorro social (Wayuunaiki).",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Protección Niñez (Wayuunaiki)",
    "sciSec4Desc": "Código Penal & Derechos Humanos (Wayuunaiki).",
    "sciCloseBtn": "Cerrar / Wayuunaiki",
    "sumModalTitle": "Ficha Técnica Ejecutiva (Wayuunaiki)",
    "sumHeaderBadge": "RESUMEN EJECUTIVO CONGRESO & MEF (Wayuunaiki)",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 años cero gestaciones 2030 (Wayuunaiki).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7:1 (Wayuunaiki).",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "1.0% PIB (Wayuunaiki).",
    "sumGrid4Lbl": "Respaldo Legal:",
    "sumGrid4Val": "Código Penal (Wayuunaiki).",
    "sumDemandsTitle": "Demandas Clave de Política Pública (Wayuunaiki):",
    "sumCloseBtn": "Cerrar / Wayuunaiki",
    "countryModalTitle": "Seleccione un País de la Región Andina",
    "countryModalDesc": "Explore los datos e indicadores del Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Ver Versión",
    "countryCloseBtn": "Cerrar Selector",
    "planeaModalTitle": "Marco Matriz PLANEA 2025-2030 (Wayuunaiki)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Meta 2030 (Wayuunaiki)",
    "planeaSec1Desc": "6 países TEFA • <strong>15 años cero tolerancia</strong> 2030 (Wayuunaiki).",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 (Wayuunaiki)",
    "planeaSec2Desc": "6 Ministerios de Salud acuerdo vinculante (Wayuunaiki).",
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
    "planeaCloseBtn": "Cerrar / Wayuunaiki",
    "regionalModalTitle": "Marco Regional (Wayuunaiki)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA 15 Países (Wayuunaiki)",
    "regionalSec1Desc": "UNFPA <strong>USD 13,538 Millones</strong> (Wayuunaiki).",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. AA-HA! OPS/OMS (Wayuunaiki)",
    "regionalSec2Desc": "LARC & EIS (Wayuunaiki).",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta de Evaluación Rápida en Violencia Sexual (OPS)",
    "regionalSec3Desc": "Protocolos de profilaxis post-exposición (PEP), anticoncepción de emergencia (AOE), y soporte psicosocial inmediato en el primer nivel de atención para niñas y adolescentes sobrevivientes.",
    "regionalCloseBtn": "Cerrar / Wayuunaiki",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "EXTREMO RIESGO",
    "expHighRisk": "ALTO RIESGO",
    "expModerateRisk": "MEDIO RIESGO",
    "expCriticalGap": "BRECHA CRÍTICA",
    "expAccreditedUnits": "Ayatawaa Wasikuna",
    "expPerYear": "M/juyakai",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Mmapa'a PBI",
    "riskExtreme": "Extremo Riesgo",
    "riskVeryHigh": "Miyo'u Riesgo",
    "riskHigh": "Miyo'u Riesgo",
    "riskModerate": "Riesgo",
    "gapCritical": "Brecha Crítica",
    "gapSevere": "Brecha Severa",
    "gapHigh": "Brecha Miyo'u",
    "gapModerate": "Brecha Media"
  },
  "wra": {
    "langName": "Warao",
    "skipLink": "Saltar al contenido principal",
    "endorsedBy": "Con el aval de:",
    "countryBarLbl": "Territorio Andino:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Modo Claro",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Modo Oscuro",
    "optgroupOther": "── Otras Lenguas Andinas ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino Iboma Asidaja Sanuka tura Aribo",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú tura Venezuela Min. Salud aribo. <strong>15 wata sanuka cero tolerancia</strong> iboma asidaja.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metas Miatu (6 Aribo)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "SANUKA ARIBO",
    "regionalCardTitle": "MILENA tura AA-HA! Nomewitu",
    "regionalCardDesc": "UNFPA MILENA 15 nomewitu (<strong>USD 13,538 Millones</strong> aribo chinkay), Guía AA-HA! tura iboma kuwan.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Nomewitu Miatu",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Aribo Yachay Miatu",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Governo Aribo Miatu",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Miatu",
    "heroCardTitle": "Andes Governo Politica",
    "heroCardBadge": "MAJAPU MIATU!",
    "heroCardDesc": "Majapu miatu Congreso tura MEF aribo pakananaka",
    "s1Title": "1. Namonika Aribo tura Obonoba",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 aribo nomewitu.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Katukatanemew aribo? Aribo Nomewitu Miatu",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Katukatanemew aribo? Aribo Nomewitu Miatu",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Katukatanemew aribo? Aribo Nomewitu Miatu",
    "s2Title": "2. Aribo Chinkay tura Yakeraja (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 aribo nomewitu.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> IMPACTO FISCAL NEGATIVO",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Aribo Chinkay Miatu",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> EFICIENCIA DEL GASTO PÚBLICO",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Aribo Yakeraja Miatu",
    "scTitle": "3. Aribo Kokotune tura Hanoko",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 aribo nomewitu.",
    "chart1Title": "3. Aribo Kokotune tura Hanoko • Warao",
    "chart1Sub": "PLANEA 2025-2030 • Warao",
    "chart2Title": "3. Aribo Kokotune tura Hanoko • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Warao",
    "g2Lbl1": "Warao [OK]",
    "g2Lbl2": "Warao [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Warao",
    "sfcTitle": "4. Nomewitu: Kobo vs. Namonika",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 aribo nomewitu.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Kobo vs. Namonika (Warao)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Namonika Aribo tura Obonoba (PLANEA)",
    "fc1MythTitle": "\"Hanoko yachay iboma emtiki.\"",
    "fc1MythDesc": "Kobo EIS jark'anaji.",
    "fc1EvTitle": "Aribo Nomewitu:",
    "fc1EvDesc": "EIS 1.5 wata iboma asidaja sanuka.",
    "fc2MythTitle": "\"Iboma aribo chinkasqawa.\"",
    "fc2MythDesc": "Kobo aribo kokotune.",
    "fc2EvTitle": "Aribo Nomewitu:",
    "fc2EvDesc": "MILENA 1 aribo 7 aribo yakeraja (ROI 7:1).",
    "fc3MythTitle": "\"15 wata sanuka hanokollapaq.\"",
    "fc3MythDesc": "Kobo abusota pakanaji.",
    "fc3EvTitle": "Aribo Nomewitu:",
    "fc3EvDesc": "15 wata sanuka violación delito nomewitu.",
    "s3Title": "5. Governo Aribo tura Obonoba",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 aribo nomewitu.",
    "s4Title": "6. Aribo Miatu tura Kokotune",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 aribo nomewitu.",
    "expLblRegion": "Territorio / Departamento:",
    "expFertilityLbl": "Iboma Fecundidad:",
    "expCoverageLbl": "Hanoko Cobertura:",
    "expInactionLbl": "Wata Aribo Chinkay Costo:",
    "expPriorityLbl": "Aribo Prioridad:",
    "expDisclaimer": "Fuente: Indicadores oficiales del Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Sanuka",
    "yearUnit": "/ wata",
    "s5Title": "7. Governo Puka: 5 Aribo Sanuka",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 aribo nomewitu.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Governo Aribo Rurana",
    "s8Title": "8. Aribo Nomewitu",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 aribo nomewitu.",
    "fTitle": "Plataforma de Incidencia Política • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA 2025-2030.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Licencia de Uso Abierto Creative Commons BY-NC 4.0 para incidencia pública.",
    "fSafeguard": "Datos validados por comités técnicos del ORAS-CONHU y MINSA.",
    "fLawFramework": "Conforme a la Ley de Transparencia y Acceso a la Información.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Cerrar (Warao)",
    "deepModalTitlePrefix": "Aribo Sustento • ",
    "legDemandLabel": "Governo Aribo",
    "deepSecEvidenceTitle": "Aribo Nomewitu",
    "deepSecGovTitle": "Governo Aribo je REMSAA",
    "deepSecGovDesc": "PLANEA 2025-2030 je REMSAA aribo.",
    "deepSecEconTitle": "Aribo Chinkay (UNFPA / MEF)",
    "deepSecRoiTitle": "Aribo Yakeraja (ROI 7:1)",
    "deepSecRoiDesc": "1 aribo 7 aribo yakeraja.",
    "deepSecDemandTitle": "Governo Jerure:",
    "deepSecRoadmapTitle": "Congreso je Ministerio Nami:",
    "deepSecRoadmapDesc": "Ley de Presupuesto aribo.",
    "sciModalTitle": "Evidencia Científica & Marco Legal (Warao)",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Evidencia Sanitaria (Warao)",
    "sciSec1Desc": "15 años <strong>5x riesgo muerte materna</strong> (Warao).",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Impacto Fiscal MILENA (Warao)",
    "sciSec2Desc": "0.25% - 1.0% PBI (Warao).",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. ROI 7:1 (Warao)",
    "sciSec3Desc": "1 -> 7 ahorro social (Warao).",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Protección Niñez (Warao)",
    "sciSec4Desc": "Código Penal & Derechos Humanos (Warao).",
    "sciCloseBtn": "Cerrar / Warao",
    "sumModalTitle": "Ficha Técnica Ejecutiva (Warao)",
    "sumHeaderBadge": "RESUMEN EJECUTIVO CONGRESO & MEF (Warao)",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 años cero gestaciones 2030 (Warao).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7:1 (Warao).",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "1.0% PIB (Warao).",
    "sumGrid4Lbl": "Respaldo Legal:",
    "sumGrid4Val": "Código Penal (Warao).",
    "sumDemandsTitle": "Demandas Clave de Política Pública (Warao):",
    "sumCloseBtn": "Cerrar / Warao",
    "countryModalTitle": "Seleccione un País de la Región Andina",
    "countryModalDesc": "Explore los datos e indicadores del Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Ver Versión",
    "countryCloseBtn": "Cerrar Selector",
    "planeaModalTitle": "Marco Matriz PLANEA 2025-2030 (Warao)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Meta 2030 (Warao)",
    "planeaSec1Desc": "6 países TEFA • <strong>15 años cero tolerancia</strong> 2030 (Warao).",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 (Warao)",
    "planeaSec2Desc": "6 Ministerios de Salud acuerdo vinculante (Warao).",
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
    "planeaCloseBtn": "Cerrar / Warao",
    "regionalModalTitle": "Marco Regional (Warao)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA 15 Países (Warao)",
    "regionalSec1Desc": "UNFPA <strong>USD 13,538 Millones</strong> (Warao).",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. AA-HA! OPS/OMS (Warao)",
    "regionalSec2Desc": "LARC & EIS (Warao).",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta de Evaluación Rápida en Violencia Sexual (OPS)",
    "regionalSec3Desc": "Protocolos de profilaxis post-exposición (PEP), anticoncepción de emergencia (AOE), y soporte psicosocial inmediato en el primer nivel de atención para niñas y adolescentes sobrevivientes.",
    "regionalCloseBtn": "Cerrar / Warao",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "EXTREMO RIESGO",
    "expHighRisk": "ALTO RIESGO",
    "expModerateRisk": "MEDIO RIESGO",
    "expCriticalGap": "BRECHA CRÍTICA",
    "expAccreditedUnits": "Hanoko Acreditada",
    "expPerYear": "M/wata",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Aribo PBI",
    "riskExtreme": "Extremo Riesgo",
    "riskVeryHigh": "Aribo Riesgo",
    "riskHigh": "Aribo Riesgo",
    "riskModerate": "Riesgo",
    "gapCritical": "Brecha Crítica",
    "gapSevere": "Brecha Severa",
    "gapHigh": "Brecha Alta",
    "gapModerate": "Brecha Media"
  },
  "pmn": {
    "langName": "Pemón",
    "skipLink": "Saltar al contenido principal",
    "endorsedBy": "Con el aval de:",
    "countryBarLbl": "Territorio Andino:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Modo Claro",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Modo Oscuro",
    "optgroupOther": "── Otras Lenguas Andinas ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino Murekon Pimanse Kuwan tura Mai",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú tura Venezuela Min. Salud mai. <strong>15 wata murekon cero tolerancia</strong> pimanse kuwan.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metas Enpan (6 Mai)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "PÖKENON",
    "regionalCardTitle": "MILENA tura AA-HA! Putö Mai",
    "regionalCardDesc": "UNFPA MILENA 15 putö (<strong>USD 13,538 Millones</strong> mai chinkay), Guía AA-HA! tura murekon kuwan.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Putö Enpan",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Mai Yachay Enpan",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Politica Mai Enpan",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Enpan",
    "heroCardTitle": "Andes Politica Mai",
    "heroCardBadge": "YENA ENPAN!",
    "heroCardDesc": "Yena enpan Congreso tura MEF mai pakananaka",
    "s1Title": "1. Putö Mai tura Murekon Mai",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 mai putö.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Itepöka mai? Mai Inpeke Enpan",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Itepöka mai? Mai Inpeke Enpan",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Itepöka mai? Mai Inpeke Enpan",
    "s2Title": "2. Mai Chinkay tura Pöke (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 mai putö.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> IMPACTO FISCAL NEGATIVO",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Mai Chinkay Enpan",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> EFICIENCIA DEL GASTO PÚBLICO",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Mai Pöke Enpan",
    "scTitle": "3. Mai Pata pata tura Yen",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 mai putö.",
    "chart1Title": "3. Mai Pata pata tura Yen • Pemón",
    "chart1Sub": "PLANEA 2025-2030 • Pemón",
    "chart2Title": "3. Mai Pata pata tura Yen • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Pemón",
    "g2Lbl1": "Pemón [OK]",
    "g2Lbl2": "Pemón [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Pemón",
    "sfcTitle": "4. Inpeke: Kuta vs. Putö",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 mai putö.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Kuta vs. Putö (Pemón)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Putö Mai tura Murekon Mai (PLANEA)",
    "fc1MythTitle": "\"Yen yachay murekon emtiki.\"",
    "fc1MythDesc": "Kuta EIS jark'anaji.",
    "fc1EvTitle": "Mai Inpeke:",
    "fc1EvDesc": "EIS 1.5 wata murekon pimanse kuwan.",
    "fc2MythTitle": "\"Murekon mai chinkasqawa.\"",
    "fc2MythDesc": "Kuta mai kokotune.",
    "fc2EvTitle": "Mai Inpeke:",
    "fc2EvDesc": "MILENA 1 mai 7 mai pöke (ROI 7:1).",
    "fc3MythTitle": "\"15 wata murekon yenllapaq.\"",
    "fc3MythDesc": "Kuta abusota pakanaji.",
    "fc3EvTitle": "Mai Inpeke:",
    "fc3EvDesc": "15 wata murekon violación delito inpeke.",
    "s3Title": "5. Mai Pökenon tura Teposankon",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 mai putö.",
    "s4Title": "6. Mai Enpan tura Pata pata",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 mai putö.",
    "expLblRegion": "Territorio / Departamento:",
    "expFertilityLbl": "Murekon Fecundidad:",
    "expCoverageLbl": "Yen Cobertura:",
    "expInactionLbl": "Wata Mai Chinkay Costo:",
    "expPriorityLbl": "Mai Prioridad:",
    "expDisclaimer": "Fuente: Indicadores oficiales del Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Kuwan",
    "yearUnit": "/ wata",
    "s5Title": "7. Mai Kuwan: 5 Mai Murekon",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 mai putö.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Mai Teposankon Rurana",
    "s8Title": "8. Mai Putö Kure",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 mai putö.",
    "fTitle": "Plataforma de Incidencia Política • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA 2025-2030.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Licencia de Uso Abierto Creative Commons BY-NC 4.0 para incidencia pública.",
    "fSafeguard": "Datos validados por comités técnicos del ORAS-CONHU y MINSA.",
    "fLawFramework": "Conforme a la Ley de Transparencia y Acceso a la Información.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Cerrar (Pemón)",
    "deepModalTitlePrefix": "Mai Sustento • ",
    "legDemandLabel": "Mai Teposankon",
    "deepSecEvidenceTitle": "Mai Inpeke",
    "deepSecGovTitle": "Politica Mai je REMSAA",
    "deepSecGovDesc": "PLANEA 2025-2030 je REMSAA mai.",
    "deepSecEconTitle": "Mai Chinkay (UNFPA / MEF)",
    "deepSecRoiTitle": "Mai Pöke (ROI 7:1)",
    "deepSecRoiDesc": "1 mai 7 mai pöke.",
    "deepSecDemandTitle": "Mai Teposankon:",
    "deepSecRoadmapTitle": "Congreso je Ministerio Asan:",
    "deepSecRoadmapDesc": "Ley de Presupuesto mai.",
    "sciModalTitle": "Evidencia Científica & Marco Legal (Pemón)",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Evidencia Sanitaria (Pemón)",
    "sciSec1Desc": "15 años <strong>5x riesgo muerte materna</strong> (Pemón).",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Impacto Fiscal MILENA (Pemón)",
    "sciSec2Desc": "0.25% - 1.0% PBI (Pemón).",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. ROI 7:1 (Pemón)",
    "sciSec3Desc": "1 -> 7 ahorro social (Pemón).",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Protección Niñez (Pemón)",
    "sciSec4Desc": "Código Penal & Derechos Humanos (Pemón).",
    "sciCloseBtn": "Cerrar / Pemón",
    "sumModalTitle": "Ficha Técnica Ejecutiva (Pemón)",
    "sumHeaderBadge": "RESUMEN EJECUTIVO CONGRESO & MEF (Pemón)",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 años cero gestaciones 2030 (Pemón).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7:1 (Pemón).",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "1.0% PIB (Pemón).",
    "sumGrid4Lbl": "Respaldo Legal:",
    "sumGrid4Val": "Código Penal (Pemón).",
    "sumDemandsTitle": "Demandas Clave de Política Pública (Pemón):",
    "sumCloseBtn": "Cerrar / Pemón",
    "countryModalTitle": "Seleccione un País de la Región Andina",
    "countryModalDesc": "Explore los datos e indicadores del Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Ver Versión",
    "countryCloseBtn": "Cerrar Selector",
    "planeaModalTitle": "Marco Matriz PLANEA 2025-2030 (Pemón)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Meta 2030 (Pemón)",
    "planeaSec1Desc": "6 países TEFA • <strong>15 años cero tolerancia</strong> 2030 (Pemón).",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 (Pemón)",
    "planeaSec2Desc": "6 Ministerios de Salud acuerdo vinculante (Pemón).",
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
    "planeaCloseBtn": "Cerrar / Pemón",
    "regionalModalTitle": "Marco Regional (Pemón)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA 15 Países (Pemón)",
    "regionalSec1Desc": "UNFPA <strong>USD 13,538 Millones</strong> (Pemón).",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. AA-HA! OPS/OMS (Pemón)",
    "regionalSec2Desc": "LARC & EIS (Pemón).",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta de Evaluación Rápida en Violencia Sexual (OPS)",
    "regionalSec3Desc": "Protocolos de profilaxis post-exposición (PEP), anticoncepción de emergencia (AOE), y soporte psicosocial inmediato en el primer nivel de atención para niñas y adolescentes sobrevivientes.",
    "regionalCloseBtn": "Cerrar / Pemón",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "EXTREMO RIESGO",
    "expHighRisk": "ALTO RIESGO",
    "expModerateRisk": "MEDIO RIESGO",
    "expCriticalGap": "BRECHA CRÍTICA",
    "expAccreditedUnits": "Yen Acreditada",
    "expPerYear": "M/wata",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Mai PBI",
    "riskExtreme": "Extremo Riesgo",
    "riskVeryHigh": "Mai Riesgo",
    "riskHigh": "Mai Riesgo",
    "riskModerate": "Riesgo",
    "gapCritical": "Brecha Crítica",
    "gapSevere": "Brecha Severa",
    "gapHigh": "Brecha Alta",
    "gapModerate": "Brecha Media"
  },
  "pbb": {
    "langName": "Nasa Yuwe",
    "skipLink": "Saltar al contenido principal",
    "endorsedBy": "Con el aval de:",
    "countryBarLbl": "Territorio Andino:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Modo Claro",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Modo Oscuro",
    "optgroupOther": "── Otras Lenguas Andinas ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino Ku'j We'sx Thegnikha's tura Yu'çeçx",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú tura Venezuela Min. Salud yu'we. <strong>15 vxite' cero tolerancia</strong> ku'j we'sx thegnikha's.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metas Theg (6 Çxhab)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "NXUSXI WE'SX",
    "regionalCardTitle": "MILENA tura AA-HA! Yu'we Theg",
    "regionalCardDesc": "UNFPA MILENA 15 yu'we (<strong>USD 13,538 Millones</strong> ku'j nxusxi), Guía AA-HA! tura eç thegnikha's.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Yu'we Theg",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Çxhab Yu'we Theg",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Yu'çeçx Ku'j Theg",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Theg",
    "heroCardTitle": "Andes Yu'çeçx Politica",
    "heroCardBadge": "KAY ÇXHAÇXHA!",
    "heroCardDesc": "Kay çxhaçxha Congreso tura MEF yu'we thegnikha's",
    "s1Title": "1. Yu'çeçx Thegnikha's tura Yu'we",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 yu'çeçx.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Kim' yu'we theg? Çxhaçxha Yu'we Theg",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Kim' yu'we theg? Çxhaçxha Yu'we Theg",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Kim' yu'we theg? Çxhaçxha Yu'we Theg",
    "s2Title": "2. Ku'j Nxusxi tura Çxhaçxha (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 yu'çeçx.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> IMPACTO FISCAL NEGATIVO",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Ku'j Nxusxi Theg",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> EFICIENCIA DEL GASTO PÚBLICO",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Ku'j Çxhaçxha Theg",
    "scTitle": "3. Çxhab Pta'sçxa tura Yat",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 yu'çeçx.",
    "chart1Title": "3. Çxhab Pta'sçxa tura Yat • Nasa Yuwe",
    "chart1Sub": "PLANEA 2025-2030 • Nasa Yuwe",
    "chart2Title": "3. Çxhab Pta'sçxa tura Yat • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Nasa Yuwe",
    "g2Lbl1": "Nasa Yuwe [OK]",
    "g2Lbl2": "Nasa Yuwe [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Nasa Yuwe",
    "sfcTitle": "4. Çxhaçxha Yu'we: Kaçx vs. Thegnikha's",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 yu'çeçx.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Kaçx vs. Thegnikha's (Nasa Yuwe)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Yu'çeçx Thegnikha's tura Yu'we (PLANEA)",
    "fc1MythTitle": "\"Yat yachay ku'j we'sx emtiki.\"",
    "fc1MythDesc": "Kaçx EIS jark'anaji.",
    "fc1EvTitle": "Çxhaçxha Yu'we:",
    "fc1EvDesc": "EIS 1.5 vxite' ku'j we'sx thegnikha's.",
    "fc2MythTitle": "\"Ku'j we'sx ku'j chinkasqawa.\"",
    "fc2MythDesc": "Kaçx ku'j yu'we.",
    "fc2EvTitle": "Çxhaçxha Yu'we:",
    "fc2EvDesc": "MILENA 1 ku'j 7 ku'j çxhaçxha (ROI 7:1).",
    "fc3MythTitle": "\"15 vxite' ku'j we'sx yatllapaq.\"",
    "fc3MythDesc": "Kaçx abusota pakanaji.",
    "fc3EvTitle": "Çxhaçxha Yu'we:",
    "fc3EvDesc": "15 vxite' ku'j we'sx violación delito theg.",
    "s3Title": "5. Yu'çeçx We'sx tura Çxhab",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 yu'çeçx.",
    "s4Title": "6. Çxhab Theg tura Pta'sçxa",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 yu'çeçx.",
    "expLblRegion": "Territorio / Departamento:",
    "expFertilityLbl": "Ku'j We'sx Fecundidad:",
    "expCoverageLbl": "Yat Cobertura:",
    "expInactionLbl": "Vxite' Ku'j Nxusxi Costo:",
    "expPriorityLbl": "Ku'j Prioridad:",
    "expDisclaimer": "Fuente: Indicadores oficiales del Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Çxhaçxha",
    "yearUnit": "/ vxite'",
    "s5Title": "7. Yu'çeçx Ku'j: 5 Yu'we Theg",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 yu'çeçx.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Yu'çeçx Ku'j Rurana",
    "s8Title": "8. Yu'we Thegnikha's",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 yu'çeçx.",
    "fTitle": "Plataforma de Incidencia Política • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA 2025-2030.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Licencia de Uso Abierto Creative Commons BY-NC 4.0 para incidencia pública.",
    "fSafeguard": "Datos validados por comités técnicos del ORAS-CONHU y MINSA.",
    "fLawFramework": "Conforme a la Ley de Transparencia y Acceso a la Información.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Cerrar (Nasa Yuwe)",
    "deepModalTitlePrefix": "Yu'we Sustento • ",
    "legDemandLabel": "Yu'çeçx Yu'we",
    "deepSecEvidenceTitle": "Çxhaçxha Yu'we",
    "deepSecGovTitle": "Yu'çeçx Yu'we je REMSAA",
    "deepSecGovDesc": "PLANEA 2025-2030 je REMSAA yu'we.",
    "deepSecEconTitle": "Ku'j Nxusxi (UNFPA / MEF)",
    "deepSecRoiTitle": "Ku'j Çxhaçxha (ROI 7:1)",
    "deepSecRoiDesc": "1 ku'j 7 ku'j çxhaçxha.",
    "deepSecDemandTitle": "Yu'çeçx Demanda:",
    "deepSecRoadmapTitle": "Congreso je Ministerio Kiwe:",
    "deepSecRoadmapDesc": "Ley de Presupuesto ku'j.",
    "sciModalTitle": "Evidencia Científica & Marco Legal (Nasa Yuwe)",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Evidencia Sanitaria (Nasa Yuwe)",
    "sciSec1Desc": "15 años <strong>5x riesgo muerte materna</strong> (Nasa Yuwe).",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Impacto Fiscal MILENA (Nasa Yuwe)",
    "sciSec2Desc": "0.25% - 1.0% PBI (Nasa Yuwe).",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. ROI 7:1 (Nasa Yuwe)",
    "sciSec3Desc": "1 -> 7 ahorro social (Nasa Yuwe).",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Protección Niñez (Nasa Yuwe)",
    "sciSec4Desc": "Código Penal & Derechos Humanos (Nasa Yuwe).",
    "sciCloseBtn": "Cerrar / Nasa Yuwe",
    "sumModalTitle": "Ficha Técnica Ejecutiva (Nasa Yuwe)",
    "sumHeaderBadge": "RESUMEN EJECUTIVO CONGRESO & MEF (Nasa Yuwe)",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 años cero gestaciones 2030 (Nasa Yuwe).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7:1 (Nasa Yuwe).",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "1.0% PIB (Nasa Yuwe).",
    "sumGrid4Lbl": "Respaldo Legal:",
    "sumGrid4Val": "Código Penal (Nasa Yuwe).",
    "sumDemandsTitle": "Demandas Clave de Política Pública (Nasa Yuwe):",
    "sumCloseBtn": "Cerrar / Nasa Yuwe",
    "countryModalTitle": "Seleccione un País de la Región Andina",
    "countryModalDesc": "Explore los datos e indicadores del Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Ver Versión",
    "countryCloseBtn": "Cerrar Selector",
    "planeaModalTitle": "Marco Matriz PLANEA 2025-2030 (Nasa Yuwe)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Meta 2030 (Nasa Yuwe)",
    "planeaSec1Desc": "6 países TEFA • <strong>15 años cero tolerancia</strong> 2030 (Nasa Yuwe).",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 (Nasa Yuwe)",
    "planeaSec2Desc": "6 Ministerios de Salud acuerdo vinculante (Nasa Yuwe).",
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
    "planeaCloseBtn": "Cerrar / Nasa Yuwe",
    "regionalModalTitle": "Marco Regional (Nasa Yuwe)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA 15 Países (Nasa Yuwe)",
    "regionalSec1Desc": "UNFPA <strong>USD 13,538 Millones</strong> (Nasa Yuwe).",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. AA-HA! OPS/OMS (Nasa Yuwe)",
    "regionalSec2Desc": "LARC & EIS (Nasa Yuwe).",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta de Evaluación Rápida en Violencia Sexual (OPS)",
    "regionalSec3Desc": "Protocolos de profilaxis post-exposición (PEP), anticoncepción de emergencia (AOE), y soporte psicosocial inmediato en el primer nivel de atención para niñas y adolescentes sobrevivientes.",
    "regionalCloseBtn": "Cerrar / Nasa Yuwe",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "EXTREMO RIESGO",
    "expHighRisk": "ALTO RIESGO",
    "expModerateRisk": "MEDIO RIESGO",
    "expCriticalGap": "BRECHA CRÍTICA",
    "expAccreditedUnits": "Yat Acreditada",
    "expPerYear": "M/vxite'",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Ku'j PBI",
    "riskExtreme": "Extremo Riesgo",
    "riskVeryHigh": "Çxhaçxha Riesgo",
    "riskHigh": "Çxhaçxha Riesgo",
    "riskModerate": "Riesgo",
    "gapCritical": "Brecha Crítica",
    "gapSevere": "Brecha Severa",
    "gapHigh": "Brecha Alta",
    "gapModerate": "Brecha Media"
  },
  "emp": {
    "langName": "Emberá",
    "skipLink": "Kʉ̃ria druade wãkua",
    "endorsedBy": "Kʉ̃ria Dewara:",
    "countryBarLbl": "Andes Drua:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Umada Modo",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Pãima Modo",
    "optgroupOther": "── Dewara Andes Bedéa ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino Wẽra Warrade tura Kʉ̃rakwa Druade",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú tura Venezuela Min. Salud bedéa <strong>15 warrarãde cero tolerancia</strong> wẽra warrade.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metas Akʉi (6 Druade)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "KƲ̃RIA DEWARA",
    "regionalCardTitle": "MILENA tura AA-HA! Bedéa Kʉ̃ria",
    "regionalCardDesc": "UNFPA MILENA 15 estudios (<strong>USD 13,538 Millones</strong> pharatade chinkay), Guía AA-HA! tura jark'amu.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Bedéa Akʉi",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Drua Yachay Akʉi",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Bedéa Qillqa Akʉi",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Akʉi",
    "heroCardTitle": "Andes Bedéa Politica",
    "heroCardBadge": "NÃWE AKɄI!",
    "heroCardDesc": "Nãwe akʉi Congreso tura MEF bedéa kichama",
    "s1Title": "1. Bedéa Kʉ̃ria tura Wẽra Warrade",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 bedéa kʉ̃ria.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Kãrãita bedéama? Bedéa Wãrĩ Akʉi",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Kãrãita bedéama? Bedéa Wãrĩ Akʉi",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Kãrãita bedéama? Bedéa Wãrĩ Akʉi",
    "s2Title": "2. Pharatade Chinkay tura Bia (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 bedéa kʉ̃ria.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> PHARATADE CHINKAY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Pharatade Akʉi",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> EFICIENCIA PHARATADE",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Pharatade Bia Akʉi",
    "scTitle": "3. Drua Chikan tura Dega",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 bedéa kʉ̃ria.",
    "chart1Title": "3. Drua Chikan tura Dega • Emberá",
    "chart1Sub": "PLANEA 2025-2030 • Emberá",
    "chart2Title": "3. Drua Chikan tura Dega • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Emberá",
    "g2Lbl1": "Emberá [OK]",
    "g2Lbl2": "Emberá [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Emberá",
    "sfcTitle": "4. Wãrĩ: Kũra vs. Bedéa",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 bedéa kʉ̃ria.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Kũra vs. Bedéa (Emberá)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Bedéa Kʉ̃ria tura Wẽra Warrade (PLANEA)",
    "fc1MythTitle": "\"Dega yachay wẽra warrade emtiki.\"",
    "fc1MythDesc": "Kũra EIS jark'ama.",
    "fc1EvTitle": "Bedéa Wãrĩ:",
    "fc1EvDesc": "EIS 1.5 warrarã wẽra warrade bia.",
    "fc2MythTitle": "\"Warrarã pharatade chinkasqawa.\"",
    "fc2MythDesc": "Kũra pharatade bedéa.",
    "fc2EvTitle": "Bedéa Wãrĩ:",
    "fc2EvDesc": "MILENA 1 pharatade 7 pharatade bia (ROI 7:1).",
    "fc3MythTitle": "\"15 warrarãde degallapaq.\"",
    "fc3MythDesc": "Kũra abusota pakama.",
    "fc3EvTitle": "Bedéa Wãrĩ:",
    "fc3EvDesc": "15 warrarãde violación delito bedéa.",
    "s3Title": "5. Bedéa Druade tura Warrarã",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 bedéa kʉ̃ria.",
    "s4Title": "6. Drua Akʉi tura Chikan",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 bedéa kʉ̃ria.",
    "expLblRegion": "Drua / Departamento:",
    "expFertilityLbl": "Wẽra Warrade Fecundidad:",
    "expCoverageLbl": "Dega Cobertura:",
    "expInactionLbl": "Pharatade Chinkay Costo:",
    "expPriorityLbl": "Pharatade Prioridad:",
    "expDisclaimer": "Fuente: Indicadores oficiales Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Bia",
    "yearUnit": "/ warrarã",
    "s5Title": "7. Bedéa Pharatade: 5 Kʉ̃ria",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 bedéa kʉ̃ria.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Bedéa Druade Rurama",
    "s8Title": "8. Bedéa Kʉ̃ria Druade",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 bedéa kʉ̃ria.",
    "fTitle": "Plataforma de Bedéa Politica • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Licencia de Uso Abierto Creative Commons BY-NC 4.0.",
    "fSafeguard": "Datos validados por comités técnicos de ORAS-CONHU.",
    "fLawFramework": "Conforme a la Ley de Transparencia y Acceso a la Información.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Tsiwama",
    "deepModalTitlePrefix": "Bedéa Sustento • ",
    "legDemandLabel": "Bedéa Druade",
    "deepSecEvidenceTitle": "Bedéa Wãrĩ tura Estadísticas",
    "deepSecGovTitle": "Bedéa Druade tura REMSAA",
    "deepSecGovDesc": "PLANEA 2025-2030 tura REMSAA acuerdos bedéa.",
    "deepSecEconTitle": "Pharatade Chinkay (UNFPA / MEF)",
    "deepSecRoiTitle": "Pharatade Bia (ROI 7:1) tura Chinkay",
    "deepSecRoiDesc": "1 pharatade 7 pharatade bia.",
    "deepSecDemandTitle": "Bedéa Incidencia Politica:",
    "deepSecRoadmapTitle": "Congreso tura Ministerio Ñan:",
    "deepSecRoadmapDesc": "Ley de Presupuesto pharatade churañ.",
    "sciModalTitle": "Bedéa Evidencia tura Marco Legal",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Dega Evidencia (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 warrarãde <strong>5 veces mayor riesgo</strong> wẽra warrade. Código Penal abusomanta.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Pharatade MILENA (UNFPA)",
    "sciSec2Desc": "0.25% tura 1.0% PBI pharatade chinkay.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Pharatade Bia (ROI 7:1)",
    "sciSec3Desc": "1 pharatade 7 pharatade bia.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Warrarã Bedéa",
    "sciSec4Desc": "Druade warrarã jark'amu pharatade.",
    "sciCloseBtn": "Bedéa Tsiwama",
    "sumModalTitle": "Ficha Técnica Ejecutiva Decisores",
    "sumHeaderBadge": "CONGRESO TURA MEF BEDÉA",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 warrarãde cero tolerancia 2030 (PLANEA).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7:1 pharatade anaa.",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "1.0% PIB pharatade chinkay.",
    "sumGrid4Lbl": "Respaldo Legal:",
    "sumGrid4Val": "Código Penal tura Derechos Humanos.",
    "sumDemandsTitle": "Demandas Clave de Política Pública:",
    "sumCloseBtn": "Bia / Tsiwama",
    "countryModalTitle": "Druade Akʉi",
    "countryModalDesc": "Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Akʉi",
    "countryCloseBtn": "Jist'antaña",
    "planeaModalTitle": "Marco Matriz PLANEA 2025-2030 (6 Druade)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Meta Estratégica 2030 (PLANEA)",
    "planeaSec1Desc": "6 druade TEFA wẽra warrade tura <strong>15 warrarãde cero tolerancia</strong> 2030 druade.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 Bedéa",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú tura Venezuela Min. Salud pharatade bedéa.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. 7 Bedéa Kʉ̃ria",
    "planeaLp": [
      "<strong>LP1:</strong> Wẽra warrade bia tura dega.",
      "<strong>LP2:</strong> EIS bedéa druade.",
      "<strong>LP3:</strong> Warrarã dega kʉ̃ria.",
      "<strong>LP4:</strong> Kʉ̃rakwa druade jark'amu.",
      "<strong>LP5:</strong> Warrarã debarade.",
      "<strong>LP6:</strong> Bedéa datonaka.",
      "<strong>LP7:</strong> Pharatade kʉ̃ria (5/5)."
    ],
    "planeaCloseBtn": "Druade Tsiwama",
    "regionalModalTitle": "Regional Marco: MILENA tura AA-HA! Bedéa",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. UNFPA MILENA (15 Druade)",
    "regionalSec1Desc": "UNFPA América Latina <strong>USD 13,538 Millones</strong> pharatade chinkay.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Wẽra warrade tura LARC dega.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Warrarã Jark'amu (OPS)",
    "regionalSec3Desc": "PEP, AOE tura dega bia.",
    "regionalCloseBtn": "Regional Tsiwama",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "EXTREMO RIESGO",
    "expHighRisk": "ALTO RIESGO",
    "expModerateRisk": "MEDIO RIESGO",
    "expCriticalGap": "BRECHA CRÍTICA",
    "expAccreditedUnits": "Dega Acreditada",
    "expPerYear": "M/warrarã",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Druade PBI",
    "riskExtreme": "Extremo Riesgo",
    "riskVeryHigh": "Bia Riesgo",
    "riskHigh": "Bia Riesgo",
    "riskModerate": "Riesgo",
    "gapCritical": "Brecha Crítica",
    "gapSevere": "Brecha Severa",
    "gapHigh": "Brecha Bia",
    "gapModerate": "Brecha Media"
  },
  "ash": {
    "langName": "Asháninka",
    "skipLink": "Saltar al contenido principal",
    "endorsedBy": "Con el aval de:",
    "countryBarLbl": "Territorio Andino:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Modo Claro",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Modo Oscuro",
    "optgroupOther": "── Otras Lenguas Andinas ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino Tsimiri Koshitantsi tura Eentsite Kametsari",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú tura Venezuela Min. Salud pankotsi. <strong>15 osarentsi cero tolerancia</strong> tsimiri kametsari.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metas Amenantaji (6 Pankotsi)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "AMITAKOTANTATSIRI",
    "regionalCardTitle": "MILENA tura AA-HA! Sankenarentsi",
    "regionalCardDesc": "UNFPA MILENA 15 sankenarentsi (<strong>USD 13,538 Millones</strong> katsinkari), Guía AA-HA! tura eentsite kametsatantsi.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Sankenarentsi Amenantaji",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Pankotsi Yachay Amenantaji",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Sankenarentsi Amenantaji",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Amenantaji",
    "heroCardTitle": "Andes Incidencia Politica",
    "heroCardBadge": "JUNÍ ÑIT'IYA!",
    "heroCardDesc": "Juní ñit'iya Congreso tura MEF sankenarentsi kichantaji",
    "s1Title": "1. Eentsite Kametsari tura Sankenarentsi",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 sankenarentsi.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Paita tsikari? Sankenarentsi Kametsa Amenantaji",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Paita tsikari? Sankenarentsi Kametsa Amenantaji",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Paita tsikari? Sankenarentsi Kametsa Amenantaji",
    "s2Title": "2. Katsinkari tura Kametsa (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 sankenarentsi.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> IMPACTO FISCAL NEGATIVO",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Katsinkari Amenantaji",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> EFICIENCIA DEL GASTO PÚBLICO",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Katsinkari Kametsa Amenantaji",
    "scTitle": "3. Pankotsi Pashini tura Ruka",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 sankenarentsi.",
    "chart1Title": "3. Pankotsi Pashini tura Ruka • Asháninka",
    "chart1Sub": "PLANEA 2025-2030 • Asháninka",
    "chart2Title": "3. Pankotsi Pashini tura Ruka • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Asháninka",
    "g2Lbl1": "Asháninka [OK]",
    "g2Lbl2": "Asháninka [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Asháninka",
    "sfcTitle": "4. Kyaari: Thentsi vs. Sankenarentsi",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 sankenarentsi.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Thentsi vs. Sankenarentsi (Asháninka)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Eentsite Kametsari tura Sankenarentsi (PLANEA)",
    "fc1MythTitle": "\"Pankotsi yachay eentsite nayrt'aji.\"",
    "fc1MythDesc": "Thentsi EIS jark'anaji.",
    "fc1EvTitle": "Sankenarentsi Kametsa:",
    "fc1EvDesc": "EIS 1.5 osarentsi eentsite kametsatantsi.",
    "fc2MythTitle": "\"Eentsite katsinkari chinkasqawa.\"",
    "fc2MythDesc": "Thentsi katsinkari pankotsi.",
    "fc2EvTitle": "Sankenarentsi Kametsa:",
    "fc2EvDesc": "MILENA 1 katsinkari 7 katsinkari kametsa (ROI 7:1).",
    "fc3MythTitle": "\"15 osarentsi eentsite ayllullapaq.\"",
    "fc3MythDesc": "Thentsi abusota pakanaji.",
    "fc3EvTitle": "Sankenarentsi Kametsa:",
    "fc3EvDesc": "15 osarentsi eentsite violación delito maaroni.",
    "s3Title": "5. Eentsite Kametsatantsi tura Pankotsi",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 sankenarentsi.",
    "s4Title": "6. Pankotsi Amenantaji tura Pashini",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 sankenarentsi.",
    "expLblRegion": "Territorio / Departamento:",
    "expFertilityLbl": "Eentsite Fecundidad:",
    "expCoverageLbl": "Pankotsi Cobertura:",
    "expInactionLbl": "Osarentsi Katsinkari Chinkay:",
    "expPriorityLbl": "Katsinkari Churantsi:",
    "expDisclaimer": "Fuente: Indicadores oficiales del Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Kametsari",
    "yearUnit": "/ osarentsi",
    "s5Title": "7. Sankenarentsi: 5 Eentsite Katsinkari",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 sankenarentsi.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Sankenarentsi Kametsari",
    "s8Title": "8. Sankenarentsi Kametsa",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 sankenarentsi.",
    "fTitle": "Plataforma de Incidencia Política • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA 2025-2030.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Licencia de Uso Abierto Creative Commons BY-NC 4.0 para incidencia pública.",
    "fSafeguard": "Datos validados por comités técnicos del ORAS-CONHU y MINSA.",
    "fLawFramework": "Conforme a la Ley de Transparencia y Acceso a la Información.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Tsiwatenkaji",
    "deepModalTitlePrefix": "Sankenarentsi Sustento • ",
    "legDemandLabel": "Sankenarentsi Kametsari",
    "deepSecEvidenceTitle": "Sankenarentsi Kametsa tura Estadísticas",
    "deepSecGovTitle": "Sankenarentsi tura REMSAA",
    "deepSecGovDesc": "PLANEA 2025-2030 tura REMSAA sankenarentsi.",
    "deepSecEconTitle": "Katsinkari Chinkay (UNFPA / MEF)",
    "deepSecRoiTitle": "Katsinkari Kametsa (ROI 7:1) tura Chinkay",
    "deepSecRoiDesc": "1 katsinkari 7 katsinkari kametsa.",
    "deepSecDemandTitle": "Incidencia Politica Demanda:",
    "deepSecRoadmapTitle": "Congreso tura Ministerio Ñan:",
    "deepSecRoadmapDesc": "Ley de Presupuesto katsinkari churañ.",
    "sciModalTitle": "Sankenarentsi Kametsa tura Marco Legal",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Eentsite Kametsari (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 osarentsi eentsite <strong>5 veces mayor riesgo</strong> kametanaji. Código Penal abusomanta.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Katsinkari MILENA (UNFPA)",
    "sciSec2Desc": "0.25% tura 1.0% PBI katsinkari chinkay.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Katsinkari Kametsa (ROI 7:1)",
    "sciSec3Desc": "1 katsinkari 7 katsinkari kametsa.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Eentsite Sankenarentsi",
    "sciSec4Desc": "Pankotsi eentsite jark'amu katsinkari.",
    "sciCloseBtn": "Sankenarentsi Tsiwatenkaji",
    "sumModalTitle": "Ficha Técnica Ejecutiva Decisores",
    "sumHeaderBadge": "CONGRESO TURA MEF SANKENARENTSI",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 osarentsi eentsite kametsa 2030 (PLANEA).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7:1 pankotsi anaa.",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "1.0% PIB sapa osarentsi chinkay.",
    "sumGrid4Lbl": "Respaldo Legal:",
    "sumGrid4Val": "Código Penal tura Derechos Humanos.",
    "sumDemandsTitle": "Demandas Clave de Política Pública:",
    "sumCloseBtn": "Kametsari / Tsiwatenkaji",
    "countryModalTitle": "Seleccione un País de la Región Andina",
    "countryModalDesc": "Explore los datos e indicadores del Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Ver Versión",
    "countryCloseBtn": "Cerrar Selector",
    "planeaModalTitle": "Marco Matriz PLANEA 2025-2030 (6 Pankotsi)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Meta Estratégica 2030 (PLANEA)",
    "planeaSec1Desc": "6 pankotsi TEFA eentsite kametsatantsi tura <strong>15 osarentsi cero tolerancia eentsite</strong> 2030 osarentsi.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 Sankenarentsi",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú tura Venezuela Min. Salud pankotsi sankenarentsi.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. 7 Sankenarentsi Kametsa",
    "planeaLp": [
      "<strong>LP1:</strong> Eentsite kametsari tura pankotsi.",
      "<strong>LP2:</strong> EIS sankenarentsi ashi ñañantsi.",
      "<strong>LP3:</strong> Eentsite kametsa ruka.",
      "<strong>LP4:</strong> Tsimiri koshitantsi jark'amu.",
      "<strong>LP5:</strong> Eentsite nampirontsi.",
      "<strong>LP6:</strong> Sankenarentsi datonaka.",
      "<strong>LP7:</strong> Katsinkari pankotsi (5/5)."
    ],
    "planeaCloseBtn": "Pankotsi Tsiwatenkaji",
    "regionalModalTitle": "Regional Marco: MILENA tura AA-HA! Sankenarentsi",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. UNFPA MILENA Sankenarentsi (15 Pankotsi)",
    "regionalSec1Desc": "UNFPA América Latina <strong>USD 13,538 Millones</strong> katsinkari chinkay osarentsi.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Eentsite kametsa tura LARC sankenarentsi.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Eentsite Kametsatantsi (OPS)",
    "regionalSec3Desc": "PEP, AOE tura eentsite jark'amu.",
    "regionalCloseBtn": "Regional Tsiwatenkaji",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "EXTREMO RIESGO",
    "expHighRisk": "ALTO RIESGO",
    "expModerateRisk": "MEDIO RIESGO",
    "expCriticalGap": "BRECHA CRÍTICA",
    "expAccreditedUnits": "Pankotsi Acreditada",
    "expPerYear": "M/osarentsi",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Pankotsi PBI",
    "riskExtreme": "Extremo Riesgo",
    "riskVeryHigh": "Katsinkari Riesgo",
    "riskHigh": "Alto Riesgo",
    "riskModerate": "Medio Riesgo",
    "gapCritical": "Brecha Crítica",
    "gapSevere": "Brecha Severa",
    "gapHigh": "Brecha Katsinkari",
    "gapModerate": "Brecha Media"
  },
  "agr": {
    "langName": "Awajún",
    "skipLink": "Pegker pujustin jegamtai",
    "endorsedBy": "Yaimbau:",
    "countryBarLbl": "Andes Nugke:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Etsa Kumpam",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Kashi Kumpam",
    "optgroupOther": "── Tikich Andes Chicham ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino Datsajum Jark'amu tura Pegker Pujustin",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú tura Venezuela salud apukuntin chicham. <strong>15 mijan datsajum cero tolerancia</strong> pegker pujustinme.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metas Diistai (6 Nugke)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "YAIMBAU YACHAN",
    "regionalCardTitle": "MILENA tura AA-HA! Yachatai",
    "regionalCardDesc": "UNFPA MILENA 15 estudios (<strong>USD 13,538 Millones</strong> kuik chinkay), Guía AA-HA! tura jark'amu pegker.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Yachatai Diistai",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Nugke Yachatai Diistai",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Chicham Papik Diistai",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Diistai",
    "heroCardTitle": "Andes Incidencia Politica",
    "heroCardBadge": "JUNÍ WEGAI!",
    "heroCardDesc": "Juní wegai Congreso tura MEF yachatai kichatai",
    "s1Title": "1. Datsajum Jark'amu tura Pegker Pujustin",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 yachatai dekas.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Wagkanmeka aents? Yachatai Dekas Diistai",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Wagkanmeka aents? Yachatai Dekas Diistai",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Wagkanmeka aents? Yachatai Dekas Diistai",
    "s2Title": "2. Kuik Chinkay tura Pegker (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 yachatai dekas.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> KUIK CHINKAY",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Kuik Chinkay Diistai",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> KUIK ASENTA",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Kuik Pegker Diistai",
    "scTitle": "3. Nugke Chicham tura Jega",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 yachatai dekas.",
    "chart1Title": "3. Nugke Chicham tura Jega • Awajún",
    "chart1Sub": "PLANEA 2025-2030 • Awajún",
    "chart2Title": "3. Nugke Chicham tura Jega • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Awajún",
    "g2Lbl1": "Awajún [OK]",
    "g2Lbl2": "Awajún [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Awajún",
    "sfcTitle": "4. Dekas: Tsanumu vs. Yachatai",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 yachatai dekas.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Tsanumu vs. Yachatai (Awajún)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Datsajum Jark'amu tura Pegker Pujustin (PLANEA)",
    "fc1MythTitle": "\"Jega yachatai datsajum emtiki.\"",
    "fc1MythDesc": "Tsanumu EIS jark'atai.",
    "fc1EvTitle": "Yachatai Dekas:",
    "fc1EvDesc": "EIS 1.5 mijan datsajum pegker pujustin.",
    "fc2MythTitle": "\"Datsajum kuik chinkasqawa.\"",
    "fc2MythDesc": "Tsanumu kuik chicham.",
    "fc2EvTitle": "Yachatai Dekas:",
    "fc2EvDesc": "MILENA 1 kuik 7 kuik pegker kutitai (ROI 7:1).",
    "fc3MythTitle": "\"15 mijan datsajum jeallapaq.\"",
    "fc3MythDesc": "Tsanumu abusota pakanaji.",
    "fc3EvTitle": "Yachatai Dekas:",
    "fc3EvDesc": "15 mijan datsajum violación delito dekaskete.",
    "s3Title": "5. Apukuntin Chicham tura Nugke",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 yachatai dekas.",
    "s4Title": "6. Nugke Diistai tura Chicham",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 yachatai dekas.",
    "expLblRegion": "Nugke Akllatai:",
    "expFertilityLbl": "Datsajum Fecundidad:",
    "expCoverageLbl": "Jega Cobertura:",
    "expInactionLbl": "Mijan Kuik Chinkay Costo:",
    "expPriorityLbl": "Kuik Prioridad:",
    "expDisclaimer": "Fuente: Indicadores oficiales Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Pegker",
    "yearUnit": "/ mijan",
    "s5Title": "7. Chicham Papik: 5 Datsajum",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 yachatai dekas.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Chicham Apukuntin Rurana",
    "s8Title": "8. Yachatai Dekas",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 yachatai dekas.",
    "fTitle": "Awajún Incidencia Politica • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Creative Commons BY-NC 4.0 licencia.",
    "fSafeguard": "Datos validados por comités técnicos del ORAS-CONHU.",
    "fLawFramework": "Conforme a la Ley de Transparencia.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030).",
    "modalCloseText": "Ishichkaji",
    "deepModalTitlePrefix": "Yachatai Sustento • ",
    "legDemandLabel": "Chicham Apukuntin",
    "deepSecEvidenceTitle": "Yachatai Dekas tura Estadísticas",
    "deepSecGovTitle": "Chicham Apukuntin tura REMSAA",
    "deepSecGovDesc": "PLANEA 2025-2030 tura REMSAA acuerdos chicham.",
    "deepSecEconTitle": "Kuik Chinkay (UNFPA / MEF)",
    "deepSecRoiTitle": "Kuik Pegker (ROI 7:1) tura Chinkay",
    "deepSecRoiDesc": "1 kuik 7 kuik pegker.",
    "deepSecDemandTitle": "Incidencia Politica Chicham:",
    "deepSecRoadmapTitle": "Congreso tura Ministerio Jinti:",
    "deepSecRoadmapDesc": "Ley de Presupuesto kuik churañ.",
    "sciModalTitle": "Yachatai Dekas tura Marco Legal",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Jega Yachatai (MINSA / OPS / OMS)",
    "sciSec1Desc": "15 mijan datsajum <strong>5 veces mayor riesgo</strong> datsajum. Código Penal abusomanta.",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Kuik MILENA (UNFPA)",
    "sciSec2Desc": "0.25% tura 1.0% PBI kuik chinkay.",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. Kuik Pegker (ROI 7:1)",
    "sciSec3Desc": "1 kuik 7 kuik pegker.",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Datsajum Chicham",
    "sciSec4Desc": "Nugke datsajum jark'amu kuik.",
    "sciCloseBtn": "Yachatai Ishichkaji",
    "sumModalTitle": "Ficha Técnica Ejecutiva Decisores",
    "sumHeaderBadge": "CONGRESO TURA MEF CHICHAM",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 mijan datsajum cero tolerancia 2030 (PLANEA).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7:1 kuik anaa.",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "1.0% PIB kuik chinkay.",
    "sumGrid4Lbl": "Respaldo Legal:",
    "sumGrid4Val": "Código Penal tura Derechos Humanos.",
    "sumDemandsTitle": "Demandas Clave de Política Pública:",
    "sumCloseBtn": "Pegker / Ishichkaji",
    "countryModalTitle": "Nugke Akllatai",
    "countryModalDesc": "Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Diistai",
    "countryCloseBtn": "Ijiakbau",
    "planeaModalTitle": "Marco Matriz PLANEA 2025-2030 (6 Nugke)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Meta Estratégica 2030 (PLANEA)",
    "planeaSec1Desc": "6 nugke TEFA datsajum tura <strong>15 mijan datsajum cero tolerancia</strong> 2030 mijanme.",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 Chicham",
    "planeaSec2Desc": "Bolivia, Chile, Colombia, Ecuador, Perú tura Venezuela Min. Salud kuik chicham.",
    "planeaSec3Title": "<i class='fa-solid fa-chart-column text-brand-purple' aria-hidden='true'></i> 3. 7 Chicham Pegker",
    "planeaLp": [
      "<strong>LP1:</strong> Datsajum pegker pujustin tura jega.",
      "<strong>LP2:</strong> EIS chicham nugkemew.",
      "<strong>LP3:</strong> Datsajum jega pegker.",
      "<strong>LP4:</strong> Pegker pujustin jark'amu.",
      "<strong>LP5:</strong> Datsajum apukuntin.",
      "<strong>LP6:</strong> Chicham datonaka.",
      "<strong>LP7:</strong> Kuik pegker pujustin (5/5)."
    ],
    "planeaCloseBtn": "Nugke Ishichkaji",
    "regionalModalTitle": "Regional Marco: MILENA tura AA-HA! Yachatai",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. UNFPA MILENA (15 Nugke)",
    "regionalSec1Desc": "UNFPA América Latina <strong>USD 13,538 Millones</strong> kuik chinkay.",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. Global AA-HA! (OPS / OMS)",
    "regionalSec2Desc": "Datsajum tura LARC jega.",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Datsajum Jark'amu (OPS)",
    "regionalSec3Desc": "PEP, AOE tura jega pegker.",
    "regionalCloseBtn": "Regional Ishichkaji",
    "siteTitle": "Awajún Incidencia Politica: Datsajum Jark'amu tura Pegker Pujustin",
    "name": "Awajún",
    "themeLight": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Etsa Kumpam",
    "themeDark": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Kashi Kumpam",
    "endorsed": "Yaimbau:",
    "countryBar": "Andes Nugke / País versión diistai:",
    "optCountry": "(c) => `── ${c} Nugke Chicham ──`",
    "optOther": "── Tikich Andes Chicham ──",
    "pBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "pTag": "ORAS-CONHU",
    "pTitle": "Plan Andino Datsajum Jark'amu tura Pegker Pujustin",
    "pDesc": "Bolivia, Chile, Colombia, Ecuador, Perú tura Venezuela salud apukuntin chicham. <strong>15 mijan datsajum cero tolerancia</strong> pegker pujustinme.",
    "pBtn": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metas Diistai (6 Nugke)",
    "rBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. MARCO REGIONAL (ORAS, UNFPA, OPS, UNICEF)",
    "rTag": "COOPERACIÓN INTERNACIONAL",
    "rTitle": "MILENA tura AA-HA! Yachatai",
    "rDesc": "UNFPA MILENA 15 estudios (<strong>USD 13,538 Millones</strong> kuik chinkay), Guía AA-HA! tura jark'amu.",
    "rBtn": "<i class='fa-solid fa-chart-line'></i> Regional Yachatai Diistai",
    "expExtremeRisk": "EXTREMO RIESGO",
    "expHighRisk": "ALTO RIESGO",
    "expModerateRisk": "MEDIO RIESGO",
    "expCriticalGap": "BRECHA CRÍTICA",
    "expAccreditedUnits": "Jega Acreditada",
    "expPerYear": "M/mijan",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Nugke PBI",
    "riskExtreme": "Extremo Riesgo",
    "riskVeryHigh": "Uunt Riesgo",
    "riskHigh": "Alto Riesgo",
    "riskModerate": "Medio Riesgo",
    "gapCritical": "Brecha Crítica",
    "gapSevere": "Brecha Severa",
    "gapHigh": "Brecha Uunt",
    "gapModerate": "Brecha Media"
  },
  "jiv": {
    "langName": "Shuar Chicham",
    "skipLink": "Saltar al contenido principal",
    "endorsedBy": "Con el aval de:",
    "countryBarLbl": "Territorio Andino:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Modo Claro",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Modo Oscuro",
    "optgroupOther": "── Otras Lenguas Andinas ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino Natsa Tsuwamunam tura Penker Pujustin",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú tura Venezuela Min. Salud chicham. <strong>15 uchin cero tolerancia</strong> natsa penker pujustin.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metas Iistai (6 Nugka)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "YAINKATIN",
    "regionalCardTitle": "MILENA tura AA-HA! Nekatai",
    "regionalCardDesc": "UNFPA MILENA 15 nekatai (<strong>USD 13,538 Millones</strong> kuik tsuwamunam), Guía AA-HA! tura jark'amtai.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional Nekatai Iistai",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Nugka Nekatai Iistai",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Politica Chicham Iistai",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Iistai",
    "heroCardTitle": "Andes Politica Chicham",
    "heroCardBadge": "JUNÍ IISTAI!",
    "heroCardDesc": "Juní iistai Congreso tura MEF nekatai pakanatai",
    "s1Title": "1. Natsa Penker tura Nekatai",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 nekatai.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Uunt chicham? Nekatai Uunt Iistai",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Uunt chicham? Nekatai Uunt Iistai",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿Uunt chicham? Nekatai Uunt Iistai",
    "s2Title": "2. Kuik Tsuwamunam tura Penker (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 nekatai.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> IMPACTO FISCAL NEGATIVO",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Kuik Tsuwamunam Iistai",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> EFICIENCIA DEL GASTO PÚBLICO",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Kuik Penker Iistai",
    "scTitle": "3. Nugka Chikich tura Jea",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 nekatai.",
    "chart1Title": "3. Nugka Chikich tura Jea • Shuar Chicham",
    "chart1Sub": "PLANEA 2025-2030 • Shuar Chicham",
    "chart2Title": "3. Nugka Chikich tura Jea • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Shuar Chicham",
    "g2Lbl1": "Shuar Chicham [OK]",
    "g2Lbl2": "Shuar Chicham [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Shuar Chicham",
    "sfcTitle": "4. Nekatai: Wawartin vs. Nekatai",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 nekatai.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Wawartin vs. Nekatai (Shuar Chicham)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> Natsa Penker tura Nekatai (PLANEA)",
    "fc1MythTitle": "\"Jea yachatai natsa emtiki.\"",
    "fc1MythDesc": "Wawartin EIS jark'anaji.",
    "fc1EvTitle": "Nekatai Uunt:",
    "fc1EvDesc": "EIS 1.5 uchin natsa penker pujustin.",
    "fc2MythTitle": "\"Natsa kuik chinkasqawa.\"",
    "fc2MythDesc": "Wawartin kuik chicham.",
    "fc2EvTitle": "Nekatai Uunt:",
    "fc2EvDesc": "MILENA 1 kuik 7 kuik penker (ROI 7:1).",
    "fc3MythTitle": "\"15 uchin natsa jeallapaq.\"",
    "fc3MythDesc": "Wawartin abusota pakanaji.",
    "fc3EvTitle": "Nekatai Uunt:",
    "fc3EvDesc": "15 uchin natsa violación delito nekatai.",
    "s3Title": "5. Uunt Chicham tura Nugka",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 nekatai.",
    "s4Title": "6. Nugka Iistai tura Chikich",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 nekatai.",
    "expLblRegion": "Territorio / Departamento:",
    "expFertilityLbl": "Natsa Fecundidad:",
    "expCoverageLbl": "Jea Cobertura:",
    "expInactionLbl": "Uchin Kuik Tsuwamunam Costo:",
    "expPriorityLbl": "Kuik Prioridad:",
    "expDisclaimer": "Fuente: Indicadores oficiales del Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Penker",
    "yearUnit": "/ uchin",
    "s5Title": "7. Chicham Papiri: 5 Natsa",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 nekatai.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Uunt Chicham Rurana",
    "s8Title": "8. Nekatai Uunt",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 nekatai.",
    "fTitle": "Plataforma de Incidencia Política • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA 2025-2030.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Licencia de Uso Abierto Creative Commons BY-NC 4.0 para incidencia pública.",
    "fSafeguard": "Datos validados por comités técnicos del ORAS-CONHU y MINSA.",
    "fLawFramework": "Conforme a la Ley de Transparencia y Acceso a la Información.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Cerrar (Shuar Chicham)",
    "deepModalTitlePrefix": "Nekatai Sustento • ",
    "legDemandLabel": "Uunt Chicham",
    "deepSecEvidenceTitle": "Nekatai Uunt tura Estadísticas",
    "deepSecGovTitle": "Uunt Chicham tura REMSAA",
    "deepSecGovDesc": "PLANEA 2025-2030 tura REMSAA chicham.",
    "deepSecEconTitle": "Kuik Tsuwamunam (UNFPA / MEF)",
    "deepSecRoiTitle": "Kuik Penker (ROI 7:1) tura Tsuwamunam",
    "deepSecRoiDesc": "1 kuik 7 kuik penker.",
    "deepSecDemandTitle": "Politica Chicham:",
    "deepSecRoadmapTitle": "Congreso tura Ministerio Jinti:",
    "deepSecRoadmapDesc": "Ley de Presupuesto kuik churañ.",
    "sciModalTitle": "Evidencia Científica & Marco Legal (Shuar Chicham)",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Evidencia Sanitaria (Shuar Chicham)",
    "sciSec1Desc": "15 años <strong>5x riesgo muerte materna</strong> (Shuar Chicham).",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Impacto Fiscal MILENA (Shuar Chicham)",
    "sciSec2Desc": "0.25% - 1.0% PBI (Shuar Chicham).",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. ROI 7:1 (Shuar Chicham)",
    "sciSec3Desc": "1 -> 7 ahorro social (Shuar Chicham).",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Protección Niñez (Shuar Chicham)",
    "sciSec4Desc": "Código Penal & Derechos Humanos (Shuar Chicham).",
    "sciCloseBtn": "Cerrar / Shuar Chicham",
    "sumModalTitle": "Ficha Técnica Ejecutiva (Shuar Chicham)",
    "sumHeaderBadge": "RESUMEN EJECUTIVO CONGRESO & MEF (Shuar Chicham)",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 años cero gestaciones 2030 (Shuar Chicham).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7:1 (Shuar Chicham).",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "1.0% PIB (Shuar Chicham).",
    "sumGrid4Lbl": "Respaldo Legal:",
    "sumGrid4Val": "Código Penal (Shuar Chicham).",
    "sumDemandsTitle": "Demandas Clave de Política Pública (Shuar Chicham):",
    "sumCloseBtn": "Cerrar / Shuar Chicham",
    "countryModalTitle": "Seleccione un País de la Región Andina",
    "countryModalDesc": "Explore los datos e indicadores del Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Ver Versión",
    "countryCloseBtn": "Cerrar Selector",
    "planeaModalTitle": "Marco Matriz PLANEA 2025-2030 (Shuar Chicham)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Meta 2030 (Shuar Chicham)",
    "planeaSec1Desc": "6 países TEFA • <strong>15 años cero tolerancia</strong> 2030 (Shuar Chicham).",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 (Shuar Chicham)",
    "planeaSec2Desc": "6 Ministerios de Salud acuerdo vinculante (Shuar Chicham).",
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
    "planeaCloseBtn": "Cerrar / Shuar Chicham",
    "regionalModalTitle": "Marco Regional (Shuar Chicham)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA 15 Países (Shuar Chicham)",
    "regionalSec1Desc": "UNFPA <strong>USD 13,538 Millones</strong> (Shuar Chicham).",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. AA-HA! OPS/OMS (Shuar Chicham)",
    "regionalSec2Desc": "LARC & EIS (Shuar Chicham).",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta de Evaluación Rápida en Violencia Sexual (OPS)",
    "regionalSec3Desc": "Protocolos de profilaxis post-exposición (PEP), anticoncepción de emergencia (AOE), y soporte psicosocial inmediato en el primer nivel de atención para niñas y adolescentes sobrevivientes.",
    "regionalCloseBtn": "Cerrar / Shuar Chicham",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "EXTREMO RIESGO",
    "expHighRisk": "ALTO RIESGO",
    "expModerateRisk": "MEDIO RIESGO",
    "expCriticalGap": "BRECHA CRÍTICA",
    "expAccreditedUnits": "Jea Acreditada",
    "expPerYear": "M/uchin",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Nugka PBI",
    "riskExtreme": "Extremo Riesgo",
    "riskVeryHigh": "Uunt Riesgo",
    "riskHigh": "Alto Riesgo",
    "riskModerate": "Medio Riesgo",
    "gapCritical": "Brecha Crítica",
    "gapSevere": "Brecha Severa",
    "gapHigh": "Brecha Uunt",
    "gapModerate": "Brecha Media"
  },
  "rap": {
    "langName": "Rapa Nui",
    "skipLink": "Saltar al contenido principal",
    "endorsedBy": "Con el aval de:",
    "countryBarLbl": "Territorio Andino:",
    "themeLightBtn": "<i class='fa-solid fa-sun text-amber-400 mr-1.5' aria-hidden='true'></i> Modo Claro",
    "themeDarkBtn": "<i class='fa-solid fa-moon text-brand-teal mr-1.5' aria-hidden='true'></i> Modo Oscuro",
    "optgroupOther": "── Otras Lenguas Andinas ──",
    "planeaBadge": "<i class='fa-solid fa-earth-americas animate-spin-slow'></i> A. MARCO MATRIZ PLANEA 2025-2030",
    "planeaTag": "ORAS-CONHU",
    "planeaCardTitle": "Plan Andino Pāruru i te Poki 'Āpī mai te Hapu'a",
    "planeaCardDesc": "Bolivia, Chile, Colombia, Ecuador, Perú 'e Venezuela Min. Salud 'ite. <strong>15 matahiti poki 'āpī cero tolerancia</strong> pāruru hapu'a kore.",
    "btnPlaneaFramework": "<i class='fa-solid fa-book-open'></i> PLANEA Matriz Metas Tiro (6 Kāiŋa)",
    "regionalBadge": "<i class='fa-solid fa-hands-holding-child'></i> B. REGIONAL MARCO (ORAS, UNFPA, OPS, UNICEF)",
    "regionalTag": "HĀPA'O TUA",
    "regionalCardTitle": "MILENA 'e AA-HA! 'Ite Vānaŋa",
    "regionalCardDesc": "UNFPA 15 MILENA 'ite (<strong>USD 13,538 Millones</strong> moni kore), Guía AA-HA! 'e pāruru i te nu'u vi'e.",
    "btnRegionalFramework": "<i class='fa-solid fa-chart-line'></i> Regional 'Ite Vānaŋa Tiro",
    "btnHeroSim": "<i class='fa-solid fa-magnifying-glass-chart' aria-hidden='true'></i> Kāiŋa 'Ite Tiro",
    "btnHeroManifesto": "<i class='fa-solid fa-scroll' aria-hidden='true'></i> Vānaŋa Puka Tiro",
    "btnHeroSummary": "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Tiro",
    "heroCardTitle": "Andes Vānaŋa Haka Oho",
    "heroCardBadge": "I NAI TIRO!",
    "heroCardDesc": "I nai tiro Congreso 'e MEF 'ite puka haga oho",
    "s1Title": "1. 'Ite Vānaŋa 'e Pāruru",
    "s1Subtitle": "Plan Andino PLANEA 2025-2030 'ite vānaŋa.",
    "c1Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿He aha te parau? Parau Mau 'Ite Tiro",
    "c2Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿He aha te parau? Parau Mau 'Ite Tiro",
    "c3Btn": "<i class='fa-solid fa-magnifying-glass' aria-hidden='true'></i> ¿He aha te parau? Parau Mau 'Ite Tiro",
    "s2Title": "2. Moni Kore 'e Haka Oho (ROI)",
    "s2Subtitle": "Plan Andino PLANEA 2025-2030 'ite vānaŋa.",
    "roi1Badge": "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> IMPACTO FISCAL NEGATIVO",
    "roi1Btn": "<i class='fa-solid fa-chart-column mr-1' aria-hidden='true'></i> PBI Moni Kore Tiro",
    "roi2Badge": "<i class='fa-solid fa-arrow-trend-up' aria-hidden='true'></i> EFICIENCIA DEL GASTO PÚBLICO",
    "roi2Btn": "<i class='fa-solid fa-calculator mr-1' aria-hidden='true'></i> Moni Haka Oho Tiro",
    "scTitle": "3. Kāiŋa Takatukatu 'e Hare",
    "scSubtitle": "Plan Andino PLANEA 2025-2030 'ite vānaŋa.",
    "chart1Title": "3. Kāiŋa Takatukatu 'e Hare • Rapa Nui",
    "chart1Sub": "PLANEA 2025-2030 • Rapa Nui",
    "chart2Title": "3. Kāiŋa Takatukatu 'e Hare • I-3 / I-4",
    "chart2Sub": "LARC & EIS • Rapa Nui",
    "g2Lbl1": "Rapa Nui [OK]",
    "g2Lbl2": "Rapa Nui [GAP]",
    "chart2Note": "*PLANEA 2025-2030 • Rapa Nui",
    "sfcTitle": "4. Parau Mau: Reka vs. 'Ite",
    "sfcSubtitle": "Plan Andino PLANEA 2025-2030 'ite vānaŋa.",
    "fcBadgeMyth": "<i class='fa-solid fa-circle-xmark' aria-hidden='true'></i> Reka vs. 'Ite (Rapa Nui)",
    "fcBadgeEv": "<i class='fa-solid fa-circle-check' aria-hidden='true'></i> 'Ite Vānaŋa 'e Pāruru (PLANEA)",
    "fc1MythTitle": "\"Hare 'ite poki 'āpī emtiki.\"",
    "fc1MythDesc": "Reka EIS jark'anaji.",
    "fc1EvTitle": "Parau Mau 'Ite:",
    "fc1EvDesc": "EIS 1.5 matahiti poki 'āpī pāruru.",
    "fc2MythTitle": "\"Poki 'āpī moni chinkasqawa.\"",
    "fc2MythDesc": "Reka moni vānaŋa.",
    "fc2EvTitle": "Parau Mau 'Ite:",
    "fc2EvDesc": "MILENA 1 moni 7 moni haka oho (ROI 7:1).",
    "fc3MythTitle": "\"15 matahiti poki harellapaq.\"",
    "fc3MythDesc": "Reka abusota pakanaji.",
    "fc3EvTitle": "Parau Mau 'Ite:",
    "fc3EvDesc": "15 matahiti poki violación delito ture.",
    "s3Title": "5. Ture 'e Kāiŋa Pāruru",
    "s3Subtitle": "Plan Andino PLANEA 2025-2030 'ite vānaŋa.",
    "s4Title": "6. Kāiŋa Tiro 'e Takatukatu",
    "s4Subtitle": "Plan Andino PLANEA 2025-2030 'ite vānaŋa.",
    "expLblRegion": "Territorio / Departamento:",
    "expFertilityLbl": "Poki 'Āpī Fecundidad:",
    "expCoverageLbl": "Hare Cobertura:",
    "expInactionLbl": "Matahiti Moni Kore Costo:",
    "expPriorityLbl": "Moni Prioridad:",
    "expDisclaimer": "Fuente: Indicadores oficiales del Plan Andino PLANEA 2025-2030.",
    "coverageUnit": "Pāruru",
    "yearUnit": "/ matahiti",
    "s5Title": "7. Puka Haka Tere: 5 Vānaŋa",
    "s5Subtitle": "Plan Andino PLANEA 2025-2030 'ite vānaŋa.",
    "pBtnText": "<i class='fa-solid fa-shield-halved' aria-hidden='true'></i> Ture Kāiŋa Rurana",
    "s8Title": "8. 'Ite Vānaŋa Puka",
    "s8Subtitle": "Plan Andino PLANEA 2025-2030 'ite vānaŋa.",
    "fTitle": "Plataforma de Incidencia Política • PLANEA 2025-2030",
    "fText": "Herramienta técnica desarrollada bajo la Hackatón Creativa Regional PLANEA 2025-2030.",
    "fCol2Title": "Acreditación y Licencia",
    "fLic": "Licencia de Uso Abierto Creative Commons BY-NC 4.0 para incidencia pública.",
    "fSafeguard": "Datos validados por comités técnicos del ORAS-CONHU y MINSA.",
    "fLawFramework": "Conforme a la Ley de Transparencia y Acceso a la Información.",
    "fCol3Title": "Navegación Rápida",
    "fCopyRights": "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política.",
    "modalCloseText": "Cerrar (Rapa Nui)",
    "deepModalTitlePrefix": "'Ite Sustento • ",
    "legDemandLabel": "Ture Kāiŋa",
    "deepSecEvidenceTitle": "Parau Mau 'Ite",
    "deepSecGovTitle": "Ture Kāiŋa 'e REMSAA",
    "deepSecGovDesc": "PLANEA 2025-2030 'e REMSAA ture.",
    "deepSecEconTitle": "Moni Kore (UNFPA / MEF)",
    "deepSecRoiTitle": "Moni Haka Oho (ROI 7:1)",
    "deepSecRoiDesc": "1 moni 7 moni haka oho.",
    "deepSecDemandTitle": "Ture Haka Oho:",
    "deepSecRoadmapTitle": "Congreso 'e Ministerio Ara:",
    "deepSecRoadmapDesc": "Ley de Presupuesto moni.",
    "sciModalTitle": "Evidencia Científica & Marco Legal (Rapa Nui)",
    "sciSec1Title": "<i class='fa-solid fa-hospital-user text-brand-accent' aria-hidden='true'></i> 1. Evidencia Sanitaria (Rapa Nui)",
    "sciSec1Desc": "15 años <strong>5x riesgo muerte materna</strong> (Rapa Nui).",
    "sciSec2Title": "<i class='fa-solid fa-coins text-brand-teal' aria-hidden='true'></i> 2. Impacto Fiscal MILENA (Rapa Nui)",
    "sciSec2Desc": "0.25% - 1.0% PBI (Rapa Nui).",
    "sciSec3Title": "<i class='fa-solid fa-chart-line text-brand-purple' aria-hidden='true'></i> 3. ROI 7:1 (Rapa Nui)",
    "sciSec3Desc": "1 -> 7 ahorro social (Rapa Nui).",
    "sciSec4Title": "<i class='fa-solid fa-scale-balanced text-pink-400' aria-hidden='true'></i> 4. Protección Niñez (Rapa Nui)",
    "sciSec4Desc": "Código Penal & Derechos Humanos (Rapa Nui).",
    "sciCloseBtn": "Cerrar / Rapa Nui",
    "sumModalTitle": "Ficha Técnica Ejecutiva (Rapa Nui)",
    "sumHeaderBadge": "RESUMEN EJECUTIVO CONGRESO & MEF (Rapa Nui)",
    "sumGrid1Lbl": "Meta 2030:",
    "sumGrid1Val": "15 años cero gestaciones 2030 (Rapa Nui).",
    "sumGrid2Lbl": "Retorno Social (ROI):",
    "sumGrid2Val": "7:1 (Rapa Nui).",
    "sumGrid3Lbl": "Costo de Inacción:",
    "sumGrid3Val": "1.0% PIB (Rapa Nui).",
    "sumGrid4Lbl": "Respaldo Legal:",
    "sumGrid4Val": "Código Penal (Rapa Nui).",
    "sumDemandsTitle": "Demandas Clave de Política Pública (Rapa Nui):",
    "sumCloseBtn": "Cerrar / Rapa Nui",
    "countryModalTitle": "Seleccione un País de la Región Andina",
    "countryModalDesc": "Explore los datos e indicadores del Plan Andino PLANEA 2025-2030",
    "cmFertPrefix": "Fecundidad: ",
    "cmBtnText": "Ver Versión",
    "countryCloseBtn": "Cerrar Selector",
    "planeaModalTitle": "Marco Matriz PLANEA 2025-2030 (Rapa Nui)",
    "planeaSec1Title": "<i class='fa-solid fa-bullseye text-brand-teal' aria-hidden='true'></i> 1. Meta 2030 (Rapa Nui)",
    "planeaSec1Desc": "6 países TEFA • <strong>15 años cero tolerancia</strong> 2030 (Rapa Nui).",
    "planeaSec2Title": "<i class='fa-solid fa-landmark text-brand-accent' aria-hidden='true'></i> 2. REMSAA XLI 569 (Rapa Nui)",
    "planeaSec2Desc": "6 Ministerios de Salud acuerdo vinculante (Rapa Nui).",
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
    "planeaCloseBtn": "Cerrar / Rapa Nui",
    "regionalModalTitle": "Marco Regional (Rapa Nui)",
    "regionalSec1Title": "<i class='fa-solid fa-coins text-purple-400' aria-hidden='true'></i> 1. MILENA 15 Países (Rapa Nui)",
    "regionalSec1Desc": "UNFPA <strong>USD 13,538 Millones</strong> (Rapa Nui).",
    "regionalSec2Title": "<i class='fa-solid fa-book-medical text-brand-teal' aria-hidden='true'></i> 2. AA-HA! OPS/OMS (Rapa Nui)",
    "regionalSec2Desc": "LARC & EIS (Rapa Nui).",
    "regionalSec3Title": "<i class='fa-solid fa-scale-balanced text-brand-crimson' aria-hidden='true'></i> 3. Herramienta de Evaluación Rápida en Violencia Sexual (OPS)",
    "regionalSec3Desc": "Protocolos de profilaxis post-exposición (PEP), anticoncepción de emergencia (AOE), y soporte psicosocial inmediato en el primer nivel de atención para niñas y adolescentes sobrevivientes.",
    "regionalCloseBtn": "Cerrar / Rapa Nui",
    "siteTitle": "Plataforma de Incidencia Política",
    "expExtremeRisk": "EXTREMO RIESGO",
    "expHighRisk": "ALTO RIESGO",
    "expModerateRisk": "MEDIO RIESGO",
    "expCriticalGap": "BRECHA CRÍTICA",
    "expAccreditedUnits": "Hare Acreditada",
    "expPerYear": "M/matahiti",
    "expPerThousand": "sapa 1,000",
    "expRegionalGdp": "Kāiŋa PBI",
    "riskExtreme": "Extremo Riesgo",
    "riskVeryHigh": "Nui Riesgo",
    "riskHigh": "Nui Riesgo",
    "riskModerate": "Riesgo",
    "gapCritical": "Brecha Crítica",
    "gapSevere": "Brecha Severa",
    "gapHigh": "Brecha Nui",
    "gapModerate": "Brecha Media"
  }
};;;;;;

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
  const langKey = code === 'es' ? '' : (code.charAt(0).toUpperCase() + code.slice(1));
  const dict = i18n[code] || i18n['es'];

  // Header & Hero Badges & Titles
  setElemText('site-badge', dict.siteBadge || data.badge);
  
  // Resolve Site Title across all 16 languages (pure translation, no parentheses)
  let sTitle = (langKey && data['siteTitle' + langKey]) ? data['siteTitle' + langKey] : data.siteTitle;
  setElemHTML('site-title', sTitle);

  setElemText('hero-badge', `${dict.siteBadge || data.badge} • ORAS-CONHU / UNFPA`);
  
  // Resolve Hero Title across all 16 languages
  let hTitle = (langKey && data['heroTitle' + langKey]) ? data['heroTitle' + langKey] : data.heroTitle;
  setElemHTML('hero-title', hTitle);

  // Resolve Hero Description across all 16 languages
  let hDesc = (langKey && data['heroDesc' + langKey]) ? data['heroDesc' + langKey] : data.heroDesc;
  setElemHTML('hero-desc', hDesc);

  // Endorsed Badges in Header
  if (data.endorsed && data.endorsed.length >= 4) {
    setElemText('endorsed-badge-1', data.endorsed[0]);
    setElemText('endorsed-badge-2', data.endorsed[1]);
    setElemText('endorsed-badge-3', data.endorsed[2]);
    setElemText('endorsed-badge-4', data.endorsed[3]);
  }

  // Metrics Bar in Hero (Localized val & lbl)
  data.metrics.forEach((m, idx) => {
    const num = idx + 1;
    let val = (langKey && m['val' + langKey]) ? m['val' + langKey] : m.val;
    let lbl = (langKey && m['lbl' + langKey]) ? m['lbl' + langKey] : m.lbl;
    setElemText(`m${num}-val`, val);
    setElemText(`m${num}-lbl`, lbl);
  });

  // Section 1 Diagnosis Cards
  const cards = (langKey && data['cards' + langKey]) ? data['cards' + langKey] : data.cards;
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
  const roi = (langKey && data['roi' + langKey]) ? data['roi' + langKey] : data.roi;
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
  const laws = (langKey && data['laws' + langKey]) ? data['laws' + langKey] : data.laws;
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
  const expTitle = (langKey && data['explorerTitle' + langKey]) ? data['explorerTitle' + langKey] : data.explorerTitle;
  const expSub = (langKey && data['explorerSubtitle' + langKey]) ? data['explorerSubtitle' + langKey] : data.explorerSubtitle;
  setElemText('s4-title', expTitle);
  setElemText('s4-subtitle', expSub);

  // Section 7 Manifesto
  const manTitle = (langKey && data['manifestoTitle' + langKey]) ? data['manifestoTitle' + langKey] : data.manifestoTitle;
  const manItems = (langKey && data['manifestoItems' + langKey]) ? data['manifestoItems' + langKey] : data.manifestoItems;
  setElemText('s5-title', manTitle);
  if (manItems) {
    manItems.forEach((item, idx) => {
      setElemText(`m-item-${idx + 1}`, item);
    });
  }

  // Section 8 Sources Cards (Original institutional literature)
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
  const langKey = code === 'es' ? '' : (code.charAt(0).toUpperCase() + code.slice(1));

  const select = document.getElementById('exp-region');
  const selectedKey = select?.value || Object.keys(data.regions)[0];
  const info = data.regions[selectedKey] || Object.values(data.regions)[0];
  if (!info) return;

  // 1. Localized Dynamic Risk Badge
  const fVal = info.fertilityVal || 0;
  let riskText = dict.riskModerate || 'Riesgo Medio';
  if (fVal >= 80) riskText = dict.riskExtreme || 'Riesgo Extremo';
  else if (fVal >= 65) riskText = dict.riskVeryHigh || 'Riesgo Muy Alto';
  else if (fVal >= 50) riskText = dict.riskHigh || 'Riesgo Alto';
  const fRiskHTML = `<i class="fa-solid fa-circle text-rose-500 text-[8px] mr-1" aria-hidden="true"></i> ${riskText}`;

  // 2. Localized Dynamic Coverage Status Badge
  const cVal = info.coverageVal || 0;
  const gapVal = info.coverageGap || Math.max(0, 100 - cVal);
  let gapText = dict.gapModerate || 'Brecha Media';
  if (gapVal >= 70) gapText = dict.gapCritical || 'Brecha Crítica';
  else if (gapVal >= 60) gapText = dict.gapSevere || 'Brecha Severa';
  else if (gapVal >= 50) gapText = dict.gapHigh || 'Brecha Alta';
  const covStatusHTML = `<i class="fa-solid fa-triangle-exclamation text-amber-400 text-[9px] mr-1" aria-hidden="true"></i> ${gapText} (${gapVal}%)`;

  // 3. Localized Dynamic Inaction Cost Badge
  const curr = info.inactionCost.includes('USD') ? 'USD ' : (info.inactionCost.includes('S/') ? 'S/ ' : '$ ');
  const perYr = dict.expPerYear || 'M/año';
  const regGdp = dict.expRegionalGdp || 'PBI Regional';
  const inacTagHTML = `<i class="fa-solid fa-arrow-trend-down text-rose-400 text-[9px] mr-1" aria-hidden="true"></i> ${curr}${info.inactionVal} ${perYr} (${info.inactionScale || '0.45%'} ${regGdp})`;

  // 4. Localized Priority Description
  let prio = (langKey && info['priority' + langKey]) ? info['priority' + langKey] : info.priority;

  // 5. Units
  const perThousandUnit = dict.expPerThousand || 'por 1,000';
  const covUnit = dict.coverageUnit || 'Cobertura';
  const yrUnit = dict.yearUnit || '/ año';

  // Apply to DOM
  setElemText('out-fertility', `${info.fertilityVal} ${perThousandUnit}`);
  setElemText('out-coverage', `${info.coverageVal}% ${dict.expAccreditedUnits || 'Postas Acreditadas'}`);
  setElemText('out-inaction', `${curr}${info.inactionVal} ${perYr}`);
  setElemText('out-priority', prio);
  setElemHTML('out-fertility-risk', fRiskHTML);
  setElemHTML('out-coverage-status', covStatusHTML);
  setElemHTML('out-inaction-tag', inacTagHTML);

  // Big numbers
  setElemHTML('out-fertility-num', `${info.fertilityVal} <span class="text-xs font-normal text-slate-400">${currentCountry === 'regional' ? perThousandUnit : (String(info.fertility).includes('%') ? '%' : perThousandUnit)}</span>`);
  setElemHTML('out-coverage-num', `${info.coverageVal}% <span class="text-xs font-normal text-slate-400">${covUnit}</span>`);
  setElemHTML('out-inaction-num', `${curr}${info.inactionVal}M <span class="text-xs font-normal text-slate-400">${yrUnit}</span>`);

  // Progress bars
  const p1 = document.getElementById('bar-fertility');
  const p2 = document.getElementById('bar-coverage');
  const p3 = document.getElementById('bar-inaction');

  if (p1) p1.style.width = `${Math.min(100, (info.fertilityVal / 90) * 100)}%`;
  if (p2) p2.style.width = `${Math.min(100, info.coverageVal)}%`;
  if (p3) p3.style.width = `${Math.min(100, (info.inactionVal / 300) * 100)}%`;
}



// --- 6. MODAL HANDLERS ---
// --- MODAL CONTROLLER HELPERS ---
function showModal(modalId) {
  const modal = getElem(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.display = 'flex';
    if (typeof document !== 'undefined' && document.body && document.body.style) {
      document.body.style.overflow = 'hidden';
    }
  }
}

function hideModal(modalId) {
  const modal = getElem(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.style.display = 'none';
    if (typeof document !== 'undefined' && document.body && document.body.style) {
      document.body.style.overflow = '';
    }
  }
}

function openCountrySelectorModal() { showModal('country-modal'); }
function closeCountrySelectorModal() { hideModal('country-modal'); }

function openPlaneaModal() { showModal('planea-modal'); }
function closePlaneaModal() { hideModal('planea-modal'); }

function openRegionalFrameworkModal() { showModal('regional-framework-modal'); }
function closeRegionalFrameworkModal() { hideModal('regional-framework-modal'); }

function openScientificEvidenceModal() { showModal('sci-modal'); }
function closeScientificEvidenceModal() { hideModal('sci-modal'); }

function closeDeepEvidenceModal() { hideModal('deep-modal'); }
function closeExecutiveSummarySheetModal() { hideModal('summary-modal'); }

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
  if (!select && !customMenu) return;

  const country = currentCountry || 'peru';
  const dict = i18n[currentLang] || i18n['es'];

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

  select.innerHTML = '';

  // 1° English & 2° Español
  fixedPrimary.forEach(lang => {
    const opt = document.createElement('option');
    opt.value = lang.code;
    opt.textContent = lang.name;
    if (lang.code === currentLang) opt.selected = true;
    select.appendChild(opt);
  });

  const countryName = countryDatabase[country]?.name || 'País';

  // 3° Country languages group
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

  // 4° Other Andean languages group
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

function toggleLanguage() {
  changeLanguage(currentLang === 'es' ? 'en' : 'es');
}

function applyLanguage() {
  const dict = i18n[currentLang] || i18n['es'];
  const country = currentCountry || 'peru';
  const data = countryDatabase[country] || countryDatabase['peru'];
  const code = currentLang || 'es';
  const langKey = code === 'es' ? '' : (code.charAt(0).toUpperCase() + code.slice(1));

  // 1. Accessibility Skip Link
  setElemText('skip-to-main', dict.skipLink || "Saltar al contenido principal");

  // 2. Header & Navigation (Always update active language display label!)
  setElemText('current-lang-name', allLanguagesCatalog[currentLang]?.name || dict.langName || 'Español');
  updateThemeButtonText();
  setElemText('endorsed-label', dict.endorsedBy);
  setElemText('country-bar-lbl', dict.countryBarLbl);
  populateLanguageDropdown();

  // 2b. Direct Site and Hero Titles Localization Guard
  let sTitle = (langKey && data['siteTitle' + langKey]) ? data['siteTitle' + langKey] : data.siteTitle;
  setElemHTML('site-title', sTitle);
  let hTitle = (langKey && data['heroTitle' + langKey]) ? data['heroTitle' + langKey] : data.heroTitle;
  setElemHTML('hero-title', hTitle);
  let hDesc = (langKey && data['heroDesc' + langKey]) ? data['heroDesc' + langKey] : data.heroDesc;
  setElemHTML('hero-desc', hDesc);
  
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
  setElemText('chart2-sub', dict.chart2Sub || 'Primer Nivel de Atención');
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

  // 12. Section 8: Sources
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

// High-Performance DOM Element Cache & Mutation Minimizer
const elemCache = new Map();

function getElem(id) {
  let el = elemCache.get(id);
  if (!el) {
    el = document.getElementById(id);
    if (el) elemCache.set(id, el);
  }
  return el;
}

function setElemText(id, text) {
  const el = getElem(id);
  if (el && el.textContent !== text) {
    el.textContent = text;
  }
}

function setElemHTML(id, html) {
  const el = getElem(id);
  if (el && el.innerHTML !== html) {
    el.innerHTML = html;
  }
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
window.toggleLanguage = toggleLanguage;
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
