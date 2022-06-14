const csv = require("csvtojson");
const { apiResponse } = require("../utils");

async function parseAdsFromCsvBuffer(req, res) {
  try {
    console.log("pasa por el endpoint");
    // TODO borrar esto si es innecesario

    // TODO borrar todo lo relacionado con los headers

    // As per documentation >  if checkType is true, csvtojson will attempt to find a proper type parser according to the cell value. That is, if cell value is "5", a numberParser will be used and all value under that column will use the numberParser to transform data.

    const parsedJSON = await csv({ checkType: true }).fromString(
      req.file.buffer.toString()
    );

    res.status(200).json(
      apiResponse({
        message: `file transformed successfully`,
        data: parsedJSON,
      })
    );

    // TODO comprobar que este catch funciona bien
  } catch (error) {
    res.status(500).json(
      apiResponse({
        message: "An error occurred while posting the ads.",
        errors: error.message,
      })
    );
  }
}

module.exports = { parseAdsFromCsvBuffer };
