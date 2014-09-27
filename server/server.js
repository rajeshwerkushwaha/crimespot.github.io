var express = require('express'),
    app = express();

app.get('/', function(req, res){
  res.sendfile('./client/views/index.html')
});

app.use(express.static('./client'));

app.listen(3000, function(){
  console.log('Server is ready to listen...');
})