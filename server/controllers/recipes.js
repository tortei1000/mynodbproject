let id = 1;
const recipes = [
  {
    "id": id++,
    "title": "Mushroom Pork Chops",
    "ingredient1": "4 pork chops",
    "ingredient2": "salt and pepper",
    "ingredient3": "1 pinch garlic salt",
    "ingredient4": "1 onion chopped",
    "ingredient5": "11 ounces cream of mushroom soup",
    "imageUrl": "https://images.media-allrecipes.com/userphotos/560x315/714402.jpg",
    "directions":"Season pork chops with salt, pepper, and garlic salt to taste. In a large skillet, brown the chops over medium-high heat. Add the onion and mushrooms, and saute for one minute. Pour cream of mushroom soup over chops. Cover skillet, and reduce temperature to medium-low. Simmer 20 to 30 minutes, or until chops are cooked through.",
    
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

  },
  {
    "id": id++,
    "title":"Salsa Chicken",
    "ingredient1":"4 chicken breasts",
    "ingredient2":"4 tsp taco seasoning",
    "ingredient3":"1 cup salsa",
    "ingredient4":"1 cup shredded cheddar cheese",
    "ingredient5":"2 tbsp sour cream",
    "imageUrl":"https://images.media-allrecipes.com/userphotos/560x315/4487510.jpg",
    "directions": "Preheat oven to 375 degrees F (190 degrees C). Place chicken breasts in a lightly greased 9x13 inch baking dish. Sprinkle taco seasoning on both sides of chicken breasts, and pour salsa over all. Bake at 375 degrees F (190 degrees C) for 25 to 35 minutes, or until chicken is tender and juicy and its juices run clear. Sprinkle chicken evenly with cheese, and continue baking for an additional 3 to 5 minutes, or until cheese is melted and bubbly. Top with sour cream if desired, and serve."
  },
  {
    "id": id++,
    "title":"Ice Cube",
    "ingredient1":"2 cups water",
    "ingredient2":"2 tbsp water",
    "ingredient3":"",
    "ingredient4":"",
    "ingredient5":"",
    "imageUrl":"https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,w_560,h_315/v1/img/recipes/42/03/98/picFV7OMs.jpg",
    "directions": "Empty the ice cubes that are left in the trays (if there are any left) into the bin. Take the trays over to the sink and fill them with cold water. (Hot water will freeze faster and more clear). Place the water filled ice trays back in the freezer. Replace the ice bin if you had to remove it. Shut the door to the freezer. Be sure to leave for around 4-6 hours at least to make sure it is frozen. If you want to experiment, you can freeze things like fruit infused waters or juices."
  },
  {
    "id": id++,
    "title":"Chicken Cordon Bleu",
    "ingredient1":"4 chicken breasts",
    "ingredient2":"1/4 tsp salt",
    "ingredient3":"1/8 tsp black pepper",
    "ingredient4":"6 slices swiss cheese",
    "ingredient5":"4 slices hame",
    "imageUrl":"https://images.media-allrecipes.com/userphotos/560x315/3508202.jpg",
    "directions": "Preheat oven to 350 degrees F (175 degrees C). Coat a 7x11 inch baking dish with nonstick cooking spray. Pound chicken breasts to 1/4 inch thickness. Sprinkle each piece of chicken on both sides with salt and pepper. Place 1 cheese slice and 1 ham slice on top of each breast. Roll up each breast, and secure with a toothpick. Place in baking dish, and sprinkle chicken evenly with bread crumbs. Bake for 30 to 35 minutes, or until chicken is no longer pink. Remove from oven, and place 1/2 cheese slice on top of each breast. Return to oven for 3 to 5 minutes, or until cheese has melted. Remove toothpicks, and serve immediately."
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