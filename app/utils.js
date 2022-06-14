const apiResponse = ({ message = "", data = {}, errors = [] }) => ({
  message,
  data,
  errors,
});

module.exports = { apiResponse };
