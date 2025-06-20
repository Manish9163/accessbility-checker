import './globals.css';
import { ThemeProvider } from '../../components/ThemeProvider';
import LoginPage from '../../components/LoginPage';
import React, { useState } from 'react';

export const metadata = {
  title: 'Accessibility Checker - AI-Powered Web Accessibility',
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
  // State to track if user has submitted a URL
  const [submitted, setSubmitted] = React.useState(false);
  const [userUrl, setUserUrl] = React.useState<string | null>(null);

  // Callback for LoginPage
  const handleLoginSubmit = (url: string) => {
    setUserUrl(url);
    setSubmitted(true);
  };

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
          <div className="relative z-10">
            {!submitted ? (
              <LoginPage onSubmit={handleLoginSubmit} />
            ) : (
              // You can pass userUrl to children via context or props if needed
              children
            )}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}