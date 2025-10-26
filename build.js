const esbuild = require("esbuild");

async function main() {
  const ctx = await esbuild.context({
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
  });

  await ctx.watch();
  console.log("👀 Watching for changes...");

  const shutdown = async (signal) => {
    console.log(`\n⚙️  Caught ${signal}. Cleaning up...`);
    try {
      await ctx.dispose();
      console.log("🧹 Build context disposed. Exiting.");
    } catch (err) {
      console.error("❌ Error while disposing context:", err);
    } finally {
      process.exit(0);
    }
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
}

main()
  .then(() => {
    console.log("✅ Initial build complete.");
  })
  .catch((err) => {
    console.error("❌ Build failed:", err);
    process.exit(1);
  });
