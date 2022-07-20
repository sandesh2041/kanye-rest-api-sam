//import fetch from "node-fetch";
import axios from "axios";
import express from "express";
import cors from "cors";
//I now have an express app/server that can receive http(s) requests and send back http(s) responses
const app = express();

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use(cors());

const URL = "https://api.kanye.rest/";

//GET /kanye_quotes
app.get("/kanye_quotes", async (req, res) => {
  try {
    const response = await axios.get(URL);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});
