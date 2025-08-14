import "./globals.css";
import 'animate.css'; 



export const metadata = {
  title: "ActiveCraft IT",
  description: "Top Web Development Company in India 2025",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
