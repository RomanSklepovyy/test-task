const deleteObjectKeys = (object, keys) => (
  Object.keys(object).reduce((newObject, key) => {
    // eslint-disable-next-line no-param-reassign
    if (!keys.includes[key]) newObject[key] = object[key];
    return newObject;
  }, {}));

export default deleteObjectKeys;
