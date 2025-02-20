import { cn } from "../lib/utils";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Prasanna Gramopadhye",
  description: "Website to know more about Prasanna Gramopadhye",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Global metadata or other head elements */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://ariaibot.netlify.app/chatBot.js"
          data-business-id="25"
          defer
        ></script>
        <Script
          id="jeeva-snippet"
          // onLoad={() => {
          //   console.log('Script has loaded')
          // }}
        >
          {`!function () {var jeeva = window.jeeva = window.jeeva || [];if (jeeva.invoked) return;jeeva.invoked = true;jeeva.methods = ['identify', 'collect'];jeeva.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);jeeva.push(args);return jeeva;};};for (var i = 0; i < jeeva.methods.length; i++) {var key = jeeva.methods[i];jeeva[key] = jeeva.factory(key);}jeeva.load = function (key) {var script = document.createElement('script');script.type = 'text/javascript';script.async = true;script.src = 'https://r2d2-inbound-js-store-production.s3.us-east-1.amazonaws.com/' + key + '/jeeva.js';var first = document.getElementsByTagName('script')[0];first.parentNode.insertBefore(script, first);};jeeva.SNIPPET_VERSION = '1.0.';jeeva.load('22c49741-599e-4e56-bd2f-7aafc4ccb616');}();`}
        </Script>
        {/* <Script
          src="https://b6n664e32e.execute-api.us-east-1.amazonaws.com/asset/download/js/chat"
          data-config="https://b6n664e32e.execute-api.us-east-1.amazonaws.com/asset/download/config/2cd909b9-965c-444b-858d-70f86534f456"
          defer
        ></Script> */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
