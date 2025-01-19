import Head from "next/head";
import { ReactNode } from "react";
import "src/app/global.css";

interface RootLayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "FIN'ED - Financial Literacy for All",
  description:
    "Empowering everyone with accessible financial literacy education.",
  keywords: [
    "FIN'ED",
    "financial education",
    "financial literacy",
    "finance",
    "accessible education",
    "special needs",
    "Adam Darzidan",
    "Kevin Tun",
    "Ishaan Gupta",
    "Luke Varghese",
    "finance for everyone",
  ].join(", "),
  author: "Adam Darzidan, Kevin Tun, Ishaan Gupta, Luke Varghese",
  robots: "index, follow",
  og: {
    title: "FIN'ED - Financial Literacy for All",
    description:
      "Empowering everyone with accessible financial literacy education.",
    type: "website",
    image: "/assets/backgrounds/image.png",
    url: "https://fined.academy",
  },
  googleSiteVerification: "Ep_xJIDaW01ZolEzmJTM566Nw8rpZPQ16uYE3LnwN8w",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        {/* Basic Metadata */}
        <title>{metadata.title}</title>
        <meta
          name="google-site-verification"
          content="Ep_xJIDaW01ZolEzmJTM566Nw8rpZPQ16uYE3LnwN8w"
        />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta
          name="google-site-verification"
          content="Ep_xJIDaW01ZolEzmJTM566Nw8rpZPQ16uYE3LnwN8w"
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:url" content={metadata.og.url} />

        {/* Additional Metadata (Optional) */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
