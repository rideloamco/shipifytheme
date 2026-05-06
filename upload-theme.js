const fs = require('fs');
const path = require('path');

const STORE = 'loam-co-2.myshopify.com';
const TOKEN = process.env.SHOPIFY_TOKEN;
const THEME_DIR = path.join(__dirname, 'theme');
const API_VERSION = '2024-10';

const BASE_URL = `https://${STORE}/admin/api/${API_VERSION}`;
const HEADERS = {
  'X-Shopify-Access-Token': TOKEN,
  'Content-Type': 'application/json',
};

function getAllFiles(dir, base = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap(e => {
    const full = path.join(dir, e.name);
    return e.isDirectory() ? getAllFiles(full, base) : [full];
  });
}

async function createTheme() {
  const res = await fetch(`${BASE_URL}/themes.json`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ theme: { name: 'Loam Co.', role: 'unpublished' } }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(data));
  return data.theme.id;
}

async function uploadAsset(themeId, key, content) {
  const body = { asset: { key, value: content } };
  const res = await fetch(`${BASE_URL}/themes/${themeId}/assets.json`, {
    method: 'PUT',
    headers: HEADERS,
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`${key}: ${JSON.stringify(data)}`);
  return data;
}

async function main() {
  console.log('Creating theme...');
  const themeId = await createTheme();
  console.log(`Theme created: ID ${themeId}`);

  const files = getAllFiles(THEME_DIR);
  console.log(`Uploading ${files.length} files...`);

  for (const file of files) {
    const key = path.relative(THEME_DIR, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');
    try {
      await uploadAsset(themeId, key, content);
      console.log(`  ✓ ${key}`);
    } catch (err) {
      console.error(`  ✗ ${key}: ${err.message}`);
    }
    // Respect Shopify rate limit (2 req/s)
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\nDone! Theme ID: ${themeId}`);
  console.log(`Preview: https://${STORE}/?preview_theme_id=${themeId}`);
  console.log(`Admin:   https://admin.shopify.com/store/loam-co-2/themes/${themeId}`);
}

main().catch(err => { console.error('Fatal:', err.message); process.exit(1); });
