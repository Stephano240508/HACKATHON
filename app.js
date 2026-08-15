/**
 * Observatorio & Plataforma de Incidencia Política
 * Prevención de Violencias, Género y Embarazo Infantil en el Perú (T2 - PLANEA 2025-2030)
 * Marca Oficial: Hackatón Creativa Regional PLANEA / ORAS-CONHU / MINSA / UNFPA
 * Institutional Allies: MINSA Perú, ORAS-CONHU, UNFPA, OPS/OMS
 * Target Audience: Políticos, Congresistas, MEF, MINSA, Gobiernos Regionales
 */

// --- 1. ESTADO GLOBAL DE IDIOMA Y TEMA CLARO/OSCURO ---
let currentLang = 'es';
let currentTheme = localStorage.getItem('planea_theme') || 'dark';

// --- 2. DICCIONARIO TRILINGÜE COMPLETO (i18n: ES / EN / QU) ---
const i18n = {
  es: {
    langBtn: "English 🇺🇸",
    currentLang: "es",
    themeLightBtn: "☀️ Modo Claro",
    themeDarkBtn: "🌙 Modo Oscuro",
    siteBadge: "Hackatón Creativa Regional • PLANEA 2025-2030 🇵🇪",
    siteTitle: "Plataforma de Incidencia Política: Prevención de Violencias y Embarazo Infantil",
    subtitle: "Evidencia de Salud Pública, Análisis de Costo-Beneficio y Marco de Derechos para Tomadores de Decisión",
    endorsedBy: "Con el aval de:",
    navDiagnosis: "Evidencia Técnica",
    navRoi: "Retorno de Inversión",
    navCharts: "Gráficas",
    navFactCheck: "Mitos vs Evidencia",
    navLegal: "Marco Normativo",
    navExplorer: "Indicadores Regionales",
    navManifesto: "Manifiesto Político",

    // Hero
    heroBadge: "Hackatón Creativa Regional 2025-2030 • PLANEA / MINSA / ORAS-CONHU",
    heroTitle: "El Costo de la Inacción: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Prevención de Violencias y Embarazo Infantil en el Perú</span>",
    heroDesc: "Documento ejecutivo de política pública para <strong>Congresistas, Ministros, MEF y Gobernadores Regionales</strong>. Integra la evidencia oficial del Plan Andino para fundamentar la asignación presupuestal y alcanzar la meta de <strong>Cero Tolerancia en menores de 15 años</strong>.",
    btnHeroSim: "🔍 Ver Indicadores Regionales",
    btnHeroManifesto: "📜 Ver Manifiesto Legislativo",
    btnHeroSummary: "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Ficha Técnica Ejecutiva",
    btnHeroSummaryLabel: "Ficha Técnica Ejecutiva",
    heroCardTitle: "Incidencia Política en el Perú",
    heroCardBadge: "¡HAZ CLIC AQUÍ!",
    heroCardDesc: "👆 Haz clic aquí para abrir el Compendio de Evidencia Científica para el Congreso y el MEF",

    // Metrics Bar
    m1Value: "Cero Tolerancia",
    m1Label: "Meta Nacional al 2030 en gestaciones de niñas <15 años",
    m2Value: "S/ 7.00",
    m2Label: "Retorno económico estimado por cada Sol asignado",
    m3Value: "51.2 x 1,000",
    m3Label: "Tasa promedio de fecundidad en la región andina",
    m4Value: "Ley 30364",
    m4Label: "Marco legal para erradicar violencias de género",

    // Section 1: Diagnosis
    s1Title: "1. Diagnóstico Técnico y Evidencia Científica en el Perú",
    s1Subtitle: "Evidencia clínica, social e infraestructura sobre la problemática nacional (PLANEA / MINSA / UNFPA).",
    c1Tag: "EMERGENCIA DE SALUD PÚBLICA",
    c1Title: "Embarazo Infantil (<15 años) e Indemnidad Sexual",
    c1Desc: "Todo embarazo en niñas menores de 15 años deriva legal y médicamente de abuso sexual. Eleva quintuplicadamente la mortalidad materna y perpetúa la deserción escolar en el 80% de los casos.",
    c1Btn: "🔍 ¿Por qué se afirma esto? Ver Evidencia Profunda",

    c2Tag: "BRECHAS DE EQUIDAD TERRITORIAL",
    c2Title: "Violencia de Género y Disparidades Geográficas",
    c2Desc: "Las adolescentes rurales, andinas y amazónicas enfrentan un riesgo hasta tres veces superior de gestación no planificada por la ausencia de servicios de protección descentralizados.",
    c2Btn: "🔍 ¿Por qué ocurre esto? Ver Análisis Causal",

    c3Tag: "DÉFICIT DE INFRAESTRUCTURA",
    c3Title: "Capacidad Operativa de Consultorios MINSA",
    c3Desc: "Solo 35 de cada 100 establecimientos de primer nivel (I-3 y I-4) poseen consultorios amigables acreditados bajo la Norma NTS N° 130 con personal capacitado y consejería confidencial.",
    c3Btn: "🔍 ¿Por qué existe este déficit? Ver Evaluación MINSA",

    // Section 2: ROI & Cost of Inaction
    s2Title: "2. Análisis de Costo-Beneficio y Retorno de Inversión (ROI)",
    s2Subtitle: "Argumentario económico para la Comisión de Presupuesto del Congreso y el Ministerio de Economía y Finanzas (MEF).",
    roi1Badge: "IMPACTO FISCAL NEGATIVO",
    roi1Title: "Costo de la Inacción Fiscal",
    roi1Desc: "Postergar la prevención le genera al Estado un costo superior a <strong>S/ 1,200 millones al año</strong> (0.45% del PBI) por atenciones médicas de urgencia, menor recaudación tributaria y gasto judicial.",
    roi1Btn: "📊 Ver Desglose de Pérdida del 0.45% del PBI",

    roi2Badge: "EFICIENCIA DEL GASTO PÚBLICO",
    roi2Title: "Retorno Social de Inversión (S/ 7:1)",
    roi2Desc: "Estudios del UNFPA y OPS certifican que cada Sol destinado a consejería juvenil y ESI genera un <strong>ahorro directo de S/ 7.00</strong> en servicios hospitalarios y programas de subsistencia.",
    roi2Btn: "📊 Ver Desglose Actuarial del Ahorro por Sol",

    // Section 3: Charts
    scTitle: "3. Gráficas Informativas de Impacto y Disparidades del Perú",
    scSubtitle: "Indicadores visuales cuantitativos derivados de la Encuesta ENDES y la Matriz PLANEA 2025-2030.",
    chart1Title: "Fecundidad Adolescente por Departamentos (por 1,000)",
    chart1Sub: "ENDES / PLANEA",
    g1Lbl1: "Loreto (Amazonía)",
    g1Lbl2: "Huancavelica (Sierra Central)",
    g1Lbl3: "Cajamarca (Sierra Norte)",
    g1Lbl4: "Promedio Región Andina (PLANEA)",
    g1Lbl5: "Lima Metropolitana y Callao",
    chart2Title: "Cobertura de Servicios Amigables MINSA",
    chart2Sub: "Nivel I-3 / I-4",
    g2Lbl1: "Establecimientos Acreditados",
    g2Lbl2: "Déficit por Falta de Presupuesto",
    chart2Note: "*La brecha presupuestal del 65% impide la acreditación de consultorios amigables con atención confidencial en postas rurales del Perú.",

    // Section 4: Fact Check (Mitos vs Evidencia)
    sfcTitle: "4. Mitos vs. Evidencia Científica Oficial (Fact-Checking para el Debate)",
    sfcSubtitle: "Argumentos respaldados por el MINSA, UNFPA y el Código Penal para responder cuestionamientos frecuentes.",
    fcBadgeMyth: "MITO COMÚN DE DEBATE",
    fcBadgeEv: "EVIDENCIA CIENTÍFICA (MINSA / UNFPA)",
    fc1MythTitle: "❌ \"La educación preventiva en colegios adelanta el inicio sexual.\"",
    fc1MythDesc: "Argumento frecuente usado para oponerse a programas de consejería e información en salud reproductiva.",
    fc1EvTitle: "✓ Evidencia Demostrada:",
    fc1EvDesc: "Estudios del MINSA y UNFPA señalan que la consejería oportuna y la ESI <strong>retrasan el inicio de la vida sexual hasta en 1.5 años</strong> y reducen las infecciones de transmisión sexual y embarazos no planificados.",
    fc2MythTitle: "❌ \"Presupuestar en salud adolescente es un gasto sin retorno.\"",
    fc2MythDesc: "Cuestionamiento habitual en comisiones de presupuesto que consideran la prevención como un costo perdido.",
    fc2EvTitle: "✓ Evidencia Demostrada:",
    fc2EvDesc: "Metodologías actuariales del MEF y UNFPA confirman un <strong>Retorno de Inversión (ROI) de S/ 7.00 por cada Sol invertido</strong> en prevención, ahorrando gasto directo en urgencias obstétricas y atenciones de alto riesgo.",
    fc3MythTitle: "❌ \"El embarazo en niñas menores de 15 años es solo un asunto familiar.\"",
    fc3MythDesc: "Postura que invisibiliza el abuso y trata la maternidad infantil como un hecho privado o biológico natural.",
    fc3EvTitle: "✓ Evidencia Demostrada:",
    fc3EvDesc: "El Artículo 173 del Código Penal peruano establece la presunción legal absoluta de violencia sexual. Todo embarazo en una niña <15 años es delito de violación y requiere persecución penal y protección estatal obligatoria.",

    // Section 5: Legal Framework
    s3Title: "5. Marco Normativo Peruano y Compromisos Internacionales",
    s3Subtitle: "Bases jurídicas vigentes que sustentan las decisiones de política pública.",
    l1Tag: "LEY NACIONAL",
    l1Title: "Ley 30364 del Perú",
    l1Desc: "Garantiza partidas presupuestarias obligatorias para la protección frente a la violencia contra la mujer e integrantes del grupo familiar.",
    l2Tag: "PROTECCIÓN DE LA NIÑEZ",
    l2Title: "Código de los Niños y Adolescentes",
    l2Desc: "Protege el derecho inviolable a la salud integral, educación y resguardo ante cualquier forma de explotación o agresión sexual.",
    l3Tag: "COMPROMISO REGIONAL",
    l3Title: "Plan Andino (PLANEA 2025-2030)",
    l3Desc: "Compromiso gubernamental asumido ante ORAS-CONHU, UNFPA y OPS para erradicar la maternidad infantil al año 2030.",

    // Section 6: Regional Data Explorer
    s4Title: "6. Explorador Informativo de Indicadores Regionales del Perú",
    s4Subtitle: "Diagnóstico territorializado de tasas de fecundidad, acreditación de postas y costo de inacción.",
    expLblRegion: "Seleccionar Región del Perú",
    expFertilityLbl: "Fecundidad Adolescente:",
    expCoverageLbl: "Cobertura MINSA (I-3 / I-4):",
    expInactionLbl: "Costo Estimado de Inacción:",
    expPriorityLbl: "Prioridad Estratégica de Política Pública:",
    expDisclaimer: "ℹ️ Fuente de datos: PLANEA 2025-2030, MINSA Perú y Encuesta Demográfica y de Salud Familiar (ENDES).",
    optLoreto: "Loreto (Amazonía)",
    optHuancavelica: "Huancavelica (Sierra Central)",
    optCajamarca: "Cajamarca (Sierra Norte)",
    optPiura: "Piura (Costa Norte)",
    optCusco: "Cusco (Sierra Sur)",
    optLima: "Lima Metropolitana y Callao",

    // Section 7: Manifesto
    s5Title: "7. Manifiesto Legislativo y Agenda de Política Pública (5 Puntos)",
    s5Subtitle: "Prioridades legislativas sustentadas con evidencia del Cerebro de Datos. Haz clic en cualquiera para ver el análisis técnico.",
    mItem1: "1. Partida presupuestal específica en la Ley de Presupuesto Público para el Programa 0002 MINSA.",
    mItem2: "2. Protocolos de Cero Tolerancia y atención inmediata en el MIMP y comisarías.",
    mItem3: "3. Implementación efectiva de Educación Sexual Integral (ESI) en el currículo escolar.",
    mItem4: "4. Enfoque intercultural y bilingüe para la atención de adolescentes andinas y amazónicas.",
    mItem5: "5. Mecanismo de seguimiento interinstitucional liderado por la Defensoría del Pueblo.",
    pBtnText: "<i class='fa-solid fa-magnifying-glass-chart'></i> Ver Sustento Técnico",

    // Section 8: Official Sources & References
    s8Title: "8. Respaldos Oficiales y Referencias Bibliográficas (Fuentes Originales)",
    s8Subtitle: "Compendio documental, normativo y técnico de las fuentes primarias del Estado Peruano y organismos de cooperación que respaldan los datos de la plataforma.",
    src1Title: "Plan Andino (PLANEA 2025-2030)",
    src1Desc: "Plan Nacional de Prevención del Embarazo en Adolescentes y Matriz Multisectorial de Metas de los países de la Región Andina (Perú, Bolivia, Ecuador, Colombia, Venezuela y Chile).",
    src2Title: "Encuesta ENDES 2022-2023",
    src2Desc: "Encuesta Demográfica y de Salud Familiar del Instituto Nacional de Estadística e Informática (INEI). Fuente primaria de las tasas de fecundidad por departamento y brechas de atención.",
    src3Title: "Metodología Actuarial MILENA",
    src3Desc: "Estudio sobre las consecuencias socioeconómicas del embarazo en la adolescencia en el Perú. Sustenta la pérdida del 0.45% del PBI (S/ 1,200 Millones/año) y el ROI de S/ 7:1.",
    src4Title: "NTS N° 130-MINSA/DGIESP",
    src4Desc: "Norma Técnica de Salud para la Atención Integral de Salud de Adolescentes en el Perú. Define los criterios de acreditación obligatoria para consultorios amigables del I-3 y I-4.",
    src5Title: "Supervisión a Centros CEM y Postas",
    src5Desc: "Reporte de supervisión constitucional a la atención de víctimas de violencia sexual en zonas rurales y andinas, evaluando la brecha de intérpretes y procuración judicial.",
    src6Title: "Código Penal del Perú (Art. 173)",
    src6Desc: "Marco sustantivo del Código Penal (Art. 173 indemnidad sexual en <15 años) y la Ley 30364 para prevenir y erradicar la violencia contra las mujeres y los integrantes del grupo familiar.",

    // Modals
    modalCloseText: "Entendido / Cerrar Sustento",
    sciTitle: "Compendio de Evidencia Científica para el Congreso y el MEF",
    sciSec1Title: "🏛️ 1. Evidencia Sanitaria y Obstétrica (MINSA / OPS / OMS)",
    sciSec1Desc: "Estudios epidemiológicos del MINSA demuestran que las niñas menores de 15 años que gestan presentan <strong>5 veces mayor riesgo de muerte materna</strong> y 3 veces mayor riesgo de partos prematuros con bajo peso al nacer. Toda gestación en este grupo etario deriva de abuso sexual de acuerdo al Art. 173 del Código Penal.",
    sciSec2Title: "💰 2. Evidencia de Impacto Fiscal y Metodología MILENA (UNFPA)",
    sciSec2Desc: "La inacción estatal le cuesta al Perú <strong>S/ 1,200 Millones de Soles anuales</strong> (0.45% del PBI). El 40% de esta pérdida responde al menor nivel educativo alcanzado por las madres adolescentes, reduciendo su inserción en el mercado laboral formal e impactando la recaudación del IGV y Renta.",
    sciSec3Title: "📈 3. Retorno Social de Inversión (ROI S/ 7:1)",
    sciSec3Desc: "Por cada S/ 1.00 Sol presupuestado en Educación Sexual Integral (ESI) y en Servicios Amigables del MINSA (Programa Presupuestal 0002), el Estado peruano ahorra S/ 7.00 en atención médica de emergencia y programas de subsistencia.",
    sciSec4Title: "⚖️ 4. Cumplimiento de la Ley 30364 y Código de NNA",
    sciSec4Desc: "El Estado tiene la obligación constitucional de asignar partidas descentralizadas para Centros Emergencia Mujer (CEM) y postas de primer nivel (I-3 y I-4) para garantizar la protección inmediata de víctimas de violencias basadas en género.",
    sciCloseBtnText: "Cerrar Compendio Científico",

    sumModalTitle: "Ficha Técnica Ejecutiva para Decisores Políticos",
    sumHeaderBadge: "RESUMEN EJECUTIVO PARA COMISIONES DEL CONGRESO Y EL MEF",
    sumHeaderTitle: "Prevención de Violencias y Embarazo Infantil en el Perú (PLANEA 2025-2030)",
    sumGrid1Lbl: "🎯 Meta Estratégica:",
    sumGrid1Val: "Cero gestaciones en niñas menores de 15 años al 2030 (Plan Andino PLANEA).",
    sumGrid2Lbl: "💰 Retorno Social (ROI):",
    sumGrid2Val: "S/ 7.00 ahorrados por cada Sol invertido en ESI y Servicios Amigables MINSA.",
    sumGrid3Lbl: "⚠️ Costo de Inacción:",
    sumGrid3Val: "Más de S/ 1,200 Millones/año (0.45% del PBI nacional).",
    sumGrid4Lbl: "⚖️ Respaldo Legal:",
    sumGrid4Val: "Ley 30364, Código Penal Art. 173 y Código de NNA del Perú.",
    sumDemandsTitle: "📌 Demandas Clave de Política Pública:",
    sumDem1: "Línea presupuestal descentralizada en la Ley de Presupuesto Público para el Programa 0002 MINSA.",
    sumDem2: "Acreditación del 100% de centros I-3 y I-4 en servicios amigables con consejería confidencial.",
    sumDem3: "Garantía de Educación Sexual Integral (ESI) con enfoque intercultural en el Currículo Escolar.",
    sumCloseBtnText: "Entendido / Cerrar Ficha",

    // Footer
    fTitle: "Incidencia Política Perú 🇵🇪 • PLANEA 2025-2030",
    fText: "Observatorio de Incidencia Política de la Hackatón Creativa Regional (PLANEA 2025-2030). Desarrollado con la Guía de Marca Oficial y el aval institucional de MINSA Perú, ORAS-CONHU, UNFPA y OPS/OMS.",
    fCol2Title: "Marcos Éticos y Legales",
    fLic: "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    fSafeguard: "• Cumplimiento estricto de salvaguardas de NNA del Perú.",
    fLawFramework: "• Marco Ley 30364 y Código de los Niños y Adolescentes del Perú.",
    fCol3Title: "Entidades Avaladoras",
    fCopyRights: "© 2026 Plataforma Regional del Plan Andino (PLANEA 2025-2030). Documento de Incidencia Política para el Perú."
  },
  en: {
    langBtn: "Quechua 🇵🇪",
    currentLang: "en",
    themeLightBtn: "☀️ Light Mode",
    themeDarkBtn: "🌙 Dark Mode",
    siteBadge: "Regional Creative Hackathon • PLANEA 2025-2030 🇵🇪",
    siteTitle: "Political Advocacy Platform: Prevention of Violence & Child Pregnancy",
    subtitle: "Public Health Evidence, Cost-Benefit Analysis & Human Rights Framework for Decision Makers",
    endorsedBy: "Endorsed by:",
    navDiagnosis: "Technical Evidence",
    navRoi: "Return on Investment",
    navCharts: "Impact Charts",
    navFactCheck: "Myths vs Evidence",
    navLegal: "Legal Framework",
    navExplorer: "Regional Indicators",
    navManifesto: "Political Manifesto",

    // Hero
    heroBadge: "Regional Creative Hackathon 2025-2030 • PLANEA / MINSA / ORAS-CONHU",
    heroTitle: "The Cost of Inaction: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Prevention of Violence & Child Pregnancy in Peru</span>",
    heroDesc: "Executive public policy document for <strong>Members of Congress, Ministers, MEF, and Regional Governors</strong>. Integrates official evidence from the Andean Plan to support budget allocation and achieve <strong>Zero Tolerance in girls under 15</strong>.",
    btnHeroSim: "🔍 View Regional Indicators",
    btnHeroManifesto: "📜 View Legislative Manifesto",
    btnHeroSummary: "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Executive Briefing Sheet",
    btnHeroSummaryLabel: "Executive Briefing Sheet",
    heroCardTitle: "Political Advocacy in Peru",
    heroCardBadge: "CLICK HERE!",
    heroCardDesc: "👆 Click here to open the Scientific Evidence Compendium for Congress & MEF",

    // Metrics Bar
    m1Value: "Zero Tolerance",
    m1Label: "National target by 2030 for pregnancies in girls <15 years",
    m2Value: "7:1 ROI",
    m2Label: "Estimated economic return per allocated Sol",
    m3Value: "51.2 x 1,000",
    m3Label: "Average fertility rate in the Andean region",
    m4Value: "Law 30364",
    m4Label: "Legal framework to eradicate gender-based violence",

    // Section 1: Diagnosis
    s1Title: "1. Technical Diagnosis & Scientific Evidence in Peru",
    s1Subtitle: "Clinical, social, and infrastructure evidence on national challenges (PLANEA / MINSA / UNFPA).",
    c1Tag: "PUBLIC HEALTH EMERGENCY",
    c1Title: "Child Pregnancy (<15 years) & Sexual Integrity",
    c1Desc: "All pregnancies in girls under 15 legally and medically result from sexual abuse. Increases maternal mortality fivefold and drives school dropout in 80% of cases.",
    c1Btn: "🔍 Why is this stated? View Deep Evidence",

    c2Tag: "TERRITORIAL EQUITY GAPS",
    c2Title: "Gender Violence & Geographic Disparities",
    c2Desc: "Rural, Andean, and Amazonian adolescents face up to three times higher risk of unintended pregnancy due to a lack of decentralized protection services.",
    c2Btn: "🔍 Why does this happen? View Causal Analysis",

    c3Tag: "INFRASTRUCTURE DEFICIT",
    c3Title: "Operational Capacity of MINSA Clinics",
    c3Desc: "Only 35 out of 100 primary healthcare centers (I-3 and I-4) have youth clinics accredited under NTS N° 130 with trained staff and confidential counseling.",
    c3Btn: "🔍 Why does this deficit exist? View MINSA Evaluation",

    // Section 2: ROI & Cost of Inaction
    s2Title: "2. Cost-Benefit Analysis & Return on Investment (ROI)",
    s2Subtitle: "Economic argument for the Congressional Budget Committee and the Ministry of Economy & Finance (MEF).",
    roi1Badge: "NEGATIVE FISCAL IMPACT",
    roi1Title: "Fiscal Cost of Inaction",
    roi1Desc: "Delaying prevention costs the State over <strong>1.2 Billion Soles annually</strong> (0.45% of GDP) in emergency care, reduced tax revenue, and judicial expenses.",
    roi1Btn: "📊 View 0.45% GDP Loss Breakdown",

    roi2Badge: "PUBLIC SPENDING EFFICIENCY",
    roi2Title: "Social Return on Investment (7:1 ROI)",
    roi2Desc: "UNFPA and PAHO studies certify that every Sol allocated to youth counseling and CSE generates <strong>7.00 Soles in direct savings</strong> for hospital services.",
    roi2Btn: "📊 View Actuarial Savings Breakdown",

    // Section 3: Charts
    scTitle: "3. Informative Impact & Disparity Charts for Peru",
    scSubtitle: "Quantitative visual indicators derived from the ENDES Survey and PLANEA 2025-2030 Matrix.",
    chart1Title: "Adolescent Fertility by Department (per 1,000)",
    chart1Sub: "ENDES / PLANEA",
    g1Lbl1: "Loreto (Amazonia)",
    g1Lbl2: "Huancavelica (Central Sierra)",
    g1Lbl3: "Cajamarca (Northern Sierra)",
    g1Lbl4: "Andean Region Average (PLANEA)",
    g1Lbl5: "Lima Metro & Callao",
    chart2Title: "Coverage of MINSA Youth-Friendly Clinics",
    chart2Sub: "Level I-3 / I-4",
    g2Lbl1: "Accredited Health Centers",
    g2Lbl2: "Budget Shortfall Deficit",
    chart2Note: "*The 65% budget gap prevents the accreditation of youth clinics offering confidential care in rural Peru.",

    // Section 4: Fact Check
    sfcTitle: "4. Myths vs. Official Scientific Evidence (Fact-Checking for Debates)",
    sfcSubtitle: "Arguments backed by MINSA, UNFPA, and the Penal Code to address frequent questions.",
    fcBadgeMyth: "COMMON DEBATE MYTH",
    fcBadgeEv: "SCIENTIFIC EVIDENCE (MINSA / UNFPA)",
    fc1MythTitle: "❌ \"Sex education in schools encourages early sexual activity.\"",
    fc1MythDesc: "Frequent argument used to oppose counseling and reproductive health information programs.",
    fc1EvTitle: "✓ Demonstrated Evidence:",
    fc1EvDesc: "MINSA and UNFPA studies show that timely counseling and CSE <strong>delay the onset of sexual activity by up to 1.5 years</strong> while reducing STIs and unintended pregnancies.",
    fc2MythTitle: "❌ \"Budgeting for youth health is an expense with no return.\"",
    fc2MythDesc: "Habitual questioning in budget committees that view prevention as a lost cost.",
    fc2EvTitle: "✓ Demonstrated Evidence:",
    fc2EvDesc: "MEF and UNFPA actuarial methodologies confirm a <strong>Return on Investment (ROI) of 7.00 Soles per Sol invested</strong> in prevention, saving direct costs in high-risk obstetric emergencies.",
    fc3MythTitle: "❌ \"Pregnancy in girls under 15 is strictly a private family matter.\"",
    fc3MythDesc: "Stance that hides abuse and treats child motherhood as a private or natural biological event.",
    fc3EvTitle: "✓ Demonstrated Evidence:",
    fc3EvDesc: "Article 173 of the Peruvian Penal Code establishes absolute legal presumption of sexual violence. Every pregnancy in a girl <15 is a crime of rape requiring mandatory state prosecution.",

    // Section 5: Legal Framework
    s3Title: "5. Peruvian Legal Framework & International Commitments",
    s3Subtitle: "Current legal grounds supporting public policy decisions.",
    l1Tag: "NATIONAL LAW",
    l1Title: "Law 30364 of Peru",
    l1Desc: "Guarantees mandatory budget lines for protection against violence against women and family members.",
    l2Tag: "CHILD PROTECTION",
    l2Title: "Children and Adolescents Code",
    l2Desc: "Protects the inviolable right to comprehensive health, education, and defense against exploitation or abuse.",
    l3Tag: "REGIONAL COMMITMENT",
    l3Title: "Andean Plan (PLANEA 2025-2030)",
    l3Desc: "Governmental commitment made before ORAS-CONHU, UNFPA, and PAHO to eradicate child motherhood by 2030.",

    // Section 6: Regional Data Explorer
    s4Title: "6. Informative Explorer of Regional Indicators in Peru",
    s4Subtitle: "Territorialized diagnosis of fertility rates, clinic accreditation, and cost of inaction.",
    expLblRegion: "Select Region of Peru",
    expFertilityLbl: "Adolescent Fertility:",
    expCoverageLbl: "MINSA Coverage (I-3 / I-4):",
    expInactionLbl: "Estimated Cost of Inaction:",
    expPriorityLbl: "Strategic Public Policy Priority:",
    expDisclaimer: "ℹ️ Data source: PLANEA 2025-2030, MINSA Peru, and Demographic and Family Health Survey (ENDES).",
    optLoreto: "Loreto (Amazonia)",
    optHuancavelica: "Huancavelica (Central Sierra)",
    optCajamarca: "Cajamarca (Northern Sierra)",
    optPiura: "Piura (Northern Coast)",
    optCusco: "Cusco (Southern Sierra)",
    optLima: "Lima Metro & Callao",

    // Section 7: Manifesto
    s5Title: "7. Legislative Manifesto & Public Policy Agenda (5 Points)",
    s5Subtitle: "Legislative priorities supported by Data Brain evidence. Click any to view technical analysis.",
    mItem1: "1. Specific budget line in the Public Budget Law for MINSA Program 0002.",
    mItem2: "2. Zero Tolerance protocols and immediate care in MIMP and police stations.",
    mItem3: "3. Effective implementation of Comprehensive Sexuality Education (CSE) in school curricula.",
    mItem4: "4. Intercultural and bilingual focus for Andean and Amazonian adolescent care.",
    mItem5: "5. Inter-institutional monitoring mechanism led by the Ombudsman Office.",
    pBtnText: "<i class='fa-solid fa-magnifying-glass-chart'></i> View Technical Support",

    // Section 8: Official Sources & References
    s8Title: "8. Official Endorsements & Bibliographic References (Original Sources)",
    s8Subtitle: "Documentary, normative, and technical compendium of primary sources from the Peruvian State and cooperation agencies supporting platform data.",
    src1Title: "Andean Plan (PLANEA 2025-2030)",
    src1Desc: "National Plan for Adolescent Pregnancy Prevention and Multisectoral Goal Matrix of Andean Region countries (Peru, Bolivia, Ecuador, Colombia, Venezuela, and Chile).",
    src2Title: "ENDES Survey 2022-2023",
    src2Desc: "Demographic and Family Health Survey by INEI Peru. Primary source for department fertility rates and healthcare gap metrics.",
    src3Title: "MILENA Actuarial Methodology",
    src3Desc: "Study on the socioeconomic consequences of adolescent pregnancy in Peru. Supports the 0.45% GDP loss (1.2 Billion Soles/year) and 7:1 ROI.",
    src4Title: "NTS N° 130-MINSA/DGIESP",
    src4Desc: "National Health Technical Standard for Comprehensive Adolescent Healthcare in Peru. Defines mandatory accreditation for I-3 and I-4 youth clinics.",
    src5Title: "Supervision of CEM Centers & Health Posts",
    src5Desc: "Constitutional supervision report on care for sexual violence victims in rural and Andean areas, evaluating interpreter gaps and legal defense.",
    src6Title: "Penal Code of Peru (Art. 173)",
    src6Desc: "Substantive framework of the Penal Code (Art. 173 sexual integrity in <15 years) and Law 30364 to prevent and eradicate violence against women and family members.",

    // Section 5: Legal Framework
    s3Title: "5. Peruvian Legal Framework & International Commitments",
    s3Subtitle: "Valid legal foundations supporting public policy decisions.",
    l1Tag: "NATIONAL LAW",
    l1Title: "Peruvian Law 30364",
    l1Desc: "Guarantees mandatory budget lines for protection against violence toward women and family members.",
    l2Tag: "CHILD SAFEGUARDING",
    l2Title: "Children & Adolescents Code",
    l2Desc: "Protects the inviolable right to health, education, and defense against any form of exploitation or sexual assault.",
    l3Tag: "REGIONAL COMMITMENT",
    l3Title: "Andean Plan (PLANEA 2025-2030)",
    l3Desc: "Government commitment pledged to ORAS-CONHU, UNFPA, and PAHO to eliminate child motherhood by 2030.",

    // Section 6: Regional Data Explorer
    s4Title: "6. Regional Data & Indicator Explorer for Peru",
    s4Subtitle: "Territorialized diagnosis of fertility rates, clinic accreditation, and inaction cost.",
    expLblRegion: "Select Region of Peru",
    expFertilityLbl: "Adolescent Fertility:",
    expCoverageLbl: "MINSA Coverage (I-3 / I-4):",
    expInactionLbl: "Estimated Inaction Cost:",
    expPriorityLbl: "Strategic Public Policy Priority:",
    expDisclaimer: "ℹ️ Data source: PLANEA 2025-2030, MINSA Peru, and ENDES Demographics Survey.",
    optLoreto: "Loreto (Amazonia)",
    optHuancavelica: "Huancavelica (Central Sierra)",
    optCajamarca: "Cajamarca (Northern Sierra)",
    optPiura: "Piura (Northern Coast)",
    optCusco: "Cusco (Southern Sierra)",
    optLima: "Lima Metro & Callao",

    // Section 7: Manifesto
    s5Title: "7. Legislative Manifesto & Public Policy Agenda (5 Points)",
    s5Subtitle: "Legislative priorities supported by Data Brain evidence. Click any item to view technical details.",
    mItem1: "1. Specific budget line item in the Public Budget Law for MINSA Program 0002.",
    mItem2: "2. Zero Tolerance protocols and immediate care at MIMP and police stations.",
    mItem3: "3. Effective implementation of Comprehensive Sexuality Education (CSE) in school curricula.",
    mItem4: "4. Intercultural and bilingual approach for Andean and Amazonian adolescent care.",
    mItem5: "5. Inter-institutional monitoring mechanism led by the Ombudsman Office.",
    pBtnText: "<i class='fa-solid fa-magnifying-glass-chart'></i> View Technical Evidence",

    // Modals
    modalCloseText: "Understood / Close Evidence",
    sciTitle: "Scientific Evidence Compendium for Congress & MEF",
    sciSec1Title: "🏛️ 1. Health & Obstetric Evidence (MINSA / PAHO / WHO)",
    sciSec1Desc: "MINSA epidemiological studies show that pregnant girls under 15 face <strong>5 times higher maternal mortality risk</strong> and 3 times higher risk of premature low birth weight deliveries. Every pregnancy in this age group stems from sexual abuse under Penal Code Art. 173.",
    sciSec2Title: "💰 2. Fiscal Impact & MILENA Methodology (UNFPA)",
    sciSec2Desc: "State inaction costs Peru <strong>1.2 Billion Soles annually</strong> (0.45% of GDP). 40% of this loss is due to lower educational attainment of teen mothers, reducing formal employment insertion and tax collection.",
    sciSec3Title: "📈 3. Social Return on Investment (7:1 ROI)",
    sciSec3Desc: "For every 1.00 Sol budgeted in Comprehensive Sexuality Education (CSE) and MINSA Youth Clinics (Program 0002), the State saves 7.00 Soles in emergency healthcare and welfare.",
    sciSec4Title: "⚖️ 4. Compliance with Law 30364 & Child Code",
    sciSec4Desc: "The State has a constitutional duty to allocate decentralized funding for Women Emergency Centers (CEM) and primary health posts (I-3 & I-4) to guarantee immediate protection for victims of gender violence.",
    sciCloseBtnText: "Close Scientific Compendium",

    sumModalTitle: "Executive Briefing Sheet for Policy Makers",
    sumHeaderBadge: "EXECUTIVE BRIEFING FOR CONGRESSIONAL COMMITTEES & MEF",
    sumHeaderTitle: "Prevention of Violence & Child Pregnancy in Peru (PLANEA 2025-2030)",
    sumGrid1Lbl: "🎯 Strategic Target:",
    sumGrid1Val: "Zero pregnancies in girls under 15 by 2030 (Andean Plan PLANEA).",
    sumGrid2Lbl: "💰 Social Return (ROI):",
    sumGrid2Val: "7.00 Soles saved per Sol invested in CSE and MINSA Youth Clinics.",
    sumGrid3Lbl: "⚠️ Cost of Inaction:",
    sumGrid3Val: "Over 1.2 Billion Soles/year (0.45% of national GDP).",
    sumGrid4Lbl: "⚖️ Legal Backing:",
    sumGrid4Val: "Law 30364, Penal Code Art. 173, and Peru Children Code.",
    sumDemandsTitle: "📌 Key Public Policy Demands:",
    sumDem1: "Decentralized budget line in the Public Budget Law for MINSA Program 0002.",
    sumDem2: "100% accreditation of level I-3 and I-4 health centers in youth-friendly services.",
    sumDem3: "Guarantee of Comprehensive Sexuality Education (CSE) with intercultural focus in school curricula.",
    sumCloseBtnText: "Understood / Close Sheet",

    // Footer
    fTitle: "Political Advocacy Peru 🇵🇪 • PLANEA 2025-2030",
    fText: "Political Advocacy Observatory for the Regional Creative Hackathon (PLANEA 2025-2030). Developed using Official Brand Guidelines with institutional endorsement from MINSA Peru, ORAS-CONHU, UNFPA, and PAHO/WHO.",
    fCol2Title: "Ethical & Legal Frameworks",
    fLic: "• Attribution-NonCommercial 4.0 License (CC BY-NC 4.0)",
    fSafeguard: "• Strict adherence to Peru's Child Safeguarding protocols.",
    fLawFramework: "• Framework Law 30364 and Peru Children and Adolescents Code.",
    fCol3Title: "Endorsing Entities",
    fCopyRights: "© 2026 Regional Andean Plan Platform (PLANEA 2025-2030). Political Advocacy Document for Peru."
  },
  qu: {
    langBtn: "Español 🇪🇸",
    currentLang: "qu",
    themeLightBtn: "☀️ K'anchay Modo",
    themeDarkBtn: "🌙 Tutaya Modo",
    siteBadge: "Regional Hackatón Creativa • PLANEA 2025-2030 🇵🇪",
    siteTitle: "Plataforma de Incidencia Política: Maqanakuykunata wan Wawa Chichuyta Hark'ay",
    subtitle: "Hampi Yachay Taripasqakuna, Qullqi Aypachiy wan Runapa Derechon Kamachiqkunapaq",
    endorsedBy: "Yupaychasqa kaywan:",
    navDiagnosis: "Yachay Taripasqa",
    navRoi: "Qullqi Kutichiy",
    navCharts: "Unanchakuna",
    navFactCheck: "Pantay vs Cheqaq",
    navLegal: "Simi Kamachikuy",
    navExplorer: "Suyu Unanchakuna",
    navManifesto: "Kamachiy Mañakuy",

    // Hero
    heroBadge: "Regional Hackatón Creativa 2025-2030 • PLANEA / MINSA / ORAS-CONHU",
    heroTitle: "Mana Ruraypa Qullqi Chinkachiynin: <span class='text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-accent to-brand-purple'>Maqanakuykunata wan Wawa Chichuyta Hark'ay Peru Suyupi</span>",
    heroDesc: "Kamachiqkuna, Congresistakuna, MEF wan Suyu Umalliqkunapaq qillqa. Plan Andinopa cheqaq yachayninwan presupuestota churana <strong>Ama Múnaychu 15 watamanta uray sipaskunapi</strong>.",
    btnHeroSim: "🔍 Suyukunapa Unanchankuna Qhaway",
    btnHeroManifesto: "📜 Kamachiy Mañakuy Qhaway",
    btnHeroSummary: "<i class='fa-solid fa-file-invoice' aria-hidden='true'></i> Kamachiqkunapaq Ficha Técnica",
    btnHeroSummaryLabel: "Kamachiqkunapaq Ficha Técnica",
    heroCardTitle: "Suyu Kamachiy Peru Suyupi",
    heroCardBadge: "KAYPI NIT'IY!",
    heroCardDesc: "👆 Kaypi nit'iy Congreso wan MEF yachaykunata kichanapaq",

    // Metrics Bar
    m1Value: "Ama Múnaychu",
    m1Label: "2030 watapaq suyupa metan 15 watamanta uray sipaskunapi",
    m2Value: "S/ 7.00",
    m2Label: "Sapa Sol churamusqamanta kutichisqa qullqi",
    m3Value: "51.2 x 1,000",
    m3Label: "Andes suyukunapi chichuy tupa",
    m4Value: "Ley 30364",
    m4Label: "Warmi maqanakuykunata tukuchinapaq simi kamachikuy",

    // Section 1: Diagnosis
    s1Title: "1. Yachay Taripasqakuna wan Cheqaq Yachay Peru Suyupi",
    s1Subtitle: "Hampi yachay wan llaqta kawsay taripaykuna (PLANEA / MINSA / UNFPA).",
    c1Tag: "LLAQTA HAMPIY LLAKIKUY",
    c1Title: "Wawa Chichuy (<15 wata) wan Yuquy Maqanakuy",
    c1Desc: "Llapa 15 watamanta uray wawa chichuyqa yuquy maqanakuymantam jamun. Warmi wañuypa riesgonta pichqa kutita hatunyachin.",
    c1Btn: "🔍 Imaraykutaq kay simi? Cheqaq Yachay Qhaway",

    c2Tag: "SUYUKUNAPI CHIKAN KAY",
    c2Title: "Warmi Maqanakuy wan Suyu Chikan Puririy",
    c2Desc: "Pampa, punakuna wan amaru sach'a-sach'amanta sipaskuna kinsa kutita aswan riesgo kanku mana munallisqa chichuymanta.",
    c2Btn: "🔍 Imaraykutaq kay paskan? Imaraykuy Qhaway",

    c3Tag: "WASIWAN AYPACHIY PISI KAY",
    c3Title: "MINSA Postakuna wan Consultoriokuna",
    c3Desc: "100 postakunamanta 35 postallam acreditado kanku NTS N° 130 kama confidential consejeríawan.",
    c3Btn: "🔍 Imaraykutaq pisi kay kan? MINSA Taripay Qhaway",

    // Section 2: ROI & Cost of Inaction
    s2Title: "2. Costo-Beneficio wan Qullqi Kutichiy Taripay (ROI)",
    s2Subtitle: "Congresopa Presupuesto Comisión wan MEFpaq qullqi yachay razonkunaman.",
    roi1Badge: "SUYU QULLQI CHINKACHIY",
    roi1Title: "Mana Ruraypa Suyu Qullqi Chinkachisqan",
    roi1Desc: "Hark'ayta unaykachiyqa Estado nisqaman <strong>S/ 1,200 Millones soles sapa wata</strong> (0.45% PBI) qullqi chinkachiyta apamun.",
    roi1Btn: "📊 0.45% PBI Chinkachiymanta T'aqay Qhaway",

    roi2Badge: "SUYU QULLQI HAP'ICHIY",
    roi2Title: "Llaqta Qullqi Kutichiy (S/ 7.00 sapa Sol)",
    roi2Desc: "UNFPA wan OPS yachaykuna certificankum sapa S/ 1.00 Sol churamusqa <strong>S/ 7.00 Soles directotam ahorran</strong> hospitalkunapi.",
    roi2Btn: "📊 Sapa Sol Ahorromanta Actuarial T'aqay Qhaway",

    // Section 3: Charts
    scTitle: "3. Llimp'i Unanchakuna wan Peru Suyupa Chikan Kaynin",
    scSubtitle: "ENDES wan Matriz PLANEA 2025-2030 yupay yachaykuna.",
    chart1Title: "Sipaskunapa Chichuynin Suyukunapi (1,000 sipasmanta)",
    chart1Sub: "ENDES / PLANEA",
    g1Lbl1: "Loreto (Amaru sach'a-sach'a)",
    g1Lbl2: "Huancavelica (Chawpi Puna)",
    g1Lbl3: "Cajamarca (Chinchay Puna)",
    g1Lbl4: "Promedio Región Andina (PLANEA)",
    g1Lbl5: "Lima Metro wan Callao",
    chart2Title: "MINSA Consultorio Amigable Acreditación",
    chart2Sub: "Nivel I-3 / I-4",
    g2Lbl1: "Acreditado Postakuna",
    g2Lbl2: "Presupuesto Pisi Kay",
    chart2Note: "*65% qullqi pisi kay rayku postakuna mana amigable atinkuchu confidential consejería quyta.",

    // Section 4: Fact Check
    sfcTitle: "4. Pantaykuna vs Cheqaq Yachay (Fact-Checking)",
    sfcSubtitle: "MINSA, UNFPA wan Código Penal nisqapa yanapasqan tapuykunaman kutichiy.",
    fcBadgeMyth: "PANTAKUSQA SIMI",
    fcBadgeEv: "CHEQAQ HAMPI YACHAY",
    fc1MythTitle: "❌ \"Yachay wasipi yachachiyqa sipaskunata múnayta qun.\"",
    fc1MythDesc: "Sapa kutilla rimay yachay wasikunapi consejería hark'anapaq.",
    fc1EvTitle: "✓ Cheqaq Taripasqa:",
    fc1EvDesc: "MINSA wan UNFPA yachaykuna rikuchinku consejería wan ESI <strong>1.5 watakama unaykachin múnay puririyta</strong> wan chichuyta pisiyachin.",
    fc2MythTitle: "❌ \"Sipaskunapa hampinpi qullqi churayqa chinkachisqam.\"",
    fc2MythDesc: "Presupuesto comisionpi rimay prevención qullqi chinkachiy kasqanmanta.",
    fc2EvTitle: "✓ Cheqaq Taripasqa:",
    fc2EvDesc: "MEF wan UNFPA yachaykuna ninku <strong>S/ 7.00 Soles ahorrasqam sapa S/ 1.00 Sol churamusqamanta</strong> prevención nisqapi.",
    fc3MythTitle: "❌ \"15 watamanta uray wawa chichuyqa ayllulpa asuntomnmi.\"",
    fc3MythDesc: "Maqanakuy pacay múnay chichuy natural kasqanmanta rimay.",
    fc3EvTitle: "✓ Cheqaq Taripasqa:",
    fc3EvDesc: "Artículo 173 Código Penal nianmi 15 watamanta uray chichuyqa yuquy maqanakuymi, Estado nisqapa amachanan obligatorios.",

    // Section 5: Legal Framework
    s3Title: "5. Peru Suyupa Simi Kamachinkuna wan Huñunakuykuna",
    s3Subtitle: "Suyu politica tanteaykunapaq simi kamachi k'aspikuna.",
    l1Tag: "SUYU KAMACHI",
    l1Title: "Ley 30364 Peru Suyu",
    l1Desc: "Warmikuna wan ayllukuna maqanakuymanta amachanapaq presupuestota garantizan.",
    l2Tag: "WAWA AMACHAY",
    l2Title: "Código de los Niños y Adolescentes",
    l2Desc: "Wawakunapa hampi, yachay wan amachasqa kay derechonta waqaychan.",
    l3Tag: "SUYUKUNA HUÑUNAKUY",
    l3Title: "Plan Andino (PLANEA 2025-2030)",
    l3Desc: "ORAS-CONHU, UNFPA wan OPS nisqaman 2030 watapaq wawa chichuyta tukuchinapaq simi.",

    // Section 6: Regional Data Explorer
    s4Title: "6. Peru Suyupa Unanchankuna Qhawaq",
    s4Subtitle: "Chichuy tupa, postakuna wan qullqi chinkachiy suyukunapi.",
    expLblRegion: "Peru Suyupa Regionnin Akllay",
    expFertilityLbl: "Sipaskunapa Chichuynin:",
    expCoverageLbl: "MINSA Acreditacion (I-3 / I-4):",
    expInactionLbl: "Mana Ruraypa Qullqi Chinkachiynin:",
    expPriorityLbl: "Suyu Kamachiypa Prioridadnin:",
    expDisclaimer: "ℹ️ Pukyu: PLANEA 2025-2030, MINSA Perú wan ENDES encuestas.",
    optLoreto: "Loreto (Amaru sach'a-sach'a)",
    optHuancavelica: "Huancavelica (Chawpi Puna)",
    optCajamarca: "Cajamarca (Chinchay Puna)",
    optPiura: "Piura (Chinchay Chala)",
    optCusco: "Cusco (Qullasuyu Puna)",
    optLima: "Lima Metro wan Callao",

    // Section 7: Manifesto
    s5Title: "7. Kamachiy Mañakuy wan Suyu Politica Agenda (5 Puntos)",
    s5Subtitle: "Cerebro de Datos yachaykunawan respaldado. Nit'iy sustento técnico qhawanaykipaq.",
    mItem1: "1. Presupuesto Leypi clasificador específico Programa 0002 MINSA nisqapaq.",
    mItem2: "2. Cero Tolerancia protocolo wan inmediatez atención MIMP wan comisarías nisqapi.",
    mItem3: "3. Educación Sexual Integral (ESI) yachay wasikunapi allin purichiy.",
    mItem4: "4. Intercultural wan bilingüe atención runa sipaskunapaq andino wan amazónico suyupi.",
    mItem5: "5. Defensoría del Pueblopa umallisqan interinstitucional qhawapakuynin.",
    pBtnText: "<i class='fa-solid fa-magnifying-glass-chart'></i> Sustento Técnico Qhaway",

    // Section 8: Official Sources & References
    s8Title: "8. Cheqaq Pukyukuna wan Simi Qillqakuna (Fuentes Originales)",
    s8Subtitle: "Peru Suyupa wan organismo de cooperación nisqapa cheqaq qillqankuna wan yupaynin plataforma sustentanapaq.",
    src1Title: "Plan Andino (PLANEA 2025-2030)",
    src1Desc: "Sipaskunapa chichuynin hark'anapaq Plan Nacional wan Andes suyukunapa (Peru, Bolivia, Ecuador, Colombia, Venezuela, Chile) metankuna.",
    src2Title: "Encuesta ENDES 2022-2023",
    src2Desc: "INEI Peru suyupa salud wan chichuy tupa encuestan. Suyu chichuy yupaykunapa wan pisi kaykunapa pukyun.",
    src3Title: "Metodología Actuarial MILENA",
    src3Desc: "Sipaskunapa chichuyninmanta qullqi chinkachiy yachay. 0.45% PBI (S/ 1,200 Millones/wata) wan S/ 7:1 ROI sustentan.",
    src4Title: "NTS N° 130-MINSA/DGIESP",
    src4Desc: "MINSA Peru suyupa norma técnican sipaskunata postakunapi amigable atención quypaq (I-3 wan I-4).",
    src5Title: "Supervisión a Centros CEM y Postas",
    src5Desc: "Defensoría del Pueblopa supervisión qillqan violencias victima warmikunata postakunapi wan CEMpi amachanapaq.",
    src6Title: "Código Penal del Perú (Art. 173)",
    src6Desc: "Código Penal (Art. 173 wawa yuquy maqanakuy) wan Ley 30364 warmikunata maqanakuymanta amachanapaq.",

    // Modals
    modalCloseText: "Tukuchiy / Wisp'ay",
    sciTitle: "Congreso wan MEFpaq Hampi Yachay wan Cheqaq Taripaykuna",
    sciSec1Title: "🏛️ 1. Hampi Yachay wan Obstétrica Taripay (MINSA / PAHO / OMS)",
    sciSec1Desc: "MINSA yachaykuna ninku 15 watamanta uray chichuq sipaskuna <strong>5 kutita aswan riesgo wañuypaq</strong> kanku. Llapa chichuy kay watapi yuquy maqanakuymantam jamun (Art. 173 Código Penal).",
    sciSec2Title: "💰 2. Suyu Qullqi Chinkachiy wan MILENA Yachay (UNFPA)",
    sciSec2Desc: "Estado mana rurasqan rayku Peru <strong>S/ 1,200 Millones soles sapa wata</strong> chinkachin (0.45% PBI). 40% chinkachiyqa yachay wasi saqesqanmanta hamun.",
    sciSec3Title: "📈 3. Llaqta Qullqi Kutichiy (ROI S/ 7:1)",
    sciSec3Desc: "Sapa 1.00 Sol ESI wan MINSA Consultorio Amigable nisqaman churamusqa 7.00 Soles directotam ahorran hospitalkunapi.",
    sciSec4Title: "⚖️ 4. Ley 30364 wan Código de NNA Hunt'ay",
    sciSec4Desc: "Estadopa obligaciónninmi CEM wan postakunamanta qullqi quy victimakunata amachanapaq.",
    sciCloseBtnText: "Compendio Científico Wisp'ay",

    sumModalTitle: "Kamachiqkunapaq Ficha Técnica Ejecutiva",
    sumHeaderBadge: "CONGRESO WAN MEF COMISIONKUNAPAQ RESUMEN EJECUTIVO",
    sumHeaderTitle: "Maqanakuykunata wan Wawa Chichuyta Hark'ay Peru Suyupi (PLANEA 2025-2030)",
    sumGrid1Lbl: "🎯 Strategic Target / Meta:",
    sumGrid1Val: "Ama Múnaychu 15 watamanta uray sipaskunapi 2030 watapaq (Plan Andino PLANEA).",
    sumGrid2Lbl: "💰 Social Return / ROI:",
    sumGrid2Val: "S/ 7.00 ahorrasqa sapa Sol ESI wan MINSA postakunapi churamusqamanta.",
    sumGrid3Lbl: "⚠️ Cost of Inaction:",
    sumGrid3Val: "S/ 1,200 Millones/wata aswan (0.45% PBI suyumanta).",
    sumGrid4Lbl: "⚖️ Legal Backing / Simi Kamachi:",
    sumGrid4Val: "Ley 30364, Código Penal Art. 173 wan Código de NNA Peru Suyumanta.",
    sumDemandsTitle: "📌 Suyu Kamachiypa Mañakuyninkuna:",
    sumDem1: "Presupuesto Leypi clasificador específico Programa 0002 MINSA nisqapaq.",
    sumDem2: "100% postakuna I-3 wan I-4 acreditación amigable consejeríawan.",
    sumDem3: "Educación Sexual Integral (ESI) intercultural nisqawan yachay wasikunapi garantizay.",
    sumCloseBtnText: "Tukuchiy / Ficha Wisp'ay",

    // Footer
    fTitle: "Incidencia Política Perú 🇵🇪 • PLANEA 2025-2030",
    fText: "Regional Hackatón Creativa (PLANEA 2025-2030) nisqapa Suyu Kamachiy Qhawanan. Guía de Marca Oficial nisqawan wan MINSA Perú, ORAS-CONHU, UNFPA, OPS/OMS avalninwan rurasqa.",
    fCol2Title: "Marcos Éticos y Legales / Simikuna",
    fLic: "• Licencia Atribución-No Comercial 4.0 (CC BY-NC 4.0)",
    fSafeguard: "• Peru suyupi wawakunapa amachaynin simikuna allin hunt'asqa.",
    fLawFramework: "• Ley 30364 wan Código de los Niños y Adolescentes nisqapa marco normativon.",
    fCol3Title: "Entidades Avaladoras / Yupaychasoqkuna",
    fCopyRights: "© 2026 Regional Andean Plan Platform (PLANEA 2025-2030). Documento de Incidencia Política para el Perú."
  }
};

