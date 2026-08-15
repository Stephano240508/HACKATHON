/* ==========================================================================
   Hackathon Hub - Master Application Logic (app.js)
   ========================================================================== */

// Initial Seed Projects Data
const INITIAL_PROJECTS = [
  {
    id: 'p1',
    title: 'AI Multi-Agent Copilot',
    category: 'AI/ML',
    description: 'Autonomous multi-agent system that collaborates to design, test, and write web application code in real time.',
    tech: ['React', 'Python', 'Gemini 1.5', 'FastAPI'],
    image: 'assets/ai_copilot.png',
    upvotes: 42,
    score: 9.4,
    link: 'https://github.com/hackathon/ai-copilot',
    team: ['Alex M.', 'Elena R.', 'David K.']
  },
  {
    id: 'p2',
    title: 'NeuroFlow Cyber Sentinel',
    category: 'Web3',
    description: 'Decentralized real-time threat detection and automated smart contract vulnerability visualizer.',
    tech: ['Solidity', 'Rust', 'Ethers.js', 'WebAssembly'],
    image: 'assets/cyber_neuro.png',
    upvotes: 38,
    score: 9.1,
    link: 'https://github.com/hackathon/neuroflow',
    team: ['Marcus V.', 'Sophia L.']
  },
  {
    id: 'p3',
    title: 'EcoTrack Climate Intelligence',
    category: 'Eco',
    description: 'IoT & satellite imagery analytics dashboard tracking urban carbon emissions and green energy allocation.',
    tech: ['Vue.js', 'Python', 'Geospatial API', 'Tailwind'],
    image: 'assets/eco_track.png',
    upvotes: 29,
    score: 8.7,
    link: 'https://github.com/hackathon/ecotrack',
    team: ['Sarah T.', 'Liam P.', 'Nora W.']
  },
  {
    id: 'p4',
    title: 'DevNexus Live Pair Studio',
    category: 'DevTools',
    description: 'Browser-native collaborative IDE with built-in voice channels, terminal streaming, and instant deployment.',
    tech: ['TypeScript', 'WebSockets', 'Node.js', 'Docker'],
    image: 'assets/ai_copilot.png',
    upvotes: 34,
    score: 8.9,
    link: 'https://github.com/hackathon/devnexus',
    team: ['Jake H.', 'Amara C.']
  }
];

// Initial Seed Teams
const INITIAL_TEAMS = [
  {
    id: 't1',
    name: 'Quantum Hackers',
    track: 'AI Multi-Agent Systems',
    lookingFor: ['Frontend Engineer', 'Pitch Presenter'],
    membersCount: 3,
    description: 'Building an autonomous research agent for academic paper summaries.'
  },
  {
    id: 't2',
    name: 'ZeroKnowledge Cyber Squad',
    track: 'Web3 & Cyber',
    lookingFor: ['Rust Developer', 'UI/UX Designer'],
    membersCount: 2,
    description: 'Creating zero-knowledge proof verification widgets for web apps.'
  },
  {
    id: 't3',
    name: 'GreenTech Innovators',
    track: 'Climate & Sustainability',
    lookingFor: ['Data Scientist', 'DevOps Specialist'],
    membersCount: 2,
    description: 'Tracking renewable energy microgrids with smart contract automation.'
  }
];

// Initial Seed Kanban Tasks
const INITIAL_TASKS = [
  { id: 'tk1', title: 'Design Glassmorphism Hero Section', assignee: 'Elena R.', status: 'done' },
  { id: 'tk2', title: 'Setup Gemini AI API Router', assignee: 'Alex M.', status: 'done' },
  { id: 'tk3', title: 'Integrate Judge Rubric Calculator', assignee: 'David K.', status: 'in-progress' },
  { id: 'tk4', title: 'Build Project Showcase Upvote State', assignee: 'Elena R.', status: 'in-progress' },
  { id: 'tk5', title: 'Prepare 3-Minute Demo Video', assignee: 'Team', status: 'todo' },
  { id: 'tk6', title: 'Deploy Web Platform to Vercel/Netlify', assignee: 'Alex M.', status: 'todo' }
];

