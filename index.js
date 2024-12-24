const express = require("express");
const {
  createProxyMiddleware,
  responseInterceptor,
} = require("http-proxy-middleware");

// Create Express Server
const app = express();

// Configuration
const PORT = 4000;
const targetUrl = "https://fill URL here";

app.use(
  "/graphql",
  createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    onProxyRes: function onProxyRes(proxyRes, req, res) {
      console.log("🚀 ~ file: app.js:20 ~ onProxyRes");
      proxyRes.headers["Access-Control-Allow-Origin"] = req.get("origin");
      proxyRes.headers["xxxxxx-test"] = "xxxxxxxx-test";
    },
    onProxyReq: function onProxyReq(proxyReq, req, res) {
      console.log("🚀 ~ file: app.js:24 ~ onProxyReq");
      proxyReq.setHeader("origin", targetUrl);
    },
  })
);

app.listen(PORT);