// --- 3. BASE DE DATOS DE EVIDENCIA PROFUNDA DEL CEREBRO DE DATOS ---
const deepEvidenceDatabase = {
  c1: {
    title: "Sustento del Cerebro de Datos: Embarazo Infantil como Abuso Sexual (PLANEA / MINSA / Art. 173)",
    titleEn: "Data Brain Sustenance: Child Pregnancy as Sexual Abuse",
    titleQu: "Cerebro de Datos Yachay: Wawa Chichuy Yuquy Maqanakuymanta (Art. 173)",
    content: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-crimson/10 border border-brand-crimson/30 rounded-xl text-slate-200">
          <strong>⚖️ Código Penal del Perú (Art. 173):</strong> Todo contacto sexual con una niña menor de 14 años es jurídicamente un delito consumado de Violación Sexual de Menor. Entre los 14 y 15 años, la ley presume la invalidez del consentimiento por asimetría de poder.
        </p>
        <p>
          <strong>🩺 Diagnóstico Clínico del MINSA Perú:</strong> Las gestaciones en menores de 15 años presentan una tasa de mortalidad materna 5 veces superior a la de mujeres adultas debido a la inmadurez pélvica y uterina, aumentando drásticamente los riesgos de preeclampsia severa, hemorragia obstétrica y fístula.
        </p>
        <p>
          <strong>📉 Matriz PLANEA (UNFPA):</strong> El 80% de niñas peruanas madres antes de los 15 años truncan de forma definitiva su educación básica regular, perpetuando trampas intergeneracionales de pobreza y exclusión laboral formal.
        </p>
      </div>
    `,
    contentEn: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-crimson/10 border border-brand-crimson/30 rounded-xl text-slate-200">
          <strong>⚖️ Peruvian Penal Code (Art. 173):</strong> Any sexual contact with a girl under 14 is legally defined as statutory rape. Between ages 14 and 15, the law presumes invalid consent due to power asymmetry.
        </p>
        <p>
          <strong>🩺 Clinical Diagnosis (MINSA Peru):</strong> Pregnancies in girls under 15 carry a maternal mortality rate 5 times higher than in adult women due to pelvic and uterine immaturity, dramatically increasing severe preeclampsia and obstetric hemorrhage.
        </p>
        <p>
          <strong>📉 PLANEA Matrix (UNFPA):</strong> 80% of Peruvian girls who become mothers before age 15 permanently drop out of school, perpetuating intergenerational poverty traps and formal labor market exclusion.
        </p>
      </div>
    `,
    contentQu: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-crimson/10 border border-brand-crimson/30 rounded-xl text-slate-200">
          <strong>⚖️ Código Penal Peru Suyu (Art. 173):</strong> Llapa yuquy múnay 14 watamanta uray sipaswanqa yuquy maqanakuymi. 14 wan 15 watamanta simi kamachi nianmi mana validos consentimientochu.
        </p>
        <p>
          <strong>🩺 MINSA Perú Hampi Yachay:</strong> 15 watamanta uray chichuyqa pichqa kutitam warmi wañuypa riesgonta hatunyachin pisi pelvis wan utero kasqan rayku.
        </p>
        <p>
          <strong>📉 PLANEA Matriz (UNFPA):</strong> 80% 15 watamanta uray chichuq sipaskuna yachay wasita saqenku sinchi wakcha kawsaypi qhepakuspa.
        </p>
      </div>
    `
  },
  c2: {
    title: "Sustento del Cerebro de Datos: Disparidades Territoriales y Violencias (B_MARCO REGIONAL / ENDES)",
    titleEn: "Data Brain Sustenance: Territorial Disparities & Violence",
    titleQu: "Cerebro de Datos Yachay: Suyu Chikan Kay wan Maqanakuy (B_MARCO REGIONAL / ENDES)",
    content: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-purple/10 border border-brand-purple/30 rounded-xl text-slate-200">
          <strong>🏔️ Datos de Fecundidad ENDES / PLANEA:</strong> Loreto (85.4 x 1,000) y Huancavelica (68.2 x 1,000) triplican la tasa de fecundidad adolescente frente a Lima (41.2 x 1,000). Esta inequidad responde a la menor presencia de servicios de protección en el ámbito rural.
        </p>
        <p>
          <strong>🗣️ Barreras Lingüísticas y Culturales:</strong> En postas médicas rurales del ámbito andino y amazónico no se cuenta con personal bilingüe (Quechua, Awajún, Shipibo-Konibo), restringiendo la consejería confidencial e informada.
        </p>
        <p>
          <strong>🛡️ Desprotección Judicial:</strong> El 78% de las agresiones sexuales a menores ocurren en el entorno cercano o familiar, donde la falta de Centros Emergencia Mujer (CEM) rurales incrementa la impunidad.
        </p>
      </div>
    `,
    contentEn: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-purple/10 border border-brand-purple/30 rounded-xl text-slate-200">
          <strong>🏔️ ENDES / PLANEA Fertility Data:</strong> Loreto (85.4 per 1,000) and Huancavelica (68.2 per 1,000) triple Lima's adolescent fertility rate (41.2 per 1,000) due to lack of decentralized protection services.
        </p>
        <p>
          <strong>🗣️ Linguistic & Cultural Barriers:</strong> Rural health posts in Andean and Amazonian regions lack bilingual staff (Quechua, Awajún, Shipibo-Konibo), restricting confidential and informed counseling.
        </p>
        <p>
          <strong>🛡️ Judicial Vulnerability:</strong> 78% of sexual assaults against minors occur in close family environments, where the absence of rural Women Emergency Centers (CEM) fuels impunity.
        </p>
      </div>
    `,
    contentQu: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-purple/10 border border-brand-purple/30 rounded-xl text-slate-200">
          <strong>🏔️ ENDES / PLANEA Yupaykuna:</strong> Loreto (85.4 x 1,000) wan Huancavelica (68.2 x 1,000) kinsa kutitam Limamanta (41.2 x 1,000) aswan chichuy tupayuq kanku.
        </p>
        <p>
          <strong>🗣️ Rimay wan Kawsay Pisi Kay:</strong> Andes wan Amazoníapi postakuna mana Runasimi, Awajún utaq Shipibo rimaypi hampisqachu kanku.
        </p>
        <p>
          <strong>🛡️ Simi Kamachi Pisi Kay:</strong> 78% yuquy maqanakuykunata ayllukuna ukhupi ruranku, CEM postakuna pisi kasqan rayku.
        </p>
      </div>
    `
  },
  c3: {
    title: "Sustento del Cerebro de Datos: Deficiencias en Consultorios Amigables (NTS N° 130 MINSA)",
    titleEn: "Data Brain Sustenance: Infrastructure Deficits in MINSA Clinics",
    titleQu: "Cerebro de Datos Yachay: Consultorios Amigables Pisi Kay (NTS N° 130 MINSA)",
    content: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-accent/10 border border-brand-accent/30 rounded-xl text-slate-200">
          <strong>📊 Evaluación de Cobertura MINSA:</strong> Solo el 35% de los establecimientos de salud del primer nivel (categorías I-3 y I-4) poseen acreditación oficial bajo la Norma Técnica de Salud NTS N° 130-MINSA para atención amigable de adolescentes.
        </p>
        <p>
          <strong>💸 Desbalance Presupuestario (PP 0002):</strong> El Programa Presupuestal 0002 (Salud Materno Neonatal) ejecuta el 85% de sus fondos en atenciones asistenciales hospitalarias y solo un 15% en prevención y consejería amigable.
        </p>
      </div>
    `,
    contentEn: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-accent/10 border border-brand-accent/30 rounded-xl text-slate-200">
          <strong>📊 MINSA Coverage Evaluation:</strong> Only 35% of level I-3 and I-4 primary health centers hold official accreditation under NTS N° 130-MINSA for youth-friendly care.
        </p>
        <p>
          <strong>💸 Budget Imbalance (PP 0002):</strong> Budget Program 0002 (Maternal Neonatal Health) spends 85% of funds on hospital emergency care and only 15% on primary prevention and youth counseling.
        </p>
      </div>
    `,
    contentQu: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-accent/10 border border-brand-accent/30 rounded-xl text-slate-200">
          <strong>📊 MINSA Postakuna Taripay:</strong> 35% postallam I-3 wan I-4 nivelmanta NTS N° 130-MINSA amigable acreditaciónniyuq kanku.
        </p>
        <p>
          <strong>💸 PP 0002 Qullqi Chinkachiy:</strong> PP 0002 programa 85% qullqintam hospital urgenciaman churan, 15% qullqillatam prevención consejeríaman.
        </p>
      </div>
    `
  },
  roi1: {
    title: "Sustento del Cerebro de Datos: Metodología MILENA y Pérdida del 0.45% del PBI",
    titleEn: "Data Brain Sustenance: MILENA Methodology & 0.45% GDP Loss",
    titleQu: "Cerebro de Datos Yachay: MILENA Yachay wan 0.45% PBI Chinkachisqa",
    content: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-crimson/10 border border-brand-crimson/30 rounded-xl text-slate-200">
          <strong>💰 Pérdida Anual Estatal (UNFPA / MEF):</strong> La inacción estatal genera una pérdida económica anual de más de <strong>S/ 1,200 Millones de Soles</strong> (0.45% del PBI del Perú).
        </p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><strong>S/ 480 M:</strong> Menores ingresos laborales futuros de mujeres afectadas por abandono escolar.</li>
          <li><strong>S/ 350 M:</strong> Gasto asistencial de emergencia en MINSA y EsSalud para urgencias obstétricas y neonatales.</li>
          <li><strong>S/ 220 M:</strong> Menor recaudación de impuestos directos e indirectos (IGV / Renta).</li>
          <li><strong>S/ 150 M:</strong> Gasto operativo en el sistema judicial y policial.</li>
        </ul>
      </div>
    `,
    contentEn: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-crimson/10 border border-brand-crimson/30 rounded-xl text-slate-200">
          <strong>💰 Annual State Loss (UNFPA / MEF):</strong> Inaction creates an annual economic loss of over <strong>1.2 Billion Soles</strong> (0.45% of Peru's GDP).
        </p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><strong>S/ 480 M:</strong> Lower future labor earnings due to school dropout.</li>
          <li><strong>S/ 350 M:</strong> Emergency medical spending in MINSA and EsSalud for obstetric and neonatal care.</li>
          <li><strong>S/ 220 M:</strong> Lost tax collection (VAT and Income tax).</li>
          <li><strong>S/ 150 M:</strong> Operational costs in judicial and police enforcement.</li>
        </ul>
      </div>
    `,
    contentQu: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-crimson/10 border border-brand-crimson/30 rounded-xl text-slate-200">
          <strong>💰 Suyu Qullqi Chinkachiy (UNFPA / MEF):</strong> Mana rurayqa <strong>S/ 1,200 Millones soles sapa wata</strong> (0.45% PBI) qullqitam chinkachin.
        </p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><strong>S/ 480 M:</strong> Pisi llank'ay qullqi yachay wasi saqesqan rayku.</li>
          <li><strong>S/ 350 M:</strong> Emergency hospital gasto MINSA wan EsSalud nisqapi.</li>
          <li><strong>S/ 220 M:</strong> Pisi impuesto churay (IGV / Renta).</li>
          <li><strong>S/ 150 M:</strong> Comisaría wan juez gasto.</li>
        </ul>
      </div>
    `
  },
  roi2: {
    title: "Sustento del Cerebro de Datos: Retorno de Inversión S/ 7.00 por Sol (OPS / UNFPA)",
    titleEn: "Data Brain Sustenance: S/ 7.00 ROI per Sol (PAHO / UNFPA)",
    titleQu: "Cerebro de Datos Yachay: S/ 7.00 Qullqi Kutichiy sapa Sol (OPS / UNFPA)",
    content: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-teal/10 border border-brand-teal/30 rounded-xl text-slate-200">
          <strong>📈 Análisis Costo-Efectividad Actuarial:</strong> Cada <strong>S/ 1.00 Sol invertido</strong> en consejería amigable y prevención primaria ahorra al Estado peruano <strong>S/ 7.00 Soles</strong> en costos futuros.
        </p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><strong>S/ 3.20:</strong> Ahorro directo en servicios hospitalarios de alta complejidad y UCIN neonatal.</li>
          <li><strong>S/ 2.50:</strong> Retorno tributario futuro por mayor nivel educativo y empleabilidad formal.</li>
          <li><strong>S/ 1.30:</strong> Reducción de costos en programas de subsidios asistenciales.</li>
        </ul>
      </div>
    `,
    contentEn: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-teal/10 border border-brand-teal/30 rounded-xl text-slate-200">
          <strong>📈 Actuarial Cost-Effectiveness:</strong> Every <strong>1.00 Sol invested</strong> in youth counseling and primary prevention saves Peru <strong>7.00 Soles</strong> in future costs.
        </p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><strong>S/ 3.20:</strong> Direct savings in high-complexity hospital care and neonatal ICU.</li>
          <li><strong>S/ 2.50:</strong> Future tax revenues from higher educational attainment and formal employment.</li>
          <li><strong>S/ 1.30:</strong> Cost reduction in state welfare subsidy programs.</li>
        </ul>
      </div>
    `,
    contentQu: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p class="p-3 bg-brand-teal/10 border border-brand-teal/30 rounded-xl text-slate-200">
          <strong>📈 Qullqi Kutichiy Yachay:</strong> Sapa <strong>S/ 1.00 Sol churamusqa</strong> consejería amigable nisqaman <strong>S/ 7.00 Soles directotam ahorran</strong>.
        </p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><strong>S/ 3.20:</strong> Hospital UCIN ahorrasqa.</li>
          <li><strong>S/ 2.50:</strong> Impuesto kutichiy yachaywasita tukusqan rayku.</li>
          <li><strong>S/ 1.30:</strong> Subsidio gasto pisiyachiy.</li>
        </ul>
      </div>
    `
  },

  p1: {
    title: "Sustento del Cerebro de Datos (Punto 1): Clasificador Presupuestal Protegido PP 0002 MINSA",
    titleEn: "Data Brain Sustenance (Point 1): Protected Budget Line PP 0002 MINSA",
    titleQu: "Cerebro de Datos Yachay (Punto 1): PP 0002 MINSA Presupuesto Amachasqa",
    content: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-brand-teal/15 border border-brand-teal/40 rounded-xl text-slate-100">
          <p class="font-bold text-brand-teal mb-1">📖 Fuente Oficial: Matriz PLANEA 2025-2030 (Eje 3) / MINSA Perú / MEF</p>
          <p class="text-xs">Diagnóstico Presupuestario del Programa Presupuestal 0002 (Salud Materno Neonatal).</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Desbalance del Gasto Público:</strong> En el Perú, el Programa Presupuestal 0002 destina el 85% de sus fondos a atenciones intrahospitalarias de urgencia obstétrica y solo el 15% a la prevención primaria y consejería amigable para adolescentes en el primer nivel de atención (I-3 y I-4).</p>
          <p><strong>2. Brecha de Consultorios Acreditados:</strong> De acuerdo con la Norma NTS N° 130-MINSA, solo 35 de cada 100 centros del primer nivel cuentan con consultorios amigables acreditados con personal capacitado y disponibilidad continua de métodos anticonceptivos modernos reversibles de larga duración (LARC).</p>
          <p><strong>3. Mecanismo Legislativo Solicitado:</strong> Crear un producto/clasificador de gasto protegido en la Ley de Presupuesto Público del Sector Público que impida la reasignación de fondos de prevención hacia otros rubros, asegurando la compra centralizada de insumos LARC y la contratación exclusiva de obstetras y psicólogos en postas rurales de todo el país.</p>
        </div>
      </div>
    `,
    contentEn: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-brand-teal/15 border border-brand-teal/40 rounded-xl text-slate-100">
          <p class="font-bold text-brand-teal mb-1">📖 Official Source: PLANEA Matrix 2025-2030 (Pillar 3) / MINSA Peru / MEF</p>
          <p class="text-xs">Budgetary Diagnosis of Budget Program 0002 (Maternal Neonatal Health).</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Public Spending Imbalance:</strong> In Peru, Budget Program 0002 allocates 85% of funds to hospital emergency obstetric care and only 15% to primary prevention and youth counseling at primary health levels (I-3 & I-4).</p>
          <p><strong>2. Accredited Clinics Gap:</strong> According to NTS N° 130-MINSA, only 35 of 100 primary centers feature accredited youth clinics with trained staff and availability of modern long-acting reversible contraceptives (LARC).</p>
          <p><strong>3. Requested Legislative Mechanism:</strong> Create a protected spending line item in the Public Budget Law preventing reallocations from prevention to other areas, securing LARC procurement and dedicated midwives and psychologists in rural health posts nationwide.</p>
        </div>
      </div>
    `,
    contentQu: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-brand-teal/15 border border-brand-teal/40 rounded-xl text-slate-100">
          <p class="font-bold text-brand-teal mb-1">📖 Pukyu: PLANEA Matriz 2025-2030 (Eje 3) / MINSA Perú / MEF</p>
          <p class="text-xs">PP 0002 Programa Presupuesto Taripay.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Qullqi Chinkachiy Pisi Kay:</strong> PP 0002 programa 85% qullqintam hospital urgenciaman churan, 15% qullqillatam prevención consejeríaman.</p>
          <p><strong>2. Acreditado Postakuna Pisi Kay:</strong> NTS N° 130-MINSA kama, 35% postallam amigable acreditaciónniyuq kanku LARC anticonceptivokunawan.</p>
          <p><strong>3. Kamachiy Mañakuy:</strong> Presupuesto Leypi clasificador específico rurana qullqi hark'anapaq, LARC hampikuna rantinapaq wan psicólogos postakunapi llank'anapaq.</p>
        </div>
      </div>
    `
  },
  p2: {
    title: "Sustento del Cerebro de Datos (Punto 2): Cero Tolerancia y Kit de Emergencia Sexual MIMP / PNP",
    titleEn: "Data Brain Sustenance (Point 2): Zero Tolerance & Immediate Care MIMP / PNP",
    titleQu: "Cerebro de Datos Yachay (Punto 2): Ama Múnaychu wan Kit de Emergencia Sexual MIMP / PNP",
    content: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-brand-crimson/15 border border-brand-crimson/40 rounded-xl text-slate-100">
          <p class="font-bold text-brand-crimson mb-1">📖 Fuente Oficial: Código Penal del Perú (Art. 173) / Matriz PLANEA Eje Violencias / MINSA</p>
          <p class="text-xs">Evidencia sobre Impunidad y Rutas de Atención Inmediata en Salud y Justicia.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Presunción Legal de Violación Sexual:</strong> El Artículo 173 del Código Penal peruano establece que el 100% de las gestaciones en niñas menores de 15 años son jurídicamente producto de agresión sexual (Violación de Menor), requiriendo persecución penal obligatoria de oficio.</p>
          <p><strong>2. Barreras en la Ruta de Atención:</strong> Los datos del Cerebro de Datos indican que solo el 38% de las niñas agredidas acceden al Kit de Emergencia Sexual (Anticoncepción Oral de Emergencia AOE y profilaxis contra VIH/ITS) en las primeras 72 horas debido a la falta de coordinación interinstitucional entre comisarías (PNP), Centros Emergencia Mujer (MIMP) y postas (MINSA).</p>
          <p><strong>3. Mecanismo Legislativo Solicitado:</strong> Aprobar un protocolo unificado de cumplimiento obligatorio que disponga la activación automática de la ruta médico-legal e investigativa en menos de 24 horas, prohibiendo la revictimización y garantizando la atención inmediata en cualquier centro de salud del Perú.</p>
        </div>
      </div>
    `,
    contentEn: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-brand-crimson/15 border border-brand-crimson/40 rounded-xl text-slate-100">
          <p class="font-bold text-brand-crimson mb-1">📖 Official Source: Penal Code (Art. 173) / PLANEA Violence Matrix / MINSA</p>
          <p class="text-xs">Evidence on Impunity and Immediate Health and Justice Care Routes.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Legal Presumption of Statutory Rape:</strong> Article 173 of the Peruvian Penal Code mandates that 100% of pregnancies in girls under 15 legally stem from sexual assault, triggering mandatory ex officio criminal prosecution.</p>
          <p><strong>2. Care Route Barriers:</strong> Data Brain evidence shows only 38% of assaulted girls receive the Sexual Emergency Kit (Emergency Contraception and HIV/STI prophylaxis) within 72 hours due to lack of coordination between police (PNP), Women Emergency Centers (MIMP), and health posts (MINSA).</p>
          <p><strong>3. Requested Legislative Mechanism:</strong> Approve a mandatory unified protocol triggering automated medical-legal and investigative responses in under 24 hours, prohibiting revictimization and guaranteeing immediate care in all Peruvian health centers.</p>
        </div>
      </div>
    `,
    contentQu: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-brand-crimson/15 border border-brand-crimson/40 rounded-xl text-slate-100">
          <p class="font-bold text-brand-crimson mb-1">📖 Pukyu: Código Penal (Art. 173) / PLANEA Matriz / MINSA</p>
          <p class="text-xs">Atención Inmediata wan Simi Kamachi Yachay.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Yuquy Maqanakuy Simi:</strong> Artículo 173 Código Penal nianmi 100% 15 watamanta uray chichuyqa yuquy maqanakuymi.</p>
          <p><strong>2. Kit Emergencia Sexual Pisi Kay:</strong> 38% sipaskunallam Kit Emergencia Sexual nisqata chaskinku 72 horas ukhupi comisarías, MIMP wan MINSA mana huñunasqa kasqan rayku.</p>
          <p><strong>3. Kamachiy Mañakuy:</strong> Protocolo unificado aprobay 24 horas ukhupi atención inmediata quyta llapa postakunapi.</p>
        </div>
      </div>
    `
  },
  p3: {
    title: "Sustento del Cerebro de Datos (Punto 3): Educación Sexual Integral (ESI) Cuentas MINEDU",
    titleEn: "Data Brain Sustenance (Point 3): Comprehensive Sexuality Education MINEDU",
    titleQu: "Cerebro de Datos Yachay (Punto 3): ESI Yachay Wasikunapi MINEDU Presupuesto",
    content: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-brand-purple/15 border border-brand-purple/40 rounded-xl text-slate-100">
          <p class="font-bold text-brand-purple mb-1">📖 Fuente Oficial: Matriz PLANEA 2025-2030 (Eje 1 Educación) / ENDES / UNFPA</p>
          <p class="text-xs">Evidencia sobre Prevención del Abuso Infantil en Entornos Escolares.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Entorno de Agresión:</strong> La Encuesta ENDES reporta que el 78% de los abusos sexuales contra menores de edad ocurren en el entorno familiar o cercano de la víctima. Las escuelas constituyen el principal espacio de alerta temprana y protección.</p>
          <p><strong>2. Impacto Demostrado de la ESI:</strong> La evidencia científica de UNFPA y OPS confirma que la consejería y la ESI estructurada <strong>retrasan el inicio de las relaciones sexuales hasta en 1.5 años</strong> y aumentan en más del 60% la identificación y denuncia del acoso sexual.</p>
          <p><strong>3. Mecanismo Legislativo Solicitado:</strong> Garantizar la asignación presupuestal obligatoria en el pliego del Ministerio de Educación (MINEDU) para la capacitación estandarizada del 100% de tutores y psicólogos escolares de la Educación Básica Regular (EBR).</p>
        </div>
      </div>
    `,
    contentEn: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-brand-purple/15 border border-brand-purple/40 rounded-xl text-slate-100">
          <p class="font-bold text-brand-purple mb-1">📖 Official Source: PLANEA Matrix 2025-2030 (Education Pillar) / ENDES / UNFPA</p>
          <p class="text-xs">Evidence on Child Abuse Prevention in School Environments.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Abuse Environment:</strong> ENDES survey reports 78% of sexual assaults against minors occur in family or close environments. Schools serve as the primary early warning and protection space.</p>
          <p><strong>2. Demonstrated CSE Impact:</strong> UNFPA and PAHO scientific evidence confirms structured CSE <strong>delays sexual debut by up to 1.5 years</strong> and increases harassment reporting by over 60%.</p>
          <p><strong>3. Requested Legislative Mechanism:</strong> Guarantee mandatory budget allocations in MINEDU for standardized training of 100% of tutors and school psychologists in regular basic education.</p>
        </div>
      </div>
    `,
    contentQu: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-brand-purple/15 border border-brand-purple/40 rounded-xl text-slate-100">
          <p class="font-bold text-brand-purple mb-1">📖 Pukyu: PLANEA Matriz 2025-2030 (Educación) / ENDES / UNFPA</p>
          <p class="text-xs">Maqanakuy Hark'ay Yachay Wasikunapi.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Maqanakuy Entorno:</strong> 78% yuquy maqanakuykunata ayllukuna ukhupi ruranku. Yachay wasikunam principal amachana espacio kanku.</p>
          <p><strong>2. ESI Impacto:</strong> UNFPA yachaykuna ninku ESI <strong>1.5 watakama unaykachin múnay puririyta</strong> wan denuncianasta 60% hatunyachin.</p>
          <p><strong>3. Kamachiy Mañakuy:</strong> MINEDU presupuestopi qullqi garantizay tutores wan psicólogos yachachinapaq.</p>
        </div>
      </div>
    `
  },
  p4: {
    title: "Sustento del Cerebro de Datos (Punto 4): Enfoque Intercultural y Bilingüe para Andes y Amazonía",
    titleEn: "Data Brain Sustenance (Point 4): Intercultural & Bilingual Approach Andes/Amazon",
    titleQu: "Cerebro de Datos Yachay (Punto 4): Intercultural wan Bilingüe Yachay Andes wan Amazonía",
    content: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-brand-accent/15 border border-brand-accent/40 rounded-xl text-slate-100">
          <p class="font-bold text-brand-accent mb-1">📖 Fuente Oficial: B_MARCO REGIONAL / ENDES Perú / MINSA / SIS</p>
          <p class="text-xs">Diagnóstico de Brechas Territoriales en Comunidades Altoandinas y Amazónicas.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Desproporción Geográfica de Fecundidad:</strong> Loreto registra la tasa más alta de maternidad adolescente del país (85.4 por 1,000), seguida de Huancavelica (68.2 por 1,000), cifras que duplican la media nacional y triplican la de Lima (41.2 por 1,000).</p>
          <p><strong>2. Barreras de Lengua y Transporte Fluvial:</strong> El 65% de las postas médicas en comunidades nativas amazónicas carecen de personal de salud que hable las lenguas originarias (Awajún, Wampis, Shipibo-Konibo) y no disponen de partidas presupuestarias del Seguro Integrado de Salud (SIS) para combustible o transporte fluvial de emergencias obstétricas.</p>
          <p><strong>3. Mecanismo Legislativo Solicitado:</strong> Asignar una partida de financiamiento descentralizado para la contratación de plazas de salud bilingües con bono de zona rural y garantizar la cobertura del 100% del transporte de emergencia médica del SIS en cuencas amazónicas y distritos altoandinos.</p>
        </div>
      </div>
    `,
    contentEn: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-brand-accent/15 border border-brand-accent/40 rounded-xl text-slate-100">
          <p class="font-bold text-brand-accent mb-1">📖 Official Source: B_MARCO REGIONAL / ENDES Peru / MINSA / SIS</p>
          <p class="text-xs">Diagnosis of Territorial Disparities in High-Andean and Amazonian Communities.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Geographic Fertility Imbalance:</strong> Loreto registers the highest teen fertility rate (85.4 per 1,000), followed by Huancavelica (68.2 per 1,000), doubling the national average and tripling Lima (41.2 per 1,000).</p>
          <p><strong>2. Language & Fluvial Transport Barriers:</strong> 65% of native Amazonian health posts lack native-language staff (Awajún, Wampis, Shipibo-Konibo) and lack SIS funding for boat fuel or obstetric emergency transfers.</p>
          <p><strong>3. Requested Legislative Mechanism:</strong> Allocate decentralized funding for bilingual health staff positions with rural bonuses and guarantee 100% coverage of SIS emergency medical transport in Amazonian basins and high-Andean districts.</p>
        </div>
      </div>
    `,
    contentQu: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-brand-accent/15 border border-brand-accent/40 rounded-xl text-slate-100">
          <p class="font-bold text-brand-accent mb-1">📖 Pukyu: B_MARCO REGIONAL / ENDES Perú / MINSA / SIS</p>
          <p class="text-xs">Suyu Chikan Kay Andes wan Amazoníapi.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Chichuy Chikan Tupa:</strong> Loreto (85.4 x 1,000) wan Huancavelica (68.2 x 1,000) iskay kutitam suyupa promedio doplanku.</p>
          <p><strong>2. Rimay wan Mayupi Puriy Pisi Kay:</strong> 65% postakuna amaru sach'a-sach'api mana Awajún, Wampis utaq Shipibo rimaytachu hampinku wan SIS gasolina pisi kanku.</p>
          <p><strong>3. Kamachiy Mañakuy:</strong> Bilingüe hampiqkunapaq qullqi churay wan SIS mayupi barcokuna 100% garantizay.</p>
        </div>
      </div>
    `
  },
  p5: {
    title: "Sustento del Cerebro de Datos (Punto 5): Monitoreo Multisectorial con Defensoría del Pueblo",
    titleEn: "Data Brain Sustenance (Point 5): Inter-institutional Monitoring by Ombudsman",
    titleQu: "Cerebro de Datos Yachay (Punto 5): Defensoría del Pueblopa Interinstitucional Qhawapakuynin",
    content: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-indigo-500/15 border border-indigo-500/40 rounded-xl text-slate-100">
          <p class="font-bold text-indigo-400 mb-1">📖 Fuente Oficial: Plan Andino PLANEA 2025-2030 / ORAS-CONHU / Metodología MILENA</p>
          <p class="text-xs">Gobernanza Multisectorial y Rendición de Cuentas Presupuestaria.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Fragmentación Institucional:</strong> Actualmente, los ministerios involucrados (MINSA, MINEDU, MIMP, MIDIS y MEF) operan con metas desligadas, ocasionando la pérdida anual de S/ 1,200 Millones de Soles por inacción estatal sin evaluación unificada.</p>
          <p><strong>2. Mandato del Plan Andino PLANEA:</strong> El marco regional suscrito ante ORAS-CONHU mandata contar con un mecanismo nacional de seguimiento multisectorial con indicadores de desempeño físico y financiero en tiempo real.</p>
          <p><strong>3. Mecanismo Legislativo Solicitado:</strong> Institucionalizar mediante ley la Mesa Multisectorial de Rendición de Cuentas ante la Comisión de Presupuesto del Congreso de la República, presidida semestralmente por la Defensoría del Pueblo con la veeduría técnica de ORAS-CONHU, UNFPA y OPS/OMS.</p>
        </div>
      </div>
    `,
    contentEn: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-indigo-500/15 border border-indigo-500/40 rounded-xl text-slate-100">
          <p class="font-bold text-indigo-400 mb-1">📖 Official Source: Andean Plan PLANEA 2025-2030 / ORAS-CONHU / MILENA Methodology</p>
          <p class="text-xs">Multisectoral Governance and Budget Accountability.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Institutional Fragmentation:</strong> Currently, involved ministries (MINSA, MINEDU, MIMP, MIDIS, MEF) operate with disconnected targets, causing an annual loss of 1.2 Billion Soles due to inaction without unified oversight.</p>
          <p><strong>2. PLANEA Mandate:</strong> The regional framework signed before ORAS-CONHU mandates a national multisectoral monitoring mechanism with real-time physical and financial performance indicators.</p>
          <p><strong>3. Requested Legislative Mechanism:</strong> Institutionalize by law the Multisectoral Accountability Table before the Congressional Budget Committee, chaired semi-annually by the Ombudsman's Office with technical oversight from ORAS-CONHU, UNFPA, and PAHO/WHO.</p>
        </div>
      </div>
    `,
    contentQu: `
      <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-indigo-500/15 border border-indigo-500/40 rounded-xl text-slate-100">
          <p class="font-bold text-indigo-400 mb-1">📖 Pukyu: Plan Andino PLANEA 2025-2030 / ORAS-CONHU / MILENA Yachay</p>
          <p class="text-xs">Gobernanza Multisectorial wan Presupuesto Qhaway.</p>
        </div>
        <div class="space-y-2">
          <p><strong>1. Ministerios Chikan Puriy:</strong> MINSA, MINEDU, MIMP, MIDIS wan MEF chikan metasniyuq kanku S/ 1,200 Millones soles chinkachispa.</p>
          <p><strong>2. PLANEA Simi:</strong> ORAS-CONHU nisqapa simin mandanmi seguimiento multisectorial rurayta real time yupaykunawan.</p>
          <p><strong>3. Kamachiy Mañakuy:</strong> Leywan rurana Mesa Multisectorial de Rendición de Cuentas Congreso Presupuesto Comisionpi Defensoría del Pueblopa umallisqan.</p>
        </div>
      </div>
    `
  }
};

// Verified Regional Data Profiles (Enriquecidas con métricas estadísticas y medidores visuales)
const regionalData = {
  Loreto: {
    fertilityVal: 85.4,
    fertilityPct: 85.4,
    fertilityRisk: "🔴 Riesgo Extremo",
    fertilityRiskEn: "🔴 Extreme Risk",
    fertilityRiskQu: "🔴 Sinchi Riesgo",
    fertility: "85.4 por 1,000 (167% del promedio nacional)",
    fertilityEn: "85.4 per 1,000 (167% of national avg)",
    fertilityQu: "85.4 sapa 1,000 (167% promedio suyumanta)",

    coverageVal: 28,
    coverageGap: 72,
    coverageStatus: "⚠️ Brecha Crítica (72%)",
    coverageStatusEn: "⚠️ Critical Gap (72%)",
    coverageStatusQu: "⚠️ Sinchi Pisi Kay (72%)",
    coverage: "28% Acreditados (72% sin consultorio amigable)",
    coverageEn: "28% Accredited (72% without youth clinic)",
    coverageQu: "28% Acreditado (72% mana amigable)",

    inactionVal: 140,
    inactionScale: 88,
    inactionTag: "📉 0.48% PBI Regional",
    inactionTagEn: "📉 0.48% Regional GDP",
    inactionTagQu: "📉 0.48% Suyu PBI",
    inactionCost: "S/ 140 Millones/año (gastos médicos y deserción)",
    inactionCostEn: "S/ 140 Million/year (medical costs & dropout)",
    inactionCostQu: "S/ 140 Millones sapa wata (qullqi chinkachisqa)",

    priority: "Reducción de brechas en Amazonía rural, atención de violencia sexual en comunidades nativas con enfoque intercultural y transporte para emergencias obstétricas.",
    priorityEn: "Gap reduction in rural Amazonia, sexual violence care in native communities with intercultural focus, and fluvial transport for obstetric emergencies.",
    priorityQu: "Amazonía sach'a-sach'api amachay, yuquy maqanakuykunata intercultural nisqawan hampiy wan mayupi purinapaq barcokuna garantizay."
  },
  Huancavelica: {
    fertilityVal: 68.2,
    fertilityPct: 68.2,
    fertilityRisk: "🔴 Riesgo Muy Alto",
    fertilityRiskEn: "🔴 Very High Risk",
    fertilityRiskQu: "🔴 Hatun Riesgo",
    fertility: "68.2 por 1,000 (133% del promedio nacional)",
    fertilityEn: "68.2 per 1,000 (133% of national avg)",
    fertilityQu: "68.2 sapa 1,000 (133% promedio suyumanta)",

    coverageVal: 32,
    coverageGap: 68,
    coverageStatus: "⚠️ Brecha Alta (68%)",
    coverageStatusEn: "⚠️ High Gap (68%)",
    coverageStatusQu: "⚠️ Hatun Pisi Kay (68%)",
    coverage: "32% Acreditados (68% sin consultorio amigable)",
    coverageEn: "32% Accredited (68% without youth clinic)",
    coverageQu: "32% Acreditado (68% mana amigable)",

    inactionVal: 95,
    inactionScale: 65,
    inactionTag: "📉 0.44% PBI Regional",
    inactionTagEn: "📉 0.44% Regional GDP",
    inactionTagQu: "📉 0.44% Suyu PBI",
    inactionCost: "S/ 95 Millones/año (deserción escolar y subsidios)",
    inactionCostEn: "S/ 95 Million/year (school dropout & welfare)",
    inactionCostQu: "S/ 95 Millones sapa wata (qullqi chinkachisqa)",

    priority: "Educación Sexual Integral (ESI) en Quechua, prevención de violencia intrafamiliar y fortalecimiento descentralizado de la Línea 100 y CEM en distritos rurales.",
    priorityEn: "Comprehensive Sexuality Education (CSE) in Quechua, intrafamily violence prevention, and decentralized strengthening of Line 100 and CEM in rural districts.",
    priorityQu: "Educación Sexual Integral (ESI) Runasimipi, ayllukuna ukhupi maqanakuy hark'ay wan Línea 100 / CEM kallpachay."
  },
  Cajamarca: {
    fertilityVal: 64.5,
    fertilityPct: 64.5,
    fertilityRisk: "🟠 Riesgo Alto",
    fertilityRiskEn: "🟠 High Risk",
    fertilityRiskQu: "🟠 Hatun Riesgo",
    fertility: "64.5 por 1,000 (126% del promedio nacional)",
    fertilityEn: "64.5 per 1,000 (126% of national avg)",
    fertilityQu: "64.5 sapa 1,000 (126% promedio suyumanta)",

    coverageVal: 36,
    coverageGap: 64,
    coverageStatus: "⚠️ Brecha Severa (64%)",
    coverageStatusEn: "⚠️ Severe Gap (64%)",
    coverageStatusQu: "⚠️ Pisi Kay (64%)",
    coverage: "36% Acreditados (64% sin consultorio amigable)",
    coverageEn: "36% Accredited (64% without youth clinic)",
    coverageQu: "36% Acreditado (64% mana amigable)",

    inactionVal: 110,
    inactionScale: 72,
    inactionTag: "📉 0.42% PBI Regional",
    inactionTagEn: "📉 0.42% Regional GDP",
    inactionTagQu: "📉 0.42% Suyu PBI",
    inactionCost: "S/ 110 Millones/año (emergencias y desprotección)",
    inactionCostEn: "S/ 110 Million/year (emergencies & vulnerability)",
    inactionCostQu: "S/ 110 Millones sapa wata (qullqi chinkachisqa)",

    priority: "Garantía de anticoncepción moderna de larga duración (LARC) en postas rurales y articulación comunitaria para erradicar el abuso en niñas menores de 15 años.",
    priorityEn: "Guarantee of modern long-acting reversible contraceptives (LARC) in rural posts and community coordination to eliminate abuse in girls under 15.",
    priorityQu: "LARC anticoncepción unaypaq garantizay wan 15 watamanta uray sipaskunapaq maqanakuy tukuchiy."
  },
  Piura: {
    fertilityVal: 58.1,
    fertilityPct: 58.1,
    fertilityRisk: "🟠 Riesgo Moderado-Alto",
    fertilityRiskEn: "🟠 Moderate-High Risk",
    fertilityRiskQu: "🟠 Chawpi-Hatun Riesgo",
    fertility: "58.1 por 1,000 (113% del promedio nacional)",
    fertilityEn: "58.1 per 1,000 (113% of national avg)",
    fertilityQu: "58.1 sapa 1,000 (113% promedio suyumanta)",

    coverageVal: 42,
    coverageGap: 58,
    coverageStatus: "🟡 Cobertura Media (58% brecha)",
    coverageStatusEn: "🟡 Medium Coverage (58% gap)",
    coverageStatusQu: "🟡 Chawpi Cobertura (58% pisi)",
    coverage: "42% Acreditados (58% sin consultorio amigable)",
    coverageEn: "42% Accredited (58% without youth clinic)",
    coverageQu: "42% Acreditado (58% mana amigable)",

    inactionVal: 130,
    inactionScale: 80,
    inactionTag: "📉 0.40% PBI Regional",
    inactionTagEn: "📉 0.40% Regional GDP",
    inactionTagQu: "📉 0.40% Suyu PBI",
    inactionCost: "S/ 130 Millones/año (atención obstétrica y violencia)",
    inactionCostEn: "S/ 130 Million/year (obstetric care & violence)",
    inactionCostQu: "S/ 130 Millones sapa wata (qullqi chinkachisqa)",

    priority: "Prevención de acoso y violencia digital en colegios secundarios, ampliación de horarios en consultorios amigables del MINSA y programas de retención educativa.",
    priorityEn: "Prevention of digital harassment and violence in high schools, extended hours in MINSA youth clinics, and educational retention programs.",
    priorityQu: "Yachay wasikunapi digital maqanakuy hark'ay wan MINSA consultorio amigable horariokuna mast'ariy."
  },
  Cusco: {
    fertilityVal: 52.8,
    fertilityPct: 52.8,
    fertilityRisk: "🟡 Riesgo Moderado",
    fertilityRiskEn: "🟡 Moderate Risk",
    fertilityRiskQu: "🟡 Chawpi Riesgo",
    fertility: "52.8 por 1,000 (Promedio regional andino)",
    fertilityEn: "52.8 per 1,000 (Andean regional average)",
    fertilityQu: "52.8 sapa 1,000 (Andes promedio suyumanta)",

    coverageVal: 45,
    coverageGap: 55,
    coverageStatus: "🟡 Cobertura En Progreso (55% brecha)",
    coverageStatusEn: "🟡 Coverage In Progress (55% gap)",
    coverageStatusQu: "🟡 Puririy Cobertura (55% pisi)",
    coverage: "45% Acreditados (55% sin consultorio amigable)",
    coverageEn: "45% Accredited (55% without youth clinic)",
    coverageQu: "45% Acreditado (55% mana amigable)",

    inactionVal: 105,
    inactionScale: 68,
    inactionTag: "📉 0.38% PBI Regional",
    inactionTagEn: "📉 0.38% Regional GDP",
    inactionTagQu: "📉 0.38% Suyu PBI",
    inactionCost: "S/ 105 Millones/año (brecha de empleabilidad)",
    inactionCostEn: "S/ 105 Million/year (employability gaps)",
    inactionCostQu: "S/ 105 Millones sapa wata (qullqi chinkachisqa)",

    priority: "Prevención de violencia sexual en contextos urbanos y rurales turísticos, consejería amigable intercultural y red interinstitucional con la Defensoría del Pueblo.",
    priorityEn: "Prevention of sexual violence in urban and tourist rural contexts, intercultural friendly counseling, and inter-institutional network with the Ombudsman Office.",
    priorityQu: "Turismo wan pampa distritokunapi yuquy maqanakuy hark'ay wan Defensoría del Pueblowan huñunakuspa llank'ay."
  },
  Lima: {
    fertilityVal: 41.2,
    fertilityPct: 41.2,
    fertilityRisk: "🟢 Menor Tasa (Hatun Volumen)",
    fertilityRiskEn: "🟢 Lower Rate (Highest Volume)",
    fertilityRiskQu: "🟢 Pisi Tupa (Hatun Volume)",
    fertility: "41.2 por 1,000 (Mayor volumen absoluto periurbano)",
    fertilityEn: "41.2 per 1,000 (Highest absolute volume in peri-urban areas)",
    fertilityQu: "41.2 sapa 1,000 (Lima llaqtapi hatun yupay)",

    coverageVal: 48,
    coverageGap: 52,
    coverageStatus: "🟡 Cobertura Urbana (52% brecha)",
    coverageStatusEn: "🟡 Urban Coverage (52% gap)",
    coverageStatusQu: "🟡 Llaqta Cobertura (52% pisi)",
    coverage: "48% Acreditados (52% sin consultorio amigable)",
    coverageEn: "48% Accredited (52% without youth clinic)",
    coverageQu: "48% Acreditado (52% mana amigable)",

    inactionVal: 420,
    inactionScale: 100,
    inactionTag: "📉 S/ 420 M/año (Mayor volumen nacional)",
    inactionTagEn: "📉 S/ 420 M/year (Highest national volume)",
    inactionTagQu: "📉 S/ 420 M/wata (Hatun suyumanta qullqi)",
    inactionCost: "S/ 420 Millones/año (el mayor costo absoluto nacional)",
    inactionCostEn: "S/ 420 Million/year (highest national absolute cost)",
    inactionCostQu: "S/ 420 Millones sapa wata (aswan hatun qullqi chinkachisqa)",

    priority: "Atención intensiva en distritos periurbanos de Lima Norte, Este y Sur; prevención de violencia digital, acoso escolar y fortalecimiento de salud mental adolescente.",
    priorityEn: "Intensive care in peri-urban districts of North, East, and South Lima; digital violence prevention, school bullying, and youth mental health support.",
    priorityQu: "Lima Norte, Este wan Sur distritokunapi allin llank'ay, digital maqanakuy wan yachay wasikunapi bullyng hark'ay."
  }
};

// --- 4. SISTEMA DE CONTROL DE TEMAS CLARO Y OSCURO (LIGHT / DARK THEME TOGGLE) ---
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
  const dict = i18n[currentLang];
  const btnTheme = document.getElementById('btn-theme-toggle');
  if (btnTheme) {
    if (currentTheme === 'light') {
      btnTheme.textContent = dict.themeDarkBtn;
    } else {
      btnTheme.textContent = dict.themeLightBtn;
    }
  }
}

// --- 5. LANGUAGE SWITCHING LOGIC ---
function toggleLanguage() {
  if (currentLang === 'es') {
    currentLang = 'en';
  } else if (currentLang === 'en') {
    currentLang = 'qu';
  } else {
    currentLang = 'es';
  }
  applyLanguage();
  updateRegionalExplorer();
}

function applyLanguage() {
  const dict = i18n[currentLang];

  // Update Theme Switcher Button Text
  updateThemeButtonText();

  // Explicit translation for Hero Summary Button and its aria-label
  const btnSummary = document.getElementById('btn-hero-summary');
  if (btnSummary) {
    btnSummary.innerHTML = dict.btnHeroSummary;
    btnSummary.setAttribute('aria-label', dict.btnHeroSummaryLabel || 'Ficha Técnica Ejecutiva');
  }

  // Loop through all keys in dictionary and update matching DOM elements automatically
  Object.keys(dict).forEach(key => {
    const idMap = {
      langBtn: 'btn-lang-toggle',
      siteBadge: 'site-badge',
      siteTitle: 'site-title',
      endorsedBy: 'endorsed-label',
      navDiagnosis: 'nav-diagnosis',
      navRoi: 'nav-roi',
      navCharts: 'nav-charts',
      navFactCheck: 'nav-factcheck',
      navLegal: 'nav-legal',
      navExplorer: 'nav-explorer',
      navManifesto: 'nav-manifesto',
      heroBadge: 'hero-badge',
      heroTitle: 'hero-title',
      heroDesc: 'hero-desc',
      btnHeroSim: 'btn-hero-sim',
      btnHeroManifesto: 'btn-hero-manifesto',
      btnHeroSummary: 'btn-hero-summary',
      heroCardTitle: 'hero-card-title',
      heroCardBadge: 'hero-card-badge',
      heroCardDesc: 'hero-card-desc',
      m1Value: 'm1-val',
      m1Label: 'm1-lbl',
      m2Value: 'm2-val',
      m2Label: 'm2-lbl',
      m3Value: 'm3-val',
      m3Label: 'm3-lbl',
      m4Value: 'm4-val',
      m4Label: 'm4-lbl',
      s1Title: 's1-title',
      s1Subtitle: 's1-subtitle',
      c1Tag: 'c1-tag',
      c1Title: 'c1-title',
      c1Desc: 'c1-desc',
      c1Btn: 'c1-btn',
      c2Tag: 'c2-tag',
      c2Title: 'c2-title',
      c2Desc: 'c2-desc',
      c2Btn: 'c2-btn',
      c3Tag: 'c3-tag',
      c3Title: 'c3-title',
      c3Desc: 'c3-desc',
      c3Btn: 'c3-btn',
      s2Title: 's2-title',
      s2Subtitle: 's2-subtitle',
      roi1Badge: 'roi1-badge',
      roi1Title: 'roi1-title',
      roi1Desc: 'roi1-desc',
      roi1Btn: 'roi1-btn',
      roi2Badge: 'roi2-badge',
      roi2Title: 'roi2-title',
      roi2Desc: 'roi2-desc',
      roi2Btn: 'roi2-btn',
      scTitle: 'sc-title',
      scSubtitle: 'sc-subtitle',
      chart1Title: 'chart1-title',
      chart1Sub: 'chart1-sub',
      g1Lbl1: 'g1-lbl-1',
      g1Lbl2: 'g1-lbl-2',
      g1Lbl3: 'g1-lbl-3',
      g1Lbl4: 'g1-lbl-4',
      g1Lbl5: 'g1-lbl-5',
      chart2Title: 'chart2-title',
      chart2Sub: 'chart2-sub',
      g2Lbl1: 'g2-lbl-1',
      g2Lbl2: 'g2-lbl-2',
      chart2Note: 'chart2-note',
      sfcTitle: 'sfc-title',
      sfcSubtitle: 'sfc-subtitle',
      fc1MythTitle: 'fc1-myth-title',
      fc1MythDesc: 'fc1-myth-desc',
      fc1EvTitle: 'fc1-ev-title',
      fc1EvDesc: 'fc1-ev-desc',
      fc2MythTitle: 'fc2-myth-title',
      fc2MythDesc: 'fc2-myth-desc',
      fc2EvTitle: 'fc2-ev-title',
      fc2EvDesc: 'fc2-ev-desc',
      fc3MythTitle: 'fc3-myth-title',
      fc3MythDesc: 'fc3-myth-desc',
      fc3EvTitle: 'fc3-ev-title',
      fc3EvDesc: 'fc3-ev-desc',
      s3Title: 's3-title',
      s3Subtitle: 's3-subtitle',
      l1Tag: 'l1-tag',
      l1Title: 'l1-title',
      l1Desc: 'l1-desc',
      l2Tag: 'l2-tag',
      l2Title: 'l2-title',
      l2Desc: 'l2-desc',
      l3Tag: 'l3-tag',
      l3Title: 'l3-title',
      l3Desc: 'l3-desc',
      s4Title: 's4-title',
      s4Subtitle: 's4-subtitle',
      expLblRegion: 'exp-lbl-region',
      expFertilityLbl: 'exp-fertility-lbl',
      expCoverageLbl: 'exp-coverage-lbl',
      expInactionLbl: 'exp-inaction-lbl',
      expPriorityLbl: 'exp-priority-lbl',
      expDisclaimer: 'exp-disclaimer',
      optLoreto: 'opt-loreto',
      optHuancavelica: 'opt-huancavelica',
      optCajamarca: 'opt-cajamarca',
      optPiura: 'opt-piura',
      optCusco: 'opt-cusco',
      optLima: 'opt-lima',
      s5Title: 's5-title',
      s5Subtitle: 's5-subtitle',
      mItem1: 'm-item-1',
      mItem2: 'm-item-2',
      mItem3: 'm-item-3',
      mItem4: 'm-item-4',
      mItem5: 'm-item-5',
      s8Title: 's8-title',
      s8Subtitle: 's8-subtitle',
      src1Title: 'src1-title',
      src1Desc: 'src1-desc',
      src2Title: 'src2-title',
      src2Desc: 'src2-desc',
      src3Title: 'src3-title',
      src3Desc: 'src3-desc',
      src4Title: 'src4-title',
      src4Desc: 'src4-desc',
      src5Title: 'src5-title',
      src5Desc: 'src5-desc',
      src6Title: 'src6-title',
      src6Desc: 'src6-desc',
      modalCloseText: 'modal-close-btn',
      sciTitle: 'sci-modal-title',
      sciSec1Title: 'sci-sec1-title',
      sciSec1Desc: 'sci-sec1-desc',
      sciSec2Title: 'sci-sec2-title',
      sciSec2Desc: 'sci-sec2-desc',
      sciSec3Title: 'sci-sec3-title',
      sciSec3Desc: 'sci-sec3-desc',
      sciSec4Title: 'sci-sec4-title',
      sciSec4Desc: 'sci-sec4-desc',
      sciCloseBtnText: 'sci-close-btn',
      sumModalTitle: 'sum-modal-title',
      sumHeaderBadge: 'sum-header-badge',
      sumHeaderTitle: 'sum-header-title',
      sumGrid1Lbl: 'sum-grid-1-lbl',
      sumGrid1Val: 'sum-grid-1-val',
      sumGrid2Lbl: 'sum-grid-2-lbl',
      sumGrid2Val: 'sum-grid-2-val',
      sumGrid3Lbl: 'sum-grid-3-lbl',
      sumGrid3Val: 'sum-grid-3-val',
      sumGrid4Lbl: 'sum-grid-4-lbl',
      sumGrid4Val: 'sum-grid-4-val',
      sumDemandsTitle: 'sum-demands-title',
      sumDem1: 'sum-dem-1',
      sumDem2: 'sum-dem-2',
      sumDem3: 'sum-dem-3',
      sumCloseBtnText: 'sum-close-btn',
      fTitle: 'f-title',
      fText: 'f-text',
      fCol2Title: 'f-col2-title',
      fLic: 'f-lic',
      fSafeguard: 'f-safeguard',
      fLawFramework: 'f-law-framework',
      fCol3Title: 'f-col3-title',
      fCopyRights: 'f-copy-rights'
    };

    const targetId = idMap[key] || key;
    const value = dict[key];

    if (value.includes('<') && value.includes('>')) {
      setElemHTML(targetId, value);
    } else {
      setElemText(targetId, value);
    }
  });

  // Fact check repeat badges
  ['fc-badge-myth-1', 'fc-badge-myth-2', 'fc-badge-myth-3'].forEach(id => {
    setElemHTML(id, `<i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> ${dict.fcBadgeMyth}`);
  });
  ['fc-badge-ev-1', 'fc-badge-ev-2', 'fc-badge-ev-3'].forEach(id => {
    setElemHTML(id, `<i class="fa-solid fa-circle-check" aria-hidden="true"></i> ${dict.fcBadgeEv}`);
  });

  // Section 7 priority buttons
  for (let i = 1; i <= 5; i++) {
    setElemHTML(`p${i}-btn`, dict.pBtnText);
  }
}

function setElemText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setElemHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

// --- 6. MODAL HANDLERS ---
function openDeepEvidenceModal(key) {
  const item = deepEvidenceDatabase[key];
  if (!item) return;

  const modal = document.getElementById('deep-modal');
  const titleElem = document.getElementById('modal-title');
  const bodyElem = document.getElementById('modal-body');

  let selectedTitle = item.title;
  let selectedContent = item.content;

  if (currentLang === 'en') {
    if (item.titleEn) selectedTitle = item.titleEn;
    if (item.contentEn) selectedContent = item.contentEn;
  } else if (currentLang === 'qu') {
    if (item.titleQu) selectedTitle = item.titleQu;
    if (item.contentQu) selectedContent = item.contentQu;
  }

  if (titleElem) titleElem.textContent = selectedTitle;
  if (bodyElem) bodyElem.innerHTML = selectedContent;

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

function openExecutiveSummarySheetModal() {
  const modal = document.getElementById('summary-modal');
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

// Attach handlers to window object for global onclick scope
window.openDeepEvidenceModal = openDeepEvidenceModal;
window.closeDeepEvidenceModal = closeDeepEvidenceModal;
window.openScientificEvidenceModal = openScientificEvidenceModal;
window.closeScientificEvidenceModal = closeScientificEvidenceModal;
window.openExecutiveSummarySheetModal = openExecutiveSummarySheetModal;
window.closeExecutiveSummarySheetModal = closeExecutiveSummarySheetModal;
window.toggleLanguage = toggleLanguage;
window.toggleTheme = toggleTheme;

// --- 7. REGIONAL DATA EXPLORER LOGIC (Dinamizada con Medidores y Gráficas) ---
function updateRegionalExplorer() {
  const regionKey = document.getElementById('exp-region')?.value || 'Loreto';
  const info = regionalData[regionKey] || regionalData['Loreto'];

  let fertilityStr = info.fertility;
  let coverageStr = info.coverage;
  let inactionStr = info.inactionCost;
  let priorityStr = info.priority;
  let riskStr = info.fertilityRisk;
  let statusStr = info.coverageStatus;
  let tagStr = info.inactionTag;

  if (currentLang === 'en') {
    fertilityStr = info.fertilityEn || info.fertility;
    coverageStr = info.coverageEn || info.coverage;
    inactionStr = info.inactionCostEn || info.inactionCost;
    priorityStr = info.priorityEn || info.priority;
    riskStr = info.fertilityRiskEn || info.fertilityRisk;
    statusStr = info.coverageStatusEn || info.coverageStatus;
    tagStr = info.inactionTagEn || info.inactionTag;
  } else if (currentLang === 'qu') {
    fertilityStr = info.fertilityQu || info.fertility;
    coverageStr = info.coverageQu || info.coverage;
    inactionStr = info.inactionCostQu || info.inactionCost;
    priorityStr = info.priorityQu || info.priority;
    riskStr = info.fertilityRiskQu || info.fertilityRisk;
    statusStr = info.coverageStatusQu || info.coverageStatus;
    tagStr = info.inactionTagQu || info.inactionTag;
  }

  // Update text descriptions & badges
  setElemText('out-fertility', fertilityStr);
  setElemText('out-coverage', coverageStr);
  setElemText('out-inaction', inactionStr);
  setElemText('out-priority', priorityStr);
  setElemText('out-fertility-risk', riskStr);
  setElemText('out-coverage-status', statusStr);
  setElemText('out-inaction-tag', tagStr);

  // Update big numerical displays
  setElemHTML('out-fertility-num', `${info.fertilityVal} <span class="text-xs font-normal text-slate-400">/ 1,000</span>`);
  setElemHTML('out-coverage-num', `${info.coverageVal}% <span class="text-xs font-normal text-slate-400">Acreditados</span>`);
  setElemHTML('out-inaction-num', `S/ ${info.inactionVal}M <span class="text-xs font-normal text-slate-400">/ año</span>`);

  // Update dynamic visual progress bars with smooth animation
  const barFertility = document.getElementById('out-fertility-bar');
  if (barFertility) barFertility.style.width = `${info.fertilityPct}%`;

  const barCoverageOk = document.getElementById('out-coverage-bar-ok');
  if (barCoverageOk) barCoverageOk.style.width = `${info.coverageVal}%`;

  const barCoverageGap = document.getElementById('out-coverage-bar-gap');
  if (barCoverageGap) barCoverageGap.style.width = `${info.coverageGap}%`;

  const barInaction = document.getElementById('out-inaction-bar');
  if (barInaction) barInaction.style.width = `${info.inactionScale}%`;
}

// --- 8. AUTOMATIC EVENT BINDING ON DOM READY ---
function bindAllInteractiveEvents() {
  // Bind Section 1 Buttons
  document.getElementById('c1-btn')?.addEventListener('click', function(e) {
    e.stopPropagation();
    openDeepEvidenceModal('c1');
  });
  document.getElementById('c2-btn')?.addEventListener('click', function(e) {
    e.stopPropagation();
    openDeepEvidenceModal('c2');
  });
  document.getElementById('c3-btn')?.addEventListener('click', function(e) {
    e.stopPropagation();
    openDeepEvidenceModal('c3');
  });

  // Bind Section 2 Buttons
  document.getElementById('roi1-btn')?.addEventListener('click', function(e) {
    e.stopPropagation();
    openDeepEvidenceModal('roi1');
  });
  document.getElementById('roi2-btn')?.addEventListener('click', function(e) {
    e.stopPropagation();
    openDeepEvidenceModal('roi2');
  });

  // Bind Hero Summary Button & Artwork Card
  document.getElementById('btn-hero-summary')?.addEventListener('click', function(e) {
    e.stopPropagation();
    openExecutiveSummarySheetModal();
  });
  document.getElementById('hero-card-trigger')?.addEventListener('click', function(e) {
    e.stopPropagation();
    openScientificEvidenceModal();
  });

  // Bind Section 7 Priorities (Button triggers ONLY)
  for (let i = 1; i <= 5; i++) {
    const btn = document.getElementById(`p${i}-btn`);
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        openDeepEvidenceModal(`p${i}`);
      });
    }
  }

  // Backdrop overlay click handlers to close modals easily
  ['deep-modal', 'sci-modal', 'summary-modal'].forEach(function(modalId) {
    const modalElem = document.getElementById(modalId);
    if (modalElem) {
      modalElem.addEventListener('click', function(e) {
        if (e.target === modalElem) {
          if (modalId === 'deep-modal') closeDeepEvidenceModal();
          if (modalId === 'sci-modal') closeScientificEvidenceModal();
          if (modalId === 'summary-modal') closeExecutiveSummarySheetModal();
        }
      });
    }
  });
}

// --- 9. SMART RETRACTING SCROLL HEADER LOGIC (Con umbral de 0.3s al subir e inactividad de 1.5s) ---
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

  const currentScrollY = window.scrollY || document.documentElement.scrollTop;

  // Only start 1.5s idle timer if user is not at top of page and not hovering over header
  if (currentScrollY > 20 && !isMouseOverHeader) {
    headerIdleTimer = setTimeout(function() {
      const header = document.querySelector('header');
      const latestScrollY = window.scrollY || document.documentElement.scrollTop;
      if (header && latestScrollY > 20 && !isMouseOverHeader) {
        header.classList.add('header-hidden');
        header.classList.remove('header-visible');
      }
    }, 1500); // 1.5 seconds idle timeout
  }
}

function handleSmartScrollHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const currentScrollY = window.scrollY || document.documentElement.scrollTop;
  const now = performance.now();

  // Reset 1.5s idle timer on every scroll movement
  resetHeaderIdleTimer();

  // At top of page: always show header immediately
  if (currentScrollY <= 20) {
    header.classList.remove('header-hidden');
    header.classList.add('header-visible');
    scrollUpStartTime = null;
    lastScrollY = currentScrollY;
    return;
  }

  // Scrolling DOWN (going down the webpage): retract header immediately & reset scroll-up timer
  if (currentScrollY > lastScrollY && currentScrollY > 60) {
    header.classList.add('header-hidden');
    header.classList.remove('header-visible');
    scrollUpStartTime = null;
  }
  // Scrolling UP (going up the webpage): require at least 0.3s of continuous upward scrolling
  else if (currentScrollY < lastScrollY) {
    if (scrollUpStartTime === null) {
      scrollUpStartTime = now;
    }

    const elapsedTimeSeconds = (now - scrollUpStartTime) / 1000;

    if (elapsedTimeSeconds >= 0.3) {
      header.classList.remove('header-hidden');
      header.classList.add('header-visible');
    }
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

// Initial execution
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    closeDeepEvidenceModal();
    closeScientificEvidenceModal();
    closeExecutiveSummarySheetModal();
    initTheme();
    applyLanguage();
    updateRegionalExplorer();
    bindAllInteractiveEvents();
    initSmartScrollHeader();
  });
} else {
  closeDeepEvidenceModal();
  closeScientificEvidenceModal();
  closeExecutiveSummarySheetModal();
  initTheme();
  applyLanguage();
  updateRegionalExplorer();
  bindAllInteractiveEvents();
  initSmartScrollHeader();
}
