import {createContext,useState,useEffect,useContext} from "react";
export const ThemeContext = createContext();
export function ThemeProvider({children}){
    const [theme,setTheme]=useState("light");
    function themeChange(){
        setTheme((prevTheme)=>
            prevTheme=== "light"? "dark" :"light"
        );
    }
    useEffect(()=>{
       document.body.style.background= theme === "light"? "white": "black";
       document.body.style.color= theme === "light"? "black": "white";
    },[theme])
    return(
        <ThemeContext.Provider value={{theme,themeChange}}>{children}</ThemeContext.Provider>
    )
}

