import React from "react";

export interface EditorProps {
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

const DEFAULT_URL = "https://editor.suborbital.network/";

const Editor = (props: EditorProps) => {
  return (
    <iframe
      src={`${props.options?.editorUrl || DEFAULT_URL}?builder=${
        props.builder
      }&token=${props.token}&ident=${props.ident}&namespace=${
        props.namespace || "default"
      }&fn=${props.functionName}&template=${props.template}`}
      width={props.options?.width ?? "100%"}
      height={props.options?.height ?? "100%"}
    />
  );
};

export default Editor;
