const controller = require('../controller/');
const isAuth = require('../utils/isAuth');
const router = require('express').Router();


router.get('/', controller.job.get);
router.get('/:id', controller.job.getOne);
router.get('/myjobs/:user', controller.job.getByCreator);


router.post('/',  controller.job.post);


router.put('/:id', controller.job.put);
router.delete('/:id', controller.job.delete);



module.exports=router;