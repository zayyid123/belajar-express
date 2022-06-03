const express = require('express');

const app = express();

app.use(() => {
    console.log('hello')
    console.log('hello lagi')
})

app.listen(4000)