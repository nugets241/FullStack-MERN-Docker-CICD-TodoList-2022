const express = require("express");
const router = express.Router();

//default todos
let todos = [
  {
    id: "1",
    name: "Example Task",
    done: false,
  },
];

router.get("/", (req, res) => {
  res.status(200).json(todos);
});

router.get("/:id", (req, res) => {
  const { id } = req.params; //destructuring
  const todo = todos.find((s) => s.id === Number(id).toString());
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

router.post("/", (req, res) => {
  const { id, name } = req.body;
  const todo = todos.find((s) => s.id === Number(id).toString());

  if (!todo) {
    todos.push({ id, name });
    res.status(201).json({ message: "Created" });
  } else {
    res.status(401).json({ message: "The ID is Already in use" });
  }
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const todo = todos.find((s) => s.id === Number(id).toString());

  if (name) todo.name = name;

  res.status(200).json({ message: "Updated" });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((s) => s.id !== Number(id).toString());
  res.status(200).json({ message: "Deleted" });
});

module.exports = router;
