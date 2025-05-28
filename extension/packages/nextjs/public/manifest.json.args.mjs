export default {
  name: ["Scaffold-ETH 2 + Serwist"],
  description: ["A Progressive Web App built with Scaffold-ETH 2"],
  iconPath: null, // Not using the default icon path
  extraContent: [{
    short_name: "Scaffold-Serwist",
    display: "standalone",
    orientation: "portrait",
    theme_color: "#FFFFFF",
    background_color: "#FFFFFF",
    start_url: "/",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }]
};
