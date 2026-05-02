import { spawn } from "node:child_process";
import { cpSync, existsSync, rmSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const serverPath = path.join(root, ".next", "standalone", "server.js");
const port = process.argv[2] || process.env.PORT || "4173";
const hostname = process.env.NEXT_HOSTNAME || "127.0.0.1";

if (!existsSync(serverPath)) {
  throw new Error("Missing .next/standalone/server.js. Run npm run build before npm run smoke.");
}

function copyIntoStandalone(source, destination) {
  if (!existsSync(source)) return;
  rmSync(destination, { recursive: true, force: true });
  cpSync(source, destination, { recursive: true });
}

copyIntoStandalone(path.join(root, ".next", "static"), path.join(root, ".next", "standalone", ".next", "static"));
copyIntoStandalone(path.join(root, "public"), path.join(root, ".next", "standalone", "public"));

const child = spawn(process.execPath, [serverPath], {
  cwd: root,
  env: {
    ...process.env,
    HOSTNAME: hostname,
    PORT: port
  },
  stdio: "inherit"
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code || 0);
});
