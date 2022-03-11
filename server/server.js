const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const isDev = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 8080;

// API routes
require('./routes')(app);

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
      console.log(err);
    }
  
    console.info('🌎 Open http://0.0.0.0:%s/ in your browser.', port);
  });
  
module.exports = app;