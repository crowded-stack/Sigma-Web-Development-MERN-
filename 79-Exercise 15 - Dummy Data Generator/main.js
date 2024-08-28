import express from 'express';
import mongoose from 'mongoose';
import { Employee } from './models/employee.js';
import { employeeList } from './utils/data-generator.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()
const port = 3000

app.use(express.static('public'));

await mongoose.connect('mongodb://localhost:27017/company');

app.get('/',  (req, res) => {
    res.sendFile('/templates/index.html', {root: __dirname});
})

app.get('/generate-data', async (req, res) => {
    if (Employee.exists()) {
        await Employee.deleteMany();
        await Employee.insertMany(employeeList());
    } else
        await Employee.insertMany(employeeList());
    res.json({ response: 'Ok' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})