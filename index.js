const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;



app.get('/', (req, res) =>{
    res.send('College Connect is running')
})

app.listen(port, () =>{
    console.log(`College Connect is running on port, ${port}`)
})
