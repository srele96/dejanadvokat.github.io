const esbuild = require("esbuild");
const config = require("./esbuild.config");

async function main() {
  const ctx = await esbuild.context(config);

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
