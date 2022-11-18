const express = require("express")
const fileManagement = require ("../utils/module.js")
const products = express.Router();

products.get("/", async (request, response)=>{
    const productos = await fileManagement.buscarTodos()
    response.send(productos)
})

products.get("/:id", async(request, response)=>{
    const {id} = request.params;
    const producto = await fileManagement.buscarPorId(id)
    if (producto) {
        response.status(200).json({
            message: "Producto encontrado",
            product: producto
        })
    } else {
        response.status(404).json({
            message:"Producto no encontrado"
        })
    }
})

products.post("/",async(request,response)=>{
    const newProduct = request.body;
    const productos = await fileManagement.agregarProducto(newProduct);
    response.status(200).json({
        message:"producto creado",
        response: productos
        })
})
    
products.put("/:id", async(request,response)=>{
    const {id} = request.params;
    const newInfo = request.body;
    const newProducto = await fileManagement.actualizarPorId(id,newInfo);
    if (newProducto){
        response.status(200).json({
            message:`El producto con el id ${id} fue actualizado`,
            response: newProducto})
        } else {
        response.status(404).json({
            message:"Producto no borrado"
        })
    }
})

products.delete("/:id", async(request, response)=>{
    const {id} = request.params;
    const producto = await fileManagement.borrarPorId(id)
    if (producto) {
        response.status(200).json({
            message: "Producto borrado",
            id: id
        })
    } else {
        response.status(404).json({
            message:"Producto no borrado"
        })
    }
})

module.exports = products;