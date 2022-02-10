const express = require('express');
const router = express.Router();
const products = require('../api/Products');


router.get('/:id?', (req, res)=>{
    if(req.params.id){
        res.send(JSON.stringify(products.getItemById(parseInt(req.params.id))));
    } else {
        res.send(JSON.stringify(products.getItems()));
    }
})

router.post('/', (req, res)=>{

        let item = req.body;
        res.status(200).send(JSON.stringify(products.addItem(item)));
})

router.put('/:id', (req, res)=>{
        products.updateItemById(req.body, parseInt(req.params.id));
        res.send(`id: ${req.params.id} actualizado`)
    
})

router.delete('/:id', (req, res)=>{
    products.deleteItemById(parseInt(req.params.id));
    res.send('Item eliminado')
})

module.exports = router;
