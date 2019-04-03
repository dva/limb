import debug from 'debug';

export const log = (component: string, value: any, ...args: any) => {
  const logger = debug(`app:${component}`);
  logger(value, ...args);
};
