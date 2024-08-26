import { Inter } from "next/font/google";
import 'react-calendar-timeline-4ef/styles.css';
import '@/styles/calendarTimeline.css';
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
