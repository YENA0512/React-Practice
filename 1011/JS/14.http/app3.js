import express from 'express';

const app = express();

const options = {
	dotfiles: 'ignore',
	etag: false,
	index: false,
	maxAge: '1d',
	redirect: false,
	setHeaders: function (res, path, stat) {
		res.set('x-timestamp', Date.now());
	},
};

app.get('/', (req, res, next) => {
	res.send('<h1>루트 페이지 </h1>');
});

app.use(express.static('public', options));
app.listen(800);
