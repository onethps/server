const { getUsers, getUser, addUser, deleteUser } = require('./repository');

const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/users', async (req, res) => {
  let users = await getUsers();
  if (!!req.query.search) {
    users = users.filter((u) => u.name.indexOf(req.query.search) > -1);
  }

  res.send(users);
});

router.get('/:id', async (req, res) => {
  let userId = req.params.id;
  const user = await getUser(userId);
  if (user) {
    res.send(user);
  } else {
    res.send(404);
  }
});

router.delete('/:id', async (req, res) => {
  let userId = req.params.id;
  const users = await deleteUser(userId);
  res.send(204);
});

router.post('/', async (req, res) => {
  let name = req.body.name;
  res.send({
    success: true,
  });
  await addUser(name);
});

module.exports = router;
