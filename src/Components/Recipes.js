import React, {Component} from "react"
import axios from "axios"
import Recipe from "./Recipe"
import CreateRecipeForm from "./CreateRecipeForm"
import Header from "./Header";
import "./Recipes.css"

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

  removeRecipe =( recipe )=> {
    console.log("this is the recipe id", recipe.id)
    axios.delete(`/api/recipes/${recipe.id}`).then(res => {
      this.setState({ 
        recipes: res.data 
      })
    }).catch(err => console.log("error", err))
  }

  searchRecipe = (text) => {
    console.log("searchRecipe function", text)
    axios.get(`/api/recipes/?title=${text}`).then( res => {
      console.log("search function result", res) 
      this.setState({
        recipes:res.data
      })
    }).catch(err => console.log("error", err))

  }

  render(){
    
    return(
        <div className="mainDiv">
          <div className="HeaderDiv">
            <Header searchRecipe={this.searchRecipe} 
              recipes={this.recipes} />
          </div>
          <div className="createFormParent">
          <CreateRecipeForm handleCreate = {this.createRecipe}/> 
          </div>
            {this.state.recipes.map(recipe => {
            return  (
                    <div className="recipeParent">
                    <Recipe 
                    key={recipe.id} 
                    recipe={recipe} 
                    updateRecipe ={this.updateRecipe}
                    removeRecipe ={this.removeRecipe}/>
                    </div>
            )
        })}
          
      </div>
    )
  }
}