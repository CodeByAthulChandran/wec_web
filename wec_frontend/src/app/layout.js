import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";


export const metadata = {
  title: "Webeyecraft Technologies",
  description: "Webeyecraft Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
