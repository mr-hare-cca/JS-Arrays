// add javascript here
function runJS() {
  // --- read color and validate (no prompt/alert) ---
  const colorInput = document.getElementById('color');
  const feedback = document.getElementById('feedback');
  const list = document.getElementById('actionList');
  const avgOut = document.getElementById('average');
  const evensOut = document.getElementById('evenCount');

  // clear outputs each run
  feedback.textContent = '';
  list.innerHTML = '';
  avgOut.textContent = '';
  evensOut.textContent = '';

  const rawColor = (colorInput.value || '').trim().toLowerCase();
  const valid = ['red', 'yellow', 'green'];
  if (!valid.includes(rawColor)) {
    feedback.textContent = 'Invalid color. Please enter red, yellow, or green.';
    return;
  }

  // --- map color to action and print it 5 times in the DOM ---
  let action = 'Go';
  if (rawColor === 'red') action = 'Stop';
  else if (rawColor === 'yellow') action = 'Slow';

  for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.textContent = action;
    list.appendChild(li);
  }

  // --- collect 5 numbers from inputs into an array ---
  const ids = ['n1', 'n2', 'n3', 'n4', 'n5'];
  const nums = ids.map(id => Number(document.getElementById(id).value));

  // Handle NaN gracefully by treating empty as 0 (you can adjust if you prefer strict)
  const clean = nums.map(n => (Number.isFinite(n) ? n : 0));

  // --- compute average and even count ---
  const sum = clean.reduce((a, b) => a + b, 0);
  const avg = sum / clean.length;
  const evens = clean.filter(n => Number.isFinite(n) && Math.floor(n) === n && n % 2 === 0).length;

  // --- write results via textContent ---
  avgOut.textContent = `Average: ${avg}`;
  evensOut.textContent = `Evens: ${evens}`;
}
