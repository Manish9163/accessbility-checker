import './globals.css';
import { ThemeProvider } from '../../components/ThemeProvider';
import AppShell from '../../components/AppLogin';

export const metadata = {
  title: 'Accessibility Checker - Web Accessibility',
  description: 'Modern accessibility checker with AI-powered insights and real-time monitoring.',
  keywords: 'accessibility, web accessibility, WCAG, compliance, AI',
  authors: [{ name: 'NEON' }],
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
        <ThemeProvider>
          <AppShell>
            {children}
          </AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}