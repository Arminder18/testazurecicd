import express from 'express'
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to node azure cicd")
});
app.get("/about",(req,res)=>{
    res.json({
         message: "This simple node app",
         developer:"Arminder Kaur",
    })   
});

app.listen(PORT,()=>{
    console.log(`sever is running on the port ${PORT}`)
})