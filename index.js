const { db, getList,setText } = require('./src/sqlite');

const args = require('arguments-parser')({
    explicit:true,
    keepAsArray:true,
    onlyParamsArray:true,
    offset:2
})

const match = (args)=>{
    if(args[0]==='-a')
        setText(`'hello'`)
    if(args[0]==='-l')
        texts = getList()
        console.log(typeof texts)
        texts.forEach((text)=>console.log(text))
}

const main = async ()=>{
    await db.run(`CREATE TABLE IF NOT EXISTS TEXT (text text)`,(error)=>{
        if(error) return console.error(error)
    })
    try{
        match(args)
    } catch(error){
        console.log(error)
    }
}

main();