/*const texto = "Helton Brito";
function nome(string){
    return string
}
console.log(nome(texto))

const chalk = require('chalk')
const fs = require('fs')
function trataErro(erro){
    throw new Error(chalk.red(erro.code,'erro provisório'));
}

function pegarArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto)=>chalk.green(console.log(texto)))
    .catch((erro)=>trataErro)
}
pegaArquivo('./arquivo/texto.md')


const chalk = require('chalk')
const fs = require('fs')
function trataErro(erro){
    throw new Error(chalk.red(erro.code,'erro provisorio'));
}
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (erro,data)=>{
        if(erro){
            trataErro(erro)
        }
        console.log(chalk.green(data))
    })
}
pegaArquivo('./arquivo/texto.md')

const chalk = require("chalk");
const fs = require('fs');
function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'))
}
async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
  try{
    const texto = await fs.promises.readFile(caminhoDoArquivo,encoding);
    console.log(chalk.green(texto))
  }catch(erro){
      trataErro(erro)
  }
}*/

var nome ="Helton";

function soma(a,b){
    return a-b
}

export default{soma,nome};