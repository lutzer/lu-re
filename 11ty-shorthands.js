const Image = require("@11ty/eleventy-img")
const path = require("path")
const { DateTime } = require("luxon")
const _ = require("lodash")

module.exports = function(eleventyConfig, config) {

  // generate images
  async function imageShortcode(src, alt, sizes) {
    if (!src)
      return ""

    const imgPath = path.join(path.dirname(this.page.inputPath), src)

    let metadata = await Image(imgPath, {
      widths: _.isArray(sizes) ? sizes : [sizes],
      formats: ["png","jpg"],
      urlPath: "/assets/img/",
      outputDir: config.OUTPUT_DIR + "/assets/img/",
    })

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    }

    return Image.generateHTML(metadata, imageAttributes)
  }

  // image shorthand
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)
  eleventyConfig.addLiquidShortcode("image", imageShortcode)
  eleventyConfig.addJavaScriptFunction("image", imageShortcode)

  // format date
  eleventyConfig.addShortcode("formatDate", (date) => {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_HUGE)
  });
}