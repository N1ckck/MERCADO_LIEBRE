const express= require('express')
const app= express()
const path= require('path')
const port=3030 


app.use(express.static('public'))
app.get('/',(req,res)=>(
    res	.sendfile(path.join(__dirname,'./views/home.html'))
))

app.listen(port,()=>console.log(`http://localhost:${port}`))

