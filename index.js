/*const texto = "Helton Brito";
function nome(string){
    return string
}
console.log(nome(texto))*/

const chalk = require('chalk')
const fs = require('fs')

function trataErro(erro){
    throw new Error(chalk.red(erro));
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