var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {title: 'jackson'})
});

router.post('/new', function(req, res, next) {
  console.log(req.body.name)
  messages.push({ text: req.body.messageText, user: req.body.user, added: new Date() });
  console.log(messages)
  res.redirect('/');
})
module.exports = router;
