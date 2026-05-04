function orderProduct(productname,delay,stock){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(stock>0){
            resolve(`order placed for ${productname}`);
        }
        else{
            reject("stock not avaliavble");
        } },delay);
    })
    return p;
}
let s = orderProduct("apple",2000,1);
s.then((stock)=>{
    console.log(stock);
}
).catch((nostock)=>{
    console.log(nostock);
})