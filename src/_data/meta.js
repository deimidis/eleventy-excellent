module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'deimidis.me',
  siteDescription:
    'Apuntes del mundo con medio siglo de vida (o casi).',
  siteType: 'Person', // schema
  locale: 'es_AR',
  lang: 'es',
  skipContent: 'Skip to content',
  author: 'Guillermo Movia', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'deimidis@deimidis.me', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https://deimidis.me', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: 'https://mastodon.uy/@deimidis' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'deimidis.me',
    description:
      'Apuntes del mundo con medio siglo de vida (o casi).'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: 'deimidis@deimidis.me',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
