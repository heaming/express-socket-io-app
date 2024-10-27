const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(path.join(__dirname, publicDirectoryPath)));

const port = 4000;
app.listen(port, () => {
    console.log(`server is up on port ${port}!`);
});