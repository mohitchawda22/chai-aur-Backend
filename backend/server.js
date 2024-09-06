import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

//give a list of jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
      category: "science",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
