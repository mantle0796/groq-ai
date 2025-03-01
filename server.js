const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use((req, res, next)=>{
    console.log(req.baseUrl);
    next();
})
app.use(express.json())
app.get('/', (req, res)=> {
    res.send("HOME PAGE WORKING")
})

app.post("/ai", (req, res)=> {
    console.log(req.body)
    res.send("ai will reply")
})

app.listen(PORT, ()=> {
    console.log(`LISTENING ON http://localhost:${PORT}`)
})