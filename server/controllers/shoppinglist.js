let id = 1;
const shoppingList = [
  {
    
    item: "",
  }
]

module.exports = {
  get: (req, res) => {
    res.send(shoppingList)
  },

  create: (req, res) => {
    for(let key in req.body){
      if(key.includes("ingredient")){
        shoppingList.push({item:req.body[key], id:id++})
      }
      
    }
    res.send(shoppingList)
  },
  delete: (req, res) => {
    let {id} = req.params;
    let index = shoppingList.findIndex(item => +item.id === +id)
    shoppingList.splice(index, 1)
    res.send(shoppingList)
  }
}

