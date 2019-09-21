const router = require('express').Router();
const Vacation = require('./vacation-model.js');
const restricted = require('../auth/authenticate-middleware.js')


router.get('/', restricted, (req, res) => {
  Vacation.find()
  .then(vacation => {
    res.status(200).json(vacation);
  })
  .catch(err => {
      console.log(err);
      res.send(err)
  })
})

router.post('/', (req, res) => {
   let vacation = req.body;
  Vacation.add(vacation)
  .then(vacation => {
    res.status(201).json(vacation)
  })
  .catch(err => {
    console.log(err)
    res.status(401).json({
      message: 'could not add vacation'
    })
  })

  
  });

  module.exports = router;