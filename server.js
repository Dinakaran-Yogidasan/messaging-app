const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 2000;

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Simple authentication logic
    if (username === 'admin' && password === 'password') {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Login failed');
    }
  });

  app.post('/webhook', (req, res) => {
    const intentName = req.body.queryResult.intent.displayName;
  
    let responseText = '';
  
    if (intentName === 'Default Welcome Intent') {
      responseText = 'Hello! How can I help you today?';
    } else {
      responseText = 'I am not sure how to help with that.';
    }
  
    res.json({
      fulfillmentText: responseText,
    });
  });
  



app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
