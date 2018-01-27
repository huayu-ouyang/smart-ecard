var express = require('express');
var path = require('path');
var app = express();

var uniqueID = 0 ;
var data = {
    'jason': {
        age: 21,
        date: '6/7/96'
    },
    'mary': {
        //...
    }
}

app.use(express.static(path.join(__dirname, 'smart-ecard/public')));
// all this line does is connect a route to a specific file in public folder

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'smart-ecard/public/index.html'))
});

app.post('/', function(req, res) {
    uniqueID++;
   // var someData;
   // data[someData.name] = someData.information;
    res.redirect('/' + uniqueID);
})

app.get('/:uniqueID', function(req, res) {
    var name = req.params.uniqueID;
    res.sendFile(path.join(__dirname, '..', 'smart-ecard/public/index2.html'))
    //res.json(data[name]);
})

app.listen(8000, function () {
  console.log('Server is running on port 8000');
});
