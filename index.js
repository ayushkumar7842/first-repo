const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("<h1>Server Started</h1>");
});

// listens the server at PORT 8000
server.listen(PORT, () => {
  console.log("Server is running at", PORT);
});
