export const get = (source, path) => {
  if (!isValidPath(path)) return source;

  let index = 0;
  while (!!source && index < path.length) {
    source = source[path[index]];
    index++;
  }
  return source;
};

export const set = (source, path, val) => {
  if (!isValidPath(path)) return;
  let current = { ...source };

  path.forEach((key, index) => {
    const isArrayKey = key.slice(-2) === '[]';
    const pathKey = isArrayKey ? key.slice(0, -2) : key;

    const currentKeyIsNotAnArray =
      Object.prototype.toString.call(current[pathKey]) !== '[object Array]';

    if (isArrayKey && currentKeyIsNotAnArray) {
      current[pathKey] = [];
    }

    if (index === path.length - 1) {
      isArrayKey ? current[pathKey].push(val) : (current[pathKey] = val);
    } else {
      if (!current[pathKey]) current[pathKey] = {};
      current = current[pathKey];
    }
  });

  return Object.assign(source, current);
};

const isValidPath = path => {
  if (Array.isArray(path)) return true;
  console.error('[path] must be an array.');
  return false;
};

/**
 * Returns true if entry is an object and it is empty
 *
 * @param {object} entry - the object to validate
 * @returns {boolean} - is object empty?
 */
export const isObjectEmpty = entry =>
  entry?.constructor === Object && Object.keys(entry).length === 0;
