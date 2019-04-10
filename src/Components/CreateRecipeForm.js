import React, {Component} from "react"

class CreateRecipeForm extends Component {
  constructor(){
    super()

    this.state = { 
      title: "",
      ingredient: "",
      ingredient2: "",
      imageUrl: "",
      directions: ""
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
    this.props.handleCreate(newRecipe)
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
        name="ingredient" 
        onChange={this.handleChange}  
        type="text" 
        placeholder="ingredient"/>
        <input 
        name="ingredient2" 
        onChange={this.handleChange}  
        type="text" 
        placeholder="ingredient"/>
        <input 
        name="directions" 
        onChange={this.handleChange}  
        type="text" 
        placeholder="directions"/>
        <button onClick={this.handleClick} >create new recipe</button>
      </div>
    )
  }
}

export default CreateRecipeForm