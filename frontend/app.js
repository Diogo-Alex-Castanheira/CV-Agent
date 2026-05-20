// Talent Tinder — Interactive Swipe-Based Recruitment App
(function() {
    'use strict';

    // State
    let currentCards = [];
    let currentIndex = 0;
    let decisions = {}; // cvId_roleId -> decision
    let activeRoleFilter = 0;

    // DOM refs
    const cardStack = document.getElementById('cardStack');
    const swipeActions = document.getElementById('swipeActions');
    const emptyState = document.getElementById('emptyState');
    const roleFilter = document.getElementById('roleFilter');
    const statTotal = document.getElementById('statTotal');
    const statShortlisted = document.getElementById('statShortlisted');
    const statReviewed = document.getElementById('statReviewed');

    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const view = btn.dataset.view;
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.getElementById('view-' + view).classList.add('active');
            if (view === 'dashboard') renderDashboard();
        });
    });

    // Role filter
    roleFilter.addEventListener('change', () => {
        activeRoleFilter = parseInt(roleFilter.value);
        loadCards();
    });

    // Reset
    document.getElementById('btnReset').addEventListener('click', () => {
        decisions = {};
        loadCards();
    });

    function getFilteredCards() {
        let cards = TALENT_DATA.slice();
        if (activeRoleFilter > 0) {
            cards = cards.filter(c => c.roleId === activeRoleFilter);
        }
        // Sort by score desc
        cards.sort((a, b) => b.score - a.score);
        // Filter out already decided
        cards = cards.filter(c => !decisions[c.cvId + '_' + c.roleId]);
        return cards;
    }

    function loadCards() {
        currentCards = getFilteredCards();
        currentIndex = 0;
        cardStack.innerHTML = '';
        emptyState.style.display = 'none';
        swipeActions.style.display = 'flex';

        if (currentCards.length === 0) {
            emptyState.style.display = 'block';
            swipeActions.style.display = 'none';
            updateStats();
            return;
        }

        // Render top 3 cards (stacked)
        const toRender = currentCards.slice(0, Math.min(3, currentCards.length));
        toRender.forEach((card, i) => {
            const el = createCardElement(card, i);
            cardStack.appendChild(el);
        });

        updateStats();
    }

    function getScoreClass(label) {
        if (label.includes('Strong')) return 'strong';
        if (label.includes('Good')) return 'good';
        if (label.includes('Possible')) return 'possible';
        return 'weak';
    }

    function getActionClass(action) {
        if (action === 'Shortlist') return 'shortlist';
        if (action === 'Hold') return 'hold';
        if (action === 'Need More Info') return 'info';
        return 'reject';
    }

    function createCardElement(card, stackIndex) {
        const el = document.createElement('div');
        el.className = 'candidate-card';
        el.dataset.label = card.label;
        el.style.zIndex = 10 - stackIndex;
        el.style.transform = `scale(${1 - stackIndex * 0.03}) translateY(${stackIndex * 8}px)`;

        const bd = card.breakdown || {};
        const maxScores = { technical: 30, experience: 25, seniority: 15, soft_skills: 15, certs_tools: 10, potential: 5 };
        const barLabels = { technical: 'Technical', experience: 'Experience', seniority: 'Seniority', soft_skills: 'Soft Skills', certs_tools: 'Certs/Tools', potential: 'Potential' };

        let barsHTML = '';
        for (const [key, max] of Object.entries(maxScores)) {
            const val = bd[key] || 0;
            const pct = Math.round((val / max) * 100);
            barsHTML += `<div class="score-bar-item">
                <span class="score-bar-label">${barLabels[key]} (${Math.round(val)}/${max})</span>
                <div class="score-bar-track"><div class="score-bar-fill" style="width:${pct}%"></div></div>
            </div>`;
        }

        const scoreClass = getScoreClass(card.label);
        const actionClass = getActionClass(card.action);

        el.innerHTML = `
            <div class="card-header">
                <span class="card-role">${card.role.length > 30 ? card.role.substring(0, 28) + '…' : card.role}</span>
                <span class="card-rank">#${card.rank} for role</span>
            </div>
            <div class="card-name">${card.name}</div>
            <div class="card-title">${card.title}</div>
            <div class="card-location">📍 ${card.location} · ${card.yearsExp > 0 ? card.yearsExp + ' years exp.' : 'Experience N/A'}</div>
            <div class="card-score-row">
                <div class="score-circle ${scoreClass}">${card.score}</div>
                <div class="score-details">
                    <div class="score-label">${card.label}</div>
                    <div class="score-action">AI Recommendation</div>
                </div>
                <span class="ai-recommendation ${actionClass}">${card.action}</span>
            </div>
            <div class="card-details">
                ${card.languages.length > 0 ? `<div class="detail-row"><span class="detail-label">🌍 Languages</span><span class="detail-value">${card.languages.join(', ')}</span></div>` : ''}
                ${card.certifications.length > 0 ? `<div class="detail-row"><span class="detail-label">🏅 Certs</span><span class="detail-value">${card.certifications.join(', ')}</span></div>` : ''}
                ${card.summary ? `<div class="detail-row"><span class="detail-label">📝 Summary</span><span class="detail-value">${card.summary.substring(0, 150)}${card.summary.length > 150 ? '…' : ''}</span></div>` : ''}
                <div class="score-bars">${barsHTML}</div>
            </div>
        `;

        return el;
    }

    function swipeCard(decision) {
        if (currentCards.length === 0) return;

        const card = currentCards[0];
        const key = card.cvId + '_' + card.roleId;
        decisions[key] = decision;

        // Animate
        const el = cardStack.querySelector('.candidate-card');
        if (el) {
            if (decision === 'Shortlist') el.classList.add('swipe-right');
            else if (decision === 'Reject') el.classList.add('swipe-left');
            else el.classList.add('swipe-up');

            setTimeout(() => {
                loadCards();
            }, 400);
        } else {
            loadCards();
        }
    }

    // Action buttons
    document.getElementById('btnReject').addEventListener('click', () => swipeCard('Reject'));
    document.getElementById('btnInfo').addEventListener('click', () => swipeCard('Need More Info'));
    document.getElementById('btnHold').addEventListener('click', () => swipeCard('Hold'));
    document.getElementById('btnShortlist').addEventListener('click', () => swipeCard('Shortlist'));

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (document.querySelector('#view-swipe.active')) {
            if (e.key === 'ArrowLeft') swipeCard('Reject');
            if (e.key === 'ArrowUp') swipeCard('Hold');
            if (e.key === 'ArrowRight') swipeCard('Shortlist');
            if (e.key === 'ArrowDown') swipeCard('Need More Info');
        }
    });

    function updateStats() {
        const total = activeRoleFilter > 0
            ? TALENT_DATA.filter(c => c.roleId === activeRoleFilter).length
            : TALENT_DATA.length;
        const reviewed = Object.keys(decisions).length;
        const shortlisted = Object.values(decisions).filter(d => d === 'Shortlist').length;

        statTotal.textContent = total;
        statReviewed.textContent = reviewed;
        statShortlisted.textContent = shortlisted;
    }

    function renderDashboard() {
        // Pipeline chart
        const pipelineEl = document.getElementById('pipelineChart');
        let pipelineHTML = '';
        const colors = ['#FFE600', '#3b82f6', '#8b5cf6', '#22c55e', '#f59e0b'];

        for (const [rid, name] of Object.entries(ROLES)) {
            const roleCards = TALENT_DATA.filter(c => c.roleId === parseInt(rid));
            const avgScore = roleCards.length > 0
                ? Math.round(roleCards.reduce((s, c) => s + c.score, 0) / roleCards.length)
                : 0;
            const topScore = roleCards.length > 0 ? Math.max(...roleCards.map(c => c.score)) : 0;

            pipelineHTML += `<div class="pipeline-bar">
                <span class="bar-label">${name.length > 22 ? name.substring(0, 20) + '…' : name}</span>
                <div class="bar-track">
                    <div class="bar-fill" style="width:${topScore}%; background:${colors[parseInt(rid)-1]}">${topScore}</div>
                </div>
            </div>`;
        }
        pipelineEl.innerHTML = pipelineHTML;

        // Decisions chart
        const decisionsEl = document.getElementById('decisionsChart');
        const decCounts = { 'Shortlist': 0, 'Hold': 0, 'Need More Info': 0, 'Reject': 0 };
        Object.values(decisions).forEach(d => { if (decCounts[d] !== undefined) decCounts[d]++; });

        const decColors = { 'Shortlist': '#22c55e', 'Hold': '#f59e0b', 'Need More Info': '#3b82f6', 'Reject': '#ef4444' };
        let decHTML = '';
        for (const [label, count] of Object.entries(decCounts)) {
            decHTML += `<div class="decision-item">
                <span class="dec-label"><span class="dec-dot" style="background:${decColors[label]}"></span> ${label}</span>
                <span class="dec-count">${count}</span>
            </div>`;
        }
        decisionsEl.innerHTML = decHTML;

        // Table
        const tbody = document.getElementById('dashboardBody');
        let tableHTML = '';
        const allCards = TALENT_DATA.slice().sort((a, b) => b.score - a.score);

        for (const card of allCards) {
            const key = card.cvId + '_' + card.roleId;
            const userDec = decisions[key] || 'Pending';
            const decClass = getActionClass(userDec === 'Pending' ? '' : userDec);
            const aiClass = getActionClass(card.action);

            tableHTML += `<tr>
                <td>${card.role.length > 25 ? card.role.substring(0, 23) + '…' : card.role}</td>
                <td><strong>${card.name}</strong><br><small style="color:var(--text-secondary)">${card.title}</small></td>
                <td><strong>${card.score}</strong></td>
                <td><span class="badge ${aiClass}">${card.action}</span></td>
                <td><span class="badge ${userDec === 'Pending' ? 'pending' : decClass}">${userDec}</span></td>
                <td style="font-size:12px;color:var(--text-secondary)">${card.summary ? card.summary.substring(0, 60) + '…' : 'N/A'}</td>
            </tr>`;
        }
        tbody.innerHTML = tableHTML;
    }

    // Init
    loadCards();
})();
