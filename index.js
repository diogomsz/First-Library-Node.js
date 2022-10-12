import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não foi encontrado arquivo no diretório'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';

    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then(texto => console.log(chalk.green(texto)))
        .catch(trataErro); // (erro) => trataErro(erro)
}

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if(erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

pegaArquivo('./arquivos/texto.md');
