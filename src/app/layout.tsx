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
        {/* <script
          src="https://kit.fontawesome.com/5b2ec3dbf8.js"
          crossOrigin="anonymous"
        ></script> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
