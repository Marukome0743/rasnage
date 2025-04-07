import type { NextConfig } from "next"
import withRspack from "next-rspack"

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    isrFlushToDisk: false,
    reactCompiler: true,
    viewTransition: true,
  },
  output: "standalone",
}

export default withRspack(nextConfig)
