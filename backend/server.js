import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke 1",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 2,
      title: "joke 2",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 3,
      title: "joke 3",
      content:
        "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 4,
      title: "joke 4",
      content:
        "Why did the bicycle fall over? Because it was two-tired!",
    },
    {
      id: 5,
      title: "joke 5",
      content:
        "What do you call cheese that isn't yours? Nacho cheese!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
