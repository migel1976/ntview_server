const {Router}=require('express');
const router=Router();

const Orders=require('../models/Orders');

router.get('/',(req,res)=>{
	const aoid=req.query.aoid;
	Orders.find({aoid:aoid},(err,item)=>{
		if(err)return res.status(400).send(err);
		console.log('itme is',item);
		res.send(item);
	})
});

router.post('/add',
	async(req,res)=>{
		try{
			Orders.insertMany(req.body);
			res.status(201).json({message:'Data was save success'});
			console.log('data was succes added in table ' + req.body);
		}
		catch(e){
			res.status(500).json({message:'Error while during data: ' + e});
			console.log('was error while write data in db ' + e );
		}
	});

module.exports=router;

