let id = 1;
const shoppingList = [
  {
    "id": id++,
    "item": ""  
  }
]

module.exports = {
   get: (req, res) => {
    res.send(shoppingList)
  },

  create: (req, res) => {
    let item = req.body;
    item.id = id++;
    shoppingList.push(item)
    res.send(shoppingList)
  },
}

