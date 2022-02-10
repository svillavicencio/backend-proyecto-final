const express = require('express');
const router = express.Router()
const carts = require('../api/Cart');


router.post('/', (req, res)=>{
    res.status(200).send(JSON.stringify(carts.createCart()))
})

router.delete('/:id', (req, res) => {
    carts.deleteCart(parseInt(req.params.id));

    res.status(200).send(JSON.stringify({msg: 'success'}));
})


router.get('/:id/productos', (req, res)=>{
    res.status(200).send(JSON.stringify(carts.getProductByCartId(parseInt(req.params.id))));
})

router.post('/:id/productos', (req, res)=>{
   
    let item = req.body
    carts.addProductToCart(parseInt(req.params.id), item);
    res.status(200).send(JSON.stringify({msg: 'success'}));
})

router.delete('/:id/productos/:id_prod', (req, res)=>{
    carts.deleteProductFromCart(parseInt(req.params.id), parseInt(req.params.id_prod))
    res.status(200).send(JSON.stringify({msg: 'success'}))

})


module.exports = router;
