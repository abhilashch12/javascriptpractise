import { useState } from "react";
function Loginform(){
   const [form,setForm]=useState({email:"",password:""});
   const [sucess,setSucess]=useState("");
   const[error,setError]=useState({emailerr:"",passworderr:""});
   function handlechange(e){
         setForm({
           ...form,
           [e.target.name]:e.target.value
         });
   }

   function display(e){
    e.preventDefault();
    let valid=true;
    if(!form.email.includes('@')){
        setError((prev)=>({
          ...prev,
          emailerr:"email must contain @"

        }));
        valid=false;
    }
    else{
        setError((prev)=>({
            ...prev,
            emailerr:""
        }))
        valid=true;
    }
    if(form.password.length<6){
         setError((prev)=>({
            ...prev,
            passworderr:"please enter morethan 5 "
         }))
         valid=false;
    }
    else{
        setError((prev)=>({
            ...prev,
            passworderr:""
        }))
        valid=true;
    }
    if(valid){
    console.log(`the email is: ${form.email} and the password is: ${form.password} `);
    setSucess("login sucess");
    }
   }

    return(
    <div>
    <form onSubmit={display}>
    <input name="email" type="text" placeholder="email" value={form.email} onChange={handlechange}/>
    <p style={{ color: "red" }}>
          {error.emailerr}
        </p>
    <input  name="password" type="text" placeholder="password" value={form.password} onChange={handlechange}/>
    <p style={{ color: "red" }}>
          {error.passworderr}
        </p>
    <button>submit</button>
    </form>
    <h3>sucess</h3>
    </div>
    );
}
export default Loginform;