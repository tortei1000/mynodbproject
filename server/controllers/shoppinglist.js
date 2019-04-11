
const shoppingList = []

module.exports = {
  get: (req, res) => {
    res.send(shoppingList)
  },

  create: (req, res) => {
    console.log(shoppingList, "before")
    req.body.map((object)=>{
      shoppingList.push(object)
    })
    res.send(shoppingList)
    console.log(shoppingList, "after")
  },
  delete: (req, res) => {
    let {id} = req.params;
    let index = items.findIndex(item => +item.id === +id)
    items.splice(index, 1)
    res.send(items)
  }
}

