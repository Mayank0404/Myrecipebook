import { useEffect, useState } from "react"
import Recipe from "./components/Recipe"
import './App.css'

const App= () => {
  const APP_ID='574a2b5e'
  const APP_KEY='f48ba1d20efbda49be807f962fb7e961'
  const [search,setsearch]=useState('')
  const [query,setquery]=useState('chicken')
  const [dishes,setdishes]=useState([])

  
  useEffect(()=>{
  async function getData(){

    const res=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const response= await res.json()
    setdishes(response.hits);

  }
  getData()
  },[query])
  
   const submithandler= e =>{
    e.preventDefault()
    setquery(search)
    setsearch('')
  }
return<div

className="App">
<form  className="search-form " onSubmit={submithandler}>

<input type='text' className="search-bar" onChange={e => setsearch(e.target.value)} value={search}/>
<button className="search-button" type="submit">SEARCH</button>
</form>
<div className="recipes">
{dishes.map((item,idx)=> <Recipe recipeList={item} key={idx}/>)} 

</div>
</div>
}
export default  App