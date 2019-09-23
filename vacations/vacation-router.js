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

router.get('/:id', restricted, async(req, res) => {
  try {
    const id = req.params.id;
    const user = await Vacation.findById(id)
    res.status(200).json(user)
  }
    catch(error) {
      console.log(error)
    res.status(500).json({
      message: 'could not get vacation data',
      
    })
  }
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

  router.get('/:id/comments', restricted, async(req, res) => {
    try {
      const { id } = req.params;
      const comments = await Vacation.findComments(id)
      res.status(200).json(comments)
    }
    catch (error){
      console.log(error)
      res.status(500).json({
        message: 'could not find comments'
      })
    }

  })

  router.post('/:id/comments', restricted, async(req, res) => {
    try {
      const { id } = req.params
      req.body.vacations_id = id
      const comment = await Vacation.addComment(req.body);     
      res.status(201).json(req.body);
  } 
  catch (error) {
      console.log(error);
      res.status(500).json({message: "Could not add comment."});
  }   
  });

  module.exports = router;