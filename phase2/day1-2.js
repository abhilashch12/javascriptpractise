function fakeFetch(data,delay){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },delay);
    });
    return p;
}
async function run(){
    try{
    let p = await fakeFetch("abhilash",2000);
    console.log(p);
    }
    catch{
     console.log(error);
    }
}
run();