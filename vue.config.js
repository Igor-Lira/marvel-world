module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "/" : "/marvel-world/",
  devServer: {
    disableHostCheck: true,
    host: 'localhost'
  },
  transpileDependencies: ["vue-meta"],
};
