const { override, fixBabelImports, disableEsLint } = require("customize-cra")

module.exports = override(
  disableEsLint(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "lib",
    style: "css"
  })
)
