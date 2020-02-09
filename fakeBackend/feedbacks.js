const {createGuid} = require('../utils/guid')
const {users} = require('./users')

const feedback = {
  extern: [
    {
      id: createGuid(),
      userId: users[0].id,
      message: '',
      date: new Date(2016, 2, 3).valueOf(),
    },
    {
      id: createGuid(),
      userId: users[4].id,
      message: '',
      date: new Date(2018, 10, 2).valueOf(),
    },
    {
      id: createGuid(),
      userId: users[1].id,
      message: 'Ничего не понятно',
      date: new Date(2018, 2, 15).valueOf(),
    },
    {
      id: createGuid(),
      userId: users[2].id,
      message: 'Дороговато',
      date: new Date(2018, 4, 1).valueOf(),
    },
  ],
  diadoc: [
    {
      id: createGuid(),
      userId: users[3].id,
      message: '',
      date: new Date(2016, 2, 3).valueOf(),
    },
    {
      id: createGuid(),
      userId: users[5].id,
      message: '',
      date: new Date(2019, 1, 14).valueOf(),
    },
    {
      id: createGuid(),
      userId: users[1].id,
      message: 'Не смог отправить документ',
      date: new Date(2018, 0, 2).valueOf(),
    },
    {
      id: createGuid(),
      userId: users[1].id,
      message: 'Удобный интерфейс, простой в использовании',
      date: new Date(2018, 0, 1).valueOf(),
    },
    {
      id: createGuid(),
      userId: users[4].id,
      message: 'Cотрудники не умеют работать вообще, за редким исключением гоняют к друг другу. Один говорит одно другой другое',
      date: new Date(2019, 2, 2).valueOf(),
    },
  ],
  puls: [
    {
      id: createGuid(),
      userId: users[1].id,
      message: '',
      date: new Date(2019, 1, 14).valueOf(),
    },
    {
      id: createGuid(),
      userId: users[0].id,
      message: 'Пока сырой продукт',
      date: new Date(2019, 2, 3).valueOf(),
    },
    {
      id: createGuid(),
      userId: users[3].id,
      message: 'Стало проще планировать, нет кассовых разрывов',
      date: new Date(2019, 2, 4).valueOf(),
    },
  ],
  focus: [
    {
      id: createGuid(),
      userId: users[0].id,
      message: 'Очень быстрый поиск, молодцы',
      date: new Date(2017, 2, 3).valueOf(),
    },
    {
      id: createGuid(),
      userId: users[0].id,
      message: 'В последнее время стал тормозить',
      date: new Date(2018, 11, 11).valueOf(),
    },
    {
      id: createGuid(),
      userId: users[1].id,
      message: '',
      date: new Date(2019, 0, 14).valueOf(),
    },
    {
      id: createGuid(),
      userId: users[3].id,
      message: '',
      date: new Date(2018, 1, 14).valueOf(),
    },
  ],
  elba: [],
  zakupki: [
    {
      id: createGuid(),
      userId: users[5].id,
      message: '',
      date: new Date(2019, 1, 14).valueOf()
    },
    {
      id: createGuid(),
      userId: users[5].id,
      message: '',
      date: new Date(2019, 1, 14).valueOf()
    },
    {
      id: createGuid(),
      userId: users[5].id,
      message: '',
      date: new Date(2019, 1, 14).valueOf()
    },
    {
      id: createGuid(),
      userId: users[3].id,
      message: '',
      date: new Date(2016, 2, 3).valueOf()
    },
    {
      id: createGuid(),
      userId: users[5].id,
      message: '',
      date: new Date(2019, 1, 14).valueOf()
    },
    {
      id: createGuid(),
      userId: users[1].id,
      message: 'Не смог отправить документ',
      date: new Date(2018, 0, 2).valueOf()
    },
    {
      id: createGuid(),
      userId: users[5].id,
      message: '',
      date: new Date(2019, 1, 14).valueOf()
    },
    {
      id: createGuid(),
      userId: users[5].id,
      message: '',
      date: new Date(2019, 1, 14).valueOf()
    },
    {
      id: createGuid(),
      userId: users[1].id,
      message: 'Удобный интерфейс, простой в использовании',
      date: new Date(2018, 0, 1).valueOf()
    },
    {
      id: createGuid(),
      userId: users[4].id,
      message:
        'Cотрудники не умеют работать вообще, за редким исключением гоняют к друг другу. Один говорит одно другой другое',
      date: new Date(2019, 2, 2).valueOf()
    },
    {
      id: createGuid(),
      userId: users[5].id,
      message: '',
      date: new Date(2019, 1, 14).valueOf()
    }
  ],
}

module.exports = {feedback}
