const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const phones = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
      },
      { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
      },
      { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
      },
      { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
      }
]

app.get('/', (req,res) =>{
    res.send('Hello world');
})

app.get('/api/persons', (req,res) =>{
    res.json(phones);
})

app.get('/info', (req,res) =>{
    res.send(`Phone book has info for  people `);
})

app.get('/api/persons/:id', (req,res) =>{
    const phone = phones.find(p => p.id === parseInt(req.params.id));
    if(!phone) return res.status(404).send('Phone number with given id is not found');
    return res.send(phone);
})

app.delete('/api/persons/:id', (req,res) =>{
    const phone = phones.find(p => p.id === parseInt(req.params.id));
    if(!phone) return res.status(404).send('Phone number with given id not found');

    const index = phones.indexOf(phone);
    phones.splice(index,1);

    res.send(phone);
})

app.post('/api/persons', (req,res) =>{

    const schema = Joi.object({
        name: Joi.string().required(),
        number: Joi.required()
    });

    const result = schema.validate(req.body);

    if(result.error) return  res.status(400).send(result.error);
    console.log(res.error);

    const phone = {
        id: phones.length+1,
        name: req.body.name,
        number : req.body.number
    };
    phones.push(phone);
    res.send(phone);
})

const PORT = 200;
app.listen(PORT);
console.log(`Server is running at port ${PORT}`);