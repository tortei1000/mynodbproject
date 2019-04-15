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
          
          
          <img className="imageInRecipe" src={recipe.imageUrl}  />
          
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
          
          
          <i className="far fa-edit" title="Edit Recipe" onClick={this.toggleEdit}></i>
          <i class="far fa-trash-alt" title="Delete Recipe" onClick={() => this.props.removeRecipe(recipe)}></i>
          <i class="fas fa-clipboard-list" title="Add ingredients to shopping list" onClick={()=> this.props.createList(recipe)} ></i> 
          

        </div>
    )
  }

}