import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];

    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));

    console.log(resultados);
}

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não foi encontrado arquivo no diretório'));
}

// CODIGO ASSINCRONO COM ASYNC AWAIT
async function pegaArquivo(caminhoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoArquivo, encoding);
        extraiLinks(texto);
    } catch(erro) {
        trataErro(erro);
    }
}

pegaArquivo('./arquivos/texto.md');
