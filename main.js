import  express from "express"
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.post("/",(req,res)=>{
    const a = "Helton"
    res.send("Nome: " + a)
})
app.listen(3000,()=>{
    console.log('Começou')
})