import { useContext } from "react";
import { createContext } from "react";

export const Cardcontext=createContext({
    card:[],
    added:(product)=>{},
    remove:(id,product)=>{}
})

export const CardcontextProvider=Cardcontext.Provider


export const useCard=()=>{
   return useContext(Cardcontext)
}