import { Layout } from "~/components/Layout";
import { TRPCReactProvider } from "~/trpc/react";

import "~/app/styles.css";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TRPCReactProvider>
          <Layout>{props.children}</Layout>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
