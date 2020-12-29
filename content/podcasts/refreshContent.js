const cheerio = require("cheerio")
const axios = require("axios")
const fs = require("fs")
const path = require("path")

async function scrapContentToJson() {
  const content = await (
    await axios.default.get("https://soundcloud.com/chakrit-lj")
  ).data
  fs.writeFileSync("/tmp/tmp_sc.html", content, { encoding: "utf-8" })
  const $ = cheerio.load(content)
  const result = []

  $("noscript").each((_, ele) => {
    const inner = cheerio.load($(ele).html())
    inner(".audible").each((_, ele) => {
      const titleElement = $(ele).find(
        'h2[itemprop="name"] > a[itemprop="url"]'
      )
      const publishedDate = $(ele).find("time").text()
      result.push({
        title: $(titleElement).text(),
        url: `https://soundcloud.com${$(titleElement).attr("href")}`,
        publishedDate,
      })
    })
  })
  return result
}

function combineContent(older, newer) {
  const result = [...newer]
  for (const old of older) {
    if (result.find(r => r.url === old.url)) {
      continue
    }
    result.push(old)
  }
  return result
}

async function refreshContent() {
  const newContent = await scrapContentToJson()
  const filePath = path.join(__dirname, "podcast-content.json")
  const oldContent = JSON.parse(
    fs.readFileSync(filePath, {
      encoding: "utf8",
    })
  )
  const content = combineContent(oldContent, newContent)
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), {
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
