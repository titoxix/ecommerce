const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'EXPRESS IS CONNECTED TO REACT' });
});



app.get('/api/items', (req, res) => {
    const { q } = req.query;
    request.get("https://api.mercadolibre.com/sites/MLA/search?q=" + q, (error, response, body) => {

        if (!error && response.statusCode == 200) {
            const bodyJson = JSON.parse(body);
            const items = bodyJson.results.slice(0, 4);
            let categories;
            bodyJson.filters.find(item => item.id === "category")
                .values.forEach(item => {
                    categories = item.path_from_root.map(cat => cat.name);
                })
            const products = {
                "author": {
                    "name": "Matias",
                    "lastname": "Martínez"
                },
                "categories": categories,
                "items": items.map(item => {
                    return {
                        "id": item.id,
                        "title": item.title,
                        "price": {
                            "price": item.price,
                            "currency": item.currency_id,
                            "amount": item.available_quantity,
                            "decimals": 1
                        },
                        "picture": item.thumbnail,
                        "condition": item.condition,
                        "free_shipping": item.free_shipping
                    }
                })
            };

            res.status(200).json({
                data: products,
                message: 'item listed',
                para: req.query,
            })
        }
    });
});

app.get('/api/items/:id', (req, res) => {
    const { id } = req.params;
    request.get(`https://api.mercadolibre.com/items/${id}`, (error, response, body) => {
        const item = JSON.parse(body);
        if (!error && response.statusCode == 200) {
            request.get(`https://api.mercadolibre.com/items/${id}/description`, (error, response, body) => {
                const description = JSON.parse(body);
                if (!error && response.statusCode == 200) {
                    const product = {
                        "author": {
                            "name": "Matias",
                            "lastname": "Martínez"
                        },
                        "item": {
                            "id": item.id,
                            "title": item.title,
                            "price": {
                                "price": item.price,
                                "currency": item.currency_id,
                                "amount": item.available_quantity,
                                "decimals": 1
                            },
                            "picture": item.pictures[0].url,
                            "condition": item.condition,
                            "free_shipping": item.shipping.free_shipping,
                            "sold_quantity": item.sold_quantity,
                            "description": description.plain_text

                        }
                    };
                    res.status(200).json({
                        data: product,
                        message: 'item detail',
                        para: req.query,
                    })

                }
            });
        }
    });
});