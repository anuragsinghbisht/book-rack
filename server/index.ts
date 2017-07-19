import app from './app';
import config from './config/index.config';
import * as mongoose from 'mongoose';

mongoose.connect(config.db.url);

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});
