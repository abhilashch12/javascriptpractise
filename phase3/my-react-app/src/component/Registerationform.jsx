import {useState} from "react";
function Registerationform(){
    const[form,setForm]=useState({username:"",email:"",password:"",select:"",terms:false});
    const[err,setErr]=useState({usernameerr:"",emailerr:"",passworderr:"",selecterr:"",termserr:""})
    const[valid,setValid]=useState(false);


    function handleChange(e){
    const{name,value,checked,type}=e.target;
            setForm({
   ...form,
   [name]: type === "checkbox" ? checked : value
});
       if(name==="username")
       {
        value.trim();
        if(value===""){
            setErr((prev)=>({
                ...prev,
                usernameerr:"please enter name donot leave empty"
            }));
            
        }
        else if(value.length<3)
        {
            setErr((prev)=>({
                ...prev,
                usernameerr:"enter a valid name more than 3 letters"
            }));
            
        }
        else if(!/^[A-Za-z\s]+$/.test(value))
        {
            setErr((prev)=>({
                ...prev,
                usernameerr:"enter valid characters"
            }));
            
        }
        else
        {
           setErr((prev)=>({
            ...prev,
            usernameerr:""
           }))
           
        }
    }
        if(name==="email"){
        if(!value.includes("@")){
            setErr((prev)=>({
                ...prev,
                emailerr:"please enter a valid email address"
            }));
            

        }
        else
        {
          setErr((prev)=>({
            ...prev,
            emailerr:""
          }));
          
        }
    }
    if(name=="password"){
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value)){
            setErr((prev)=>({
                ...prev,
                passworderr:"password must contain 1.uppercase letter 2.lowercase letter 3.must contain special characters 4.should be atleast 8 digits"
            }));
            
        }
        else{
            setErr((prev)=>(
                {
                    ...prev,
                    passworderr:""
                }
            ));
            
        }
    }
    if(name==="select"){
        if(value===""){
            setErr((prev)=>({
               ...prev,
               selecterr:"please select a role" 
            }));
            
            }
        else{
            setErr((prev)=>({
                ...prev,
                selecterr:""
            }));
            
        }
    }
    if(name==="terms")
    {
            if(!checked)
    {
        setErr((prev)=>({
            ...prev,
            termserr:"Please accept terms and conditions"
        }));
        
    }
    else
    {
        setErr((prev)=>({
            ...prev,
            termserr:""
        }));
        
    }
      
    }
    }
    function display(e){
        e.preventDefault();
       if( form.username !==""&&
           err.usernameerr===""&&

           form.email !==""&&
           err.emailerr===""&&

           form.password !== ""&&
           err.passworderr===""&&

           form.select !== ""&&
           err.selecterr===""&&

           form.terms===true&&
           err.termserr===""

       ) {

        setValid(true);
       }
    }
    function registeranother(){
        setForm({
           username:"",email:"",password:"",select:"",terms:false 
        });
        setErr({
           usernameerr:"",emailerr:"",passworderr:"",selecterr:"",termserr:""
        });
        setValid(false);
    }
       if(valid){
        return(
          <div>
            <h1>suceesfully logged in {form.username} </h1>
            <button onClick={registeranother}>register another</button>
          </div>
        );
       }

 
    return(
      <div>
        <form onSubmit={display} >
        <label>Name  :</label>
        <input name="username" type="text" placeholder="name" value={form.username} onChange={handleChange}/>
        <p style={{color:"red"}}>{err.usernameerr}</p>
        <br/>
        <label>Email   :</label>
        <input  name="email" type="text" placeholder="email" value={form.email} onChange={handleChange} />
        <p style={{color:"red"}}>{err.emailerr}</p>
        <br/>
        <label>Password:</label>
        <input name="password" type="password" placeholder="password" value={form.password} onChange={handleChange} />
        <p style={{color:"red"}}>{err.passworderr}</p>
        <br/>
        <label>select role:</label>
        <select name="select" value={form.select} onChange={handleChange}>
            <option value="">select</option>
            <option value="customer">customer</option>
            <option value="employee">employee</option>
        </select>
        <p style={{color:"red"}}>{err.selecterr}</p>
        <br />
        <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange}/>
        <label>read all the details correctly and recheck before submitting</label>
        <p style={{color:"red"}}>{err.termserr}</p>
        <br />
        <button type="submit" >submit</button>
        
      </form>
      </div>
    );
}
export default Registerationform;