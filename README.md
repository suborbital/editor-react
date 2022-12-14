# Suborbital Code Editor

This project allows you to embed the Suborbital code editor into your React application.

## Setup

Install the library:

```sh
npm install @suborbital/editor-react
```

Import the library:

```ts
import { Editor } from "@suborbital/editor-react";
```

Render the editor:

```tsx
<Editor
  builder="https://mybuilder.com"
  ident="com.acmeco.123"
  functionName="myfunction"
  token="4gSBo8miBWjwXg2rBGHk1tYa"
  template="javascript"
/>
```

You can find the full set of configuration options listed below:

```ts
interface EditorProps {
  /** The public URL of your builder service */
  builder: string;
  /** The identifier used to address your specific user */
  ident: string;
  /** The optional function namespace */
  namespace?: string;
  /** The name of the function */
  functionName: string;
  /** The editor token retrieved from the controlplane service */
  token: string;
  /** The function template to render */
  template: string;
  /** Additional configuration options */
  options?: {
    /** Hide the name of the function in the editor */
    hideName?: boolean;
    /** The public URL of the code editor; defaults to editor.suborbital.network */
    editorUrl?: string;
    /** The width of the code editor */
    width?: number | string;
    /** The height of the code editor */
    height?: number | string;
  };
}
```

## Developing

After an initial `npm install`, build the project with `npm run rollup`. That's it!
