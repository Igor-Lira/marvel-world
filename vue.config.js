module.exports = {
  publicPath:
    process.env.NODE_ENV === "development" ? "/" : "/marvel-universe/",
  devServer: {
    disableHostCheck: true,
  },
};
