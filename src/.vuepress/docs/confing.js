module.exports = {
  base: '/weblog/',
  dest: 'docs/',
  title: 'weblog',
  themeConfing: {
    docsDir: 'src',
    docsBranch: 'master',
    sidebar: [],
  },
  markdown: {
    toc: { includeLevel: [1, 2, 3, 4] },
  },
};
