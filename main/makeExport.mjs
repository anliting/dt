import fs from'fs'
import{minify}from'terser'
import{rollup}from'rollup'
async function link(input,file){
    let bundle=await rollup({
        input,
    })
    return(await bundle.generate({
        format:'es',
    })).output[0].code
}
;(async()=>{
    fs.promises.writeFile(
        'export/main.mjs',
        (await minify(await link('main/main.mjs'))).code+'\n'
    )
})()