// App State Management
class AppState {
  constructor() {
    this.projects = JSON.parse(localStorage.getItem('hack_projects')) || INITIAL_PROJECTS;
    this.teams = JSON.parse(localStorage.getItem('hack_teams')) || INITIAL_TEAMS;
    this.tasks = JSON.parse(localStorage.getItem('hack_tasks')) || INITIAL_TASKS;
    this.upvotedProjects = new Set(JSON.parse(localStorage.getItem('hack_upvotes')) || []);
    this.activeCategory = 'all';
    this.searchQuery = '';
  }

  save() {
    localStorage.setItem('hack_projects', JSON.stringify(this.projects));
    localStorage.setItem('hack_teams', JSON.stringify(this.teams));
    localStorage.setItem('hack_tasks', JSON.stringify(this.tasks));
    localStorage.setItem('hack_upvotes', JSON.stringify(Array.from(this.upvotedProjects)));
  }

  toggleUpvote(projectId) {
    const proj = this.projects.find(p => p.id === projectId);
    if (!proj) return;

    if (this.upvotedProjects.has(projectId)) {
      this.upvotedProjects.delete(projectId);
      proj.upvotes -= 1;
    } else {
      this.upvotedProjects.add(projectId);
      proj.upvotes += 1;
    }
    this.save();
  }

  addProject(newProj) {
    this.projects.unshift(newProj);
    this.save();
  }

  addTask(newTask) {
    this.tasks.push(newTask);
    this.save();
  }

  updateTaskStatus(taskId, newStatus) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = newStatus;
      this.save();
    }
  }

  updateProjectScore(projectId, newScore) {
    const proj = this.projects.find(p => p.id === projectId);
    if (proj) {
      proj.score = parseFloat(newScore.toFixed(1));
      this.save();
    }
  }
}

const state = new AppState();

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initTabs();
  renderProjects();
  renderTeams();
  renderLeaderboard();
  renderJudgingSelect();
  renderKanban();
  initSearchAndFilters();
  initAiCopilot();
  initJudgingSliders();
  initModals();
});

/* ==========================================================================
   Countdown Clock
   ========================================================================== */
function initCountdown() {
  let totalSeconds = 36 * 3600 + 42 * 60 + 15;

  const hEl = document.getElementById('cd-hours');
  const mEl = document.getElementById('cd-mins');
  const sEl = document.getElementById('cd-secs');

  setInterval(() => {
    if (totalSeconds <= 0) return;
    totalSeconds--;

    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(mins).padStart(2, '0');
    if (sEl) sEl.textContent = String(secs).padStart(2, '0');
  }, 1000);
}

/* ==========================================================================
   Tab Switcher
   ========================================================================== */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const pane = document.getElementById(`tab-${targetTab}`);
      if (pane) pane.classList.add('active');
    });
  });
}

