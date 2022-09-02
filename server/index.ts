import express from 'express';
import {Router} from "./src/routes/Router";

const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors())

Router(app);

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});