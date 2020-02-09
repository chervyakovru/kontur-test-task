const { parse } = require("url");
const MockAdapter = require("axios-mock-adapter");
const axios = require("axios");
const { users } = require("./users");
const { feedback } = require("./feedbacks");

const instance = axios.create();
const mock = new MockAdapter(instance);

const extractData = ({ data, params, url }) => {
  const { query } = parse(url, true);
  const parsedData = data && JSON.parse(data);

  return { ...query, ...params, ...parsedData };
};

mock.onGet(/users.*/).reply(config => {
  let parsed;

  try {
    parsed = extractData(config);
  } catch (e) {
    return [400, { message: "Неверный формат данных" }];
  }

  if (parsed.ids && parsed.ids.includes) {
    const foundUsers = users.filter(({ id }) => parsed.ids.includes(id));
    return [200, { users: foundUsers }];
  }

  if (parsed.id) {
    const foundUsers = users.filter(({ id }) => id === parsed.id);
    return [200, { users: foundUsers }];
  }

  return [400, { message: "Идентифиактор пользователя не указан" }];
});

mock.onGet(/feedback.*/).reply(config => {
  let parsed;

  try {
    parsed = extractData(config);
  } catch (e) {
    return [400, { message: "Неверный формат данных" }];
  }

  if (!parsed.product) {
    return [400, { message: "Идентификатор продукта не указан" }];
  }

  const feedbackForProduct = feedback[parsed.product];

  if (feedbackForProduct) {
    return [200, { feedback: feedbackForProduct }];
  }

  return [404, { message: "Такого продукта не существует" }];
});

module.exports = { axios: instance };
