var express = require('express')
var router = express.Router();
var methods = require('../persons/controllers');

router.get('/',(req,res,next)=>{
    console.log('working')
})

router.post('/',
    methods.insertDetails);
router.get('/:id', 
    methods.getDetails);
router.put('/:id',
    methods.updateDetails);
router.delete('/:id',
    methods.deleteDetails);

module.exports=router;