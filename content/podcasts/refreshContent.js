const cheerio = require("cheerio")
const axios = require("axios")
const fs = require("fs")
const path = require("path")

async function scrapContentToJson() {
  const content = await (
    await axios.default.get("https://soundcloud.com/chakrit-lj")
  ).data
  const $ = cheerio.load(content)
  const result = []
  $("noscript").each((_, ele) => {
    const inner = cheerio.load($(ele).html())
    inner('.audible > h2[itemprop="name"] > a[itemprop="url"]').each(
      (_, ele) => {
        result.push({
          title: $(ele).text(),
          url: `https://soundcloud.com${$(ele).attr("href")}`,
        })
      }
    )
  })
  return result
}

function combineContent(old, new) {}

async function refreshContent() {
  const content = await scrapContentToJson()
  const writeToPath = path.join(__dirname, "podcast-content.json")
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
