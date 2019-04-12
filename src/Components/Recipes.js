import React, { Component } from "react"
import axios from "axios"
import Recipe from "./Recipe"
import CreateRecipeForm from "./CreateRecipeForm"
import Header from "./Header";
import "./Recipes.css"
import {ToastsContainer, ToastsStore} from 'react-toasts';

export default class Recipes extends Component {
  constructor() {
    super()

    this.state = {
      recipes: [],
      items: [],
      showCart: false,
    }
  }

  componentDidMount() {
    axios.get("/api/recipes").then((res) => {
      this.setState({
        recipes: res.data
      })
    }).catch(err => console.log("error", err))
    axios.get("/api/list").then((res)=>{
      this.setState({
        items: res.data
      })
    }).catch(err => console.log("error", err))
  }

  createRecipe = (newRecipe) => {
    axios.post("/api/recipes", newRecipe).then(res => {
      this.setState({
        recipes: res.data
      })
    }).catch(err => console.log("error", err))
  }

  updateRecipe = (recipe) => {

    axios.put(`/api/recipes/${recipe.id}`, recipe).then(res => {
      this.setState({
        recipes: res.data
      })
    }).catch(err => console.log("error", err))
  }

  removeRecipe = (recipe) => {
    
    axios.delete(`/api/recipes/${recipe.id}`).then(res => {
      this.setState({
        recipes: res.data
      })
    }).catch(err => console.log("error", err))
  }

  searchRecipe = (text) => {

    axios.get(`/api/recipes/?title=${text}`).then(res => {

      this.setState({
        recipes: res.data
      })
    }).catch(err => console.log("error", err))

  }

  createList = (ing) => {
    axios.post("/api/list", ing).then(res => {
      this.setState({
        items: res.data
      })
    }).catch(err => console.log("error", err))
  }

  

  navigate = (location) => {
    if (location === "cart") {
      this.setState({ showCart: true })
    } else {
      this.setState({ showCart: false })
    }
  }

  itemRemover =(item) => {
    axios.delete(`/api/list/${item.id}`).then(res => {
      console.log("where am I?", this.state.items, "whats my id ", item.id)
      this.setState({
        items : res.data
      })
  }).catch(err => console.log("error", err))
  }

  render() {

    return (

      <div className="mainDiv">
        <div className="HeaderDiv">
          <Header searchRecipe={this.searchRecipe}
            recipes={this.recipes} navigate={this.navigate} />
        </div>
        <div className="bigcontainer">


          {this.state.showCart ? this.state.items.map((item, i) => {
            return (
            <div>
              <ul id={i} onClick={()=>this.itemRemover(item)} className="listItems">{item.item}</ul>
              
            </div>
            )
          }) :

            <div className="createFormParent">
              <CreateRecipeForm handleCreate={this.createRecipe} />
              {this.state.recipes.map(recipe => {
                return (
                  <div className="recipeParent">
                    <Recipe
                      key={recipe.id}
                      recipe={recipe}
                      updateRecipe={this.updateRecipe}
                      removeRecipe={this.removeRecipe}
                      addItems={this.addItems}
                      createList={this.createList}
                       />
                  </div>
                )

              }
              )}

            </div>}
            </div>
            </div>
    )
  }
}