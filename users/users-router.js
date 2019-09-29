const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Users = require('./users-model.js');
const bcrypt = require('bcryptjs');
const restricted = require('../auth/authenticate-middleware.js')
const secrets = require('../config/secrets.js')



router.get('/', restricted, (req, res) => {
  Users.find()
  .then(users => {
    res.json(users);
  })
  .catch(err => {
      console.log(err);
      res.send(err)
  })
})

router.post('/register', (req, res) => {
    let user = req.body;
      const hash = bcrypt.hashSync(user.password, 10);
      user.password = hash;
      Users.add(user)
      .then(saved => {
          const token = getJwt(saved)
          console.log(token)
          res.status(201).json(saved)
      })
      .catch(err => {
        console.log(err);
      })
  
  });

  router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = getJwt(user) //this line gets token
        res.status(200).json({
            message: `Welcome ${user.username}`,
            user_id: `${user.id}`,
            token
        });
    } else {
        
        res.status(401).json({message: 'Invalid Credentials'})

    }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error)
    })
})

router.get('/messages', (req, res) => {
    Users.findMessages()
    .then(messages => {
        res.status(200).json(messages)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: 'could not find messages'
        })
    })
})

router.get('/messages/:id', async(req, res) => {
    try {
    const {id} = req.params;
    
    const message = await Users.findMessagesById(id)    
        res.status(200).json(message)
    }
    catch (err)  {
        console.log(err)
        res.status(500).json({
            message: 'could not find message'
        })
    }   
})

router.post('/messages', (req, res) => {
    let messageData = req.body;
   Users.addMessages(messageData)
   .then(messageData => {
     res.status(201).json(messageData)
   })
   .catch(err => {
     console.log(err)
     res.status(401).json({
       message: 'could not add message'
     })
   })
   });

  function getJwt(user) {
    const payload = {
        subject: user.id, //translates into the sub property on the token
        username: user.username
    };
  
    const options = {
        expiresIn: '8h',
    };
  
    return jwt.sign(payload, secrets.jwtSecret, options);
   console.log(token);
  }

  module.exports = router;