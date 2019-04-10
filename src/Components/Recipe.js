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
    return(
       this.state.edit ? <EditRecipeForm recipe={recipe} updateRecipe={this.props.updateRecipe}/> :
      <div style={{border: "1px solid black", margin: 10}}>
        <img src={recipe.imageUrl} alt="" width="200"/>
        <p>Title: {recipe.title}</p>
        <p>ingredient: {recipe.ingredient}</p>
        <p>ingredient2: {recipe.ingredient2}</p>
        <p>Directions: {recipe.directions}</p>
        <button onClick={this.toggleEdit}>edit</button>
      </div>
    )
  }

}