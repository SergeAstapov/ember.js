import Cache from './cache';

const firstDotIndexCache = new Cache(1000, key => key.indexOf('.'));

export function isPath(path) {
  return firstDotIndexCache.get(path) !== -1;
}
