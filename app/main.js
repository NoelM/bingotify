(() => {
  const TOTAL_NUMBERS = 75;

  // Bingo nickname references and short anecdotes.
  const baseStories = new Map([
    [1, { title: "🐓 Ain", text: "Connu pour ses étangs, son poulet de Bresse, mais aussi terre natale de Thomas G." }],
    [2, { title: "🏺 Aisne", text: "Connue pour Soissons et son vase, un département Picard qui abrite aussi la cité de la Francophonie." }],
    [3, { title: "🛁 Allier", text: "Le département le plus plat d'Auvergne qui abrite les thermes de Vichy, et le centre de la Gendarmerie Nationale à Montluçon." }],
    [4, { title: "🗻 Alpes-de-Hautes-Provence", text: "Châpeautée par Digne-les-Bains, ses habitants sont nommés les Bas-Alpins et Bas-Alpines." }],
    [5, { title: "🗻 Hautes-Alpes", text: "En pleine montagne, il abrite la plus haute commune de France, la bien nommée Saint-Véran à 2042 mètres !" }],
    [6, { title: "⛵️ Alpes-Maritimes", text: "Entre mer et montagne, elle offre des décors de rêves à Antibes ou Nice." }],
    [7, { title: "🌰 Ardèche", text: "Trésor de la ruralité, elle est connue pour sa crème de marrons et ses villages perchés." }],
    [8, { title: "🌳 Ardennes", text: "Une terre riche d'histoire, frontalière de la Belgique, il se cache la Meuse entre ses forêts." }],
    [9, { title: "🗻 Ariège", text: "Frontalier de l'Espagne, l'Ariège est le coeur des Pyrénées où l'on peut y voir des ours." }],
    [10, { title: "👔 Aube", text: "Chapeautée par la ville de Troyes, il est traversé par la Seine, et est connu pour ses ateliers textiles." }],
    [11, { title: "🌞 Aude", text: "The two ones resemble a pair of legs, so the hall erupts with whistles and cheers." }],
    [12, { title: "🧀 Aveyron", text: "Vous reprendrez un peu d'aligot, n'est-ce pas ?" }],
    [13, { title: "Unlucky for Some", text: "Thirteen’s superstition lives on, making the call a dramatic moment every round." }],
    [14, { title: "Valentine's Day", text: "February 14 brings hearts and flowers, so callers send a little love with this number." }],
    [15, { title: "Young and Keen", text: "At fifteen you’re full of energy, so the call celebrates youthful enthusiasm." }],
    [16, { title: "Sweet Sixteen", text: "Inspired by debutante balls and milestone birthdays that mark the move toward adulthood." }],
    [17, { title: "Dancing Queen", text: "A playful ABBA reference that always keeps the bingo floor lively." }],
    [18, { title: "Coming of Age", text: "Eighteen signals adulthood in many countries, so it’s a milestone on your card." }],
    [19, { title: "Goodbye Teens", text: "Nineteen is the last teenage year, waving farewell to youthful shenanigans." }],
    [20, { title: "One Score", text: "A score equals twenty, a term preserved in old counting systems and bingo banter." }],
    [21, { title: "Key of the Door", text: "Turning twenty-one traditionally meant receiving a key to the house and newfound freedom." }],
    [22, { title: "Two Little Ducks", text: "Both digits look like ducks gliding along; regulars may even quack back at the caller." }],
    [23, { title: "Thee and Me", text: "A friendly Yorkshire-inflected rhyme reminding you that bingo is best with company." }],
    [24, { title: "Two Dozen", text: "Another tidy arithmetic fact—two neat sets of twelve." }],
    [25, { title: "Duck and Dive", text: "Borrowed from boxing lingo, encouraging nimbleness as the game heats up." }],
    [26, { title: "Pick and Mix", text: "A sweet-shop reference inviting you to imagine bags of candy in every color." }],
    [27, { title: "Gateway to Heaven", text: "A playful rhyme that keeps the optimism high as the numbers climb." }],
    [28, { title: "In a State", text: "Rhyming slang from the halls—players shout it with mock indignation." }],
    [29, { title: "Rise and Shine", text: "A wake-up call in case your dabber is slowing down." }],
    [30, { title: "Dirty Gertie", text: "Rumored to reference a World War II song about a mysterious girl from Bizerte." }],
    [31, { title: "Get Up and Run", text: "A reminder to stay quick because bingo waits for no one." }],
    [32, { title: "Buckle My Shoe", text: "Straight from the nursery rhyme that taught so many of us to count." }],
    [33, { title: "Dirty Knee", text: "Another rhyme, conjuring kids scuffing their knees while playing outside." }],
    [34, { title: "Ask for More", text: "Callers egg on the audience to shout back, keeping energy high." }],
    [35, { title: "Jump and Jive", text: "A swing-era dance cue calling for a little groove between numbers." }],
    [36, { title: "Three Dozen", text: "If you needed twelve muffins for each row, 36 would stock the whole tray." }],
    [37, { title: "More than Eleven", text: "A cheeky rhyme designed purely to keep the beat going." }],
    [38, { title: "Christmas Cake", text: "Seasonal cheer for every December lover in the hall." }],
    [39, { title: "Steps", text: "Up the stairs you go—thirty-nine steps recall the classic Hitchcock thriller." }],
    [40, { title: "Naughty Forty", text: "A silly rhyme that lets the caller tap into a mischievous tone." }],
    [41, { title: "Time for Fun", text: "Forty-one rhymes with fun, so lean into the optimism." }],
    [42, { title: "Winnie the Pooh", text: "Because forty-two rhymes with Pooh, and everyone loves a honey jar." }],
    [43, { title: "Down on Your Knees", text: "A dramatic call, often answered with a playful groan from the crowd." }],
    [44, { title: "Droopy Drawers", text: "Callers love any rhyme that raises a giggle, and this one always does." }],
    [45, { title: "Halfway There", text: "At forty-five you’re exactly midway through a 90-ball card—a good omen here too." }],
    [46, { title: "Up to Tricks", text: "A nod to the number six hidden inside forty-six, keeping mischief in mind." }],
    [47, { title: "Four and Seven", text: "Sometimes the caller just states the digits with a musical lilt." }],
    [48, { title: "Four Dozen", text: "Mathematically neat and satisfying—four tidy sets of twelve." }],
    [49, { title: "PC", text: "“PC 49” recalls an old British radio series about an intrepid police constable." }],
    [50, { title: "Half a Century", text: "Fifty marks a true milestone in cricket, bingo, and birthdays alike." }],
    [51, { title: "Tweak of the Thumb", text: "Callers mimic the action, wiggling their thumb to rally the room." }],
    [52, { title: "Danny La Rue", text: "A tribute to the famous Irish entertainer known for glitz and glamour." }],
    [53, { title: "Here Comes Herbie", text: "Named after Herbie the VW Beetle from the classic Disney films." }],
    [54, { title: "Clean the Floor", text: "The rhyme keeps cards tidy and dabbers ready." }],
    [55, { title: "Snakes Alive", text: "Double fives look like slithering snakes, so expect a hiss from the audience." }],
    [56, { title: "Was She Worth It?", text: "A cheeky nod to the old £5–6 marriage license fee—callers await a resounding “Yes!”" }],
    [57, { title: "Heinz Varieties", text: "The famous condiment company once boasted 57 product varieties, forever immortalized here." }],
    [58, { title: "Make Them Wait", text: "A dramatic pause lets anticipation build for the next number." }],
    [59, { title: "Brighton Line", text: "A reference to the 1950s telephone code for Brighton: “Brighton 59.”" }],
    [60, { title: "Five Dozen", text: "Sixty equals five sets of twelve—mathematics never sleeps in bingo." }],
    [61, { title: "Baker's Bun", text: "A tasty breadcrumb trail leading you straight to victory." }],
    [62, { title: "Turn the Screw", text: "Callers twist an imaginary screwdriver to keep everyone engaged." }],
    [63, { title: "Tickle Me 63", text: "Expect chuckles as players mime giving their neighbor a friendly tickle." }],
    [64, { title: "Red Raw", text: "A rhyme that owes its longevity to an easy chant and lively callers." }],
    [65, { title: "Old Age Pension", text: "Historically, 65 marked retirement age in the UK, so the nickname stuck." }],
    [66, { title: "Clickety Click", text: "The staccato rhythm of 66 on the mic sounds like a pair of clicking heels." }],
    [67, { title: "Made in Heaven", text: "A hopeful rhyme hinting that your jackpot might be destiny." }],
    [68, { title: "Pick a Mate", text: "Callers sometimes invite players to link arms with their lucky partner." }],
    [69, { title: "Either Way Up", text: "Flip it and it still reads 69, so the call celebrates its symmetry." }],
    [70, { title: "Three Score and Ten", text: "An old biblical measure of lifespan, marking seventy as a full life." }],
    [71, { title: "Bang on the Drum", text: "Some callers drum on the desk to emphasize the steady march toward victory." }],
    [72, { title: "Six Dozen", text: "Another neat multiple of twelve—organizing bingo one dozen at a time." }],
    [73, { title: "Queen Bee", text: "A regal rhyme that adds a sense of grandeur to the late-game numbers." }],
    [74, { title: "Candy Store", text: "Picture jars of sweets lined up in abundance, a sugary lucky charm." }],
    [75, { title: "Strive and Strive", text: "When seventy-five lands, you’re striving for that last square on your card." }],
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
          title: `Number ${number}`,
          text: "Add your own anecdote by editing the storyRecords map in app/main.js.",
        },
      ]);
    }
  }

  const numberGrid = document.getElementById("numberGrid");
  const calloutNumber = document.getElementById("calloutNumber");
  const calloutHeader = document.getElementById("calloutHeader");
  const calloutCard = document.getElementById("calloutCard");
  const calloutTitle = document.getElementById("calloutTitle");
  const calloutText = document.getElementById("calloutText");
  const calledNumbersList = document.getElementById("calledNumbers");

  const buttonsByNumber = new Map();
  const calledNumbers = new Set();
  const callSequence = [];
  let activeNumber = null;

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

  function updateCallout() {
    if (activeNumber === null) {
      calloutNumber.textContent = "—";
      calloutHeader.textContent = "No numbers called yet";
      calloutCard.classList.add("is-placeholder");
      calloutTitle.textContent = "";
      calloutText.textContent = "Click a number on the board to see its anecdotes.";
      return;
    }

    const stories = storyRecords.get(activeNumber) ?? [];
    const selectedIndex = selectedStoryIndices.get(activeNumber);
    calloutNumber.textContent = activeNumber.toString();

    if (stories.length === 0 || selectedIndex === undefined) {
      calloutHeader.textContent = `No anecdote yet for ${activeNumber}`;
      calloutCard.classList.add("is-placeholder");
      calloutTitle.textContent = "";
      calloutText.textContent = "Add an anecdote for this number in app/main.js.";
      return;
    }

    //calloutHeader.textContent = `Anecdote for ${activeNumber}`;
    calloutCard.classList.remove("is-placeholder");
    const story = stories[selectedIndex];
    calloutTitle.textContent = story?.title ?? `Story ${selectedIndex + 1}`;
    calloutText.textContent =
      story?.text ?? "Add more detail to this anecdote in app/main.js.";
  }

  function updateCalledNumbersList() {
    calledNumbersList.innerHTML = "";

    if (callSequence.length === 0) {
      const placeholder = document.createElement("li");
      placeholder.textContent = "No calls yet.";
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
    // Allow quick re-selection of the last number using the spacebar.
    window.addEventListener("keydown", (event) => {
      if (event.code === "Space" && activeNumber !== null) {
        event.preventDefault();
        selectNumber(activeNumber);
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
    // Legacy helpers
    getStory(number) {
      return this.getStories(number)[0] ?? null;
    },
    setStory(number, story) {
      this.setStories(number, story);
    },
  };
})();
