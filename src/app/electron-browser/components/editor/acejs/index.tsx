
import React, { EventHandler, useEffect, useRef } from "react";
import AceEditor from "react-ace";

require("ace-builds/webpack-resolver");

export default function MyEditor(props: { content: string | null, className: any, onChange: EventHandler<any> }) {
  const { content = content || '', className } = props;

  function handleChanged(ct: string) {
    console.log(ct);
    props.onChange(ct);

  }

  useEffect(() => {
    console.log('effect0 ...');
    return () => {
      console.log('effect1 ...');
    };
  });
  console.log('render...');
  return (
    <div
      className={className}
      style={{ border: "1px solid black", minHeight: "6em", padding:0}}
    >
      <AceEditor
        placeholder="Placeholder Text"
        style={{width:"100%",height:"100%"}}
        mode="markdown"
        theme="github"
        //onLoad={this.onLoad}
        onChange={handleChanged}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={content}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }} />
    </div>
  );
}