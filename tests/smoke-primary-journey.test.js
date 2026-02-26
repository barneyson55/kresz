const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

function loadQuestionTemplates() {
  const questionsPath = path.join(__dirname, '..', 'renderer', 'questions.js');
  const source = fs.readFileSync(questionsPath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: 'renderer/questions.js' });

  const templates = sandbox.window.KRESZ_QUESTION_TEMPLATES;
  assert.ok(Array.isArray(templates), 'KRESZ_QUESTION_TEMPLATES must be an array');
  return templates;
}

function run() {
  const templates = loadQuestionTemplates();

  assert.ok(templates.length >= 10, 'Smoke: at least 10 templates are required for a full session');

  const onewayCount = templates.filter((q) => q.category === 'oneway').length;
  const timedCount = templates.filter((q) => q.category === 'timed').length;

  assert.ok(onewayCount >= 7, 'Smoke: at least 7 oneway questions are required');
  assert.ok(timedCount >= 3, 'Smoke: at least 3 timed questions are required');

  for (const question of templates) {
    assert.ok(question.id, 'Smoke: every question must have an id');
    assert.ok(typeof question.sceneId === 'string' && question.sceneId.length > 0, `Smoke: ${question.id} must have sceneId`);
    assert.ok(Array.isArray(question.options) && question.options.length >= 2, `Smoke: ${question.id} must have options`);

    const correctCount = question.options.filter((option) => option.correct === true).length;
    assert.equal(correctCount, 1, `Smoke: ${question.id} must have exactly one correct answer`);
  }

  console.log('Smoke OK: primary quiz journey data is internally consistent.');
}

run();
