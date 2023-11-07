import express, { Request, Response } from 'express';
import multer from 'multer';
import { Word } from './classes.js';

const PORT = 8126;

const app = express();

const uploads = multer({ storage: multer.memoryStorage() });

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

app.post('/api/words', uploads.single('files'), (req: Request, res: Response) => {
	if (req.file && req.file.buffer.toString().length > 0) {
		const stringList = req.file.buffer
			.toString()
			.replaceAll(/[^a-zA-Z\d\s]|\band\b|\bor\b|\bthe\b|\bof\b|\ba\b/g, '')
			.split(' ');

		const words = stringList.reduce((arr: Word[], w: string) => {
			if (arr.some((e: any) => e.text == w)) {
				arr[arr.findIndex((ee: Word) => ee.text == w)].value++;
			} else {
				arr.push(new Word(w));
			}
			return arr;
		}, []);

		res.json(words);
	} else {
		res.sendStatus(400);
	}
});

app.all('*', (_req: Request, res: Response) => {
	res.status(404);
	res.send('Not Found');
});

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
