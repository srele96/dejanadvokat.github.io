const esbuild = require("esbuild");
const config = require("./esbuild.config");

async function build() {
  try {
    console.log("🚀 Building for production...");

    await esbuild.build({
      ...config,
      minify: true,
      sourcemap: false,
      logLevel: "info",
    });

    console.log("✅ Production build complete.");
  } catch (err) {
    console.error("❌ Build failed:", err);
    process.exit(1);
  }
}

build();
