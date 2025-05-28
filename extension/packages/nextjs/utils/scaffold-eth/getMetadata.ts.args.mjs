export default {
  titleTemplate: "%s | Scaffold-ETH 2",
  thumbnailPath: "/thumbnail.jpg",
  extraIcons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }]
  },
  extraMetadata: {
    applicationName: "title",
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "title"
    },
    formatDetection: {
      telephone: false
    }
  }
};
