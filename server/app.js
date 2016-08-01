import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import routes from './routes';
import config from './config';

const app = express();
const port = 3000;

app.set('appPath', path.join(config.root, 'client'));
app.use(express.static(app.get('appPath')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', routes.api);

app.route('/*')
  .get((req, res) => {
    const appPath = app.get('appPath');
    res.sendFile(path.resolve(`${appPath}/app.html`));
  });

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server running on port ${port}`);
});
