const express = require("express")
const products = require("./routes/products");
const carritos = require("./routes/carritos");
const path = require('path');
const PORT = 8080 || process.env.PORT
const app = express();
require('dotenv').config()


const database = process.env.DATABASE || "mongodb"

if (database == "mongodb") {
    let uri = 'mongodb://localhost:27017/ecommerce'
    if (process.env.MONGO_PASS) {
        uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.8aaoc.mongodb.net/ecommerce?`
    }
    const mongoose = require('mongoose');
    mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, error=>{
        if(error) throw new Error(`connection failed ${error}`);
        console.log("conexion exitosa")
    });
} 

app.listen(PORT,()=>console.log("server listening on port: " + PORT));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/static', express.static(path.join(__dirname, 'public')))

let admin = false;

const verificarRol = (req,res,next)=>{
    if(admin){
        next();
    } else{
        res.status(403).json({ error : -1, descripcion: `ruta ${req.url} método ${req.method} no autorizada`}
        )
    }
}

app.get("/login",(req,res) =>{

    if (!admin){
        admin = true
        res.status(200).json({message: "Bienvenido admin."})
    } else {
        admin = false
        res.status(200).json({message: "Bye!"})
    }

} )


app.use("/api/productos", verificarRol, products)
app.use("/api/carrito", carritos)

app.get("/*", (req,res) =>{
    res.status(404).json({ error : -2, descripcion: `ruta ${req.url} método ${req.method} no implementada`})
})