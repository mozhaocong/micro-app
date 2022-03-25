const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8002,
    compress: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "X-PINGOTHER, Content-Type, Cache-Control",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    },
  },
});
