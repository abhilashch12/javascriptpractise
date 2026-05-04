function fakeFetch(data,delay){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
         resolve(data);
        },delay);
    });
    return p;
}
let p=fakeFetch({name:"abhilash",age:23},2000)
p.then((user)=>{
    console.log(user);
})
p.catch((error)=>{
    console.log(error);
})