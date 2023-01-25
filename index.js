const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const { body, validationResult } = require('express-validator');
app.use(bodyParser.urlencoded({extended:true}))

let genres=[
    {id:1,genre:"Action"},
    {id:2,genre:"Comedy"},
    {id:3,genre:"Thiller"},
    {id:4,genre:"Adventure"},
    {id:5,genre:"Horror"},
    {id:6,genre:"Anime"},
    {id:7,genre:"TV"},
    {id:8,genre:"Romance"},
    {id:9,genre:"Crime"},
    {id:10,genre:"Sci-Fi"},
]
app.get("/",(req,res)=>{
    res.send("Welcome to the world of genres, for continuing please visit /api/genres")
})

app.get("/api/genres",(req,res)=>{
    res.send(genres)
})

app.post("/api/genres",(req,res)=>{
    let newGenre={
        id:genres.length+1,
        genre:req.body.genre
    }
    genres.push(newGenre)
    res.send(newGenre)
})

app.get("/api/genres/:id",(req,res)=>{
    let genre=genres.find((gen)=>gen.id===parseInt(req.params.id))
    if(!genre){
        return res.status(400).send("Sorry, the genre you're trying to find is currently not available . Please try again later.")
    }
    res.send(genre)
})

app.put("/api/genres/:id",(req,res)=>{
    let genre=genres.find((gen)=>gen.id===parseInt(req.params.id))
    if(!genre){
        return res.status(400).send("Sorry, the genre you're trying to find is currently not available . Please try again later.")
    }
    genre.genre=req.body.genre
    res.send(genre)

})

app.delete("/api/genres/:id",(req,res)=>{
    let genre=genres.find((gen)=>gen.id===parseInt(req.params.id))
    if(!genre){
        return res.status(400).send("Sorry, the genre you're trying to find is currently not available . Please try again later.")
    }
    let index=genres.indexOf(genre)
    genres.splice(index,1)
    res.send(genre)

})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})