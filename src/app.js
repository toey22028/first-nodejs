let express = require('express');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

require('./routes')(app)

app.put('/plus/:number', function(req,res){

    let number = 5;
    console.log(number+1+req.params.person);
    res.send('Number is' + req.params.person);

})

app.put('/fac/:number', function(req,res){

    let number = 5;
    console.log(120+req.params.person);
    res.send('Number is' + req.params.person);

})

app.put('/min/:number', function(req,res){

    let number = 5;
    console.log(number-1+req.params.person);
    res.send('Number is' + req.params.person);

})

app.put('/fac/:number', function(req,res){

    let number = 5;
    console.log(120+req.params.person);
    res.send('Number is' + req.params.person);

})

let port = 8081;

app.listen(port, function(){
    console.log('server running on ' + port);
    
})