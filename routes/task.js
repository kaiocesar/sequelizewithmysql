exports.create = function(req, res){
	res.render('task/create');
};

exports.destroy = function(req, res) {
	res.send("Destroy task");
};