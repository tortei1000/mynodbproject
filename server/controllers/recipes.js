let id = 1;
const recipes = [
  {
    "id" : id++,
    "name": "Chocolate Cream Frosting",
    "ingredient": [
     {
        "name":"chocolate",
        "quantity":"2 ounces"
      },
      {
        "name":"sweetened condensed milk",
        "quantity": "14 ounces"
      },
      {
        "name":"vanilla extract",
        "quantity":"1/2 teaspoon"
      },
      {
        "name":"instant chocolate pudding mix",
        "quantity": "4 ounces"
      },
      {
        "name":"heavy cream",
        "quantity": "1 cup"
      },
   ],
   "image": "https://images.media-allrecipes.com/userphotos/250x250/733532.jpg",
    "directions": "Blend the melted chocolate and milk. Gradually mix in the water, vanilla, and pudding mix, and whisk until smooth. Fold in the heavy cream. Frost the cake immediately, and chill at least 30 minutes before serving."
  },
  {
    "id": id++,
    "name": "Fried egg",
    "ingredient": [
      {
        "name": "egg",
        "quantity": "1"
      }
    ],
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