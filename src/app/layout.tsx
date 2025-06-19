import './globals.css';
import { ThemeProvider } from '../../components/ThemeProvider';

export const metadata = {
  title: 'Accessibility Checker - AI-Powered Web Accessibility',
  description: 'Modern accessibility checker with AI-powered insights and real-time monitoring.',
  keywords: 'accessibility, web accessibility, WCAG, compliance, AI',
  authors: [{ name: 'NEON' }], // Replace with your actual author name

};

export const viewport = {
  width: 'device-width',
  'initial-scale': 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        try {
          var theme = localStorage.getItem('theme');
          if (!theme) {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
          if (theme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch (e) {
          document.documentElement.classList.remove('dark');
        }
      })();
    `,
          }}
        />
      </head>
      <body> 
      {/* className="antialiased bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500 overflow-x-hidden">*/}

        <ThemeProvider>
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}