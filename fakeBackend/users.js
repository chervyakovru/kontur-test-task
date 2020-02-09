const { createGuid } = require("../utils/guid");

const users = [
  {
    id: createGuid(),
    email: "kdawson@gmail.com",
    name: "Кирилл Давсон"
  },
  {
    id: createGuid(),
    email: "weazelman@gmail.com",
    name: "Марк Визельман"
  },
  {
    id: createGuid(),
    email: "klaudon@hotmail.com",
    name: "Марк Визельман"
  },
  {
    id: createGuid(),
    email: "vganesh@outlook.com",
    name: "Виктор Ганеш"
  },
  {
    id: createGuid(),
    email: "ebassi@yahoo.com",
    name: "Ева Базиль"
  },
  {
    id: createGuid(),
    email: "dmiller@sbcglobal.net",
    name: "Диана Миллер"
  }
];

module.exports = { users };
