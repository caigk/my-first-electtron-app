
import React, { ClassAttributes, EventHandler, SyntheticEvent, useEffect,useRef } from "react";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";

export default function MyEditor(props: { content: string | null, className: any,onChange:EventHandler<any> }) {
  const { content = content || '', className } = props;
  const editor = useRef(null);
  const p = useRef(null);
  function focusEditor() {
    editor.current.focus();
  }
  const rawContent = {
    blocks: [
      {
        text: content,
        type: 'unstyled',
        entityRanges: [],
      },
    ],
    entityMap: {},
  }

  function handleChanged(es: EditorState) {
    const ct = es.getCurrentContent().getPlainText();
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
  const editorState = EditorState.createWithContent(convertFromRaw(rawContent));
  return (
    <div
      ref={p}
      className={className}
      style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
      onClick={focusEditor}
    >
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={handleChanged}

        placeholder="Write something!"
      />
    </div>
  );
}