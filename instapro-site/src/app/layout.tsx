import { ReactNode } from 'react';

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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
