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
  console.log("response.data.feedback: ", response.data.feedback);

  response.data.feedback.map(el => {
    usersId.add(el.userId);
  });

  const users = await axios.get("/users", {
    params: {
      ids: [...usersId]
    }
  });

  const usersMap = getUsersMap(users.data.users);

  let sortedFeedback = response.data.feedback;
  sortedFeedback.sort(function(a, b) {
    return a.date - b.date;
  });

  console.log("sortedFeedback: ", sortedFeedback);

  const feedbackData = sortedFeedback.map(el => {
    const feedback = {
      message: el.message,
      date: formatedDate(el.date),
      user: usersMap[el.userId]
    };
    return feedback;
  });

  return feedbackData;
};

module.exports = { getFeedbackByProductViewData };
