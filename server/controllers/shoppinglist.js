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
}

