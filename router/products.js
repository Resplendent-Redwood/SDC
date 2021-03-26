const axios = require('axios');
const path = 'ec2-54-153-12-179.us-west-1.compute.amazonaws.com';

const getProducts = (req, res, next) => {
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
  getProducts: getProducts,
}