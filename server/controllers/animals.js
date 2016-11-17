var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
module.exports = {

index: function(req,res){
	 Animal.find({},function(err, animals){
    	console.log(animals)
    	console.log("***********")
    	res.render('index',{animals:animals});
    })

},

show_one: function(req,res){
	 Animal.findOne({_id: req.params.id}, function(err, animals) {
	 // Retrieve 1 object
	 // This code will run when the DB is done attempting to retrieve 1 record.
	 console.log(animals)
	 res.render('show',{animals:animals});
	})  

},
destroy: function(req,res){
	Animal.remove({_id: req.params.id}, function(err){
 		if(err){
			console.log('something went wrong');
			console.log(id)
		}else{
			console.log('successfully deleted a user');
			res.redirect('/')
		}
})
},
edit_one: function(req,res){

	console.log("POST DATA",req.body);
	Animal.findOne({_id: req.params.id}, function(err, animals){
		console.log(animals);
		console.log("***********")
		 animals.name = req.body.name;
		 animals.save({_id: req.params.id}, function(err){
		 	if(err){
		 		console.log("error");
		 	}
		 	else{
		 		console.log("You have successfully saved your info")
		 		 res.redirect('/');
		 	}		     
		 })
		})

},
edit: function(req,res){

	Animal.findOne({_id: req.params.id}, function(err, animals) {
		console.log(animals)
	 // Retrieve 1 object
	 // This code will run when the DB is done attempting to retrieve 1 record.
	 res.render('edit',{animals:animals});
	})

},
create_one: function(req,res){

	console.log("POST DATA",req.body);

	var animal = new Animal({name:req.body.name});
	animal.save(function(err){
		if(err){
			console.log('something went wrong');
		}else{
			console.log('successfully added a user');
			res.redirect('/')
		}
	})

}


}