const express = require('express');
let app = express();
const port = 4040;
const RecipesCtrl = require("./controllers/recipes")
const ShopCtrl = require("./controllers/shoppinglist")

app.use(express.json())


app.get("/api/recipes", RecipesCtrl.get)
app.post("/api/recipes", RecipesCtrl.create)
app.put("/api/recipes/:id", RecipesCtrl.update)
app.delete("/api/recipes/:id", RecipesCtrl.delete)
app.get("/api/list", ShopCtrl.get)
app.post("/api/list", ShopCtrl.create)

app.listen(port, ()=>{
  console.log("I am listening at port", port)
});


