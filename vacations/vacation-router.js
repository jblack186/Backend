const router = require('express').Router();
const Vacation = require('./vacation-model.js');
const restricted = require('../auth/authenticate-middleware.js')


router.get('/', (req, res) => {
  Vacation.find()
  .then(vacation => {
    res.status(200).json(vacation);
  })
  .catch(err => {
      console.log(err);
      res.send(err)
  })
})

router.get('/destination', (req, res) => {
  Vacation.findDestination()
  .then(destinations => {
    console.log(destinations)
    res.status(200).json(destinations);
  })
  .catch(err => {
      console.log(err);
      res.send(err)
  })
})

router.get('/activities', (req, res) => {
  Vacation.findActivities()
  .then(activities => {
    res.status(200).json(activities);
  })
  .catch(err => {
      console.log(err);
      res.send(err)
  })
})

router.get('/comments', (req, res) => {
  Vacation.findComments()
  .then(comments => {
    res.status(200).json(comments);
  })
  .catch(err => {
      console.log(err);
      res.send(err)
  })
})

router.get('/:id', async(req, res) => {
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

  router.post('/destination', (req, res) => {
    let destination = req.body;
   Vacation.addDestination(destination)
   .then(destination => {
     res.status(201).json(destination)
   })
   .catch(err => {
     console.log(err)
     res.status(401).json({
       message: 'could not add destination'
     })
   })
   });

   router.post('/activities', (req, res) => {
    let activities = req.body;
   Vacation.addActivities(activities)
   .then(activities => {
     res.status(201).json(activities)
   })
   .catch(err => {
     console.log(err)
     res.status(401).json({
       message: 'could not add destination'
     })
   })
   });

   router.post('/comments', (req, res) => {
    let comments = req.body;
   Vacation.addComment(comments)
   .then(comments => {
     res.status(201).json(comments)
   })
   .catch(err => {
     console.log(err)
     res.status(401).json({
       message: 'could not add comments'
     })
   })
   });  

  router.get('/:id/comments', async(req, res) => {
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

  router.post('/:id/comments', async(req, res) => {
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