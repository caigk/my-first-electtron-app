function Mock(app) {
	app.get('/test', function(req, res) {
	  res.json({ aaa: '111' });
	});

	app.get('/open', function(req, res) {
		const data = {
			fileName: '测试.tex',
			path: 'a/d/b',
			content: "adfafdafafda\nfdafafddfdafdf \n"+Date.now().toString()  
		};
		res.json(data);
	  });
  }
  
  module.exports = Mock;