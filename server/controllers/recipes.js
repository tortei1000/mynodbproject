let id = 1;
const recipes = [
  {
    "id" : id++,
    "name": "Chocolate Cream Frosting",
    "ingredient": ["2 ounces Chocolate", "14 ounces Sweetened condensed milk", "1/2 teaspoon Vanilla extract", "4 ounces Instant chocolate pudding mix", "1 cup Heavy cream"],
   "image": "https://images.media-allrecipes.com/userphotos/250x250/733532.jpg",
    "directions": "Blend the melted chocolate and milk. Gradually mix in the water, vanilla, and pudding mix, and whisk until smooth. Fold in the heavy cream. Frost the cake immediately, and chill at least 30 minutes before serving."
  },
  {
    "id": id++,
    "name": "Fried egg",
    "ingredient": ["1 egg"],
    "image":"https://www.bhg.com.au/cdnstorage/cache/b/b/d/c/b/0/xbbdcb0c3820b78995688479f1dcf81fa1c50dfaf.jpg.pagespeed.ic.XQMI5E9Num.webp",
    "directions": "fry egg on a frying pan."
  },

]

module.exports = {
  get: (req, res) => {
    console.log(recipes)
    res.send(recipes)
  },
  getRecById: (req, res) => {
    let {id} = req.params;
    res.send(recipes.find(recipe => +recipe.id === +id))
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