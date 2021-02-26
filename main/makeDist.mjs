import fs from'fs'
let fsp=fs.promises
;(async()=>{
    fsp.writeFile('dist/node/package.json',JSON.stringify({
        name:'@anliting/dt',
        version:'2.1.3',
        main:'dt.mjs',
    }))
    fsp.copyFile('license','dist/node/license')
    fsp.copyFile('export/main.mjs','dist/node/dt.mjs')
    let[license,code]=await Promise.all([
        fsp.readFile('license','utf8'),
        fsp.readFile('export/main.mjs','utf8'),
    ])
    fsp.writeFile(`dist/dt.mjs`,`/*\n${license}*/\n${code}`)
})()
