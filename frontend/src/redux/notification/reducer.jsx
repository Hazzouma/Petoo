const { MARK_READ_NOTIF, FAIL_NOTIF } = require("../actionTypes");

const initialState = {
  isRead: false,
  msg: "",
  creationDate: "",
};

const notifReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
