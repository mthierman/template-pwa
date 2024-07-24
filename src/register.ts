if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.ts");
}

console.log("index.ts");
