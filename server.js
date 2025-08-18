// server.js (only the root handler changed)
import http from "http";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  // Tell the browser this is UTF-8 text
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello CI/CD 👋\nThis is a test \n");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening at http://0.0.0.0:${PORT}`);
});
