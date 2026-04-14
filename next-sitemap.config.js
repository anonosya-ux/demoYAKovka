/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://xn--80adxbs4h.xn--p1ai', // яковка.рф
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // if dynamic
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
