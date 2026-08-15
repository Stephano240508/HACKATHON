# 🇵🇪 Plataforma de Incidencia Política y Diagnóstico Ejecutivo - Prevención de Violencias y Embarazo Infantil en el Perú (PLANEA 2025-2030)

[![Hackatón Creativa Regional](assets/hackathon_logo_official.png)](https://github.com/Stephano240508/HACKATHON)

Documento ejecutivo y herramienta interactiva de incidencia política para **Congresistas, Ministros, MEF, MINSA y Gobernadores Regionales**, desarrollada en el marco de la **Hackatón Creativa Regional PLANEA 2025-2030**, avalada institucionalmente por:
- **MINSA Perú** (Ministerio de Salud)
- **ORAS-CONHU** (Organismo Andino de Salud - Convenio Hipólito Unanue)
- **UNFPA** (Fondo de Población de las Naciones Unidas)
- **OPS/OMS** (Organización Panamericana de la Salud / Organización Mundial de la Salud)

---

## 🌟 Características Principales

1. **Diagnóstico Técnico y Evidencia Científica**: Datos clínicos, epidemiológicos y de infraestructura sobre embarazo infantil (<15 años) e indemnidad sexual.
2. **Análisis Costo-Beneficio & Retorno Social de Inversión (ROI 7:1)**: Sustento económico para el MEF demostrando un retorno de S/ 7.00 por cada Sol invertido en prevención, y estimación del costo de inacción (S/ 1,200 millones/año, 0.45% del PBI).
3. **Explorador Interactivo de Indicadores Regionales**: Filtro dinámico por departamento (Loreto, Huancavelica, Cajamarca, Piura, Cusco, Lima) con tasas de fecundidad, cobertura de consultorios amigables NTS N° 130 y costo estimado de inacción.
4. **Mitos vs. Evidencia Oficial (Fact-Checking)**: Módulo interactivo de contraargumentación con respaldo científico y jurídico (Código Penal Art. 173, Ley 30364).
5. **Soporte Trilingüe Completo (i18n)**: Español 🇪🇸, English 🇺🇸 y Quechua 🇵🇪.
6. **Sistema de Temas Accesibles (WCAG 2.1 AAA)**: Modo Oscuro 🌙 y Modo Claro ☀️ con alto contraste visual.
7. **Ficha Técnica Ejecutiva y Compendio Científico**: Ventanas modales ejecutivas con sustento listo para comisiones presupuestales.

---

## 🛠️ Arquitectura Técnica

- **Estructura**: HTML5 Semántico accesible con atajos ARIA (`sr-only-focusable`).
- **Diseño & Estilos**: Tailwind CSS + `styles.css` con sistema de variables CSS customizadas (`--brand-navy`, `--brand-teal`, `--brand-purple`, etc.) y reglas completas para Dark/Light mode.
- **Lógica Frontend**: JavaScript ES6+ modular (`app.js`) con diccionario trilingüe completo, motor i18n, manejador de temas y base de datos de evidencia profunda (`deepEvidenceDatabase`).

---

## 🚀 Cómo Ejecutar Localmente

1. Abrir `index.html` en cualquier navegador web moderno, o iniciar un servidor local:
   ```bash
   npx serve .
   ```
2. O usar el servidor HTTP integrado en Python:
   ```bash
   python -m http.server 8000
   ```
3. Acceder en `http://localhost:8000`.

---

## 📁 Repositorio Oficial en GitHub

- **URL del Repositorio:** [https://github.com/Stephano240508/HACKATHON](https://github.com/Stephano240508/HACKATHON)
