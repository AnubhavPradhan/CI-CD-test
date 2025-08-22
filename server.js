// server.js (only the root handler changed)
import http from "http";
// import "dotenv/config";

const PORT = process.env.PORT || 3000;
// APP_SECRET
const APP_SECRET = process.env.APP_SECRET || null;
if (!APP_SECRET) {
  console.warn("[warn] APP_SECRET is not set (using null).");
}

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  // Tell the browser this is UTF-8 text
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(
    "Hello CI/CD 👋\n" +
    "This is a test \n" +
    `APP_SECRET present: ${APP_SECRET !== "dev-secret"}\n`
  );
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening at http://0.0.0.0:${PORT}`);
});
