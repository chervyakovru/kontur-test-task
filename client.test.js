const { expect } = require("chai");
const { getFeedbackByProductViewData } = require("./client");

describe("getFeedbackByProductViewData", function() {
  it("загружает все отзывы по продукту", async () => {
    const { feedback } = await getFeedbackByProductViewData("puls");

    const messages = feedback.map(({ message }) => message);

    expect(messages).deep.equal(["", "Пока сырой продукт", "Стало проще планировать, нет кассовых разрывов"]);
  });

  it("загружает и форматирует информацию о пользователе", async () => {
    const { feedback } = await getFeedbackByProductViewData("puls");

    const users = feedback.map(({ user }) => user);

    expect(users).deep.equal([
      "Марк Визельман (weazelman@gmail.com)",
      "Кирилл Давсон (kdawson@gmail.com)",
      "Виктор Ганеш (vganesh@outlook.com)"
    ]);
  });

  it("форматирует даты", async () => {
    const { feedback } = await getFeedbackByProductViewData("puls");

    const date = feedback.map(({ date }) => date);

    expect(date).deep.equal(["2019-2-14", "2019-3-3", "2019-3-4"]);
  });

  it("сортирует по датам", async () => {
    const { feedback } = await getFeedbackByProductViewData("diadoc");

    const dates = feedback.map(({ date }) => date);
    expect(dates).to.deep.equal(["2016-3-3", "2018-1-1", "2018-1-2", "2019-2-14", "2019-3-2"]);
  });

  it('сортирует по датам 2', async () => {
    const { feedback } = await getFeedbackByProductViewData('zakupki');

    const dates = feedback.map(({ date }) => date);
    expect(dates).to.deep.equal([
      '2016-3-3',
      '2018-1-1',
      '2018-1-2',
      '2019-2-14',
      '2019-2-14',
      '2019-2-14',
      '2019-2-14',
      '2019-2-14',
      '2019-2-14',
      '2019-2-14',
      '2019-3-2'
    ]);
  });
  
  it("возвращает сообщение, если отзывов нет", async () => {
    const { message } = await getFeedbackByProductViewData("elba");

    expect(message).to.equal("Отзывов пока нет");
  });

  it("возвращает сообщение, если такого продукта не существует", async () => {
    const { message } = await getFeedbackByProductViewData("zen");

    expect(message).to.equal("Такого продукта не существует");
  });

  it("*если передан флаг actualize, фильтрует отзывы пользователей, у которых уже есть более свежие отзывы", async () => {
    const { feedback } = await getFeedbackByProductViewData("focus", true);

    expect(feedback.length).to.equal(3);
    expect(feedback[0].date).to.equal("2018-2-14");
    expect(feedback[1].date).to.equal("2018-12-11");
    expect(feedback[2].date).to.equal("2019-1-14");
  });
});
