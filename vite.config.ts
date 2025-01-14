import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

const defaults = {
    plugins: [react()],
    base: "./",
    root: "src",
    build: {
        outDir: "../dist",
    },
};

const server = {
    port: 8000,
    https: {
        pfx: path.resolve("../../GitHub/.cert/localhost.pfx"),
        passphrase: "localhost",
    },
};

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
    switch (mode) {
        case "development":
            return {
                ...defaults,
                server: {
                    ...server,
                },
                preview: {
                    ...server,
                },
            };
        default:
            return {
                ...defaults,
            };
    }
});
