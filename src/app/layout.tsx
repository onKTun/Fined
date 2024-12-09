import { ReactNode } from "react";
import "src/app/global.css";
import { UnitProvider } from "src/components/UnitContext/UnitContext";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "FIN'ED",
  description: "Financial literacy for all.",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <UnitProvider>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body>
          <div id="root">{children}</div>
        </body>
      </html>
    </UnitProvider>
  );
};

export default RootLayout;
