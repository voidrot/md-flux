import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apisIndex = path.resolve(__dirname, '../src/confluence/apis/index.ts');

if (fs.existsSync(apisIndex)) {
    let content = fs.readFileSync(apisIndex, 'utf8');
    const target = "export * from './EAPApi';";
    const replacement = "export * as EAP from './EAPApi';";

    if (content.includes(target)) {
        content = content.replace(target, replacement);
        fs.writeFileSync(apisIndex, content);
        console.log('Fixed EAPApi export in src/confluence/apis/index.ts');
    } else if (content.includes(replacement)) {
        console.log('EAPApi export already fixed.');
    } else {
        console.warn('Could not find EAPApi export to fix in src/confluence/apis/index.ts');
    }
} else {
    console.error('src/confluence/apis/index.ts not found');
    process.exit(1);
}
