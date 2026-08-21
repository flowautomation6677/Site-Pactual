const fs = require('fs'); 
const path = require('path'); 
const walk = dir => { 
  let results = []; 
  const list = fs.readdirSync(dir); 
  list.forEach(file => { 
    file = path.resolve(dir, file); 
    const stat = fs.statSync(file); 
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file)); 
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) { 
      results.push(file); 
    } 
  }); 
  return results; 
}; 
const files = [...walk('components'), ...walk('app')]; 
let changed = 0; 
files.forEach(file => { 
  let content = fs.readFileSync(file, 'utf8'); 
  let newContent = content.replace(/src=\"\/(?!teste\/)/g, 'src="/teste/');
  newContent = newContent.replace(/poster=\"\/(?!teste\/)/g, 'poster="/teste/');
  newContent = newContent.replace(/url\(['"]?\/(?!teste\/)/g, "url('/teste/");
  if (content !== newContent) { 
    fs.writeFileSync(file, newContent); 
    changed++; 
    console.log('Updated', file); 
  } 
}); 
console.log('Total changed:', changed);
