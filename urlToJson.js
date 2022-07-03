const inData = `user.name.firstname=Bob&user.name.lastname=Smith&user.
  favoritecolor=Light%20Blue&experiements.theme=dark`;

const urlToJson = (str) => {
  str = decodeURI(str).split("&");

  const obj = {};

  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    const [key, value] = item.split("=");
    const keys = key.split(".");

    let cur = obj;

    for (let index = 0; index < keys.length; index++) {
      const item = keys[index];
      const isLast = keys.length === index + 1;

      if (isLast) {
        cur[item.trim()] = value;
        cur = cur[item.trim()];
        break;
      }

      if (cur[item.trim()]) {
        cur[item.trim()] = cur[item.trim()];
      } else {
        cur[item.trim()] = {};
      }

      cur = cur[item.trim()];
    }
  }

  return obj;
};

console.log(urlToJson(inData));
