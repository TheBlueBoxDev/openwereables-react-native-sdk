const withOpenWearables = require("./build/plugin/withOpenWearables");

module.exports = function (config, props) {
  return withOpenWearables.default(config, props);
};
