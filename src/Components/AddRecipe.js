import React, { Component } from 'react';
// import axios from "axios"

export default class AddRecipe extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      ingredient:[{name:"",quantity:""}],
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
    let newIng = [...this.state.ingredient, val]
    this.setState({ingredient:newIng})
  }
 


  render(){
    return(
      <div>
        
          <div>
            <label for="name">Recipe Name:</label>
            <input type="text" onChange={e => this.handleChangeName(e.target.value)} />
          </div>
          <div>
            <label for="text">Picture URL:</label>
            <input type="text" onChange={e => this.handleChangePicture(e.target.value)} />
          </div>
          <div>
            <label for="ingredient">ingredient 1 / quantity</label>
            <input type="text" onChange={e => this.handleChangeIngredient1(e.target.value)} />

            <input type="text" onChange={e => this.handleChangeIngredient1Quan(e.target.value)}/>

            <label for="ingredient">ingredient 2/ quantity</label>
            <input type="text" onChange={e => this.handleChangeIngredient2(e.target.value)}/>

            <input type="text"onChange={e => this.handleChangeIngredient2Quan(e.target.value)}/>

            <label for="ingredient">ingredient 3/ quantity</label>
            <input type="text" onChange={e => this.handleChangeIngredient3(e.target.value)}/>

            <input type="text" onChange={e => this.handleChangeIngredient3Quan(e.target.value)}/>

            <label for="ingredient">ingredient 4/ quantity</label>
            <input type="text" onChange={e => this.handleChangeIngredient4(e.target.value)} />

            <input type="text" onChange={e => this.handleChangeIngredient4Quan(e.target.value)}/>

            <label for="ingredient">ingredient 5/ quantity</label>
            <input type="text" onChange={e => this.handleChangeIngredient5(e.target.value)} />

            <input type="text" onChange={e => this.handleChangeIngredient5Quan(e.target.value)}/>
          </div>
          <div>
            <label for="msg">Recipe Directions:</label>
            <textarea onChange={e => this.handleChangeInstructions(e.target.value)}></textarea>
          </div>
          <div>
            <button type="submit" onClick={this.props.addRecipe}>submit</button>
          </div>
        
      </div>
    )
  }
}