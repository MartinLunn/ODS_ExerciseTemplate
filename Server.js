var express = require ("express");
var app     = express ();

app.use (express.static ("./public"));

app.listen (2402, function(){
  console.log ("Still, you feed us lies from the tablecloth");
});
