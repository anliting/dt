import fs from'fs'
let fsp=fs.promises
;(async()=>{
    fsp.copyFile('license','dist/node/license')
    fsp.copyFile('main/dt.mjs','dist/node/dt.mjs')
    fsp.writeFile('dist/node/package.json',JSON.stringify({
        name:'@anliting/dt',
        version:'2.1.3',
        main:'dt.mjs',
    }))
    let[license,code]=await Promise.all([
        fsp.readFile('license','utf8'),
    ])
    fsp.writeFile(`dist/dt.mjs`,`/*${license}*/${code}`)
})()
