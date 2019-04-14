import React, { Component } from "react"
import "./Recipe.css"
import EditRecipeForm from "./EditRecipeForm"
import axios from "axios"

export default class Recipe extends Component {
  constructor() {
    super()

    this.state = {
      edit: false,

    }
  }

  
  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    let { recipe } = this.props



    return (
      this.state.edit ? <EditRecipeForm recipe={recipe} updateRecipe={this.props.updateRecipe} toggleEdit={this.toggleEdit} /> :
        <div className="mainRecipeBody">
          <img className="imageInRecipe" src={recipe.imageUrl} />
          <h2>{recipe.title}</h2>
          <h3 className="ingredientAlign">ingredients:</h3>
          
          <div className="ingredientAlign">
          <p>{recipe.ingredient1}</p>
          <p>{recipe.ingredient2}</p>
          <p>{recipe.ingredient3}</p>
          <p>{recipe.ingredient4}</p>
          <p>{recipe.ingredient5}</p>
          </div>
          <h3 className="directionsAlign">directions:</h3>
          <div className="directionsAlign">
          <p>{recipe.directions}</p>
          </div>
          
          <div><button className="bottomButton" onClick={this.toggleEdit}>edit</button>
          <button className="bottomButton" onClick={() => this.props.removeRecipe(recipe)}>Delete</button>
          </div>
          <button className="bottomButton2" onClick={()=> this.props.createList(recipe)} >Add ingredients to shopping list</button>

        </div>
    )
  }

}