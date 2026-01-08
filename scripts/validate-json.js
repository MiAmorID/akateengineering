const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'i18n', 'en.json');
try {
  const s = fs.readFileSync(file, 'utf8');
  console.log('file length', s.length);
  JSON.parse(s);
  console.log('EN.JSON parsed OK');
} catch (e) {
  console.error('ERROR:', e.message);
  // Print a context window around the error offset if available
  if (e.message && e.message.match(/at position (\d+)/)) {
    const pos = parseInt(e.message.match(/at position (\d+)/)[1], 10);
    const s = fs.readFileSync(file, 'utf8');
    const start = Math.max(0, pos - 40);
    const end = Math.min(s.length, pos + 40);
    console.log('context:', s.slice(start, end));
  }
  process.exit(1);
}
