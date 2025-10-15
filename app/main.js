(() => {
  const TOTAL_NUMBERS = 75;

  const DEFAULT_QUESTION = "Quel est le chef-lieu du département ?";
  const REVEAL_DELAY_MS = 10_000;

  // Base quiz data pour chaque département métropolitain.
  const baseStories = new Map([
    [1, { title: "🐓 Ain", question: DEFAULT_QUESTION, answer: "Bourg-en-Bresse" }],
    [2, { title: "🏺 Aisne", question: DEFAULT_QUESTION, answer: "Laon" }],
    [3, { title: "🛁 Allier", question: DEFAULT_QUESTION, answer: "Moulins" }],
    [4, { title: "🗻 Alpes-de-Haute-Provence", question: DEFAULT_QUESTION, answer: "Digne-les-Bains" }],
    [5, { title: "🗻 Hautes-Alpes", question: DEFAULT_QUESTION, answer: "Gap" }],
    [6, { title: "⛵️ Alpes-Maritimes", question: DEFAULT_QUESTION, answer: "Nice" }],
    [7, { title: "🌰 Ardèche", question: DEFAULT_QUESTION, answer: "Privas" }],
    [8, { title: "🌳 Ardennes", question: DEFAULT_QUESTION, answer: "Charleville-Mézières" }],
    [9, { title: "🗻 Ariège", question: DEFAULT_QUESTION, answer: "Foix" }],
    [10, { title: "👔 Aube", question: DEFAULT_QUESTION, answer: "Troyes" }],
    [11, { title: "🌞 Aude", question: DEFAULT_QUESTION, answer: "Carcassonne" }],
    [12, { title: "🧀 Aveyron", question: DEFAULT_QUESTION, answer: "Rodez" }],
    [13, { title: "⚽️ Bouches-du-Rhône", question: DEFAULT_QUESTION, answer: "Marseille" }],
    [14, { title: "🍏 Calvados", question: DEFAULT_QUESTION, answer: "Caen" }],
    [15, { title: "🐄 Cantal", question: DEFAULT_QUESTION, answer: "Aurillac" }],
    [16, { title: "🍇 Charente", question: DEFAULT_QUESTION, answer: "Angoulême" }],
    [17, { title: "⚓️ Charente-Maritime", question: DEFAULT_QUESTION, answer: "La Rochelle" }],
    [18, { title: "🌾 Cher", question: DEFAULT_QUESTION, answer: "Bourges" }],
    [19, { title: "🌲 Corrèze", question: DEFAULT_QUESTION, answer: "Tulle" }],
    [20, { title: "🏝️ Corse", question: DEFAULT_QUESTION, answer: "Ajaccio" }],
    [21, { title: "🍇 Côte-d'Or", question: DEFAULT_QUESTION, answer: "Dijon" }],
    [22, { title: "⚓️ Côtes-d'Armor", question: DEFAULT_QUESTION, answer: "Saint-Brieuc" }],
    [23, { title: "🐑 Creuse", question: DEFAULT_QUESTION, answer: "Guéret" }],
    [24, { title: "🍄 Dordogne", question: DEFAULT_QUESTION, answer: "Périgueux" }],
    [25, { title: "🧀 Doubs", question: DEFAULT_QUESTION, answer: "Besançon" }],
    [26, { title: "🌬️ Drôme", question: DEFAULT_QUESTION, answer: "Valence" }],
    [27, { title: "🌿 Eure", question: DEFAULT_QUESTION, answer: "Évreux" }],
    [28, { title: "⛪️ Eure-et-Loir", question: DEFAULT_QUESTION, answer: "Chartres" }],
    [29, { title: "🌊 Finistère", question: DEFAULT_QUESTION, answer: "Quimper" }],
    [30, { title: "🏛️ Gard", question: DEFAULT_QUESTION, answer: "Nîmes" }],
    [31, { title: "✈️ Haute-Garonne", question: DEFAULT_QUESTION, answer: "Toulouse" }],
    [32, { title: "🦆 Gers", question: DEFAULT_QUESTION, answer: "Auch" }],
    [33, { title: "🍷 Gironde", question: DEFAULT_QUESTION, answer: "Bordeaux" }],
    [34, { title: "🏖️ Hérault", question: DEFAULT_QUESTION, answer: "Montpellier" }],
    [35, { title: "🏰 Ille-et-Vilaine", question: DEFAULT_QUESTION, answer: "Rennes" }],
    [36, { title: "📚 Indre", question: DEFAULT_QUESTION, answer: "Châteauroux" }],
    [37, { title: "🏞️ Indre-et-Loire", question: DEFAULT_QUESTION, answer: "Tours" }],
    [38, { title: "⛰️ Isère", question: DEFAULT_QUESTION, answer: "Grenoble" }],
    [39, { title: "🌲 Jura", question: DEFAULT_QUESTION, answer: "Lons-le-Saunier" }],
    [40, { title: "🌾 Landes", question: DEFAULT_QUESTION, answer: "Mont-de-Marsan" }],
    [41, { title: "🦁 Loir-et-Cher", question: DEFAULT_QUESTION, answer: "Blois" }],
    [42, { title: "⚙️ Loire", question: DEFAULT_QUESTION, answer: "Saint-Étienne" }],
    [43, { title: "🌄 Haute-Loire", question: DEFAULT_QUESTION, answer: "Le Puy-en-Velay" }],
    [44, { title: "🌊 Loire-Atlantique", question: DEFAULT_QUESTION, answer: "Nantes" }],
    [45, { title: "🌾 Loiret", question: DEFAULT_QUESTION, answer: "Orléans" }],
    [46, { title: "🪨 Lot", question: DEFAULT_QUESTION, answer: "Cahors" }],
    [47, { title: "🍑 Lot-et-Garonne", question: DEFAULT_QUESTION, answer: "Agen" }],
    [48, { title: "🦌 Lozère", question: DEFAULT_QUESTION, answer: "Mende" }],
    [49, { title: "🌼 Maine-et-Loire", question: DEFAULT_QUESTION, answer: "Angers" }],
    [50, { title: "🌊 Manche", question: DEFAULT_QUESTION, answer: "Saint-Lô" }],
    [51, { title: "🍾 Marne", question: DEFAULT_QUESTION, answer: "Châlons-en-Champagne" }],
    [52, { title: "🏰 Haute-Marne", question: DEFAULT_QUESTION, answer: "Chaumont" }],
    [53, { title: "🐄 Mayenne", question: DEFAULT_QUESTION, answer: "Laval" }],
    [54, { title: "🏛️ Meurthe-et-Moselle", question: DEFAULT_QUESTION, answer: "Nancy" }],
    [55, { title: "🌳 Meuse", question: DEFAULT_QUESTION, answer: "Bar-le-Duc" }],
    [56, { title: "⛵️ Morbihan", question: DEFAULT_QUESTION, answer: "Vannes" }],
    [57, { title: "⛏️ Moselle", question: DEFAULT_QUESTION, answer: "Metz" }],
    [58, { title: "🌾 Nièvre", question: DEFAULT_QUESTION, answer: "Nevers" }],
    [59, { title: "🏙️ Nord", question: DEFAULT_QUESTION, answer: "Lille" }],
    [60, { title: "🌿 Oise", question: DEFAULT_QUESTION, answer: "Beauvais" }],
    [61, { title: "🐎 Orne", question: DEFAULT_QUESTION, answer: "Alençon" }],
    [62, { title: "⚓️ Pas-de-Calais", question: DEFAULT_QUESTION, answer: "Arras" }],
    [63, { title: "🌋 Puy-de-Dôme", question: DEFAULT_QUESTION, answer: "Clermont-Ferrand" }],
    [64, { title: "🏔️ Pyrénées-Atlantiques", question: DEFAULT_QUESTION, answer: "Pau" }],
    [65, { title: "⛰️ Hautes-Pyrénées", question: DEFAULT_QUESTION, answer: "Tarbes" }],
    [66, { title: "☀️ Pyrénées-Orientales", question: DEFAULT_QUESTION, answer: "Perpignan" }],
    [67, { title: "🏰 Bas-Rhin", question: DEFAULT_QUESTION, answer: "Strasbourg" }],
    [68, { title: "🍇 Haut-Rhin", question: DEFAULT_QUESTION, answer: "Colmar" }],
    [69, { title: "🌉 Rhône", question: DEFAULT_QUESTION, answer: "Lyon" }],
    [70, { title: "🌳 Haute-Saône", question: DEFAULT_QUESTION, answer: "Vesoul" }],
    [71, { title: "🍷 Saône-et-Loire", question: DEFAULT_QUESTION, answer: "Mâcon" }],
    [72, { title: "🏎️ Sarthe", question: DEFAULT_QUESTION, answer: "Le Mans" }],
    [73, { title: "⛷️ Savoie", question: DEFAULT_QUESTION, answer: "Chambéry" }],
    [74, { title: "🏞️ Haute-Savoie", question: DEFAULT_QUESTION, answer: "Annecy" }],
    [75, { title: "🌆 Paris", question: DEFAULT_QUESTION, answer: "Paris" }],
  ]);

  const storyRecords = new Map();
  baseStories.forEach((stories, number) => {
    storyRecords.set(number, Array.isArray(stories) ? stories : [stories]);
  });

  const selectedStoryIndices = new Map();

  // Fill in placeholder stories for any numbers not explicitly listed above.
  for (let number = 1; number <= TOTAL_NUMBERS; number += 1) {
    if (!storyRecords.has(number)) {
      storyRecords.set(number, [
        {
          title: `Numéro ${number}`,
          question: DEFAULT_QUESTION,
          answer: "Ajoutez un chef-lieu pour ce numéro dans app/main.js.",
        },
      ]);
    }
  }

  const numberGrid = document.getElementById("numberGrid");
  const calloutNumber = document.getElementById("calloutNumber");
  const calloutHeader = document.getElementById("calloutHeader");
  const calloutCard = document.getElementById("calloutCard");
  const calloutTitle = document.getElementById("calloutTitle");
  const calloutQuestion = document.getElementById("calloutQuestion");
  const calloutAnswer = document.getElementById("calloutAnswer");
  const calloutProgress = document.getElementById("calloutProgress");
  const calledNumbersList = document.getElementById("calledNumbers");

  const buttonsByNumber = new Map();
  const calledNumbers = new Set();
  const callSequence = [];
  let activeNumber = null;
  let revealTimeoutId = null;
  let progressAnimationFrameId = null;
  let progressStartTime = 0;
  let isAnswerRevealed = false;

  function renderGrid() {
    for (let number = 1; number <= TOTAL_NUMBERS; number += 1) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "number-button";
      button.textContent = number.toString();
      button.dataset.number = number.toString();
      button.addEventListener("click", () => selectNumber(number));
      buttonsByNumber.set(number, button);
      numberGrid.appendChild(button);
    }
  }

  function selectNumber(number) {
    const isNewCall = !calledNumbers.has(number);
    calledNumbers.add(number);

    if (isNewCall) {
      callSequence.push(number);
    } else {
      // Move existing entry to the end to reflect most recent call.
      const index = callSequence.indexOf(number);
      if (index !== -1) {
        callSequence.splice(index, 1);
        callSequence.push(number);
      }
    }

    chooseStoryIndex(number);
    activeNumber = number;
    updateGridClasses();
    updateCallout();
    updateCalledNumbersList();
  }

  function updateGridClasses() {
    buttonsByNumber.forEach((button, number) => {
      const isCalled = calledNumbers.has(number);
      button.classList.toggle("called", isCalled);
      button.classList.toggle("active", number === activeNumber);
    });
  }

  function chooseStoryIndex(number) {
    const stories = storyRecords.get(number) ?? [];
    if (stories.length === 0) {
      selectedStoryIndices.delete(number);
      return null;
    }

    const previous = selectedStoryIndices.get(number);
    if (stories.length === 1) {
      selectedStoryIndices.set(number, 0);
      return 0;
    }

    let nextIndex = previous ?? Math.floor(Math.random() * stories.length);
    let attempts = 0;
    while (nextIndex === previous && attempts < 5) {
      nextIndex = Math.floor(Math.random() * stories.length);
      attempts += 1;
    }
    if (nextIndex === previous) {
      nextIndex = (previous + 1) % stories.length;
    }
    selectedStoryIndices.set(number, nextIndex);
    return nextIndex;
  }

  function resetRevealState() {
    if (revealTimeoutId !== null) {
      window.clearTimeout(revealTimeoutId);
      revealTimeoutId = null;
    }
    if (progressAnimationFrameId !== null) {
      window.cancelAnimationFrame(progressAnimationFrameId);
      progressAnimationFrameId = null;
    }
    isAnswerRevealed = false;
    calloutCard.classList.remove("answer-revealed");
    calloutProgress.style.width = "0%";
    calloutAnswer.setAttribute("aria-hidden", "true");
  }

  function startRevealCountdown() {
    calloutProgress.style.width = "0%";
    progressStartTime = performance.now();

    const step = (timestamp) => {
      if (isAnswerRevealed) {
        return;
      }
      const elapsed = timestamp - progressStartTime;
      const ratio = Math.min(elapsed / REVEAL_DELAY_MS, 1);
      calloutProgress.style.width = `${ratio * 100}%`;
      if (ratio < 1) {
        progressAnimationFrameId = window.requestAnimationFrame(step);
      } else {
        progressAnimationFrameId = null;
      }
    };

    progressAnimationFrameId = window.requestAnimationFrame(step);
    revealTimeoutId = window.setTimeout(() => {
      revealAnswer();
    }, REVEAL_DELAY_MS);
  }

  function revealAnswer() {
    if (isAnswerRevealed) {
      return;
    }
    isAnswerRevealed = true;
    if (revealTimeoutId !== null) {
      window.clearTimeout(revealTimeoutId);
      revealTimeoutId = null;
    }
    if (progressAnimationFrameId !== null) {
      window.cancelAnimationFrame(progressAnimationFrameId);
      progressAnimationFrameId = null;
    }
    calloutProgress.style.width = "100%";
    calloutCard.classList.add("answer-revealed");
    calloutAnswer.setAttribute("aria-hidden", "false");
  }

  function revealAnswerNow() {
    if (calloutCard.classList.contains("is-placeholder")) {
      return;
    }
    revealAnswer();
  }

  function updateCallout() {
    resetRevealState();

    if (activeNumber === null) {
      calloutNumber.textContent = "—";
      calloutHeader.textContent = "Aucun numéro appelé";
      calloutCard.classList.add("is-placeholder");
      calloutTitle.textContent = "";
      calloutQuestion.textContent = "";
      calloutAnswer.textContent = "Cliquez sur un numéro pour lancer une question de département.";
      calloutAnswer.setAttribute("aria-hidden", "false");
      calloutProgress.style.width = "0%";
      return;
    }

    const stories = storyRecords.get(activeNumber) ?? [];
    const selectedIndex = selectedStoryIndices.get(activeNumber);
    calloutNumber.textContent = activeNumber.toString();

    if (stories.length === 0 || selectedIndex === undefined) {
      calloutHeader.textContent = `Numéro ${activeNumber}`;
      calloutCard.classList.add("is-placeholder");
      calloutTitle.textContent = "";
      calloutQuestion.textContent = "";
      calloutAnswer.textContent = "Ajoutez un département pour ce numéro dans app/main.js.";
      calloutAnswer.setAttribute("aria-hidden", "false");
      calloutProgress.style.width = "0%";
      return;
    }

    const story = stories[selectedIndex];
    calloutHeader.textContent = story?.title ?? `Numéro ${activeNumber}`;
    calloutCard.classList.remove("is-placeholder");
    calloutTitle.textContent = "Question";
    calloutQuestion.textContent = story?.question ?? DEFAULT_QUESTION;
    const answerText = story?.answer ?? "Réponse à compléter.";
    calloutAnswer.textContent = `Réponse : ${answerText}`;
    calloutAnswer.setAttribute("aria-hidden", "true");
    startRevealCountdown();
  }

  function updateCalledNumbersList() {
    calledNumbersList.innerHTML = "";

    if (callSequence.length === 0) {
      const placeholder = document.createElement("li");
      placeholder.textContent = "Aucun tirage pour le moment.";
      placeholder.style.opacity = "0.6";
      calledNumbersList.appendChild(placeholder);
      return;
    }

    callSequence.forEach((number) => {
      const item = document.createElement("li");
      item.textContent = number.toString();
      calledNumbersList.appendChild(item);
    });
  }

  function setupKeyboardSupport() {
    // Space relance le dernier numéro, Échap révèle immédiatement la réponse.
    window.addEventListener("keydown", (event) => {
      if (event.code === "Space" && activeNumber !== null) {
        event.preventDefault();
        selectNumber(activeNumber);
        return;
      }
      if (event.code === "Escape") {
        event.preventDefault();
        revealAnswerNow();
      }
    });
  }

  renderGrid();
  updateCallout();
  updateCalledNumbersList();
  setupKeyboardSupport();

  // Expose a tiny API for future enhancements or debugging in the console.
  window.bingotify = {
    getStories(number) {
      return storyRecords.get(number) ?? [];
    },
    setStories(number, stories) {
      const normalized = Array.isArray(stories) ? stories : [stories];
      storyRecords.set(number, normalized);
      selectedStoryIndices.delete(number);
      if (number === activeNumber) {
        chooseStoryIndex(number);
        updateCallout();
      }
    },
    addStory(number, story) {
      const normalized = Array.isArray(story) ? story : [story];
      const current = storyRecords.get(number) ?? [];
      storyRecords.set(number, [...current, ...normalized]);
      if (number === activeNumber) {
        if (!selectedStoryIndices.has(number)) {
          chooseStoryIndex(number);
        }
        updateCallout();
      }
    },
    removeStories(number) {
      storyRecords.set(number, []);
      selectedStoryIndices.delete(number);
      if (number === activeNumber) {
        updateCallout();
      }
    },
    reset() {
      calledNumbers.clear();
      callSequence.splice(0, callSequence.length);
      activeNumber = null;
      selectedStoryIndices.clear();
      updateGridClasses();
      updateCallout();
      updateCalledNumbersList();
    },
    getSelectedStory(number) {
      const stories = storyRecords.get(number) ?? [];
      const index = selectedStoryIndices.get(number);
      return typeof index === "number" ? stories[index] ?? null : null;
    },
    revealNow() {
      revealAnswerNow();
    },
    // Legacy helpers
    getStory(number) {
      return this.getStories(number)[0] ?? null;
    },
    setStory(number, story) {
      this.setStories(number, story);
    },
  };
})();
