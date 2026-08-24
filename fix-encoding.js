const fs = require('fs');
const path = require('path');

const replacements = {
  'Ã§': 'ç',
  'Ã£': 'ã',
  'Ã¡': 'á',
  'Ã©': 'é',
  'Ã\xAD': 'í',
  'Ã³': 'ó',
  'Ãº': 'ú',
  'Ã¢': 'â',
  'Ãª': 'ê',
  'Ã®': 'î',
  'Ã´': 'ô',
  'Ã»': 'û',
  'Ãµ': 'õ',
  'Ã€': 'À',
  'Ã\x81': 'Á',
  'Ã\x89': 'É',
  'Ã\x8D': 'Í',
  'Ã\x93': 'Ó',
  'Ã\x9A': 'Ú',
  'Ã\x87': 'Ç',
  'Ã\x83': 'Ã',
  'Ã\x95': 'Õ',
  'Ã\x82': 'Â',
  'Ã\x8A': 'Ê',
  'Ã\x94': 'Ô',
  'Ã\x80': 'À',
  'Ã\x88': 'È',
  'Ã\x8B': 'Ë',
  'Ã\x8F': 'Ï',
  'Ã\x9C': 'Ü',
  'Ã\x91': 'Ñ',
  'Ã±': 'ñ',
  'â€¢': '•',
  'â€œ': '“',
  'â€\x9D': '”',
  'â€˜': '‘',
  'â€™': '’',
  'â€“': '–',
  'â€”': '—',
  'Âº': 'º',
  'Âª': 'ª',
  'Â®': '®',
  'Â©': '©',
  'Â°': '°',
  'Â´': '´',
  'Â¨': '¨'
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.next') && !filePath.includes('.git')) {
        results = results.concat(walk(filePath));
      }
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.md')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const files = walk('.');

let changedFiles = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  for (const [bad, good] of Object.entries(replacements)) {
    newContent = newContent.split(bad).join(good);
  }
  
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Fixed encoding in ${file}`);
    changedFiles++;
  }
});

console.log(`Fixed encoding in ${changedFiles} files.`);
