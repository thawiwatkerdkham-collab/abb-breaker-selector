const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const MIME = {
  '.html':'text/html; charset=utf-8', '.json':'application/json; charset=utf-8',
  '.pdf':'application/pdf', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8',
  '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml'
};

function send(res, status, body, type='text/plain; charset=utf-8') {
  res.writeHead(status, {'Content-Type': type, 'Cache-Control':'no-cache'});
  res.end(body);
}
function safePath(urlPath) {
  let p = decodeURIComponent(urlPath.split('?')[0]);
  if (p === '/') p = '/public/index.html';
  else if (p === '/data/breakers.json') p = '/data/breakers.json';
  else p = '/public' + p;
  const full = path.normalize(path.join(ROOT, p));
  if (!full.startsWith(ROOT)) return null;
  return full;
}

const server = http.createServer((req,res)=>{
  if (req.url === '/health') return send(res,200,'ok');
  const file = safePath(req.url);
  if (!file) return send(res,403,'Forbidden');
  fs.stat(file,(err,st)=>{
    if (err || !st.isFile()) return send(res,404,'Not found');
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, {'Content-Type':MIME[ext] || 'application/octet-stream', 'Cache-Control':'no-cache'});
    fs.createReadStream(file).pipe(res);
  });
});
server.listen(PORT, '0.0.0.0', ()=> console.log(`ABB Breaker Price Finder running on port ${PORT}`));
