import React, {Component} from "react"
import "./EditRecipeForm.css"


export default class EditRecipeForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      id: props.recipe.id,
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
    this.props.toggleEdit()
  }

  render(){
    return(
      <div className="mainDivinEdit" >
        <h2 className="edit">Edit this recipe</h2>
        <div className="inputBoxes">
        <input 
        name="title" 
        onChange={this.handleChange} 
        type="text" 
        placeholder={this.state.title}/>
        <input 
        name="imageUrl" 
        onChange={this.handleChange} 
        type="text" 
        placeholder={this.state.imageUrl}/>
        <input 
        name="ingredient1" 
        onChange={this.handleChange}  
        type="text" 
        placeholder={this.state.ingredient1}/>
        <input 
        name="ingredient2" 
        onChange={this.handleChange}  
        type="text" 
        placeholder={this.state.ingredient2}/>
        <input 
        name="ingredient3" 
        onChange={this.handleChange}  
        type="text" 
        placeholder={this.state.ingredient3}/>
        <input 
        name="ingredient4" 
        onChange={this.handleChange}  
        type="text" 
        placeholder={this.state.ingredient4}/>
        <input 
        name="ingredient5" 
        onChange={this.handleChange}  
        type="text" 
        placeholder={this.state.ingredient5}/>
        <input 
        name="directions" 
        onChange={this.handleChange}  
        type="text" 
        placeholder={this.state.directions}/>
        </div>
        <div className="buttonEdit">
        <button className="bottomButton" onClick={this.handleClick} >update recipe</button>
        <button className="bottomButton" onClick={this.props.toggleEdit}> Cancel</button>
        </div>
      </div>
    )
  }
}