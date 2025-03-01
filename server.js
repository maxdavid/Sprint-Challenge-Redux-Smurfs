const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0
  },
  {
    id: 100,
    name: 'Papa Smurf',
    age: 500,
    height: '12cm'
  },
  {
    id: 101,
    name: 'Smurfette',
    age: 150,
    height: '7cm'
  },
  {
    id: 102,
    name: 'Hefty Smurf',
    age: 250,
    height: '14cm'
  },
  {
    id: 103,
    name: 'Grouchy Smurf',
    age: 220,
    height: '10cm'
  },
  {
    id: 104,
    name: 'Magician Smurf',
    age: 260,
    height: '6.5cm'
  },
  {
    id: 105,
    name: 'Clumsy Smurf',
    age: 165,
    height: '7cm'
  }
];
server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = smurfs.length;

server.post('/smurfs', (req, res) => {
  const { name, age, height } = req.body;
  const newSmurf = { name, age, height, id: smurfId };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
