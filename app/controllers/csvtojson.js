const csv = require("csvtojson");
const { apiResponse } = require("../utils");

async function parseFromCsvBuffer(req, res) {
  try {
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
  } catch (error) {
    res.status(500).json(
      apiResponse({
        message: "An error occurred while parsing the file",
        errors: error.message,
      })
    );
  }
}

module.exports = { parseFromCsvBuffer };
