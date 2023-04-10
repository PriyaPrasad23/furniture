const mongoose = require("mongoose");
require('mongoose-type-url');

mongoose.connect("mongodb://localhost:27017/adminPortal", {useNewUrlParser:true});

const productsSchema = new mongoose.Schema({
    name : String,
    catergory: String,
    description: String,
    stock: Number,
    image: String
});

const Product = mongoose.model("Product", productsSchema);

const Product1 = new Product({
    name : "Royalok 3 seater Sofa",
    catergory: "Sofa",
    description: "3 seater sofa, Fabric -leather, colour -Black",
    stock :5,
    image: "https://royaloakindia.com/media/catalog/product/r/o/royaloak-miami-american-fabric-sofa-1s-1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=250&width=400&canvas=400:250"
});
const Product2 = new Product({
    name : "Royalok single seater Sofa",
    catergory: "Sofa",
    description: "Single seater sofa, Fabric -leatherite, colour -Red",
    stock : 5,
    image: "https//royaloakindia.com/media/catalog/product/r/o/royaloak-conor-sofa-chair-1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=250&width=400&canvas=400:250"
});

const defaultProducts = [Product1, Product2];



exports.insert = function() {Product.insertMany(defaultProducts)
.then(function(){
    console.log("Succesfully added product in database");

})
.catch(function(err){
    console.log(err);
})}