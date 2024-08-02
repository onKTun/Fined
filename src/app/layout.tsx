import { ReactNode } from "react";
import "src/index.css";
import { metadata } from "./education/metadata";

interface RootLayoutProps {
  children: ReactNode;
}

export const getMetadata = () =>
  metadata; /* metadata had to be on seperate file to match layout from /education */

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
