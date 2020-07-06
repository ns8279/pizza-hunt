const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes.js');
const commentRoutes = require('./comment-routes.js');

//add prefix of `/pizzas` to the routes created in `pizza-rotes`
router.use('/pizzas', pizzaRoutes);

//add prefix of '/comments' to the routes created in 'comment-routes'
router.use('/comments', commentRoutes);

module.exports = router;