(() => {
  const templates = window.KRESZ_QUESTION_TEMPLATES || window.KRESZ_QUESTIONS || [];
  const scenes = window.KRESZ_SCENES || {};

  const SESSION_LENGTH = 10;
  const CATEGORY_TARGETS = [
    { category: 'oneway', count: 7 },
    { category: 'timed', count: 3 }
  ];

  const appEl = document.getElementById('app');
  const questionEl = document.getElementById('question');
  const progressEl = document.getElementById('progress');
  const typeEl = document.getElementById('type');
  const difficultyEl = document.getElementById('difficulty');
  const paceEl = document.getElementById('pace');
  const timerEl = document.getElementById('timer');
  const retryBtn = document.getElementById('retry');
  const sceneEl = document.getElementById('scene');
  const legendEl = document.getElementById('legend');
  const optionsEl = document.getElementById('options');
  const feedbackEl = document.getElementById('feedback');
  const descriptionEl = document.getElementById('description');
  const definitionsEl = document.getElementById('definitions');
  const sceneCard = document.getElementById('scene-card');
  const optionsCard = document.getElementById('options-card');
  const detailsCard = document.getElementById('details-card');
  const summaryCard = document.getElementById('summary-card');
  const summaryCorrectEl = document.getElementById('summary-correct');
  const summaryFirstEl = document.getElementById('summary-first');
  const summaryWrongEl = document.getElementById('summary-wrong');
  const summaryTimeoutEl = document.getElementById('summary-timeouts');
  const summaryListEl = document.getElementById('summary-list');
  const restartBtn = document.getElementById('restart');

  const state = {
    index: 0,
    locked: false,
    timerInterval: null,
    advanceTimeout: null,
    timeLeftMs: 0,
    questionStartMs: 0,
    sessionQuestions: [],
    results: []
  };

  const shuffle = (items) => {
    const array = [...items];
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const spreadByKey = (items, key) => {
    const pool = [...items];
    const result = [];

    while (pool.length) {
      const lastValue = result.length ? result[result.length - 1][key] : null;
      const index = pool.findIndex((item) => item[key] !== lastValue);
      const pickIndex = index >= 0 ? index : 0;
      result.push(pool.splice(pickIndex, 1)[0]);
    }

    return result;
  };

  const pickOne = (items) => items[Math.floor(Math.random() * items.length)];

  const formatTime = (ms) => {
    const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
    const seconds = totalSeconds % 60;
    return `00:${seconds.toString().padStart(2, '0')}`;
  };

  const setFeedback = (message, tone) => {
    feedbackEl.textContent = message;
    feedbackEl.classList.remove('good', 'bad');
    if (tone) {
      feedbackEl.classList.add(tone);
    }
  };

  const animateCards = () => {
    [sceneCard, optionsCard, detailsCard].forEach((card) => {
      card.classList.remove('animate');
      void card.offsetWidth;
      card.classList.add('animate');
    });
  };

  const clearTimers = () => {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    if (state.advanceTimeout) {
      clearTimeout(state.advanceTimeout);
      state.advanceTimeout = null;
    }
  };

  const disableOptions = () => {
    optionsEl.querySelectorAll('button.option').forEach((button) => {
      button.disabled = true;
    });
  };

  const resetOptionStyles = () => {
    optionsEl.querySelectorAll('button.option').forEach((button) => {
      button.classList.remove('wrong', 'correct');
    });
  };

  const setSummaryMode = (enabled) => {
    appEl.classList.toggle('is-summary', enabled);
    summaryCard.classList.toggle('is-hidden', !enabled);
    retryBtn.classList.toggle('is-hidden', enabled);
    if (enabled) {
      timerEl.classList.add('is-hidden');
    }
  };

  const startTimer = (limitMs) => {
    if (!limitMs) {
      timerEl.classList.add('is-hidden');
      return;
    }

    timerEl.classList.remove('is-hidden');
    state.timeLeftMs = limitMs;
    timerEl.textContent = formatTime(state.timeLeftMs);

    state.timerInterval = setInterval(() => {
      state.timeLeftMs -= 1000;
      timerEl.textContent = formatTime(state.timeLeftMs);

      if (state.timeLeftMs <= 0) {
        clearTimers();
        state.locked = true;
        disableOptions();
        const result = state.results[state.index];
        if (result && !result.timedOut) {
          result.timedOut = true;
        }
        setFeedback('Lejart az ido. Kattints az Ujraprobara es probald ujra!', 'bad');
      }
    }, 1000);
  };

  const renderLegend = (legendItems) => {
    legendEl.innerHTML = '';
    legendItems.forEach((item) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'legend-item';

      const dot = document.createElement('span');
      dot.className = 'legend-dot';

      const label = document.createElement('span');
      label.textContent = item;

      wrapper.appendChild(dot);
      wrapper.appendChild(label);
      legendEl.appendChild(wrapper);
    });
  };

  const renderDefinitions = (definitions) => {
    definitionsEl.innerHTML = '';
    definitions.forEach((definition) => {
      const item = document.createElement('div');
      item.className = 'definition';

      const term = document.createElement('strong');
      term.textContent = definition.term;

      const text = document.createElement('span');
      text.textContent = definition.text;

      item.appendChild(term);
      item.appendChild(text);
      definitionsEl.appendChild(item);
    });
  };

  const renderOptions = (question) => {
    optionsEl.innerHTML = '';
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option';
      button.dataset.index = index.toString();
      button.innerHTML = `<span class="option-index">${index + 1}</span><span>${option.text}</span>`;
      optionsEl.appendChild(button);
    });
  };

  const renderScene = (sceneId) => {
    const svgMarkup = scenes[sceneId];
    sceneEl.innerHTML = svgMarkup || '<div class="scene-placeholder">Nincs illusztracio</div>';
  };

  const materializeQuestion = (template) => {
    const questionText = template.questionVariants
      ? pickOne(template.questionVariants)
      : template.question;
    const options = shuffle(template.options.map((option) => ({ ...option })));
    return {
      ...template,
      question: questionText,
      options
    };
  };

  const buildSessionQuestions = () => {
    const pool = templates.filter(Boolean);
    if (!pool.length) {
      return [];
    }

    const selected = [];
    const usedIds = new Set();

    CATEGORY_TARGETS.forEach(({ category, count }) => {
      const candidates = shuffle(pool.filter((item) => item.category === category && !usedIds.has(item.id)));
      candidates.slice(0, count).forEach((item) => {
        selected.push(item);
        usedIds.add(item.id);
      });
    });

    const remaining = shuffle(pool.filter((item) => !usedIds.has(item.id)));
    const needed = Math.max(0, SESSION_LENGTH - selected.length);
    selected.push(...remaining.slice(0, needed));

    while (selected.length < SESSION_LENGTH && pool.length) {
      selected.push(pool[Math.floor(Math.random() * pool.length)]);
    }

    const mixed = spreadByKey(shuffle(selected), 'category');

    return mixed.slice(0, SESSION_LENGTH).map(materializeQuestion);
  };

  const resetResults = (questions) => {
    state.results = questions.map((question) => ({
      id: question.id,
      typeLabel: question.typeLabel,
      question: question.question,
      wrongAttempts: 0,
      timedOut: false,
      correct: false,
      elapsedMs: 0
    }));
  };

  const renderQuestion = (index) => {
    const question = state.sessionQuestions[index];
    if (!question) {
      questionEl.textContent = 'Nincs elerheto feladat.';
      return;
    }

    clearTimers();
    state.locked = false;
    setFeedback('', '');
    resetOptionStyles();

    progressEl.textContent = `${index + 1}/${state.sessionQuestions.length}`;
    typeEl.textContent = question.typeLabel;
    difficultyEl.textContent = question.difficulty.toUpperCase();
    paceEl.textContent = question.pace.toUpperCase();
    questionEl.textContent = question.question;

    renderScene(question.sceneId);
    renderLegend(question.legend || []);
    renderOptions(question);
    descriptionEl.textContent = question.description;
    renderDefinitions(question.definitions || []);

    state.questionStartMs = Date.now();
    startTimer(question.timeLimitMs);
    animateCards();
  };

  const renderSummary = () => {
    const results = state.results;
    const total = results.length;
    const correctCount = results.filter((result) => result.correct).length;
    const firstTryCount = results.filter(
      (result) => result.correct && result.wrongAttempts === 0 && !result.timedOut
    ).length;
    const wrongAttempts = results.reduce((sum, result) => sum + result.wrongAttempts, 0);
    const timeoutCount = results.filter((result) => result.timedOut).length;

    summaryCorrectEl.textContent = `${correctCount}/${total}`;
    summaryFirstEl.textContent = `${firstTryCount}/${total}`;
    summaryWrongEl.textContent = `${wrongAttempts}`;
    summaryTimeoutEl.textContent = `${timeoutCount}`;

    summaryListEl.innerHTML = '';
    results.forEach((result, index) => {
      const item = document.createElement('div');
      item.className = 'summary-item';

      const title = document.createElement('span');
      title.className = 'summary-title';
      title.textContent = `${index + 1}. ${result.typeLabel}`;

      const status = document.createElement('span');
      status.className = 'summary-status';

      if (result.timedOut && result.correct) {
        status.textContent = 'Idotullepes utan helyes';
      } else if (result.timedOut) {
        status.textContent = 'Idotullepes';
      } else if (result.wrongAttempts > 0) {
        status.textContent = 'Helyes, de volt hibas probalkozas';
      } else {
        status.textContent = 'Helyes elsore';
      }

      item.appendChild(title);
      item.appendChild(status);
      summaryListEl.appendChild(item);
    });
  };

  const finishSession = () => {
    clearTimers();
    questionEl.textContent = 'Osszegzes';
    typeEl.textContent = 'Eredmeny';
    difficultyEl.textContent = '-';
    paceEl.textContent = '-';
    setSummaryMode(true);
    renderSummary();
  };

  const handleCorrect = (button) => {
    state.locked = true;
    button.classList.add('correct');
    setFeedback('Helyes valasz! Par masodperc mulva tovabblepunk.', 'good');
    disableOptions();
    clearTimers();

    const result = state.results[state.index];
    if (result && !result.correct) {
      result.correct = true;
      result.elapsedMs = Date.now() - state.questionStartMs;
    }

    state.advanceTimeout = setTimeout(() => {
      if (state.index >= state.sessionQuestions.length - 1) {
        finishSession();
      } else {
        state.index += 1;
        renderQuestion(state.index);
      }
    }, 2200);
  };

  const handleWrong = (button) => {
    button.classList.add('wrong');
    setFeedback('Nem helyes. Probald ujra!', 'bad');
  };

  const handleOptionClick = (index) => {
    if (state.locked) {
      return;
    }

    const question = state.sessionQuestions[state.index];
    const option = question.options[index];
    const button = optionsEl.querySelector(`button[data-index="${index}"]`);

    if (!option || !button) {
      return;
    }

    const result = state.results[state.index];
    if (result) {
      result.wrongAttempts += option.correct ? 0 : 1;
    }

    resetOptionStyles();

    if (option.correct) {
      handleCorrect(button);
    } else {
      handleWrong(button);
    }
  };

  const startNewSession = () => {
    state.sessionQuestions = buildSessionQuestions();
    state.index = 0;
    clearTimers();
    setSummaryMode(false);

    if (!state.sessionQuestions.length) {
      questionEl.textContent = 'Nincs betoltott feladat.';
      appEl.classList.add('is-empty');
      return;
    }

    appEl.classList.remove('is-empty');
    resetResults(state.sessionQuestions);
    renderQuestion(state.index);
  };

  optionsEl.addEventListener('click', (event) => {
    const target = event.target.closest('button.option');
    if (!target) {
      return;
    }
    const index = Number.parseInt(target.dataset.index, 10);
    handleOptionClick(index);
  });

  retryBtn.addEventListener('click', () => {
    renderQuestion(state.index);
  });

  restartBtn.addEventListener('click', () => {
    startNewSession();
  });

  document.addEventListener('keydown', (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
      return;
    }

    if (event.key >= '1' && event.key <= '4') {
      handleOptionClick(Number.parseInt(event.key, 10) - 1);
    }
  });

  startNewSession();
})();
