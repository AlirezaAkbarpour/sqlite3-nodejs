const args = require('arguments-parser')({
    explicit:true,
    keepAsArray:true,
    onlyParamsArray:true,
    offset:2
})

const match = (a)=>{
    if (a === '-a') return 0;
    
}

const main = async ()=>{
    await args.map((arg)=> match(arg))
}

main();