/* ==========================================================================
   Project Showcase Rendering
   ========================================================================== */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = state.projects.filter(p => {
    const matchesCategory = state.activeCategory === 'all' || p.category === state.activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(state.searchQuery) ||
                          p.description.toLowerCase().includes(state.searchQuery) ||
                          p.tech.some(t => t.toLowerCase().includes(state.searchQuery));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:3rem; color:var(--text-muted);">
        <i class="fa-solid fa-folder-open" style="font-size:2.5rem; margin-bottom:1rem; color:var(--text-dim);"></i>
        <p>No projects match your search or filter criteria.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const isUpvoted = state.upvotedProjects.has(p.id);
    return `
      <div class="project-card">
        <div class="card-img-wrap">
          <img src="${p.image}" alt="${p.title}" class="card-img" onerror="this.src='assets/ai_copilot.png'">
          <span class="card-category-badge">${p.category}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${p.title}</h3>
          <p class="card-description">${p.description}</p>

          <div class="tech-tags">
            ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <div class="card-footer">
            <div class="team-avatar-group">
              ${p.team ? p.team.map(m => `<div class="avatar" title="${m}">${m.charAt(0)}</div>`).join('') : '<div class="avatar">H</div>'}
            </div>
            <button class="upvote-btn ${isUpvoted ? 'upvoted' : ''}" onclick="handleUpvote('${p.id}')">
              <i class="fa-solid fa-heart"></i> ${p.upvotes}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Update hero stats
  const statProjects = document.getElementById('stat-projects');
  if (statProjects) statProjects.textContent = state.projects.length;
}

window.handleUpvote = function(projectId) {
  state.toggleUpvote(projectId);
  renderProjects();
  renderLeaderboard();
};

/* ==========================================================================
   Filters & Search
   ========================================================================== */
function initSearchAndFilters() {
  const searchInput = document.getElementById('project-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase();
      renderProjects();
    });
  }

  const chips = document.querySelectorAll('.chip-filter');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeCategory = chip.getAttribute('data-category');
      renderProjects();
    });
  });
}

/* ==========================================================================
   Teams Matchmaker
   ========================================================================== */
function renderTeams() {
  const container = document.getElementById('teams-container');
  if (!container) return;

  container.innerHTML = state.teams.map(t => `
    <div class="team-card">
      <div class="team-header">
        <div class="team-icon">
          <i class="fa-solid fa-users-viewfinder"></i>
        </div>
        <div>
          <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:700;">${t.name}</h3>
          <span style="font-size:0.8rem; color:var(--accent-cyan); font-weight:600;">${t.track}</span>
        </div>
      </div>

      <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">${t.description}</p>

      <div class="looking-roles">
        <div class="roles-title"><i class="fa-solid fa-user-plus"></i> Looking for:</div>
        ${t.lookingFor.map(role => `<span class="role-badge">${role}</span>`).join('')}
      </div>

      <div style="margin-top:auto; display:flex; justify-size:space-between; align-items:center; border-top:1px solid var(--border-glass); padding-top:0.8rem;">
        <span style="font-size:0.82rem; color:var(--text-dim);"><i class="fa-solid fa-user-group"></i> ${t.membersCount} Members</span>
        <button class="btn btn-secondary" style="padding:0.35rem 0.8rem; font-size:0.8rem;" onclick="alert('Join request sent to ${t.name}!')">
          Request to Join
        </button>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   AI Pitch Copilot Tool
   ========================================================================== */
function initAiCopilot() {
  const btnGen = document.getElementById('btn-generate-ai');
  const btnCopy = document.getElementById('btn-copy-ai');
  const outputBox = document.getElementById('ai-output-result');

  if (btnGen) {
    btnGen.addEventListener('click', () => {
      const name = document.getElementById('ai-project-name').value || 'VisionaryAI';
      const category = document.getElementById('ai-project-category').value;
      const problem = document.getElementById('ai-problem-statement').value || 'Developers spend too much time boilerplate coding and testing web components manually.';
      const tech = document.getElementById('ai-tech-stack').value || 'React, Python, Gemini 1.5, Vector Database';

      btnGen.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Generating Pitch & README...`;
      btnGen.disabled = true;

      setTimeout(() => {
        const generatedMarkdown = `# 🚀 ${name} - Hackathon Pitch & README

> **Track:** ${category}  
> **Tech Stack:** ${tech}

---

## 💡 Executive Summary
${name} is an intelligent, high-performance solution designed for the ${category} track. It addresses critical bottlenecks by automating complex workflows and delivering real-time insights.

## 🎯 Problem & Challenge
> "${problem}"

Existing solutions are fragmented, slow, and lack modern agentic automation. Users need an intuitive, fast, and scalable platform that streamlines collaboration.

## ⚡ Key Solution & Features
- **Real-Time Intelligence**: Powered by ${tech}.
- **Glassmorphic Interactive UI**: Seamless user experience with sub-second feedback loops.
- **Automated Workflow Orchestration**: Autonomous multi-agent coordination.
- **Enterprise-Ready Security**: Zero-knowledge validation and local storage fallbacks.

## 🛠️ Architecture & Tech Stack
\`\`\`
[ User Interface ] ---> [ WebSockets Sync ] ---> [ AI Agent Router ]
      (React)                  (Node.js)             (Gemini API)
\`\`\`

## 🎥 Hackathon Pitch Slide Outline
1. **Slide 1 - Hero & Hook:** Introducing ${name}
2. **Slide 2 - The Pain Point:** ${problem.substring(0, 80)}...
3. **Slide 3 - Live Demo & Architecture:** Real-time demonstration with ${tech}
4. **Slide 4 - Market Impact & Next Steps:** Scaling to 100k+ active developers.
`;

        outputBox.textContent = generatedMarkdown;
        btnGen.innerHTML = `<i class="fa-solid fa-sparkles"></i> Generate Pitch Deck & Markdown README`;
        btnGen.disabled = false;
      }, 700);
    });
  }

  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      if (outputBox && outputBox.textContent) {
        navigator.clipboard.writeText(outputBox.textContent);
        btnCopy.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => {
          btnCopy.innerHTML = `<i class="fa-solid fa-copy"></i> Copy Markdown`;
        }, 2000);
      }
    });
  }
}

