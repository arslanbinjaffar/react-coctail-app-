import  { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import Loading from './../components/Loading';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const SingleCocktail = () => {
  const {id}=useParams()
  const [loading,setLoading]=useState(false)
  const [cocktails,setCocktails]=useState([])
  useEffect(()=>{
   const fetchData=async()=>{
     setLoading(true)
    try{
      const response=await fetch(`${url}${id}`)
      const data=await response.json()
      console.log(data)
      if(data.drinks){
       const { idDrink:id,strDrink:name,strDrinkThumb:image,strAlcoholic:info,strGlass:glass,strInstructions:additionalInfo,strCategory:category
        ,strDrinkThumb
      ,strIBA
      ,strIngredient1
      ,strIngredient2
      ,strIngredient3
      ,strIngredient4
      ,strImageSource
      ,strIngredient5
      ,strIngredient6
      ,strIngredient7
      ,strIngredient8
      ,strIngredient9
      ,strIngredient10
      ,strIngredient11
      ,strIngredient12
      ,strIngredient13
      ,strInstructionsIT
      ,strInstructionsDE
      ,strInstructions
      }=data.drinks[0]
      const ingredients=[
        ,strIngredient1
      ,strIngredient2
      ,strIngredient3
      ,strIngredient4
      ,strImageSource
      ,strIngredient5
      ,strIngredient6
      ,strIngredient7
      ,strIngredient8
      ,strIngredient9
      ,strIngredient10
      ,strIngredient11
      ,strIngredient12
      ,strIngredient13
      ]
      console.log(ingredients)
      const newCocktails={name,image,info,glass,additionalInfo,category,ingredients
        ,strDrinkThumb,strInstructionsIT
        ,strInstructionsDE
        ,strInstructions
      }
      setCocktails(newCocktails)
      setLoading(false)
      }
      else{
        setCocktails(null)
      }
    }
    catch(err){
           console.log(err)
           setLoading(false)
    }
   }
   fetchData()
  },[id])
  if(loading){
      return <Loading/>
  }
  if(!cocktails){
  return <div>
    <h2>np cocltails to display</h2>
  </div>
  }
  const {name,image,info,glass,additionalInfo,category,ingredients,strDrinkThumb
    ,strInstructionsIT
      ,strInstructionsDE
      ,strInstructions
  }=cocktails
  const infoData=[
    {title:"name",intro:name},{title:"category",intro:category},{title:"glass",intro:"glass"},{title:"additionalInfo",intro:additionalInfo},
  ]
  return (
    <>
    
    <section className='section cocktail-section'>
      <Link to='/' className="btn btn-primary">back home</Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} className=''/>
        <div className="drink-info">
          {infoData.map(({title,intro},index)=>
          <p>
            <span className='drink-data'>{title} : </span>
            {intro}
          </p>
          )}
          <p>
            <span className='drink-data'>
              ingredients : 
            </span>
            {ingredients?.map((item,index)=>{
              return item ? <span key={index}>{item}</span>:null
            })}
          </p>
        </div>
         <blockquote cite={strDrinkThumb}>
          {strInstructionsIT}
         </blockquote>
         <fieldset>
        <legend>additionINFo:</legend>
        <p>{strInstructionsIT}</p>
        <p>{strInstructionsDE}</p>
        </fieldset>
      </div>

    </section>
    </>
  )
}

export default SingleCocktail