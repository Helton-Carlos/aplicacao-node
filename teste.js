import { promises as fs } from "fs";
writeReadJson();
async function writeReadJson() {
  try {
    const arrayCarros = ["gol", "palio", "uno"];
    const obj = {
      carros: arrayCarros,
    };
    await fs.writeFile("teste.json", JSON.stringify(obj));
    const data = JSON.parse(await fs.readFile("teste.json"));
    data.carros.push("Ford Ka");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
