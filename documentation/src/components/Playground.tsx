import dynamic from "next/dynamic";
import { FC, useState } from "react";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export const Playground: FC<{ initialValue: string }> = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="grid gap-4 grid-cols-2 h-96">
      <MonacoEditor
        value={value}
        onChange={setValue}
        defaultLanguage="html"
        height="30vh"
        language="html"
        theme="vs-dark"
        defaultValue="<!-- Type your code here -->"
        options={{
          minimap: { enabled: false },
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
};
