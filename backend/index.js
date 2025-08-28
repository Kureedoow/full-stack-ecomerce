const express = require('express')
const cors = require('cors')
const router = require('./route')
const app = express()
const port = 3000

app.use(express.json())
app.use(router)
app.use(cors())


app.post('/registration',(req,res)=>{
res.send(req.body)

})
// app.get('/', (req, res) => {
//   res.send('Hello welcome i am backend server web for backend coding')
// })
// app.post('/owner',(req,res)=>{
//     console.log(req.body);
    
//     // res.send(owner);
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
