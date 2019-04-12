let id = 1;
const shoppingList = [
  {
    id: id++,
    item: "",
  }
]

module.exports = {
  get: (req, res) => {
    res.send(shoppingList)
  },

  create: (req, res) => {
    console.log("look at this",req.body)
    
    for(let key in req.body){
      if(key.includes("ingredient")){
        shoppingList.push({item:req.body[key], id:id++})
      }
      
    }

    
    res.send(shoppingList)
  },
  delete: (req, res) => {
    console.log("req.body", req.body)
    //let {id} = req.body;
    //let index = items.findIndex(item => +item.id === +id)
    //items.splice(index, 1)
    res.send("here")
  }
}

