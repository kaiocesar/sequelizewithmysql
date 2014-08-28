var express = require('express')
	, routes = require('./routes')
	, user = require('./routes/user')
	, task = require('./routes/task')
	, path = require('path')
	, http = require('http')
	, db = require('./models')
	, methodoverride  = require('method-override');

var app = express();

app.set('view engine','ejs');
app.set('views', __dirname + "/views");
app.set('port', process.env.PORT || 1337);

app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());
app.use(express.urlencoded());
app.use(methodoverride()); // deprecated - npm install method-override
app.use(app.router);

app.get('/', routes.index);
app.get('/users/create', user.create);
app.get('/users/:user_id/tasks/create', task.create);
app.get('/users/:user_id/tasks/:task_id/destroy', task.destroy);

app.listen(app.get('port'), function(){
	console.log("Listen on port:"+ app.get('port'));
});