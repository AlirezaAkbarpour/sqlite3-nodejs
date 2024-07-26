const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.resolve(__dirname,'data.db')

const db = new sqlite3.Database(dbPath,sqlite3.OPEN_READWRITE,(error)=>{
    if(error) return console.error(error)
})

showTb = `select name from sqlite_master WHERE type='table'`

/*db.serialize(()=>{
    db.all(showTb,(error,tables)=>{
        if(error) console.error(error)
        console.log(tables)
    })
})*/

const getList = ()=>{db.all(`select text FROM TEXT`),(error, rows)=>
{ 
    if(error) console.log(error)
    return rows;
}}
const insert = `INSERT INTO TEXT(text) VALUES(?)`
const setText = (text)=>{
    db.run(insert,[text],(error)=>{ return console.error(error)})
}

db.run(`CREATE TABLE IF NOT EXISTS TEXT (text text)`,(error)=>{
    if(error) return console.error(error)
})
db.run(`DROP TABLE TEXT`,(error)=>{return console.log(error)})

module.exports =  {db,getList,setText};