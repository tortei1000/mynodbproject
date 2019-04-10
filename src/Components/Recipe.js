import React, {Component} from "react"
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
       this.state.edit ? <EditRecipeForm recipe={recipe} updateRecipe={this.props.updateRecipe}/> :
      <div style={{border: "1px solid black", margin: 10}}>
        <img src={recipe.imageUrl} alt="" width="200"/>
        <p>Title: {recipe.title}</p>
        <p>ingredients:</p>
        <p>{recipe.ingredient1}</p>
        <p>{recipe.ingredient2}</p>
        <p>{recipe.ingredient3}</p>
        <p>{recipe.ingredient4}</p>
        <p>{recipe.ingredient5}</p>
        <p>Directions: {recipe.directions}</p>
        <button onClick={this.toggleEdit}>edit</button>
      </div>
    )
  }

}