const app = require('./server');
// const express = require("express");

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Express now departing from port ${port}!`))
