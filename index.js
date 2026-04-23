const express = require("express");
const app = express();
console.log("FILE IS RUNNING");

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

let users = [];

app.get("/", (req, res) => {
  res.send("Server running");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const user = {
    id: Date.now(),
    name,
  };

  users.push(user);

  res.status(201).json({
    message: "User added",
    user,
    users,
  });
});

app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const initialLength = users.length;

  users = users.filter((user) => user.id !== id);

  if (users.length === initialLength) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    message: "User deleted",
    users,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});