const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes.js');

//add prefix of `/pizza` to the routes created in `pizza-rotes`
router.use('/pizzas', pizzaRoutes);

module.exports = router;