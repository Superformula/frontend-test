const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/graphql", (req, res) => {
  const body = req.body;

  axios
    .post("https://api.yelp.com/v3/graphql", body, {
      headers: {
        authorization: `Bearer ${process.env.YELP_TOKEN}`
      }
    })
    .then(response => {
      console.log("THEN: body: ", body, "response.data: ", response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log("ERROR: ", error, "BODY: ", body);
      res.send(error);
    });
});

app.listen(4000);
