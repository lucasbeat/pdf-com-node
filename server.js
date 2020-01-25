const pdf = require('html-pdf')

pdf.create("HELLO WORLD", {})
    .toFile("./primeiropdf.pdf", (err, res) => {
        if (err) {
            console.log(`ocorreu um erro: ${err}`)
        } else {
            console.log(res)
        }
    })