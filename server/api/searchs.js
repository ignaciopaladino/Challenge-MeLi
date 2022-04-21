const express = require("express");
const router = express.Router();
//const axios = require('axios');

const querys = require('./querys');

const cantResults = 4;
const author = {
    name: "Juan Ignacio",
    lastname: "Paladino"
};
  
router.get("/", (req, res, next) => { 
    querys.search(req.query.q)
    .catch(error => {
        res.status(401).json(error);
    })     
    .then(response => {
        const categories = [];
        if(response.filters.length!=0){
            response.filters[0].values[0].path_from_root.forEach((cats) => {
                categories.push(cats.name);
            });
        }
        const items  = [];
        if(response.results.length!=0){
            response.results.slice(0, cantResults).forEach((item) => {
                items.push({
                    id: item.id,
                    title: item.title,
                    price: {
                      currency: item.currency_id,
                      amount: parseInt(item.price.toString().split('.')[0]),
                      decimals: parseInt(item.price.toString().split('.')[1]) 
                    },
                    picture: item.thumbnail,
                    condition: item.condition,
                    free_shipping: item.shipping.free_shipping,
                    state: item.address.state_name                   
                });
            });
        }                
        const result = {
            author,
            categories,
            items
        };
        res.status(200).json(result);         
    }); 
});

router.get("/:idProducto", (req, res, next) => { 
    querys.itemDetails(req.params.idProducto)
    .catch(error => {
        res.status(401).json(error);
    })     
    .then(response => {
        //console.log(response.data);
        //console.log(response);
        //const item = response[0]; const description = response[1];
        const [item,description,category] = response;
        const categories = [];
        if(category.path_from_root.length!=0){
            category.path_from_root.forEach((cats) => {
                categories.push(cats.name);
            });
        }        
        //console.log(item)
        const result = {
             author,
             categories,
             item:{
              id: item.id,
              title: item.title,
              price: {
                  currency: item.currency_id,
                  amount: parseInt(item.price.toString().split('.')[0]),
                  decimals: parseInt(item.price.toString().split('.')[1]) 
              },
              picture: item.thumbnail,
              //picture: item.pictures[0].url,
              condition: item.condition,
              free_shipping: item.shipping.free_shipping,
              sold_quantity: parseInt(item.sold_quantity),
              description: description.plain_text
             }               
        };          
        res.status(200).json(result);  
    }); 
});

module.exports = router;