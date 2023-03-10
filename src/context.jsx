import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading]=useState(true)
  const [searchTerm,setSearchTerm]=useState('')
  const [cockTail,setCockTail]=useState([])
  const fetchData=useCallback(async()=>{
    setLoading(true)
     try {
       const response=await fetch(`${url}${searchTerm}`)
       const data=await response.json()
       const {drinks}=data
       if(drinks){
        const newCockTails=drinks.map((item)=>{
          const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass,strInstructions}=item;
          return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass,additionalInfo:strInstructions}
        })
        setCockTail(newCockTails)
       }
       else{
        setCockTail([])
       }
       setLoading(false)
     } catch (error) {
         console.log(error);
     }
  },[searchTerm])
  useEffect(()=>{
   fetchData();
  },[searchTerm,fetchData])
  return <AppContext.Provider value={{
    loading,cockTail,setSearchTerm,setLoading
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
