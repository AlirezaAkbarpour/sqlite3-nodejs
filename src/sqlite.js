const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.resolve(__dirname,'data.db')

const db = new sqlite3.Database(dbPath,sqlite3.OPEN_READWRITE,(error)=>{
    if(error) return console.error(error)
})

showTb = `select text from Text`

db.serialize(()=>{
    db.all(showTb,(error,tables)=>{
        if(error) console.error(error)
        console.log(tables)
    })
})

const getList = ()=>{db.all(showTb,(error, rows)=>
{ 
    if(error) console.log(error)
    return rows;
})}
const insert = `INSERT INTO TEXT(text) VALUES(?)`
const setText = (text)=>{
    db.all(insert,[`hello`],(error)=>{ return console.error(error)})
}

module.exports =  {db,getList,setText};