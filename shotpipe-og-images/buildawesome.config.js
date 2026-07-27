import fs from "node:fs";
import baseConfig from "@anyblades/buildawesome-kit-config";
import shotpipePlugin from "eleventy-plugin-shotpipe";

if (fs.existsSync(".env")) {
  process.loadEnvFile();
}

export default async function ($config) {
  await baseConfig($config);

  $config.addPlugin(shotpipePlugin, {
    key: process.env.SHOTPIPE_KEY,
    secret: process.env.SHOTPIPE_SECRET,
    template: "terminal",
    accent: "#5ca9ff",
  });
}
