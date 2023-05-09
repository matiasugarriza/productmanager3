const express = require('express')
const ProductManager = require("./ProductManager")

const app = express()


app.get('/products', (req, res) => {
    let manager = new ProductManager("./products.json")
    const products = manager.getProducts()
    products.then(product => {
        let response = JSON.parse(product)
        res.send({menssage:"Productos", data:response})
    }).catch(err => {
        console.log(err)
    })
})

app.get('/product/:id', (req, res) => {
    let manager = new ProductManager("./products.json")   
    let id = req.params.id
    let productRes = manager.getProductById(id)
    productRes.then(product => {
        let response = product
        res.send({menssage:"Productos", data:response})
    }).catch(err => {
        console.log(err)
    })
})  

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})