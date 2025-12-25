(() => {
  const questions = window.KRESZ_QUESTIONS || [];
  const scenes = window.KRESZ_SCENES || {};

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

  const state = {
    index: 0,
    locked: false,
    timerInterval: null,
    advanceTimeout: null,
    timeLeftMs: 0
  };

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
        setFeedback('Lejárt az idő. Kattints az Újrapróbára és próbáld újra!', 'bad');
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
    sceneEl.innerHTML = svgMarkup || '<div class="scene-placeholder">Nincs illusztráció</div>';
  };

  const renderQuestion = (index) => {
    const question = questions[index];
    if (!question) {
      questionEl.textContent = 'Nincs elérhető feladat.';
      return;
    }

    clearTimers();
    state.locked = false;
    setFeedback('', '');

    progressEl.textContent = `${index + 1}/${questions.length}`;
    typeEl.textContent = question.typeLabel;
    difficultyEl.textContent = question.difficulty.toUpperCase();
    paceEl.textContent = question.pace.toUpperCase();
    questionEl.textContent = question.question;

    renderScene(question.sceneId);
    renderLegend(question.legend || []);
    renderOptions(question);
    descriptionEl.textContent = question.description;
    renderDefinitions(question.definitions || []);

    startTimer(question.timeLimitMs);
    animateCards();
  };

  const handleCorrect = (button) => {
    state.locked = true;
    button.classList.add('correct');
    setFeedback('Helyes válasz! Pár másodperc múlva továbblépünk.', 'good');
    disableOptions();
    clearTimers();

    state.advanceTimeout = setTimeout(() => {
      if (state.index >= questions.length - 1) {
        state.index = 0;
      } else {
        state.index += 1;
      }
      renderQuestion(state.index);
    }, 2200);
  };

  const handleWrong = (button) => {
    button.classList.add('wrong');
    setFeedback('Nem helyes. Próbáld újra!', 'bad');
  };

  const handleOptionClick = (index) => {
    if (state.locked) {
      return;
    }

    const question = questions[state.index];
    const option = question.options[index];
    const button = optionsEl.querySelector(`button[data-index="${index}"]`);

    if (!option || !button) {
      return;
    }

    resetOptionStyles();

    if (option.correct) {
      handleCorrect(button);
    } else {
      handleWrong(button);
    }
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

  document.addEventListener('keydown', (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
      return;
    }

    if (event.key >= '1' && event.key <= '4') {
      handleOptionClick(Number.parseInt(event.key, 10) - 1);
    }
  });

  if (!questions.length) {
    questionEl.textContent = 'Nincs betöltött feladat.';
    appEl.classList.add('is-empty');
    return;
  }

  renderQuestion(state.index);
})();
