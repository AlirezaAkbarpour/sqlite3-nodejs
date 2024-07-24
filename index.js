const { db } = require('./src/sqlite');

const args = require('arguments-parser')({
    explicit:true,
    keepAsArray:true,
    onlyParamsArray:true,
    offset:2
})

const match = (args)=>{
    if(args[1]==='-a')
        db.run(`INSERT INTO TEXT(text) VALUES(?)`,[args[2]],(error)=> console.error(error))
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