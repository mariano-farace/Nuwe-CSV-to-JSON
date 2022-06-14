const router = require("express").Router();
const { parseFromCsvBuffer } = require("../controllers/csvtojson");
const { uploadAdCSV } = require("../middleware/uploadCSV");

router.post("/", uploadAdCSV, parseFromCsvBuffer);

module.exports = router;
