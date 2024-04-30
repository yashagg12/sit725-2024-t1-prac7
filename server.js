const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const adopterController = require('./controllers/adopterController');
const petController = require('./controllers/petController');

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = "your_mongo_connection_string_here";

async function connectDb() {
  try {
    await mongoose.connect(mongoURI);
    console.log("You successfully connected to MongoDB!");
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}
connectDb();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submitAdopter', adopterController.submitAdopter);
app.post('/submitPet', petController.submitPet);

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
