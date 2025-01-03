import { ReactNode } from "react";
import "src/app/global.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "FIN'ED",
  description: "Financial literacy for all.",
};

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
