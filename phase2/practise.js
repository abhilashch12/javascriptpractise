function login(password){
    let p = new Promise((resolve,reject)=>{
        if(password=="admin123"){
            resolve('correct password');
        }
        else{
            reject('invlaid');
        }
    });
    return p;
}
let p = login("123");
p.then((pass)=>{
    console.log(pass);
}).catch((wrong)=>{
    console.log(wrong);
});