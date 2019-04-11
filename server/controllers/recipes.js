let id = 1;
const recipes = [
  {
    "id" : id++,
    "title": "Chocolate Cream Frosting",
    "ingredient1": "2 ounces Chocolate",
    "ingredient2": "14 ounces Sweetened condensed milk",  
    "ingredient3": "1/2 teaspoonVanilla extract", 
    "ingredient4": "4 ounces Instant chocolate pudding",
    "ingredient5":"1 cup Heavy cream",
    "imageUrl": "https://images.media-allrecipes.com/userphotos/250x250/733532.jpg",
    "directions": "Blend the melted chocolate and milk. Gradually mix in the water, vanilla, and pudding mix, and whisk until smooth. Fold in the heavy cream. Frost the cake immediately, and chill at least 30 minutes before serving."
  },
  {
    "id": id++,
    "title": "Fried egg",
    "ingredient1": "1 egg",
    "imageUrl":"https://www.bhg.com.au/cdnstorage/cache/b/b/d/c/b/0/xbbdcb0c3820b78995688479f1dcf81fa1c50dfaf.jpg.pagespeed.ic.XQMI5E9Num.webp",
    "directions": "fry egg on a frying pan."
  },
  {
    "id": id++,
    "title":"Balsamic Ravioli",
    "ingredient1":"1/2 cup Walnuts",
    "ingredient2":"25 ounce Ravioli",
    "ingredient3":"2 tbs Butter",
    "ingredient4":"2 tbs Balsamic Vinegar",
    "ingredient5":"1/4 cup Parmesan cheese",
    "imageUrl":"https://images.media-allrecipes.com/userphotos/560x315/3851223.jpg",
    "directions":"Toast walnuts in a skillet over medium heat; cook and stir until browned and fragrant, 8 to 10 minutes. Remove from skillet. Fill a pot with lightly salted water and bring to a rolling boil; stir in ravioli and return to a boil. Cook uncovered, stirring occasionally, until the ravioli float to the top and the filling is hot, 3 to 5 minutes. Drain. Warm butter in a skillet over medium heat until slightly brown, about 1 minute. Add balsamic vinegar; cook and stir until melted and combined, 1 to 2 minutes. Stir in ravioli; mix until combined. Top with walnuts and Parmesan cheese."
  },
  {
    "id": id++,
    "title":"Easy Chorizo Street Tacos",
    "ingredient1":"1 Chorizo sausage link",
    "ingredient2":"2 tbs chipotle peppers",
    "ingredient3":"4 corn tortillas",
    "ingredient4":"2 tbs chopped onion",
    "ingredient5":"2 tbs chopped cilantro",
    "imageUrl":"https://images.media-allrecipes.com/userphotos/560x315/4504506.jpg",
    "directions":"Mix chorizo and chipotle peppers in adobo sauce together in a bowl. Heat a skillet over medium-high heat; add chorizo mixture and cook until crisp, 5 to 7 minutes. Transfer chorizo to a plate, reserving grease in the skillet. Heat tortillas in the reserved grease in skillet over medium heat until warmed, 1 to 2 minutes per side. Stack 2 tortillas on top of each other for each taco. Fill with chorizo, onion, and cilantro."

  }

]

module.exports = {
  get: (req, res) => {
    if(req.query.title){
      let {title} = req.query;
        res.send(recipes.filter(recipe => recipe.title.includes(title)))
      } else {
    
    res.send(recipes)
    }
  },
 
  create: (req, res) => {
    let recipe = req.body;
    recipe.id = id++;
    recipes.push(recipe)
    res.send(recipes)
  },
  update: (req, res) => {
    let {id} = req.params;
    let userData = req.body;
    userData.id = id
    let index = recipes.findIndex(recipe => +recipe.id === +id)
    recipes.splice(index, 1, userData)
    res.send(recipes)
  },
  delete: (req, res) => {
    let {id} = req.params;
    let index = recipes.findIndex(recipe => +recipe.id === +id)
    recipes.splice(index, 1)
    res.send(recipes)
  }
}