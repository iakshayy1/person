var Person = require('./model');

const methods={
     insertDetails:(req,res,next)=>{
        Person.create(req.body,(err,person)=>{
            if(err){
                return res.send(err)
            }else if(!person){
                return res.send({error:true,message:'No found'})
            }
            return res.send({error:false, person})
        })
    },
    getDetails:(req,res,next)=>{
        Person.findById({_id:req.params.id},(err,person)=>{
            if(err){
               return res.send('errr');
            }else if(!person){
               return res.send({error:true,message:'not found'})
            }
            return res.send({err:false,person})
        })
    },    
    updateDetails:(req,res,next)=>{
        Person.findByIdAndUpdate({_id:req.params.id},req.body,(err,person)=>{
            if(err){
                return res.send(err);
            }
            else if(!person){
                return res.send({error:true, message: 'not found item for this id'});
            }
            return res.send({error:false,person})
        })
    },
    deleteDetails:(req,res,next)=>{
        Person.remove({_id:req.params.id},(err,person)=>{
            if(err){
                return res.send(err);
            }
            else if(!person){
                return res.send({error:true, message:'Not found item for this id'})
            }
            return res.send({error:false,person})
        })
    }
}

module.exports=methods;