/* ==========================================================================
   Judging Matrix & Leaderboard
   ========================================================================== */
function renderLeaderboard() {
  const tbody = document.getElementById('leaderboard-body');
  if (!tbody) return;

  // Sort projects by score descending, then upvotes
  const sorted = [...state.projects].sort((a, b) => (b.score - a.score) || (b.upvotes - a.upvotes));

  tbody.innerHTML = sorted.map((p, idx) => {
    let rankBadgeClass = 'rank-other';
    if (idx === 0) rankBadgeClass = 'rank-1';
    else if (idx === 1) rankBadgeClass = 'rank-2';
    else if (idx === 2) rankBadgeClass = 'rank-3';

    return `
      <tr>
        <td>
          <span class="rank-badge ${rankBadgeClass}">${idx + 1}</span>
        </td>
        <td>
          <div style="font-weight:700; font-family:var(--font-heading);">${p.title}</div>
          <div style="font-size:0.8rem; color:var(--text-dim);">${p.team ? p.team.join(', ') : 'Solo'}</div>
        </td>
        <td><span class="card-category-badge" style="position:static;">${p.category}</span></td>
        <td>
          <span style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:var(--accent-cyan);">
            ${p.score.toFixed(1)} / 10
          </span>
        </td>
        <td><i class="fa-solid fa-heart" style="color:var(--accent-magenta);"></i> ${p.upvotes}</td>
      </tr>
    `;
  }).join('');
}

function renderJudgingSelect() {
  const select = document.getElementById('judge-select-project');
  if (!select) return;

  select.innerHTML = state.projects.map(p => `
    <option value="${p.id}">${p.title} (${p.category})</option>
  `).join('');
}

