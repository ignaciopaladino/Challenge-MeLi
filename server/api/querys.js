const axios = require('axios');
  
exports.search = async q => { 

    return new Promise((resolve, reject) => {

        axios.get('https://api.mercadolibre.com/sites/MLA/search?q='+q)
        .catch(error => {
            error => console.log(error)
        })    
        .then(response => {
            resolve(response.data);
        });

    });

};

exports.itemDetails = idProducto => {

    return new Promise((resolve, reject) => {    

        const endpoints = [
            'https://api.mercadolibre.com/items/'+idProducto, 
            'https://api.mercadolibre.com/items/'+idProducto+'/description'
        ];

        axios.all(endpoints.map((endpoints) => axios.get(endpoints)))
        .catch(error => {
            error => console.log(error)
        })   
        .then(
            axios.spread((items, description) => {
                //console.log({ item, description });
                //response.data
                axios.get('https://api.mercadolibre.com/categories/'+items.data.category_id)
                .catch(error => {
                    error => console.log(error)
                })    
                .then(category => {
                    resolve([items.data, description.data, category.data]);
                });                             
            })
        );

    });    

}