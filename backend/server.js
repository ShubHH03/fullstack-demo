import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

const jokes = [
  {
    id: 1,
    title: "joke 1",
    content:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: 2,
    title: "joke2",
    content:
      "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 3,
    title: "joke3",
    content: "What do you call fake spaghetti? An impasta!",
  },
];

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

app.get("/api/jokes/:id", (req, res) => {
  const jokeId = parseInt(req.params.id, 10);
  const joke = jokes.find((j) => j.id === jokeId);
  if (joke) {
    res.send(joke);
  } else {
    res.status(404).send({ message: "Joke not found" });
  }
});

app.get("/api/jokes/title/:title", (req, res) => {
  const jokeTitle = req.params.title;
  const joke = jokes.find((j) => j.title.trim() === jokeTitle.trim());
  if(joke){
    res.send(joke);
  }else{
    res.status(404).send({message: "Joke not found"});
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
