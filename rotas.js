import  express  from "express";
const app=express();
app.all("/testAll",(_,res)=>{
    res.send("Teste de rota")
})

app.get("/teste?",(_,res)=>{
    res.send("/teste?")
})

app.get("/buzz+",(_,res)=>{
    res.send("/buzz+")
})

app.listen(3000,()=>{
    console.log("rotas enviadas")
})