import get from 'lodash/get';

const toLocal = (translatedString, replaceObject) =>
  Object.entries(replaceObject).reduce((acc, [key, val]) => {
    if (typeof val === 'string' || typeof val === 'number') {
      return acc.split(`$\{${key}}`).join(val);
    }
    return acc;
  }, translatedString);

export const getLocalizedContent = (obj, lan) => {
  let tempObj = { ...obj };
  tempObj = { ...tempObj, ...get(tempObj, `content.${lan}`) };
  delete tempObj.content;
  return tempObj;
};

export default toLocal;
