const router = require('express').Router();
const Vacation = require('./vacation-model.js');
const restricted = require('../auth/authenticate-middleware.js')
const fileUpload = require('express-fileupload');

router.use(fileUpload())

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


  

   router.post('/comments', (req, res) => {
    let comment = req.body;
Vacation.addComment(comment)
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
  
  router.post('/uploads', (req, res) => {
    if(req.files === null) {
      return res.status(400).json({
        message: 'no file uploaded'
      })
    } 
    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
      if(err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
    })
  })

  module.exports = router;