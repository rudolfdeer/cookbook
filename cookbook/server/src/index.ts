import path from 'path';
import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(json());
app.use(cors());

app.listen(PORT, () => console.log(`server started at ${PORT}`));
