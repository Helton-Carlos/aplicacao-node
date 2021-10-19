import express  from "express";
const app = express()

app.use(express.json())
app.use("/carros", carroRouter);
app.use((req,res,next)=>{
    console.log(new Date())
    next();
})

app.get("/teste",(req,res)=>{
    res.end()
})

app.listen(3000,()=>{
    console.log("API Started")
})