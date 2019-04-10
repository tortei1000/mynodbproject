import React, { Component } from 'react';
// import axios from "axios"

export default class AddRecipe extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      ingredient:["","","","",""],
      image:"",
      directions:""
    }
    
  }
  handleChangeName(val){
    this.setState({name:val})
  }
  handleChangePicture(val){
    this.setState({image:val})
  }
  handleChangeIngredient1(val){
    let ingCopy = [...this.state.ingredient]
    ingCopy.splice(0, 1, val)
    this.setState({ingredient:ingCopy})

  }
  handleChangeIngredient2(val){
    let ingCopy = [...this.state.ingredient]
    ingCopy.splice(1, 1, val)
    this.setState({ingredient:ingCopy})

  }
  handleChangeIngredient3(val){
    let ingCopy = [...this.state.ingredient]
    ingCopy.splice(2, 1, val)
    this.setState({ingredient:ingCopy})

  }
  handleChangeIngredient4(val){
    let ingCopy = [...this.state.ingredient]
    ingCopy.splice(3, 1, val)
    this.setState({ingredient:ingCopy})

  }
  handleChangeIngredient5(val){
    let ingCopy = [...this.state.ingredient]
    ingCopy.splice(4, 1, val)
    this.setState({ingredient:ingCopy})

  }
  handleChangeInstructions(val){
    this.setState({directions:val})
  }

 

  
  render(){
    return(
      <div>
        
          <h3>Add a Recipe</h3>
          <div>
            <label for="name">Recipe Name:</label>
            <input type="text" onChange={e => this.handleChangeName(e.target.value)} />
          </div>
          <div>
            <label for="text">Picture URL:</label>
            <input type="text" onChange={e => this.handleChangePicture(e.target.value)} />
          </div>
          <div>
            <label for="ingredient">Ingredient</label>
            <input type="text" onChange={e => this.handleChangeIngredient1(e.target.value)} />

            <label for="ingredient">ingredient 2</label>
            <input type="text" onChange={e => this.handleChangeIngredient2(e.target.value)}/>

            <label for="ingredient">ingredient 3</label>
            <input type="text" onChange={e => this.handleChangeIngredient3(e.target.value)}/>

            <label for="ingredient">ingredient 4</label>
            <input type="text" onChange={e => this.handleChangeIngredient4(e.target.value)} />

            <label for="ingredient">ingredient 5</label>
            <input type="text" onChange={e => this.handleChangeIngredient5(e.target.value)} />

            </div>
          <div>
            <label for="msg">Recipe Directions:</label>
            <textarea onChange={e => this.handleChangeInstructions(e.target.value)} cols="40" rows="10"></textarea>
          </div>
          <div>
            <button type="submit" onClick={()=>{
              this.props.addRecipe(this.state)
              this.setState( {
                name: "",
                ingredient:[],
                image:"",
                directions:""
                } )
            }
            }>submit</button>
          </div>
        
      </div>
    )
  }
}