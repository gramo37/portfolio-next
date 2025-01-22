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
          src="https://ariaibot.netlify.app/chatBot.js"
          // allow="geolocation"
          data-business-id="25"
          defer
        ></Script> */}
        {/* <Script
          src="https://b6n664e32e.execute-api.us-east-1.amazonaws.com/asset/download/js/chat"
          data-config="https://b6n664e32e.execute-api.us-east-1.amazonaws.com/asset/download/config/2cd909b9-965c-444b-858d-70f86534f456"
          defer
        ></Script> */}
        {/* <Script data-business-id="25">
          {
            '(function(){const loadChatbot=(businessId)=>{const iframeUrl=`https://ariaibot.netlify.app/business/${businessId}`;document.addEventListener("DOMContentLoaded",()=>{const widgetContainer=document.createElement("div");widgetContainer.id="chatbot-widget-container";widgetContainer.style.position="fixed";widgetContainer.style.bottom="20px";widgetContainer.style.right="20px";widgetContainer.style.zIndex="9999";const chatBubble=document.createElement("div");chatBubble.id="chatbot-bubble";chatBubble.style.width="60px";chatBubble.style.height="60px";chatBubble.style.backgroundColor="#007bff";chatBubble.style.borderRadius="50%";chatBubble.style.display="flex";chatBubble.style.justifyContent="center";chatBubble.style.alignItems="center";chatBubble.style.cursor="pointer";chatBubble.style.color="#fff";chatBubble.style.fontSize="24px";chatBubble.style.boxShadow="0 4px 8px rgba(0,0,0,0.2)";chatBubble.innerHTML="💬";const iframeContainer=document.createElement("div");iframeContainer.id="chatbot-iframe-container";iframeContainer.style.position="fixed";iframeContainer.style.bottom="-600px";iframeContainer.style.right="20px";iframeContainer.style.width="400px";iframeContainer.style.height="600px";iframeContainer.style.boxShadow="0 4px 8px rgba(0,0,0,0.2)";iframeContainer.style.backgroundColor="#fff";iframeContainer.style.borderRadius="8px";iframeContainer.style.overflow="hidden";iframeContainer.style.transition="bottom 0.4s ease";const iframe=document.createElement("iframe");iframe.src=iframeUrl;iframe.style.width="100%";iframe.style.height="100%";iframe.style.border="none";iframeContainer.appendChild(iframe);let isOpen=false;chatBubble.addEventListener("click",()=>{iframeContainer.style.bottom=isOpen?"-600px":"90px";isOpen=!isOpen;});widgetContainer.appendChild(chatBubble);widgetContainer.appendChild(iframeContainer);document.body.appendChild(widgetContainer);});};const script=document.currentScript;const businessId=script.getAttribute("data-business-id");console.log(businessId, "Business id found");loadChatbot("25");console.error("Chatbot: No business ID provided.");})();'
          }
        </Script> */}
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
