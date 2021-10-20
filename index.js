import express from "express";
const app = express();
app.use(express.json());

app.get("/", (res, req) => {
  throw new Error("Erro menssagem teste");
  next();
});

app.use((err, req, res, next) => {
  console.log("Erro 1");
  res.status(500).send("Ocorreu um erro geral");
});

app.listen(3000, () => {
  console.log("API started");
});
