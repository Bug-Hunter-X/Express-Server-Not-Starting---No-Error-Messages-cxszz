const express = require('express');
const app = express();
const port = 3000;

// Handle potential errors during server startup
app.listen(port, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1); // Exit with an error code
  } else {
    console.log(`Server listening on port ${port}`);
  }
});