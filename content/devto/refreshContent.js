const axios = require("axios")
const path = require("path")
const fs = require("fs")

async function refreshContent() {
  const content = await (
    await axios.default.get("https://dev.to/api/articles/?username=chrisza4")
  ).data
  const writeToPath = path.join(__dirname, "content.json")
  fs.writeFileSync(writeToPath, JSON.stringify(content, null, 2), {
    encoding: "utf8",
  })
}

refreshContent()
  .then(() => {
    console.log("Done")
  })
  .catch(err => {
    console.error(err)
  })
