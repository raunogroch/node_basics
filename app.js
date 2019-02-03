const http = require('http')
const express = require('express')
var app = express()

app.get('/', (req,res)=>{
   res.send("saludos que tal")
})

app.listen(3000)