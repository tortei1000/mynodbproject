import React, {Component} from "react"

export default class EditRecipeForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      title: props.recipe.title,
      imageUrl: props.recipe.imageUrl,
      ingredient1: props.recipe.ingredient1,
      ingredient2: props.recipe.ingredient2,
      ingredient3: props.recipe.ingredient3,
      ingredient4: props.recipe.ingredient4,
      ingredient5: props.recipe.ingredient5,
      directions: props.recipe.directions
    }
  }

  handleChange = e => {
    
    let {value, name} = e.target
    
    this.setState({
      [name]:value
    })
  }


  
  handleClick = () => {
    let newRecipe = this.state
    this.props.updateRecipe(newRecipe)
  }

  render(){
    return(
      <div style={{border: "1px solid black", margin: 20}}>
        <input 
        name="title" 
        onChange={this.handleChange} 
        type="text" 
        placeholder="title"/>
        <input 
        name="imageUrl" 
        onChange={this.handleChange} 
        type="text" 
        placeholder="image url"/>
        <input 
        name="ingredient1" 
        onChange={this.handleChange}  
        type="text" 
        placeholder="ingredient"/>
        <input 
        name="ingredient2" 
        onChange={this.handleChange}  
        type="text" 
        placeholder="ingredient"/>
        <input 
        name="ingredient3" 
        onChange={this.handleChange}  
        type="text" 
        placeholder="ingredient"/>
        <input 
        name="ingredient4" 
        onChange={this.handleChange}  
        type="text" 
        placeholder="ingredient"/>
        <input 
        name="ingredient5" 
        onChange={this.handleChange}  
        type="text" 
        placeholder="ingredient"/>
        <input 
        name="directions" 
        onChange={this.handleChange}  
        type="text" 
        placeholder="directions"/>
        <button onClick={this.handleClick} >update recipe</button>
      </div>
    )
  }
}