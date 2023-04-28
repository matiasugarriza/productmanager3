const express = require('express')
const ProductManager = require("./ProductManager")

const app = express()


app.get('/products', (req, res) => {
    let manager = new ProductManager("./products.json")
    const products = manager.getProducts()
    products.then(product => {
        console.log(product)
        let response = JSON.parse(product)
        res.send({menssage:"Productos", data:response})
    }).catch(err => {
        console.log(err)
    })
})

app.get('/product/:id', (req, res) => {
    let manager = new ProductManager("./products.json")   
    let id = req.params.id
    const productById = manager.getProductById(id)
    productById.then(product => {
        console.log(product)
        let response = JSON.parse(product)
        res.send({menssage:"Productos", data:response})
    }).catch(err => {
        console.log(err)
    })
})  

app.listen(8080, () => {

})