const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3000;
let app = express();

// Connect to the db
mongoose.connect('mongodb://localhost/x-effect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // Db is connected
});

app.use(cors());
app.use(express.json());

require('./src/routes/cards')(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
