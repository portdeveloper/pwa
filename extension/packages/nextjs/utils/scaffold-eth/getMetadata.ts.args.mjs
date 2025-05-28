export const titleTemplate = "%s | Scaffold-ETH 2 + Serwist";
export const thumbnailPath = "/thumbnail.jpg";
export const metadataOverrides = {
  applicationName: "$$title$$",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "title",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};
