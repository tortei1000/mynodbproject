import React, {Component} from "react"
import "./Recipe.css"
import EditRecipeForm from "./EditRecipeForm"

export default class Recipe extends Component {
  constructor(){
    super()

    this.state = {
      edit:false,

    }
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render(){
    let {recipe} = this.props

      console.log(recipe.ingredient)
    return(
       this.state.edit ? <EditRecipeForm recipe={recipe} updateRecipe={this.props.updateRecipe} toggleEdit={this.toggleEdit}/> :
      <div className="mainRecipeBody">
        <img src={recipe.imageUrl} alt="" width="300"/>
        <h2>{recipe.title}</h2>
        <h3>ingredients:</h3>
        <p>{recipe.ingredient1}</p>
        <p>{recipe.ingredient2}</p>
        <p>{recipe.ingredient3}</p>
        <p>{recipe.ingredient4}</p>
        <p>{recipe.ingredient5}</p>
        <h3>Directions:</h3>
        <p>{recipe.directions}</p>
        <button className="bottomButton" onClick={this.toggleEdit}>edit</button>
        <button className="bottomButton" onClick={this.props.removeRecipe}>Delete</button>
        
      </div>
    )
  }

}