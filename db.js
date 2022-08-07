const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://abhinandan__wadhwa:c8pvRZw55NhpZEpV@cluster0.rt1oy.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { dbName: 'petCare' }, (err) => {
        console.log("Connected To Mongo Successfully!!");
        console.log(err);
    })
}

module.exports = connectToMongo;





// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://abhinandan__wadhwa:c8pvRZw55NhpZEpV@cluster0.rt1oy.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// const connectToMongo = client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// module.exports = connectToMongo;