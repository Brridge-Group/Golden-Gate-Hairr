const loaders = require("./loaders");
const express = require("express");
const config = require("./config");

const startServer = async () => {
  const app = express();

  await loaders(app);

  const port = config.port || 5000;
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Your server is ready !`);
  });
};

startServer();
