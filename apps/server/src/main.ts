import cors from "cors";
import express from "express";
import { prismaClient } from "./prisma";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/todo", async (req, res) => {
  try {
    const todoList = await prismaClient.todo.findMany();
    res.json(todoList);
  } catch (error) {
    res.json({ error });
  }
});

app.post("/newTasks", async (req, res) => {
  try {
    const newTasks = await prismaClient.todo.create({
      data: {
        title: req.body.title,
        userId: req.body.userId,
      },
    });
    res.json(newTasks);
  } catch (error) {
    res.json({ error: error });
  }
});

app.put("/modifierTasks", async (req, res) => {
  try {
    const old = await prismaClient.todo.findFirst({
      where: {
        id: req.body.id,
      },
    });
    const modifier = await prismaClient.todo.update({
      where: {
        id: req.body.id,
      },
      data: {
        isDone: old?.isDone ? false : true,
      },
    });
    res.json(modifier);
  } catch (error) {
    res.json({ error: error });
  }
});

app.put("/delete", async (req, res) => {
  try {
    const deleteTodo = await prismaClient.todo.delete({
      where: {
        id: req.body.id,
      },
    });
    res.json("La tâche à été supprimer !");
  } catch (error) {
    res.json({ error });
  }
});

app.listen(3006, () => {
  console.log("Server listening on port 3006");
});
