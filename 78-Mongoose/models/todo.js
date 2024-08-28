import mongoose from "mongoose";
const {Schema} = mongoose;

const todoSchema = new Schema({
    title: String,
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', todoSchema);
