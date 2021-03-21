const axios = require('axios');
const path = 'http://localhost:8000';


const getQuestions = (req, res, next) => {
  axios(path + req.url)
  .then(({ data }) => {
    console.log(data);
    res.send(data);
    next();
  })
  .catch(err => {
    console.error(err);
    res.status(404);
    next();
  })
}

module.exports = {
  getQuestions: getQuestions,
}

