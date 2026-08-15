# ⚡ Hackathon Hub - Global AI Innovation Platform 2026

Welcome to **Hackathon Hub**, a state-of-the-art web application and developer dashboard designed for hosting, competing in, and judging 48-hour AI and next-gen technology hackathons.

![Hackathon Hub](assets/ai_copilot.png)

---

## 🌟 Key Features

1. **Live 48-Hour Sprint Countdown & Hero Metrics**: Real-time ticking submission countdown clock, prize pool highlights, and live hacker activity counter.
2. **Interactive Project Showcase**:
   - Filter projects by track category (*AI & Agents*, *Web3 & Cyber*, *Developer Tools*, *Climate & Eco Tech*).
   - Instant search by title, description, or tech stack.
   - Interactive community upvoting system with local storage state persistence.
   - Modal submission interface for participants to publish new hackathon entries.
3. **Team Matchmaker Directory**:
   - Browse squads looking for specific roles (*Frontend*, *Rust*, *AI Engineer*, *Pitch Presenter*).
   - Post team recruitment listings and send 1-click join requests.
4. **AI Hackathon Pitch & README Copilot**:
   - Built-in generator tool producing formatted Markdown `README.md` files, executive summaries, architecture diagrams, and slide deck outlines.
   - 1-click clipboard copy feature.
5. **Real-Time Judging Matrix & Leaderboard**:
   - Interactive multi-criteria scoring sliders (*Innovation 30%*, *Tech Complexity 30%*, *Design 20%*, *Real-World Impact 20%*).
   - Live weighted total score calculator updating the global competition leaderboard standings.
6. **Sprint Kanban Task Board**:
   - Agile task management for teams (*To Do*, *In Progress*, *Completed*).
   - 1-click status transitions and custom task addition.

---

## 🛠️ Tech Stack & Architecture

- **Structure**: Semantic HTML5 with modern dialog overlays.
- **Styling**: Custom CSS3 design system with CSS custom properties, glassmorphism (`backdrop-filter: blur()`), custom glowing effects, and Google Fonts (*Outfit* & *Plus Jakarta Sans*).
- **Logic**: Vanilla ES6+ JavaScript (`app.js`) with structured `AppState` class management and `localStorage` persistence.
- **Icons**: FontAwesome 6.4 CDN.

---

## 🚀 How to Run Locally

1. Open `index.html` in any modern web browser directly, or serve it using a local development server:
   ```bash
   npx serve .
   ```
2. Or use Python's built-in HTTP server:
   ```bash
   python -m http.server 8000
   ```
3. Access the dashboard at `http://localhost:8000`.

---

## 📁 Workspace Recommended Setting

Set this directory as your active workspace folder in Antigravity IDE:
`C:\Users\LENOVO\.gemini\antigravity-ide\scratch\Hackathon`
