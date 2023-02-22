import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cockTail,loading}=useGlobalContext();
  if(loading){
    return <Loading/>
  }
  if(cockTail.length < 1){
    return(
       <h2 className='section-title'>
      no cocktail match criteria
      </h2>
      )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>
        cocktails
      </h2>
      <div className="cocktails-center">
        {cockTail.map((item)=>{
          return <Cocktail key={item.key} {...item}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList
