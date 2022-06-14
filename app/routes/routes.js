const router = require("express").Router();
const { parseAdsFromCsvBuffer } = require("../controllers/csvtojson");
const { uploadAdCSV } = require("../middleware/uploadCSV");

router.post("/", uploadAdCSV, parseAdsFromCsvBuffer);

module.exports = router;
