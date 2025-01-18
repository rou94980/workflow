import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  //const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    //本機開發時，以下server註解需拿掉，本機才可以取用capi，否則會有跨域問題
    // server: {
    //   proxy: {
    //     "/apiurl": {
    //       target: env.VITE_BASE_API,
    //       //secure: false,
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/apiurl/, ""),
    //     },
    //   },
    //   port: 5006,
    // },
    // preview: {
    //   port: 5006,
    // },
  };
});
