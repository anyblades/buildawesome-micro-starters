import kitConfig from "@anyblades/buildawesome-kit";
import shotpipePlugin from "eleventy-plugin-shotpipe";

process.loadEnvFile();

export default async function (eleventyConfig) {
  await kitConfig(eleventyConfig);

  eleventyConfig.addPlugin(shotpipePlugin, {
    key: process.env.SHOTPIPE_KEY,
    secret: process.env.SHOTPIPE_SECRET,
    template: "terminal",
    accent: "#5ca9ff",
  });
}
