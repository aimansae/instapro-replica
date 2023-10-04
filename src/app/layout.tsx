import { ReactNode } from 'react';
import Head from 'next/head';
import '@styles/global.css'; // to import css for entire app

export const metadata = {
  title: 'Instapro',
  description: 'Looking for a professionals?',
};

type MyComponentProps = {
  children: ReactNode; // ReactNode is a type that can represent any valid React node (e.g., JSX, text, numbers, etc.)
};

const RootLayout = ({ children }: MyComponentProps) => {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
