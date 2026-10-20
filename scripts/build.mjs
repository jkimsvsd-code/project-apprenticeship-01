import { mkdir, copyFile, cp, rm, lstat } from 'node:fs/promises';
import path from 'node:path';

// 이 작업 디렉터리 바로 아래의 생성물 dist만 정리합니다.
const root = path.resolve('.');
const output = path.resolve(root, 'dist');
if (path.dirname(output) !== root || path.basename(output) !== 'dist') throw new Error('Invalid build output');
const existing = await lstat(output).catch(error => { if (error.code === 'ENOENT') return null; throw error; });
if (existing?.isSymbolicLink()) throw new Error('Build output must not be a symbolic link');
await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, 'src'), { recursive: true });
await copyFile('index.html', path.join(output, 'index.html'));
await copyFile('src/main.js', path.join(output, 'src/main.js'));
await copyFile('src/styles.css', path.join(output, 'src/styles.css'));
await cp('public', output, { recursive: true, filter: source => !source.endsWith('.gitkeep') });
console.log('Built static site in dist/');
