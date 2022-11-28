import { createContext,useReducer } from "react"
import { DarkModeReducer } from "./darkModeReducer"

const INITIAl_STATE = {
  darkMode: false,
}


export const DarkModeContext =createContext(INITIAl_STATE) 

const DarkModeContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAl_STATE);
  return (
    <DarkModeContext.Provider value={{darkMode: state.darkMode,dispatch}}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeContextProvider