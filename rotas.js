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

app.get("/one*Blue",(req,res)=>{
    res.send(req.path)
})

app.post("/test(ing)?",(req,res)=>{
    res.send("/test(ing)?")
})


app.get("/testQuery",(req,res)=>{
    res.send(req.query)
})

//rotas

app.route("/testRoute")
    .get((req,res)=>{
        res.send("/testRoute GET")
    })
    .post((req,res)=>{
        res.send("/testRoute POST")
    })
    .delete((req,res)=>{
        res.send("/testRoute DELETE")
    })

app.listen(3000,()=>{
    console.log("rotas enviadas")
})