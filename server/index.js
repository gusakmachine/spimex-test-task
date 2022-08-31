const express = require('express');
const router = require('./src/routes/index');
const app = express();
const port = 8000;

router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});