const { axios } = require("./fakeBackend/mock");

const getUsersMap = users => {
  return users.reduce((acc, user) => {
    return { ...acc, [user.id]: `${user.name} (${user.email})` };
  }, {});
};

const formatedDate = rawDate => {
  const date = new Date(rawDate);
  const year = date.getFullYear();
  const monthNumber = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${monthNumber}-${day}`;
};

const getFeedbackByProductViewData = async (product, actualize = false) => {
  let response;
  try {
    response = await axios.get(`/feedback?product=${product}`);
  } catch (error) {
    return error.response.data;
  }

  if (response.data.feedback.length === 0) {
    return {
      message: "Отзывов пока нет"
    };
  }

  const usersId = new Set();
  response.data.feedback.map(el => {
    usersId.add(el.userId);
  });

  let users;
  try {
    users = await axios.get("/users", {
      params: {
        ids: [...usersId]
      }
    });
  } catch (error) {
    return error.response.data;
  }

  const sortedFeedback = response.data.feedback.sort((a, b) => {
    return b.date - a.date;
  });

  const usersMap = getUsersMap(users.data.users);
  const encounterIds = new Set();

  const feedback = sortedFeedback.reduce((acc, el) => {
    if (actualize) {
      if (encounterIds.has(el.userId)) {
        return acc;
      }
      encounterIds.add(el.userId);
    }
    const review = {
      message: el.message,
      date: formatedDate(el.date),
      user: usersMap[el.userId]
    };
    return [...acc, review];
  }, []);

  feedback.reverse();

  return { feedback };
};

module.exports = { getFeedbackByProductViewData };
