/**
 * I strive to keep the `.eleventy.js` file clean and uncluttered. Most adjustments must be made in:
 *  - `./config/collections/index.js`
 *  - `./config/filters/index.js`
 *  - `./config/plugins/index.js`
 *  - `./config/shortcodes/index.js`
 *  - `./config/transforms/index.js`
 */

// get package.json
const packageVersion = require('./package.json').version;

// module import filters
const {
  limit,
  toHtml,
  where,
  toISOString,
  formatDate,
  toAbsoluteUrl,
  stripHtml,
  minifyCss,
  minifyJs,
  mdInline,
  splitlines
} = require('./config/filters/index.js');

// module import shortcodes
const {
  imageShortcodePlaceholder,
  includeRaw,
  liteYoutube
} = require('./config/shortcodes/index.js');

// module import collections
const {getAllPosts} = require('./config/collections/index.js');

// module import events
const {svgToJpeg} = require('./config/events/index.js');

// plugins
const markdownLib = require('./config/plugins/markdown.js');
const {EleventyRenderPlugin} = require('@11ty/eleventy');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const {slugifyString} = require('./config/utils');
const {escape} = require('lodash');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language');
// add luxon for better date management
const { DateTime } = require("luxon");

// plugin para excerpts
const excerpt = require('eleventy-plugin-excerpt');

// Galería de imágenes de https://www.bash.lk/posts/tech/1-elventy-image-gallery/

function galleryShortcode(content, name) {
  return `
<div><div class="gallery" id="gallery-${name}">${content}</div>
<script type="module">import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.min.js';import PhotoSwipe from '/assets/js/photoswipe.esm.min.js';const lightbox = new PhotoSwipeLightbox({gallery: '#gallery-${name}',children: 'a',pswpModule: PhotoSwipe,preload: [1, 1]});lightbox.init();</script>
</div>
  `.replace(/(\r\n|\n|\r)/gm, "");
}
const sharp = require('sharp');
const Image = require('@11ty/eleventy-img');

const GALLERY_IMAGE_WIDTH = 192;
const LANDSCAPE_LIGHTBOX_IMAGE_WIDTH = 2000;
const PORTRAIT_LIGHTBOX_IMAGE_WIDTH = 720;

async function galleryImageShortcode(src, alt) {
    let lightboxImageWidth = LANDSCAPE_LIGHTBOX_IMAGE_WIDTH;

    const metadata = await sharp(src).metadata();
    if (metadata.orientation > 1) {
      console.log('Rotated image detected:', src, metadata.orientation);
      await sharp(src).rotate().toFile(`correct/${src.split("/").pop()}`);
    }

    if(metadata.height > metadata.width) {
        lightboxImageWidth = PORTRAIT_LIGHTBOX_IMAGE_WIDTH;
    }

    const options = {
        formats: ['jpeg'],
        widths: [GALLERY_IMAGE_WIDTH, lightboxImageWidth],
        urlPath: "/assets/images/",
        outputDir: './src/assets/images/'
    }

    const genMetadata = await Image(src, options);
    

    return `
        <a href="${genMetadata.jpeg[1].url}" 
        data-pswp-width="${genMetadata.jpeg[1].width}" 
        data-pswp-height="${genMetadata.jpeg[1].height}" 
        target="_blank">
            <img src="${genMetadata.jpeg[0].url}" alt="${alt}" />
        </a>
    `.replace(/(\r\n|\n|\r)/gm, "");
}

// Termina la galería de imágenes

