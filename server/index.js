const express = require("express");
const cors = require('cors')

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())

const ratings = {
    "1": 10,
    "2": 0,
    "3": 5,
    "4": 2,
    "5": 1,
    "6": 4
}

app.get('/api',(req,res)=>res.json(ratings))

app.post('/api',(req,res)=>res.json(ratings))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});