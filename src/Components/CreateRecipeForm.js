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
        <img className="imageonCreate" src="http://sourcehomeobject.com/site_files/11951/upload_images/blog/c952c172ed213b288c8365b126a3dfc5.png" width="300" />
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
        <input 
        name="directions" 
        onChange={this.handleChange}  
        type="text" 
        placeholder="directions"/>
        </div>
        <button className="bottomButton" onClick={this.handleClick} >create new recipe</button>
        </div>
      </div>
    )
  }
}

export default CreateRecipeForm