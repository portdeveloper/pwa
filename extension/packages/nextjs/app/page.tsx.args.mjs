export const preConfigContent = `import SendNotification from "./SendNotification";`;

export const description = `
<p className="text-center text-lg">
  This extension adds Progressive Web App (PWA) capabilities to your Scaffold-ETH 2 project
</p>
<SendNotification />
<p className="text-center text-lg mt-4">
  This demo shows how to implement web push notifications in your dApp.
</p>
<p className="text-center text-lg">
  Look at <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">app/notification/route.ts</code> to see the server-side implementation.
</p>
`;

export const externalExtensionName = "PWA";

export const fullContentOverride = ""
