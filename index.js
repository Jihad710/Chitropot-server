const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;



// middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send(`server is running for Chitropot`);
});

// connect to Database
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@ecommerce.hmfgaet.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
  
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Successfully connected to MongoDB!");
    } finally {
 
      await client.close();
    }
  }






app.listen(port, () => {
	console.log(`server is running on ${port} for Chitropot`);
});

run().catch(console.dir);
