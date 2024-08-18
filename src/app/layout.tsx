import { ReactNode } from "react";
import "src/app/global.css";


import { Amplify } from "aws-amplify";

import outputs from "amplify_outputs.json"; //if file is not here, run ampx sandbox
Amplify.configure(outputs) //configure amplify


interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Fin'ed",
  description: "Web site created with Next.js.",
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
