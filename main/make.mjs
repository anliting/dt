import fs from'fs'
import{minify}from'terser'
import{rollup}from'rollup'
let fsp=fs.promises
async function link(input,file){
    let bundle=await rollup({
        input,
    })
    return(await bundle.generate({
        format:'es',
    })).output[0].code
}
;(async()=>{
    await fs.promises.writeFile(
        'export/main.mjs',
        (await minify(await link('main/main.mjs'))).code+'\n'
    )
    fsp.writeFile('package.json',JSON.stringify({
        main:'main.mjs',
        name:'@anliting/dt',
        version:'0.0.0',
    }))
    fsp.copyFile('export/main.mjs','main.mjs')
    let[license,code]=await Promise.all([
        fsp.readFile('license','utf8'),
        fsp.readFile('export/main.mjs','utf8'),
    ])
    fsp.writeFile(`dist/dt.mjs`,`/*\n${license}*/\n${code}`)
})()
