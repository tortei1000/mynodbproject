import React, {Component} from "react"

export default class EditRecipeForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      title: props.recipe.title,
      imageUrl: props.recipe.imageUrl,
      ingredient: props.recipe.ingredient
    }
  }

  handleChange = e => {
    
    let {value, name} = e.target
    this.setState({
      [name]:value
    })
  }

  handleClick = () => {
    let recipe = {...this.props.recipe, ...this.state}
    this.props.updateRecipe(recipe)
  }

  render(){
    return(
      <div style={{border: "1px solid black", margin: 20}}>
        <input 
        name="title" 
        onChange={this.handleChange} 
        type="text" 
        placeholder="title"
        value={this.state.species}/>
        <input 
        name="imageUrl" 
        onChange={this.handleChange} 
        type="text" 
        placeholder="image url"
        value={this.state.imageUrl}/>
        <input 
        name="ingredient" 
        onChange={this.handleChange}  
        type="text" 
        placeholder="ingredient"
        value={this.state.quantity}/>
        <button onClick={this.handleClick} >update recipe</button>
      </div>
    )
  }
}