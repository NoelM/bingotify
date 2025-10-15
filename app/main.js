(() => {
  const TOTAL_NUMBERS = 75;

  const CHEFLIEU_QUESTION = "Quel est le chef-lieu du département ?";
  const DEPARTEMENT_QUESTION = "À quel département correspond ce numéro ?"
  const REVEAL_DELAY_MS = 10_000;

  // Base quiz data pour chaque département métropolitain.
  const baseStories = new Map([
    [1, [
      { title: "🐓 Ain", question: CHEFLIEU_QUESTION, answer: "Bourg-en-Bresse" },
      { question: DEPARTEMENT_QUESTION, answer: "🐓 Ain" },
    ]],
    [2, [
      { title: "🏺 Aisne", question: CHEFLIEU_QUESTION, answer: "Laon" },
      { question: DEPARTEMENT_QUESTION, answer: "🏺 Aisne" },
    ]],
    [3, [
      { title: "🛁 Allier", question: CHEFLIEU_QUESTION, answer: "Moulins" },
      { question: DEPARTEMENT_QUESTION, answer: "🛁 Allier" },
    ]],
    [4, [
      { title: "🗻 Alpes-de-Haute-Provence", question: CHEFLIEU_QUESTION, answer: "Digne-les-Bains" },
      { question: DEPARTEMENT_QUESTION, answer: "🗻 Alpes-de-Haute-Provence" },
    ]],
    [5, [
      { title: "🗻 Hautes-Alpes", question: CHEFLIEU_QUESTION, answer: "Gap" },
      { question: DEPARTEMENT_QUESTION, answer: "🗻 Hautes-Alpes" },
    ]],
    [6, [
      { title: "⛵️ Alpes-Maritimes", question: CHEFLIEU_QUESTION, answer: "Nice" },
      { question: DEPARTEMENT_QUESTION, answer: "⛵️ Alpes-Maritimes" },
    ]],
    [7, [
      { title: "🌰 Ardèche", question: CHEFLIEU_QUESTION, answer: "Privas" },
      { question: DEPARTEMENT_QUESTION, answer: "🌰 Ardèche" },
    ]],
    [8, [
      { title: "🌳 Ardennes", question: CHEFLIEU_QUESTION, answer: "Charleville-Mézières" },
      { question: DEPARTEMENT_QUESTION, answer: "🌳 Ardennes" },
    ]],
    [9, [
      { title: "🗻 Ariège", question: CHEFLIEU_QUESTION, answer: "Foix" },
      { question: DEPARTEMENT_QUESTION, answer: "🗻 Ariège" },
    ]],
    [10, [
      { title: "👔 Aube", question: CHEFLIEU_QUESTION, answer: "Troyes" },
      { question: DEPARTEMENT_QUESTION, answer: "👔 Aube" },
    ]],
    [11, [
      { title: "🌞 Aude", question: CHEFLIEU_QUESTION, answer: "Carcassonne" },
      { question: DEPARTEMENT_QUESTION, answer: "🌞 Aude" },
    ]],
    [12, [
      { title: "🧀 Aveyron", question: CHEFLIEU_QUESTION, answer: "Rodez" },
      { question: DEPARTEMENT_QUESTION, answer: "🧀 Aveyron" },
    ]],
    [13, [
      { title: "⚽️ Bouches-du-Rhône", question: CHEFLIEU_QUESTION, answer: "Marseille" },
      { question: DEPARTEMENT_QUESTION, answer: "⚽️ Bouches-du-Rhône" },
    ]],
    [14, [
      { title: "🍏 Calvados", question: CHEFLIEU_QUESTION, answer: "Caen" },
      { question: DEPARTEMENT_QUESTION, answer: "🍏 Calvados" },
    ]],
    [15, [
      { title: "🐄 Cantal", question: CHEFLIEU_QUESTION, answer: "Aurillac" },
      { question: DEPARTEMENT_QUESTION, answer: "🐄 Cantal" },
    ]],
    [16, [
      { title: "🍇 Charente", question: CHEFLIEU_QUESTION, answer: "Angoulême" },
      { question: DEPARTEMENT_QUESTION, answer: "🍇 Charente" },
    ]],
    [17, [
      { title: "⚓️ Charente-Maritime", question: CHEFLIEU_QUESTION, answer: "La Rochelle" },
      { question: DEPARTEMENT_QUESTION, answer: "⚓️ Charente-Maritime" },
    ]],
    [18, [
      { title: "🌾 Cher", question: CHEFLIEU_QUESTION, answer: "Bourges" },
      { question: DEPARTEMENT_QUESTION, answer: "🌾 Cher" },
    ]],
    [19, [
      { title: "🌲 Corrèze", question: CHEFLIEU_QUESTION, answer: "Tulle" },
      { question: DEPARTEMENT_QUESTION, answer: "🌲 Corrèze" },
    ]],
    [20, [
      { title: "🏝️ Corse", question: CHEFLIEU_QUESTION, answer: "Ajaccio" },
      { question: DEPARTEMENT_QUESTION, answer: "🏝️ Corse" },
    ]],
    [21, [
      { title: "🍇 Côte-d'Or", question: CHEFLIEU_QUESTION, answer: "Dijon" },
      { question: DEPARTEMENT_QUESTION, answer: "🍇 Côte-d'Or" },
    ]],
    [22, [
      { title: "⚓️ Côtes-d'Armor", question: CHEFLIEU_QUESTION, answer: "Saint-Brieuc" },
      { question: DEPARTEMENT_QUESTION, answer: "⚓️ Côtes-d'Armor" },
    ]],
    [23, [
      { title: "🐑 Creuse", question: CHEFLIEU_QUESTION, answer: "Guéret" },
      { question: DEPARTEMENT_QUESTION, answer: "🐑 Creuse" },
    ]],
    [24, [
      { title: "🍄 Dordogne", question: CHEFLIEU_QUESTION, answer: "Périgueux" },
      { question: DEPARTEMENT_QUESTION, answer: "🍄 Dordogne" },
    ]],
    [25, [
      { title: "🧀 Doubs", question: CHEFLIEU_QUESTION, answer: "Besançon" },
      { question: DEPARTEMENT_QUESTION, answer: "🧀 Doubs" },
    ]],
    [26, [
      { title: "🌬️ Drôme", question: CHEFLIEU_QUESTION, answer: "Valence" },
      { question: DEPARTEMENT_QUESTION, answer: "🌬️ Drôme" },
    ]],
    [27, [
      { title: "🌿 Eure", question: CHEFLIEU_QUESTION, answer: "Évreux" },
      { question: DEPARTEMENT_QUESTION, answer: "🌿 Eure" },
    ]],
    [28, [
      { title: "⛪️ Eure-et-Loir", question: CHEFLIEU_QUESTION, answer: "Chartres" },
      { question: DEPARTEMENT_QUESTION, answer: "⛪️ Eure-et-Loir" },
    ]],
    [29, [
      { title: "🌊 Finistère", question: CHEFLIEU_QUESTION, answer: "Quimper" },
      { question: DEPARTEMENT_QUESTION, answer: "🌊 Finistère" },
    ]],
    [30, [
      { title: "🏛️ Gard", question: CHEFLIEU_QUESTION, answer: "Nîmes" },
      { question: DEPARTEMENT_QUESTION, answer: "🏛️ Gard" },
    ]],
    [31, [
      { title: "✈️ Haute-Garonne", question: CHEFLIEU_QUESTION, answer: "Toulouse" },
      { question: DEPARTEMENT_QUESTION, answer: "✈️ Haute-Garonne" },
    ]],
    [32, [
      { title: "🦆 Gers", question: CHEFLIEU_QUESTION, answer: "Auch" },
      { question: DEPARTEMENT_QUESTION, answer: "🦆 Gers" },
    ]],
    [33, [
      { title: "🍷 Gironde", question: CHEFLIEU_QUESTION, answer: "Bordeaux" },
      { question: DEPARTEMENT_QUESTION, answer: "🍷 Gironde" },
    ]],
    [34, [
      { title: "🏖️ Hérault", question: CHEFLIEU_QUESTION, answer: "Montpellier" },
      { question: DEPARTEMENT_QUESTION, answer: "🏖️ Hérault" },
    ]],
    [35, [
      { title: "🏰 Ille-et-Vilaine", question: CHEFLIEU_QUESTION, answer: "Rennes" },
      { question: DEPARTEMENT_QUESTION, answer: "🏰 Ille-et-Vilaine" },
    ]],
    [36, [
      { title: "📚 Indre", question: CHEFLIEU_QUESTION, answer: "Châteauroux" },
      { question: DEPARTEMENT_QUESTION, answer: "📚 Indre" },
    ]],
    [37, [
      { title: "🏞️ Indre-et-Loire", question: CHEFLIEU_QUESTION, answer: "Tours" },
      { question: DEPARTEMENT_QUESTION, answer: "🏞️ Indre-et-Loire" },
    ]],
    [38, [
      { title: "⛰️ Isère", question: CHEFLIEU_QUESTION, answer: "Grenoble" },
      { question: DEPARTEMENT_QUESTION, answer: "⛰️ Isère" },
    ]],
    [39, [
      { title: "🌲 Jura", question: CHEFLIEU_QUESTION, answer: "Lons-le-Saunier" },
      { question: DEPARTEMENT_QUESTION, answer: "🌲 Jura" },
    ]],
    [40, [
      { title: "🌾 Landes", question: CHEFLIEU_QUESTION, answer: "Mont-de-Marsan" },
      { question: DEPARTEMENT_QUESTION, answer: "🌾 Landes" },
    ]],
    [41, [
      { title: "🦁 Loir-et-Cher", question: CHEFLIEU_QUESTION, answer: "Blois" },
      { question: DEPARTEMENT_QUESTION, answer: "🦁 Loir-et-Cher" },
    ]],
    [42, [
      { title: "⚙️ Loire", question: CHEFLIEU_QUESTION, answer: "Saint-Étienne" },
      { question: DEPARTEMENT_QUESTION, answer: "⚙️ Loire" },
    ]],
    [43, [
      { title: "🌄 Haute-Loire", question: CHEFLIEU_QUESTION, answer: "Le Puy-en-Velay" },
      { question: DEPARTEMENT_QUESTION, answer: "🌄 Haute-Loire" },
    ]],
    [44, [
      { title: "🌊 Loire-Atlantique", question: CHEFLIEU_QUESTION, answer: "Nantes" },
      { question: DEPARTEMENT_QUESTION, answer: "🌊 Loire-Atlantique" },
    ]],
    [45, [
      { title: "🌾 Loiret", question: CHEFLIEU_QUESTION, answer: "Orléans" },
      { question: DEPARTEMENT_QUESTION, answer: "🌾 Loiret" },
    ]],
    [46, [
      { title: "🪨 Lot", question: CHEFLIEU_QUESTION, answer: "Cahors" },
      { question: DEPARTEMENT_QUESTION, answer: "🪨 Lot" },
    ]],
    [47, [
      { title: "🍑 Lot-et-Garonne", question: CHEFLIEU_QUESTION, answer: "Agen" },
      { question: DEPARTEMENT_QUESTION, answer: "🍑 Lot-et-Garonne" },
    ]],
    [48, [
      { title: "🦌 Lozère", question: CHEFLIEU_QUESTION, answer: "Mende" },
      { question: DEPARTEMENT_QUESTION, answer: "🦌 Lozère" },
    ]],
    [49, [
      { title: "🌼 Maine-et-Loire", question: CHEFLIEU_QUESTION, answer: "Angers" },
      { question: DEPARTEMENT_QUESTION, answer: "🌼 Maine-et-Loire" },
    ]],
    [50, [
      { title: "🌊 Manche", question: CHEFLIEU_QUESTION, answer: "Saint-Lô" },
      { question: DEPARTEMENT_QUESTION, answer: "🌊 Manche" },
    ]],
    [51, [
      { title: "🍾 Marne", question: CHEFLIEU_QUESTION, answer: "Châlons-en-Champagne" },
      { question: DEPARTEMENT_QUESTION, answer: "🍾 Marne" },
    ]],
    [52, [
      { title: "🏰 Haute-Marne", question: CHEFLIEU_QUESTION, answer: "Chaumont" },
      { question: DEPARTEMENT_QUESTION, answer: "🏰 Haute-Marne" },
    ]],
    [53, [
      { title: "🐄 Mayenne", question: CHEFLIEU_QUESTION, answer: "Laval" },
      { question: DEPARTEMENT_QUESTION, answer: "🐄 Mayenne" },
    ]],
    [54, [
      { title: "🏛️ Meurthe-et-Moselle", question: CHEFLIEU_QUESTION, answer: "Nancy" },
      { question: DEPARTEMENT_QUESTION, answer: "🏛️ Meurthe-et-Moselle" },
    ]],
    [55, [
      { title: "🌳 Meuse", question: CHEFLIEU_QUESTION, answer: "Bar-le-Duc" },
      { question: DEPARTEMENT_QUESTION, answer: "🌳 Meuse" },
    ]],
    [56, [
      { title: "⛵️ Morbihan", question: CHEFLIEU_QUESTION, answer: "Vannes" },
      { question: DEPARTEMENT_QUESTION, answer: "⛵️ Morbihan" },
    ]],
    [57, [
      { title: "⛏️ Moselle", question: CHEFLIEU_QUESTION, answer: "Metz" },
      { question: DEPARTEMENT_QUESTION, answer: "⛏️ Moselle" },
    ]],
    [58, [
      { title: "🌾 Nièvre", question: CHEFLIEU_QUESTION, answer: "Nevers" },
      { question: DEPARTEMENT_QUESTION, answer: "🌾 Nièvre" },
    ]],
    [59, [
      { title: "🏙️ Nord", question: CHEFLIEU_QUESTION, answer: "Lille" },
      { question: DEPARTEMENT_QUESTION, answer: "🏙️ Nord" },
    ]],
    [60, [
      { title: "🌿 Oise", question: CHEFLIEU_QUESTION, answer: "Beauvais" },
      { question: DEPARTEMENT_QUESTION, answer: "🌿 Oise" },
    ]],
    [61, [
      { title: "🐎 Orne", question: CHEFLIEU_QUESTION, answer: "Alençon" },
      { question: DEPARTEMENT_QUESTION, answer: "🐎 Orne" },
    ]],
    [62, [
      { title: "⚓️ Pas-de-Calais", question: CHEFLIEU_QUESTION, answer: "Arras" },
      { question: DEPARTEMENT_QUESTION, answer: "⚓️ Pas-de-Calais" },
    ]],
    [63, [
      { title: "🌋 Puy-de-Dôme", question: CHEFLIEU_QUESTION, answer: "Clermont-Ferrand" },
      { question: DEPARTEMENT_QUESTION, answer: "🌋 Puy-de-Dôme" },
    ]],
    [64, [
      { title: "🏔️ Pyrénées-Atlantiques", question: CHEFLIEU_QUESTION, answer: "Pau" },
      { question: DEPARTEMENT_QUESTION, answer: "🏔️ Pyrénées-Atlantiques" },
    ]],
    [65, [
      { title: "⛰️ Hautes-Pyrénées", question: CHEFLIEU_QUESTION, answer: "Tarbes" },
      { question: DEPARTEMENT_QUESTION, answer: "⛰️ Hautes-Pyrénées" },
    ]],
    [66, [
      { title: "☀️ Pyrénées-Orientales", question: CHEFLIEU_QUESTION, answer: "Perpignan" },
      { question: DEPARTEMENT_QUESTION, answer: "☀️ Pyrénées-Orientales" },
    ]],
    [67, [
      { title: "🏰 Bas-Rhin", question: CHEFLIEU_QUESTION, answer: "Strasbourg" },
      { question: DEPARTEMENT_QUESTION, answer: "🏰 Bas-Rhin" },
    ]],
    [68, [
      { title: "🍇 Haut-Rhin", question: CHEFLIEU_QUESTION, answer: "Colmar" },
      { question: DEPARTEMENT_QUESTION, answer: "🍇 Haut-Rhin" },
    ]],
    [69, [
      { title: "🌉 Rhône", question: CHEFLIEU_QUESTION, answer: "Lyon" },
      { question: DEPARTEMENT_QUESTION, answer: "🌉 Rhône" },
    ]],
    [70, [
      { title: "🌳 Haute-Saône", question: CHEFLIEU_QUESTION, answer: "Vesoul" },
      { question: DEPARTEMENT_QUESTION, answer: "🌳 Haute-Saône" },
    ]],
    [71, [
      { title: "🍷 Saône-et-Loire", question: CHEFLIEU_QUESTION, answer: "Mâcon" },
      { question: DEPARTEMENT_QUESTION, answer: "🍷 Saône-et-Loire" },
    ]],
    [72, [
      { title: "🏎️ Sarthe", question: CHEFLIEU_QUESTION, answer: "Le Mans" },
      { question: DEPARTEMENT_QUESTION, answer: "🏎️ Sarthe" },
    ]],
    [73, [
      { title: "⛷️ Savoie", question: CHEFLIEU_QUESTION, answer: "Chambéry" },
      { question: DEPARTEMENT_QUESTION, answer: "⛷️ Savoie" },
    ]],
    [74, [
      { title: "🏞️ Haute-Savoie", question: CHEFLIEU_QUESTION, answer: "Annecy" },
      { question: DEPARTEMENT_QUESTION, answer: "🏞️ Haute-Savoie" },
    ]],
    [75, [
      { title: "🌆 Paris", question: CHEFLIEU_QUESTION, answer: "Paris" },
      { question: DEPARTEMENT_QUESTION, answer: "🌆 Paris" },
    ]],
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
          question: CHEFLIEU_QUESTION,
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
    calloutQuestion.textContent = story?.question ?? CHEFLIEU_QUESTION;
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
