const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS

app.use(express.json());

const candidatesRouter = require('./src/app/api/candidates');
app.use('/api/candidates', candidatesRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
