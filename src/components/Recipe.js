import Styles from './Recipe.module.css'
const Recipe = (props) =>{
 console.log(props.recipeList.recipe);
    return <div className={Styles.recipe}>
        <h1>{props.recipeList.recipe.label}</h1>
        <ol>
                {props.recipeList.recipe.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        <h1>{props.recipeList.recipe.calories}</h1>
        



        <img className={Styles.image} src={props.recipeList.recipe.image}/>
         </div>
}   

export default Recipe