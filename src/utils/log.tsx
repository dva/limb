import debug from 'debug';

const log = (component: string, value: any, ...args: any) => {
  const logger = debug(`app:${component}`);
  logger(value, ...args);
};

export default log;
