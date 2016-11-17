var animals = require('../controllers/animals.js')
module.exports = function(app){
	app.get('/', function(req, res) {
   animals.index(req,res)
    
})

app.get('/mongooses/new', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    	console.log('INSIDE OF THE /NEW GET ROUTE')
    	res.render('new');
    
    
})


app.get('/mongooses/:id', function(req, res) {
    console.log('mongooses/:id GET route. Rendering SHOW page')
   animals.show_one(req,res)  	
})


app.post('/mongooses/:id/destroy', function(req, res) {
    animals.destroy(req,res)
    	
})


app.post('/mongooses/:id',function(req,res){
	console.log("POST DATA",req.body);
	animals.edit_one(req,res)
})
		

app.post('/mongooses/:id/edit', function(req, res) {
	animals.edit(req,res)
	
})


app.post('/mongooses',function(req,res){
	console.log("POST DATA",req.body);

	animals.create_one(req,res)
})

}