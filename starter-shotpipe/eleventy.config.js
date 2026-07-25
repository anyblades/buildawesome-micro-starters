import baseConfig from "@anyblades/eleventy-blades-base";
import shotpipePlugin from "eleventy-plugin-shotpipe";

process.loadEnvFile();

export default async function (eleventyConfig) {
  await baseConfig(eleventyConfig);

  eleventyConfig.addPlugin(shotpipePlugin, {
    key: process.env.SHOTPIPE_KEY,
    secret: process.env.SHOTPIPE_SECRET,
    template: "terminal",
    accent: "#5ca9ff",
  });
}