module.exports = eleventyConfig => {
  // 	--------------------- Custom Watch Targets -----------------------
  eleventyConfig.addWatchTarget('./src/assets');
  eleventyConfig.addWatchTarget('./utils/*.js');

  // --------------------- layout aliases -----------------------
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('page', 'page.njk');
  eleventyConfig.addLayoutAlias('home', 'home.njk');
  eleventyConfig.addLayoutAlias('blog', 'blog.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');

  // 	---------------------  Custom filters -----------------------
  eleventyConfig.addFilter('limit', limit);
  eleventyConfig.addFilter('where', where);
  eleventyConfig.addFilter('escape', escape);
  eleventyConfig.addFilter('toHtml', toHtml);
  eleventyConfig.addFilter('toIsoString', toISOString);
  eleventyConfig.addFilter('formatDate', formatDate);
  eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrl);
  eleventyConfig.addFilter('stripHtml', stripHtml);
  eleventyConfig.addFilter('slugify', slugifyString);
  eleventyConfig.addFilter('toJson', JSON.stringify);
  eleventyConfig.addFilter('fromJson', JSON.parse);
  eleventyConfig.addFilter('cssmin', minifyCss);
  eleventyConfig.addNunjucksAsyncFilter('jsmin', minifyJs);
  eleventyConfig.addFilter('md', mdInline);
  eleventyConfig.addFilter('splitlines', splitlines);
  eleventyConfig.addFilter('keys', Object.keys);
  eleventyConfig.addFilter('values', Object.values);
  eleventyConfig.addFilter('entries', Object.entries);

  // Importados del starter para los tags
// Return all the tags used in a collection
eleventyConfig.addFilter("getAllTags", collection => {
  let tagSet = new Set();
  for(let item of collection) {
    (item.data.tags || []).forEach(tag => tagSet.add(tag));
  }
  return Array.from(tagSet);
});
  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
	});

  // --- Filter for Luxon --- taken from v8 starter
  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    //dt = DateTime.fromJSDate(new Date(dateObj), { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
    dt = DateTime.fromJSDate(new Date(dateObj), { zone: zone || "utc" }).setLocale('es').toFormat('DDDD');
    //dt.setLocale('fr').toLocaleString({ locale: 'fr' });
    return dt;
	});

	//eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	//	return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	//});

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return DateTime.fromJSDate(new Date(dateObj), {zone: 'utc'}).toFormat('yyyy-LL-dd').toLocaleString(DateTime.TIME_WITH_SECONDS);
});

// Prueba de fecha para el idioma
eleventyConfig.addFilter('diadehoy', (dateObj) => {
  // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  return DateTime.fromJSDate(new Date()).setLocale('fr').toLocaleString(DateTime.TIME_WITH_SECONDS);
});  

  // 	--------------------- Custom shortcodes ---------------------
  eleventyConfig.addNunjucksAsyncShortcode('imagePlaceholder', imageShortcodePlaceholder);
  eleventyConfig.addShortcode('youtube', liteYoutube);
  eleventyConfig.addShortcode('include_raw', includeRaw);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`); // current year, stephanie eckles
  eleventyConfig.addShortcode('packageVersion', () => `v${packageVersion}`);
  // ---- shortcode para la galería de fotos ----
  eleventyConfig.addPairedShortcode('gallery', galleryShortcode);
  eleventyConfig.addShortcode('galleryImage', galleryImageShortcode);

  // 	--------------------- Custom transforms ---------------------
  eleventyConfig.addPlugin(require('./config/transforms/html-config.js'));

  // 	--------------------- Custom Template Languages ---------------------
  eleventyConfig.addPlugin(require('./config/template-languages/css-config.js'));
  eleventyConfig.addPlugin(require('./config/template-languages/js-config.js'));

  // 	--------------------- Custom collections -----------------------
  eleventyConfig.addCollection('posts', getAllPosts);

  // 	--------------------- Events ---------------------
  eleventyConfig.on('afterBuild', svgToJpeg);

  // 	--------------------- Plugins ---------------------
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setLibrary('md', markdownLib);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(inclusiveLangPlugin);
  eleventyConfig.addPlugin(excerpt);

  // plugin para draft
  //eleventyConfig.addPlugin(require("./eleventy.config.drafts.js"));

  // 	--------------------- Passthrough File Copy -----------------------
  // same path
  ['src/assets/fonts/', 'src/assets/images/', 'src/assets/js/'].forEach(path =>
    eleventyConfig.addPassthroughCopy(path)
  );

  // social icons to root directory
  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/*': '/'
  });

  eleventyConfig.addPassthroughCopy({
    'src/assets/css/global.css': 'src/_includes/global.css'
  });

  // 	--------------------- general config -----------------------
  return {
    // Pre-process *.md, *.html and global data files files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',

    // Optional (default is set): If your site deploys to a subdirectory, change `pathPrefix`, for example with with GitHub pages
    pathPrefix: '/',

    dir: {
      output: 'dist',
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
};
