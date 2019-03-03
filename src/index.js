import fs from 'fs';
import api from './api';
import log from './logger';
// import mongoose from './bootstrap';

const { PORT=3000, APP_NAME='API'} = process.env;
api.listen(PORT, () => log.info(`${APP_NAME} is up & running on port: ${PORT}`));
