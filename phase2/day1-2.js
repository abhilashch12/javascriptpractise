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
    let start = Date.now();
    console.log(start);
    let p = await Promise.all([fakeFetch("abhilash",1000),fakeFetch("abhilash",2000),fakeFetch("abhilash",3000)]);
    console.log(p);
    let end = Date.now();
    console.log(end);
    console.log("time taken",end-start);
    }
    catch(error){
     console.log(error);
    }
}
run();
function fakeFailFetch(score){
    let p = new Promise((resolve,reject)=>{
        if(score>30){
            resolve(`pass`);
        }
        else{
            reject("fail")
        }
    });
    return p;
}
async function display(){
    try{
        let p = await fakeFailFetch(25);
        console.log(p);
    }
    catch(error){
        console.log(error);
    }
};
display();