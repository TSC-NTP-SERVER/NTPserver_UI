import "./globals.css";
import { ChronycProvider } from "@/context/ChronycProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChronycProvider>{children}</ChronycProvider>
      </body>
    </html>
  );
}