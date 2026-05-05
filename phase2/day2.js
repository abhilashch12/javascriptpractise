async function getData()
    {
        try{
            const result = await fetch("https://jsonplaceholder.typicode.com/users/1");
            if (!result.ok){
                throw new Error(`Http error ${result.status}`);
            }
            const data = await result.json();
            console.log(`name: ${data.name} and email: ${data.email}and city:${data.address.city}`);
            return data;
        }
        catch(error){
           console.log(error);
        }
    }
    getData();
    async function postData(){
        try{
            const response= await fetch("https://jsonplaceholder.typicode.com/posts");
            if(!response.ok){
                throw new Error (`error occured ${response.status}`);
            }
            const data = await response.json();
            let filtered = data.filter((item)=>{
            return item.userId==1;
            }).map((item)=>{
               return item.title; 
            })
            console.log(filtered);
            //console.log(titles);
        }
        catch(error){
            console.log(error);
        }
    }
    postData();

    async function errorTest(){
        try{
            const user = await fetch("https://jsonplaceholder.typicode.com/users/999999");
            if(!user.ok){
                throw new Error(`error is ${user.status}`);
            }
            const data = await user.json();
        
        }
        catch(error){
            console.log("something went wrong",error.message);
        }
    }
    errorTest();

    async function promiseAll(){
        try{
        const response = await Promise.all([fetch("https://jsonplaceholder.typicode.com/users/1"),fetch("https://jsonplaceholder.typicode.com/posts?userId=1")]);
        response.forEach(res=>{
        if(!res.ok){
            throw new Error(`the error is ${response.status}`);
        }});
        const data = await Promise.all(
            response.map(res=>res.json())
        );
         const user = data[0];
        const posts = data[1];
        console.log("User name:", user.name);
        console.log("Number of posts:", posts.length);
    }
    catch(error){
        console.log("error occured",error.message);
    }
    } 
    promiseAll();