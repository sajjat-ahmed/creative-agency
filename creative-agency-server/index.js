const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require('mongodb').ObjectID;
require('dotenv').config()

const app = express()
// const fileUpload =require('express-fileupload')

// app.use(fileUpload())
app.use(cors())
app.use(bodyParser.json())

const port = 5000;

const uri = `mongodb+srv://sajjatahmed:OCjWDpG5IjWAYI72@cluster0.hatjk.mongodb.net/CreativeAgency?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });


app.get('/', (req, res) => {
  res.send('Hello from db, it is working');
})


client.connect(err => {
  const reviewsCollection = client.db("CreativeAgency").collection("feedback");
  const ordersCollection = client.db("CreativeAgency").collection("order");
  const adminCollection = client.db("CreativeAgency").collection("admin");
  const serviceCollection = client.db("CreativeAgency").collection("service");

  // new order add
  app.post('/NewOrder' , (req , res) =>{
    const orders = req.body;
    ordersCollection.insertOne(orders)
    .then(result => {
      res.send(result.insertedCount > 0)
    })
  })

  // display list of order

  app.get('/review', (req, res) => {
    ordersCollection.find({ email: req.query.email})
    .toArray((err , documents)=>{
        res.send(documents)
    })
  })

  //customer order in admin

  app.get("/getCustomerOrder", (req, res) =>{
    ordersCollection.find({})
    .toArray((err, documents) =>{
      res.send(documents);
    })
  })

  //add feedback or review

  app.post('/addReview' , (req , res) =>{
    const allReview = req.body;
    reviewsCollection.insertOne(allReview)
    .then(result => {
      res.send(result.insertedCount > 0)
    })
  })

  // display reviews

  app.get('/reviews', (req, res) => {
    reviewsCollection.find({})
    .toArray((err, documents) => {
        res.send(documents);
    })
  })

  // admin panel 


  app.post('/addService' , (req , res) =>{
    const orders = req.body;
    serviceCollection.insertOne(orders)
    .then(result => {
      res.send(result.insertedCount > 0)
    })
  })

  app.get("/getService", (req, res) =>{
    serviceCollection.find({})
    .toArray((err, documents) =>{
      res.send(documents);
    })
  })

});


app.listen(process.env.PORT || port);