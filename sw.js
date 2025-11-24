// Service Worker file: sw.js

// インストールイベント: Service Workerがインストールされたときに発生
self.addEventListener('install', (event) => {
  // すぐにアクティベート（有効化）するために待機をスキップ
  self.skipWaiting();
});

// アクティベートイベント: Service Workerが有効になったときに発生
self.addEventListener('activate', (event) => {
  // すべてのクライアント（開いているページ）を制御下に置く
  event.waitUntil(clients.claim());
});

// フェッチイベント: ネットワークリクエストが発生したときに発生
self.addEventListener('fetch', (event) => {
  // シンプルにリクエストを続行させます（キャッシュ機能は省略）
  // これにより、PWAとして登録・インストールが可能になります。
});