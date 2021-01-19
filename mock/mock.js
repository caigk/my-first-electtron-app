
const express = require('express');

// 参见：https://www.expressjs.com.cn/4x/api.html#req.body
// create application/json parser
const jsonParser = express.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = express.urlencoded();

// 打包api结果
const packaging = (data) => ({ success: true, data });

const fileInfo = {
	fileName: '测试.tex',
	path: 'a/d/b/测试.tex',
	content: "adfafdafafda\nfdafafddfdafdf \n"
};

function Mock(app) {
	app.get('/test', function (req, res) {
		res.json({ aaa: '111' });
	});

	app.get('/open', function (req, res) {
		const data = {
			...fileInfo,
			content: fileInfo.content + Date.now().toString()
		};
		res.json(data);
	});

	app.post('/save', jsonParser, function (req, res) {
		console.log('mock /save  >>body');
		console.table(req.body);
		const {
			fileName = fileInfo.fileName,
			path = fileInfo.path
		} = req.body;

		const data = packaging({ fileName, path });
		console.log('mock /generate  >>response');
		console.log(data);
		res.json(data);
	});


	app.post('/generate', jsonParser, function (req, res) {
		console.log('mock /generate  >>body');
		console.table(req.body);
		const {
			fileName = fileInfo.fileName,
			path = fileInfo.path
		} = req.body;

		const data = packaging({ fileName, path });
		console.log('mock /save  >>response');
		console.log(data);
		res.json(data);
	});
}

module.exports = Mock;