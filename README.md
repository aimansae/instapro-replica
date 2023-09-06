# Instapro website

![Instapro ](/images/instapro-preview.PNG)

## Welcome! 👋

This is a front-end coding challenge I followed through my mentor, my goal was to create a vebsite from scratch that looks almost 100% the same as [Instapro website](https://www.instapro.it/)


**To do this challenge,  basic understanding of HTML, CSS and JavaScript is required**

## The challenge

The challenge is to build out this this replica that looks as close as possible to the original website



## Deploying the project

This project was deployed through [Netlify](https://www.netlify.com/)

Please find the live version [here](as-instapro-replica.netlify.app)


Set Up

Install Eslint and prettier: 

Eslint is a linting tool that helps developers to detect code quality and potential bugs, it takes care about the logint, and if they follow the best practices
Prettier on the other side takes care about the formatting side (convention with spacing, quotes etc)

In vscode download extensions:
Eslint, Prettier, Error Lens

Download eslint and prettier together: 

Npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node

npm i --save-dev  prettier eslint

Configure  files:
Prettier: https://prettier.io/docs/en/options.html
Create .prettierrc in root directory and addrules here (for example:)


{“singleQuote”:true}

Eslint: https://eslint.org/docs/latest/use/getting-started
Create eslintrc.json (create manually or in terminal add:)

npm init @eslint/config

in .eslintrc.json add rules for prettier

"extends" : ["airbnb", "prettier"]
"plugins": [prettier"]
"rules" : {
"prettier/prettier": "error",
"no-unused-vars": "warn",}

with this eslint AND prettier errors are shown


To set up Next.js app:
npx create-next-app@latest . (in case of new project)

For existing project:
npx create-next-app@latest nextjs-app (create appname)
follow suggestions and questions

Navigate to the Next.js App Directory:

Move into the newly created Next.js app directory:
in terminal: cd instapro-site (the app name)

To run the Next.js development server and view your app, use the following command:

npm run dev

This will open http://localhost:3000 to access the page in the browser

Next Js logics:
in Instapro site directory create new folder:
- components
- styles 
- utils
.env file

- icons and images go in pubblic



Errors
Eslint: parameter children implicity has an any type: 
Children type for Typescript was not specified
FIXED
checked react version, 
in layout.tsx addd import { ReactNode } from 'react';
specified the type for children:ReacNode on line 9 

Error: Module not found: Can't resolve '@styles/global.css'


Fixed:
tsconfig.json, removed / form path and src


Error: Error: Objects are not valid as a React child (found: object with keys {children, params}). If you meant to render a collection of children, use an array instead.

FIXED:
adding proptype first 
type MyComponentProps = {
  children: ReactNode; // ReactNode is a type that can represent any valid React node (e.g., JSX, text, numbers, etc.)
};
added patenthesis
const RootLayout = ({ children }: MyComponentProps)

Prettirt Error: Error related to end of line section
Delete cr: changed vs code setting from CRLF to LF