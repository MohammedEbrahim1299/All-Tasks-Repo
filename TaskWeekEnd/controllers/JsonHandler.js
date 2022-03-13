const fs = require("fs");

class JsonHandler {
  static readData = () => {
    let data;
    try {
      data = JSON.parse(fs.readFileSync("data.json"));
      if (!Array.isArray(data)) throw new Error();
    } catch (e) {
      data = [];
    }
    return data;
  };
  static writeData = (data) => {
    fs.writeFileSync("data.json", JSON.stringify(data));
  };
}

module.exports = JsonHandler;