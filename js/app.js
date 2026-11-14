/**
 * KhelBharat - Main Application Engine
 * Handles rendering, interactive modals, tabs, ground diagrams, search/filters, quiz, and speech.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  const state = {
    sports: sportsData,
    currentCategory: "all",
    searchQuery: "",
    activeSport: null,
    activeTab: "overview",
    bookmarks: JSON.parse(localStorage.getItem("khelbharat_bookmarks") || "[]"),
    quiz: {
      currentQuestion: 0,
      score: 0,
      answered: false,
      userAnswers: []
    },
    speechSynthesis: window.speechSynthesis || null,
    isSpeaking: false
  };

  // DOM Elements
  const sportsGrid = document.getElementById("sportsGrid");
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const categoryFilters = document.getElementById("categoryFilters");
  const sportModal = document.getElementById("sportModal");
  const modalContainer = document.getElementById("modalContainer");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const searchCountBadge = document.getElementById("searchCountBadge");
  const bookmarksCountBadge = document.getElementById("bookmarksCountBadge");

  // Quiz DOM Elements
  const quizCard = document.getElementById("quizCard");
  const quizQuestionText = document.getElementById("quizQuestionText");
  const quizOptionsContainer = document.getElementById("quizOptionsContainer");
  const quizExplanation = document.getElementById("quizExplanation");
  const quizProgress = document.getElementById("quizProgress");
  const quizScoreBadge = document.getElementById("quizScoreBadge");
  const nextQuizBtn = document.getElementById("nextQuizBtn");
  const resetQuizBtn = document.getElementById("resetQuizBtn");
  const quizResultBox = document.getElementById("quizResultBox");

  // Ground Comparison Container
  const comparisonContainer = document.getElementById("comparisonContainer");

  // Initialize
  init();

  function init() {
    renderSportsList();
    renderGroundComparison();
    initQuiz();
    setupEventListeners();
    updateBookmarksCount();
  }

  // Render Sports Grid
  function renderSportsList() {
    let filtered = state.sports;

    // Filter by category
    if (state.currentCategory !== "all") {
      filtered = filtered.filter(sport => {
        if (state.currentCategory === "team") return sport.category.includes("Team");
        if (state.currentCategory === "indigenous") return sport.category.includes("Indigenous") || sport.category.includes("Traditional") || sport.id === "kho-kho" || sport.id === "kabaddi";
        if (state.currentCategory === "racket") return sport.category.includes("Racket") || sport.id === "badminton" || sport.id === "table-tennis";
        if (state.currentCategory === "combat-mind") return sport.category.includes("Combat") || sport.category.includes("Mind") || sport.id === "chess" || sport.id === "wrestling";
        if (state.currentCategory === "track") return sport.category.includes("Track") || sport.id === "athletics";
        if (state.currentCategory === "bookmarked") return state.bookmarks.includes(sport.id);
        return true;
      });
    }

    // Filter by search query (checks name, hindiName, category, summary, rules, player names)
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(sport => {
        const nameMatch = sport.name.toLowerCase().includes(q);
        const hindiMatch = sport.hindiName.toLowerCase().includes(q);
        const summaryMatch = sport.summary.toLowerCase().includes(q);
        const playerMatch = sport.famousPlayers.some(p => 
          p.name.toLowerCase().includes(q) || 
          p.alias.toLowerCase().includes(q)
        );
        const tournamentMatch = sport.tournaments.some(t => t.name.toLowerCase().includes(q));
        return nameMatch || hindiMatch || summaryMatch || playerMatch || tournamentMatch;
      });
    }

    // Update search count badge
    if (searchCountBadge) {
      searchCountBadge.textContent = `${filtered.length} of ${state.sports.length} Sports`;
    }

    if (filtered.length === 0) {
      sportsGrid.innerHTML = `
        <div class="col-span-full py-16 text-center glass-panel rounded-2xl border border-slate-700/50">
          <div class="text-5xl mb-4">🔍</div>
          <h3 class="text-2xl font-bold text-white mb-2">No matching sports found</h3>
          <p class="text-slate-400 max-w-md mx-auto mb-6">We couldn't find any sport matching "${state.searchQuery}". Try searching for another sport or player name like "Kohli", "Sindhu", "Neeraj", or "Kabaddi".</p>
          <button id="resetSearchBtn" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition">
            Clear Search & Show All
          </button>
        </div>
      `;
      const resetSearchBtn = document.getElementById("resetSearchBtn");
      if (resetSearchBtn) {
        resetSearchBtn.addEventListener("click", () => {
          state.searchQuery = "";
          searchInput.value = "";
          state.currentCategory = "all";
          updateCategoryPills();
          renderSportsList();
        });
      }
      return;
    }

    sportsGrid.innerHTML = filtered.map(sport => createSportCardHTML(sport)).join("");

    // Attach card event listeners
    filtered.forEach(sport => {
      // Explore deep dive button
      const openBtn = document.getElementById(`exploreBtn-${sport.id}`);
      if (openBtn) {
        openBtn.addEventListener("click", () => openSportModal(sport.id, "overview"));
      }

      // Ground specs quick view button
      const groundBtn = document.getElementById(`groundBtn-${sport.id}`);
      if (groundBtn) {
        groundBtn.addEventListener("click", () => openSportModal(sport.id, "ground"));
      }

      // Rules quick view button
      const rulesBtn = document.getElementById(`rulesBtn-${sport.id}`);
      if (rulesBtn) {
        rulesBtn.addEventListener("click", () => openSportModal(sport.id, "rules"));
      }

      // Bookmark button
      const bmBtn = document.getElementById(`bmBtn-${sport.id}`);
      if (bmBtn) {
        bmBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleBookmark(sport.id);
        });
      }

      // Audio Brief button
      const audioBtn = document.getElementById(`audioBtn-${sport.id}`);
      if (audioBtn) {
        audioBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          speakSportSummary(sport);
        });
      }
    });
  }

  // Create Sport Card HTML
  function createSportCardHTML(sport) {
    const isBookmarked = state.bookmarks.includes(sport.id);
    const topPlayersPreview = sport.famousPlayers.slice(0, 3).map(p => p.name).join(", ");

    return `
      <div class="sport-card glass-panel rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-700/60 hover:border-slate-500/80 group">
        <!-- Card Header with Gradient Accent -->
        <div class="p-6 pb-4">
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="flex items-center gap-3">
              <span class="w-12 h-12 rounded-xl bg-gradient-to-br ${sport.themeColor} flex items-center justify-center text-2xl shadow-lg shadow-black/40 group-hover:scale-110 transition-transform">
                ${sport.icon}
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">${sport.name}</h3>
                  <span class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-indic border border-slate-700">${sport.hindiName}</span>
                </div>
                <p class="text-xs text-slate-400 font-medium">${sport.category}</p>
              </div>
            </div>

            <div class="flex items-center gap-1.5">
              <span class="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800/90 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                🏆 #${sport.rank}
              </span>
              <button id="bmBtn-${sport.id}" title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark Sport'}" class="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-amber-400 flex items-center justify-center transition border border-slate-700">
                ${isBookmarked ? '★' : '☆'}
              </button>
            </div>
          </div>

          <p class="text-xs text-sky-400/90 font-semibold mb-2.5 italic">"${sport.tagline}"</p>
          <p class="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">${sport.summary}</p>

          <!-- Quick Metrics Grid -->
          <div class="grid grid-cols-2 gap-2 text-xs py-3 px-3.5 bg-slate-900/60 rounded-xl border border-slate-800 mb-4">
            <div>
              <span class="text-slate-400 block text-[11px]">👥 Team Size</span>
              <span class="text-slate-200 font-semibold truncate block">${sport.teamSize.onField}</span>
            </div>
            <div>
              <span class="text-slate-400 block text-[11px]">🏟️ Playing Surface</span>
              <span class="text-slate-200 font-semibold truncate block">${sport.groundSpecs.surface.split(' ')[0]} ${sport.groundSpecs.surface.split(' ')[1] || ''}</span>
            </div>
            <div class="col-span-2 pt-1 border-t border-slate-800/80">
              <span class="text-slate-400 block text-[11px]">⭐ Iconic Legends</span>
              <span class="text-amber-300 font-medium truncate block">${topPlayersPreview}</span>
            </div>
          </div>
        </div>

        <!-- Card Footer Actions -->
        <div class="px-6 py-4 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <div class="flex items-center gap-1.5">
            <button id="groundBtn-${sport.id}" title="View Ground Dimensions" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center gap-1">
              📐 Ground
            </button>
            <button id="rulesBtn-${sport.id}" title="View Rules" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center gap-1">
              📜 Rules
            </button>
            <button id="audioBtn-${sport.id}" title="Listen to 30-sec Audio Brief" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-sky-600/30 text-sky-400 border border-slate-700 flex items-center justify-center transition">
              🔊
            </button>
          </div>

          <button id="exploreBtn-${sport.id}" class="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-900/30 transition flex items-center gap-1">
            Explore <span>&rarr;</span>
          </button>
        </div>
      </div>
    `;
  }

  // Open Sport Detail Modal
  function openSportModal(sportId, defaultTab = "overview") {
    const sport = state.sports.find(s => s.id === sportId);
    if (!sport) return;

    state.activeSport = sport;
    state.activeTab = defaultTab;

    renderModalContent();
    sportModal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  // Close Sport Detail Modal
  function closeSportModal() {
    sportModal.classList.add("hidden");
    document.body.style.overflow = "";
    if (state.isSpeaking && state.speechSynthesis) {
      state.speechSynthesis.cancel();
      state.isSpeaking = false;
    }
  }

  // Render Modal Content
  function renderModalContent() {
    const sport = state.activeSport;
    if (!sport) return;

    const isBookmarked = state.bookmarks.includes(sport.id);

    modalContainer.innerHTML = `
      <div class="relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col max-h-[90vh]">
        <!-- Modal Header -->
        <div class="p-6 md:p-8 bg-gradient-to-r ${sport.themeColor} relative text-white flex-shrink-0">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-center gap-4">
              <span class="w-16 h-16 rounded-2xl bg-black/30 backdrop-blur-md flex items-center justify-center text-4xl shadow-xl border border-white/20">
                ${sport.icon}
              </span>
              <div>
                <div class="flex items-center gap-3 flex-wrap">
                  <h2 class="text-2xl md:text-3xl font-extrabold text-white">${sport.name}</h2>
                  <span class="text-lg font-indic px-3 py-0.5 rounded-lg bg-black/30 border border-white/20 text-amber-200">${sport.hindiName}</span>
                  <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-400 text-slate-900 shadow">
                    Rank #${sport.rank} in India
                  </span>
                </div>
                <p class="text-sm md:text-base text-slate-200 mt-1 font-medium">${sport.tagline}</p>
              </div>
            </div>

            <!-- Close & Action Buttons -->
            <div class="flex items-center gap-2">
              <button id="modalAudioBtn" class="px-3 py-1.5 rounded-xl bg-black/40 hover:bg-black/60 text-white text-xs font-semibold backdrop-blur-md border border-white/20 flex items-center gap-1.5 transition">
                <span>🔊</span> <span>Listen Brief</span>
              </button>
              <button id="modalBookmarkBtn" class="w-9 h-9 rounded-xl bg-black/40 hover:bg-black/60 text-white text-lg backdrop-blur-md border border-white/20 flex items-center justify-center transition">
                ${isBookmarked ? '★' : '☆'}
              </button>
              <button id="modalCloseX" class="w-9 h-9 rounded-xl bg-black/40 hover:bg-black/70 text-white text-xl backdrop-blur-md border border-white/20 flex items-center justify-center transition">
                ✕
              </button>
            </div>
          </div>

          <!-- Modal Navigation Tabs -->
          <div class="flex items-center gap-2 overflow-x-auto mt-6 pt-2 scrollbar-none border-t border-white/15">
            <button class="tab-btn px-4 py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 ${state.activeTab === 'overview' ? 'active' : 'bg-black/20 text-white hover:bg-black/40'}" data-tab="overview">
              📋 Overview & Roots
            </button>
            <button class="tab-btn px-4 py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 ${state.activeTab === 'ground' ? 'active' : 'bg-black/20 text-white hover:bg-black/40'}" data-tab="ground">
              📐 Ground & Dimensions
            </button>
            <button class="tab-btn px-4 py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 ${state.activeTab === 'rules' ? 'active' : 'bg-black/20 text-white hover:bg-black/40'}" data-tab="rules">
              📜 Rules & Gameplay
            </button>
            <button class="tab-btn px-4 py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 ${state.activeTab === 'players' ? 'active' : 'bg-black/20 text-white hover:bg-black/40'}" data-tab="players">
              ⭐ Legends & Stars
            </button>
            <button class="tab-btn px-4 py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 ${state.activeTab === 'tournaments' ? 'active' : 'bg-black/20 text-white hover:bg-black/40'}" data-tab="tournaments">
              🏆 Tournaments & Kit
            </button>
          </div>
        </div>

        <!-- Modal Body Content -->
        <div class="p-6 md:p-8 overflow-y-auto flex-1 space-y-6 text-slate-200">
          ${renderActiveTabContent(sport)}
        </div>

        <!-- Modal Footer -->
        <div class="p-4 px-6 md:px-8 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Governing Body: <strong class="text-slate-200">${sport.governingBody.name}</strong></span>
          </div>
          <button id="copySummaryBtn" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition flex items-center gap-1.5">
            📋 Copy Sport Summary
          </button>
        </div>
      </div>
    `;

    // Attach Modal Tab Event Listeners
    modalContainer.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeTab = btn.getAttribute("data-tab");
        renderModalContent();
      });
    });

    // Close Button
    const closeBtn = document.getElementById("modalCloseX");
    if (closeBtn) closeBtn.addEventListener("click", closeSportModal);

    // Audio Brief Button
    const modalAudioBtn = document.getElementById("modalAudioBtn");
    if (modalAudioBtn) {
      modalAudioBtn.addEventListener("click", () => speakSportSummary(sport));
    }

    // Modal Bookmark Button
    const modalBmBtn = document.getElementById("modalBookmarkBtn");
    if (modalBmBtn) {
      modalBmBtn.addEventListener("click", () => {
        toggleBookmark(sport.id);
        renderModalContent();
      });
    }

    // Copy Summary Button
    const copySummaryBtn = document.getElementById("copySummaryBtn");
    if (copySummaryBtn) {
      copySummaryBtn.addEventListener("click", () => copySportSummary(sport));
    }
  }

  // Render Specific Tab Content inside Modal
  function renderActiveTabContent(sport) {
    switch (state.activeTab) {
      case "overview":
        return `
          <div class="space-y-6">
            <div class="glass-panel p-5 rounded-2xl border border-slate-800">
              <h4 class="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span class="text-blue-400">🇮🇳</span> Cultural Significance in India
              </h4>
              <p class="text-slate-300 leading-relaxed text-sm md:text-base">${sport.summary}</p>
            </div>

            <!-- Team & Squad Architecture -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span class="text-xs font-semibold text-sky-400 block mb-1">👥 Players on Field</span>
                <p class="text-white font-bold text-sm md:text-base">${sport.teamSize.onField}</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span class="text-xs font-semibold text-emerald-400 block mb-1">📋 Squad / Roster</span>
                <p class="text-white font-bold text-sm md:text-base">${sport.teamSize.squad}</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span class="text-xs font-semibold text-amber-400 block mb-1">🎯 Specialized Roles</span>
                <p class="text-white font-bold text-sm md:text-base">${sport.teamSize.roles}</p>
              </div>
            </div>

            <!-- Grassroots Culture in India -->
            <div class="glass-panel p-5 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/90 to-amber-950/20">
              <h4 class="text-base font-bold text-amber-300 mb-2 flex items-center gap-2">
                <span>🌱</span> Grassroots & Regional Culture
              </h4>
              <p class="text-slate-300 text-sm leading-relaxed">${sport.grassrootsCulture}</p>
            </div>
          </div>
        `;

      case "ground":
        const diagramRenderer = groundDiagrams[sport.id];
        const svgDiagram = diagramRenderer ? diagramRenderer() : `<div class="p-8 text-center text-slate-400">Diagram coming soon</div>`;

        return `
          <div class="space-y-6">
            <div class="glass-panel p-4 md:p-6 rounded-2xl border border-slate-800 ground-container">
              <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div>
                  <h4 class="text-lg font-bold text-white">${sport.groundSpecs.title}</h4>
                  <p class="text-xs text-slate-400">Official architectural layout & regulation markings</p>
                </div>
                <span class="text-xs px-3 py-1 rounded-lg bg-blue-950 text-blue-300 border border-blue-800 font-medium">
                  Surface: ${sport.groundSpecs.surface.split(';')[0]}
                </span>
              </div>

              <!-- Interactive SVG Ground Diagram -->
              <div class="bg-slate-950/80 rounded-xl p-2 md:p-4 border border-slate-800/80 flex items-center justify-center overflow-hidden">
                ${svgDiagram}
              </div>
            </div>

            <!-- Dimensions & Key Specifications Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-2">
                <h5 class="text-xs font-bold text-sky-400 uppercase tracking-wider">Overall Dimensions</h5>
                <p class="text-white font-semibold">${sport.groundSpecs.overallSize || sport.groundSpecs.dimensions || sport.groundSpecs.tableLength || 'Standard regulation size'}</p>
                <p class="text-xs text-slate-400"><strong>Surface Material:</strong> ${sport.groundSpecs.surface}</p>
              </div>

              <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-2">
                <h5 class="text-xs font-bold text-amber-400 uppercase tracking-wider">Key Field / Equipment Markings</h5>
                <ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  ${sport.groundSpecs.creases ? sport.groundSpecs.creases.map(c => `<li>${c}</li>`).join('') : ''}
                  ${sport.groundSpecs.stumps ? `<li>Stumps: ${sport.groundSpecs.stumps}</li>` : ''}
                  ${sport.groundSpecs.baulkLine ? `<li>Baulk Line: ${sport.groundSpecs.baulkLine}</li>` : ''}
                  ${sport.groundSpecs.bonusLine ? `<li>Bonus Line: ${sport.groundSpecs.bonusLine}</li>` : ''}
                  ${sport.groundSpecs.netSpecs ? `<li>Net Height: ${sport.groundSpecs.netSpecs}</li>` : ''}
                  ${sport.groundSpecs.strikingCircle ? `<li>Striking Circle: ${sport.groundSpecs.strikingCircle}</li>` : ''}
                  ${sport.groundSpecs.penaltySpot ? `<li>Penalty Spot: ${sport.groundSpecs.penaltySpot}</li>` : ''}
                  ${sport.groundSpecs.penaltyArea ? `<li>Penalty Area: ${sport.groundSpecs.penaltyArea}</li>` : ''}
                  ${sport.groundSpecs.centralLane ? `<li>Central Lane: ${sport.groundSpecs.centralLane}</li>` : ''}
                  ${sport.groundSpecs.poles ? `<li>Target Poles: ${sport.groundSpecs.poles}</li>` : ''}
                  ${sport.groundSpecs.contestArea ? `<li>Contest Area: ${sport.groundSpecs.contestArea}</li>` : ''}
                  ${sport.groundSpecs.javelinRunway ? `<li>Javelin Runway: ${sport.groundSpecs.javelinRunway}</li>` : ''}
                  ${sport.groundSpecs.landingSector ? `<li>Landing Sector: ${sport.groundSpecs.landingSector}</li>` : ''}
                </ul>
              </div>
            </div>
          </div>
        `;

      case "rules":
        return `
          <div class="space-y-6">
            <!-- Objective Box -->
            <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-800/40">
              <h4 class="text-sm font-bold text-blue-300 uppercase tracking-wider mb-1">🎯 Core Objective</h4>
              <p class="text-white text-base font-medium leading-relaxed">${sport.rules.objective}</p>
            </div>

            <!-- Match Formats / Duration -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <h5 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">⏱️ Match Duration & Formats</h5>
                ${sport.rules.formats ? `
                  <ul class="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                    ${sport.rules.formats.map(f => `<li>${f}</li>`).join('')}
                  </ul>
                ` : `
                  <p class="text-xs text-slate-300 leading-relaxed">${sport.rules.matchDuration || sport.rules.boutDuration || sport.rules.matchStructure || 'Standard timed regulation'}</p>
                `}
              </div>

              <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <h5 class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">🔢 Scoring System</h5>
                <p class="text-xs text-slate-300 leading-relaxed">${sport.rules.scoringSystem || 'Standard international points tally'}</p>
                ${sport.rules.pointScoring ? `
                  <ul class="text-xs text-slate-300 space-y-1 mt-2 list-disc list-inside">
                    ${sport.rules.pointScoring.map(p => `<li>${p}</li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            </div>

            <!-- Unique Mechanics & Fouls -->
            <div class="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
              <h4 class="text-sm font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>⚠️</span> Crucial Rules, Fouls & Unique Mechanics
              </h4>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                ${sport.rules.dismissalMethods ? `
                  <div class="col-span-full">
                    <span class="font-bold text-slate-200 block mb-1">Ways to Get Dismissed (Out):</span>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                      ${sport.rules.dismissalMethods.map(m => `<div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">${m}</div>`).join('')}
                    </div>
                  </div>
                ` : ''}

                ${sport.rules.specialRules ? sport.rules.specialRules.map(r => `
                  <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <p class="font-medium text-slate-200">${r}</p>
                  </div>
                `).join('') : ''}

                ${sport.rules.faults ? sport.rules.faults.map(f => `
                  <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <p class="font-medium text-slate-200">❌ ${f}</p>
                  </div>
                `).join('') : ''}

                ${sport.rules.strictRules ? sport.rules.strictRules.map(sr => `
                  <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <p class="font-medium text-slate-200">${sr}</p>
                  </div>
                `).join('') : ''}

                ${sport.rules.pieceMovements ? `
                  <div class="col-span-full space-y-1.5">
                    <span class="font-bold text-slate-200 block mb-1">Piece Movement Rules:</span>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                      ${sport.rules.pieceMovements.map(pm => `<div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">${pm}</div>`).join('')}
                    </div>
                  </div>
                ` : ''}

                ${sport.rules.javelinRules ? sport.rules.javelinRules.map(jr => `
                  <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <p class="font-medium text-slate-200">🎯 ${jr}</p>
                  </div>
                `).join('') : ''}
              </div>
            </div>
          </div>
        `;

      case "players":
        return `
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-base font-bold text-white flex items-center gap-2">
                <span>⭐</span> Legendary Indian Champions & Modern Icons
              </h4>
              <span class="text-xs text-amber-400 font-semibold">${sport.famousPlayers.length} Profiles</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${sport.famousPlayers.map(player => `
                <div class="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-slate-500 transition space-y-2.5">
                  <div class="flex items-start justify-between gap-2">
                    <div>
                      <h5 class="text-base font-extrabold text-white">${player.name}</h5>
                      <span class="text-xs font-semibold text-amber-400">${player.alias}</span>
                    </div>
                    <span class="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      ${player.era}
                    </span>
                  </div>

                  <div class="text-xs space-y-1">
                    <p><strong class="text-slate-400">Role:</strong> <span class="text-slate-200">${player.role}</span></p>
                    <p><strong class="text-slate-400">Key Accolades:</strong> <span class="text-sky-300 font-medium">${player.stats}</span></p>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-700/50">${player.bio}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case "tournaments":
        return `
          <div class="space-y-6">
            <!-- Tournaments List -->
            <div>
              <h4 class="text-base font-bold text-white mb-3 flex items-center gap-2">
                <span>🏆</span> Premier Tournaments & Leagues
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${sport.tournaments.map(t => `
                  <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/70 flex items-start gap-3">
                    <span class="text-xl">🥇</span>
                    <div>
                      <h5 class="text-sm font-bold text-white">${t.name}</h5>
                      <p class="text-xs text-slate-300 mt-0.5">${t.type}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Governing Bodies -->
            <div class="glass-panel p-5 rounded-2xl border border-slate-800">
              <h4 class="text-sm font-bold text-sky-400 uppercase tracking-wider mb-2">🏛️ Governing Organizations</h4>
              <div class="text-sm space-y-1">
                <p><strong class="text-slate-400">National Body:</strong> <span class="text-white font-semibold">${sport.governingBody.name}</span> (${sport.governingBody.headquarters})</p>
                <p><strong class="text-slate-400">International Federation:</strong> <span class="text-slate-200">${sport.governingBody.international}</span></p>
              </div>
            </div>

            <!-- Kit & Equipment Needed -->
            <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <h4 class="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3">🎒 Essential Playing Equipment</h4>
              <div class="flex flex-wrap gap-2">
                ${sport.equipment.map(item => `
                  <span class="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 font-medium">
                    ✓ ${item}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `;

      default:
        return ``;
    }
  }

  // Render Ground Dimension Comparison Tool
  function renderGroundComparison() {
    if (!comparisonContainer) return;

    const grounds = [
      { name: "Cricket Field", areaM2: 15400, lengthM: 140, color: "bg-blue-600", note: "Approx 140m diameter (~15,400 m²)" },
      { name: "Football (Soccer) Pitch", areaM2: 7140, lengthM: 105, color: "bg-emerald-600", note: "105m × 68m (7,140 m²)" },
      { name: "Field Hockey Pitch", areaM2: 5027, lengthM: 91.4, color: "bg-cyan-600", note: "91.4m × 55m (5,027 m²)" },
      { name: "Athletics 400m Track Infield", areaM2: 9500, lengthM: 178, color: "bg-amber-600", note: "400m Oval + Infield (9,500 m²)" },
      { name: "Kho-Kho Court", areaM2: 432, lengthM: 27, color: "bg-yellow-600", note: "27m × 16m (432 m²)" },
      { name: "Kabaddi Mat", areaM2: 130, lengthM: 13, color: "bg-orange-600", note: "13m × 10m (130 m²)" },
      { name: "Badminton Court", areaM2: 81.7, lengthM: 13.4, color: "bg-teal-600", note: "13.4m × 6.1m (81.7 m²)" },
      { name: "Wrestling Mat", areaM2: 144, lengthM: 12, color: "bg-red-600", note: "12m × 12m square (144 m²)" },
      { name: "Table Tennis Arena", areaM2: 98, lengthM: 14, color: "bg-sky-600", note: "Arena: 14m × 7m | Table: 2.74m × 1.525m (4.18 m²)" },
      { name: "Chess Board", areaM2: 0.25, lengthM: 0.5, color: "bg-slate-500", note: "50cm × 50cm tournament board (0.25 m²)" }
    ];

    const maxArea = 16000;

    comparisonContainer.innerHTML = grounds.map(g => {
      const percentage = Math.max((g.areaM2 / maxArea) * 100, 2);
      return `
        <div class="space-y-1.5">
          <div class="flex items-center justify-between text-xs font-semibold">
            <span class="text-white">${g.name}</span>
            <span class="text-slate-400 font-mono">${g.note}</span>
          </div>
          <div class="w-full bg-slate-800/80 rounded-full h-3 overflow-hidden p-0.5 border border-slate-700/60">
            <div class="${g.color} h-full rounded-full transition-all duration-700" style="width: ${percentage}%"></div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Quiz Logic
  function initQuiz() {
    state.quiz.currentQuestion = 0;
    state.quiz.score = 0;
    state.quiz.answered = false;
    showQuizQuestion();
  }

  function showQuizQuestion() {
    const qIndex = state.quiz.currentQuestion;
    const totalQ = quizData.length;

    if (qIndex >= totalQ) {
      showQuizCompletion();
      return;
    }

    const q = quizData[qIndex];
    state.quiz.answered = false;

    if (quizQuestionText) quizQuestionText.textContent = `${qIndex + 1}. ${q.question}`;
    if (quizProgress) quizProgress.textContent = `Question ${qIndex + 1} of ${totalQ}`;
    if (quizScoreBadge) quizScoreBadge.textContent = `Score: ${state.quiz.score}/${qIndex}`;
    if (quizExplanation) quizExplanation.classList.add("hidden");
    if (nextQuizBtn) nextQuizBtn.classList.add("hidden");
    if (quizResultBox) quizResultBox.classList.add("hidden");
    if (quizCard) quizCard.classList.remove("hidden");

    if (quizOptionsContainer) {
      quizOptionsContainer.innerHTML = q.options.map((opt, i) => `
        <button class="quiz-opt-btn w-full text-left p-3.5 rounded-xl bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-sm font-medium transition flex items-center justify-between group" data-index="${i}">
          <span>${opt}</span>
          <span class="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center text-xs group-hover:border-blue-400">
            ${String.fromCharCode(65 + i)}
          </span>
        </button>
      `).join("");

      quizOptionsContainer.querySelectorAll(".quiz-opt-btn").forEach(btn => {
        btn.addEventListener("click", () => handleQuizAnswer(parseInt(btn.getAttribute("data-index"))));
      });
    }
  }

  function handleQuizAnswer(selectedIndex) {
    if (state.quiz.answered) return;
    state.quiz.answered = true;

    const q = quizData[state.quiz.currentQuestion];
    const isCorrect = selectedIndex === q.correctIndex;

    if (isCorrect) {
      state.quiz.score++;
    }

    // Highlight options
    const optionBtns = quizOptionsContainer.querySelectorAll(".quiz-opt-btn");
    optionBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correctIndex) {
        btn.classList.remove("bg-slate-800/70", "border-slate-700");
        btn.classList.add("bg-emerald-900/60", "border-emerald-500", "text-emerald-200");
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.remove("bg-slate-800/70", "border-slate-700");
        btn.classList.add("bg-rose-900/60", "border-rose-500", "text-rose-200");
      }
    });

    // Show Explanation
    if (quizExplanation) {
      quizExplanation.innerHTML = `
        <div class="p-4 rounded-xl ${isCorrect ? 'bg-emerald-950/70 border border-emerald-800' : 'bg-rose-950/70 border border-rose-800'} text-xs leading-relaxed">
          <p class="font-bold ${isCorrect ? 'text-emerald-300' : 'text-rose-300'} mb-1">
            ${isCorrect ? '✓ Correct Answer!' : '✗ Incorrect!'}
          </p>
          <p class="text-slate-300">${q.explanation}</p>
        </div>
      `;
      quizExplanation.classList.remove("hidden");
    }

    if (quizScoreBadge) {
      quizScoreBadge.textContent = `Score: ${state.quiz.score}/${state.quiz.currentQuestion + 1}`;
    }

    if (nextQuizBtn) {
      nextQuizBtn.classList.remove("hidden");
    }
  }

  function showQuizCompletion() {
    if (quizCard) quizCard.classList.add("hidden");
    if (quizResultBox) {
      const percentage = Math.round((state.quiz.score / quizData.length) * 100);
      let cheer = "Fantastic effort! You really know Indian sports!";
      if (percentage >= 80) cheer = "🌟 Outstanding! You are a certified Indian Sports Genius!";
      else if (percentage < 50) cheer = "Good attempt! Explore the sports cards above to boost your sports knowledge!";

      quizResultBox.innerHTML = `
        <div class="text-center py-8 space-y-4">
          <div class="text-5xl">🏆</div>
          <h3 class="text-2xl font-bold text-white">Quiz Completed!</h3>
          <p class="text-3xl font-extrabold text-amber-400">${state.quiz.score} / ${quizData.length}</p>
          <p class="text-sm text-slate-300 max-w-md mx-auto">${cheer}</p>
          <button id="restartQuizBtn" class="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition">
            🔄 Retake Quiz
          </button>
        </div>
      `;
      quizResultBox.classList.remove("hidden");

      const restartBtn = document.getElementById("restartQuizBtn");
      if (restartBtn) restartBtn.addEventListener("click", initQuiz);
    }
  }

  // Bookmark Toggle
  function toggleBookmark(sportId) {
    if (state.bookmarks.includes(sportId)) {
      state.bookmarks = state.bookmarks.filter(id => id !== sportId);
    } else {
      state.bookmarks.push(sportId);
    }
    localStorage.setItem("khelbharat_bookmarks", JSON.stringify(state.bookmarks));
    updateBookmarksCount();
    renderSportsList();
  }

  function updateBookmarksCount() {
    if (bookmarksCountBadge) {
      bookmarksCountBadge.textContent = `${state.bookmarks.length}`;
    }
  }

  // Audio Speech Synthesis
  function speakSportSummary(sport) {
    if (!("speechSynthesis" in window)) {
      alert("Text-to-speech is not supported in your browser.");
      return;
    }

    if (state.isSpeaking) {
      window.speechSynthesis.cancel();
      state.isSpeaking = false;
      return;
    }

    const textToSpeak = `${sport.name}, in Hindi ${sport.hindiName}. Ranked number ${sport.rank} in India. ${sport.summary} Played with ${sport.teamSize.onField}. Iconic players include ${sport.famousPlayers.slice(0, 3).map(p => p.name).join(', ')}.`;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      state.isSpeaking = true;
    };

    utterance.onend = () => {
      state.isSpeaking = false;
    };

    utterance.onerror = () => {
      state.isSpeaking = false;
    };

    window.speechSynthesis.speak(utterance);
  }

  // Copy Sport Summary to Clipboard
  function copySportSummary(sport) {
    const summaryText = `
🏆 ${sport.name} (${sport.hindiName}) - Rank #${sport.rank} in India
Tagline: ${sport.tagline}
Team: ${sport.teamSize.onField}
Ground: ${sport.groundSpecs.title} (${sport.groundSpecs.surface})
Rules: ${sport.rules.objective}
Legends: ${sport.famousPlayers.map(p => p.name + " (" + p.stats + ")").join("\n - ")}
Governing Body: ${sport.governingBody.name}
    `.trim();

    navigator.clipboard.writeText(summaryText).then(() => {
      alert(`Summary of ${sport.name} copied to clipboard!`);
    }).catch(() => {
      alert("Copied!");
    });
  }

  // Category Pills Update UI
  function updateCategoryPills() {
    if (!categoryFilters) return;
    categoryFilters.querySelectorAll("button").forEach(btn => {
      const cat = btn.getAttribute("data-category");
      if (cat === state.currentCategory) {
        btn.classList.add("bg-blue-600", "text-white", "border-blue-500");
        btn.classList.remove("bg-slate-800", "text-slate-300", "border-slate-700");
      } else {
        btn.classList.remove("bg-blue-600", "text-white", "border-blue-500");
        btn.classList.add("bg-slate-800", "text-slate-300", "border-slate-700");
      }
    });
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Search input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        if (clearSearchBtn) {
          clearSearchBtn.classList.toggle("hidden", state.searchQuery === "");
        }
        renderSportsList();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", () => {
        state.searchQuery = "";
        searchInput.value = "";
        clearSearchBtn.classList.add("hidden");
        renderSportsList();
      });
    }

    // Category pills click
    if (categoryFilters) {
      categoryFilters.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
          state.currentCategory = btn.getAttribute("data-category");
          updateCategoryPills();
          renderSportsList();
        });
      });
    }

    // Modal background click to close
    if (sportModal) {
      sportModal.addEventListener("click", (e) => {
        if (e.target === sportModal) {
          closeSportModal();
        }
      });
    }

    // Escape key to close modal
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !sportModal.classList.contains("hidden")) {
        closeSportModal();
      }
    });

    // Quiz next button
    if (nextQuizBtn) {
      nextQuizBtn.addEventListener("click", () => {
        state.quiz.currentQuestion++;
        showQuizQuestion();
      });
    }

    // Quiz reset button
    if (resetQuizBtn) {
      resetQuizBtn.addEventListener("click", initQuiz);
    }
  }
});
