const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('data',sqlite3.OPEN_READWRITE,(error)=>{
    if(error) console.error(error)
})