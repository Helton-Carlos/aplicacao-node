/*const texto = "Helton Brito";
function nome(string){
    return string
}
console.log(nome(texto))*/

const chalk = require('chalk')
const fs = require('fs')

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (_,data)=>{
        console.log(chalk.green(data))
    })
}

pegaArquivo('./arquivo/texto1.md')