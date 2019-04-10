const express = require('express');
let app = express();
const port = 4040;
const RecipesCtrl = require("./controllers/recipes")

app.use(express.json())


app.get("/api/recipes", RecipesCtrl.get)
app.get("/api/recipes/:id", RecipesCtrl.getRecById)
app.post("/api/recipes", RecipesCtrl.create)
app.put("/api/recipes/:id", RecipesCtrl.update)
app.delete("/api/recipes/:id", RecipesCtrl.delete)

app.listen(port, ()=>{
  console.log("I am listening at port", port)
});


