import React, {Component} from "react"
import axios from "axios"
import Recipe from "./Recipe"
import CreateRecipeForm from "./CreateRecipeForm"

export default class Recipes extends Component {
  constructor() {
    super()

    this.state={
      recipes: []
    }
  }

  componentDidMount(){
    axios.get("/api/recipes").then((res)=>{
      this.setState({
        recipes: res.data
      })
    }).catch(err => console.log("error", err))
  }

  createRecipe =(newRecipe)=>{
    axios.post("/api/recipes", newRecipe).then(res => {
      this.setState({
        recipes:res.data
      })
    }).catch(err => console.log("error", err))
  }

  updateRecipe = (recipe) => {
    axios.put(`/api/recipes/${recipe.id}`, recipe).then(res => {
      this.setState({
        recipes:res.data
      })
    }).catch(err => console.log("error", err))
  }

  render(){

    return(
        <div>
         <CreateRecipeForm handleCreate = {this.createRecipe}/> 
        {this.state.recipes.map(recipe => {
          return <Recipe 
                    key={recipe.id} 
                    recipe={recipe} 
                    updateRecipe ={this.updateRecipe}/>
        })}
      </div>
    )
  }
}