function initJudgingSliders() {
  const sliders = ['innovation', 'tech', 'design', 'impact'];
  const scoreTotalEl = document.getElementById('judge-total-calculated');

  function calculateScore() {
    const sInno = parseInt(document.getElementById('score-innovation').value);
    const sTech = parseInt(document.getElementById('score-tech').value);
    const sDes = parseInt(document.getElementById('score-design').value);
    const sImp = parseInt(document.getElementById('score-impact').value);

    document.getElementById('val-innovation').textContent = `${sInno}/10`;
    document.getElementById('val-tech').textContent = `${sTech}/10`;
    document.getElementById('val-design').textContent = `${sDes}/10`;
    document.getElementById('val-impact').textContent = `${sImp}/10`;

    // Weighted formula: 30% Innovation, 30% Tech, 20% Design, 20% Impact
    const total = (sInno * 0.3) + (sTech * 0.3) + (sDes * 0.2) + (sImp * 0.2);
    scoreTotalEl.textContent = `${total.toFixed(1)} / 10`;
    return total;
  }

  sliders.forEach(s => {
    const el = document.getElementById(`score-${s}`);
    if (el) el.addEventListener('input', calculateScore);
  });

  const btnSubmitGrade = document.getElementById('btn-submit-grade');
  if (btnSubmitGrade) {
    btnSubmitGrade.addEventListener('click', () => {
      const projId = document.getElementById('judge-select-project').value;
      const calculatedScore = calculateScore();
      state.updateProjectScore(projId, calculatedScore);
      renderLeaderboard();

      btnSubmitGrade.innerHTML = `<i class="fa-solid fa-check"></i> Score Saved!`;
      setTimeout(() => {
        btnSubmitGrade.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit Judge Score`;
      }, 2000);
    });
  }
}

/* ==========================================================================
   Kanban Task Board
   ========================================================================== */
function renderKanban() {
  const colTodo = document.getElementById('col-todo');
  const colInProgress = document.getElementById('col-in-progress');
  const colDone = document.getElementById('col-done');

  if (!colTodo || !colInProgress || !colDone) return;

  const todos = state.tasks.filter(t => t.status === 'todo');
  const inProgresses = state.tasks.filter(t => t.status === 'in-progress');
  const dones = state.tasks.filter(t => t.status === 'done');

  document.getElementById('count-todo').textContent = todos.length;
  document.getElementById('count-in-progress').textContent = inProgresses.length;
  document.getElementById('count-done').textContent = dones.length;

  colTodo.innerHTML = renderTaskList(todos, 'in-progress', 'Move to In Progress');
  colInProgress.innerHTML = renderTaskList(inProgresses, 'done', 'Mark Completed');
  colDone.innerHTML = renderTaskList(dones, 'todo', 'Re-open Task');
}

function renderTaskList(taskList, nextStatus, nextLabel) {
  if (taskList.length === 0) {
    return `<div style="color:var(--text-dim); font-size:0.85rem; text-align:center; padding:1.5rem;">No tasks</div>`;
  }
  return taskList.map(t => `
    <div class="kanban-task">
      <div style="font-weight:600; margin-bottom:0.4rem; font-size:0.95rem;">${t.title}</div>
      <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.78rem; color:var(--text-muted);">
        <span><i class="fa-solid fa-user"></i> ${t.assignee}</span>
        <button style="background:none; border:none; color:var(--accent-cyan); font-weight:700; cursor:pointer;" onclick="moveTask('${t.id}', '${nextStatus}')">
          ${nextLabel} &rarr;
        </button>
      </div>
    </div>
  `).join('');
}

window.moveTask = function(taskId, nextStatus) {
  state.updateTaskStatus(taskId, nextStatus);
  renderKanban();
};

/* ==========================================================================
   Modals Control
   ========================================================================== */
function initModals() {
  const modalSubmit = document.getElementById('modal-submit-project');
  const modalTask = document.getElementById('modal-add-task');

  const btnOpenSubmit = document.getElementById('btn-open-submit');
  const btnAddTask = document.getElementById('btn-add-kanban-task');

  if (btnOpenSubmit && modalSubmit) {
    btnOpenSubmit.addEventListener('click', () => modalSubmit.classList.add('active'));
  }
  if (btnAddTask && modalTask) {
    btnAddTask.addEventListener('click', () => modalTask.classList.add('active'));
  }

  document.querySelectorAll('.close-modal, .modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  });

  // Click outside to close
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });

  // Submit project form
  const formSubmit = document.getElementById('form-submit-project');
  if (formSubmit) {
    formSubmit.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('sub-title').value;
      const category = document.getElementById('sub-category').value;
      const description = document.getElementById('sub-description').value;
      const techStr = document.getElementById('sub-tech').value;
      const link = document.getElementById('sub-link').value || '#';

      const tech = techStr ? techStr.split(',').map(s => s.trim()) : ['HTML', 'JS'];

      const newProj = {
        id: 'p_' + Date.now(),
        title,
        category,
        description,
        tech,
        image: 'assets/ai_copilot.png',
        upvotes: 1,
        score: 8.5,
        link,
        team: ['You']
      };

      state.addProject(newProj);
      renderProjects();
      renderLeaderboard();
      renderJudgingSelect();

      modalSubmit.classList.remove('active');
      formSubmit.reset();
    });
  }

  // Submit task form
  const formTask = document.getElementById('form-add-task');
  if (formTask) {
    formTask.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('task-title').value;
      const assignee = document.getElementById('task-assignee').value || 'Unassigned';
      const status = document.getElementById('task-status').value;

      state.addTask({
        id: 'tk_' + Date.now(),
        title,
        assignee,
        status
      });

      renderKanban();
      modalTask.classList.remove('active');
      formTask.reset();
    });
  }
}
