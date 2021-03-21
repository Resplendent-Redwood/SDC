const { Router } = require('express');
const questions = require('./questions.js');
const products = require('./products.js');
const reviews = require('./reviews.js');

const router = Router();

router.get('/qa/questions', questions.getQuestions);
// router.put('/answer/update',  )
// router.put('/questions/update', )
// router.post('/qa/question/answer', )
// router.post('/qa/question/post', )



module.exports = router;