const {Schema,model}=require('mongoose');
const schema=new Schema({
	aoid:{type:String},
	date:{type:Date},
	avg_price:{type:Number}
});

module.exports=model('Orders',schema);
