const express = require("express");

const app = express();
const port = 5000;
const uploadCSV = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/cvstojson", uploadCSV);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${port}`);
});
