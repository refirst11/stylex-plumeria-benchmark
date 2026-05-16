import type { NextConfig } from "next";
import { withPlumeria } from "@plumeria/next-plugin";
import path from "node:path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, "../"),
};

export default withPlumeria(nextConfig);
