const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
  'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80',
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80',
  'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80',
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
  'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&q=80',
  'https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80',
  'https://images.unsplash.com/photo-1558244661-91481c20895a?w=1600&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80',
  'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=600&q=80',
  'https://images.unsplash.com/photo-1563240619-44ce02d5a236?w=600&q=80',
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80',
  'https://images.unsplash.com/photo-1620052581615-562a01490209?w=600&q=80'
];

urls.forEach(url => {
  https.get(url, (res) => {
    if (res.statusCode !== 200 && res.statusCode !== 302) {
      console.log(`Failed: ${url} (Status: ${res.statusCode})`);
    } else {
        console.log(`OK: ${url} (Status: ${res.statusCode})`);
    }
  }).on('error', (e) => {
    console.error(`Error: ${url} - ${e.message}`);
  });
});
