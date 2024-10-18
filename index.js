import puppeteer from "puppeteer";

async function buscador(){
    const navegador = await puppeteer.launch({ // iniciando novo navegador
        channel: "chrome", // definindo qual navegador vai ser iniciado
        headless: false,
        defaultViewport: null,
        args: [
            "--no-sandbox"
        ]
    });

    const pagina = await navegador.newPage(); // abrindo uma nova aba

    await pagina.goto("https://www.google.com"); // entrando no site do google nesta nova pagina


    const nome_do_site = "Gazzin";

    await pagina.type("#APjFqb", nome_do_site) // escreva o nome do produto na pesquisa

    await pagina.keyboard.press("Enter"); // preciona enter para pesquisar

    await pagina.waitForNavigation(); // espera a pagina carregar para navegar

    const link_botao = await pagina.waitForSelector("::-p-xpath(/html/body/div[3]/div/div[12]/div[1]/div[2]/div[2]/div/div/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a)")

    await link_botao.click()

    await pagina.waitForNavigation(); // espera a pagina carregar para navegar

    const nome_produto = "Celular"

    await pagina.type("::-p-xpath(/html/body/div[1]/div[2]/header/header/div[3]/div/div[2]/div[3]/div[1]/input)", nome_produto)

    await pagina.keyboard.press('Enter')

}

async function buscador_gazin() {
    const navegador = await puppeteer.launch({ // iniciando novo navegador
        channel: "chrome", // definindo qual navegador vai ser iniciado
        headless: false,
        defaultViewport: null,
        args: [
            "--no-sandbox"
        ]
    });

    const pagina = await navegador.newPage(); // abrindo uma nova aba

    await pagina.goto("https://www.gazin.com.br");

    await pagina.waitForNavigation(); // espera a pagina carregar para navegar

    const nome_produto = "Celular"

    await pagina.type("::-p-xpath(/html/body/div[1]/div[2]/header/header/div[3]/div/div[2]/div[3]/div[1]/input)", nome_produto)

    await pagina.keyboard.press('Enter')

    const produto_elemento = await pagina.waitForSelector("::-p-xpath(/html/body/div[1]/div[2]/main/div[2]/div/div/div[2]/div[3]/a[1]/div/div/div[2]/div[2]/div[2]/div/span/span)")

    const produto_preco = await produto_elemento.evaluate(elemento => elemento.innerText)

    console.log(produto_preco)

}

buscador_gazin()