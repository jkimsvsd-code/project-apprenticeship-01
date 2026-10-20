import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdir, mkdtemp, writeFile, unlink, access, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8');

test('모든 내부 링크는 실제 대상 ID를 가진다', () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
  for (const [, href] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(href), href);
});
test('문서 제목은 하나이며 제목 단계가 건너뛰지 않는다', () => {
  const levels = [...html.matchAll(/<h([1-6])\b/g)].map(m => Number(m[1]));
  assert.equal(levels.filter(n => n === 1).length, 1);
  for (let i = 1; i < levels.length; i++) assert.ok(levels[i] <= levels[i-1] + 1);
});
test('경험 상세는 스크립트 없이 동작하고 식별 가능한 이름을 가진다', () => {
  const names = [...html.matchAll(/<summary aria-label="([^"]+)"/g)].map(m => m[1]);
  assert.equal(names.length, 3);
  assert.equal(new Set(names).size, 3);
  assert.equal([...html.matchAll(/<details>/g)].length, 3);
});
test('실제 화면 색 조합이 일반 텍스트 대비 4.5:1 이상이다', () => {
  const vars = Object.fromEntries([...css.matchAll(/--([\w-]+):\s*(#[\da-f]{6})/gi)].map(m=>[m[1],m[2]]));
  const lum = hex => hex.match(/[\da-f]{2}/gi).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
  for(const [a,b] of [['ink','paper'],['muted','paper'],['accent','paper'],['ink','panel'],['muted','panel']]){
    const x=lum(vars[a]),y=lum(vars[b]); const ratio=(Math.max(x,y)+.05)/(Math.min(x,y)+.05);
    assert.ok(ratio>=4.5, `${a}/${b}: ${ratio}`);
    console.log(`${a}/${b}: ${ratio.toFixed(2)}:1`);
  }
});
test('연락처 링크와 외부 전송 폼을 만들지 않는다', () => {
  assert.doesNotMatch(html, /(?:mailto:|tel:|<form\b)/i);
});
test('재빌드 시 삭제된 공개 자료가 배포 결과에 남지 않는다', async () => {
  const root=await mkdtemp(path.join(tmpdir(),'j-portfolio-build-'));
  try {
    await mkdir(path.join(root,'src')); await mkdir(path.join(root,'public'));
    await writeFile(path.join(root,'index.html'),'fixture');
    await writeFile(path.join(root,'src/main.js'),''); await writeFile(path.join(root,'src/styles.css'),'');
    const asset=path.join(root,'public/withdrawn.txt'); await writeFile(asset,'test-only');
    const script=new URL('../scripts/build.mjs',import.meta.url);
    const run=()=>execFileSync(process.execPath,[fileURLToPath(script)],{cwd:root});
    run(); await access(path.join(root,'dist/withdrawn.txt'));
    await unlink(asset); run();
    await assert.rejects(access(path.join(root,'dist/withdrawn.txt')));
  } finally { await rm(root,{recursive:true,force:true}); }
});

