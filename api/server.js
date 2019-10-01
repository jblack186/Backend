const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const Users = require('../users/users-model.js');
const authenticate = require('../auth/authenticate-middleware.js');
const UserRouter = require('../users/users-router.js');
const VacationRouter = require('../vacations/vacation-router.js');
const fileUpload = require('express-fileupload');

const server = express();
const dbEnv = process.env.DB_ENV || 'development';
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(fileUpload());



server.use('/api/users', UserRouter);
server.use('/api/vacations', VacationRouter);

server.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err =>
        console.log(err))

})

server.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
  
    file.mv(`client/public/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });
module.exports = server;
