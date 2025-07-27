# Instapro Website Clone

![Instapro ](/images/instapro-preview.PNG)


## Table of Contents

- [Welcome](#welcome)
- [The Challenge](#the-challenge)
- [Live Deployment](#live-deployment)
- [Project Setup](#project-setup)
- [Folder Structure](#folder-structure)
- [Styling](#styling)
- [Common Errors & Fixes](#common-errors--fixes)
- [Challenges I Faced](#challenges-i-faced)
- [Mentor Feedback](#mentor-feedback)
- [Credit](#credit)

## Welcome!

This is a front-end challenge I completed under the guidance of my mentor.  
The goal was to **recreate the Instapro website** as closely as possible.
 * The original website link is NO longer available as Instapro UI was changed and modified*
 [Instapro website](https://www.instapro.it/)
 
**To do this challenge, basic understanding of HTML, CSS and JavaScript is required**

## The challenge

The task was to build a front-end replica of the Instapro homepage, focusing on:

- Responsive layout
- UI fidelity (pixel-perfect reproduction)
- React/Next.js component structure
- Clean and maintainable styling using Emotion

## Live Deployment

This project was deployed through [Netlify](https://www.netlify.com/). The live site can be found [here](as-instapro-replica.netlify.app).

Please find my GitHub Repo [here](as-instapro-replica.netlify.app).

## Project Setup

[Install Eslint and prettier](https://blog.logrocket.com/using-prettier-eslint-javascript-formatting/):

These tools help maintain code quality and consistent formatting.

#### In VS Code, install extensions:

- ESLint
- Prettier
- Error Lens (optional but helpful)

#### Install dependencies:

```bash
npm install -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node

Run the setup 
npm init @eslint/config
```
Then update .eslintrc.json:
 
{
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "warn"
  }
}

Create a .prettierrc file:

{
  "singleQuote": true,
  "semi": true
}
[Prettier options](https://prettier.io/docs/en/options.html)


Scripts in package.json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write ."
}
Run this to auto-format your project:

```bash
npm run format
```

- Create a Next.js App
If starting fresh:
```bash
npx create-next-app@latest

If adding Next.js to an existing folder:
npx create-next-app@latest instapro-site
cd instapro-site

To run:
npm run dev
Visit http://localhost:3000 in your browser.

```

## Folder Structure

instapro-site/
├── components/
├── styles/
├── utils/
├── public/
│   └── images/
├── .env

## Styling

Used [Emotion](https://emotion.sh/docs/styled) for styling:

```bash
 
npm install @emotion/styled @emotion/react

Import as needed:

import styled from '@emotion/styled';
import { css } from '@emotion/react';
```
For icons such as hamburger bar user [React Icons](For icons such as hamburger bar:) 

```bash

npm install react-icons --save

For font awesome icons: npm install --save font-awesome

Import in Page.js: npm install react-icons --save

For font awesome icons: npm install --save font-awesome

Import in Page.js
```

## Common Errors & Fixes

**Errors:**
- Eslint: parameter children implicitly has an any type: Children type for Typescript was not specified

*Fix:* Add React type:

```bash 
import { ReactNode } from 'react';

type MyComponentProps = {
  children: ReactNode};
  
  ```

- Error: Module not found: Can't resolve '@styles/global.css'

*Fix:*   In tsconfig.json, correct the path (remove extra slashes or prefixes).

-Error: Objects are not valid as a React child (found: object with keys {children, params}). If you meant to render a collection of children, use an array instead.

*Fix:* Make sure you’re not rendering an object directly. Wrap children correctly and use ReactNode.

-Error Prettier: Error related to end of line section

*Fix:*Delete cr: changed vs code setting from CRLF to LF

## Challenges I Faced
During this project, I encountered several challenges that helped me grow as a front-end developer:

- Styled-components: I had only used CSS Modules before, so learning and using styled-components for this project was completely new and a bit tricky at first.

- Layout consistency: Making sure spacing and sizing were consistent across all sections was difficult and required careful planning.

- Responsiveness: One of the biggest challenges was ensuring that the content was responsive and the hero image adapted well to all screen sizes. Eventually, I used a background-image approach to make it scale correctly.

- Positioning & CSS techniques: I improved my understanding of flexbox, vertical scroll handling, and positioning elements (like footers and navbars) across devices.

- Burger menu: Implementing a responsive navbar for smaller screens helped me get familiar with conditional rendering and mobile-friendly UX.

Overall, this project strengthened my skills in responsive design, component-based development, and CSS fundamentals.

## Mentor Feedback  
Remarks from Mentor, after deployment:

- Add a script in your package.json for reformatting the code using prettier.

```bash
"format": "prettier --write ."
Run:

npm run format

```

In package,json add:

"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint",
"format": "prettier --write ."
},

Once you add that script, run: npm run format . 

That way prettier will automatically reformat all the code in your project.

Use npx to run it (preferred for local installs)
If Prettier is only installed locally (as it should be), run:

``` bash
npx prettier --write .

```

## Credits
- Special thanks to my mentor for guiding me through this first challenge and helping me understand layout, responsiveness, and real-world development workflows.