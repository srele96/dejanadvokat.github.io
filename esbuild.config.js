/** @type{import("esbuild").BuildOptions} */
const config = {
  entryPoints: ["./lucideIcons.js"],
  bundle: true,
  outfile: "src/assets/js/lucideIcons.js",
  format: "esm",
  target: ["es2020"],
  minify: true,
  sourcemap: false,
  treeShaking: true,
  platform: "browser",
  logLevel: "info",
};

module.exports = config;
