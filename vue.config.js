const proxy = {};
[
  '/report',
  '/ncovdata',
].forEach(key => proxy[key] = {
  target: 'http://localhost:18900',
});
module.exports = {
  publicPath: './',
  devServer: {
    port: 8081,
    host: '0.0.0.0',
    proxy,
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
  ],
};
