import app from './app';

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* tslint:disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* tslint:enable no-console */
});
