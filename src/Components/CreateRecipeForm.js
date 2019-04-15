import React, {Component} from "react"
import "./CreateRecipeForm.css"

class CreateRecipeForm extends Component {
  constructor(){
    super()

    this.state = { 
      title: "",
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
      ingredient4: "",
      ingredient5: "",
      imageUrl: "",
      directions: "",
      
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
      <div className="mainDivinCreate">
        <div className="fewerElements">
        <h2 className="headername">Create your recipe</h2>
        <div className="itemCtrl">
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
        <div>
        <textarea cols="30" rows="8"
        name="directions" 
        onChange={this.handleChange}  
        type="text" 
        placeholder="This text box is provided to you by Alex. directions"/>
        </div>
        </div>
        <i class="far fa-plus-square" title="Add recipe" onClick={this.handleClick}></i>
        
        </div>
      </div>
    )
  }
}

export default CreateRecipeForm