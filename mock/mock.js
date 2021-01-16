function Mock(app) {
	app.get('/test', function(req, res) {
	  res.json({ aaa: '111' });
	});
  }
  
  module.exports = Mock;