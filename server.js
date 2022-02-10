const express = require('express');
const app = new express();
const products = require('./router/productos');
const cart = require('./router/carrito')

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", products);
app.use("/api/carrito", cart);
//settings
app.set("port", process.env.PORT || 8080);

//error
app.use(function(req, res, next) {
    res.status(404);
    res.json({
        status:404, 
        title:"Not Found",
        msg:"Route not found"});
    next();
   });

//server 
app.listen(app.get("port"), () => console.log(`server running on ${app.get("port")}`) );
