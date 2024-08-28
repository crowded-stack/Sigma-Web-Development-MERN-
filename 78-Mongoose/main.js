import express from 'express';
import { Todo } from "./models/todo.js"
import { Worker } from "./models/worker.js"
import mongoose from "mongoose";
const app = express()
const port = 3000

await mongoose.connect("mongodb://localhost:27017/todo");

app.get('/', (req, res) => {
    const tod = new Todo({ title: "Washroom Cleaning", desc: "", isDone: 3, days: 34 });
    tod.save();
    res.send('Hello World!')
})

app.post('/addworker', (req, res) => {
    const worker = new Worker({ name: "Shahbaz", gender: "Male", address: "ABC" });
    worker.save();
    res.send('Posted');
})

app.get('/getworker', async (req, res) => {
    const worker = await Worker.findOne({});
    res.json(worker);
})

app.get('/a', async (req, res) => {
    const todo = await Todo.findOne({});
    res.json(todo);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})