import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function addJsExtension(dir) {
  readdirSync(dir).forEach(file => {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      addJsExtension(fullPath);
    } else if (extname(file) === '.js') {
      let content = readFileSync(fullPath, 'utf-8');
      content = content.replace(/(from\s+['"])(\.\/.*?)(['"])/g, '$1$2.js$3');
      writeFileSync(fullPath, content, 'utf-8');
    }
  });
}

addJsExtension(join(__dirname, '../dist'));
