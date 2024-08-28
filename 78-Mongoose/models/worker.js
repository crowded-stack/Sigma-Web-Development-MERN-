import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({name: String, gender: String, address: String});

export const Worker = mongoose.model('Worker', workerSchema);
